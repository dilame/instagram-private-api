import { Media } from '../models/media';
import { plainToClass } from 'class-transformer';
import { AbstractFeed } from './abstract.feed';
import { Request } from '../core/request';

interface TimelineFeedGetProps {
  is_pull_to_refresh?: boolean | null;
}

export class TimelineFeed extends AbstractFeed<Media> {
  constructor(session, public limit = Infinity) {
    super(session);
  }

  async get({ is_pull_to_refresh = null }: TimelineFeedGetProps): Promise<Media[]> {
    const max_id = this.getCursor();
    let extra = {
      is_pull_to_refresh: '0',
    };
    if (max_id) {
      Object.assign(extra, {
        max_id,
        reason: 'pagination',
      });
    } else if (is_pull_to_refresh === true) {
      Object.assign(extra, {
        reason: 'pull_to_refresh',
        is_pull_to_refresh: '1',
      });
    } else if (is_pull_to_refresh === false) {
      Object.assign(extra, {
        reason: 'warm_start_fetch',
      });
    } else {
      Object.assign(extra, {
        reason: 'cold_start_fetch',
      });
    }
    const data = await new Request(this.session)
      .setMethod('POST')
      .setResource('timelineFeed')
      .setHeaders({
        'X-Ads-Opt-Out': '0',
        'X-Google-AD-ID': this.session.device.adid,
        'X-DEVICE-ID': this.session.device.uuid,
      })
      .setBodyType('form')
      .generateUUID()
      .setData({
        is_prefetch: '0',
        feed_view_info: '',
        seen_posts: '',
        unseen_posts: '',
        phone_id: this.session.device.phoneId,
        client_session_id: this.session.session_id,
        battery_level: '100',
        is_charging: '1',
        will_sound_on: '1',
        is_on_screen: true,
        timezone_offset: '2',
        is_async_ads_rti: '0',
        is_async_ads: '0',
        is_async_ads_double_request: '0',
        rti_delivery_backend: '0',
        ...extra,
      })
      .send();
    this.moreAvailable = data.more_available;
    const medias = data.feed_items.filter(m => m.media_or_ad).map(m => m.media_or_ad);
    if (this.moreAvailable) this.setCursor(data.next_max_id);
    return plainToClass(Media, medias);
  }
}
