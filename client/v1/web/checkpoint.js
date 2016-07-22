
var Checkpoint = {}

module.exports = Checkpoint;

var Exceptions = require('../exceptions');
var Session = require('../session');
var routes = require('../routes');
var CONSTANTS = require('../constants');
var WebRequest = require('./web-request');
var Helpers = require('../../../helpers');
var errors = require('request-promise/errors');
var _ = require("underscore");

Checkpoint.isRequired = function(session) {
    return new WebRequest(session)
        .setMethod('GET')
        .setResource('integrityCheckpoint')
        .send({followRedirect: false})
        .then(function(response) {
            return true;
        })
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 302)
                return false;
            throw error;    
        })
}

Checkpoint.phoneVerification = function(session, phone) {
    return session.cookieStore.removeCheckpointStep()
        .then(function() {
            return new WebRequest(session)
                .setMethod('POST')
                .setResource('integrityCheckpoint')
                .setHeaders({
                    'Referer': routes.getWebUrl('integrityCheckpoint'),
                    'Origin': CONSTANTS.WEBHOST
                })
                .setBodyType('form')
                .setData({
                    phone_number: phone,
                    csrfmiddlewaretoken: session.CSRFToken
                })
                .send()
                .then(function(response) {
                    if(response.statusCode !== 200)
                        throw new Exceptions.NotPossibleToSendSMS("Unknown reason!");  
                    if(response.body.indexOf('incorrect') !== -1)
                        throw new Exceptions.NotPossibleToSendSMS("Probably incorrect number!");
                    if(response.body.indexOf('response_code') === -1)
                        throw new Exceptions.NotPossibleToSendSMS();
                    return true;    
                })
        })   
}


Checkpoint.phoneVerificationSMSCode = function(session, code) {
    return new WebRequest(session)
        .setMethod('POST')
        .setResource('integrityCheckpoint', {redirect: '/'})
        .setHeaders({
            'Referer': routes.getWebUrl('integrityCheckpoint'),
            'Origin': CONSTANTS.WEBHOST
        })
        .setBodyType('form')
        .setData({
            response_code: code,
            csrfmiddlewaretoken: session.CSRFToken
        })
        .send({followRedirect: false})
        .then(function() {
            // Must be redirected
            throw new Exceptions.NotPossibleToVerify();
        })
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 302)
                return true;
            throw error;    
        })
        .catch(function() {
            throw new Exceptions.NotPossibleToVerify();  
        }) 
}