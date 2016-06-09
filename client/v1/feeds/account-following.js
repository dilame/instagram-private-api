var _ = require('underscore');

function AccountFollowingFeed(session, accountId, limit) {
    this.lastMaxId = null;
    this.accountId = accountId;
    this.session = session;
    this.limit = limit || 7500;
    this.allFollowings = [];
    // Should be enought for 7500 records
    this.timeout = 10 * 60 * 1000;
}

module.exports = AccountFollowingFeed;
var Request = require('../request');
var Helpers = require('../../../helpers');
var Account = require('../account');

AccountFollowingFeed.prototype.setMaxId = function (maxId) {
    this.lastMaxId = maxId;
};

AccountFollowingFeed.prototype.getMaxId = function () {
    return this.lastMaxId;
};


AccountFollowingFeed.prototype.isMoreAvailable = function () {
    return !!this.lastMaxId;
};


AccountFollowingFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('followingFeed', {
            id: that.accountId,
            maxId: that.getMaxId(),
            rankToken: Helpers.generateUUID()
        })
        .send()
        .then(function(data) {
            that.setMaxId(data.next_max_id);
            return _.map(data.users, function (user) {
                return new Account(that.session, user);
            });
        })
};


AccountFollowingFeed.prototype.all = function () {
    var that = this;
    return this.get().delay(1500).then(function (followings) {
        that.allFollowings = that.allFollowings.concat(followings);
        var exceedLimit = false;
        if (that.limit && that.allFollowings.length > that.limit)
            exceedLimit = true; 
        if (followings.length > 0 && that.isMoreAvailable() && !exceedLimit) {
            return that.all()
        } else {
            return that.allFollowings;
        }
    })
};

AccountFollowingFeed.prototype.allSafe = function () {
    return this.all().timeout(this.timeout);
};