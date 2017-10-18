var util = require("util");
var _ = require("lodash");
var Resource = require("./resource");
var camelKeys = require('camelcase-keys');

function ThreadItem(session, params) {
    Resource.apply(this, arguments);
}

util.inherits(ThreadItem, Resource);
module.exports = ThreadItem;

var Account = require('./account');
var Media = require('./media');
var Location = require('./location');
var Link = require('./link');
var Placeholder = require('./placeholder');
var Hashtag = require('./hashtag');


ThreadItem.prototype.parseParams = function (json) {
    var hash = camelKeys(json);
    hash.id = json.item_id || json.id;
    hash.type = json.item_type;

    if(hash.type === "link"){
        hash.link = 'link';
        this.link = new Link(this.session, json.link)
    }

    if(hash.type === "placeholder"){
        hash.placeholder = 'placeholder';
        this.placeholder = new Placeholder(this.session, json.placeholder)
    }
    if (hash.type === "text") {
        hash.text = json.text;
    }
    if (hash.type === "media") {
        hash.media = json.media.image_versions2.candidates;
    }
    if (hash.type === "media_share") {
        hash.type = 'mediaShare';
        this.mediaShare = new Media(this.session, json.media_share)
    }
    if (hash.type === "action_log") {
        hash.type = 'actionLog';
        hash.actionLog = json.action_log;
    }
    if (hash.type === "profile") {
        this.profile = new Account(this.session, json.profile);
        hash.profileMediaPreview = _.map(json.preview_medias || [], function (medium) {
            return {
                id: medium.id.toString(),
                images: medium.image_versions2.candidates
            }
        })
    }
    // @Todo media preview just like profile for location and hashtag
    if (hash.type === "location") {
        var location = json.location;
        location.location = Object.create(json.location);
        location.title = location.name;
        location.subtitle = null;
        this.location = new Location(this.session, location);
    }
    if (hash.type === "hashtag") {
        this.hashtag = new Hashtag(this.session, json.hashtag);
    }
    hash.accountId = json.user_id;
    hash.created = parseInt(json.timestamp / 1000);
    return hash;
};


ThreadItem.prototype.getParams = function() {
    var params = _.clone(this._params);
    if(params.type == 'link')
        params.link = this.link.params;
    if(params.type == 'placeholder')
        params.placeholder = this.placeholder.params;
    if(params.type == 'mediaShare')
        params.mediaShare = this.mediaShare.params;
    if(params.type == 'profile')
        params.profile = this.profile.params;
    if(params.type == 'location')
        params.location = this.location.params;
    if(params.type == 'hashtag')
        params.hashtag = this.hashtag.params;
    return params;
}
