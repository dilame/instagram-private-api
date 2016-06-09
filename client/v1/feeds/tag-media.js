var _ = require('underscore');

function TagMediaFeed(session, tag) {
    this.lastMaxId = null;
    this.moreAvailable = null;
    this.tag = tag;
    this.session = session;
}

module.exports = TagMediaFeed;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Exceptions = require('../exceptions');


TagMediaFeed.prototype.setMaxId = function (maxId) {
    this.lastMaxId = maxId;
};


TagMediaFeed.prototype.getMaxId = function () {
    return this.lastMaxId;
};


TagMediaFeed.prototype.isMoreAvailable = function () {
    return this.moreAvailable;
};


TagMediaFeed.prototype.get = function () {
    var that = this;
    return this.session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(that.session)
                .setMethod('GET')
                .setResource('tagFeed', {
                    tag: that.tag,
                    maxId: that.getMaxId(),
                    rankToken: rankToken
                })
                .send()
                .then(function(data) {
                    that.moreAvailable = data.more_available && !!data.next_max_id;
                    if (!that.moreAvailable && !_.isEmpty(data.ranked_items) && !that.getMaxId())
                        throw new Exceptions.OnlyRankedItemsError;
                    if (that.moreAvailable)
                        that.setMaxId(data.next_max_id);
                    return _.map(data.items, function (medium) {
                        return new Media(that.session, medium);
                    });
                })
        });
};