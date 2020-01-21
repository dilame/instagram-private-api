import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { Expose } from 'class-transformer';
import { LikedFeedResponseItemsItem, LikedFeedResponseRootObject } from '../responses';

@injectable()
export class LikedFeed extends Feed<LikedFeedResponseRootObject, LikedFeedResponseItemsItem> {
  @Expose()
  private maxId: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(response: LikedFeedResponseRootObject) {
    this.done = response.more_available;
    this.maxId = response.next_max_id?.toString();
  }

  items({ items }: LikedFeedResponseRootObject) {
    return items;
  }

  async request(): Promise<LikedFeedResponseRootObject> {
    const { body } = await this.http.send({
      url: `/api/v1/feed/liked/`,
      method: 'GET',
      qs: {
        maxId: this.maxId,
      },
    });

    return body;
  }
}
