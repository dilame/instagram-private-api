var _ = require("underscore");
var errors = require('request-promise/errors');
var Promise = require('bluebird');
var util = require('util');

// iPhone probably works best, even from android previosly done request
var iPhoneUserAgent = _.template('Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) '
    + 'AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 Instagram <%= version %> '
    + '(iPhone7,2; iPhone OS 9_3_3; cs_CZ; cs-CZ; scale=2.00; 750x1334)');

var EMAIL_FIELD_REGEXP = /email.*value(.*)"/i;
var PHONE_FIELD_REGEXP = /sms.*value(.*)"/i;
var PHONE_ENTERED_FIELD_REGEXP = /tel.*value="(\+\d+)"/i
var RESET_FIELD_REGEXP = /reset_progress_form.*action="\/(.*)"/i

var Challenge = function(session, type, error, body) {
    this._session = session;
    this._type = type;
    this._error = error;
}

exports.Challenge = Challenge;

var Session = require('../session');
var routes = require('../routes');
var CONSTANTS = require('../constants');
var WebRequest = require('./web-request');
var Helpers = require('../../../helpers');
var Exceptions = require("../exceptions");
var ORIGIN = CONSTANTS.WEBHOST.slice(0, -1); // Trailing / in origin


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
    var verifyByPhoneValue = new RegExp(PHONE_FIELD_REGEXP).exec(body);
    this.verifyByValue = verifyByPhoneValue ? verifyByPhoneValue[1] : false;
    var insertedPhoneNumber = new RegExp(PHONE_ENTERED_FIELD_REGEXP).exec(body);
    this.phoneInserted = insertedPhoneNumber ? insertedPhoneNumber[1] : false;
}
util.inherits(PhoneVerificationChallenge, Challenge);
exports.PhoneVerificationChallenge = PhoneVerificationChallenge;


PhoneVerificationChallenge.prototype.phone = function(phone) {
    var that = this;
    that.error.url = that.error.url.replace('i.instagram.com','www.instagram.com')
    //Confirming phone number or selecting confirm type is optional and not always required
    return new Promise(function(resolve,reject){
        if(that.verifyByValue!==false){
            return new WebRequest(that.session)
                .setMethod('GET')
                .setResource('challengeReset')
                .setMethod('POST')
                .setUrl(that.error.url)
                .setHeaders({
                    'Host': CONSTANTS.WEB_HOSTNAME,
                    'Referer': that.error.url,
                    'Origin': ORIGIN
                })
                .setBodyType('form')
                .setData({
                    sms: that.verifyByValue,
                    csrfmiddlewaretoken: that.session.CSRFToken
                })
                .removeHeader('x-csrftoken')
                .send({followRedirect: false})
                .then(resolve)
                .catch(reject)
        }else if(that.phoneInserted!==false){
            return new WebRequest(that.session)
                .setMethod('POST')
                .setUrl(that.error.url)
                .setHeaders({
                    'Host': CONSTANTS.WEB_HOSTNAME,
                    'Referer': that.error.url,
                    'Origin': ORIGIN
                })
                .setBodyType('form')
                .setData({
                    phone_number: phone || that.phoneInserted,
                    csrfmiddlewaretoken: that.session.CSRFToken
                })
                .removeHeader('x-csrftoken')
                .send({followRedirect: false})
                .then(resolve)
                .catch(reject)
        }else{
            return reject(new Exceptions.NotPossibleToResolveChallenge('Unexpected confirm type'));
        }
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
        if(response.body.indexOf('security_code') === -1)
            throw new Exceptions.NotPossibleToResolveChallenge();
        return that;
    })
}


PhoneVerificationChallenge.prototype.code = function(code) {
    var that = this;
    that.error.url = that.error.url.replace('i.instagram.com','www.instagram.com')
    return new WebRequest(that.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Host': CONSTANTS.WEB_HOSTNAME,
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
            security_code: code,
            csrfmiddlewaretoken: that.session.CSRFToken
        })
        .send({followRedirect: false})
        .then(function(response) {
            if(response.statusCode == 200 && response.body.indexOf('instagram://checkpoint/dismiss') !== -1)
                return true;
            // Must be redirected
            if(response.body.indexOf('check the code') > -1)
                throw new Exceptions.NotPossibleToResolveChallenge(
                    "Incorrect code",
                    Exceptions.NotPossibleToResolveChallenge.CODE.INCORRECT_CODE
                );
            throw new Exceptions.NotPossibleToResolveChallenge('Unknown error. Dismiss expected.')
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
    if(body.indexOf('SelectVerificationMethodForm_0')>-1){
        this.choice = '1';
    }else{
        var verifyByEmailValue = body.match(EMAIL_FIELD_REGEXP);
        this.verifyByValue = verifyByEmailValue ? _.last(verifyByEmailValue[0].split("value")).slice(2, -1) : "Verify by Email";
    }
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
    that.error.url = that.error.url.replace('i.instagram.com','www.instagram.com')
    var data = {
        csrfmiddlewaretoken: that.session.CSRFToken
    }
    if(that.verifyByValue) data.email = that.verifyByValue;
    if(that.choice) data.choice = that.choice;
    return new WebRequest(that.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Host': CONSTANTS.WEB_HOSTNAME,
            'Referer': that.error.url,
            'Origin': ORIGIN
        })
        .setBodyType('form')
        .removeHeader('x-csrftoken') // we actually sending this as post param
        .setData(data)
        .send({followRedirect: false, qs: {next: 'instagram://checkpoint/dismiss'}})
        .then(function(response) {
            if(response.statusCode !== 200)
                throw new Exceptions.NotPossibleToResolveChallenge();
            that.codeName = response.body.indexOf('security_code')>-1 ? 'security_code' : 'response_code';
            return that;
        })
};


EmailVerificationChallenge.prototype.code = function(code){
    var that = this;
    if(!isNumeric(code))
        throw new Error("Code input should be 6-digits number");
    that.error.url = that.error.url.replace('i.instagram.com','www.instagram.com')
    var data = {
        csrfmiddlewaretoken: that.session.CSRFToken
    };
    data[that.codeName] = code;
    return new WebRequest(this.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Host': CONSTANTS.WEB_HOSTNAME,
            'Referer': that.error.url,
            'Origin': ORIGIN
        })
        .setBodyType('form')
        .removeHeader('x-csrftoken') // we actually sending this as post param
        .setData(data)
        .send({followRedirect: false, qs: {next: 'instagram://checkpoint/dismiss'}})
        .then(function(response){
            if(response.statusCode != 200)
                throw new Exceptions.NotPossibleToResolveChallenge('Invalid status code: '+response.statusCode);
            if(response.body.indexOf('has been verified') > -1 || response.body.indexOf('instagram://checkpoint/dismiss')>-1){
                return that;
            }else if(response.body.indexOf('check the code') > -1){
                throw new Exceptions.NotPossibleToResolveChallenge(
                    'Incorrect code',
                    Exceptions.NotPossibleToResolveChallenge.INCORRECT_CODE
                );
            }else if(response.body.indexOf('something wrong sending') > -1){
                throw new Exceptions.NotPossibleToResolveChallenge('Something went wrong while sending code');
            }else{
                throw new Exceptions.NotPossibleToResolveChallenge();
            }

        })
};


EmailVerificationChallenge.prototype.confirmate = function(code){
    var that = this;
    that.error.url = that.error.url.replace('i.instagram.com','www.instagram.com')
    return new WebRequest(this.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Host': CONSTANTS.WEB_HOSTNAME,
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

var ButtonVerificationChallenge = function(session, type, checkpointError, body) {
    Challenge.apply(this, arguments);
}

util.inherits(ButtonVerificationChallenge, Challenge);
exports.ButtonVerificationChallenge = ButtonVerificationChallenge;

ButtonVerificationChallenge.prototype.click = function() {
    var that = this;
    that.error.url = that.error.url.replace('i.instagram.com','www.instagram.com')
    return new WebRequest(that.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Host': CONSTANTS.WEB_HOSTNAME,
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
            approve: "It Was Me",
            csrfmiddlewaretoken: that.session.CSRFToken
        })
        .send({followRedirect: false})
        .then(function(response) {
            if(response.statusCode == 200 && response.body.indexOf('Your account has been verified') !== -1) {
                return that;
            }
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

ButtonVerificationChallenge.prototype.confirmate = function(code) {
    var that = this;
    that.error.url = that.error.url.replace('i.instagram.com','www.instagram.com')
    return new WebRequest(this.session)
        .setMethod('POST')
        .setUrl(that.error.url)
        .setHeaders({
            'Host': CONSTANTS.WEB_HOSTNAME,
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
    checkpointError.url=checkpointError.url.replace('i.instagram.com','www.instagram.com');

    function parseResponse(response){
        //Challenge is not required
        if(response.statusCode == 200 && response.body.indexOf('instagram://checkpoint/dismiss') !== -1)
            throw new Exceptions.NoChallengeRequired;
        var lcBody = response.body.toLowerCase();
        // This is obvious, email field is present it is email challenge
        if(lcBody.indexOf('email') !== -1 || lcBody.match(EMAIL_FIELD_REGEXP))
            return new EmailVerificationChallenge(session, 'email', checkpointError, response.body);
        // On the otherhand this is not. We can be stuck in challenge
        // so we need to detect if instagram require code he `texted` us
        // or sms field on first step will be present
        if(lcBody.indexOf('id_phone_number') !== -1 || lcBody.indexOf('sms') !== -1 || lcBody.match(PHONE_FIELD_REGEXP))
            return new PhoneVerificationChallenge(session, 'phone', checkpointError, response.body);
        //Thx to @generictitle for ButtonVerificationChallenge
        if(lcBody.indexOf('it was me') !== -1)
            return new ButtonVerificationChallenge(session, 'button', checkpointError, response.body);
        //Looks like unfinished challenge, let's reset it
        if(lcBody.indexOf('security_code') !== -1){
            //Resetting challenge.
            var resetLink = RESET_FIELD_REGEXP.exec(response.body)[1];
            return new WebRequest(session)
                .setMethod('GET')
                .setUrl(CONSTANTS.WEBHOST+resetLink)
                .setHeaders({
                    'Host': CONSTANTS.WEB_HOSTNAME,
                    'Origin': ORIGIN
                })
                .removeHeader('x-csrftoken')
                .send({followRedirect: false})
                .then(parseResponse)
        }
        // For last we now that email or phone verification
        // is not required so last one dont need check, it is captcha
        return new CaptchaVerificationChallenge(session, 'capcha', checkpointError, response.body);
    }

    return session.cookieStore.removeCheckpointStep()
        .then(function() {
            return new WebRequest(session)
                .setMethod('GET')
                .setUrl(checkpointError.url)
                .setHeaders({
                    'Host': CONSTANTS.WEB_HOSTNAME
                })
                .send({followRedirect: true})
        })
        .then(parseResponse)
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 302)
                throw new Exceptions.NoChallengeRequired;
            throw error;
        })
}

function isNumeric(num){
    return !isNaN(num)
}
