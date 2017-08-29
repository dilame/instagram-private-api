var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function TaggedMediaFeed(session, tag, limit) {
    this.tag = tag;
    this.limit = parseInt(limit) || null;
    FeedBase.apply(this, arguments);
}
util.inherits(TaggedMediaFeed, FeedBase);

module.exports = TaggedMediaFeed;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Exceptions = require('../exceptions');

TaggedMediaFeed.prototype.get = function () {
    var that = this;
    return this.session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(that.session)
                .setMethod('GET')
                .setResource('tagFeed', {
                    tag: that.tag,
                    maxId: that.getCursor(),
                    rankToken: rankToken
                })
                .send()
                .then(function(data) {
                    that.moreAvailable = data.more_available && !!data.next_max_id;
                    if (!that.moreAvailable && !_.isEmpty(data.ranked_items) && !that.getCursor())
                        throw new Exceptions.OnlyRankedItemsError;
                    if (that.moreAvailable)
                        that.setCursor(data.next_max_id);
                    return _.map(data.items, function (medium) {
                        return new Media(that.session, medium);
                    });
                })
        });
};
