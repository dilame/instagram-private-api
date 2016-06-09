var Resource = require('./resource');
var util = require('util');
var _ = require('underscore');

function Location(session, params) {
    Resource.apply(this, arguments);
}

module.exports = Location;
util.inherits(Location, Resource);

var routes = require('./routes');
var Request = require('./request');

Location.search = function (session, name) {
    var url = routes.getUrl(session.getServer(), routes.URL.LOCATIONS_SEARCH);
    return Request.postWithSession(session, url, {json: {location: name}})
        .then(function (locations) {
            return _.map(locations, function(location) {
                return new Location(session, location); 
            })
        })
};
