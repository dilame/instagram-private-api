import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
//import { ArchivedFeedResponseRootObject, ArchivedFeedResponseMedia } from '../responses'; // new
//import { SavedFeedResponseRootObject, SavedFeedResponseMedia } from '../responses';

export class ArchivedStoriesFeed extends Feed<any, any> {
  @Expose()
  private nextMaxId: string;

  set state(body: any) {
    this.moreAvailable = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request(): Promise<any> {
    const { body } = await this.client.request.send({
      url: '/api/v1/archive/reel/day_shells/',
      qs: {
        max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  async items(): Promise<any[]> {
    const { items } = await this.request();
    return items;
  }
}
