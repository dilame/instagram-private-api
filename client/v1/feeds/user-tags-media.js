var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function UserTagsMediaFeed(session, accountId, limit) {
    this.accountId = accountId;
    this.timeout = 10 * 60 * 1000; // 10 minutes
    this.limit = limit;
    FeedBase.apply(this, arguments);
}
util.inherits(UserTagsMediaFeed, FeedBase);

module.exports = UserTagsMediaFeed;
var Media = require('../media');
var Request = require('../request');

UserTagsMediaFeed.prototype.get = function () {
    var that = this;
    return this.session.getAccountId()
        .then(function() {
            return new Request(that.session)
                .setMethod('GET')
                .setResource('userTagsFeed', {
                    id: that.accountId,
                    maxId: that.getCursor()
                })
                .send()
                .then(function(data) {
                    that.moreAvailable = data.more_available;
                    var lastOne = _.last(data.items);
                    if (that.moreAvailable && lastOne) {
                        that.setCursor(lastOne.id);
                    }
                    return _.map(data.items, function (medium) {
                        return new Media(that.session, medium);
                    });
                })
        });
};
