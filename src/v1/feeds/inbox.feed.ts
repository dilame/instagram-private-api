import { Session } from '../../session';
import { BaseFeed } from './_base.feed';
import { Request } from '../../request';

const _ = require('lodash');
const Thread = require('../thread');

export class InboxFeed extends BaseFeed {
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
