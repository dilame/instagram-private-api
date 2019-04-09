var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function LocationMediaFeedSections(session, locationId, limit) {
    this.limit = parseInt(limit) || null;
    this.locationId = locationId;
    FeedBase.apply(this, arguments);
}
util.inherits(LocationMediaFeedSections, FeedBase);

module.exports = LocationMediaFeedSections;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Exceptions = require('../exceptions');

LocationMediaFeedSections.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('POST')
        .setResource('locationFeedSections', {
            id: that.locationId
        }).setData({
					max_id: that.cursor || "",
					rank_token: Helpers.generateUUID(),
					tab: 'ranked'
        })
        .send()
        .then(function(data) {
					that.moreAvailable = data.more_available && !!data.next_max_id;
					if (!that.moreAvailable && !_.isEmpty(data.ranked_items) && !that.getCursor())
						throw new Exceptions.OnlyRankedItemsError;
					if (that.moreAvailable)
						that.setCursor(data.next_max_id);
						
					var sections = []

					_.map(data.sections, function (section) {
						_.map(section.layout_content.medias, function (item) {
							sections.push(new Media(that.session, item.media))
						});
					});

					return _.compact(sections);
					
        })
        // will throw an error with 500 which turn to parse error
        .catch(Exceptions.ParseError, function(){
            throw new Exceptions.PlaceNotFound();
        })
};