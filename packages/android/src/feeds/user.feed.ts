import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { UserFeedResponse, UserFeedResponseItemsItem } from '../responses';

@injectable()
export class UserFeed extends Feed<UserFeedResponse, UserFeedResponseItemsItem> {
  id: number | string;
  @Expose()
  private nextMaxId: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: UserFeedResponse) {
    this.done = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.http.send<UserFeedResponse>({
      url: `/api/v1/feed/user/${this.id}/`,
      qs: {
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items(raw: UserFeedResponse) {
    return raw.items;
  }
}
