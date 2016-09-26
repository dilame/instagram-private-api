var _ = require('underscore');

function SelfLikedFeed(session) {
    this.cursor = null;
    this.session = session;
}

module.exports = SelfLikedFeed;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Exceptions = require('../exceptions');

SelfLikedFeed.prototype.setCursor = function (maxId) {
    this.lastMaxId = maxId;
};


SelfLikedFeed.prototype.getCursor = function () {
    return this.cursor;
};


SelfLikedFeed.prototype.isMoreAvailable = function () {
    return this.moreAvailable;
};


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