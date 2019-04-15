import { Feed } from '../core/feed';
import { InboxFeedResponseThreadsItem, InboxFeedResponseRootObject } from '../responses';

export class InboxFeed extends Feed<InboxFeedResponseThreadsItem> {
  public pendingRequestsTotal: number = null;
  getPendingRequestsTotal() {
    return this.pendingRequestsTotal;
  }

  async request() {
    const { body: json } = await this.client.request.send<InboxFeedResponseRootObject>({
      url: `/api/v1/direct_v2/inbox/`,
      qs: {
        use_unified_inbox: true,
        cursor: this.getCursor(),
        persistentBadging: true,
      },
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
