var util = require("util");
var _ = require("underscore");
var Resource = require("./resource");


function Location(session, params) { 
    Resource.apply(this, arguments);
}

util.inherits(Location, Resource);
module.exports = Location;

var Request = require('./request');


Location.prototype.parseParams = function (json) {
    var hash = {};
    hash.title = json.title;
    hash.subtitle = json.subtitle;
    hash.address = json.location.address;
    hash.city = json.location.city;
    hash.state = json.location.state;
    hash.id = json.location.id || json.location.pk;
    hash.lat = parseFloat(json.lat) || 0;
    hash.lng = parseFloat(json.lng) || 0;
    return hash;
};