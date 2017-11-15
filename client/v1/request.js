var _ = require("lodash");
var Promise = require("bluebird");
var request = require('request-promise');
var JSONbig = require('json-bigint');
var Agent = require('socks5-https-client/lib/Agent');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

function Request(session) {
    this._id = _.uniqueId();
    this._url = null;
    this._signData = false;
    this._request = {};
    this._request.method = 'GET';
    this._request.data = {};
    this._request.bodyType = 'formData';
    this._request.options = {
        gzip: true 
    };
    this._request.headers=_.extend({},Request.defaultHeaders);
    this.attemps = 2;
    if(session) {
        this.session = session;            
    } else {
        this.setData({_csrftoken: 'missing'});
    }      
    this._initialize.apply(this, arguments);    
    this._transform = function(t){ return t };
}

module.exports = Request;


var signatures = require('./signatures');
var Device = require('./device');
var Exceptions = require('./exceptions');
var routes = require('./routes');
var Helpers = require('../../helpers');
var CONSTANTS = require('./constants');
var Session = require('./session');

Request.defaultHeaders = {
    'X-IG-Connection-Type': 'WIFI',
    'X-IG-Capabilities': '3QI=',
    'Accept-Language': 'en-US',
    'Host': CONSTANTS.HOSTNAME,
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Connection': 'Close'
};


Request.requestClient = request.defaults({});

Request.setTimeout = function (ms) {
    var object = { 'timeout': parseInt(ms) };
    Request.requestClient = request.defaults(object);
}

Request.setProxy = function (proxyUrl) {
    if(!Helpers.isValidUrl(proxyUrl))
        throw new Error("`proxyUrl` argument is not an valid url")
    var object = { 'proxy': proxyUrl };    
    Request.requestClient = request.defaults(object);
}

Request.setSocks5Proxy = function (host, port) {
    var object = { agentClass: Agent,
    agentOptions: {
        socksHost: host, // Defaults to 'localhost'.
        socksPort: port // Defaults to 1080.
    }};
    Request.requestClient = request.defaults(object);
}

Object.defineProperty(Request.prototype, "session", {
    get: function() { 
        return this._session 
    },
    
    set: function(session) {
        this.setSession(session);    
    }
});

Object.defineProperty(Request.prototype, "device", {
    get: function() { 
        return this._device 
    },
    
    set: function(device) {
        this.setDevice(device);    
    }
});


Object.defineProperty(Request.prototype, "url", {
    get: function() { 
        return this._url 
    },
    
    set: function(url) {
        this.setUrl(url); 
    }
});


Request.prototype._initialize = function() {
    // Easier for inheritence
};


Request.prototype.setOptions = function(options, override) {
    this._request.options = override ? 
        _.extend(this._request.options, options || {}) :
        _.defaults(this._request.options, options || {});
    return this;
};


Request.prototype.setMethod = function(method) {
    method = method.toUpperCase();
    if(!_.includes(['POST', 'GET', 'PATCH', 'PUT', 'DELETE'], method))
        throw new Error("Method `"+ method + "` is not valid method");
    this._request.method = method;
    return this;
};


Request.prototype.setData = function(data, override) {
    if(_.isEmpty(data)){
        this._request.data = {};
        return this;
    }
    if(_.isString(data)) {
        this._request.data = data;
        return this;
    }
    _.each(data, function(val, key) {
        data[key] = val && val.toString && !_.isObject(val) ? 
            val.toString() : val;
    })
    this._request.data = override ? 
        data : _.extend(this._request.data, data || {});
    return this;
};


Request.prototype.setBodyType = function(type) {
    if(!_.includes(['form', 'formData', 'json', 'body'], type))
        throw new Error("`bodyType` param must be and form, formData, json or body")
    this._request.bodyType = type;
    return this;
};


Request.prototype.signPayload = function() {
    this._signData = true;
    return this;
};


Request.prototype.transform = function(callback) {
    if(!_.isFunction(callback))
        throw new Error("Transform must be an valid function")
    this._transform = callback;
    return this;
};


Request.prototype.generateUUID = function() {
    this.setData({
        _uuid: Helpers.generateUUID()
    })
    return this;
};


Request.prototype.setHeaders = function(headers) {
    this._request.headers = _.extend(this._request.headers, headers || {});
    return this;
};


Request.prototype.removeHeader = function(name) {
    delete this._request.headers[name];
    return this;
};


Request.prototype.setUrl = function(url) {
    if(!_.isString(url) || !Helpers.isValidUrl(url))
        throw new Error("The `url` parameter must be valid url string");
    this._url = url;    
    return this;
};


Request.prototype.setResource = function(resource, data) {
    this._resource = resource;
    this.setUrl(routes.getUrl(resource, data));
    return this;
};


Request.prototype.setLocalAddress = function(ipAddress) {
    this.setOptions({localAddress: ipAddress}, true)
    return this;
};


Request.prototype.setCSRFToken = function(token) {
    this.setData({
        _csrftoken: token,
    });
    return this;
};


Request.prototype.setSession = function(session) {
    if(!(session instanceof Session))
        throw new Error("`session` parametr must be instance of `Session`")
    this._session = session;
    this.setCSRFToken(session.CSRFToken);
    this.setOptions({
        jar: session.jar
    });
    if(session.device)
        this.setDevice(session.device);
    if(session.proxyUrl)
        this.setOptions({proxy: session.proxyUrl});
    return this;
};


Request.prototype.setDevice = function(device) {
    if(!(device instanceof Device))
        throw new Error("`device` parametr must be instance of `Device`") 
    this._device = device;
    this.setHeaders({
        'User-Agent': device.userAgent()
    });
    this.setData({
        device_id: device.id
    });
    return this;
};


Request.prototype.signData = function () {
    var that = this;
    if(!_.includes(['POST', 'PUT', 'PATCH', 'DELETE'], this._request.method))
        throw new Error("Wrong request method for signing data!");
    return signatures.sign(this._request.data)
        .then(function (data) {
            that.setHeaders({
                'User-Agent': that.device.userAgent(data.appVersion)
            });
            return {
                signed_body: data.signature + "." + data.payload,
                ig_sig_key_version: data.sigKeyVersion
            }
        });
};


Request.prototype._prepareData = function() {
    var that = this;
    return new Promise(function(resolve, reject){
        if(that._request.method == 'GET') 
            return resolve({})
        if(that._signData) {
            that.signData().then(function(data){
                var obj = {};
                obj[that._request.bodyType] = data;
                resolve(obj);
            }, reject)
        } else {
            var obj = {};
            obj[that._request.bodyType] = that._request.data;
            resolve(obj);
        }  
    })    
};


Request.prototype._mergeOptions = function(options) {
    var options = _.defaults({
        method: this._request.method,
        url: this.url,
        resolveWithFullResponse: true,
        headers: this._request.headers
    }, options || {}, this._request.options);
    return Promise.resolve(options);
};


Request.prototype.parseMiddleware = function (response) {
    if(response.req._headers.host==='upload.instagram.com' && response.statusCode===201){
        var loaded = /(\d+)-(\d+)\/(\d+)/.exec(response.body);
        response.body = {status:"ok",start:loaded[1],end:loaded[2],total:loaded[3]};
        return response;
    }
    try {
        response.body = JSONbig.parse(response.body);
        return response;
    } catch (err) {
        throw new Exceptions.ParseError(response, this);
    }
};


Request.prototype.errorMiddleware = function (response) {
    response = this.parseMiddleware(response);
    var json = response.body;
    if (json.spam)
        throw new Exceptions.ActionSpamError(json);
    if (json.message == 'challenge_required')
        throw new Exceptions.CheckpointError(json, this.session);
    if (json.message == 'login_required')
        throw new Exceptions.AuthenticationError("Login required to process this request");
    if (json.error_type == 'sentry_block')
        throw new Exceptions.SentryBlockError(json);
    if (response.statusCode===429 || _.isString(json.message) && json.message.toLowerCase().indexOf('too many requests') !== -1)
        throw new Exceptions.RequestsLimitError();
    if (_.isString(json.message) && json.message.toLowerCase().indexOf('not authorized to view user') !== -1) 
        throw new Exceptions.PrivateUserError();
    throw new Exceptions.RequestError(json);
};


// If you need to perform loging or something like that!
// will also accept promise
Request.prototype.beforeParse = function (response, request, attemps) {
    return response;
}

Request.prototype.beforeError = function (error, request, attemps) {
    throw error;
}

Request.prototype.afterError = function (error, request, attemps) {
    throw error;
}


Request.prototype.send = function (options, attemps) {
    var that = this;
    if (!attemps) attemps = 0;
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
            return [Request.requestClient(options), options, attemps]
        })
        .spread(_.bind(this.beforeParse, this))
        .then(_.bind(this.parseMiddleware, this))
        .then(function (response) {
            var json = response.body;
            if (_.isObject(json) && json.status == "ok")
                return _.omit(response.body, 'status');
            if (_.isString(json.message) && json.message.toLowerCase().indexOf('transcode timeout') !== -1)
                throw new Exceptions.TranscodeTimeoutError();
            throw new Exceptions.RequestError(json);
        })
        .catch(function(error) {
            return that.beforeError(error, options, attemps)
        })
        .catch(function (err) {
            if (err instanceof Exceptions.APIError)
                throw err;
            if(!err || !err.response)
                throw err;    
            var response = err.response;
            if (response.statusCode == 404)
                throw new Exceptions.NotFoundError(response);
            if (response.statusCode >= 500) {
                if (attemps <= that.attemps) {
                    attemps += 1;
                    return that.send(options, attemps)
                } else {
                    throw new Exceptions.ParseError(response, that);
                }
            } else {
                that.errorMiddleware(response)
            }
        })
        .catch(function (error) {
            if (error instanceof Exceptions.APIError)
                throw error;
            error = _.defaults(error, { message: 'Fatal internal error!' });
            throw new Exceptions.RequestError(error);
        })
        .catch(function(error) {
            return that.afterError(error, options, attemps)
        })
}
