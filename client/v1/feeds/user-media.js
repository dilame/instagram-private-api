var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function UserMediaFeed(session, accountId, limit) {
    this.accountId = accountId;
    this.timeout = 10 * 60 * 1000; // 10 minutes
    this.limit = limit;
    FeedBase.apply(this, arguments);
}
util.inherits(UserMediaFeed, FeedBase);

module.exports = UserMediaFeed;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Account = require('../account');


UserMediaFeed.prototype.get = function () {
    var that = this;
    return this.session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(that.session)
                .setMethod('GET')
                .setResource('userFeed', {
                    id: that.accountId,
                    maxId: that.getCursor(),
                    rankToken: rankToken
                })
                .send()
                .then(function(data) {
                    that.moreAvailable = data.more_available;
                    var lastOne = _.last(data.items);
                    if (that.moreAvailable && lastOne)
                        that.setCursor(lastOne.id);
                    return _.map(data.items, function (medium) {
                        return new Media(that.session, medium);
                    });
                })
        });
};
