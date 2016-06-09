var _ = require('underscore');
var fs = require('fs');
var Promise = require('bluebird');
var SessionModel = require('../../models/session');
var Instagram = require('../../instagram/v1');
var config = require('../../config/config');
var Helpers = require('../../../helpers');


exports.create = function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    SessionModel.comparePasswords(username, password)
        .then(function(allright) {
            if(allright) return true;
            return SessionModel.destroy({username: username})
                .then(function(){
                    var filePath = config.getCookiesPath(username + '.json');
                    if(Helpers.fileExists(filePath)) fs.unlinkSync(filePath);
                    return false;
                })    
        })
        .then(function(authenticated){
            if(authenticated){
                return SessionModel.getByUsername(username)
                    .then(function(document){
                        return Instagram.Device.getDeviceSafe(document.device, username);
                    });
            } else {
                return Instagram.Device.getDeviceSafe(null, username)
            }
        })
        .then(function(device){
            return [device, Instagram.Session.create(device, username, password)];
        })
        .spread(function(device, session){
            return [device, session, session.getAccount()];
        })
        .spread(function (device, session, account) {
            return [SessionModel.create(device, account.id, username, password), session, account];
        })
        .spread(function (model, session, account) {
            res.json({
                account: account.params,
                agent: session.device.userAgent(),
                key: model.key,
                created: model.created
            })
        })
        .catch(next);
};


exports.destroy = function (req, res, next) {
    var username = req.exploit.sessionModel.username;
    new Promise(function(resolve, reject) {
        if(req.exploit.session) 
            return resolve(req.exploit.session.destroy())
        return resolve();    
    })
        .then(function() {
            return SessionModel.destroy({username: username})
        })
        .then(function() {
            res.json({})
        })
        .catch(next);
};


exports.validateCreate = function (req, res, next) {
    req.checkBody('username', 'Invalid email parameter').notEmpty();
    req.checkBody('password', 'Password parameter is invalid').notEmpty();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.prepareKeyForDestroy = function (req, res, next) {
    req.exploit.destroyKey = true;
    next();
};


exports.processAndValidateKeyHTTP = function (req, res, next) {
    var message = 'Invalid key, please sign in before';
    var errors;
    if (!_.isEmpty(req.query.key)) {
        req.checkQuery('key', message).notEmpty().isKeyAvailable(req.query.key);
    } else {
        if(!config.get().suppressLog)
            console.error(req.method, req.originalUrl, req.body)
        return next(new Instagram.Exceptions.AuthenticationError("Session key not recognized", {}));
    }
    req.asyncValidationErrors()
        .then(function () {
            req.exploit.key = req.query.key || req.body.key;
            return SessionModel.getByKey(req.exploit.key);
        })
        .then(function (model) {
            req.exploit.sessionModel = model;
            SessionModel.touch({key: req.exploit.key});
            var device = Instagram.Device.getDeviceSafe(model.device, model.username);
            return Instagram.Session.createFromUsername(device, model.username)
                .catch(Instagram.Exceptions.CookieNotValidError, function(err){
                    if(req.exploit.destroyKey) return
                    throw err;
                })
        })
        .then(function (session) {
            req.exploit.session = session;
            next();
        })
        .catch(function (error) {
            if(!config.get().suppressLog) {
                console.error("Session Error", error)
                if(error.stack) console.error(error.stack)
                console.error(req.method, req.originalUrl, req.body)
            }
            next(new Instagram.Exceptions.AuthenticationError("Not possible to find key or create http session"));
        });
};


exports.processAndValidateKeySocketIO = function (socket, next) {
    var key = socket.handshake.query.key;
    var message = 'Invalid key, please sign in before';
    if (!_.isString(key))
        return next(new Instagram.Exceptions.AuthenticationError(message));
    return new Promise(function (resolve, reject) {
        SessionModel.getByKey(key).then(function (model) {
            if (!model) return reject('Key was not found!');
            resolve(model);
        }, reject);
    })
    .then(function (model) {
        socket.exploit = {};
        socket.exploit.sessionModel = model;
        SessionModel.touch({key: key});
        var device = Instagram.Device.getDeviceSafe(model.device, model.username);
        return Instagram.Session.createFromUsername(device, model.username);
    })
    .then(function (session) {
        socket.exploit.session = session;
        next();
    })
    .catch(function (error) {
        if(!config.get().suppressLog) {
            console.error("Session Error", error)
            if(error.stack) console.error(error.stack);
        }
        next(new Instagram.Exceptions.AuthenticationError("Not possible to find key or create socket session"));
    });
};

