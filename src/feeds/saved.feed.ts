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

  async collections(): Promise<SavedFeedResponseRootObject> {
    const { body } = await this.client.request.send({
      url:
        'api/v1/collections/list/?collection_types=%5B%22ALL_MEDIA_AUTO_COLLECTION%22%2C%22MEDIA%22%2C%22AUDIO_AUTO_COLLECTION%22%5D&include_public_only=0&get_cover_media_lists=true&max_id=QVFDV004M2FjcVQ0blNVVnp1dmZmM1JCMmZIb3REUnVyd0xsdGd0WVY5R25ILVBQMmRvWXV1Qk5DcF84cENNWGx1UThyb1NrVzZqeENVY2w1VXkwZlFhbg%3D%3D',
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
