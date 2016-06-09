var util = require("util");
var touch = require("touch");
var Promise = require('bluebird');
var CONSTANTS = require("./constants");
var FileCookieStore = require('tough-cookie-filestore');
var fs = require('fs');
var path = require('path');
var touch = require('touch');
var _ = require('underscore');
var Helpers = require('../../helpers');


function InstgramFileCookieStore() {
    FileCookieStore.apply(this, arguments);
}

util.inherits(InstgramFileCookieStore, FileCookieStore);
module.exports = InstgramFileCookieStore;

var Exceptions = require('./exceptions');

InstgramFileCookieStore.loadFromPath = function(cookiePath) {
    cookiePath = path.resolve(cookiePath);
    touch(cookiePath);
    Helpers.ensureExistenceOfJSONFilePath(cookiePath);
    return new InstgramFileCookieStore(cookiePath);
};


InstgramFileCookieStore.prototype.getCookieValue = function (name) {
    var self = this;
    return new Promise(function(resolve, reject) {
        self.findCookie(CONSTANTS.HOSTNAME, '/', name, function(err, cookie) {
            if (err) return reject(err);
            if (!_.isObject(cookie)) return reject(new Exceptions.CookieNotValidError(name));
            resolve(cookie);
        })
    });
};

InstgramFileCookieStore.prototype.getCookies = function () {
    var self = this;
    return new Promise(function(resolve, reject) {
        self.findCookies(CONSTANTS.HOSTNAME, '/', function(err, cookies){
            if (err) return reject(err);
            resolve(cookies || []);
        })
    });
};


InstgramFileCookieStore.prototype.getAccountId = function () {
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


InstgramFileCookieStore.prototype.getSessionId = function () {
    var currentTime = new Date().getTime();
    return this.getCookieValue('sessionid')
        .then(function(cookie) {
            var acceptable = cookie.expires instanceof Date && cookie.expires.getTime() > currentTime;
            if(acceptable) return cookie.value;
            throw new Exceptions.CookieNotValidError("sessionid"); 
        })
};