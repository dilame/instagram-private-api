import { Feed } from '../core/feed';
import { MusicTrendingFeedResponseItemsItem, MusicTrendingFeedResponseRootObject } from '../responses';
import { IgAppModule } from '../types/common.types';

export class MusicTrendingFeed extends Feed<MusicTrendingFeedResponseRootObject, MusicTrendingFeedResponseItemsItem> {
  protected nextCursor?: string;
  protected moreAvailable: boolean = true;

  public product: IgAppModule;

  async items(): Promise<MusicTrendingFeedResponseItemsItem[]> {
    const response = await this.request();
    return response.items;
  }

  async request(): Promise<MusicTrendingFeedResponseRootObject> {
    const { body } = await this.client.request.send<MusicTrendingFeedResponseRootObject>({
      url: '/api/v1/music/trending/',
      method: 'POST',
      form: {
        cursor: this.nextCursor || '0',
        _csrftoken: this.client.state.cookieCsrfToken,
        product: this.product,
        _uuid: this.client.state.uuid,
        browse_session_id: this.client.state.clientSessionId,
      },
    });
    return body;
  }

  protected set state(response: MusicTrendingFeedResponseRootObject) {
    this.nextCursor = response.page_info.next_max_id;
    this.moreAvailable = response.page_info.more_available;
  }

  isMoreAvailable(): boolean {
    return this.moreAvailable;
  }
}
