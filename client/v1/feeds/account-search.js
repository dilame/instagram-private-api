var _ = require('underscore');

function AccountSearchFeed(session, query) {
    this.query = query;
    this.session = session;
}

module.exports = AccountSearchFeed;
var Account = require('../account');
var Request = require('../request');
var Helpers = require('../../../helpers');

AccountSearchFeed.prototype.get = function () {
    var that = this;
    return this.session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(that.session)
                .setMethod('GET')
                .setResource('accountsSearch', {
                    query: that.query,
                    rankToken: rankToken
                })
                .send();
        })
        .then(function(data) {
            return _.map(data.users, function (user) {
                return new Account(that.session, user);
            });
        })
};