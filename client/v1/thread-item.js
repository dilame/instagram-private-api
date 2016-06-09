var util = require("util");
var _ = require("underscore");
var Resource = require("./resource");


function ThreadItem(session, params) {
    Resource.apply(this, arguments);
}

util.inherits(ThreadItem, Resource);
module.exports = ThreadItem;

var Account = require('./account');
var Media = require('./media');
var Location = require('./location');
var Hashtag = require('./hashtag');


ThreadItem.prototype.parseParams = function (json) {
    var hash = {};
    hash.id = json.item_id || json.id;
    hash.type = json.item_type;
    if (hash.type == "text") {
        hash.text = json.text;
    }
    if (hash.type == "media") {
        hash.media = json.media.image_versions2.candidates;
    }
    if (hash.type == "media_share") {
        hash.type = 'mediaShare';
        hash.mediaShare = new Media(this.session, json.media_share)
    }
    if (hash.type == "action_log") {
        hash.type = 'actionLog';
        hash.actionLog = json.action_log;
    }
    if (hash.type == "profile") {
        hash.profile = new Account(this.session, json.profile);
        hash.profileMediaPreview = _.map(json.preview_medias || [], function (medium) {
            return {
                id: medium.id.toString(),
                images: medium.image_versions2.candidates
            }
        })
    }
    // @Todo media preview just like profile for location and hashtag
    if (hash.type == "location") {
        var location = json.location;
        location.location = json.location;
        location.title = location.name;
        location.subtitle = null;
        hash.location = new Location(this.session, location);
    }
    if (hash.type == "hashtag") {
        hash.hashtag = new Hashtag(this.session, json.hashtag);
    }
    hash.accountId = json.user_id;
    hash.created = parseInt(json.timestamp / 1000);
    return hash;
};


ThreadItem.prototype.getParams = function() {
    var params = _.clone(this._params);
    if(params.type == 'mediaShare')
        params.mediaShare = this._params.mediaShare.params;
    if(params.type == 'profile')
        params.profile = this._params.profile.params;
    if(params.type == 'location')
        params.location = this._params.location.params;
    if(params.type == 'hashtag')
        params.hashtag = this._params.hashtag.params;
    return params;
}