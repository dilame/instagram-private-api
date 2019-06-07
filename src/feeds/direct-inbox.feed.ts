import { Expose, plainToClassFromExist } from 'class-transformer';
import { Feed } from '../core/feed';
import { DirectInboxFeedResponse, DirectInboxFeedResponseThreadsItem } from '../responses';
import { DirectThreadEntity } from '../entities';

export class DirectInboxFeed extends Feed<DirectInboxFeedResponse, DirectInboxFeedResponseThreadsItem> {
  @Expose()
  private cursor: string;
  @Expose()
  private seqId: number;

  set state(body: DirectInboxFeedResponse) {
    this.moreAvailable = body.inbox.has_older;
    this.seqId = body.seq_id;
    this.cursor = body.inbox.oldest_cursor;
  }

  async request(
    options = { visual_message_return_type: 'unseen' } /*options: { visual_message_return_type?: string}*/,
  ) {
    const { body } = await this.client.request.send<DirectInboxFeedResponse>({
      url: `/api/v1/direct_v2/inbox/`,
      qs: Object.assign(
        {
          visual_message_return_type: 'unseen',
          cursor: this.cursor,
          direction: this.cursor ? 'older' : void 0,
          seq_id: this.seqId,
          thread_message_limit: 10,
          persistentBadging: true,
          limit: 20,
        },
        options,
      ),
    });
    this.state = body;
    return body;
  }

  async items(options = { visual_message_return_type: 'unseen' }) {
    const response = await this.request(options);
    return response.inbox.threads;
  }

  async records(): Promise<Array<DirectThreadEntity>> {
    const threads = await this.items();
    return threads.map(thread => {
      const record = new DirectThreadEntity(this.client);
      return plainToClassFromExist(record, thread);
    });
  }
}
