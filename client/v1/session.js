var util = require("util");
var Resource = require("./resource");
var _ = require('lodash');
var CookieStorage = require("./cookie-storage");

function Session(device, storage, proxy) {
    this.setDevice(device);    
    this.setCookiesStorage(storage);
    if(_.isString(proxy) && !_.isEmpty(proxy))
        this.proxyUrl = proxy;

    this._uuid = Helpers.generateUUID();
    this._phone_id = Helpers.generateUUID();
    this._adid = Helpers.generateUUID();
    this._id = Helpers.generateUUID();
}

util.inherits(Session, Resource);
module.exports = Session;

var CONSTANTS = require("./constants");
var Account = require('./account');
var Exceptions = require('./exceptions');
var Request = require('./request');
var Device = require("./device");
var QE = require("./qe");
var Internal = require('./internal');
var Megaphone = require("./megaphone");
var Timeline = require("./feeds/timeline-feed");
var Inbox = require("./feeds/inbox");
var Thread = require("./thread");
var Relationship = require("./relationship");
var Story = require('./feeds/story-tray');
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

Object.defineProperty(Session.prototype, "uuid", {
    get: function() { return this._uuid },
    set: function(val) {}
});

Object.defineProperty(Session.prototype, "phone_id", {
    get: function() { return this._phone_id },
    set: function(val) {}
});

Object.defineProperty(Session.prototype, "advertising_id", {
    get: function() { return this._adid },
    set: function(val) {}
});

Object.defineProperty(Session.prototype, "session_id", {
    get: function() { return this._id },
    set: function(val) {}
});


Object.defineProperty(Session.prototype, "CSRFToken", {
    get: function() { 
        var cookies = this.jar.getCookies(CONSTANTS.HOST) 
        var item = _.find(cookies, { key: "csrftoken" });
        return item ? item.value : "missing";
    },
    set: function(val) {}
});

Object.defineProperty(Session.prototype, "proxyUrl", {
    get: function() { 
        return this._proxyUrl;
    },
    set: function (val) {
        if (!Helpers.isValidUrl(val) && val !== null)
            throw new Error("`proxyUrl` argument is not an valid url")
        this._proxyUrl = val;
    }
});


Session.prototype.setCookiesStorage = function (storage) {
    if(!(storage instanceof CookieStorage))
        throw new Error("`storage` is not an valid instance of `CookieStorage`");
    this._cookiesStore = storage;
    this._jar = Request.jar(storage.store);
    return this;
};


Session.prototype.setDevice = function (device) {
    if(!(device instanceof Device))
        throw new Error("`device` is not an valid instance of `Device`");
    this._device = device;
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
    var that = this;
    return new Request(this)
        .setMethod('POST')
        .setResource('logout')
        .generateUUID()
        .send()
        .then(function (response) {
          that._cookiesStore.destroy();
          delete that._cookiesStore;
          return response;
        })
};


Session.login = function(session, username, password) {
    return session.preLoginFlow()
        .then(() => new Request(session)
            .setResource('login')
            .setMethod('POST')
            .setData({
                username: username,
                password: password,
                guid: session.uuid,
                phone_id: session.phone_id,
                adid: session.adid,
                login_attempt_count: 0
            })
            .signPayload()
            .send()
        )
        .then(() => session.loginFlow())
        .then(() => session)
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
        .catch(function (error) {
            if (error.name == "RequestError" && _.isObject(error.json)) {
                if(error.json.invalid_credentials)
                    throw new Exceptions.AuthenticationError(error.message);
                if(error.json.error_type==="inactive user")
                    throw new Exceptions.AccountBanned(error.json.message+' '+error.json.help_url);
            }
            throw error;
        })
        
}

Session.create = function(device, storage, username, password, proxy) {
    var that = this;
    var session = new Session(device, storage);
    if(_.isString(proxy) && !_.isEmpty(proxy))
        session.proxyUrl = proxy;
    return session.getAccountId()
        .then(function () {
            return session;
            // Disabled for the moment
            // But `loginFlow` should be called every time the user closes an reopen the app.
            //return session.loginFlow()
            //    .then(() => session)
        })
        .catch(Exceptions.CookieNotValidError, function() {
            // We either not have valid cookes or authentication is not fain!
            return Session.login(session, username, password)
        })
}

Session.prototype.loginFlow = function() {
    // Right now only requests after closing and re-opening the app are made
    // Later we should also include requests made after a full re-login.

    return new Timeline(this).get()
                    .then(() => Relationship.getBootstrapUsers(this))
                    .then(() => new Story(this).get())
                    .then(() => Internal.getRankedRecipients(this, 'reshare'))
                    .then(() => Internal.getRankedRecipients(this, 'raven'))
                    .then(() => new Inbox(this).get())
                    .then(() => Internal.getPresences(this))
                    .then(() => Internal.getRecentActivityInbox(this))
                    .then(() => Internal.getProfileNotice(this))
                    .then(() => Internal.getExploreFeed(this))
}

Session.prototype.preLoginFlow = function() {
    // Only on full re-login.
    return Internal.readMsisdnHeader(this)
                .then(() => Internal.qeSync(this, true))
                .then(() => Internal.launcherSync(this, true))
                .then(() => Internal.logAttribution(this))
                .then(() => Internal.fetchZeroRatingToken(this))
                .then(() => Internal.setContactPointPrefill(this))
                .catch(function (error) {
                    throw new Error(error.message);
                })
}