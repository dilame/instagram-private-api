var Resource = require('./resource');
var util = require("util");
var _ = require("underscore");
var crypto = require('crypto');
var pruned = require('./json-pruned');
var fs = require('fs');
var request = require('request-promise');


function Media(session, params) {
    Resource.apply(this, arguments);
}

util.inherits(Media, Resource);

module.exports = Media;
var Request = require('./request');
var Comment = require('./comment');
var Account = require('./account');
var Location = require('./location');
var Exceptions = require('./exceptions');


Media.prototype.parseParams = function (json) {
    var hash = {};
    var that = this;
    hash.code = json.code;
    hash.id = json.id;
    hash.likeCount = json.like_count;
    hash.hasLiked = json.has_liked;
    hash.hasMoreComments = json.has_more_comments;
    hash.photoOfYou = json.photo_of_you;
    hash.originalWidth = json.original_width;
    hash.commentCount = json.comment_count;
    hash.originalHeight = json.original_height;
    hash.mediaType = json.media_type;
    hash.deviceTimestamp = json.device_timestamp;
    if(json.view_count)
        hash.viewCount = json.view_count;
    if(_.isObject(json.location)) {
        var location = json.location;
        location.location = json.location;
        location.title = location.name;
        location.subtitle = null;

        this.location = new Location(that.session, location);
    }
    if (_.isObject(json.caption))
        hash.caption = json.caption.text;
    hash.takenAt = parseInt(json.taken_at) * 1000;
    if (_.isObject(json.image_versions2))
        hash.images = json.image_versions2.candidates;
    this.comments = _.map(json.comments, function(comment) {
        return new Comment(that.session, comment); 
    });
    this.account = new Account(that.session, json.user);
    return hash;
};


Media.prototype.getParams = function () {
    return _.defaults({
        account: this.account.params,
        comments: _.pluck(this.comments, 'params'),
        location: this.location ? this.location.params : {}
    }, this._params);
};


Media.getById = function (session, id) {
    return new Request(session)
        .setMethod('GET')
        .setResource('mediaInfo', {mediaId: id})
        .send()
        .then(function(json) {
            return new Media(session, json.items[0])
        })
};

Media.getByUrl = function(session, url){
    var self = this;
    return request({
        url: 'https://api.instagram.com/oembed/',
        qs:{url:url},
        json:true
    }).then(function (response) {
        return self.getById(session, response.media_id)
    })
};

Media.likers = function(session, mediaId) {
    return new Request(session)
        .setMethod('GET')
        .setResource('mediaLikes', {mediaId: mediaId})
        .send()
        .then(function(data) {
            return _.map(data.users, function (user) {
                return new Account(session, user);
            });
        });
};


Media.delete = function(session, mediaId) {
    return new Request(session)
        .setMethod('POST')
        .setResource('mediaDeletePhoto', {mediaId: mediaId})
        .setData({
            media_id: mediaId
        })
        .generateUUID()
        .signPayload()
        .send()
        .then(function (json) {
            if(json.did_delete) return;    
            throw new Exceptions.RequestError({
                messaage: 'Not posible to delete medium!'
            })
        })
};

Media.configurePhoto = function (session, uploadId, caption, width, height) {
    if(_.isEmpty(uploadId))
        throw new Error("Upload argument must be upload valid upload id");
    if(!caption) caption = "";    
    if(!width) width = 800;    
    if(!height) height = 800; 
    const CROP = 1;   
    var payload = pruned({
        source_type: "4",
        caption: caption,
        upload_id: uploadId,
        device: session.device.payload,
        edits: {
            crop_original_size:["$width","$height"],
            crop_center: ["$zero","$negativeZero"],
            crop_zoom: "$crop"
        },
        extra: {
            source_width: width,
            source_height: height
        }    
    });
    payload = payload.replace(/\"\$width\"/gi, width.toFixed(1));
    payload = payload.replace(/\"\$height\"/gi, height.toFixed(1));
    payload = payload.replace(/\"\$zero\"/gi, (0).toFixed(1));
    payload = payload.replace(/\"\$negativeZero\"/gi, "-" + (0).toFixed(1));
    payload = payload.replace(/\"\$crop\"/gi, CROP.toFixed(1));
    return new Request(session)
        .setMethod('POST')
        .setResource('mediaConfigure')
        .setData(payload)
        .generateUUID()
        .signPayload()
        .send()
        .then(function(json) {
            return new Media(session, json.media)
        })
};
