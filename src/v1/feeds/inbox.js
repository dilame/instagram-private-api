const _ = require('lodash');
const FeedBase = require('./feed-base');
const Thread = require('../thread');
const Request = require('../../request');

class InboxFeed extends FeedBase {
  constructor(session, limit) {
    super(...arguments);
    this.limit = parseInt(limit) || null;
    this.pendingRequestsTotal = null;
  }

  getPendingRequestsTotal() {
    return this.pendingRequestsTotal;
  }

  get() {
    const that = this;
    return new Request(this.session)
      .setMethod('GET')
      .setResource('inbox', {
        cursor: this.getCursor(),
      })
      .send()
      .then(json => {
        that.moreAvailable = json.inbox.has_older;
        that.pendingRequestsTotal = json.pending_requests_total;
        if (that.moreAvailable)
          that.setCursor(json.inbox.oldest_cursor.toString());
        return _.map(
          json.inbox.threads,
          thread => new Thread(that.session, thread),
        );
      });
  }
}

module.exports = InboxFeed;
