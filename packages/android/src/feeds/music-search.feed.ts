import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { IgAppModule } from '../types';
import { MusicSearchFeedResponseItemsItem, MusicSearchFeedResponseRootObject } from '../responses';
import { Expose } from 'class-transformer';
import { AndroidState } from '../core/android.state';

@injectable()
export class MusicSearchFeed extends Feed<MusicSearchFeedResponseRootObject, MusicSearchFeedResponseItemsItem> {
  @Expose()
  protected nextCursor?: string;

  @Expose()
  public product: IgAppModule;
  @Expose()
  public query: string;
  @Expose()
  public searchSessionId: string;

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(response: any) {
    this.nextCursor = response.page_info.next_max_id;
    this.done = response.page_info.more_available;
  }

  items(raw: MusicSearchFeedResponseRootObject) {
    return raw.items;
  }

  async request(): Promise<MusicSearchFeedResponseRootObject> {
    const { body } = await this.http.send<MusicSearchFeedResponseRootObject>({
      url: '/api/v1/music/search/',
      method: 'POST',
      form: {
        cursor: this.nextCursor || '0',
        _csrftoken: this.clientState.cookieCsrfToken,
        product: this.product,
        _uuid: this.clientState.uuid,
        browse_session_id: this.clientState.clientSessionId,
        search_session_id: this.searchSessionId,
        q: this.query,
      },
    });

    return body;
  }

  isMoreAvailable(): boolean {
    return this.done;
  }
}
