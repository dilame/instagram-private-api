var routes = require('./routes');
var Request = require('./request');
var _ = require('underscore');
var util = require('util');
var Resource = require('./resource');
var Helpers = require('../../helpers');


function Upload(session, params) {
    Resource.apply(this, arguments);
}

module.exports = Upload;
util.inherits(Upload, Resource)

var routes = require('./routes');
var Request = require('./request');


Upload.photo = function(session, image) {
    var data = Helpers.dataToRequestOption(image, 'picture');
    var url = routes.getUrl(session.getServer(), routes.URL.UPLOAD_PHOTO);
    return Request.postWithSession(session, url, {
        formData: { picture: data }
    })
    .then(function (upload) {
        return new Upload(session, upload); 
    })
};
