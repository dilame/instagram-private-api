
var Datastore = require('nedb')
var config = require('../config/config');
var dbPath = config.getDatabasePath('request-logs.db');
var dbConfig = dbPath ? { filename: dbPath, autoload: true } : {};
var db = new Datastore(dbConfig);
var Promise = require('bluebird');
var md5 = require('js-md5');
var _ = require('underscore');
var util = require('util');

// Resolve update, removes, etc every 20 minutes
db.persistence.setAutocompactionInterval(20 * 60 * 1000)

const SENSITIVE_RESOURCES = [
    'follow',
    'unfollow',
    'login',
    'logout',
    'comment',
    'like',
    'userInfo',
    'registration',
    'mediaConfigure',
    'threadsBrodcastText',
    'threadsBrodcastShare',
    'threadsBrodcastPhoto',
    'currentAccount',
    'setAccountPrivate',
    'setAccountPublic',
    'editAccount',
    'mediaDeletePhoto',
    'mediaConfigure'
];

const MAX_LOG_RECORDS = 200;

exports.SENSITIVE_RESOURCES = SENSITIVE_RESOURCES;
exports.MAX_LOG_RECORDS = MAX_LOG_RECORDS;


function RequestLogNotFound(message) {
    this.name = "RequestLogNotFound";
    this.message = "Record you are looking for not found!";
}
util.inherits(RequestLogNotFound, Error);
exports.RequestLogNotFound = RequestLogNotFound;


function count(query) {
    return new Promise(function (resolve, reject) {
        db.count(query, function (err, count) {
            if(err) return reject(err);
            resolve(count);
        })
    })
}
exports.count = count;


function findWithSkip(offset) {
    return new Promise(function (resolve, reject) {
        db.find({}).sort({ created: -1 }).skip(offset).limit(1)
            .exec(function (err, docs) {
                if(err) return reject(err);
                var last = _.last(docs);
                if(!last) return reject(new RequestLogNotFound);
                resolve(last);
            });
    })
}

function findWithOffset(offset) {
    return count({})
        .then(function (ct) {
            if(ct <= offset) return [];
            return findWithSkip(offset);
        })
}


function remove(query) {
    return new Promise(function (resolve, reject) {
        db.remove(query, {multi: true}, function (err, numRemoved) {
            if(err) return reject(err);
            resolve(numRemoved);
        })
    })
}
exports.remove = remove;



function removeEverythingByondOffset(offset) {
    return findWithOffset(offset)
        .then(function (record) {
            if(!record) return 0;
            return remove({created: {$lte: record.created}})
        })
        .catch(RequestLogNotFound, function () {
            return 0;
        })
}


function keepMaxRecords(count) {
    return removeEverythingByondOffset(count)
        .then(function (removed) {
            if(!config.get().suppressLog)
                console.info("Request Logs has been cleared (removed "+removed+" docs)");
            return removed;
        })
}

exports.keepMaxRecords = keepMaxRecords;
setInterval(function() {
    keepMaxRecords(MAX_LOG_RECORDS);
}, 60 * 60 * 1000);
keepMaxRecords(MAX_LOG_RECORDS);


exports.create = function(payload) {
    return new Promise(function(resolve, reject) {
        db.insert({
            instagramId: payload.instagramId,
            request: payload.request || {},
            response: payload.response || {},
            attemp: payload.attemp || 0,
            resource: payload.resource,
            created: payload.created || new Date().getTime()
        }, function(err, newDoc) {
            if (err) return reject(err);
            resolve(newDoc);
        });
    })
}

exports.flush = function(id, limit) {
    var query = {};
    if(id) query.instagramId = id;
    return new Promise(function(resolve, reject) {
        var cursor = db.find(query);
        if(limit) cursor.limit(parseInt(limit));
        cursor.sort({created: -1})
        cursor.exec(function (err, docs) {
            if (err) return reject(err);
            remove(query);
            resolve(docs);
        })
    })
};
