import { Feed } from '../core/feed';
import { Expose } from 'class-transformer';
import {
  IgtvChannelFeedResponseItemsItem,
  IgtvChannelFeedResponseRootObject,
} from '../responses/igtv.channel.feed.response';

export class IgtvChannelFeed extends Feed<IgtvChannelFeedResponseRootObject, IgtvChannelFeedResponseItemsItem> {
  channelId: string;

  @Expose()
  private maxId: string;

  protected set state(response: IgtvChannelFeedResponseRootObject) {
    this.moreAvailable = response.more_available;
    this.maxId = response.max_id;
  }

  async request(): Promise<IgtvChannelFeedResponseRootObject> {
    const { body } = await this.client.request.send({
      url: '/api/v1/igtv/channel/',
      form: {
        id: this.channelId,
        max_id: this.maxId,
        phone_id: this.client.state.phoneId,
        battery_level: this.client.state.batteryLevel,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        is_charging: this.client.state.isCharging ? '1' : '0',
        will_sound_on: '0',
      },
      method: 'POST',
    });
    this.state = body;
    return body;
  }

  async items(): Promise<IgtvChannelFeedResponseItemsItem[]> {
    const res = await this.request();
    return res.items;
  }
}
