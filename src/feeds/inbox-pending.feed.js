import { AbstractFeed } from './abstract.feed';
import { Request } from '../core/request';

const Thread = require('../v1/thread');


export class InboxPendingFeed extends AbstractFeed {
  constructor (session, limit) {
    super(session);
    this.limit = parseInt(limit) || null;
    this.pendingRequestsTotal = null;
  }

  getPendingRequestsTotal () {
    return this.pendingRequestsTotal;
  }

  get () {
    const that = this;
    return new Request(this.session)
      .setMethod('GET')
      .setResource('inboxPending', {
        maxId: this.getCursor(),
      })
      .send()
      .then(json => {
        that.moreAvailable = json.inbox.has_older;
        that.pendingRequestsTotal = json.pending_requests_total;
        if (that.moreAvailable) that.setCursor(json.inbox.oldest_cursor.toString());
        return json.inbox.threads.map(thread => new Thread(that.session, thread));
      });
  }
}

