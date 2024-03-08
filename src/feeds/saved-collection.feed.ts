import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { SavedCollectionFeedResponseRootObject, SavedFeedResponseMedia } from '../responses';

export class SavedCollectionFeed extends Feed<SavedCollectionFeedResponseRootObject, SavedFeedResponseMedia> {
  collectionId: number | string;
  @Expose()
  private nextMaxId: string;

  set state(body: SavedCollectionFeedResponseRootObject) {
    this.moreAvailable = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request(): Promise<SavedCollectionFeedResponseRootObject> {
    const { body } = await this.client.request.send({
      url: `api/v1/feed/collection/${this.collectionId}/posts`,
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
    return items.map(item => item.media);
  }
}
