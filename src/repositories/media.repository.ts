import { defaultsDeep, omit, random } from 'lodash';
import { DateTime } from 'luxon';
import { Repository } from '../core/repository';
import { LikeRequestOptions, MediaLikeOrUnlikeOptions, UnlikeRequestOptions } from '../types/media.like.options';
import {
  MediaEditResponseRootObject,
  MediaInfoResponseRootObject,
  MediaRepositoryBlockedResponse,
  MediaRepositoryCommentResponse,
  MediaRepositoryLikersResponseRootObject,
  StatusResponse,
} from '../responses';
import {
  MediaConfigureOptions,
  MediaConfigureStoryOptions,
  MediaConfigureTimelineOptions,
} from '../types/media.configure.options';
import { MediaRepositoryConfigureResponseRootObject } from '../responses/media.repository.configure.response';
import Chance = require('chance');
import { IgAppModule } from '../types/common.types';
import { MediaRepositoryListReelMediaViewerResponseRootObject } from '../responses/media.repository.list-reel-media-viewer.response';

export class MediaRepository extends Repository {
  public async info(mediaId: string): Promise<MediaInfoResponseRootObject> {
    const { body } = await this.client.request.send<MediaInfoResponseRootObject>({
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

  public async editMedia({
    mediaId,
    captionText,
  }: {
    mediaId: string;
    captionText: string;
  }): Promise<MediaEditResponseRootObject> {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/edit_media/`,
      method: 'POST',
      form: this.client.request.sign({
        igtv_feed_preview: false,
        media_id: mediaId,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        caption_text: captionText,
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
        idempotence_token: new Chance().guid({ version: 4 }),
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

  /**
   * Adds default values to the MediaConfigureOptions
   * @param options - user submitted options
   * @param defaults - default values
   */
  private applyConfigureDefaults<T extends MediaConfigureOptions>(options: T, defaults: T): T {
    const width = options.width || 1520;
    const height = options.height || 2048;
    const devicePayload = this.client.state.devicePayload;
    return defaultsDeep(options, {
      _csrftoken: this.client.state.cookieCsrfToken,
      _uid: this.client.state.cookieUserId,
      _uuid: this.client.state.uuid,
      device: devicePayload,
      extra: { source_width: width, source_height: height },

      ...defaults,
    });
  }

  /**
   * Configures an upload (indicated by {upload_id} in the options) for the timeline
   * @param options - configuration-options
   */
  public async configure(options: MediaConfigureTimelineOptions): Promise<MediaRepositoryConfigureResponseRootObject> {
    const devicePayload = this.client.state.devicePayload;
    const now = DateTime.local().toFormat('yyyy:mm:dd HH:mm:ss');
    const width = options.width || 1520;
    const height = options.height || 2048;

    const form = this.applyConfigureDefaults<MediaConfigureTimelineOptions>(options, {
      width,
      height,

      upload_id: Date.now().toString(),
      timezone_offset: this.client.state.timezoneOffset,
      date_time_original: now,
      date_time_digitalized: now,
      caption: '',
      source_type: '4',
      media_folder: 'Camera',
      edits: {
        crop_original_size: [width, height],
        crop_center: [0.0, -0.0],
        crop_zoom: random(1.01, 1.99).toFixed(7),
      },

      // needed?!
      camera_model: devicePayload.model,
      scene_capture_type: 'standard',
      device_id: this.client.state.deviceId,
      creation_logger_session_id: this.client.state.clientSessionId,
      software: '1',
      camera_make: devicePayload.manufacturer,
    });
    if (typeof form.usertags !== 'undefined') {
      form.usertags = JSON.stringify(form.usertags);
    }
    if (typeof form.location !== 'undefined') {
      form.location = JSON.stringify(form.location);
    }

    const { body } = await this.client.request.send<MediaRepositoryConfigureResponseRootObject>({
      url: '/api/v1/media/configure/',
      method: 'POST',
      form: this.client.request.sign(form),
    });
    return body;
  }

  public async configureToStory(options: MediaConfigureStoryOptions) {
    const now = Date.now();
    const width = options.width || 1520;
    const height = options.height || 2048;
    const form = this.applyConfigureDefaults<MediaConfigureStoryOptions>(options, {
      width,
      height,

      upload_id: Date.now().toString(),
      source_type: '3',
      configure_mode: 1,
      client_shared_at: now.toString(),
      edits: {
        crop_original_size: [width, height],
        crop_center: [0.0, -0.0],
        crop_zoom: 1.0,
      },
    });
    // make sure source_type = 3
    form.source_type = '3';

    if (form.configure_mode === 1) {
      if (typeof form.story_hashtags !== 'undefined') {
        form.story_hashtags = JSON.stringify(form.story_hashtags);
      }
      if (typeof form.story_locations !== 'undefined') {
        form.story_locations = JSON.stringify(form.story_locations);
      }
      if (typeof form.reel_mentions !== 'undefined') {
        form.reel_mentions = JSON.stringify(form.reel_mentions);
      }
      if (typeof form.story_polls !== 'undefined') {
        form.story_polls = JSON.stringify(form.story_polls);
      }
      if (typeof form.story_sliders !== 'undefined') {
        form.story_sliders = JSON.stringify(form.story_sliders);
      }
      if (typeof form.story_questions !== 'undefined') {
        form.story_questions = JSON.stringify(form.story_questions);
      }
      if (typeof form.story_countdowns !== 'undefined') {
        form.story_countdowns = JSON.stringify(form.story_countdowns);
      }
      if (typeof form.attached_media !== 'undefined') {
        form.attached_media = JSON.stringify(form.attached_media);
      }
      if (typeof form.story_cta !== 'undefined') {
        form.story_cta = JSON.stringify(form.story_cta);
      }
      if (typeof form.story_chats !== 'undefined') {
        form.story_chats = JSON.stringify(form.story_chats);
      }
    }

    const { body } = await this.client.request.send({
      url: '/api/v1/media/configure_to_story/',
      method: 'POST',
      form: this.client.request.sign(form),
    });
    return body;
  }

  async seen(
    reels: {
      [item: string]: [string];
    },
    module: IgAppModule = 'feed_timeline',
  ): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: `/api/v2/media/seen/`,
      method: 'POST',
      qs: {
        reel: 1,
        live_vod: 0,
      },
      // TODO: gzip
      form: this.client.request.sign({
        reels,
        container_module: module,
        reel_media_skipped: [],
        live_vods: [],
        live_vods_skipped: [],
        nuxes: [],
        nuxes_skipped: [],
        _uuid: this.client.state.uuid,
        _uid: this.client.state.cookieUserId,
        _csrftoken: this.client.state.cookieCsrfToken,
        device_id: this.client.state.deviceId,
      }),
    });
    return body;
  }

  public async listReelMediaViewer(
    mediaId: string | number,
  ): Promise<MediaRepositoryListReelMediaViewerResponseRootObject> {
    const { body } = await this.client.request.send<MediaRepositoryListReelMediaViewerResponseRootObject>({
      url: `/api/v1/media/${mediaId}/list_reel_media_viewer`,
      method: 'GET',
      qs: {
        supported_capabilities_new: this.client.state.supportedCapabilities,
      },
    });
    return body;
  }

  // tip: id = savedFeed.items()[0].media.id
  public async save(mediaId: string) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/save/`,
      method: 'POST',
    });
    return body;
  }

  async unsave(mediaId: string) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/unsave/`,
      method: 'POST',
    });
    return body;
  }
}
