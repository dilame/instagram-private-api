var _ = require('underscore');
var FeedBase = require('./feed-base');

function SelfLikedFeed(session) {
    this.session = session;
    FeedBase.apply(this, arguments);
}
_.extend(SelfLikedFeed.prototype, FeedBase.prototype);

module.exports = SelfLikedFeed;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Exceptions = require('../exceptions');


SelfLikedFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('selfLikedFeed', {
            maxId: that.getCursor()
        })
        .send()
        .then(function(data) {
            var nextMaxId = data.next_max_id ? data.next_max_id.toString() : data.next_max_id;
            that.moreAvailable = data.more_available && !!nextMaxId;
            if (that.moreAvailable)
                that.setCursor(nextMaxId);
            return _.map(data.items, function (medium) {
                return new Media(that.session, medium);
            });
        })
};