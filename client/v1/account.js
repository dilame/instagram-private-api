var util = require("util");
var _ = require("underscore");
var fs = require("fs");
var path = require("path");
var crypto = require('crypto');
var Resource = require('./resource');
var Request = require('./request');
var Helpers = require('../../helpers');
var camelize = require('underscore.string/camelize');


function Account() {
    Resource.apply(this, arguments);
}

util.inherits(Account, Resource);

module.exports = Account;
var Exceptions = require('./exceptions');
var AccountSearchFeed = require('./feeds/account-search');
var Session = require('./session');
var QE = require('./qe');
var Relationship = require('./relationship');
var Thread = require('./thread');
var discover = require('./discover');

Account.prototype.parseParams = function (json) {
    var hash = {};
    hash.username = json.username;
    hash.picture = json.profile_pic_url;
    hash.fullName = json.full_name;
    hash.id = json.pk || json.id || json.instagram_id;
    hash.isPrivate = json.is_private;
    hash.hasAnonymousProfilePicture = json.has_anonymous_profile_picture;
    if(_.isNumber(json.following_count))
        hash.followingsCount = json.following_count;
    if(_.isNumber(json.follower_count))
        hash.followersCount = json.follower_count;
    hash.isBusiness = !!json.is_business;
    if(_.isString(json.biography))
        hash.biography = json.biography;
    if(_.isNumber(json.media_count))    
        hash.mediaCount = parseInt(json.media_count);
    if(_.isString(json.external_url))    
        hash.externalUrl = json.external_url;
    if(_.isNumber(json.mutual_followers_count))    
        hash.mutualFollowersCount = json.mutual_followers_count;
    return hash;
};


// This is really tight on request limits
// If you need to refresh profile a lot use
// getByIdLimited
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


Account.searchForUser = function (session, username) {
    return new AccountSearchFeed(session, username)
        .get()
        .then(function(accounts) {
            var account = _.find(accounts, function(account) {
                return account.params.username === username;    
            })
            if(!account)
                throw new Exceptions.IGAccountNotFoundError();
            return account;    
        })        
};


Account.search = function (session, username) {
    return new AccountSearchFeed(session, username)
        .get()
        .then(function(accounts) {
            return accounts;
        })        
};


Account.checkUsername = function (device, username) {
    return new Request()
        .setMethod('POST')
        .setDevice(device)
        .setResource('checkUsername')
        .setData({username: username})
        .signPayload()
        .send();
};


Account.checkEmail = function (device, email) {
    return new Request()
        .setMethod('POST')
        .setDevice(device)
        .setResource('checkEmail')
        .setData({
            email: email,
            qe_id: Helpers.generateUUID()
        })
        .signPayload()
        .send();     
};


Account._create = function(session, email, username, password, name) {
    var uuid = Helpers.generateUUID();
    var guid = Helpers.generateUUID();
    return new Request(session)
        .setMethod('POST')
        .setResource('registration')
        .setData({
            phone_id: uuid,
            username: username,
            first_name: name,
            guid: guid,
            email: email,
            force_sign_up_code: "",
            qs_stamp: "",
            password: password
        })
        .signPayload()
        .send()
        .then(function(json) {
            if(!json.account_created)
                throw new Exceptions.RegistrationError(json.errors);
            return new Account(session, json.account_created);    
        })
};


Account.create = function (session, email, username, password, name) {
    return Account._create(session, email, username, password, name)
        .then(function (account) {
            return [account, QE.sync(session)];
        })
        .spread(function (account) {
            return [account, Relationship.autocompleteUserList(session)];
        })
        .spread(function (account) {
            return [account, Thread.recentRecipients(session)];
        })
        .spread(function (account) {
            return [account, discover(session, true)];
        })
}



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


Account.setPrivacy = function (session, private) {
    return new Request(session)
        .setMethod('POST')
        .setResource(private ? 'setAccountPrivate' : 'setAccountPublic')                    
        .generateUUID()
        .signPayload()
        .send()
        .then(function(json) {
            return new Account(session, json.user)    
        })
};


Account.prototype.setPrivacy = function(private) {
    var that = this;
    return Account.setPrivacy(this.session, private) 
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
            var parsed = {};
            var newJson = Account.prototype.parseParams(json.user);
            _.extend(newJson, json.user);
            _.each(newJson, function(val, key) {
                parsed[camelize(key, true)] = val;
            })
            return _.omit(parsed, 'hdProfilePicVersions', 'pk', 'hdProfilePicUrlInfo');
        });
};


Account.getSelfFeed = function (session) {
    return new Request(session)
        .setMethod('GET')
        .setResource('selfLiked')
        .signPayload()
        .send();
};


Account.prototype.editProfile = function(settings) {   
    return Account.editProfile(this.session, settings || {});
};


Account.prototype.showProfile = function() {   
    return Account.showProfile(this.session);
};

