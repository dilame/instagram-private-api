import { defaultsDeep, omit, random } from 'lodash';
import { DateTime } from 'luxon';
import { Repository } from '../core/repository';
import { LikeRequestOptions, MediaLikeOrUnlikeOptions, UnlikeRequestOptions } from '../types/media.like.options';
import {
  MediaRepositoryBlockedResponse,
  MediaRepositoryCommentResponse,
  MediaRepositoryLikersResponseRootObject,
} from '../responses';
import { MediaConfigureOptions } from '../types/media.configure.options';
import Chance = require('chance');
import { MediaRepositoryCommentResponseRootObject } from '../responses/media.repository.configure.response';

export class MediaRepository extends Repository {
  public async info(mediaId: string) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/info/`,
      method: 'GET',
      form: this.client.request.sign({
        igtv_feed_preview: false,
        media_id: mediaId,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async delete({
    mediaId,
    mediaType = 'PHOTO',
  }: {
    mediaId: string;
    mediaType?: 'PHOTO' | 'VIDEO' | 'CAROUSEL';
  }) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/delete/`,
      method: 'POST',
      qs: {
        media_type: mediaType,
      },
      form: this.client.request.sign({
        igtv_feed_preview: false,
        media_id: mediaId,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  private async likeAction(options: MediaLikeOrUnlikeOptions) {
    const signedFormData = this.client.request.sign({
      module_name: options.moduleInfo.module_name,
      media_id: options.mediaId,
      _csrftoken: this.client.state.cookieCsrfToken,
      ...omit(options.moduleInfo, 'module_name'),
      radio_type: this.client.state.radioType,
      _uid: this.client.state.cookieUserId,
      device_id: this.client.state.deviceId,
      _uuid: this.client.state.uuid,
    });

    const { body } = await this.client.request.send({
      url: `/api/v1/media/${options.mediaId}/${options.action}/`,
      method: 'POST',
      form: {
        ...signedFormData,
        d: options.d,
      },
    });
    return body;
  }
  public async like(options: LikeRequestOptions) {
    return this.likeAction({
      action: 'like',
      ...options,
    });
  }
  public async unlike(options: UnlikeRequestOptions) {
    return this.likeAction({
      action: 'unlike',
      ...options,
    });
  }
  public async comment({
    mediaId,
    text,
    module = 'self_comments_v2',
  }: {
    mediaId: string;
    text: string;
    module?: string;
  }) {
    const { body } = await this.client.request.send<MediaRepositoryCommentResponse>({
      url: `/api/v1/media/${mediaId}/comment/`,
      method: 'POST',
      form: this.client.request.sign({
        user_breadcrumb: this.client.request.userBreadcrumb(text.length),
        idempotence_token: new Chance().guid(),
        _csrftoken: this.client.state.cookieCsrfToken,
        radio_type: this.client.state.radioType,
        _uid: this.client.state.cookieUserId,
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
        comment_text: text,
        containermodule: module,
      }),
    });
    return body.comment;
  }
  public async likers(id: string): Promise<MediaRepositoryLikersResponseRootObject> {
    const { body } = await this.client.request.send<MediaRepositoryLikersResponseRootObject>({
      url: `/api/v1/media/${id}/likers/`,
    });
    return body;
  }
  public async blocked() {
    const { body } = await this.client.request.send<MediaRepositoryBlockedResponse>({
      url: `/api/v1/media/blocked/`,
    });
    return body.media_ids;
  }

  public async uploadFinish(options: { upload_id: string; source_type: string }) {
    const { body } = await this.client.request.send({
      url: '/api/v1/media/upload_finish/',
      method: 'POST',
      headers: {
        retry_context: JSON.stringify({ num_step_auto_retry: 0, num_reupload: 0, num_step_manual_retry: 0 }),
      },
      form: this.client.request.sign({
        timezone_offset: this.client.state.timezoneOffset,
        _csrftoken: this.client.state.cookieCsrfToken,
        source_type: options.source_type,
        _uid: this.client.state.cookieUserId,
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
        upload_id: options.upload_id,
        device: this.client.state.devicePayload,
      }),
    });
    return body;
  }

  public async configure(options: MediaConfigureOptions): Promise<MediaRepositoryCommentResponseRootObject> {
    const devicePayload = this.client.state.devicePayload;
    const now = DateTime.local().toFormat('yyyy:mm:dd HH:mm:ss');
    const width = options.width || 1520;
    const height = options.height || 2048;

    const form = defaultsDeep(options, {
      date_time_digitalized: now,
      camera_model: devicePayload.model,
      scene_capture_type: 'standard',
      timezone_offset: this.client.state.timezoneOffset,
      _csrftoken: this.client.state.cookieCsrfToken,
      media_folder: 'Camera',
      source_type: '4',
      _uid: this.client.state.cookieUserId,
      device_id: this.client.state.deviceId,
      _uuid: this.client.state.uuid,
      creation_logger_session_id: this.client.state.clientSessionId,
      caption: '',
      date_time_original: now,
      software: '1',
      camera_make: devicePayload.manufacturer,
      device: devicePayload,
      edits: {
        crop_original_size: [width, height],
        crop_center: [0.0, -0.0],
        crop_zoom: random(1.01, 1.99).toFixed(7),
      },
      extra: { source_width: width, source_height: height },
    });

    const { body } = await this.client.request.send<MediaRepositoryCommentResponseRootObject>({
      url: '/api/v1/media/configure/',
      method: 'POST',
      form: this.client.request.sign(form),
    });
    return body;
  }
}
