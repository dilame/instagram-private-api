var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function SavedFeed(session, limit) {
    this.timeout = 10 * 60 * 1000; // 10 minutes
    this.limit = limit;
    FeedBase.apply(this, arguments);
}
util.inherits(SavedFeed, FeedBase);

module.exports = SavedFeed;
var Media = require('../media');
var Request = require('../request');

SavedFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('POST')
        .setResource('savedFeed', {
            maxId: that.cursor,
        })
        .generateUUID()
        .setData({})
        .signPayload()
        .send()
        .then(function(data) {
            that.moreAvailable = data.more_available;
            if (that.moreAvailable && data.next_max_id) {
                that.setCursor(data.next_max_id);
            }
            return _.map(data.items, function (medium) {
                return new Media(that.session, medium.media);
            });
        })
};
