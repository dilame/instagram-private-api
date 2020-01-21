import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { IgAppModule } from '../types';
import { MusicMoodFeedResponseItemsItem, MusicMoodFeedResponseRootObject } from '../responses';
import { Expose } from 'class-transformer';
import { AndroidState } from '../core/android.state';

@injectable()
export class MusicMoodFeed extends Feed<MusicMoodFeedResponseRootObject, MusicMoodFeedResponseItemsItem> {
  @Expose()
  protected nextCursor?: string;

  @Expose()
  public product: IgAppModule;
  @Expose()
  public id: number | string;

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(response: MusicMoodFeedResponseRootObject) {
    this.nextCursor = response.page_info.next_max_id;
    this.hasMore = response.page_info.more_available;
  }

  items(raw: MusicMoodFeedResponseRootObject) {
    return raw.items;
  }

  async request(): Promise<MusicMoodFeedResponseRootObject> {
    const { body } = await this.http.send<MusicMoodFeedResponseRootObject>({
      url: `/api/v1/music/moods/${this.id}/`,
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
}
