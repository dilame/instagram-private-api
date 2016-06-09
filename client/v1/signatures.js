var _ = require('underscore');
var Promise = require('bluebird');
var Exceptions = require('./exceptions');
var hmac = require('crypto-js/hmac-sha256');
var CONSTANTS = require('./constants');
var pruned = require('./json-pruned');

var strToInt = function(str) {
    str = str.toString().slice(0, 10)
    var int = 0;
    for(var i = 0; i < str.length; i++) {
        int += str.charCodeAt(i);
    }
    return int;
}

exports.sign = function(payload, session) {
    var key;
    var Session = require('./session');
    if(session && session instanceof Session) {
        var keyIndex = strToInt(session.device.md5) % CONSTANTS.PRIVATE_KEYS.length;
        key = CONSTANTS.PRIVATE_KEYS[keyIndex];
    } else {
        key = _.last(CONSTANTS.PRIVATE_KEYS);
    }
    var json = _.isString(payload) ? payload : pruned(payload);
    var signed = hmac(json, key.SIG_KEY);
    return new Promise(function(resolve, reject) {
        return resolve({
            signature: signed.toString(),
            appVersion: key.APP_VERSION,
            sigKeyVersion: key.SIG_VERSION,
            payload: json
        })
    })
  
}