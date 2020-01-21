import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { Expose } from 'class-transformer';
import {
  IgtvChannelFeedResponseItemsItem,
  IgtvChannelFeedResponseRootObject,
} from '../responses/igtv.channel.feed.response';
import { AndroidState } from '../core/android.state';

@injectable()
export class IgtvChannelFeed extends Feed<IgtvChannelFeedResponseRootObject, IgtvChannelFeedResponseItemsItem> {
  channelId: string;

  @Expose()
  private maxId: string;

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(response: IgtvChannelFeedResponseRootObject) {
    this.done = response.more_available;
    this.maxId = response.max_id;
  }

  async request(): Promise<IgtvChannelFeedResponseRootObject> {
    const { body } = await this.http.send({
      url: '/api/v1/igtv/channel/',
      form: {
        id: this.channelId,
        max_id: this.maxId,
        phone_id: this.clientState.phoneId,
        battery_level: this.clientState.batteryLevel,
        _csrftoken: this.clientState.cookieCsrfToken,
        _uuid: this.clientState.uuid,
        is_charging: this.clientState.isCharging ? '1' : '0',
        will_sound_on: '0',
      },
      method: 'POST',
    });

    return body;
  }

  items({ items }: IgtvChannelFeedResponseRootObject) {
    return items;
  }
}
