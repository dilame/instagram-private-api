import { Feed } from '../core/feed';
import { AccountFollowingFeedResponseRootObject, AccountFollowingFeedResponseUsersItem } from '../responses';

export class AccountFollowingFeed extends Feed<AccountFollowingFeedResponseUsersItem> {
  id: number | string;
  async request() {
    const { body } = await this.client.request.send<AccountFollowingFeedResponseRootObject>({
      url: `/api/v1/friendships/${this.id}/following/?${this.cursor ? `max_id=${this.cursor}&` : ''}rank_token=${
        this.rankToken
      }`,
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
