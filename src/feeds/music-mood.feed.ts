import { Feed } from '../core/feed';
import { IgAppModule } from '../types/common.types';
import { MusicMoodFeedResponseItemsItem, MusicMoodFeedResponseRootObject } from '../responses';
import { Expose } from 'class-transformer';

export class MusicMoodFeed extends Feed<MusicMoodFeedResponseRootObject, MusicMoodFeedResponseItemsItem> {
  @Expose()
  protected nextCursor?: string;

  @Expose()
  public product: IgAppModule;
  @Expose()
  public id: number | string;

  async items(): Promise<MusicMoodFeedResponseItemsItem[]> {
    const response = await this.request();
    return response.items;
  }

  async request(): Promise<MusicMoodFeedResponseRootObject> {
    const { body } = await this.client.request.send<MusicMoodFeedResponseRootObject>({
      url: `/api/v1/music/moods/${this.id}/`,
      method: 'POST',
      form: {
        cursor: this.nextCursor || '0',
        _csrftoken: this.client.state.cookieCsrfToken,
        product: this.product,
        _uuid: this.client.state.uuid,
        browse_session_id: this.client.state.clientSessionId,
      },
    });
    this.state = body;
    return body;
  }

  protected set state(response: MusicMoodFeedResponseRootObject) {
    this.nextCursor = response.page_info.next_max_id;
    this.moreAvailable = response.page_info.more_available;
  }

  isMoreAvailable(): boolean {
    return this.moreAvailable;
  }
}
