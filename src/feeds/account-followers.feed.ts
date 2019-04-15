import { Feed } from '../core/feed';
import { AccountFollowersFeedResponseRootObject, AccountFollowersFeedResponseUsersItem } from '../responses';

export class AccountFollowersFeed extends Feed<AccountFollowersFeedResponseUsersItem> {
  id: number | string;
  async request() {
    const { body } = await this.client.request.send<AccountFollowersFeedResponseRootObject>({
      url: `/api/v1/friendships/${this.id}/followers/${this.cursor ? `?max_id=${this.cursor}` : ''}`,
    });
    this.moreAvailable = !!body.next_max_id;
    if (this.moreAvailable) {
      this.setCursor(body.next_max_id);
    }
    return body;
  }
  async items() {
    const body = await this.request();
    return body.users;
  }
}
