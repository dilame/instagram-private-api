var util = require("util");
var _ = require("lodash");
var Resource = require("./resource");
var camelKeys = require('camelcase-keys');


function Hashtag(session, params) { 
    Resource.apply(this, arguments);
}

util.inherits(Hashtag, Resource);
module.exports = Hashtag;

var Request = require('./request');
var Helpers = require('../../helpers');


Hashtag.prototype.parseParams = function (json) {
  var hash = camelKeys(json);
  hash.mediaCount = parseInt(json.media_count);
  if(_.isObject(hash.id))
    hash.id = hash.id.toString();
  return hash;
};


Hashtag.search = function (session, query) {
    return session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(session)
                .setMethod('GET')
                .setResource('hashtagsSearch', {
                    query: query,
                    rankToken: rankToken
                })
                .send();
        })
        .then(function(data) {
            return _.map(data.results, function (hashtag) {
                return new Hashtag(session, hashtag);
            });
        });
};

Hashtag.related = function(session, tag){
    return new Request(session)
        .setMethod('GET')
        .setResource('hashtagsRelated', {
            tag: tag,
            visited: `[{"id":"${tag}","type":"hashtag"}]`,
            related_types: '["hashtag"]'
        })
       .send()
       .then(function(data) {
            return _.map(data.related, function (hashtag) {
                return new Hashtag(session, hashtag);
            });
        });
}

Hashtag.info = function(session, tag){
    return new Request(session)
        .setMethod('GET')
        .setResource('hashtagsInfo', {
            tag: tag
        })
       .send()
       .then(function(hashtag) {
          return new Hashtag(session, hashtag);
       });
}