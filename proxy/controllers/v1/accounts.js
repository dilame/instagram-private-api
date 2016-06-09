var _ = require('underscore');
var fs = require('fs');
var Instagram = require('../../instagram/v1');
var Helpers = require('../../../helpers');
var SessionModel = require('../../models/session');

function getQueryNumber(req, key) {
    if(_.isEmpty(req.query[key]))
        return;
    var number = parseInt(req.query[key]);
    if(_.isNaN(number))
        return;
    return number;            
}

exports.self = function (req, res, next) {
    req.exploit.session.getAccount()
        .then(function(account){
            res.json(account.params);
        })
        .catch(next)
};


exports.show = function (req, res, next) {
    Instagram.Account.getById(req.exploit.session, req.params.id)
        .then(function (account) {
            res.json(account.params);
        })
        .catch(next)
};


exports.searchSingleAccount = function (req, res, next) {
    Instagram.Account.searchForUser(req.exploit.session, req.body.username)
        .then(function (account) {
            res.json(account.params);
        })
        .catch(next)
};


exports.search = function (req, res, next) {
    Instagram.Account.search(req.exploit.session, req.body.username)
        .then(function (accounts) {
            res.json(_.pluck(accounts, 'params'))
        })
        .catch(next)
};


exports.followers = function (req, res, next) {
    var feed = new Instagram.Feed.AccountFollowers(req.exploit.session, req.params.id);
    if (req.query.cursor)
        feed.setMaxId(req.query.cursor);
    feed.get()
        .then(function (accounts) {
            res.json({
                accounts: _.pluck(accounts, 'params'),
                cursor: feed.getMaxId() || null,
                hasMoreAvailable: feed.isMoreAvailable()
            })
        })
        .catch(next);
};


exports.following = function (req, res, next) {
    var feed = new Instagram.Feed.AccountFollowing(req.exploit.session, req.params.id);
    if (req.query.cursor)
        feed.setMaxId(req.query.cursor);
    feed.get()
        .then(function (accounts) {
            res.json({
                accounts: _.pluck(accounts, 'params'),
                cursor: feed.getMaxId() || null,
                hasMoreAvailable: feed.isMoreAvailable()
            })
        })
        .catch(next);
};


exports.followingAll = function (req, res, next) {
    new Instagram.Feed.AccountFollowing(req.exploit.session, req.params.id)
        .allSafe()
        .then(function (accounts) {
            res.json(_.pluck(accounts, 'params'))
        })
        .catch(next);
};


exports.followingOffset = function (req, res, next) {
    const PER_PAGE = 200;
    const limit = getQueryNumber(req, 'limit');
    const offset = getQueryNumber(req, 'offset');
    Instagram.Account.getById(req.exploit.session, req.params.id)
        .then(function(account) {
            var followings = account.params.followingsCount;
            var cursor = Math.floor(offset / PER_PAGE)
            cursor = cursor * PER_PAGE;
            var feed = new Instagram.Feed.AccountFollowing(req.exploit.session, req.params.id, limit)
            // Sometimes cursor can be number as offset, but sometimes
            // I supose is rank cursor, to avoid some users
            if(offset !== 0) feed.setMaxId(cursor)
            return feed.allSafe();
        })
        .then(function (accounts) {
            if(accounts.length > 0) return accounts;
            var feed = new Instagram.Feed.AccountFollowing(req.exploit.session, req.params.id, offset + limit)
            return feed.allSafe();
        })
        .then(function(accounts) {    
            accounts = accounts.slice(offset);
            if(limit) accounts = _.first(accounts, limit);
            res.json(_.pluck(accounts, 'params'))
        })
        .catch(next);
};


exports.checkEmail = function (req, res, next) {
    var device = Instagram.Device.getRandom();
    Instagram.Account.checkEmail(device, req.body.email)
        .then(function(data) {
            res.json(data)
        })
        .catch(next);
};


exports.checkUsername = function (req, res, next) {
    var device = Instagram.Device.getRandom();
    Instagram.Account.checkUsername(device, req.body.username)
        .then(function(data) {
            res.json(data)
        })
        .catch(next);
};

exports.create = function (req, res, next) {
    var device = Instagram.Device.getDeviceSafe(null, req.body.username);
    var session = new Instagram.Session.createEmpty(device, req.body.username);
    Instagram.Account.create(session, req.body.email, req.body.username, req.body.password, req.body.fullName)
        .spread(function(account, discover) {
            var model = SessionModel.create(device, account.id, req.body.username, req.body.password);
            return [model, account, discover];
        })
        .spread(function(model, account, discover) {
            res.json({
                account: account.params,
                discover: _.map(discover, function(d) {
                    d.account = d.account.params;
                    return d;
                }),
                agent: session.device.userAgent(),
                key: model.key,
                created: model.created
            })
        })
        .catch(next);
};


exports.isActive = function (req, res, next) {
    Instagram.Account.searchForUser(req.exploit.session, req.body.username)
        .then(function(account) {
            var params = account.params;
            if (params.followersCount < req.body.followers)
                throw new Instagram.Exceptions.AccountInactive(account);
            return account;
        })
        .then(function (account) {
            if (account.params.isPrivate) 
                throw new Instagram.Exceptions.AccountActivityPrivateFeed;
            return new Instagram.Feed.UserMedia(req.exploit.session, account.id, 1)
                .get()
                .then(function (medias) {
                    return [_.first(medias), account];    
                })
        })
        .spread(function(medium, account) {
            if(!medium) throw new Instagram.Exceptions.AccountInactive;
            if (medium.params.takenAt < (new Date().getTime() - req.body.lastPhotoTakenWithin))
                throw new Instagram.Exceptions.AccountInactive(account);
            res.json({
                active: true,
                privateUser: false
            })    
        })
        .catch(Instagram.Exceptions.AccountActivityPrivateFeed, function() {
            res.json({
                active: true,
                privateUser: true
            })
        })
        .catch(Instagram.Exceptions.AccountInactive, function() {
            res.json({
                active: false,
                privateUser: false
            })
        })
        .catch(next)
};


exports.showValidation = function (req, res, next) {
    if(!_.isNumber(req.params.id))
        req.checkParams('id', 'Invalid id param, must be int').isNumeric().notEmpty();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.showFollowingOffset = function (req, res, next) {
    var number = getQueryNumber(req, 'offset');
    if(!number)
        req.checkQuery('offset', 'Invalid last query params, must be int').isNumeric().notEmpty();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.setProfilePicture = function (req, res, next) {
    Instagram.Images.resize(req.file.path)
        .then(function(path) {
            return Instagram.Account.setProfilePicture(req.exploit.session, path)
        })
        .then(function(account) {
            res.json(account.params)
        })
        .catch(next)
};


exports.setPrivacy = function (req, res, next) {
    Instagram.Account.setPrivacy(req.exploit.session, req.body.private)
        .then(function(account) {
            res.json(account.params)
        })
        .catch(next)
};


exports.showProfile = function (req, res, next) {
    return Instagram.Account.showProfile(req.exploit.session)
        .then(function (json) {
            res.json(json);
        })
        .catch(next)
};


exports.editProfile = function (req, res, next) {
    return Instagram.Account.editProfile(req.exploit.session, req.body.settings)
        .then(function(account){
            res.json(account.params);
        })
        .catch(next)
};


exports.editProfileValidation = function (req, res, next) {
    var errors;
    if(!_.isObject(req.body.settings))   
        errors = [{ "param": "settings", "msg": "Settings must be an object" }];        
    if(_.isString(req.body.settings.email) && !Helpers.validateEmail(req.body.settings.email))   
        errors = [{ "param": "email", "msg": "Email must be an valid email" }];         
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.privacyValidation = function (req, res, next) {
    var errors;
    if(!_.isBoolean(req.body.private))   
        errors = [{ "param": "private", "msg": "Private must be a boolean!" }];        
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};

exports.createValidation = function (req, res, next) {
    req.checkBody('username', 'Invalid username param, must be string').notEmpty().validIGUsername();
    req.checkBody('password', 'Invalid password param, must be string, length greater then 6').notEmpty().lengte(7);
    req.checkBody('email', 'Invalid email param, must be string').isEmail().notEmpty();
    var errors = req.validationErrors();
    if(!_.isEmpty(req.body.fullName) && !_.isString(req.body.fullName))   
        errors = [{ "param": "fullName", "msg": "fullName must be a string" }];        
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.emailValidation = function (req, res, next) {
    req.checkBody('email', 'Invalid email param, must be valid email').isEmail().notEmpty();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.usernameValidation = function (req, res, next) {
    req.checkBody('username', 'Invalid username param, must be valid string').notEmpty().validIGUsername();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.searchValidation = function (req, res, next) {
    req.checkBody('username', 'Username must be valid username').notEmpty().validIGUsername();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.isActiveValidation = function (req, res, next) {
    if(!_.isNumber(req.body.lastPhotoTakenWithin))
        req.checkBody('lastPhotoTakenWithin', '`lastPhotoTakenWithin` must be integer').notEmpty().isNumeric();
    if(!_.isNumber(req.body.followers))    
        req.checkBody('followers', '`followers` minimum number of followers must be integer').notEmpty().isNumeric();
    req.checkBody('username', '`username` must be valid username').notEmpty().validIGUsername();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};



exports.profilePictureValidation = function (req, res, next) {
    var allowed = ['image/jpeg', 'image/gif', 'image/png', 'image/jpg'];
    if (!req.file || !_.contains(allowed, req.file.mimetype)) {
        var errors = [{ "param": "picture", "msg": "Invalid file or type, picture must be " + allowed.join(', ') }];
        next(new Instagram.Exceptions.InvalidParamsError(errors));
    } else {
        next();
    }
};
