import { Expose, plainToClassFromExist } from 'class-transformer';
import { Feed } from '../core/feed';
import { BlockedUsersFeedResponse, BlockedUsersFeedResponseUsersItem } from '../responses';

export class BlockedUsersFeed extends Feed<BlockedUsersFeedResponse, BlockedUsersFeedResponseUsersItem> {
  @Expose()
  private nextMaxId: string;

  set state(body: BlockedUsersFeedResponse) {
    this.moreAvailable = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send<BlockedUsersFeedResponse>({
      url: `/api/v1/users/blocked_list/`,
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
    return body.users.map(user => plainToClassFromExist(new BlockedUsersFeedResponseUsersItem(this.client), user));
  }
}
