var _ = require('underscore');
var util = require('util');

var routes = require('./routes');
var Request = require('./request');

module.exports = function(session, isSingup) {
    var url = routes.getUrl(session.getServer(), routes.URL.DISCOVER, { 
        isSingup: isSingup.toString() });
    var opts = _.isString(cursor) ? { qs: { cursor: cursor } } : {};
    return Request.getWithSession(session, url, opts)
        .then(function (discover) {
            return _.map(discover, function(a){
                a.account = new Account(session, a.account);
                return a;
            })
        })
};
