var _ = require('underscore');
var util = require('util');
var Promise = require('bluebird');
var Resource = require('./resource');
var Helpers = require('../../helpers');

var ACTIVE_USER = {
    FOLLOWERS: 10,
    MAX_TIME_LAST_PHOTO_TAKEN_AGO: 31 * 24 * 60 * 60 * 1000
};


function Account(session, params) {
    Resource.apply(this, arguments);
}

module.exports = Account;
util.inherits(Account, Resource)

var routes = require('./routes');
var Request = require('./request');
var Media = require('./media');
var Session = require('./session');


Account.create = function (server, email, username, password, fullName) {
    var url = routes.getUrl(server, routes.URL.ACCOUNTS, {});
    return Request.post(url, {
        json: {
            username: username,
            password: password,
            email: email,
            fullName: fullName
        }
    })
        .then(function (json) {
            var session = new Session(server);
            session.setKey(json.key);
            var account = new Account(session, json.account)
            session.setAccount(account);
            var hash = {};
            hash.account = account;
            hash.session = session;
            hash.discover = _.map(json.discover, function(a){
                a.account = new Account(session, a.account);
                return a;
            })
            hash.agent = json.agent;
            hash.created = json.created;
            return hash;
        })
};


Account.checkEmail = function (server, email) {
    var url = routes.getUrl(server, routes.URL.ACCOUNTS_CHECK_EMAIL, {});
    return Request.post(url, {
        json: {
            email: email
        }
    })
};


Account.checkUsername = function (server, username) {
    var url = routes.getUrl(server, routes.URL.ACCOUNTS_CHECK_USERNAME, {});
    return Request.post(url, {
        json: {
            username: username
        }
    })
};


Account.followers = function (session, accountId, cursor) {
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_FOLLOWERS, { id: accountId });
    var opts = _.isString(cursor) ? { qs: { cursor: cursor } } : {};
    return Request.getWithSession(session, url, opts)
        .then(function (json) {
            json.accounts = _.map(json.accounts, function (account) {
                return new Account(session, account);
            });
            return json;
        })
};


Account.follows = function (session, accountId, cursor) {
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_FOLLOWS, { id: accountId });
    var opts = _.isString(cursor) ? { qs: { cursor: cursor } } : {};
    return Request.getWithSession(session, url, opts)
        .then(function (json) {
            json.accounts = _.map(json.accounts, function (account) {
                return new Account(session, account);
            });
            return json;
        })
};


Account.followsAll = function (session, accountId) {
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_FOLLOWS_ALL, { id: accountId });
    return Request.getWithSession(session, url)
        .then(function (accounts) {
            return _.map(accounts, function (account) {
                return new Account(session, account);
            });
        })
};


Account.followsWithOffset = function (session, accountId, offset, limit) {
    if(!_.isNumber(offset))
        throw new Error("Offset must be an integer");
    var query = {};
    query.offset = offset;
    if(_.isNumber(limit))
        query.limit = limit;    
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_FOLLOWS_OFFSET, { 
        id: accountId
    });
    return Request.getWithSession(session, url, {qs: query})
        .then(function (accounts) {
            return _.map(accounts, function (account) {
                return new Account(session, account);
            });
        })
};


Account.search = function (session, username) {
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_SEARCH);
    return Request.postWithSession(session, url, {json: {username: username}})
        .then(function (accounts) {
            return _.map(accounts, function (account) {
                return new Account(session, account);
            })
        })
};


// This is much better for result in groups and other since it
// has no limits at all (at least never expirienced one)
Account.searchOneByUsername = function (session, username) {
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_SEARCH_STRICT);
    return Request.postWithSession(session, url, {json: {username: username}})
        .then(function (account) {
            return new Account(session, account); 
        })
};


// Carful limits are tight
Account.show = function(session, accountId) {
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_SHOW, { id: accountId });
    return Request.getWithSession(session, url)
        .then(function (account) {
            return new Account(session, account); 
        })
};


Account.self = function(session) {
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_SELF);
    return Request.getWithSession(session, url)
        .then(function (account) {
            return new Account(session, account); 
        })
};


Account.setPrivacy = function(session, private) {
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_SET_PRIVACY);
    return Request.postWithSession(session, url, {
        json: {private: !!private}
    })
        .then(function (account) {
            return new Account(session, account); 
        })
};


Account.showProfile = function(session) {
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_SHOW_PROFILE);
    return Request.getWithSession(session, url)
        .then(function (json) {
            return json;
        })
};


Account.editProfile = function(session, settings) {
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_EDIT_PROFILE);
    return Request.postWithSession(session, url, {
        json: {settings: settings}
    })
        .then(function (account) {
            return new Account(session, account); 
        })
};


Account.changeProfilePicture = function(session, image) {
    var data = Helpers.dataToRequestOption(image, 'picture');
    var url = routes.getUrl(session.getServer(), routes.URL.ACCOUNTS_PROFILE_PICTURE);
    return Request.postWithSession(session, url, {
        formData: { picture: data }
    })
    .then(function (account) {
        return new Account(session, account); 
    })
};


Account.prototype.isPrivate = function () {
    return this._params.isPrivate;
};


Account.prototype.setPrivacy = function (private) {
    var that = this;
    return Account.setPrivacy(this.session, private)
        .then(function(account) {
            that._params.isPrivate = account.params.isPrivate;
            return that;
        })
};


Account.prototype.editProfile = function (settings) {
    var that = this;
    return Account.editProfile(this.session, settings)
        .then(function(account) {
            that._params = account.params;
            return that;
        })
};


Account.prototype.changeProfilePicture = function (image) {
    var that = this;
    return Account.changeProfilePicture(this.session, image)
        .then(function(account) {
            that._params.picture = account.params.picture;
            return that;
        })
};


// test out
Account.prototype.followers = function (cursor) {
    return Account.followers(this.session, this.id, cursor);
};


// test out
Account.prototype.follows = function (cursor) {
    return Account.follows(this.session, this.id, cursor);
};


Account.prototype.isUserActive = function (maxTimePhotoTakeAgo, minFollowers) {
    maxTimePhotoTakeAgo || (maxTimePhotoTakeAgo = ACTIVE_USER.MAX_TIME_LAST_PHOTO_TAKEN_AGO)
    minFollowers || (minFollowers = ACTIVE_USER.FOLLOWERS)
    var url = routes.getUrl(this.session.getServer(), routes.URL.ACCOUNTS_IS_ACCOUNT_ACTIVE);
    return Request.postWithSession(this.session, url, {
        json: {
            lastPhotoTakenWithin: maxTimePhotoTakeAgo,
            followers: minFollowers,
            username: this.params.username
        }
    });
};
