var util = require("util");
var _ = require("underscore");
var Resource = require("./resource");
const CONSTANTS = require("./constants");
var Helpers = require('../../helpers');
var Promise = require("bluebird");

function Upload() {
    Resource.apply(this, arguments);
}

util.inherits(Upload, Resource);


module.exports = Upload;
var Exceptions = require('./exceptions');
var Request = require("./request");


Upload.prototype.parseParams = function (params) {
    var hash = {};
    hash.uploadId = params.upload_id;
    if(params.video_upload_urls && params.video_upload_urls.length){
        hash.uploadUrl = params.video_upload_urls[0].url;
        hash.uploadJob = params.video_upload_urls[0].job;
    }
    return hash;
};


Upload.photo = function (session, streamOrPath, uploadId, name) {
    var stream = Helpers.pathToStream(streamOrPath);
    // This compresion is just default one
    var compresion = {
        "lib_name": "jt",
        "lib_version": "1.3.0",
        "quality": "92"
    }
    var predictedUploadId = uploadId || new Date().getTime();
    var filename = (name || "pending_media_")+predictedUploadId+".jpg"
    var request = new Request(session)
    return request.setMethod('POST')
        .setResource('uploadPhoto')                    
        .generateUUID()
        .setData({
            image_compression: JSON.stringify(compresion),
            upload_id: predictedUploadId
        })
        .transform(function(opts){
            opts.formData.photo = {
                value: stream,
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

Upload.video = function(session,videoBufferOrPath,photoStreamOrPath){
    //Probably not the best way to upload video, best to use stream not to store full video in memory, but it's the easiest
    var predictedUploadId = new Date().getTime();
    var request = new Request(session);
    return Helpers.pathToBuffer(videoBufferOrPath)
        .then(function(buffer){
            var duration = _getVideoDurationMs(buffer);
            if(duration > 63000) throw new Error('Video is too long. Maximum: 63. Got: '+duration/1000);
            return request
            .setMethod('POST')
            .setBodyType('form')
            .setResource('uploadVideo')
            .generateUUID()
            .setData({
                upload_id: predictedUploadId,
                media_type: 2,
                upload_media_duration_ms: Math.floor(duration)
            })
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
                        return _sendChunkedRequest(session,uploadData.params.uploadUrl,uploadData.params.uploadJob,sessionId,chunk.data,chunk.range)
                    })
                    .then(function(results){
                        var videoUploadResult = results[results.length-1];
                        //TEMP FIX for global setHeader problem
                        request.removeHeader('job');
                        request.removeHeader('Host');
                        request.removeHeader('Session-ID');
                        request.removeHeader('Content-Type');
                        request.removeHeader('Content-Disposition');
                        request.removeHeader('Content-Length');
                        request.removeHeader('Content-Range');
                        return {
                            delay:videoUploadResult.configure_delay_ms,
                            durationms:duration,
                            uploadId:uploadData.params.uploadId
                        }
                    })
                    .then(function(uploadData){
                        return Upload.photo(session,photoStreamOrPath,uploadData.uploadId,"cover_photo_")
                            .then(function(){
                                return uploadData;
                            })
                    })
            })
    })
}

function _getVideoDurationMs(buffer){
    var start = buffer.indexOf(new Buffer('mvhd')) + 17;
    var timeScale = buffer.readUInt32BE(start, 4);
    var duration = buffer.readUInt32BE(start + 4, 4);
    var movieLength = duration/timeScale;

    return movieLength*1000;
}

function _sendChunkedRequest(session,url,job,sessionId,buffer,range){
    return new Request(session)
        .setMethod('POST')
        .setBodyType('body')
        .setUrl(url)
        .generateUUID()
        .setHeaders({
            'job': job,
            'Host': 'upload.instagram.com',
            'Session-ID': sessionId,
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': 'attachment; filename=\\\"video.mov\\\"',
            'Content-Length': buffer.length,
            'Content-Range': range
        })
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