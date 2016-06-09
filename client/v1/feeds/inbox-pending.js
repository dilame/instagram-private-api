var _ = require('underscore');

function InboxPendingFeed(session, limit) {
    this.session = session;
    this.limit = limit;
}

module.exports = InboxPendingFeed;

var Thread = require('../thread');
var Request = require('../request');


InboxPendingFeed.prototype.setMaxId = function (maxId) {
    this.lastMaxId = maxId;
};


InboxPendingFeed.prototype.getMaxId = function () {
    return this.lastMaxId;
};


InboxPendingFeed.prototype.isMoreAvailable = function () {
    return this.moreAvailable;
};


InboxPendingFeed.prototype.get = function () {
    var that = this;
    return new Request(this.session)
        .setMethod('GET')
        .setResource('threadsPending', {
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


InboxPendingFeed.prototype.all = function () {
    var that = this;
    return this.get().then(function (threads) {
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