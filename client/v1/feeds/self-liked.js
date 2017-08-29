var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function SelfLikedFeed(session, limit) {
    this.session = session;
    this.limit = parseInt(limit) || null;
    FeedBase.apply(this, arguments);
}
util.inherits(SelfLikedFeed, FeedBase);

module.exports = SelfLikedFeed;
var Media = require('../media');
var Request = require('../request');


SelfLikedFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('selfLikedFeed', {
            maxId: that.getCursor()
        })
        .send()
        .then(function(data) {
            var nextMaxId = data.next_max_id ? data.next_max_id.toString() : data.next_max_id;
            that.moreAvailable = data.more_available && !!nextMaxId;
            if (that.moreAvailable)
                that.setCursor(nextMaxId);
            return _.map(data.items, function (medium) {
                return new Media(that.session, medium);
            });
        })
};