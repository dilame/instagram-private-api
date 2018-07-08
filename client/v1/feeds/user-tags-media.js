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
                    that.moreAvailable = !!data.next_max_id;
                    if (that.moreAvailable) {
                        that.setCursor(data.next_max_id);
                    }
                    return _.map(data.items, function (medium) {
                        return new Media(that.session, medium);
                    });
                })
        });
};
