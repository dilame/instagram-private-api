import { Repository } from '../core/repository';
import { LiveCreateBroadcastResponse } from '../responses/live.create-broadcast.response';
import { LiveStartBroadcastResponse } from '../responses/live.start-broadcast.response';
import { LiveEndBroadcastResponse } from '../responses/live.end-broadcast.response';

export class LiveRepository extends Repository {
  public async createBroadcast(
    previewWidth: number = 720,
    previewHeight: number = 1184,
    message: string = '',
  ): Promise<LiveCreateBroadcastResponse> {
    const { body } = await this.client.request.send<LiveCreateBroadcastResponse>({
      url: '/api/v1/live/create/',
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        preview_width: previewWidth,
        preview_height: previewHeight,
        broadcast_message: message,
        // const?
        broadcast_type: 'RTMP',
        internal_only: 0,
      }),
    });
    return body;
  }

  public async startBroadcast(broadcastId: string, sendNotifications: boolean): Promise<LiveStartBroadcastResponse> {
    const { body } = await this.client.request.send<LiveStartBroadcastResponse>({
      url: `/api/v1/live/${broadcastId}/start/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        should_send_notifications: sendNotifications,
      }),
    });
    return body;
  }

  public async endBroadcast(
    broadcastId: string,
    endAfterCopyrightWarning: boolean = false,
  ): Promise<LiveEndBroadcastResponse> {
    const { body } = await this.client.request.send<LiveEndBroadcastResponse>({
      url: `/api/v1/live/${broadcastId}/end_broadcast/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        end_after_copyright_warning: endAfterCopyrightWarning,
      }),
    });
    return body;
  }
}
