import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { UserFeedResponse, UserFeedResponseItemsItem } from '../responses';

export class UserFeed extends Feed<UserFeedResponse, UserFeedResponseItemsItem> {
  id: number | string;
  @Expose()
  private nextMaxId: string;

  protected set state(body: UserFeedResponse) {
    this.moreAvailable = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send<UserFeedResponse>({
      url: `/api/v1/feed/user/${this.id}/`,
      qs: {
        max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    const body = await this.request();
    return body.items;
  }
}
