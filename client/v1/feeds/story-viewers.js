var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

// Only works with the stories of the logged user
function StoryViewers(session, mediaId) {
    this.session = session;
    this.mediaId = mediaId;    
    FeedBase.apply(this, arguments);
}
util.inherits(StoryViewers, FeedBase);

module.exports = StoryViewers;
var Media = require('../media');
var Request = require('../request');
var Account = require('../account');


StoryViewers.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('storyViewers', {
            mediaId: that.mediaId,
            maxId: that.getCursor()
        })
        .send()
        .then(function(data) {            
            var nextMaxId = data.next_max_id ? data.next_max_id.toString() : data.next_max_id;
            that.moreAvailable = !!nextMaxId;            
            if (that.moreAvailable)
                that.setCursor(nextMaxId);
            return _.map(data.users, function (user) {
                return new Account(that.session, user);
            });
        })
};