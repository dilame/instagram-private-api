var util = require("util");
var _ = require("lodash");
var fs = require("fs");
var Request = require('../request');
var routes = require('../routes');
var Helpers = require('../../../helpers');
var CONSTANTS = require('../constants');


function WebRequest() {
    Request.apply(this, arguments);
    this._request.headers = _.extend(_.clone(this._request.headers), {
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
    });
    this._jsonEndpoint = false;
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


WebRequest.prototype.setJSONEndpoint = function(json) {
    this.setOptions({
        qs: {'__a': '1'}
    })
    this._jsonEndpoint = true;
    return this;
};



WebRequest.prototype.setCSRFToken = function(token) {
    this.setHeaders({
        'x-csrftoken': token
    });
    return this;
};


WebRequest.prototype.setHost = function(host) {
    if(!host) host = CONSTANTS.WEB_HOSTNAME;
    this.setHeaders({
        'Host': host,
    });
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
            if(that._jsonEndpoint) {
                var beforeParse = _.bind(that.beforeParse, that)
                var parseMiddleware = _.bind(that.parseMiddleware, that)
                return new Promise(function(resolve, reject) {
                    return resolve(beforeParse(response))
                })
                .then(parseMiddleware);          
            }
            return response;
        })
        .then(function(response) {
            if(that._jsonEndpoint) return response.body;
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
                throw new Exceptions.NotFoundError(response);
            throw err;
        })
        .catch(function(error) {
            return that.afterError(error, options, 0)
        })
}
