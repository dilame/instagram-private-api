var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function TimelineFeed(session, limit) {
    this.limit = parseInt(limit) || null;
    FeedBase.apply(this, arguments);
}
util.inherits(TimelineFeed, FeedBase);

module.exports = TimelineFeed;
var Request = require('../request');
var Helpers = require('../../../helpers');
var Media = require('../media');


TimelineFeed.prototype.get = function () {
    var that = this;
    return this.session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(that.session)
                .setMethod('GET')
                .setResource('timelineFeed', {
                    maxId: that.getCursor(),
                    rankToken: rankToken
                })
                .send();
        })
        .then(function(data) {
            that.moreAvailable = data.more_available;
            var media = _.compact(_.map(data.feed_items, function(item){
                var medium = item.media_or_ad;
                if(!medium || medium.injected) return false;
                return new Media(that.session, medium);
            }));
            if (that.moreAvailable)
                that.setCursor(data.next_max_id);
            return media;    
        });
};