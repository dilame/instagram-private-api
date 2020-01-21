import { Expose } from 'class-transformer';
import { sample } from 'lodash';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { TimelineFeedReason, TimelineFeedsOptions } from '../types/timeline-feed.types';
import { TimelineFeedResponse, TimelineFeedResponseMedia_or_ad } from '../responses';
import { AndroidState } from '../core/android.state';

@injectable()
export class TimelineFeed extends Feed<TimelineFeedResponse, TimelineFeedResponseMedia_or_ad> {
  tag: string;
  @Expose()
  private nextMaxId: string;
  public reason: TimelineFeedReason = sample(['pull_to_refresh', 'warm_start_fetch', 'cold_start_fetch']);

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(body: TimelineFeedResponse) {
    this.done = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request(options: TimelineFeedsOptions = {}) {
    let form = {
      is_prefetch: '0',
      feed_view_info: '',
      seen_posts: '',
      phone_id: this.clientState.phoneId,
      is_pull_to_refresh: '0',
      battery_level: this.clientState.batteryLevel,
      timezone_offset: this.clientState.timezoneOffset,
      _csrftoken: this.clientState.cookieCsrfToken,
      client_session_id: this.clientState.clientSessionId,
      device_id: this.clientState.uuid,
      _uuid: this.clientState.uuid,
      is_charging: Number(this.clientState.isCharging),
      is_async_ads_in_headload_enabled: 0,
      rti_delivery_backend: 0,
      is_async_ads_double_request: 0,
      will_sound_on: 0,
      is_async_ads_rti: 0,
      recovered_from_crash: options.recoveredFromCrash,
      push_disabled: options.pushDisabled,
      latest_story_pk: options.latestStoryPk,
    };
    if (this.nextMaxId) {
      form = Object.assign(form, {
        max_id: this.nextMaxId,
        reason: options.reason || 'pagination',
      });
    } else {
      form = Object.assign(form, {
        reason: options.reason || this.reason,
        is_pull_to_refresh: this.reason === 'pull_to_refresh' ? '1' : '0',
      });
    }
    const { body } = await this.http.send<TimelineFeedResponse>({
      url: `/api/v1/feed/timeline/`,
      method: 'POST',
      headers: {
        'X-Ads-Opt-Out': 0,
        'X-Google-AD-ID': this.clientState.adid,
        'X-DEVICE-ID': this.clientState.uuid,
        'X-FB': 1,
      },
      form,
    });

    return body;
  }

  items(raw: TimelineFeedResponse) {
    return raw.feed_items.filter(i => i.media_or_ad).map(i => i.media_or_ad);
  }
}
