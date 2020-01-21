import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { Expose } from 'class-transformer';
import { UsertagsFeedResponseItemsItem, UsertagsFeedResponseRootObject } from '../responses';

@injectable()
export class UsertagsFeed extends Feed<UsertagsFeedResponseRootObject, UsertagsFeedResponseItemsItem> {
  id: number | string;
  @Expose()
  private nextMaxId: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: UsertagsFeedResponseRootObject) {
    this.done = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.http.send<UsertagsFeedResponseRootObject>({
      url: `/api/v1/usertags/${this.id}/feed/`,
      qs: {
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items(raw: UsertagsFeedResponseRootObject) {
    return raw.items;
  }
}
