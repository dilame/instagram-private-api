var routes = require('./routes');
var Request = require('./request');
var _ = require('underscore');
var util = require('util');
var Resource = require('./resource');


function Media(session, params) {
    Resource.apply(this, arguments);
}

module.exports = Media;
util.inherits(Media, Resource)

var routes = require('./routes');
var Request = require('./request');
var Comment = require('./comment');
var Account = require('./account');
var Upload = require('./upload');



Media.prototype.parseParams = function(json) {
    var that = this;
    this.account = new Account(this.session, json.account)
    this.comments = _.map(json.comments, function(comment) {
        return new Comment(that.session, comment);
    })
    return json;
}


Media.create = function(session, upload, caption) {
    if(!(upload instanceof Upload))
        throw new Error("Upload must be instance of Upload")
    var url = routes.getUrl(session.getServer(), routes.URL.MEDIA);
    return Request.postWithSession(session, url, {
        json: {uploadId: upload.params.uploadId, caption: caption}
    })
    .then(function (medium) {
        return new Media(session, medium);   
    })
}


Media.delete = function(session, mediaId) {
    var url = routes.getUrl(session.getServer(), routes.URL.MEDIA);
    return Request.deleteWithSession(session, url, {
        json: {id: mediaId}
    })
    .then(function (medium) {
        return new Media(session, medium);   
    })
}


Media.show = function(session, mediaId) {
    var url = routes.getUrl(session.getServer(), routes.URL.MEDIA_SHOW, { id: mediaId });
    return Request.getWithSession(session, url, {})
        .then(function (media) {
            return new Media(session, media);   
        })
}


Media.forAccount = function(session, accountId, limit) {
    var url = routes.getUrl(session.getServer(), routes.URL.MEDIA_FOR_USER, { id: accountId });
    var opts = _.isNumber(limit) ? {qs: {limit: limit}} : {};
    return Request.getWithSession(session, url, opts)
        .then(function (json) {
            json.media = _.map(json.media, function(media) {
                return new Media(session, media);   
            });
            return json;
        })
}


Media.forHashtag = function(session, hashtag, cursor) {
    var url = routes.getUrl(session.getServer(), routes.URL.MEDIA_FOR_TAG, { tag: hashtag });
    var opts = _.isString(cursor) ? {qs: {cursor: cursor}} : {};
    return Request.getWithSession(session, url, opts)
        .then(function (json) {
            json.media = _.map(json.media, function(media) {
                return new Media(session, media);   
            });
            return json;
        })
}


Media.forLocation = function(session, locationId, cursor) {
    var url = routes.getUrl(session.getServer(), routes.URL.MEDIA_FOR_LOCATION, { id: locationId });
    var opts = _.isString(cursor) ? {qs: {cursor: cursor}} : {};
    return Request.getWithSession(session, url, opts)
        .then(function (json) {
            json.media = _.map(json.media, function(media) {
                return new Media(session, media);   
            });
            return json;
        })
}


Media.liked = function(session, cursor) {
    var url = routes.getUrl(session.getServer(), routes.URL.MEDIA_LIKED);
    var opts = _.isString(cursor) ? {qs: {cursor: cursor}} : {};
    return Request.getWithSession(session, url, opts)
        .then(function (json) {
            json.media = _.map(json.media, function(media) {
                return new Media(session, media);   
            });
            return json;
        })
}


Media.prototype.delete = function () {
    return Media.delete(this.session, this.id);
}