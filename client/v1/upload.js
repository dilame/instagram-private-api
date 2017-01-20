var util = require("util");
var _ = require("underscore");
var Resource = require("./resource");
const CONSTANTS = require("./constants");
var Helpers = require('../../helpers');
var toArray = require('stream-to-array');
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


Upload.photo = function (session, streamOrPath) {
    var stream = Helpers.pathToStream(streamOrPath);
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

Upload.video = function (session, streamOrPath,width,height) {
    var stream = Helpers.pathToStream(streamOrPath);
    var predictedUploadId = new Date().getTime();
    var filename = "video.mp4";
    var request = new Request(session)
    return _getVideoDurationMs(stream)
        .spread(function(duration,fileLength){
            return request
                .setMethod('POST')
                .setBodyType('form')
                .setResource('uploadVideo')
                .generateUUID()
                .setData({
                    upload_id: predictedUploadId,
                    media_type: 2,
                    upload_media_duration_ms: duration,
                    upload_media_width: width || 720,
                    upload_media_height: height || 720
                })
                .send()
                .then(function(json) {
                    return new Upload(session, json);
                })
                .then(function(uploadData){
                    //Uploading video to url
                    stream = Helpers.pathToStream(streamOrPath);    //Updating stream since old one is destroyed
                    var request = new Request(session)
                    return request
                        .setMethod('POST')
                        .setUrl(uploadData.params.uploadUrl)
                        .generateUUID()
                        .setHeaders({
                            'job': uploadData.params.uploadJob,
                            'Host': 'upload.instagram.com',
                            'Session-ID': _generateSessionId(),
                            'Content-Type': 'application/octet-stream',
                            'Content-Disposition': 'attachment; filename="'+filename+'"',
                            'Content-Length': fileLength
                        })
                        .transform(function(opts){
                            opts.formData.video = stream;
                            return opts;
                        })
                        .send()
                        .then(function(json) {
                            //TEMP FIX for global setHeader problem
                            request.removeHeader('job');
                            request.removeHeader('Host');
                            request.removeHeader('Session-ID');
                            request.removeHeader('Content-Type');
                            request.removeHeader('Content-Disposition');
                            request.removeHeader('Content-Length');
                            return {
                                delay:json.configure_delay_ms,
                                durationms:duration,
                                uploadId:uploadData.params.uploadId
                            }
                        })
                })
    })
}

function _getVideoDurationMs(stream){
    return new Promise(function(resolve,reject){
         toArray(stream)
            .then(function(parts) {
                const buffers = parts
                    .map(part => util.isBuffer(part) ? part : Buffer.from(part));
                return Buffer.concat(buffers);
            })
            .then(function(buffer){
                var start = buffer.indexOf(new Buffer('mvhd')) + 17;
                var timeScale = buffer.readUInt32BE(start, 4);
                var duration = buffer.readUInt32BE(start + 4, 4);
                var movieLength = duration/timeScale;

                return resolve([movieLength*1000,buffer.length]);
            })
    })
}

function _generateSessionId(){
    var text = "";
    var possible = "abcdef0123456789";

    for( var i=0; i < 32; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}