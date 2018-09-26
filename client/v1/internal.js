var util = require("util");
var _ = require("lodash");
var Resource = require("./resource");
const CONSTANTS = require("./constants");


function Internal() {
    Resource.apply(this, arguments);
}

util.inherits(Internal, Resource);

module.exports = Internal;
var Exceptions = require('./exceptions');
var Request = require("./request");
var LoginExperiments = require('./login-experiments.json');

Internal.readMsisdnHeader = function (session) {
    return new Request(session)
        .setMethod('POST')
        .setResource('readMsisdnHeader')
        .setHeaders({
            'X-DEVICE-ID': session.uuid
        })
        .setData({
            mobile_subno_usage: 'ig_select_app'
        })
        .setBodyType('form')
        .signPayload()
        .send()
}

Internal.qeSync = function (session, preLogin) {
    var req = new Request(session)
        .setMethod('POST')
        .setResource('qeSync')
        .setHeaders({
            'X-DEVICE-ID': session.uuid
        })
        .setBodyType('form')
        .setData({})
        .setData({
            id: session.uuid,
            experiments: LoginExperiments.join(',')
        })

    if(!preLogin) {
        return session.getAccountId()
            .then(function(id) {
                return req.setData({
                    _uuid: session.uuid,
                    _uid: id
                })
                .signPayload()
                .send()
            });
    }

    else {
        return req.signPayload().send();
    }
}

Internal.launcherSync = function (session, preLogin) {
    var req = new Request(session)
        .setMethod('POST')
        .setResource('launcherSync')
        .setHeaders({
            'X-DEVICE-ID': session.uuid
        })
        .setBodyType('form')
        .setData({
            configs: ''
        })

    if(!preLogin) {
        return session.getAccountId()
            .then(function(id) {
                return req.setData({
                    id: id,
                    _uuid: session.uuid,
                    _uid: id
                })
                .signPayload()
                .send()
            });
    }

    else {
        return req.setData({id: session.uuid}).signPayload().send();
    }
}

Internal.logAttribution = function (session) {
    return new Request(session)
        .setMethod('POST')
        .setResource('logAttribution')
        .setBodyType('form')
        .setData({})
        .setData({
            adid: session.advertising_id
        })
        .signPayload()
        .send()
}

Internal.fetchZeroRatingToken = function (session) {
    return new Request(session)
        .setMethod('GET')
        .setResource('zeroRatingToken')
        .setBodyType('form')
        .setData({})
        .setData({
            custom_device_id: session.uuid,
            device_id: session.device.id,
            fetch_reason: 'token_expired',
            token_hash: ''
        })
        .send()
}

Internal.setContactPointPrefill = function (session) {
    return new Request(session)
        .setMethod('POST')
        .setResource('contactPointPrefill')
        .setBodyType('form')
        .setData({})
        .setData({
            phone_id: session.phone_id,
            usage: 'prefill',
            _csrftoken: session.CSRFToken
        })
        .signPayload()
        .send()
}