import { Session } from '../core/session';
import { AbstractFeed } from './abstract.feed';
import { Request } from '../core/request';

const _ = require('lodash');
const Thread = require('../v1/thread');

export class InboxFeed extends AbstractFeed<any> {
  public pendingRequestsTotal: null;

  constructor(session: Session, public limit = Infinity) {
    super(session);
  }

  getPendingRequestsTotal() {
    return this.pendingRequestsTotal;
  }

  get() {
    return new Request(this.session)
      .setMethod('GET')
      .setResource('inbox', {
        cursor: this.getCursor(),
      })
      .send()
      .then(json => {
        this.moreAvailable = json.inbox.has_older;
        this.pendingRequestsTotal = json.pending_requests_total;
        if (this.moreAvailable) this.setCursor(json.inbox.oldest_cursor.toString());
        return _.map(json.inbox.threads, thread => new Thread(this.session, thread));
      });
  }
}
