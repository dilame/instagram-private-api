var _ = require('underscore');

function TimelineFeed(session) {
    this.cursor = null;
    this.moreAvailable = null;
    this.session = session;
}

module.exports = TimelineFeed;
var Request = require('../request');
var Helpers = require('../../../helpers');
var Media = require('../media');


TimelineFeed.prototype.setCursor = function (maxId) {
    this.cursor = maxId;
};

TimelineFeed.prototype.getCursor = function () {
    return this.cursor;
};

TimelineFeed.prototype.isMoreAvailable = function () {
    return !!this.moreAvailable;
};


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