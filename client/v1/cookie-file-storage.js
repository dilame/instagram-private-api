var util = require("util");
var FileCookieStore = require('tough-cookie-filestore');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var Helpers = require('../../helpers');
var CookieStorage = require('./cookie-storage');


function CookieFileStorage(cookiePath) {
    cookiePath = path.resolve(cookiePath);
    Helpers.ensureExistenceOfJSONFilePath(cookiePath);
    CookieStorage.call(this, new FileCookieStore(cookiePath))
}

util.inherits(CookieFileStorage, CookieStorage);
module.exports = CookieFileStorage;


CookieFileStorage.prototype.destroy = function(){
    fs.unlinkSync(this.storage.filePath);
}