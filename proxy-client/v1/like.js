var _ = require('underscore');
var util = require('util');
var Resource = require('./resource');


function Like(session, params) {
    Resource.apply(this, arguments);
}

module.exports = Like;
util.inherits(Like, Resource);

var routes = require('./routes');
var Request = require('./request');


Like.create = function(session, mediaId) {
    var url = routes.getUrl(session.getServer(), routes.URL.LIKES_FOR_MEDIUM, {id: mediaId});
    return Request.postWithSession(session, url, {json: {}})
        .then(function (like) {
            return new Like(session, like);
        })
}