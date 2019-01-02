var util = require("util");
var FileCookieStore = require('tough-cookie-file-store');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var Helpers = require('../../helpers');
var CookieStorage = require('./cookie-storage');
var CONSTANTS = require("./constants");

function CookieFileStorage(cookiePath) {
    cookiePath = path.resolve(cookiePath);
    Helpers.ensureExistenceOfJSONFilePath(cookiePath);
    var store = new FileCookieStore(cookiePath);
    store.__proto__.getAllCookies = function (cb) {
      store.findCookies(CONSTANTS.HOSTNAME, '/', function (err, cookies) {
        cookies.sort(function (a, b) {
          return (a.creationIndex || 0) - (b.creationIndex || 0);
        });
        cb(null, cookies);
      });
    }
    CookieStorage.call(this, store);
}

util.inherits(CookieFileStorage, CookieStorage);
module.exports = CookieFileStorage;

CookieFileStorage.prototype.destroy = function(){
    fs.unlinkSync(this.storage.filePath);
}