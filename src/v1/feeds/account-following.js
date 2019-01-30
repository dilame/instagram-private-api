var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function AccountFollowingFeed(session, accountId, limit) {
    this.accountId = accountId;
    this.limit = limit || 7500;
    // Should be enought for 7500 records
    this.timeout = 10 * 60 * 1000;
    FeedBase.apply(this, arguments);
}
util.inherits(AccountFollowingFeed, FeedBase);

module.exports = AccountFollowingFeed;
var Request = require('../request');
var Helpers = require('../../../helpers');
var Account = require('../account');

AccountFollowingFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('followingFeed', {
            id: that.accountId,
            maxId: that.getCursor(),
            rankToken: Helpers.generateUUID()
        })
        .send()
        .then(function(data) {
            that.moreAvailable = !!data.next_max_id;
            if (that.moreAvailable)
                that.setCursor(data.next_max_id);
            return _.map(data.users, function (user) {
                return new Account(that.session, user);
            });
        })
};
