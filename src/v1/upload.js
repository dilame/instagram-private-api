import { Request } from '../core/request';
import { Helpers } from '../helpers';

const Resource = require('./resource');
const Promise = require('bluebird');
const camelKeys = require('camelcase-keys');

class Upload extends Resource {
  static photo (session, streamOrPathOrBuffer, uploadId, name, isSidecar) {
    const data = Buffer.isBuffer(streamOrPathOrBuffer)
      ? streamOrPathOrBuffer
      : Helpers.pathToStream(streamOrPathOrBuffer);
    // This compresion is just default one
    const compresion = {
      lib_name: 'jt',
      lib_version: '1.3.0',
      quality: '92',
    };
    const isThumbnail = !!uploadId;
    const predictedUploadId = uploadId || new Date().getTime();
    const filename = `${(name || 'pending_media_') + predictedUploadId}.jpg`;
    const request = new Request(session);

    const fields = {
      image_compression: JSON.stringify(compresion),
      upload_id: predictedUploadId,
    };

    if (isSidecar) {
      fields['is_sidecar'] = 1;
      if (isThumbnail) {
        fields['media_type'] = 2;
      }
    }

    return request
      .setMethod('POST')
      .setResource('uploadPhoto')
      .generateUUID()
      .setData(fields)
      .transform(opts => {
        opts.formData.photo = {
          value: data,
          options: {
            filename,
            contentType: 'image/jpeg',
          },
        };
        return opts;
      })
      .send()
      .then(json => new Upload(session, json));
  }

  static video (session, videoBufferOrPath, photoStreamOrPath, isSidecar, fields) {
    //Probably not the best way to upload video, best to use stream not to store full video in memory, but it's the easiest
    const predictedUploadId = new Date().getTime();
    const request = new Request(session);
    return Helpers.pathToBuffer(videoBufferOrPath).then(buffer => {
      const duration = _getVideoDurationMs(buffer);
      if (duration > 63000) throw new Error(`Video is too long. Maximum: 63. Got: ${duration / 1000}`);
      fields = fields || {};
      fields.upload_id = predictedUploadId;
      if (isSidecar) {
        fields['is_sidecar'] = 1;
      } else {
        fields['media_type'] = 2;
        fields['upload_media_duration_ms'] = Math.floor(duration);
        // Bugfix, when a disproportionate video is upload (e.g. 640x320)
        // fields['upload_media_height'] = 320;
        // fields['upload_media_width'] = 640;
      }
      return request
        .setMethod('POST')
        .setBodyType('form')
        .setResource('uploadVideo')
        .generateUUID()
        .setData(fields)
        .send()
        .then(json => new Upload(session, json))
        .then(uploadData => {
          //Uploading video to url
          const sessionId = _generateSessionId(uploadData.params.uploadId);
          const chunkLength = 204800;
          const chunks = [];
          chunks.push({
            data: buffer.slice(0, chunkLength),
            range: `bytes ${0}-${chunkLength - 1}/${buffer.length}`,
          });
          chunks.push({
            data: buffer.slice(chunkLength, buffer.length),
            range: `bytes ${chunkLength}-${buffer.length - 1}/${buffer.length}`,
          });
          return Promise.mapSeries(chunks, (chunk, i) =>
            _sendChunkedRequest(
              session,
              uploadData.params.uploadUrl,
              uploadData.params.uploadJob,
              sessionId,
              chunk.data,
              chunk.range,
              isSidecar,
            ),
          )
            .then(results => {
              const videoUploadResult = results[results.length - 1];
              return {
                delay: videoUploadResult.configure_delay_ms,
                durationms: duration,
                uploadId: uploadData.params.uploadId,
              };
            })
            .then(uploadData =>
              Upload.photo(session, photoStreamOrPath, uploadData.uploadId, 'cover_photo_', isSidecar).then(
                () => uploadData,
              ),
            );
        });
    });
  }

  static album (session, medias, caption, disableComments) {
    const uploadPromises = [];

    if (medias.length < 2 || medias.length > 10) {
      throw new Error('Invalid album size');
    }

    medias.forEach(media => {
      if (!['photo', 'video'].includes(media.type)) {
        throw new Error(`Invalid media type: ${media.type}`);
      }
      if (!media.data) {
        throw new Error('Data not specified.');
      }
      if (!media.size) {
        throw new Error('Size not specified.');
      }
      if (media.type === 'video') {
        if (!media.thumbnail) {
          throw new Error('Thumbnail not specified.');
        }
      }
      const aspect_ratio = (media.size[0] / media.size[1]).toFixed(2);
      if (aspect_ratio < 0.8 || aspect_ratio > 1.91) {
        throw new Error('Invalid media aspect ratio.');
      }

      if (media.type === 'photo') {
        uploadPromises.push(
          Upload.photo(session, media.data, undefined, undefined, true).then(payload =>
            Promise.resolve(Object.assign({}, { uploadId: payload.params.uploadId }, media)),
          ),
        );
      }
      if (media.type === 'video') {
        uploadPromises.push(
          Upload.video(session, media.data, media.thumbnail, true).then(payload =>
            Promise.resolve(Object.assign({}, payload, media)),
          ),
        );
      }
    });

    return Promise.all(uploadPromises);
  }

  parseParams (json) {
    const hash = camelKeys(json);
    if (json.video_upload_urls && json.video_upload_urls.length) {
      hash.uploadUrl = json.video_upload_urls[0].url;
      hash.uploadJob = json.video_upload_urls[0].job;
    }
    return hash;
  }
}

module.exports = Upload;

function _getVideoDurationMs (buffer) {
  const start = buffer.indexOf(new Buffer('mvhd')) + 17;
  const timeScale = buffer.readUInt32BE(start, 4);
  const duration = buffer.readUInt32BE(start + 4, 4);
  const movieLength = duration / timeScale;

  return movieLength * 1000;
}

function _sendChunkedRequest (session, url, job, sessionId, buffer, range, isSidecar) {
  const headers = {
    job,
    Host: 'upload.instagram.com',
    'Session-ID': sessionId,
    'Content-Type': 'application/octet-stream',
    'Content-Disposition': 'attachment; filename=\\"video.mov\\"',
    'Content-Length': buffer.length,
    'Content-Range': range,
  };
  if (isSidecar) {
    headers['Cookie'] = `sessionid=${sessionId}`;
  }
  return new Request(session)
    .setMethod('POST')
    .setBodyType('body')
    .setUrl(url)
    .generateUUID()
    .setHeaders(headers)
    .transform(opts => {
      opts.body = buffer;
      return opts;
    })
    .send();
}

function _generateSessionId (uploadId) {
  let text = `${uploadId || ''}-`;
  const possible = '0123456789';

  for (let i = 0; i < 9; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
