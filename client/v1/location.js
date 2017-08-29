var util = require("util");
var _ = require("lodash");
var Resource = require("./resource");
var camelKeys = require('camelcase-keys');


function Location(session, params) {
    Resource.apply(this, arguments);
}

util.inherits(Location, Resource);
module.exports = Location;

var Request = require('./request');
var Helpers = require('../../helpers');
var Media = require('./media');
var Exceptions = require('./exceptions');


Location.getRankedMedia = function (session, locationId) {
  return new Request(session)
      .setMethod('GET')
      .setResource('locationFeed', {
          id: locationId,
          maxId: null,
          rankToken: Helpers.generateUUID()
      })
      .send()
      .then(function(data) {
          return _.map(data.ranked_items, function (medium) {
              return new Media(session, medium);
          });
      })
      // will throw an error with 500 which turn to parse error
      .catch(Exceptions.ParseError, function(){
          throw new Exceptions.PlaceNotFound();
      })
};


Location.prototype.parseParams = function (json) {
    var hash = camelKeys(json);
    hash.address = json.location.address;
    hash.city = json.location.city;
    hash.state = json.location.state;
    hash.id = json.location.id || json.location.pk;
    hash.lat = parseFloat(json.location.lat) || 0;
    hash.lng = parseFloat(json.location.lng) || 0;
    return hash;
};


Location.search = function (session, query) {
    var that = this;
    return session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(session)
                .setMethod('GET')
                .setResource('locationsSearch', {
                    query: query,
                    rankToken: rankToken
                })
                .send();
        })
        .then(function(data) {
            return _.map(data.items, function (location) {
                return new Location(session, location);
            });
        });
};
