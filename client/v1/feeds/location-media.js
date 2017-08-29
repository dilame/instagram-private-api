var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function LocationMediaFeed(session, locationId, limit) {
    this.limit = parseInt(limit) || null;
    this.locationId = locationId;
    FeedBase.apply(this, arguments);
}
util.inherits(LocationMediaFeed, FeedBase);

module.exports = LocationMediaFeed;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Exceptions = require('../exceptions');

LocationMediaFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('locationFeed', {
            id: that.locationId,
            maxId: that.getCursor(),
            rankToken: Helpers.generateUUID()
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
        // will throw an error with 500 which turn to parse error
        .catch(Exceptions.ParseError, function(){
            throw new Exceptions.PlaceNotFound();
        })
};