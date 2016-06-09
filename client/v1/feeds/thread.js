var NodeCache = require('node-cache');
var _ = require('underscore');
var threadFeedCache = new NodeCache({
    stdTTL: 600,
    checkperiod: 60
});


function ThreadFeed(session, threadId, limit) {
    this.threadId = threadId;
    this.lastMaxId = null;
    this.moreAvailable = null;
    this.session = session;
    this.allItems = [];
    this.limit = parseInt(limit) || null;
}

module.exports = ThreadFeed;
var ThreadItem = require('../thread-item');
var Request = require('../request');
var Thread = require('../thread');


ThreadFeed.prototype.setMaxId = function (maxId) {
    this.lastMaxId = maxId;
};


ThreadFeed.prototype.getMaxId = function () {
    return this.lastMaxId;
};


ThreadFeed.prototype.isMoreAvailable = function () {
    return this.moreAvailable;
};


ThreadFeed.prototype.get = function () {
    var that = this;
    return new Request(this.session)
        .setMethod('GET')
        .setResource('threadsShow', {
            maxId: this.getMaxId(),
            threadId: this.threadId
        })
        .send()
        .then(function (json) {
            var thread = new Thread(that.session, json.thread);
            that.moreAvailable = !_.isEmpty(thread.params.items) && thread.params.moreAvailableMax;
            if (that.moreAvailable)
                that.setMaxId(thread.params.nextMaxId);
            return thread;
        })
};


ThreadFeed.prototype.all = function (useCache) {
    var that = this;
    if (useCache === undefined) useCache = true;
    return this.get().then(function (thread) {
        var key = "threadfeed_" + thread.id + "_" + thread.params.lastActivityAt;
        if (useCache) {
            var cache = threadFeedCache.get(key);
            if (cache && !_.isEmpty(cache)) {
                return [cache, thread];
            }
        }
        that.allItems = that.allItems.concat(thread.items);
        var exceedLimit = false;
        if (that.limit && that.allItems.length > that.limit)
            exceedLimit = true;
        if (that.moreAvailable && !exceedLimit) {
            return that.all(false);
        } else {
            threadFeedCache.set(key, that.allItems);
            return [that.allItems, thread];
        }
    })
};

