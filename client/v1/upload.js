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


Upload.photo = function (session, streamOrPath, uploadId) {
    var stream = Helpers.pathToStream(streamOrPath);
    if(!uploadId) uploadId = new Date().getTime();
    // This compresion is just default one
    var compresion = {
        "lib_name": "jt",
        "lib_version": "1.3.0",
        "quality": "92"
    }
    var predictedUploadId = new Date().getTime();
    var filename = "pending_media_"+predictedUploadId+".jpg"
    var request = new Request(session)
    return request.setMethod('POST')
        .setResource('uploadPhoto')                    
        .generateUUID()
        .setData({
            image_compression: JSON.stringify(compresion),
            upload_id: uploadId
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

Upload.video = function(session,videoBufferOrPath,photoStreamOrPath,width,height){
    //Probably not the best way to upload video, best to use stream not to store full video in memory, but it's the easiest
    var predictedUploadId = new Date().getTime();
    var request = new Request(session);
    return Helpers.pathToBuffer(videoBufferOrPath)
        .then(function(buffer){
            var duration = _getVideoDurationMs(buffer);
            return request
            .setMethod('POST')
            .setBodyType('form')
            .setResource('uploadVideo')
            .generateUUID()
            .setData({
                upload_id: predictedUploadId,
                media_type: 2
            })
            .send()
            .then(function(json) {
                return new Upload(session, json);
            })
            .then(function(uploadData){
                //Uploading video to url
                var sessionId = predictedUploadId;// _generateSessionId();
                var chunkLength = 200000;
                var chunks = [];
                for (var i = 0; i < Math.ceil((buffer.length / chunkLength)); i++) {
                    var chunkStart = i * chunkLength;
                    var chunkEnd = (i + 1) * chunkLength;
                    if (chunkEnd > buffer.length) chunkEnd = buffer.length;    //We don't want to be badasses, do we?
                    var chunk = buffer.slice(chunkStart, chunkEnd);
                    chunks.push(chunk)
                }
                return Promise.mapSeries(chunks,function(chunk,i){
                        var chunkStart = i * chunkLength;
                        var chunkEnd = (i + 1) * chunkLength;
                        if (chunkEnd > buffer.length) chunkEnd = buffer.length;
                        var range = 'bytes '+chunkStart+'-'+(chunkEnd-1)+'/'+buffer.length;
                        return _sendChunkedRequest(session,uploadData.params.uploadUrl,uploadData.params.uploadJob,sessionId,chunk,range)
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
                        return Upload.photo(session,photoStreamOrPath,uploadData.uploadId)
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
        .setUrl(url)
        .generateUUID()
        .setHeaders({
            'job': job,
            'Host': 'upload.instagram.com',
            'Session-ID': sessionId,
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': 'attachment; filename="video.mp4"',
            'Content-Length': buffer.length,
            'Content-Range': range
        })
        .transform(function(opts){
            opts.formData.video = buffer;
            return opts;
        })
        .send()
}

function _generateSessionId(){
    var text = "";
    var possible = "abcdef0123456789";

    for( var i=0; i < 32; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}