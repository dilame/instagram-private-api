import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import {
  SavedCollectionsFeedResponseRootObject,
  SavedCollectionsFeedResponse,
  SavedCollectionCollectionType,
} from '../responses';

export class SavedCollectionsFeed extends Feed<SavedCollectionsFeedResponseRootObject, SavedCollectionsFeedResponse> {
  @Expose()
  private nextMaxId: string;

  set state(body: SavedCollectionsFeedResponseRootObject) {
    this.moreAvailable = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request(): Promise<SavedCollectionsFeedResponseRootObject> {
    const { body } = await this.client.request.send({
      url: 'api/v1/collections/list',
      qs: {
        max_id: this.nextMaxId,
        include_igtv_preview: false,
        include_public_only: 0,
        collection_types: JSON.stringify([
          SavedCollectionCollectionType.AllMediaAutoCollection,
          SavedCollectionCollectionType.AudioAutoCollection,
          SavedCollectionCollectionType.Media,
        ]),
        get_cover_media_lists: true,
      },
    });
    this.state = body;
    return body;
  }

  async items(): Promise<SavedCollectionsFeedResponse[]> {
    const { items } = await this.request();
    return items.map(i => i);
  }
}
