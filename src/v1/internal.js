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
        .setResource('zeroRatingToken', {
            cd_id: session.uuid,
            d_id: session.device.id,
            fr: 'token_expired',
            th: ''
        })
        .setBodyType('form')
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


Internal.getRankedRecipients = function (session, mode) {
    return new Request(session)
        .setMethod('GET')
        .setResource('getRankedRecipients', {
            mode: mode,
            show_threads: true,
            use_unified_inbox: true 
        })
        .setBodyType('form')
        .send()
}


Internal.getPresences = function (session) {
    return new Request(session)
        .setMethod('GET')
        .setResource('getPresences')
        .setBodyType('form')
        .send()
}

Internal.getRecentActivityInbox = function (session) {
    return new Request(session)
        .setMethod('GET')
        .setResource('getRecentActivityInbox')
        .setBodyType('form')
        .send()
}

Internal.getProfileNotice = function (session) {
    return new Request(session)
        .setMethod('GET')
        .setResource('getProfileNotice')
        .setBodyType('form')
        .send()
}

Internal.getExploreFeed = function (session) {

    var supported_capabilities = [
        {
            name: 'SUPPORTED_SDK_VERSIONS',
            value: '9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0'
        },
        {
            name: 'FACE_TRACKER_VERSION',
            value: 10
        },
        {
            name: 'segmentation',
            value: 'segmentation_enabled'
        },
        {
            name: 'WORLD_TRACKER',
            value: 'WORLD_TRACKER_ENABLED'
        }
    ]


    return new Request(session)
        .setMethod('GET')
        .setResource('exploreFeed', {
            is_prefetch: '',
            session_id: session.session_id,
            supported_capabilities_new: encodeURIComponent(JSON.stringify(supported_capabilities))
        })
        .setBodyType('form')
        .send()
}