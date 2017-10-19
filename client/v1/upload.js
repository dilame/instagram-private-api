var util = require("util");
var _ = require("lodash");
var Resource = require("./resource");
var Helpers = require('../../helpers');
var Promise = require("bluebird");
var camelKeys = require('camelcase-keys');

function Upload() {
    Resource.apply(this, arguments);
}

util.inherits(Upload, Resource);


module.exports = Upload;
var Exceptions = require('./exceptions');
var Request = require("./request");


Upload.prototype.parseParams = function (json) {
    var hash = camelKeys(json);
    if(json.video_upload_urls && json.video_upload_urls.length){
        hash.uploadUrl = json.video_upload_urls[0].url;
        hash.uploadJob = json.video_upload_urls[0].job;
    }
    return hash;
};


Upload.photo = function (session, streamOrPathOrBuffer, uploadId, name, isSidecar) {
    var data = Buffer.isBuffer(streamOrPathOrBuffer) ? streamOrPathOrBuffer : Helpers.pathToStream(streamOrPathOrBuffer);
    // This compresion is just default one
    var compresion = {
        "lib_name": "jt",
        "lib_version": "1.3.0",
        "quality": "92"
    }
    var isThumbnail = !!uploadId;
    var predictedUploadId = uploadId || new Date().getTime();
    var filename = (name || "pending_media_")+predictedUploadId+".jpg"
    var request = new Request(session)

    var fields = {
        image_compression: JSON.stringify(compresion),
        upload_id: predictedUploadId
    };

    if(isSidecar) {
        fields['is_sidecar'] = 1;
        if(isThumbnail) {
            fields['media_type'] = 2;
        }
    }

    return request.setMethod('POST')
        .setResource('uploadPhoto')                    
        .generateUUID()
        .setData(fields)
        .transform(function(opts){
            opts.formData.photo = {
                value: data,
                options: {
                    filename: filename,
                    contentType: 'image/jpeg'
                }
            }
            return opts;
        })
        .send()
        .then(function(json) {
            return new Upload(session, json);    
        })
}

Upload.video = function(session,videoBufferOrPath,photoStreamOrPath,isSidecar){
    //Probably not the best way to upload video, best to use stream not to store full video in memory, but it's the easiest
    var predictedUploadId = new Date().getTime();
    var request = new Request(session);
    return Helpers.pathToBuffer(videoBufferOrPath)
        .then(function(buffer){
            var duration = _getVideoDurationMs(buffer);
            if(duration > 63000) throw new Error('Video is too long. Maximum: 63. Got: '+duration/1000);
            var fields = {
                upload_id: predictedUploadId
            };
            if(isSidecar) {
                fields['is_sidecar'] = 1;
            } else {
                fields['media_type'] = 2;
                fields['upload_media_duration_ms'] = Math.floor(duration);
                fields['upload_media_height'] = 720;
                fields['upload_media_width'] = 720;
            }
            return request
            .setMethod('POST')
            .setBodyType('form')
            .setResource('uploadVideo')
            .generateUUID()
            .setData(fields)
            .send()
            .then(function(json) {
                return new Upload(session, json);
            })
            .then(function(uploadData){
                //Uploading video to url
                var sessionId = _generateSessionId(uploadData.params.uploadId);
                var chunkLength = 204800;
                var chunks = [];
                chunks.push({
                    data:buffer.slice(0, chunkLength),
                    range:'bytes '+0+'-'+(chunkLength-1)+'/'+buffer.length
                });
                chunks.push({
                    data:buffer.slice(chunkLength, buffer.length),
                    range:'bytes '+chunkLength+'-'+(buffer.length-1)+'/'+buffer.length
                });
                return Promise.mapSeries(chunks,function(chunk,i){
                        return _sendChunkedRequest(session,uploadData.params.uploadUrl,uploadData.params.uploadJob,sessionId,chunk.data,chunk.range,isSidecar)
                    })
                    .then(function(results){
                        var videoUploadResult = results[results.length-1];
                        return {
                            delay:videoUploadResult.configure_delay_ms,
                            durationms:duration,
                            uploadId:uploadData.params.uploadId
                        }
                    })
                    .then(function(uploadData){
                        return Upload.photo(session,photoStreamOrPath,uploadData.uploadId,"cover_photo_", isSidecar)
                            .then(function(){
                                return uploadData;
                            })
                    })
            })
    })
};

Upload.album = function (session, medias, caption, disableComments) {
    var uploadPromises = [];

    if(medias.length < 2 || medias.length > 10) {
        throw new Error('Invalid album size');
    }

    medias.forEach(function (media) {
        if(['photo', 'video'].indexOf(media.type) === -1) {
            throw new Error('Invalid media type: ' + media.type);
        }
        if(!media.data) {
            throw new Error('Data not specified.');
        }
        if(!media.size) {
            throw new Error('Size not specified.');
        }
        if(media.type === 'video') {
            if(!media.thumbnail) {
                throw new Error('Thumbnail not specified.');
            }
        }
        var aspect_ratio = (media.size[0] / media.size[1]).toFixed(2);
        if(aspect_ratio < 0.8 || aspect_ratio > 1.91) {
            throw new Error('Invalid media aspect ratio.');
        }

        if(media.type === 'photo') {
            uploadPromises.push(
                Upload.photo(session, media.data, undefined, undefined, true)
                    .then(function (payload) {
                        return Promise.resolve(Object.assign({}, {uploadId: payload.params.uploadId}, media));
                    })
            )
        }
        if(media.type === 'video') {
            uploadPromises.push(
                Upload.video(session, media.data, media.thumbnail, true)
                    .then(function (payload) {
                        return Promise.resolve(Object.assign({}, payload, media));
                    })
            )
        }
    });

    return Promise.all(uploadPromises);
};

function _getVideoDurationMs(buffer){
    var start = buffer.indexOf(new Buffer('mvhd')) + 17;
    var timeScale = buffer.readUInt32BE(start, 4);
    var duration = buffer.readUInt32BE(start + 4, 4);
    var movieLength = duration/timeScale;

    return movieLength*1000;
}

function _sendChunkedRequest(session,url,job,sessionId,buffer,range,isSidecar){
    var headers = {
        'job': job,
        'Host': 'upload.instagram.com',
        'Session-ID': sessionId,
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename=\\\"video.mov\\\"',
        'Content-Length': buffer.length,
        'Content-Range': range
    };
    if(isSidecar) {
        headers['Cookie'] = 'sessionid=' + sessionId;
    }
    return new Request(session)
        .setMethod('POST')
        .setBodyType('body')
        .setUrl(url)
        .generateUUID()
        .setHeaders(headers)
        .transform(function(opts){
            opts.body = buffer;
            return opts;
        })
        .send()
}

function _generateSessionId(uploadId){
    var text = (uploadId || "")+'-';
    var possible = "0123456789";

    for( var i=0; i < 9; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}