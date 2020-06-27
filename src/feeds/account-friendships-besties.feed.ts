import { Expose, plainToClassFromExist } from 'class-transformer';
import { Feed } from '../core/feed';
import { BestFriendshipsFeedResponse, BestFriendshipsFeedResponseUsersItem } from '../responses';

export class BestFriendshipsFeed extends Feed<BestFriendshipsFeedResponse, BestFriendshipsFeedResponseUsersItem> {
  @Expose()
  private nextMaxId: string;

  set state(body: BestFriendshipsFeedResponse) {
    this.moreAvailable = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send<BestFriendshipsFeedResponse>({
      url: `/api/v1/friendships/besties`,
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
    return body.users.map(user => plainToClassFromExist(new BestFriendshipsFeedResponseUsersItem(this.client), user));
  }
}
