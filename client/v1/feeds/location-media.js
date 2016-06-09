var _ = require('underscore');

function LocationMediaFeed(session, locationId) {
    this.lastMaxId = null;
    this.moreAvailable = null;
    this.locationId = locationId;
    this.session = session;
}

module.exports = LocationMediaFeed;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Exceptions = require('../exceptions');

LocationMediaFeed.prototype.setMaxId = function (maxId) {
    this.lastMaxId = maxId;
};


LocationMediaFeed.prototype.getMaxId = function () {
    return this.lastMaxId;
};


LocationMediaFeed.prototype.isMoreAvailable = function () {
    return this.moreAvailable;
};

LocationMediaFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('locationFeed', {
            id: that.locationId,
            maxId: that.getMaxId(),
            rankToken: Helpers.generateUUID()
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
        // will throw an error with 500 which turn to parse error
        .catch(Exceptions.ParseError, function(){
            throw new Exceptions.PlaceNotFound();
        })
};