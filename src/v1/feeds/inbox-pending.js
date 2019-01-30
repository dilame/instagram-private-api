var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function InboxPendingFeed(session, limit) {
    this.limit = parseInt(limit) || null;
    this.pendingRequestsTotal = null;
    FeedBase.apply(this, arguments);
}
util.inherits(InboxPendingFeed, FeedBase);

module.exports = InboxPendingFeed;
var Thread = require('../thread');
var Request = require('../request');

InboxPendingFeed.prototype.getPendingRequestsTotal = function () {
    return this.pendingRequestsTotal;
};


InboxPendingFeed.prototype.get = function () {
    var that = this;
    return new Request(this.session)
        .setMethod('GET')
        .setResource('inboxPending', {
            maxId: this.getCursor()
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