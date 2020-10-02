import { Expose, plainToClassFromExist } from 'class-transformer';
import { Feed } from '../core/feed';
import { AccountFollowingFeedResponse, AccountFollowingFeedResponseUsersItem } from '../responses';

export class AccountFollowingFeed extends Feed<AccountFollowingFeedResponse, AccountFollowingFeedResponseUsersItem> {
  searchSurface?: string;
  order?: 'default' | 'date_followed_latest' | 'date_followed_earliest' = 'default';
  query = '';
  enableGroups = true;
  includesHashtags = true;

  id: number | string;
  @Expose()
  private nextMaxId: string;

  set state(body: AccountFollowingFeedResponse) {
    this.moreAvailable = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send<AccountFollowingFeedResponse>({
      url: `/api/v1/friendships/${this.id}/following/`,
      qs: {
        rank_token: this.rankToken,
        max_id: this.nextMaxId,
        search_surface: this.searchSurface,
        order: this.order,
        query: this.query,
        enable_groups: this.enableGroups,
        includes_hashtags: this.includesHashtags,
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    const body = await this.request();
    return body.users.map(user => plainToClassFromExist(new AccountFollowingFeedResponseUsersItem(this.client), user));
  }
}
