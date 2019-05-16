import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { SavedFeedResponse, SavedFeedResponseMedia } from '../responses';

export class SavedFeed extends Feed<SavedFeedResponse, SavedFeedResponseMedia> {
  @Expose()
  private nextMaxId: string;

  set state(body: SavedFeedResponse) {
    this.moreAvailable = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send({
      url: '/api/v1/feed/saved/',
      method: 'POST',
      qs: {
        max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    const { items } = await this.request();
    return items;
  }
}
