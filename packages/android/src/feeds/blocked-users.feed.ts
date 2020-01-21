import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { Feed } from '@igpapi/core';
import { BlockedUsersFeedResponseBlockedListItem, BlockedUsersFeedResponseRootObject } from '../responses';

@injectable()
export class BlockedUsersFeed extends Feed<
  BlockedUsersFeedResponseRootObject,
  BlockedUsersFeedResponseBlockedListItem
> {
  @Expose()
  private nextMaxId: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: BlockedUsersFeedResponseRootObject) {
    this.hasMore = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.http.send<BlockedUsersFeedResponseRootObject>({
      url: `/api/v1/users/blocked_list/`,
      qs: {
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items({ blocked_list }: BlockedUsersFeedResponseRootObject) {
    return blocked_list;
  }
}
