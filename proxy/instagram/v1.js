var Client = require('../../client/v1');
var util = require('util');
var Promise = require('bluebird');
var _ = require('underscore');
var requestLog = require('../models/request-log');
var config = require('../config/config');
var addresses = require('./v1/addresses');
var sensitiveGroups = require('./v1/sensitive-groups');
var preprocessor = require('./v1/preprocessor');

function NoValidSession() {
    this.name = "NoValidSession";
}
util.inherits(NoValidSession, Error);


_.each(config.get().interfaces, function(_interface) {
    addresses.register(_interface)
})

Client.Request.prototype._initialize = function(session, group) {
    this._stepDownOnExceptions = [Client.Exceptions.ActionSpamError];
    this._repeatForAllAddresses = false;
}

Client.Request.prototype._ensureValidSession = function(){
    if(!this.session || !(this.session instanceof Client.Session))
        return Promise.reject(new NoValidSession);
    return this.session.getAccountId()
        .catch(Client.Exceptions.CookieNotValidError, function(e) {
            throw new NoValidSession();
        })
}

var originalMergeOptionsFn = Client.Request.prototype._mergeOptions
Client.Request.prototype._mergeOptions = function(opts) {
    var that = this;
    var args = arguments;
    return this._ensureValidSession()
        .then(function(id) {
            var groupName = 'DEFAULT';
            if(_.isString(that._resource)) {
                var sensitiveResource = _.findWhere(sensitiveGroups, {
                    method: that._request.method || opts.method || 'POST',
                    resource: that._resource
                });
                if(_.isObject(sensitiveResource)) {
                    if(sensitiveResource.rotateOnStepDown && !that._repeatForAllAddresses)
                        that.repeatForAllAddressesOnStepDown();
                    groupName = sensitiveResource.group;    
                }
            }
            that._groupAddressKey = id + '_' + groupName;
            that._localAddress = addresses.rankAddress(that._groupAddressKey);
            if(_.isString(that._localAddress))
                that.setLocalAddress(that._localAddress);
            return originalMergeOptionsFn.apply(that, args);
        })
        .catch(NoValidSession, function(e) {
            return originalMergeOptionsFn.apply(that, args);
        })
}



Client.Request.prototype.stepDownOnException = function(exceptions) {
    if(exceptions === false)
        return this._stepDownOnExceptions = [];
    this._stepDownOnExceptions = _.isArray(exceptions) ? exceptions : [exceptions];
    return this;
}

Client.Request.prototype.repeatForAllAddressesOnStepDown = function(exceptions) {
    this._repeatForAllAddresses = true;
    this._repeatForCount = addresses.count();
    return this;
}


Client.Request.prototype._proxyAPILog = function (response, request, attemp, error) {
    var that = this;
    if(!response || !_.isFunction(response.toJSON)) 
        return Promise.resolve(response); 
    if(!error && (!this._resource || !_.contains(requestLog.SENSITIVE_RESOURCES, this._resource)))
        return Promise.resolve(response);   
    if(!_.isObject(request.headers))
        request.headers = {};
    return this._ensureValidSession()
        .catch(NoValidSession, function() {
            return 0; // User with id 0 is nobody!
        })
        .then(function(id) {
            return [id, that.session.cookieStore.getCookies()]
        })
        .spread(function(id, cookies) {
            request = _.clone(_.pick(request, 'method', 'url', 'headers', 'formData', 
                'form', 'json', 'cookies', 'localAddress'));
            request.headers = request.headers || {};
            request.headers.cookies = _.clone(cookies);
            return requestLog.create({
                instagramId: id, 
                request: request, 
                response: _.pick(response.toJSON(), 'statusCode', 'headers', 'body'), 
                attemp: attemp, 
                resource: that._resource || 'unknown'
            });
        })
        .then(function() {
            return response;
        })
};


Client.Request.prototype.beforeParse = function (response, request, attemp) {
    return this._proxyAPILog(response, request, attemp, false);
};


Client.Request.prototype.beforeError = function(error, request, attemp) {
    if(!config.get().suppressLog)
        console.info("Request Error", error.stack)
    return this._proxyAPILog(error.response, request, attemp, true)
        .then(function() {
            throw error;
        });
};


Client.Request.prototype.afterError = function(error, request, attemp) {
    var shouldStepDown = false;
    _.each(this._stepDownOnExceptions, function(Exception) {
        if(shouldStepDown) return;
        shouldStepDown = (error instanceof Exception);
    })
    if(shouldStepDown && this._localAddress) {
        addresses.stepDownInPriority(this._localAddress, this._groupAddressKey);
        if(this._repeatForAllAddresses && this._repeatForCount > 1) {
            this._repeatForCount -= 1;
            delete request['localAddress'];
            return this.send(request, attemp);
        }
    }
    throw error;
};



const proxyUrl = config.get().proxy;
if(proxyUrl) Client.Request.setProxy(proxyUrl);


Client.Session.createFromUsername = function (device, username) {
    var path = config.getCookiesPath(username + '.json');
    return Client.Session.createFromPath(device, path)
};


var sessionCreateOrigin = Client.Session.create;
Client.Session.create = function (device, username, password) {
    var path = config.getCookiesPath(username + '.json');
    return sessionCreateOrigin(device, path, username, password);
};

Client.Session.createEmpty = function (device, username) {
    var path = config.getCookiesPath(username + '.json');
    return new Client.Session(device, path);
};

Client.Images = {};
Client.Images.resize = preprocessor.resize;


module.exports = Client;