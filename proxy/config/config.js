var path = require('path');
var _ = require('underscore');
var fs = require('fs');
var Helpers = require('../../helpers');
var mkdirp = require('mkdirp');
var trim = require("underscore.string/trim");


var defaults = {
    root: path.normalize(__dirname + '/..'),
    databaseDir: path.resolve('./databases'),
    cookiesDir: path.resolve('./cookies'),
    port: 80,
    socketPort: 8080,
    host: "0.0.0.0",
    suppressLog: false,
    interfaces: []
};

var settings;


function configuration(options) {
    settings = _.defaults(options || {}, defaults);
    mkdirp.sync(settings.cookiesDir);
    mkdirp.sync(settings.databaseDir);
    settings.cookiesDir = Helpers.resolveDirectoryPath(settings.cookiesDir);
    settings.databaseDir = Helpers.resolveDirectoryPath(settings.databaseDir);
    if(!_.isEmpty(options.proxy) && !Helpers.isValidUrl(options.proxy)) 
        throw new Error("`proxy` parametr must be valid URL")
    if(_.isString(settings.interfaces) && !_.isEmpty(settings.interfaces)) {
        settings.interfaces = settings.interfaces.split(',');
        settings.interfaces = _.map(settings.interfaces, function (ip) {
            return trim(ip);
        });
    }
    if(!_.isArray(settings.interfaces))
        settings.interfaces = [];    
    return settings;
}

module.exports = configuration;


configuration.get = function (name) {
    return settings;
};


configuration.getDatabasePath = function (name) {
    if(!settings.databaseDir)
        throw new Error("Set `databaseDir` property of configuration first")
    return path.resolve(settings.databaseDir + "/" + name);
};


configuration.getCookiesPath = function (name) {
    if(!settings.cookiesDir)
        throw new Error("Set `cookiesDir` property of configuration first")
    return path.resolve(settings.cookiesDir + "/" + name);
};
