import { Expose, plainToClassFromExist } from 'class-transformer';
import { Feed } from '../core/feed';
import { BlockedUsersFeedResponseRootObject, BlockedUsersFeedResponseBlockedListItem } from '../responses';

export class BlockedUsersFeed extends Feed<
  BlockedUsersFeedResponseRootObject,
  BlockedUsersFeedResponseBlockedListItem
> {
  @Expose()
  private nextMaxId: string;

  set state(body: BlockedUsersFeedResponseRootObject) {
    this.moreAvailable = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send<BlockedUsersFeedResponseRootObject>({
      url: `/api/v1/users/blocked_list/`,
      qs: {
        max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    const body = await this.request();
    return body.blocked_list.map(user =>
      plainToClassFromExist(new BlockedUsersFeedResponseBlockedListItem(this.client), user),
    );
  }
}
