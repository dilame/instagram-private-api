var Resource = require('./resource');
var util = require("util");
var _ = require("underscore");
var crypto = require('crypto');
var pruned = require('./json-pruned');
var fs = require('fs');
var request = require('request-promise');
var Promise = require("bluebird");


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
    hash.webLink = "https://www.instagram.com/p/" + json.code + "/"

    if(json.video_duration)
        hash.videoDuration = json.video_duration;
    if(json.filter_type)
        hash.filterType = json.filter_type;
    if(json.has_audio)
        hash.hasAudio = json.has_audio;
    if(json.view_count)
        hash.viewCount = json.view_count;
    if(_.isObject(json.location)) {
        var location = json.location;
        location.location = json.location;
        location.title = location.name;
        location.subtitle = null;
        this.location = new Location(that.session, location);
    }
    if (json.media_type === 2) {
        hash.video = {
            versions: json.video_versions,
            hasAudio: json.has_audio,
            duration: json.video_duration
        }
    }
    if (_.isObject(json.caption))
        hash.caption = json.caption.text;
    hash.takenAt = parseInt(json.taken_at) * 1000;
    if (_.isObject(json.image_versions2))
        hash.images = json.image_versions2.candidates;
    if (_.isArray(json.video_versions))
        hash.videos = json.video_versions;
    this.previewComments = _.map(json.preview_comments, function(comment) {
        return new Comment(that.session, comment);
    });
    // backward compability
    this.comments = this.previewComments;
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

Media.edit = function(session, mediaId, caption, userTags) {
    var requestPayload = {
        media_id: mediaId,
        caption_text: caption
    };

    if (userTags) {
        requestPayload.usertags = userTags;
    }

    return new Request(session)
        .setMethod('POST')
        .setResource('mediaEdit', {mediaId: mediaId})
        .setData(requestPayload)
        .generateUUID()
        .signPayload()
        .send()
        .then(function (json) {
            if(json.media.caption_is_edited) {
                return new Media(session, json.media);
            }
            throw new Exceptions.RequestError({
                messaage: 'Edit media not successful!'
            });
        });
};

Media.configurePhoto = function (session, uploadId, caption, width, height) {
    if(_.isEmpty(uploadId))
        throw new Error("Upload argument must be upload valid upload id");
    if(!caption) caption = "";
    if(!width) width = 800;
    if(!height) height = 800;
    const CROP = 1;
    return session.getAccountId()
        .then(function(accountId){
        var payload = pruned({
            source_type: "4",
            caption: caption,
            upload_id: uploadId,
            _uid:accountId.toString(),
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
            .setBodyType('form')
            .setData(JSON.parse(payload))
            .generateUUID()
            .signPayload()
            .send()
            .then(function(json) {
                console.log(json);
                return new Media(session, json.media)
            })
    })
};

Media.configureVideo = function (session, uploadId, caption, durationms, delay) {
    if(_.isEmpty(uploadId))
        throw new Error("Upload argument must be upload valid upload id");
    if(typeof(durationms)==='undefined')
        throw new Error("Durationms argument must be upload valid video duration");
    var duration = durationms/1000;
    if(!caption) caption = "";
    if(!delay || typeof delay != "number") delay = 6500;
    return Promise.delay(delay)
        .then(function(){
            return session.getAccountId()
        })
        .then(function(accountId){
            var payload = pruned({
                "filter_type": "0",
                "source_type": "3",
                "video_result": "deprecated",
                "_uid":accountId.toString(),
                "caption": caption,
                "upload_id": uploadId.toString(),
                "device":{
                    "manufacturer":session.device.info.manufacturer,
                    "model":session.device.info.model,
                    "android_version":session.device._api,
                    "android_release":session.device._release
                },
                "length": duration,
                "clips": [
                    {
                        "length": duration,
                        "source_type": "3",
                        "camera_position": "back"
                    }
                ],
                "audio_muted": false,
                "poster_frame_index": 0
            });

            return new Request(session)
                .setMethod('POST')
                .setResource('videoConfigure')
                .setBodyType('form')
                .setData(JSON.parse(payload))
                .generateUUID()
                .signPayload()
                .send()
                .then(function(json) {
                    return new Media(session, json.media)
                })
                .catch(Exceptions.TranscodeTimeoutError,function(error){
                    //Well, we just want to repeat our request. Dunno why this is happening and we should not let our users deal with this crap themselves.
                    return Media.configureVideo(session,uploadId,caption,durationms,delay);
                })
    })
};
