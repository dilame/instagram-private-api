import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { MusicTrendingFeedResponseItemsItem, MusicTrendingFeedResponseRootObject } from '../responses';
import { IgAppModule } from '../types';
import { Expose } from 'class-transformer';
import { AndroidState } from '../core/android.state';

@injectable()
export class MusicTrendingFeed extends Feed<MusicTrendingFeedResponseRootObject, MusicTrendingFeedResponseItemsItem> {
  @Expose()
  protected nextCursor?: string;

  @Expose()
  public product: IgAppModule;

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(response: MusicTrendingFeedResponseRootObject) {
    this.nextCursor = response.page_info.next_max_id;
    this.done = response.page_info.more_available;
  }

  items(raw: MusicTrendingFeedResponseRootObject) {
    return raw.items;
  }

  async request(): Promise<MusicTrendingFeedResponseRootObject> {
    const { body } = await this.http.send<MusicTrendingFeedResponseRootObject>({
      url: '/api/v1/music/trending/',
      method: 'POST',
      form: {
        cursor: this.nextCursor || '0',
        _csrftoken: this.clientState.cookieCsrfToken,
        product: this.product,
        _uuid: this.clientState.uuid,
        browse_session_id: this.clientState.clientSessionId,
      },
    });

    return body;
  }

  isMoreAvailable(): boolean {
    return this.done;
  }
}
