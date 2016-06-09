var Datastore = require('nedb')
var config = require('../config/config');
var dbPath = config.getDatabasePath('sessions.db');
var dbConfig = dbPath ? { filename: dbPath, autoload: true } : {};
var db = new Datastore(dbConfig);
var Promise = require('bluebird');
var md5 = require('js-md5');
var _ = require('underscore');

db.ensureIndex({
    fieldName: 'key',
    unique: true
}, function(err) {
    if (err) throw err;
});

db.ensureIndex({
    fieldName: 'username',
    unique: true
}, function(err) {
    if (err) throw err;
});


function destroy(doc) {
    return new Promise(function(resolve, reject) {
        db.remove(doc, function(err, doc) {
            if (err) return reject(err);
            resolve()
        });
    })
}

function create(device, instagramId, username, password) {
    return destroy({username: username})
        .then(function() {
            return new Promise(function(resolve, reject) {
                db.insert({
                    key: md5(Math.random().toString() + username),
                    username: username,
                    instagramId: instagramId,
                    password: md5(password),
                    device: device.getIndex(),
                    touched: new Date().getTime(),
                    created: new Date().getTime()
                }, function(err, newDoc) {
                    if (err) return reject(err);
                    resolve(newDoc);
                });
            })
        })
}

function getBy(params) {
    return new Promise(function(resolve, reject) {
        db.findOne(params, function(err, doc) {
            if (err) return reject(err);
            resolve(doc);
        })
    })
}


function touch(query) {
    return new Promise(function(resolve, reject) {
        var date = new Date;
        db.update(query, {$set: {touched: date}}, {}, function(err, numReplaced) {
            if (err) return reject(err);
            resolve(numReplaced == 1 ? date : false);
        })
    })
}



exports.create = create;
exports.destroy = destroy;
exports.touch = touch;

exports.availability = function () {
    return new Promise(function(resolve, reject) {
        var date = new Date().getTime() - 24 * 60 * 60 * 1000;
        db.count({touched: {$gte: date}}, function(err, count) {
            if (err) return reject(err);
            resolve(count);
        })
    })
}

exports.getByKey = function(key) {
    return getBy({ key: key })
};

exports.getByUsername = function(username) {
    return getBy({ username: username })
};

exports.comparePasswords = function(username, password) {
    return getBy({ username: username })
        .then(function(document){
            if(!_.isObject(document)) return false;
            return document.password == md5(password)
        })
};