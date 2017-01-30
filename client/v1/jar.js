var tough = require('tough-cookie');
var CONSTANTS = require('./constants');
var CookieJar = tough.CookieJar

// We need to trick the request.js library on order 
// to get cookies from i.instagram.com instead of www.instagram.com


function RequestJar(store) {
    var self = this;
    self._jar = new CookieJar(store, {looseMode: true});
}

module.exports = RequestJar;

RequestJar.prototype.rewriteUri = function(uri) {
    uri = uri.replace(CONSTANTS.WEB_HOSTNAME, CONSTANTS.HOSTNAME);
    uri = uri.replace('://' + CONSTANTS.TLD, '://' + CONSTANTS.HOSTNAME);
    return uri;
};

RequestJar.prototype.setCookie = function(cookieOrStr, uri, options) {
    var self = this;
    uri = this.rewriteUri(uri);
    return self._jar.setCookieSync(cookieOrStr, uri, options || {});
};

RequestJar.prototype.getCookieString = function(uri) {
    var self = this;
    uri = this.rewriteUri(uri);
    return self._jar.getCookieStringSync(uri);
};

RequestJar.prototype.getCookies = function(uri) {
    var self = this;
    uri = this.rewriteUri(uri);
    return self._jar.getCookiesSync(uri);
};
