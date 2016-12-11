var _ = require('underscore');

function AccountFollowersFeed(session, accountId, limit) {
    this.cursor = null;
    this.moreAvailable = null;
    this.accountId = accountId;
    this.session = session;
    this.limit = limit || 7500;
    this.allFollowers = [];
    // Should be enought for 7500 records
    this.timeout = 10 * 60 * 1000;
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

AccountFollowersFeed.prototype.all = function () {
    var that = this;
    return this.get().delay(1500).then(function (followings) {
        that.allFollowers = that.allFollowers.concat(followings);
        var exceedLimit = false;
        if (that.limit && that.allFollowers.length > that.limit)
            exceedLimit = true;
        if (followings.length > 0 && that.isMoreAvailable() && !exceedLimit) {
            return that.all()
        } else {
            return that.allFollowers;
        }
    })
};

AccountFollowersFeed.prototype.allSafe = function () {
    return this.all().timeout(this.timeout);
};
