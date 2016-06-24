var util = require("util");
var _ = require("underscore");
var fs = require("fs");
var Request = require('../request');
var routes = require('../routes');
var Helpers = require('../../../helpers');
var camelize = require('underscore.string/camelize');
var CONSTANTS = require('../constants');


function WebRequest() {
    Request.apply(this, arguments);
    this._request.headers = _.extend(_.clone(this._request.headers), {
        'Host': CONSTANTS.WEB_HOSTNAME,
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
    });
    delete this._request.headers['X-IG-Connection-Type'];
    delete this._request.headers['X-IG-Capabilities'];
}

util.inherits(WebRequest, Request);

module.exports = WebRequest;
var Exceptions = require('../exceptions');
var Session = require('../session');
var Device = require('../device');


WebRequest.prototype.setResource = function(resource, data) {
    this._resource = resource;
    this.setUrl(routes.getWebUrl(resource, data));
    return this;
};


WebRequest.prototype.setDevice = function(device) {
    if(!(device instanceof Device))
        throw new Error("`device` parametr must be instance of `Device`") 
    this._device = device;
    this.setHeaders({
        'User-Agent': device.userAgent()
    });
    return this;
};


WebRequest.prototype.setSession = function(session) {
    if(!(session instanceof Session))
        throw new Error("`session` parametr must be instance of `Session`")
    this._session = session;
    this.setHeaders({
        'x-csrftoken': session.CSRFToken
    });
    this.setOptions({
        jar: session.jar
    });
    if(session.device)
        this.setDevice(session.device);
    return this;
};


WebRequest.prototype.send = function (options) {
    var that = this;
    return this._mergeOptions(options)
        .then(function(opts) {
            return [opts, that._prepareData()];    
        })
        .spread(function(opts, data){
            opts = _.defaults(opts, data);
            return that._transform(opts);
        })
        .then(function(opts) { 
            options = opts;
            return [Request.requestClient(options), options]
        })
        .spread(function(response, options) {
            return response;
        })
        .catch(function(error) {
            return that.beforeError(error, options, 0)
        })
        .catch(function (err) {
            if(!err || !err.response)
                throw err;    
            var response = err.response;
            if (response.statusCode == 404)
                throw new Exceptions.NotFoundError();
            throw err;
        })
        .catch(function(error) {
            return that.afterError(error, options, 0)
        })
}
