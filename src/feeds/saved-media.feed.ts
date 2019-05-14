import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { SavedMediaFeedResponse, SavedMediaFeedResponseItemsItem } from '../responses';

export class SavedMediaFeed extends Feed<SavedMediaFeedResponse, SavedMediaFeedResponseItemsItem> {
  @Expose()
  private nextMaxId: string;

  set state(body: SavedMediaFeedResponse) {
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
    const { items, more_available, next_max_id } = await this.request();
    this.nextMaxId = next_max_id;
    this.moreAvailable = more_available;
    return items;
  }
}
