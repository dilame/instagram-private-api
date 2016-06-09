var Promise = require('bluebird');
var Resource = require('./resource');
var _ = require('underscore');
var util = require('util');
var io = require("socket.io-client");

function Thread(session, params) {
    Resource.apply(this, arguments);
}

module.exports = Thread;
util.inherits(Thread, Resource);

var routes = require('./routes');
var Request = require('./request');
var ThreadItem = require('./thread-item');
var Account = require('./account');

function mapThreadsToOne(session) {
    return function (threads) {
        return new Thread(session, _.first(threads))
    }
}

Thread.seen = function (session, id) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_SEEN, { id: id });
    return Request.getWithSession(session, url)
};


Thread.hide = function (session, id) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_HIDE, { id: id });
    return Request.getWithSession(session, url)
};


Thread.all = function (session, limit) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS);
    return Request.getWithSession(session, url, { qs: { limit: limit } })
        .then(function (threads) {
            return _.map(threads, function (thread) {
                return new Thread(session, thread);
            })
        })
};

Thread.subscribeAll = function (session, onUpdate, onError) {
    var server = session.getServer();
    var socket = io.connect('http://'+server.socketAddress()+'/v1/threads', {
        query: "key="+session.getKey()
    });
    socket.on('update', function(thread) {
        onUpdate.call(socket, new Thread(session, thread))
    });
    socket.on('error', function (error) {
        onError.call(socket, new Error(error));
    });
    return socket; 
};


Thread.subscribe = function (session, id, onUpdate, onError) {
    var server = session.getServer();
    var socket = io.connect('http://'+server.socketAddress()+'/v1/thread', {
        query: "key="+session.getKey()+"&id=" + id
    });
    socket.on('update', function (thread) {
        onUpdate.call(socket, new Thread(session, thread))
    });
    socket.on('error', function (error) {
        onError.call(socket, new Error(error));
    });
    return socket;    
};


Thread.approveAll = function (session) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_APPROVE_ALL);
    return Request.getWithSession(session, url);
};


Thread.approve = function (session, id) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_APPROVE, {id: id});
    return Request.getWithSession(session, url);
};


Thread.show = function (session, id, itemsLimit) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_SHOW, { id: id });
    return Request.getWithSession(session, url, { qs: { limit: itemsLimit } })
        .then(function (thread) {
            return new Thread(session, thread);
        })
};


function sendWithText(promise, text) {
    var items = [];
    return promise.then(function(thread) {
        items = thread.params.items;
        return _.isString(text) && text.length > 0 ? thread.broadcastText(text) : thread;
    })
    .then(function(thread) {
        var newItems = items.concat(thread.params.items);
        var itemsUnique = {};
        _.each(newItems, function(value) {
            itemsUnique[value.id] = value;
        })
        newItems = _.values(itemsUnique);
        newItems = _.sortBy(newItems, function(item) {
            return -item.created.getTime();
        });
        thread.items = _.map(newItems, function(item) {
            return new ThreadItem(thread.session, item);
        });
        thread.extendParams({items: newItems});
        return thread;
    })
};


Thread.configureText = function (session, recipients, text) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_CONFIGURE_TEXT);
    return Request.postWithSession(session, url, {
        json: {
            recipients: recipients,
            text: text
        }
    })
    .then(mapThreadsToOne(session))
};


Thread.configureMediaShare = function (session, recipients, mediaShareId) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_CONFIGURE_MEDIA_SHARE);
    return Request.postWithSession(session, url, {
        json: {
            recipients: recipients,
            mediaId: mediaShareId
        }
    })
        .then(mapThreadsToOne(session))
};


Thread.configureMediaShareWithText = function (session, recipients, mediaShareId, text) {
    return sendWithText(Thread.configureProfile(session, recipients, mediaShareId), text)   
};


Thread.configureProfile = function (session, recipients, profileId, simpleFormat) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_CONFIGURE_PROFILE);
    return Request.postWithSession(session, url, {
        json: {
            recipients: recipients,
            profileId: profileId,
            simpleFormat: !!simpleFormat
        }
    })
    .then(mapThreadsToOne(session))
};


Thread.configureProfileWithText = function (session, recipients, profileId, text, simpleFormat) {
    return sendWithText(Thread.configureProfile(session, recipients, profileId, simpleFormat), text)   
};


Thread.configureHashtag = function (session, recipients, hashtag, simpleFormat) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_CONFIGURE_HASHTAG);
    return Request.postWithSession(session, url, {
        json: {
            recipients: recipients,
            hashtag: hashtag,
            simpleFormat: !!simpleFormat
        }
    })
    .then(mapThreadsToOne(session))
};


Thread.configureHashtagWithText = function (session, recipients, hashtag, text, simpleFormat) {
    return sendWithText(Thread.configureHashtag(session, recipients, hashtag, simpleFormat), text)   
};


Thread.broadcastText = function (session, id, text) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_BROADCAST_TEXT);
    return Request.postWithSession(session, url, {
        json: {
            id: id,
            text: text
        }
    })
    .then(mapThreadsToOne(session))
}


Thread.broadcastMediaShare = function (session, id, mediaId) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_BROADCAST_MEDIA_SHARE);
    var payload = {
        id: id,
        mediaId: mediaId
    };
    return Request.postWithSession(session, url, {
        json: payload
    })
    .then(mapThreadsToOne(session))
};


Thread.broadcastMediaShareWithText = function (session, id, mediaId, text) {
    return sendWithText(Thread.broadcastMediaShare(session, id, mediaId), text)
};


Thread.broadcastProfile = function (session, id, profileId, simpleFormat) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_BROADCAST_PROFILE);
    return Request.postWithSession(session, url, {
        json: {
            id: id,
            profileId: profileId,
            simpleFormat: !!simpleFormat
        }
    })
    .then(mapThreadsToOne(session))
};


Thread.broadcastProfileWithText = function (session, id, profileId, text, simpleFormat) {
    return sendWithText(Thread.broadcastProfile(session, id, profileId, simpleFormat), text);
};


Thread.broadcastHashtag = function (session, id, hashtag, simpleFormat) {
    var url = routes.getUrl(session.getServer(), routes.URL.THREADS_BROADCAST_HASHTAG);
    return Request.postWithSession(session, url, {
        json: {
            id: id,
            hashtag: hashtag,
            simpleFormat: !!simpleFormat
        }
    })
    .then(mapThreadsToOne(session))
};


Thread.broadcastHashtagWithText = function (session, id, hashtag, text, simpleFormat) {
    return sendWithText(Thread.broadcastHashtag(session, id, hashtag, simpleFormat), text);
};


Thread.prototype.parseParams = function (params) {
    var that = this;
    this.items = _.map(params.items, function(item) {
        return new ThreadItem(that.session, item);
    });
    this.inviter = new Account(this.session, params.inviter);
    this.accounts = _.map(params.accounts, function(user) {
        return new Account(that.session, user);
    });
    return params;
};


Thread.prototype.extendParams = function (object) {
    this._params = _.extend(this._params, object || {});
    return this;
};

Thread.prototype.getParams = function (object) {
    return _.defaults({
        items: _.pluck(this.items, 'params'),
        inviter: this.inviter.params,
        accounts: _.pluck(this.accounts, 'params'),
    }, this._params);
};


Thread.prototype.hide = function() {
    return Thread.hide(this.session, this.id);
}


Thread.prototype.seen = function() {
    return Thread.seen(this.session, this.id);
}


Thread.prototype.broadcastText = function (text) {
    return Thread.broadcastText(this.session, this.id, text);
}


Thread.prototype.broadcastMediaShare = function (mediaId) {
    return Thread.broadcastMediaShare(this.session, this.id, mediaId);
}


Thread.prototype.broadcastMediaShareWithText = function (mediaId, text) {
    return Thread.broadcastMediaShareWithText(this.session, this.id, mediaId, text);
};


Thread.prototype.broadcastProfile = function (profileId, simpleFormat) {
    return Thread.broadcastProfile(this.session, this.id, profileId, simpleFormat);
}


Thread.prototype.broadcastProfileWithText = function (profileId, text, simpleFormat) {
    return Thread.broadcastProfileWithText(this.session, this.id, profileId, text, simpleFormat);
};


Thread.prototype.broadcastHashtag = function (hashtag, simpleFormat) {
    return Thread.broadcastHashtag(this.session, this.id, hashtag, simpleFormat);
};


Thread.prototype.broadcastHashtagWithText = function (hashtag, text, simpleFormat) {
    return Thread.broadcastHashtagWithText(this.session, this.id, hashtag, text, simpleFormat);
};


Thread.prototype.subscribe = function (onUpdate, onError) {
    return Thread.subscribe(this.session, this.id, onUpdate, onError);
};
