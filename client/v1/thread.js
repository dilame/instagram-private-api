var util = require("util");
var _ = require("underscore");
var Resource = require("./resource");
var Promise = require("bluebird");


function Thread(session, params) {
    Resource.apply(this, arguments);
}

util.inherits(Thread, Resource);
module.exports = Thread;

var Account = require('./account');
var ThreadItem = require('./thread-item');
var Exceptions = require('./exceptions');
var Request = require('./request');
var Helpers = require('../../helpers');


function mapPayload(session, payload) {
    return _.map(payload.threads, function(thread) {
        return new Thread(session, thread);
    })
}

function threadsWrapper(session, promise) {
    return promise.then(function (json) {
        if(_.isArray(json.threads))
            return mapPayload(session, json);
        if(_.isEmpty(json.thread_id))
            throw new Error("Not sure how to map an thread!");   
        // You cannot fetch thread id inmedietly after configure / broadcast
        return Promise.delay(1000).then(function () {
            return Thread.getById(session, json.thread_id) 
        })
        .then(function (thread) {
            return [thread];
        })  
    })
}


Thread.prototype.parseParams = function (params) {
    var hash = {};
    var that = this;
    hash.id = params.thread_id;
    if (_.isObject(params.image_versions2))
        hash.images = params.image_versions2.candidates;
    hash.lastActivityAt = parseInt(params.last_activity_at / 1000) || null;
    hash.muted = !!params.muted;
    hash.title = params.thread_title;
    hash.threadType = params.thread_type;
    hash.pending = params.pending;
    hash.itemsSeenAt = {};
    _.each(params.last_seen_at || [], function (val, key) {
        hash.itemsSeenAt[key] = {
            itemId: val.item_id,
            timestamp: parseInt(parseInt(val.timestamp) / 1000)
        }
    });
    hash.inviter = new Account(that.session, params.inviter);
    this.items = _.map(params.items, function (item) {
        return new ThreadItem(that.session, item);
    });
    this.accounts = _.map(params.users, function (user) {
        return new Account(that.session, user);
    });
    this.leftUsers = _.map(params.left_users, function (user) {
        return new Account(that.session, user);
    });
    return hash;
};


Thread.prototype.getParams = function () {
    var params = _.clone(this._params);
    params.accounts = _.pluck(this.accounts, 'params');
    params.items = _.pluck(this.items, 'params');
    params.inviter = params.inviter.params;
    return params;
};


Thread.prototype.seen = function () {
    var firstItem = _.first(this.items);
    if(!firstItem)
        throw new Exceptions.ThreadEmptyError();
    var that = this;    
    return this.request()
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsSeen', {
            threadId: that.id,
            itemId: firstItem.id
        })
        .setData({
            client_context: Helpers.generateUUID()
        })
        .send()
        .then(function(data) {
            return { 
                unseenCount: data.unseen_count, 
                unseenCountTimestamp: parseInt(data.unseenCountTimestamp / 1000) 
            }
        });
};

Thread.prototype.approve = function () {
    var that = this;  
    return this.request()
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsApprove', {
            threadId: that.id
        })
        .send();
};


Thread.prototype.hide = function () {
    var that = this;  
    return this.request()
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsHide', {
            threadId: that.id
        })
        .send();
};


Thread.prototype.broadcastText = function (text) {
    var request = this.request()
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsBrodcastText')
        .setData({
            thread_ids: '[' + this.id + ']',
            client_context: Helpers.generateUUID(),
            text: text
        })
        .send()
    return threadsWrapper(this.session, request)
};


Thread.prototype.broadcastMediaShare = function (mediaId, text) {
    var payload = {
        thread_ids: '[' + this.id + ']',
        media_id: mediaId,
        client_context: Helpers.generateUUID()
    };
    if(_.isString(text)) 
        payload.text = text;
    var request = this.request()
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsBrodcastShare')
        .setData(payload)
        .send();
    return threadsWrapper(this.session, request);
};


Thread.prototype.broadcastProfile = function (profileId, simpleFormat, text) {
    var payload = {
        thread_ids: '[' + this.id + ']',
        simple_format: simpleFormat ? '1' : '0',
        profile_user_id: profileId,
        client_context: Helpers.generateUUID()
    }
    if(_.isString(text)) 
        payload.text = text;
    var request = this.request()
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsBrodcastProfile')
        .setData(payload)
        .send();
    return threadsWrapper(this.session, request)    
};


Thread.prototype.broadcastHashtag = function (hashtag, simpleFormat, text) {
    var payload = {
        thread_ids: '[' + this.id + ']',
        simple_format: simpleFormat ? '1' : '0',
        hashtag: hashtag,
        client_context: Helpers.generateUUID()
    }
    if(_.isString(text)) 
        payload.text = text;
    var request = this.request()
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsBrodcastHashtag')
        .setData(payload)
        .send();
    return threadsWrapper(this.session, request)    
};

// todo configure broadcast /configure location  


Thread.approveAll = function (session) {
    return new Request(session)
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsApproveAll')
        .send();   
};


Thread.getById = function (session, id) {
    if(_.isEmpty(id))
        throw new Error("`id` property is required!")
    return new Request(session)
        .setMethod('GET')
        .generateUUID()
        .setResource('threadsShow', {
            threadId: id,
            cursor: null
        })
        .send()
        .then(function(json) {
            return new Thread(session, json.thread)
        })
};


Thread.configureText = function(session, users, text) { 
    if(!_.isArray(users)) users = [users]; 
    var payload = {
        recipient_users: JSON.stringify([users]),
        client_context: Helpers.generateUUID(),
        text: text
    };
    var request = new Request(session)
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsBrodcastText')
        .setData(payload)
        .send();
    return threadsWrapper(session, request);  
};


Thread.configureMediaShare = function(session, users, mediaId, text) {  
    if(!_.isArray(users)) users = [users];
    var payload = {
        recipient_users: JSON.stringify([users]),
        client_context: Helpers.generateUUID(),
        media_id: mediaId
    };
    if(_.isString(text)) 
        payload.text = text;
    var request = new Request(session)
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsBrodcastShare')
        .setData(payload)
        .send();  
    return threadsWrapper(session, request);  
};


Thread.configureProfile = function(session, users, profileId, simpleFormat, text) {  
    if(!_.isArray(users)) users = [users];
    var payload = {
        recipient_users: JSON.stringify([users]),
        simple_format: simpleFormat ? '1' : '0',
        profile_user_id: profileId,
        client_context: Helpers.generateUUID()    
    };
    if(_.isString(text)) 
        payload.text = text;
    var request = new Request(session)
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsBrodcastProfile')
        .setData(payload)
        .send();
    return threadsWrapper(session, request)        
};


Thread.configureHashtag = function(session, users, hashtag, simpleFormat, text) {  
    if(!_.isArray(users)) users = [users];
    var payload = {
        recipient_users: JSON.stringify([users]),
        simple_format: simpleFormat ? '1' : '0',
        hashtag: hashtag,
        client_context: Helpers.generateUUID()    
    };
    if(_.isString(text)) 
        payload.text = text;
    var request = new Request(session)
        .setMethod('POST')
        .generateUUID()
        .setResource('threadsBrodcastHashtag')
        .setData(payload)
        .send();
    return threadsWrapper(session, request)        
};


Thread.recentRecipients = function(session) {  
    return new Request(session)
        .setMethod('GET')
        .setResource('threadsRecentRecipients')
        .send()
        .then(function(json) {
            return {
                recentRecipients: json.recent_recipients,
                expirationInterval: json.expiration_interval 
            }
        });
};
