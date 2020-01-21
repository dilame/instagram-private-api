import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { SavedFeedResponseMedia, SavedFeedResponseRootObject } from '../responses';

@injectable()
export class SavedFeed extends Feed<SavedFeedResponseRootObject, SavedFeedResponseMedia> {
  @Expose()
  private nextMaxId: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: SavedFeedResponseRootObject) {
    this.done = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request(): Promise<SavedFeedResponseRootObject> {
    const { body } = await this.http.send({
      url: '/api/v1/feed/saved/',
      method: 'POST',
      qs: {
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items(raw: SavedFeedResponseRootObject) {
    const { items } = raw;
    return items.map(i => i.media);
  }
}
