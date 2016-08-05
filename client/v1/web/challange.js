var _ = require("underscore");
var errors = require('request-promise/errors');
var Promise = require('bluebird');
var util = require('util');

var Challange = function(session, type, error, body) {
    this._session = session;
    this._type = type;
    this._error = error;
}

exports.Challange = Challange;


var Exceptions = require('../exceptions');
var Session = require('../session');
var routes = require('../routes');
var CONSTANTS = require('../constants');
var WebRequest = require('./web-request');
var Helpers = require('../../../helpers');
var Exceptions = require("../exceptions");
var ORIGIN = CONSTANTS.HOST.slice(0, -1); // Trailing / in origin


Object.defineProperty(Challange.prototype, "type", {
    get: function() { return this._type },
    set: function(val) {}
});


Object.defineProperty(Challange.prototype, "session", {
    get: function() { return this._session },
    set: function(val) {}
});


Object.defineProperty(Challange.prototype, "error", {
    get: function() { return this._error },
    set: function(val) {}
});



var PhoneVerificationChallange = function(session, type, checkpointError, body) {
    Challange.apply(this, arguments);
    this.phoneInserted = false;
}
util.inherits(PhoneVerificationChallange, Challange);
exports.PhoneVerificationChallange = PhoneVerificationChallange;


PhoneVerificationChallange.prototype.phone = function(phone) {
    var that = this;
    // ask for reset first to be sure we are going to submit phone
    return new WebRequest(that.session)
        .setMethod('GET')
        .setResource('challangeReset')
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
                throw new Exceptions.NotPossibleToResolveChallange(
                    "Reset is not working", 
                    Exceptions.NotPossibleToResolveChallange.CODE.RESET_NOT_WORKING
                );  
            // We got clean new challange
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
                throw new Exceptions.NotPossibleToResolveChallange(
                    "Instagram not accpetion the number",
                    Exceptions.NotPossibleToResolveChallange.CODE.NOT_ACCEPTING_NUMBER
                );  
            if(response.body.indexOf('incorrect') !== -1)
                throw new Exceptions.NotPossibleToResolveChallange(
                    "Probably incorrect number",
                    Exceptions.NotPossibleToResolveChallange.CODE.INCORRECT_NUMBER
                );
            if(response.body.indexOf('response_code') === -1)
                throw new Exceptions.NotPossibleToResolveChallange();
            that.phoneInserted = true;    
            return that;    
        })
}


PhoneVerificationChallange.prototype.code = function(code) {
    var that = this;
    return new WebRequest(that.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Referer': that.error.url,
            'Origin': ORIGIN
        })
        .setBodyType('form')
        .setData({
            response_code: code,
            csrfmiddlewaretoken: that.session.CSRFToken
        })
        .setHost(CONSTANTS.HOSTNAME)
        .removeHeader('x-csrftoken')
        .send({followRedirect: false})
        .then(function(response) {
            // Must be redirected
            throw new Exceptions.NotPossibleToResolveChallange(
                "Probably incorrect code",
                Exceptions.NotPossibleToResolveChallange.CODE.INCORRECT_CODE
            );
        })
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 302)
                return true;
            throw error;    
        })
}


var EmailVerificationChallange = function(session, type, checkpointError, body) {
    Challange.apply(this, arguments);
    this.verifyByValue = _.last(body.match(/email.*value(.*)"/gi)[0].split("value")).slice(2, -1);
}

util.inherits(EmailVerificationChallange, Challange);
exports.EmailVerificationChallange = EmailVerificationChallange;


EmailVerificationChallange.prototype.parseCode = function(email) {
    var match = email.match(/security code is (\d*)?/);
    if(!match) throw new Exceptions.NotPossibleToResolveChallange(
        "Unable to parse code",
        Exceptions.NotPossibleToResolveChallange.CODE.UNABLE_TO_PARSE
    ); 
    return parseInt(match[1]);
};


EmailVerificationChallange.prototype.reset = function() {
    return this.session.cookieStore.removeCheckpointStep()
};


EmailVerificationChallange.prototype.email = function() {
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
                throw new Exceptions.NotPossibleToResolveChallange(); 
            return that;    
        })
};


EmailVerificationChallange.prototype.code = function(code) {
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
            if(response.statusCode !== 200 && response.body.indexOf('has been verified') === -1)
                throw new Exceptions.NotPossibleToResolveChallange(); 
            return that;    
        })
};


EmailVerificationChallange.prototype.confirmate = function(code) {
    var that = this;
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
            OK: 'OK',
            csrfmiddlewaretoken: that.session.CSRFToken
        })
        .send({followRedirect: false, qs: {next: 'instagram://checkpoint/dismiss'}})
        .then(function(response) {
            throw new Exceptions.NotPossibleToResolveChallange(); 
        })
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 302)
                return true;
            throw error;    
        })
};


var CaptchaVerificationChallange = function(session) {
    Challange.apply(this, arguments);
    throw new Error("Not implemented, due to missing account for testing, please write me on email `huttarichard@gmail.com`")
}
util.inherits(CaptchaVerificationChallange, Challange);
exports.CaptchaVerificationChallange = CaptchaVerificationChallange;



// Workflow for this is quite interesting,
// if you got an challange to complete it is either:
// Captcha, Email verification or phone verification
// We need to figure out how to recognize each of these
// challanges in order to be able complete them.

Challange.resolve = function(checkpointError) {
    if(!(checkpointError instanceof Exceptions.CheckpointError))
        throw new Error("`Challange.resolve` method must get exception (type of `CheckpointError`) as a first argument");
    var session = checkpointError.session;   
    return session.cookieStore.removeCheckpointStep()
        .then(function() {
            return new WebRequest(session)
                .setMethod('GET')
                .setUrl(checkpointError.url)
                .send({followRedirect: false})
        })
        .then(function(response) {
            // This is obvious, email field is present it is email challange
            if(response.body.indexOf('email') !== -1)
                return new EmailVerificationChallange(session, 'email', checkpointError, response.body);
            // On the otherhand this is not. We can be stuck in challange
            // so we need to detect if instagram require code he `texted` us
            // or phone_number field on first step will be present
            if(response.body.indexOf('phone_number') !== -1 || response.body.indexOf('code we texted you') !== -1)
                return new PhoneVerificationChallange(session, 'phone', checkpointError, response.body);
            // For last we now that email or phone verification
            // is not required so last one dont need check, it is captcha
            return new CaptchaVerificationChallange(session, 'capcha', checkpointError, response.body);
        })
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 302)
                throw new Exceptions.NoChallangeRequired;
            throw error;    
        })
}

