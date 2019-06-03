import { Expose, plainToClassFromExist } from 'class-transformer';
import { Feed } from '../core/feed';
import { AccountNewsFeedResponse, AccountNewsFeedResponseUsersItem } from '../responses';

export class AccountNewsFeed extends Feed<AccountNewsFeedResponse, AccountNewsFeedResponseUsersItem> {
  @Expose()
  private nextMaxId: string;

  set state(body: AccountNewsFeedResponse) {
    this.moreAvailable = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send<AccountNewsFeedResponse>({
      url: `/api/v1/news`,
      qs: {
        rank_token: this.rankToken,
        max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    const body = await this.request();
    return body.users.map(user => plainToClassFromExist(new AccountNewsFeedResponseUsersItem(this.client), user));
  }
}
