import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { SavedFeedResponseRootObject, SavedFeedResponseMedia } from '../responses';

export class SavedFeed extends Feed<SavedFeedResponseRootObject, SavedFeedResponseMedia> {
  @Expose()
  private nextMaxId: string;

  set state(body: SavedFeedResponseRootObject) {
    this.moreAvailable = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request(): Promise<SavedFeedResponseRootObject> {
    const { body } = await this.client.request.send({
      url: '/api/v1/feed/saved/',
      qs: {
        max_id: this.nextMaxId,
        include_igtv_preview: false,
      },
    });
    this.state = body;
    return body;
  }

  async items(): Promise<SavedFeedResponseMedia[]> {
    const { items } = await this.request();
    return items.map(i => i.media);
  }
}
