var _ = require("lodash");
var errors = require('request-promise/errors');
var Promise = require('bluebird');
var util = require('util');

var Session = require('../session');
var routes = require('../routes');
var CONSTANTS = require('../constants');
var WebRequest = require('./web-request');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Exceptions = require("../exceptions");
var ORIGIN = CONSTANTS.WEBHOST.slice(0, -1); // Trailing / in origin

// iPhone probably works best, even from android previosly done request
var iPhoneUserAgent = 'Instagram 19.0.0.27.91 (iPhone6,1; iPhone OS 9_3_1; en_US; en; scale=2.00; gamut=normal; 640x1136) AppleWebKit/420+';
var iPhoneUserAgentHtml = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E238 Instagram 10.28.0 (iPhone6,1; iPhone OS 9_3_1; en_US; en; scale=2.00; gamut=normal; 640x1136)'

var EMAIL_FIELD_REGEXP = /email.*value(.*)"/i;
var PHONE_FIELD_REGEXP = /sms.*value(.*)"/i;
var PHONE_ENTERED_FIELD_REGEXP = /tel.*value="(\+\d+)"/i
var RESET_FIELD_REGEXP = /reset_progress_form.*action="\/(.*)"/i
var SHARED_JSON_REGEXP = /window._sharedData = (.*);<\/script>/i

var Challenge = function(session, type, error, json) {
    this._json = json;
    this._session = session;
    this._type = type;
    this._error = error;
    this.apiUrl = 'https://i.instagram.com/api/v1'+error.json.challenge.api_path;
};
//WARNING: This is NOT backward compatible code since most methods are not needed anymore. But you are free to make it backward compatible :)
//How does it works now?
//Well, we have two ways of resolving challange. Native and html versions.
//First of all we reset the challenge. Just to make sure we start from beginning;
//After if we check if we can use native api version. If not - using html;
//Selecting method and sending code is diffenent, depending on native or html style.
//As soon as we got the code we can confirm it using Native version.
//Oh, and code confirm is same now for email and phone checkpoints
Challenge.resolve = function(checkpointError,defaultMethod,skipResetStep){
    var that = this;
    checkpointError = checkpointError instanceof Exceptions.CheckpointError ? checkpointError : checkpointError.json;
    if(!this.apiUrl) this.apiUrl = 'https://i.instagram.com/api/v1'+checkpointError.json.challenge.api_path;
    if(typeof defaultMethod==='undefined') defaultMethod = 'email';
    if(!(checkpointError instanceof Exceptions.CheckpointError)) throw new Error("`Challenge.resolve` method must get exception (type of `CheckpointError`) as a first argument");
    if(['email','phone'].indexOf(defaultMethod)==-1) throw new Error('Invalid default method');
    var session = checkpointError.session;

    return new Promise(function(res,rej){
        if(skipResetStep) return res();
        return res(that.reset(checkpointError))
    })
    .then(function() {
        return new WebRequest(session)
            .setMethod('GET')
            .setUrl(that.apiUrl)
            .setHeaders({
                'User-Agent': iPhoneUserAgent
            })
            .send({followRedirect: true})
        })
        .catch(errors.StatusCodeError, function(error){
            return error.response;
        })
        .then(function(response){
            try{
                var json = JSON.parse(response.body);
            }catch(e){
                if(response.body.indexOf('url=instagram://checkpoint/dismiss')!=-1) throw new Exceptions.NoChallengeRequired;
                throw new TypeError('Invalid response. JSON expected');
            }
            //Using html unlock if native is not supported
        if(json.challenge && json.challenge.native_flow===false) return that.resolveHtml(checkpointError,defaultMethod)
        //Challenge is not required
        if(json.status==='ok' && json.action==='close') throw new Exceptions.NoChallengeRequired;

        //Using API-version of challenge
        switch(json.step_name){
            case 'select_verify_method':{
                return new WebRequest(session)
                    .setMethod('POST')
                    .setUrl(that.apiUrl)
                    .setHeaders({
                        'User-Agent': iPhoneUserAgent
                    })
                    .setData({
                        "choice": defaultMethod==='email' ? 1 : 0
                        })
                        .send({followRedirect: true})
                        .then(function(){
                            return that.resolve(checkpointError,defaultMethod,true)
                        })
                }
                case 'verify_code':
                case 'submit_phone':{
                    return new PhoneVerificationChallenge(session, 'phone', checkpointError, json);
                }
                case 'verify_email':{
                    return new EmailVerificationChallenge(session, 'email', checkpointError, json);
                }
                default: return new NotImplementedChallenge(session, json.step_name, checkpointError, json);
            }
        })
}
Challenge.resolveHtml = function(checkpointError,defaultMethod){
    //Using html version
    var that = this;
    if(!(checkpointError instanceof Exceptions.CheckpointError)) throw new Error("`Challenge.resolve` method must get exception (type of `CheckpointError`) as a first argument");
    if(['email','phone'].indexOf(defaultMethod)==-1) throw new Error('Invalid default method');
    var session = checkpointError.session;

    return new WebRequest(session)
        .setMethod('GET')
        .setUrl(checkpointError.url)
        .setHeaders({
            'User-Agent': iPhoneUserAgentHtml,
            'Referer': checkpointError.url,
        })
        .send({followRedirect: true})
        .catch(errors.StatusCodeError, function(error){
            return error.response;
        })
        .then(parseResponse)

    function parseResponse(response){
        try{
            var json,challenge,choice;
            if(response.headers['content-type'] === 'application/json'){
                json = JSON.parse(response.body);
                challenge=json;
            }else{
                json = JSON.parse(SHARED_JSON_REGEXP.exec(response.body)[1]);
                challenge = json.entry_data.Challenge[0];
            }
        }catch(e){
            throw new TypeError('Invalid response. JSON expected');
        }
        if(defaultMethod=='email'){
            choice = challenge.fields.email ? 1 : 0
        }else if(defaultMethod=='phone'){
            choice = challenge.fields.phone_number ? 0 : 1
        }

        switch(challenge.challengeType){
            case 'SelectVerificationMethodForm':{
                return new WebRequest(session)
                    .setMethod('POST')
                    .setUrl(checkpointError.url)
                    .setHeaders({
                        'User-Agent': iPhoneUserAgentHtml,
                        'Referer': checkpointError.url,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-Instagram-AJAX': 1
                    })
                    .setData({
                        "choice": choice
                    })
                    .send({followRedirect: true})
                    .then(function(){
                        return that.resolveHtml(checkpointError,defaultMethod)
                    })
            }
            case 'VerifyEmailCodeForm':{
                return new EmailVerificationChallenge(session, 'email', checkpointError, json);
            }
            case 'VerifySMSCodeForm':{
                return new PhoneVerificationChallenge(session, 'phone', checkpointError, json);
            }
            default: return new NotImplementedChallenge(session, challenge.challengeType, checkpointError, json);
        }
    }
}
Challenge.reset = function(checkpointError){
    var that = this;

    var session = checkpointError.session;

    return new Request(session)
        .setMethod('POST')
        .setBodyType('form')
        .setUrl(that.apiUrl.replace('/challenge/','/challenge/reset/'))
        .setHeaders({
            'User-Agent': iPhoneUserAgent
        })
        .signPayload()
        .send({followRedirect: true})
    .catch(function(error){
        return error.response;
    })
    .then(function(response){
        return that;
    })
}
Challenge.prototype.code = function(code){
    var that = this;
    if(!code||code.length!=6) throw new Error('Invalid code provided');
    return new WebRequest(that.session)
        .setMethod('POST')
        .setUrl(that.apiUrl)
        .setHeaders({
            'User-Agent': iPhoneUserAgent
        })
        .setBodyType('form')
        .setData({
            "security_code":code
        })
        .removeHeader('x-csrftoken')
        .send({followRedirect: false})
        .then(function(response){
            try{
                var json = JSON.parse(response.body);
            }catch(e){
                throw new TypeError('Invalid response. JSON expected');
            }
            if(response.statusCode == 200 && json.status==='ok' && (json.action==='close' || json.location==='instagram://checkpoint/dismiss')) return true;
            throw new Exceptions.NotPossibleToResolveChallenge('Unknown error',Exceptions.NotPossibleToResolveChallenge.CODE.UNKNOWN)
        })
        .catch(errors.StatusCodeError, function(error) {
            if(error.statusCode == 400)throw new Exceptions.NotPossibleToResolveChallenge("Verification has not been accepted",Exceptions.NotPossibleToResolveChallenge.CODE.NOT_ACCEPTED);
            throw error;
        })
}
exports.Challenge = Challenge;

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
Object.defineProperty(Challenge.prototype, "json", {
    get: function() { return this._json },
    set: function(val) {}
});

var PhoneVerificationChallenge = function(session, type, checkpointError, json) {
    this.submitPhone = json.step_name==='submit_phone';
    Challenge.apply(this, arguments);
}
//Confirming phone number.
//We need to return PhoneVerificationChallenge that can be able to request code.
//So, if we need to submit phone number first - let's do it. If not - just return current PhoneVerificationChallenge;
PhoneVerificationChallenge.prototype.phone = function(phone){
    var that = this;
    if(!this.submitPhone) return Promise.resolve(this);
    let instaPhone = (that.json && that.json.step_data) ? that.json.step_data.phone_number : null;
    let _phone = phone || instaPhone;
    if(!_phone) return new Error('Invalid phone number');
    console.log(`Requesting phone`)
    return new WebRequest(that.session)
        .setMethod('POST')
        .setUrl(that.apiUrl)
        .setHeaders({
            'User-Agent': iPhoneUserAgent
        })
        .setBodyType('form')
        .setData({
            "phone_number": _phone
        })
        .removeHeader('x-csrftoken')
        .send({followRedirect: false})
        .then(function(response){
            try{
                var json = JSON.parse(response.body);
            }catch(e){
                throw new TypeError('Invalid response. JSON expected');
            }
            return new PhoneVerificationChallenge(that.session, 'phone', that.error, json);
        })
}
util.inherits(PhoneVerificationChallenge, Challenge);
exports.PhoneVerificationChallenge = PhoneVerificationChallenge;

var EmailVerificationChallenge = function(session, type, checkpointError, json) {
    Challenge.apply(this, arguments);
}

util.inherits(EmailVerificationChallenge, Challenge);
exports.EmailVerificationChallenge = EmailVerificationChallenge;

var NotImplementedChallenge = function(session) {
    Challenge.apply(this, arguments);
    throw new Error("Not implemented, due to missing account for testing, please write me on email `ivan.ivan.90.90@gmail.com`")
}
util.inherits(NotImplementedChallenge, Challenge);
exports.NotImplementedChallenge = NotImplementedChallenge;