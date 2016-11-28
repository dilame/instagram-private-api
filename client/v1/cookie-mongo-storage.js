/* Cookie storage for MongoDB. You only need to provide connection url.
 * It is recommended to set COOKIE_MONGO_STORAGE_URL environment variable.
 */
var _= require('underscore');
var util = require("util");
var redis = require("redis");

var MongoCookieStore = require('mongo-cookie-monster');
var CookieStorage = require('./cookie-storage');


function CookieMongoStorage(id, options) {
    if(!_.isObject(options)) options = {};

    if( _.isUndefined(options.url) && !_.isUndefined(process.env.COOKIE_MONGO_STORAGE_URL) ) options.connection = process.env.COOKIE_MONGO_STORAGE_URL;
    if( _.isUndefined(options.collection) && !_.isUndefined(process.env.COOKIE_MONGO_STORAGE_COLLECTION) ) options.collection = process.env.COOKIE_MONGO_STORAGE_COLLECTION;
    if( _.isUndefined(options.column) && !_.isUndefined(process.env.COOKIE_MONGO_STORAGE_COLUMN) ) options.queryColumn = process.env.COOKIE_MONGO_STORAGE_COLUMN;
    _.defaults(options,{collection:'instagramcookies',column:'login'});

    var Connection = MongoCookieStore(options);
    CookieStorage.call(this, new Connection(id));
}

util.inherits(CookieMongoStorage, CookieStorage);
module.exports = CookieMongoStorage;
