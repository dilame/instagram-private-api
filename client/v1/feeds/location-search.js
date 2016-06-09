var _ = require('underscore');

function LocationSearchFeed(session, query) {
    this.query = query;
    this.session = session;
}

module.exports = LocationSearchFeed;
var Location = require('../location');
var Helpers = require('../../../helpers');
var Request = require('../request');


LocationSearchFeed.prototype.get = function () {
    var that = this;
    return this.session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(that.session)
                .setMethod('GET')
                .setResource('locationsSearch', {
                    query: that.query,
                    rankToken: rankToken
                })
                .send();
        })
        .then(function(data) {
            return _.map(data.items, function (location) {
                return new Location(that.session, location);
            });
        });
};