import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { IgAppModule } from '../types';
import { MusicGenreFeedResponseItemsItem, MusicGenreFeedResponseRootObject } from '../responses';
import { Expose } from 'class-transformer';
import { AndroidState } from '../core/android.state';

@injectable()
export class MusicGenreFeed extends Feed<MusicGenreFeedResponseRootObject, MusicGenreFeedResponseItemsItem> {
  @Expose()
  protected nextCursor?: string;

  @Expose()
  public product: IgAppModule;
  @Expose()
  public id: number | string;

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(response: MusicGenreFeedResponseRootObject) {
    this.nextCursor = response.page_info.next_max_id;
    this.done = response.page_info.more_available;
  }

  items(raw: MusicGenreFeedResponseRootObject) {
    return raw.items;
  }

  async request(): Promise<MusicGenreFeedResponseRootObject> {
    const { body } = await this.http.send<MusicGenreFeedResponseRootObject>({
      url: `/api/v1/music/genres/${this.id}/`,
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
