import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { TagFeedResponse, TagFeedResponseItemsItem } from '../responses';

@injectable()
export class TagFeed extends Feed<TagFeedResponse, TagFeedResponseItemsItem> {
  tag: string;
  @Expose()
  private nextMaxId: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: TagFeedResponse) {
    this.done = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.http.send<TagFeedResponse>({
      url: `/api/v1/feed/tag/${encodeURI(this.tag)}/`,
      qs: {
        rank_token: this.rankToken,
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items(raw: TagFeedResponse) {
    return raw.items;
  }
}
