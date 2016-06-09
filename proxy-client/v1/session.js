var Server = require('./server');
var _ = require('underscore');

function Session(server) {
    if(!(server instanceof Server))
        throw new Error("`server` argument should be instance of Server");
    this.server = server;
    this.account = null;
}

module.exports = Session;
var Account = require('./account');
var routes = require('./routes');
var Request = require('./request');
var DynamicProxyError = require('./exceptions').DynamicProxyError;

Session.prototype.setKey = function (key) {
    if(!_.isString(key))
        throw new Error("Key is not string, you need to supply string as key!")
    this._sessionKey = key;
    return this;
};

Session.prototype.getKey = function () {
    return this._sessionKey;
};

Session.prototype.getServer = function () {
    return this.server;
};

Session.prototype.setAccount = function(account) {
    this.account = account;
}

Session.prototype.getAccount = function() {
    return this.account;
}

Session.prototype.create = function (username, password) {
    // Additionally this will throw and exception
    var that = this;
    return Request.post(routes.getUrl(this.server, routes.URL.SESSIONS), {
        json: {
            username: username,
            password: password
        }
    })
    .then(function (data) {
        that.setKey(data.key);
        that.setAccount(new Account(that, data.account));
        return that;
    })
};

Session.prototype.updateAccount = function() {
    var that = this;
    return Account.show(this, this.account.id)
        .then(function(account) {
            that.setAccount(account);
            return that;
        })
}

Session.prototype.isValid = function() {
    return this.updateAccount()
        .then(function() {
            return true;
        }, function() {
            return false;
        })
}


Session.prototype.destroy = function () {
  var url = routes.getUrl(this.getServer(), routes.URL.SESSIONS);
  return Request.deleteWithSession(this, url)
};
