var _ = require('underscore');
var request = require('request-promise');
var DynamicProxyError = require('./exceptions').DynamicProxyError;


function errorMiddleware(response) {
    if (response instanceof DynamicProxyError)
        throw response;

    var meteorErr;
    if (response && response.statusCode < 500) {
        var content = response.error;
        if (_.isString(content)) {
            try {
                content = JSON.parse(content);
            } catch (e) {
                meteorErr = new DynamicProxyError("ParseError", "Not possible to parse API response", {});
                throw meteorErr;
            }
        }
        meteorErr = new DynamicProxyError(content.error, content.errorMessage, content.errorData);
        throw meteorErr;
    } else {
        meteorErr = new DynamicProxyError("UnknownResponseError", "Something goes wrong", {});
        throw meteorErr;
    }
}


function successMiddleware(response) {
    if (_.isObject(response.body))
        return response.body;

    try {
        return JSON.parse(response.body);
    } catch (e) {
        var meteorErr = new DynamicProxyError("ParseError", "Not possible to parse API response", {});
        throw meteorErr;
    }
}

var Request = {};

Request.call = function (options) {
    return request(_.extend(options, {
        resolveWithFullResponse: true
    }))
        .then(successMiddleware)
        .catch(errorMiddleware);
};

Request.get = function (url, opts) {
    return Request.call(_.defaults({
        method: 'GET',
        url: url
    }, opts || {}))
};

Request.post = function (url, opts) {
    return Request.call(_.defaults({
        method: 'POST',
        url: url
    }, opts || {}))
};

Request.put = function (url, opts) {
    return Request.call(_.defaults({
        method: 'PUT',
        url: url
    }, opts || {}))
};

Request.delete = function (url, opts) {
    return Request.call(_.defaults({
        method: 'DELETE',
        url: url
    }, opts || {}))
};


_.each(['get', 'post', 'put', 'delete'], function (method) {
    Request[method + 'WithSession'] = function (session, url, opts) {
        if (!_.isObject(opts)) opts = {};
        if (!_.isObject(opts.qs)) opts.qs = {};
        var key = session.getKey();
        if(_.isEmpty(key))
            throw new Error("You are trying to ask to resource with session but key is empty!");
        opts.qs = _.extend(opts.qs, {key: key});
        return Request[method].call(this, url, opts);
    }
});


module.exports = Request;


