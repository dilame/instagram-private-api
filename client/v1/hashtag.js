var util = require("util");
var _ = require("underscore");
var Resource = require("./resource");


function Hashtag(session, params) { 
    Resource.apply(this, arguments);
}

util.inherits(Hashtag, Resource);
module.exports = Hashtag;

var Request = require('./request');


Hashtag.prototype.parseParams = function (json) {
  var hash = {};
  hash.mediaCount = parseInt(json.media_count);
  hash.name = json.name;
  hash.id = json.id;
  if(_.isObject(hash.id))
    hash.id = hash.id.toString();
  return hash;
};