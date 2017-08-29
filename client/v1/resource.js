var EventEmitter = require('events').EventEmitter;
var util = require("util");
var _ = require('lodash');
var camelKeys = require('camelcase-keys');

function InstagramResource(session, params) {
    EventEmitter.call(this);
    var Session = require("./session");
    if (!(session instanceof Session))
        throw new Error("Argument `session` is not instace of Session");
    this._session = session;
    this._params = {};
    this.setParams(_.isObject(params) ? params : {});
}

util.inherits(InstagramResource, EventEmitter);
module.exports = InstagramResource;

var Request = require("./request");

Object.defineProperty(InstagramResource.prototype, "params", {
    get: function() { return this.getParams() }
});

Object.defineProperty(InstagramResource.prototype, "session", {
    get: function() { return this._session }
});


InstagramResource.prototype.parseParams = function(params) {
    // Override this to parse instagram shit
    return params;
};


InstagramResource.prototype.setParams = function(params) {
    if (!_.isObject(params))
        throw new Error("Method `setParams` must have valid argument");
    params = this.parseParams(params);
    if (!_.isObject(params))
        throw new Error("Method `parseParams` must return object");
    this._params = params;
    if(params.id) this.id = params.id;
    return this;
};

InstagramResource.prototype.getParams = function() {
    return this._params;
};
    

InstagramResource.prototype.request = function() {
    return new Request(this._session);
};





