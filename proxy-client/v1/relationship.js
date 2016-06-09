var Resource = require('./resource');
var _ = require('underscore');
var util = require('util');
var Promise = require('bluebird');


function Relationship(session, params) {
    Resource.apply(this, arguments)
}

module.exports = Relationship;
util.inherits(Relationship, Resource)

var routes = require('./routes');
var Request = require('./request');


Relationship.create = function(session, accountId) {
    var url = routes.getUrl(session.getServer(), routes.URL.RELATIONSHIPS);
    return Request.postWithSession(session, url, {json: {id: accountId}})
        .then(function(status) {
            return new Relationship(session, status)
        })
};

Relationship.destroy = function(session, accountId) {
    var url = routes.getUrl(session.getServer(), routes.URL.RELATIONSHIPS);
    return Request.deleteWithSession(session, url, {json: {id: accountId}})
        .then(function(status) {
            return new Relationship(session, status)
        })
};


Relationship.get = function (session, accountId) {
    var url = routes.getUrl(session.getServer(), routes.URL.RELATIONSHIPS_SHOW, { id: accountId });
    return Request.getWithSession(session, url)
        .then(function(status) {
            return new Relationship(session, status)
        })
};


Relationship.getMany = function (session, usersIds) {
    var url = routes.getUrl(session.getServer(), routes.URL.RELATIONSHIPS_SHOW_MANY, {});
    return Request.postWithSession(session, url, {json: {usersIds: usersIds}})
        .then(function(relationships) {
            return _.map(relationships, function(relationship) {
                return new Relationship(session, relationship)    
            })
        })
};