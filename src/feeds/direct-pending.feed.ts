import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { DirectInboxFeedResponse, DirectInboxFeedResponseThreadsItem } from '../responses';
import { DirectThreadEntity } from '../entities';

interface DirectPendingInboxFeedItemsOptions {
  cursor?: string;
  thread_message_limit?: number;
  limit?: number;
}

export class DirectPendingInboxFeed extends Feed<DirectInboxFeedResponse, DirectInboxFeedResponseThreadsItem> {
  @Expose()
  private cursor: string;
  @Expose()
  private seqId: number;

  public limit: number;
  public defaultLimit = 20;
  public thread_message_limit: number;
  public defaultThreadMessageLimit: number;
  set state(body: DirectInboxFeedResponse) {
    this.moreAvailable = body.inbox.has_older;
    this.seqId = body.seq_id;
    this.cursor = body.inbox.oldest_cursor;
  }

  async request(opts?: DirectPendingInboxFeedItemsOptions) {
    const { body } = await this.client.request.send<DirectInboxFeedResponse>({
      url: `/api/v1/direct_v2/pending_inbox/`,
      qs: {
        visual_message_return_type: 'unseen',
        cursor: this.cursor ?? this.cursor,
        direction: this.cursor ? 'older' : void 0,
        seq_id: this.seqId,
        thread_message_limit: this.thread_message_limit ?? this.defaultThreadMessageLimit,
        persistentBadging: true,
        limit: this.limit ?? this.defaultLimit,
      },
    });
    this.state = body;
    return body;
  }

  async items(opts?: DirectPendingInboxFeedItemsOptions) {
    const response = await this.request(opts);
    return response.inbox.threads;
  }

  async records(): Promise<DirectThreadEntity[]> {
    const threads = await this.items();
    return threads.map(thread => this.client.entity.directThread(thread.thread_id));
  }
}
