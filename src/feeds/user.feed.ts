import { Feed } from '../core/feed';
import { UserFeedResponseItemsItem, UserFeedResponseRootObject } from '../responses';

export class UserFeed extends Feed<UserFeedResponseItemsItem> {
  id: number | string;

  async request(...parameters) {
    const { body } = await this.client.request.send<UserFeedResponseRootObject>({
      url: `/api/v1/feed/user/${this.id}/${this.cursor ? `?max_id=${this.cursor}` : ''}`,
    });
    this.moreAvailable = body.more_available && !!body.next_max_id;
    if (this.moreAvailable) {
      this.setCursor(body.next_max_id);
    }
    return body;
  }

  async items() {
    const body = await this.request();
    return body.items;
  }
}
