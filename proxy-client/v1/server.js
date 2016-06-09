var fs = require('fs');
var _ = require('underscore');
var routes = require('./routes');
var Request = require('./request');


function Server(host, port, socketPort) {
    this.host = host;
    this.port = port;
    this.socketPort = socketPort;
};

module.exports = Server;


Server.prototype.check = function () {
    // Additionally this will throw and exception
    return Request.get(routes.getUrl(this, routes.URL.HOME));
};


Server.prototype.address = function () {
    return this.host + ':' + (this.port || 80);
};

Server.prototype.socketAddress = function () {
    return this.host + ':' + (this.socketPort || 8080);
};