var _ = require('underscore');

function AccountFollowersFeed(session, accountId) {
    this.cursor = null;
    this.moreAvailable = null;
    this.accountId = accountId;
    this.session = session;
}

module.exports = AccountFollowersFeed;
var Request = require('../request');
var Helpers = require('../../../helpers');
var Account = require('../account');

AccountFollowersFeed.prototype.setCursor = function (cursor) {
    this.cursor = cursor;
};

AccountFollowersFeed.prototype.getCursor = function () {
    return this.cursor;
};

AccountFollowersFeed.prototype.isMoreAvailable = function() {
    return !!this.moreAvailable;
};

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