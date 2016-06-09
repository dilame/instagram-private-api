var util = require("util");
var _ = require("underscore");
var Resource = require("./resource");
const CONSTANTS = require("./constants");
var Helpers = require('../../helpers');

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