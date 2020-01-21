import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { ReelsMediaFeedResponse, ReelsMediaFeedResponseItem, ReelsMediaFeedResponseRootObject } from '../responses';
import { IgAppModule } from '../types';
import * as SUPPORTED_CAPABILITIES from '../samples/supported-capabilities.json';
import { AndroidState } from '../core/android.state';

@injectable()
export class ReelsMediaFeed extends Feed<ReelsMediaFeedResponseRootObject, ReelsMediaFeedResponseItem> {
  userIds: Array<number | string>;
  source: IgAppModule = 'feed_timeline';

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(body: any) {}

  async request() {
    const { body } = await this.http.send<ReelsMediaFeedResponseRootObject>({
      url: `/api/v1/feed/reels_media/`,
      method: 'POST',
      form: this.http.sign({
        user_ids: this.userIds,
        source: this.source,
        _uuid: this.clientState.uuid,
        _uid: this.clientState.cookieUserId,
        _csrftoken: this.clientState.cookieCsrfToken,
        device_id: this.clientState.deviceId,
        supported_capabilities_new: JSON.stringify(SUPPORTED_CAPABILITIES),
      }),
    });
    return body;
  }

  items(raw: ReelsMediaFeedResponseRootObject) {
    return Object.values(raw.reels).reduce(
      (accumulator, current: ReelsMediaFeedResponse) => accumulator.concat(current.items),
      [],
    );
  }
}
