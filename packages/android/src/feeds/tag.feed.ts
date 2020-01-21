import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import * as Chance from 'chance';
import { Feed } from '@igpapi/core';
import { AndroidHttp } from '../core/android.http';
import { TagFeedResponse, TagFeedResponseItemsItem } from '../responses';

const chance = new Chance();

@injectable()
export class TagFeed extends Feed<TagFeedResponse, TagFeedResponseItemsItem> {
  tag: string;
  @Expose()
  private nextMaxId: string;
  @Expose()
  protected rankToken = chance.guid();

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: TagFeedResponse) {
    this.hasMore = body.more_available;
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
