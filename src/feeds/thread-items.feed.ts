import { AbstractFeed } from './abstract.feed';
import { Request } from '../core/request';
import { ThreadItem } from '../v1/thread-item';

export class ThreadItemsFeed extends AbstractFeed<any> {
  threadId: any;

  constructor(session, threadId, limit) {
    super(session);
    this.threadId = threadId;
    this.limit = parseInt(limit) || null;
  }

  get(): any {
    return new Request(this.session)
      .setMethod('GET')
      .setResource('threadsShow', {
        cursor: this.getCursor(),
        threadId: this.threadId,
      })
      .send()
      .then(json => {
        const items = json.thread.items.map(item => new ThreadItem(this.session, item));
        this.moreAvailable = json.thread.has_older;
        if (this.isMoreAvailable()) this.setCursor(json.thread.oldest_cursor);
        return items;
      });
  }
}
