var util = require("util");
var Promise = require('bluebird');
var CONSTANTS = require("./constants");
var _ = require('lodash');


function CookieStorage(cookieStorage) {
    this.storage = cookieStorage;
}


Object.defineProperty(CookieStorage.prototype, "store", {
    get: function() { return this.storage },
    set: function(val) {}
});



var Exceptions = require('./exceptions');
module.exports = CookieStorage;


CookieStorage.prototype.getCookieValue = function (name) {
    var self = this;
    return new Promise(function(resolve, reject) {
        self.storage.findCookie(CONSTANTS.HOSTNAME, '/', name, function(err, cookie) {
            if (err) return reject(err);
            if (!_.isObject(cookie)) return reject(new Exceptions.CookieNotValidError(name));
            resolve(cookie);
        })
    });
};


CookieStorage.prototype.putCookie = function (cookie) {
    var args = _.toArray(arguments);
    var self = this;
    return new Promise(function (resolve, reject) {
        self.storage.putCookie(cookie, resolve);    
    })
};


CookieStorage.prototype.getCookies = function () {
    var self = this;
    return new Promise(function(resolve, reject) {
        self.storage.findCookies(CONSTANTS.HOSTNAME, '/', function(err, cookies){
            if (err) return reject(err);
            resolve(cookies || []);
        })
    });
};


CookieStorage.prototype.getAccountId = function () {
    var self = this;
    return this.getCookieValue('ds_user_id')
        .then(function(cookie) {
            var id = parseInt(cookie.value);
            if (_.isNumber(id) && !_.isNaN(id)) {
                return id;
            } else {
                throw new Exceptions.CookieNotValidError("ds_user_id");
            }
        })
};


CookieStorage.prototype.getSessionId = function () {
    var currentTime = new Date().getTime();
    return this.getCookieValue('sessionid')
        .then(function(cookie) {
            var acceptable = cookie.expires instanceof Date && cookie.expires.getTime() > currentTime;
            if(acceptable) return cookie.value;
            throw new Exceptions.CookieNotValidError("sessionid"); 
        })
};


CookieStorage.prototype.removeCheckpointStep = function () {
    var self = this;
    return new Promise(function(resolve, reject) {
        self.storage.removeCookie(CONSTANTS.HOSTNAME, '/', 'checkpoint_step', function(err){
            if (err) return reject(err);
            resolve();
        })
    });
};



CookieStorage.prototype.destroy = function () {
    throw new Error("Mehtod destroy is not implemented")
}
