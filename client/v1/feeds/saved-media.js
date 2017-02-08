var _ = require('underscore');
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
      .setResource('savedFeed')
      .generateUUID()
      .setData({})
      .signPayload()
      .send()
      .then(function(data) {
        that.moreAvailable = data.more_available;
        var lastOne = _.last(data.items);
        if (that.moreAvailable && lastOne) {
            that.setCursor(lastOne.id);
        }
        return _.map(data.items, function (medium) {
            return new Media(that.session, medium.media);
        });
      })
};
