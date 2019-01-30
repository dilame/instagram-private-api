var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function AccountFollowersFeed(session, accountId, limit) {
    this.accountId = accountId;
    this.limit = limit || Infinity;
    this.timeout = 10 * 60 * 1000;
    FeedBase.apply(this, arguments);
}
util.inherits(AccountFollowersFeed, FeedBase);

module.exports = AccountFollowersFeed;
var Request = require('../request');
var Account = require('../account');

AccountFollowersFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('followersFeed', {
            id: that.accountId,
            maxId: that.cursor
        })
        .send()
        .then(function(data) {
            that.moreAvailable = !!data.next_max_id;
            if (that.moreAvailable) {
                that.setCursor(data.next_max_id);
            }
            return _.map(data.users, function (user) {
                return new Account(that.session, user);
            });
        })
};