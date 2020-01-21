import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { Feed } from '@igpapi/core';
import { AndroidHttp } from '../core/android.http';
import { DirectInboxFeedResponse, DirectInboxFeedResponseThreadsItem } from '../responses';

@injectable()
export class DirectInboxFeed extends Feed<DirectInboxFeedResponse, DirectInboxFeedResponseThreadsItem> {
  @Expose()
  private cursor: string;
  @Expose()
  private seqId: number;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: DirectInboxFeedResponse) {
    this.hasMore = body.inbox.has_older;
    this.seqId = body.seq_id;
    this.cursor = body.inbox.oldest_cursor;
  }

  async request() {
    const { body } = await this.http.send<DirectInboxFeedResponse>({
      url: `/api/v1/direct_v2/inbox/`,
      qs: {
        visual_message_return_type: 'unseen',
        cursor: this.cursor,
        direction: this.cursor ? 'older' : void 0,
        seq_id: this.seqId,
        thread_message_limit: 10,
        persistentBadging: true,
        limit: 20,
      },
    });

    return body;
  }

  items({ inbox }: DirectInboxFeedResponse) {
    return inbox.threads;
  }
}
