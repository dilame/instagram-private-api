import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { NewsFeedResponseRootObject, NewsFeedResponseStoriesItem } from '../responses';

@injectable()
export class NewsFeed extends Feed<NewsFeedResponseRootObject, NewsFeedResponseStoriesItem> {
  @Expose()
  private nextMaxId: string | number;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: NewsFeedResponseRootObject) {
    this.hasMore = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.http.send<NewsFeedResponseRootObject>({
      url: `/api/v1/news`,
      qs: {
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items(raw: NewsFeedResponseRootObject) {
    return raw.stories;
  }
}
