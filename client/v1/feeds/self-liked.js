var _ = require('underscore');

function SelfLikedFeed(session) {
    this.session = session;
}

module.exports = SelfLikedFeed;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Exceptions = require('../exceptions');

SelfLikedFeed.prototype.setMaxId = function (maxId) {
    this.lastMaxId = maxId;
};


SelfLikedFeed.prototype.getMaxId = function () {
    return this.lastMaxId;
};


SelfLikedFeed.prototype.isMoreAvailable = function () {
    return this.moreAvailable;
};


SelfLikedFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('selfLikedFeed', {
            maxId: that.getMaxId()
        })
        .send()
        .then(function(data) {
            var nextMaxId = data.next_max_id ? data.next_max_id.toString() : data.next_max_id;
            that.moreAvailable = data.more_available && !!nextMaxId;
            if (that.moreAvailable)
                that.setMaxId(nextMaxId);
            return _.map(data.items, function (medium) {
                return new Media(that.session, medium);
            });
        })
};