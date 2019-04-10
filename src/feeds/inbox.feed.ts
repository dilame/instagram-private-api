import { AbstractFeed } from './abstract.feed';
import { InboxFeedResponseThreadsItem, InboxFeedResponseRootObject } from '../responses';

export class InboxFeed extends AbstractFeed<InboxFeedResponseThreadsItem> {
  public pendingRequestsTotal: number = null;
  getPendingRequestsTotal() {
    return this.pendingRequestsTotal;
  }

  async request() {
    const { body: json } = await this.client.request.send<InboxFeedResponseRootObject>({
      url: `/api/v1/direct_v2/inbox/?persistentBadging=true&use_unified_inbox=true${
        this.getCursor() ? '&cursor=' + this.getCursor() : ''
      }`,
    });
    this.moreAvailable = json.inbox.has_older;
    this.pendingRequestsTotal = json.pending_requests_total;
    if (this.moreAvailable) this.setCursor(json.inbox.oldest_cursor.toString());
    return json;
  }
  async items() {
    const response = await this.request();
    return response.inbox.threads;
  }
}
