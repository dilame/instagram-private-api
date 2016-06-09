var _ = require('underscore');

function InboxFeed(session, limit) {
    this.lastMaxId = null;
    this.moreAvailable = null;
    this.session = session;
    this.allThreads = [];
    this.limit = parseInt(limit) || null;
}

module.exports = InboxFeed;
var Thread = require('../thread');
var Request = require('../request');


InboxFeed.prototype.setMaxId = function (maxId) {
    this.lastMaxId = maxId;
};


InboxFeed.prototype.getMaxId = function () {
    return this.lastMaxId;
};


InboxFeed.prototype.isMoreAvailable = function () {
    return this.moreAvailable;
};


InboxFeed.prototype.get = function () {
    var that = this;
    return new Request(this.session)
        .setMethod('GET')
        .setResource('inbox', {
            maxId: this.getMaxId()
        })
        .send()
        .then(function(json) {
            that.moreAvailable = json.inbox.more_available && json.inbox.next_max_id;
            if (that.moreAvailable)
                that.setMaxId(json.inbox.next_max_id);
            return _.map(json.inbox.threads, function (thread) {
                return new Thread(that.session, thread);
            })
        })
};


InboxFeed.prototype.all = function (useCache) {
    var that = this;
    if (useCache === undefined) useCache = true;
    return this.get()
        .then(function (threads) {
            that.allThreads = that.allThreads.concat(threads);
            var exceedLimit = false;
            if (that.limit && that.allThreads.length > that.limit)
                exceedLimit = true;
            if (that.moreAvailable && !exceedLimit) {
                return that.all();
            } else {
                return that.allThreads;
            }
        })
};
