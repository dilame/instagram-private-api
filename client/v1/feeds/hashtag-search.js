var _ = require('underscore');

function HashtagSearchFeed(session, query) {
    this.query = query;
    this.session = session;
}

module.exports = HashtagSearchFeed;
var Hashtag = require('../hashtag');
var Helpers = require('../../../helpers');
var Request = require('../request');


HashtagSearchFeed.prototype.get = function () {
    var that = this;
    return this.session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(that.session)
                .setMethod('GET')
                .setResource('hashtagsSearch', {
                    query: that.query,
                    rankToken: rankToken
                })
                .send();
        })
        .then(function(data) {
            return _.map(data.results, function (user) {
                return new Hashtag(that.session, user);
            });
        });
};
