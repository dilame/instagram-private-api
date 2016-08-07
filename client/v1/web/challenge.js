var _ = require("underscore");
var errors = require('request-promise/errors');
var Promise = require('bluebird');
var util = require('util');

// iPhone probably works best, even from android previosly done request
var iPhoneUserAgent = _.template('Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) '
    + 'AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 Instagram <%= version %> '
    + '(iPhone7,2; iPhone OS 9_3_3; cs_CZ; cs-CZ; scale=2.00; 750x1334)');

var Challenge = function(session, type, error, body) {
    this._session = session;
    this._type = type;
    this._error = error;
}

exports.Challenge = Challenge;


var Exceptions = require('../exceptions');
var Session = require('../session');
var routes = require('../routes');
var CONSTANTS = require('../constants');
var WebRequest = require('./web-request');
var Helpers = require('../../../helpers');
var Exceptions = require("../exceptions");
var ORIGIN = CONSTANTS.HOST.slice(0, -1); // Trailing / in origin


Object.defineProperty(Challenge.prototype, "type", {
    get: function() { return this._type },
    set: function(val) {}
});


Object.defineProperty(Challenge.prototype, "session", {
    get: function() { return this._session },
    set: function(val) {}
});


Object.defineProperty(Challenge.prototype, "error", {
    get: function() { return this._error },
    set: function(val) {}
});



var PhoneVerificationChallenge = function(session, type, checkpointError, body) {
    Challenge.apply(this, arguments);
    this.phoneInserted = false;
}
util.inherits(PhoneVerificationChallenge, Challenge);
exports.PhoneVerificationChallenge = PhoneVerificationChallenge;


PhoneVerificationChallenge.prototype.phone = function(phone) {
    var that = this;
    // ask for reset first to be sure we are going to submit phone
    return new WebRequest(that.session)
        .setMethod('GET')
        .setResource('challengeReset')
        .setHeaders({
            'Referer': that.error.url,
            'Origin': ORIGIN
        })
        .setHost(CONSTANTS.HOSTNAME)
        .removeHeader('x-csrftoken')
        .send({followRedirect: false})
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 302)
                return error.response;
            throw error;    
        })
        .then(function(response) {
            if(response.statusCode !== 200 && response.statusCode !== 302)
                throw new Exceptions.NotPossibleToResolveChallenge(
                    "Reset is not working", 
                    Exceptions.NotPossibleToResolveChallenge.CODE.RESET_NOT_WORKING
                );  
            // We got clean new challenge
            return new WebRequest(that.session)
                .setMethod('POST')
                .setUrl(that.error.url)
                .setHeaders({
                    'Referer': that.error.url,
                    'Origin': ORIGIN
                })
                .setBodyType('form')
                .setData({
                    phone_number: phone,
                    csrfmiddlewaretoken: that.session.CSRFToken
                })
                .setHost(CONSTANTS.HOSTNAME)
                .removeHeader('x-csrftoken')
                .send({followRedirect: false})
        })
        .then(function(response) {
            if(response.statusCode !== 200)
                throw new Exceptions.NotPossibleToResolveChallenge(
                    "Instagram not accpetion the number",
                    Exceptions.NotPossibleToResolveChallenge.CODE.NOT_ACCEPTING_NUMBER
                );  
            if(response.body.indexOf('incorrect') !== -1)
                throw new Exceptions.NotPossibleToResolveChallenge(
                    "Probably incorrect number",
                    Exceptions.NotPossibleToResolveChallenge.CODE.INCORRECT_NUMBER
                );
            if(response.body.indexOf('response_code') === -1)
                throw new Exceptions.NotPossibleToResolveChallenge();
            that.phoneInserted = true;    
            return that;    
        })
}


PhoneVerificationChallenge.prototype.code = function(code) {
    var that = this;
    return new WebRequest(that.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Host': CONSTANTS.HOSTNAME,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-us',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': ORIGIN,
            'Connection': 'keep-alive',
            'User-Agent': iPhoneUserAgent({version: that.session.device.version}),
            'Referer': that.error.url
        })
        .setBodyType('form')
        .removeHeader('x-csrftoken') // we actually sending this as post param
        .setData({
            response_code: code,
            csrfmiddlewaretoken: that.session.CSRFToken
        })
        .send({followRedirect: false})
        .then(function(response) {
            if(response.statusCode == 200 && response.body.indexOf('instagram://checkpoint/dismiss') !== -1)
                return true;
            // Must be redirected
            throw new Exceptions.NotPossibleToResolveChallenge(
                "Probably incorrect code",
                Exceptions.NotPossibleToResolveChallenge.CODE.INCORRECT_CODE
            );
        })
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 302)
                return true;
            if(error.statusCode == 400)
                throw new Exceptions.NotPossibleToResolveChallenge(
                    "Verification has not been accepted",
                    Exceptions.NotPossibleToResolveChallenge.CODE.NOT_ACCEPTED
                );  
            throw error;    
        })
}


var EmailVerificationChallenge = function(session, type, checkpointError, body) {
    Challenge.apply(this, arguments);
    this.verifyByValue = _.last(body.match(/email.*value(.*)"/gi)[0].split("value")).slice(2, -1);
}

util.inherits(EmailVerificationChallenge, Challenge);
exports.EmailVerificationChallenge = EmailVerificationChallenge;


EmailVerificationChallenge.prototype.parseCode = function(email) {
    var match = email.match(/security code is (\d*)?/);
    if(!match) throw new Exceptions.NotPossibleToResolveChallenge(
        "Unable to parse code",
        Exceptions.NotPossibleToResolveChallenge.CODE.UNABLE_TO_PARSE
    ); 
    return parseInt(match[1]);
};


EmailVerificationChallenge.prototype.reset = function() {
    return this.session.cookieStore.removeCheckpointStep()
};


EmailVerificationChallenge.prototype.email = function() {
    var that = this;
    return new WebRequest(that.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Referer': that.error.url,
            'Origin': ORIGIN
        })
        .setBodyType('form')
        .setHost(CONSTANTS.HOSTNAME)
        .removeHeader('x-csrftoken') // we actually sending this as post param
        .setData({
            email: that.verifyByValue,
            csrfmiddlewaretoken: that.session.CSRFToken
        })
        .send({followRedirect: false, qs: {next: 'instagram://checkpoint/dismiss'}})
        .then(function(response) {
            if(response.statusCode !== 200)
                throw new Exceptions.NotPossibleToResolveChallenge(); 
            return that;    
        })
};


EmailVerificationChallenge.prototype.code = function(code) {
    var that = this;
    if(!_.isNumber(code))
        throw new Error("Code input should be 6-digits number"); 
    return new WebRequest(this.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Referer': that.error.url,
            'Origin': ORIGIN
        })
        .setBodyType('form')
        .setHost(CONSTANTS.HOSTNAME)
        .removeHeader('x-csrftoken') // we actually sending this as post param
        .setData({
            response_code: code,
            csrfmiddlewaretoken: that.session.CSRFToken
        })
        .send({followRedirect: false, qs: {next: 'instagram://checkpoint/dismiss'}})
        .then(function(response) {
            if(response.statusCode !== 200 || response.body.indexOf('has been verified') === -1)
                throw new Exceptions.NotPossibleToResolveChallenge(); 
            return that;    
        })
};


EmailVerificationChallenge.prototype.confirmate = function(code) {
    var that = this;
    return new WebRequest(this.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Host': CONSTANTS.HOSTNAME,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-us',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': ORIGIN,
            'Connection': 'keep-alive',
            'User-Agent': iPhoneUserAgent({version: that.session.device.version}),
            'Referer': that.error.url
        })
        .setBodyType('form')
        .removeHeader('x-csrftoken') // we actually sending this as post param
        .setData({
            csrfmiddlewaretoken: that.session.CSRFToken,
            OK: 'OK'
        })
        .send({followRedirect: false, qs: {next: 'instagram://checkpoint/dismiss'}})
        .then(function(response) {
            if(response.statusCode == 200 && response.body.indexOf('instagram://checkpoint/dismiss') !== -1)
                return true;
            throw new Exceptions.NotPossibleToResolveChallenge(); 
        })
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 302)
                return true;
            throw error;    
        })
};


var CaptchaVerificationChallenge = function(session) {
    Challenge.apply(this, arguments);
    throw new Error("Not implemented, due to missing account for testing, please write me on email `huttarichard@gmail.com`")
}
util.inherits(CaptchaVerificationChallenge, Challenge);
exports.CaptchaVerificationChallenge = CaptchaVerificationChallenge;



// Workflow for this is quite interesting,
// if you got an challenge to complete it is either:
// Captcha, Email verification or phone verification
// We need to figure out how to recognize each of these
// challenges in order to be able complete them.

Challenge.resolve = function(checkpointError) {
    if(!(checkpointError instanceof Exceptions.CheckpointError))
        throw new Error("`Challenge.resolve` method must get exception (type of `CheckpointError`) as a first argument");
    var session = checkpointError.session;   
    return session.cookieStore.removeCheckpointStep()
        .then(function() {
            return new WebRequest(session)
                .setMethod('GET')
                .setUrl(checkpointError.url)
                .send({followRedirect: false})
        })
        .then(function(response) {
            // This is obvious, email field is present it is email challenge
            if(response.body.indexOf('email') !== -1)
                return new EmailVerificationChallenge(session, 'email', checkpointError, response.body);
            // On the otherhand this is not. We can be stuck in challenge
            // so we need to detect if instagram require code he `texted` us
            // or phone_number field on first step will be present
            if(response.body.indexOf('phone_number') !== -1 || response.body.indexOf('code we texted you') !== -1)
                return new PhoneVerificationChallenge(session, 'phone', checkpointError, response.body);
            // For last we now that email or phone verification
            // is not required so last one dont need check, it is captcha
            return new CaptchaVerificationChallenge(session, 'capcha', checkpointError, response.body);
        })
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 302)
                throw new Exceptions.NoChallengeRequired;
            throw error;    
        })
}

