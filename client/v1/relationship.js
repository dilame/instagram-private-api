var util = require("util");
var _ = require("underscore");
var Resource = require('./resource');
var Helpers = require('../../helpers');

function Relationship(session, params) {
    this.cursor = {};
    this.moreAvailable = {
        follower: false,
        following: false
    };
    Resource.apply(this, arguments);
}

util.inherits(Relationship, Resource);
module.exports = Relationship;
var Request = require('./request');
var Account = require('./account');
var Exceptions = require('./exceptions');

Relationship.prototype.setCursor = function (maxId, type) {
    this.cursor[type] = maxId;
};

Relationship.prototype.getCursor = function (type) {
    return this.cursor[type];
};

Relationship.prototype.isMoreAvailable = function(type) {
    return !!this.moreAvailable[type];
};

Relationship.prototype.parseParams = function(json) {
    var hash = {};
    hash.incomingRequest = json.incoming_request;
    hash.outgoingRequest = json.outgoing_request;
    hash.followedBy = json.followed_by;
    hash.following = json.following;
    hash.blocking = json.blocking;
    hash.isPrivate = json.is_private;
    return hash;
};


Relationship.prototype.setAccountId = function(accountId) {
    this.accountId = parseInt(accountId);
};


Relationship.prototype.getParams = function() {
    return _.defaults({
        accountId: this.accountId
    }, this._params)
};


Relationship.get = function (session, accountId) {
    return new Request(session)
        .setMethod('GET')
        .setResource('friendshipShow', {id: accountId})
        .send()
        .then(function(data) {
            var relationship = new Relationship(session, data);
            relationship.setAccountId(accountId);
            return relationship;
        })
};


Relationship.getMany = function (session, accountIds) {
    return new Request(session)
        .setMethod('POST')
        .generateUUID()
        .setData({user_ids: accountIds.join(',')})
        .setResource('friendshipShowMany')
        .send()
        .then(function(data) {
            return _.map(data.friendship_statuses, function(data, key) {
                var relationship = new Relationship(session, data);    
                relationship.setAccountId(key);
                return relationship;
            })
        })
};


Relationship.create = function (session, accountId) {
    return new Request(session)
        .setMethod('POST')
        .setResource('follow', {id: accountId})
        .generateUUID()
        .setData({user_id: accountId})
        .signPayload()
        .send()
        .then(function(data) {
            var relationship = new Relationship(session, data.friendship_status);    
            relationship.setAccountId(accountId);
            return relationship;
        })
        .catch(function (err) {
            if(err instanceof Exceptions.RequestError && err.message.indexOf('following the max limit') !== -1){
                throw new Exceptions.TooManyFollowsError();
            } else {
                throw err;
            }
        })
};


Relationship.destroy = function (session, accountId) {
    return new Request(session)
        .setMethod('POST')
        .setResource('unfollow', {id: accountId})
        .generateUUID()
        .setData({user_id: accountId})
        .signPayload()
        .send()
        .then(function(data) {
            var relationship = new Relationship(session, data.friendship_status);    
            relationship.setAccountId(accountId);
            return relationship; 
        })
};


Relationship.autocompleteUserList = function (session) {
    return new Request(session)
        .setMethod('GET')
        .setResource('autocompleteUserList')
        .send()
        .then(function(json) {
            json.accounts = _.map(json.users, function (account) {
                return new Account(session, account);
            });
            json.expires = parseInt(json.expires * 1000);
            return json;
        })
};

Relationship.block = function (session, accountId) {
    return new Request(session)
        .setMethod('POST')
        .setResource('block', {id: accountId})
        .generateUUID()
        .setData({user_id: accountId})
        .signPayload()
        .send()
        .then(function(data) {
            var relationship = new Relationship(session, data.friendship_status);
            relationship.setAccountId(accountId);
            return relationship;
        });
};

Relationship.prototype.block = function () {
    return Relationship.block(this.session, this.accountId)
};

Relationship.unblock = function (session, accountId) {
    return new Request(session)
        .setMethod('POST')
        .setResource('unblock', {id: accountId})
        .generateUUID()
        .setData({user_id: accountId})
        .signPayload()
        .send()
        .then(function(data) {
            var relationship = new Relationship(session, data.friendship_status);
            relationship.setAccountId(accountId);
            return relationship;
        });
};

Relationship.prototype.unblock = function () {
    return Relationship.unblock(this.session, this.accountId)
};

Relationship.prototype.getFollowers = function (session, accountId) {
    var that = this;
    var params = {
        id: accountId
    };
    if (this.moreAvailable.follower) {
        params.rankToken = null;
        params.maxId = this.cursor['follower'];
    } else {
        params.rankToken = Helpers.buildRankToken(accountId);
        params.maxId = null;
    }

    return new Request(session)
        .setMethod('GET')
        .setResource('userFollowers', params)
        .send()
        .then(function(json) {
            that.moreAvailable.follower = !!json.next_max_id;
            if (that.moreAvailable.follower) {
                that.setCursor(json.next_max_id, 'follower');
            }
            return _.map(json.users, function (account) {
                return new Account(session, account);
            });
        })
};

Relationship.prototype.getFollowings = function (session, accountId) {
    var that = this;
    var params = {
        id: accountId
    };
    if (this.moreAvailable.following) {
        params.rankToken = null;
        params.maxId = this.cursor['following'];
    } else {
        params.rankToken = Helpers.buildRankToken(accountId);
        params.maxId = null;
    }

    return new Request(session)
        .setMethod('GET')
        .setResource('userFollowings', params)
        .send()
        .then(function(json) {
            that.moreAvailable.following = !!json.next_max_id;
            if (that.moreAvailable.following) {
                that.setCursor(json.next_max_id, 'following');
            }
            return _.map(json.users, function (account) {
                return new Account(session, account);
            });
        })
};
