import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { ReelsTrayFeedResponseRootObject, ReelsTrayFeedResponseTrayItem } from '../responses';
import { AndroidState } from '../core/android.state';

@injectable()
export class ReelsTrayFeed extends Feed<ReelsTrayFeedResponseRootObject, ReelsTrayFeedResponseTrayItem> {
  reason: 'cold_start' | 'pull_to_refresh';

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(response: ReelsTrayFeedResponseRootObject) {}

  /**
   * Returns only the stories (without the broadcasts)
   */
  items(raw: ReelsTrayFeedResponseRootObject) {
    return raw.tray;
  }

  async request(): Promise<ReelsTrayFeedResponseRootObject> {
    const { body } = await this.http.send<ReelsTrayFeedResponseRootObject>({
      url: '/api/v1/feed/reels_tray/',
      method: 'POST',
      form: {
        supported_capabilities_new: this.clientState.supportedCapabilities,
        reason: this.reason,
        _csrftoken: this.clientState.cookieCsrfToken,
        _uuid: this.clientState.uuid,
      },
    });

    return body;
  }
}
