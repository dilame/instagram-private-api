var util = require("util");
var Resource = require("./resource");
var fs = require('fs');
var _ = require('underscore');
var touch = require("touch");
var request = require("request-promise");

function Session(device, cookiePath) {
    if(!(device instanceof Device))
        throw new Error("`device` is not an valid instance of `Device`");
    this._device = device;    
    var cookiesStore = InstgramFileCookieStore.loadFromPath(cookiePath);
    this.setCookiesStore(cookiesStore);
}

util.inherits(Session, Resource);
module.exports = Session;

var InstgramFileCookieStore = require('./cookie-store');
var CONSTANTS = require("./constants");
var Account = require('./account');
var Exceptions = require('./exceptions');
var Request = require('./request');
var Device = require("./device");
var QE = require("./qe");
var Megaphone = require("./megaphone");
var Timeline = require("./feeds/timeline-feed");
var Inbox = require("./feeds/inbox");
var Thread = require("./thread");
var Relationship = require("./relationship");
var Helpers = require("../../helpers");

Object.defineProperty(Session.prototype, "jar", {
    get: function() { return this._jar },
    set: function(val) {}
});


Object.defineProperty(Session.prototype, "cookieStore", {
    get: function() { return this._cookiesStore },
    set: function(val) {}
});


Object.defineProperty(Session.prototype, "device", {
    get: function() { return this._device },
    set: function(val) {}
});


Object.defineProperty(Session.prototype, "CSRFToken", {
    get: function() { 
        var cookies = this.jar.getCookies(CONSTANTS.HOST) 
        var item = _.findWhere(cookies, { key: "csrftoken" });
        return item ? item.value : "missing";
    },
    set: function(val) {}
});

Object.defineProperty(Session.prototype, "proxyUrl", {
    get: function() { 
        return this._proxyUrl;
    },
    set: function(val) {
        if(!Helpers.isValidUrl(val) && val !== null)
            throw new Error("`proxyUrl` argument is not an valid url") 
        this._proxyUrl = val;
    }
});


Session.prototype.setCookiesStore = function (store) {
    if(!(store instanceof InstgramFileCookieStore))
        throw new Error('`store` must be valid instance of InstagramFileCookieStore');
    this._cookiesStore = store;
    this._jar = request.jar(store);
    return this;
};


Session.prototype.getAccountId = function() {
    var that = this;
    return this._cookiesStore.getSessionId()
        .then(function () {
            return that._cookiesStore.getAccountId();
        })
}


Session.prototype.setProxy = function(url) {
    this.proxyUrl = url;
    return this;
}


Session.prototype.getAccount = function () {
    var that = this;
    return that.getAccountId()
        .then(function(id){
            return Account.getById(that, id);
        })
};


Session.prototype.destroy = function () {
    fs.unlinkSync(this._cookiesStore.filePath);
    return new Request(this)
        .setMethod('POST')
        .setResource('logout')
        .generateUUID()
        .send();
};


Session.createFromPath = function(device, cookiePath) {
    var session = new Session(device, cookiePath);
    return session.cookieStore
        .getSessionId()
        .then(function () {
            return session;
        })
}

Session.login = function(session, username, password) {
    return new Request(session)
        .setResource('login')
        .setMethod('POST')
        .generateUUID()
        .setData({
            username: username,
            password: password,
            login_attempt_count: 0
        })
        .signPayload()
        .send()
        .catch(function (error) {
            if (error.name == "RequestError" && 
                _.isObject(error.json) && 
                error.json.invalid_credentials) {
                    throw new Exceptions.AuthenticationError(error.message);
            }
            throw error;
        })
        .then(function () {
            return [session, QE.sync(session)];
        })
        .spread(function (session) {
            var autocomplete = Relationship.autocompleteUserList(session)
                .catch(Exceptions.RequestsLimitError, function() {
                    // autocompleteUserList has ability to fail often
                    return false;
                })
            return [session, autocomplete];
        })
        .spread(function (session) {
            return [session, new Timeline(session).get()];
        })
        .spread(function (session) {
            return [session, Thread.recentRecipients(session)];
        })
        .spread(function (session) {
            return [session, new Inbox(session).get()];
        })
        .spread(function (session) {
            return [session, Megaphone.logSeenMainFeed(session)];
        })
        .spread(function(session) {
            return session;
        })
        .catch(Exceptions.CheckpointError, function(error) {
            // This situation is not really obvious,
            // but even if you got checkpoint error (aka captcha or phone)
            // verification, it is still an valid session unless `sessionid` missing
            return session.getAccountId()
                .then(function () {
                    // We got sessionId and accountId, we are good to go 
                    return session; 
                })
                .catch(Exceptions.CookieNotValidError, function (e) {
                    throw error;
                })
        })
        
}

Session.create = function(device, cookiePath, username, password, proxy) {
    var that = this;
    var session = new Session(device, cookiePath);
    if(_.isString(proxy))
        session.proxyUrl = proxy;
    return session.getAccountId()
        .then(function () {
            return session;
        })
        .catch(Exceptions.CookieNotValidError, function() {
            // We either not have valid cookes or authentication is not fain!
            return Session.login(session, username, password)
        })
}
