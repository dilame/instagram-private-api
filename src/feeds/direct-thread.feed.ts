import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { DirectThreadFeedResponse, DirectThreadFeedResponseItemsItem } from '../responses';

interface DirectThreadFeedItemsOptions {
  cursor?: string;
  limit?: number;
}

export class DirectThreadFeed extends Feed<DirectThreadFeedResponse, DirectThreadFeedResponseItemsItem> {
  public id: string;
  public seqId: number;
  @Expose()
  public cursor: string;
  public limit?: number;
  public defaultLimit = 10;
  set state(body: DirectThreadFeedResponse) {
    this.cursor = body.thread.oldest_cursor;
    this.moreAvailable = body.thread.has_older;
  }
  async request(opts?: DirectThreadFeedItemsOptions) {
    const { body } = await this.client.request.send<DirectThreadFeedResponse>({
      url: `/api/v1/direct_v2/threads/${this.id}/`,
      qs: {
        visual_message_return_type: 'unseen',
        cursor: this.cursor ?? this.cursor,
        direction: 'older',
        seq_id: this.seqId,
        limit: this.limit ?? this.defaultLimit,
      },
    });
    this.state = body;
    return body;
  }

  async items(opts?: DirectThreadFeedItemsOptions) {
    const response = await this.request(opts);
    return response.thread.items;
  }
}
