var _ = require('underscore');
var util = require('util');
var Resource = require('./resource');

function Hashtag(session, params) {
    Resource.apply(this, arguments);
}

module.exports = Hashtag;
util.inherits(Hashtag, Resource);

var routes = require('./routes');
var Request = require('./request');


Hashtag.prototype.toString = function () {
    return this.params.name.toString();
};


Hashtag.search = function (session, name) {
    var url = routes.getUrl(session.getServer(), routes.URL.HASHTAGS_SEARCH);
    return Request.postWithSession(session, url, {json: {tag: name}})
        .then(function (hashtags) {
            return _.map(hashtags, function (hashtag) {
                return new Hashtag(session, hashtag);
            })
        })
};
