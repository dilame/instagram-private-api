var util = require("util");
var MemoryCookieStore = require('tough-cookie/lib/memstore.js').MemoryCookieStore;
var CookieStorage = require('./cookie-storage');


function CookieMemoryStorage() {
    CookieStorage.call(this, new MemoryCookieStore())
}

util.inherits(CookieMemoryStorage, CookieStorage);
module.exports = CookieMemoryStorage;

CookieMemoryStorage.prototype.destroy = function(){

}