var _ = require('underscore');

function AccountFollowersFeed(session, accountId) {
    this.lastMaxId = null;
    this.accountId = accountId;
    this.session = session;
}

module.exports = AccountFollowersFeed;
var Request = require('../request');
var Helpers = require('../../../helpers');
var Account = require('../account');

AccountFollowersFeed.prototype.setMaxId = function (maxId) {
    this.lastMaxId = maxId;
};

AccountFollowersFeed.prototype.getMaxId = function () {
    return this.lastMaxId;
};

AccountFollowersFeed.prototype.isMoreAvailable = function() {
    return !!this.lastMaxId;
};

AccountFollowersFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('followersFeed', {
            id: that.accountId,
            maxId: that.lastMaxId
        })
        .send()
        .then(function(data) {
            if (data.next_max_id)
                that.setMaxId(data.next_max_id);
            return _.map(data.users, function (user) {
                return new Account(that.session, user);
            });
        })
};