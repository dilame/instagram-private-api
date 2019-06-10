import { Repository } from '../core/repository';
import Chance = require('chance');

export class LiveRepository extends Repository {

  public async comment(broadcastId: string, message: string): Promise<any> {
    const { body } = await this.client.request.send({
      url: `/api/v1/live${broadcastId}/comment`,
      method: 'POST',
      form: this.client.request.sign({
        user_breadcrumb: this.client.request.userBreadcrumb(message.length),
        idempotence_token: new Chance().guid(),
        comment_text: message,
        live_or_vod: '1',
        offset_to_video_start: ' 0',
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async disableComments(broadcastId: string): Promise<any> {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/mute_comment/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async getComments(broadcastId: string, lastCommentTs: string = ''): Promise<any> {
    const { body } = await this.client.request.send({
      url:
        lastCommentTs === '' ?
          `/api/v1/live/${broadcastId}/get_comment/`
          : `/api/v1/live/${broadcastId}/get_comment/?last_comment_ts=${lastCommentTs}`,
      method: 'GET',
    });
    return body;
  }

  public async getHeartbeatViewerCount(broadcastId: string): Promise<any> {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/heartbeat_and_get_viewer_count/`,
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        offset_to_video_start: 0,
        _uuid: this.client.state.uuid,
      },
      method: 'POST',
    });
    return body;
  }

  public async getInfo(broadcastId: string): Promise<any> {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/info/`,
      method: 'GET',
    });
    return body;
  }

  public async getFinalViewers(broadcastId: string): Promise<any> {
    const { body } = await this.client.request.send<any>({
      url: `api/v1/live/${broadcastId}/get_final_viewer_list/`,
      method: 'GET',
    });
    return body;
  }

  public async enableComments(broadcastId: string): Promise<any> {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/unmute_comment/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async createBroadcast(
    previewWidth: number = 720,
    previewHeight: number = 1184,
    message: string = '',
  ): Promise<any> {
    const { body } = await this.client.request.send({
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

  public async startBroadcast(broadcastId: string, sendNotifications: boolean): Promise<any> {
    const { body } = await this.client.request.send({
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
  ): Promise<any> {
    const { body } = await this.client.request.send({
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
