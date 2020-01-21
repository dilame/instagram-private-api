import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { DirectThreadFeedResponse, DirectThreadFeedResponseItemsItem } from '../responses';

@injectable()
export class DirectThreadFeed extends Feed<DirectThreadFeedResponse, DirectThreadFeedResponseItemsItem> {
  public id: string;
  public seqId: number;
  @Expose()
  public cursor: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: DirectThreadFeedResponse) {
    this.cursor = body.thread.oldest_cursor;
    this.done = body.thread.has_older;
  }

  async request() {
    const { body } = await this.http.send<DirectThreadFeedResponse>({
      url: `/api/v1/direct_v2/threads/${this.id}/`,
      qs: {
        visual_message_return_type: 'unseen',
        cursor: this.cursor,
        direction: 'older',
        seq_id: this.seqId,
        limit: 10,
      },
    });

    return body;
  }

  items({ thread }: DirectThreadFeedResponse) {
    return thread.items;
  }
}
