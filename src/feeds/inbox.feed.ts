import { Request, Session } from '../core';
import { AbstractFeed } from './abstract.feed';

const Thread = require('../v1/thread');

export class InboxFeed extends AbstractFeed<any> {
  public pendingRequestsTotal: null;

  constructor(session: Session, public limit = Infinity) {
    super(session);
  }

  getPendingRequestsTotal() {
    return this.pendingRequestsTotal;
  }

  async get() {
    const json = await new Request(this.session)
      .setMethod('GET')
      .setResource('inbox', {
        cursor: this.getCursor(),
      })
      .send();
    this.moreAvailable = json.inbox.has_older;
    this.pendingRequestsTotal = json.pending_requests_total;
    if (this.moreAvailable) this.setCursor(json.inbox.oldest_cursor.toString());
    return json.inbox.threads.map(thread => new Thread(this.session, thread));
  }
}
