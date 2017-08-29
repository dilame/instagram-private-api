var _ = require('lodash');
var Promise = require('bluebird');
var Exceptions = require('./exceptions');
var hmac = require('crypto-js/hmac-sha256');
var CONSTANTS = require('./constants');
var pruned = require('./json-pruned');


exports.sign = function(payload) {
    var key = CONSTANTS.PRIVATE_KEY;
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