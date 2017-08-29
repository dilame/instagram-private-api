var util = require("util");
var _ = require("lodash");
var Resource = require('./resource');
var Request = require('./request');
var Helpers = require('../../helpers');
var camelKeys = require('camelcase-keys');

function Account() {
    Resource.apply(this, arguments);
}

util.inherits(Account, Resource);

module.exports = Account;
var Exceptions = require('./exceptions');

Account.prototype.parseParams = function (json) {
    var hash = camelKeys(json);
    hash.picture = json.profile_pic_url;
    hash.id = json.pk || json.id || json.instagram_id;
    return hash;
};


Account.getById = function (session, id) {
    return new Request(session)
        .setMethod('GET')
        .setResource('userInfo', {id: id})
        .send()
        .then(function(data) {
            return new Account(session, data.user)
        })
};  


Account.prototype.update = function () {
    var that = this;
    return Account.getById(this.session, this.id)
        .then(function(account) {
            that._params = account.params
            return that;
        })
};  


Account.search = function (session, username) {
    return session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(session)
                .setMethod('GET')
                .setResource('accountsSearch', {
                    query: username,
                    rankToken: rankToken
                })
                .send();
        })
        .then(function(data) {
            return _.map(data.users, function (user) {
                return new Account(session, user);
            });
        })    
};


Account.searchForUser = function (session, username) {
    return Account.search(session, username)
        .then(function(accounts) {
            var account = _.find(accounts, function(account) {
                return account.params.username === username;    
            })
            if(!account)
                throw new Exceptions.IGAccountNotFoundError();
            return account;    
        })        
};


Account.setProfilePicture = function (session, streamOrPath) {
    var stream = Helpers.pathToStream(streamOrPath);
    var request = new Request(session)
    return request.setMethod('POST')
        .setResource('changeProfilePicture')                    
        .generateUUID()
        .signPayload()
        .transform(function(opts){
            opts.formData.profile_pic = {
                value: stream,
                options: {
                    filename: 'profile_pic',
                    contentType: 'image/jpeg'
                }
            }
            return opts;
        })
        .send()
        .then(function(json) {
            return new Account(session, json.user)    
        })
};


Account.prototype.setProfilePicture = function(streamOrPath) {
    var that = this;
    return Account.setProfilePicture(this.session, streamOrPath)
        .then(function(user) {
            that._params.picture = user.params.picture;
            return that;
        })
};


Account.setPrivacy = function (session, pri) {
    return new Request(session)
        .setMethod('POST')
        .setResource(pri ? 'setAccountPrivate' : 'setAccountPublic')                    
        .generateUUID()
        .signPayload()
        .send()
        .then(function(json) {
            return new Account(session, json.user)    
        })
};


Account.prototype.setPrivacy = function(pri) {
    var that = this;
    return Account.setPrivacy(this.session, pri) 
        .then(function(user) {
            that._params.isPrivate = user.params.isPrivate;
            return that;
        })
};


Account.editProfile = function(session, settings) {
    settings = _.isObject(settings) ? settings : {};
    if(_.isString(settings.phoneNumber))
         settings.phone_number = settings.phoneNumber;
    if(_.isString(settings.fullName))
         settings.first_name = settings.fullName;
    if(_.isString(settings.externalUrl))
         settings.external_url = settings.externalUrl;
    var pickData = function (o) {
        return _.pick(o, 'gender', 'biography', 'phone_number', 'first_name', 'external_url', 'username', 'email');
    }     
    return new Request(session)
        .setMethod('GET')
        .setResource('currentAccount')
        .send()
        .then(function (json) {
            return new Request(session)
                .setMethod('POST')
                .setResource('editAccount')                    
                .generateUUID()
                .setData(pickData(_.extend(json.user, settings)))
                .signPayload()
                .send()
        })
        .then(function(json) {
            var account = new Account(session, json.user)    
            return account.update();
        })
        .catch(function(e) {
            if(e && e.json && e.json.message && _.isArray(e.json.message.errors)) {
                throw new Exceptions.RequestError({
                    message: e.json.message.errors.join('. ')
                })
            }
            throw e;
        })
};


Account.showProfile = function(session) {
    return new Request(session)
        .setMethod('GET')
        .setResource('currentAccount')
        .send()
        .then(function (json) {
            return Account.prototype.parseParams(json.user);
        });
};


Account.prototype.editProfile = function(settings) {   
    return Account.editProfile(this.session, settings || {});
};


Account.prototype.showProfile = function() {   
    return Account.showProfile(this.session);
};

