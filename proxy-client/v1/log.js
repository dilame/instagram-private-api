var _ = require('underscore');
var util = require('util');
var Resource = require('./resource');


function Log(session, params) {
    Resource.apply(this, arguments);
}

module.exports = Log;
util.inherits(Log, Resource);

var routes = require('./routes');
var Request = require('./request');

Log.prototype.parseParams = function(json) {
    var hash = _.clone(json);
    hash.id = _.isNumber(json.instagramId) && !_.isNaN(json.instagramId) 
        ? json.instagramId : undefined;
    return hash;
}


Log.flush = function(session, limit) {
    var url = routes.getUrl(session.getServer(), routes.URL.LOGS_FLUSH);
    return Request.getWithSession(session, url, {qs: {limit: limit}})
        .then(function (logs) {
            return _.map(logs, function(log) {
                return new Log(session, log);
            })
        })
}