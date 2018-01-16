var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function InboxMediaFeed(session, limit) {
    this.limit = parseInt(limit) || null;
    FeedBase.apply(this, arguments);
}

util.inherits(InboxMediaFeed, FeedBase);

module.exports = InboxMediaFeed;
var Thread = require('../thread');
var Request = require('../request');

InboxMediaFeed.prototype.getPendingRequestsTotal = function () {
    return this.pendingRequestsTotal;
};


InboxMediaFeed.prototype.get = function () {
    var that = this;
    return new Request(this.session)
        .setMethod('GET')
        .setResource('inboxMedia', {
            cursor: this.getCursor()
        })
        .send()
        .then(function (json) {
            if (json.has_more_unread) {
                that.setCursor(json.unread_cursor.toString());
            }
            return _.map(json.threads, function (thread) {
                return new Thread(that.session, thread);
            })
        })
};
