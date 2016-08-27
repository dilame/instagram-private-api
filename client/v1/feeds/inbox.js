var _ = require('underscore');

function InboxFeed(session, limit) {
    this.lastMaxId = null;
    this.moreAvailable = null;
    this.session = session;
    this.allThreads = [];
    this.limit = parseInt(limit) || null;
    this.pendingRequestsTotal = null;
}

module.exports = InboxFeed;
var Thread = require('../thread');
var Request = require('../request');


InboxFeed.prototype.setCursor = function (cursor) {
    this.cursor = cursor;
};


InboxFeed.prototype.getCursor = function () {
    return this.cursor;
};


InboxFeed.prototype.isMoreAvailable = function () {
    return !!this.moreAvailable;
};


InboxFeed.prototype.getPendingRequestsTotal = function () {
    return this.pendingRequestsTotal;
};


InboxFeed.prototype.get = function () {
    var that = this;
    return new Request(this.session)
        .setMethod('GET')
        .setResource('inbox', {
            cursor: this.getCursor()
        })
        .send()
        .then(function(json) {
            that.moreAvailable = json.inbox.has_older;
            that.pendingRequestsTotal = json.pending_requests_total;
            if (that.moreAvailable)
                that.setCursor(json.inbox.oldest_cursor.toString());
            return _.map(json.inbox.threads, function (thread) {
                return new Thread(that.session, thread);
            })
        })
};


InboxFeed.prototype.all = function () {
    var that = this;
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
