import { defaultsDeep, omit } from 'lodash';
import { DateTime } from 'luxon';
import { Repository } from '../core/repository';
import {
  MediaEditResponseRootObject,
  MediaInfoResponseRootObject,
  MediaRepositoryBlockedResponse,
  MediaRepositoryCommentResponse,
  MediaRepositoryLikersResponseRootObject,
  MediaUpdatedMediaResponseRootObject,
  StatusResponse,
} from '../responses';
import {
  IgAppModule,
  LikeRequestOptions,
  MediaLikeOrUnlikeOptions,
  UnlikeRequestOptions,
  MediaConfigureOptions,
  MediaConfigureStoryBaseOptions,
  MediaConfigureStoryPhotoOptions,
  MediaConfigureStoryVideoOptions,
  MediaConfigureTimelineOptions,
  MediaConfigureSidecarItem,
  MediaConfigureSidecarOptions,
  MediaConfigureSidecarVideoItem,
  MediaConfigureTimelineVideoOptions,
  MediaConfigureToIgtvOptions,
} from '../types';
import { MediaRepositoryConfigureResponseRootObject } from '../responses';
import Chance = require('chance');
import { MediaRepositoryCheckOffensiveCommentResponseRootObject } from '../responses';
import { StoryMusicQuestionResponse, StoryTextQuestionResponse } from '../types/story-response.options';

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

  public async likeComment(commentId: string) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${commentId}/comment_like/`,
      method: 'POST',
    });
    return body;
  }

  public async unlikeComment(commentId: string) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${commentId}/comment_unlike/`,
      method: 'POST',
    });
    return body;
  }

  /**
   * Normally, this is requested before each comment is sent to ensure it isn't spam or hateful
   * @param commentText
   * @param mediaId - The mediaId of the post
   */
  public async checkOffensiveComment(
    commentText: string,
    mediaId?: string,
  ): Promise<MediaRepositoryCheckOffensiveCommentResponseRootObject> {
    const { body } = await this.client.request.send<MediaRepositoryCheckOffensiveCommentResponseRootObject>({
      url: '/api/v1/media/comment/check_offensive_comment/',
      method: 'POST',
      form: this.client.request.sign({
        media_id: mediaId,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        comment_text: commentText,
      }),
    });
    return body;
  }

  public async commentsBulkDelete(mediaId: string, commentIds: string[]): Promise<StatusResponse> {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/comment/bulk_delete/`,
      method: 'POST',
      form: this.client.request.sign({
        comment_ids_to_delete: commentIds.join(','),
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async comment({
    mediaId,
    text,
    replyToCommentId,
    module = 'self_comments_v2',
  }: {
    mediaId: string;
    text: string;
    replyToCommentId?: string;
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
        replied_to_comment_id: replyToCommentId,
      }),
    });
    return body.comment;
  }

  async commentsDisable(mediaId) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/disable_comments/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  async commentsEnable(mediaId) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/enable_comments/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
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

  public async uploadFinish(options: {
    upload_id: string;
    source_type: string;
    video?: {
      length: number;
      clips?: Array<{ length: number; source_type: string }>;
      poster_frame_index?: number;
      audio_muted?: boolean;
    };
  }) {
    if (options.video) {
      options.video = defaultsDeep(options.video, {
        clips: [{ length: options.video.length, source_type: options.source_type }],
        poster_frame_index: 0,
        audio_muted: false,
      });
    }
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
        ...options.video,
      }),
      qs: options.video ? { video: '1' } : {},
    });
    return body;
  }

  /**
   * Adds default values to the MediaConfigureOptions
   * @param options - user submitted options
   * @param defaults - default values
   */
  private applyConfigureDefaults<T extends MediaConfigureOptions>(options: T, defaults: Partial<T>): T {
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
        crop_zoom: 1.0,
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

  public async configureVideo(options: MediaConfigureTimelineVideoOptions) {
    const now = DateTime.local().toFormat('yyyy:mm:dd HH:mm:ss');

    const form = this.applyConfigureDefaults<MediaConfigureTimelineVideoOptions>(options, {
      width: options.width,
      height: options.height,

      upload_id: Date.now().toString(),
      timezone_offset: this.client.state.timezoneOffset,
      date_time_original: now,
      caption: '',
      source_type: '4',
      device_id: this.client.state.deviceId,
      filter_type: '0',
      audio_muted: false,
      poster_frame_index: 0,
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
      qs: {
        video: '1',
      },
      form: this.client.request.sign(form),
    });
    return body;
  }

  private static stringifyStoryStickers(form: MediaConfigureStoryBaseOptions) {
    const serialize = (obj: any | undefined) => {
      if (typeof obj !== 'undefined' && Array.isArray(obj) && obj.length > 0 && typeof obj[0] !== 'string') {
        return JSON.stringify(obj);
      }
      return obj;
    };
    form.story_hashtags = serialize(form.story_hashtags);
    form.story_locations = serialize(form.story_locations);
    form.reel_mentions = serialize(form.reel_mentions);
    form.story_polls = serialize(form.story_polls);
    form.story_sliders = serialize(form.story_sliders);
    form.story_questions = serialize(form.story_questions);
    form.story_countdowns = serialize(form.story_countdowns);
    form.attached_media = serialize(form.attached_media);
    form.story_cta = serialize(form.story_cta);
    form.story_chats = serialize(form.story_chats);
    form.story_quizs = serialize(form.story_quizs);
  }

  public async configureToStory(options: MediaConfigureStoryPhotoOptions) {
    const now = Date.now();
    const width = options.width || 1520;
    const height = options.height || 2048;
    const form = this.applyConfigureDefaults<MediaConfigureStoryPhotoOptions>(options, {
      width,
      height,

      source_type: '3',
      configure_mode: '1',
      client_shared_at: now.toString(),
      edits: {
        crop_original_size: [width, height],
        crop_center: [0.0, -0.0],
        crop_zoom: 1.0,
      },
    });
    // make sure source_type = 3
    form.source_type = '3';

    if (form.configure_mode === '1') {
      MediaRepository.stringifyStoryStickers(form);
    } else if (form.configure_mode === '2') {
      if (typeof form.recipient_users !== 'string') {
        form.recipient_users = JSON.stringify(form.recipient_users ? [form.recipient_users.map(x => Number(x))] : []);
      }
      form.thread_ids = JSON.stringify(form.thread_ids || []);
    }

    const { body } = await this.client.request.send({
      url: '/api/v1/media/configure_to_story/',
      method: 'POST',
      form: this.client.request.sign(form),
    });
    return body;
  }

  public async configureToStoryVideo(options: MediaConfigureStoryVideoOptions) {
    const now = Date.now();
    const devicePayload = this.client.state.devicePayload;
    const form = defaultsDeep(options, {
      supported_capabilities_new: JSON.stringify(this.client.state.supportedCapabilities),
      timezone_offset: '0',
      _csrftoken: this.client.state.cookieCsrfToken,
      client_shared_at: now.toString(),
      configure_mode: '1',
      source_type: '3',
      video_result: '',
      _uid: this.client.state.cookieUserId,
      date_time_original: new Date().toISOString().replace(/[-:]/g, ''),
      device_id: this.client.state.deviceId,
      _uuid: this.client.state.uuid,
      device: devicePayload,
      clips: [
        {
          length: options.length,
          source_type: '3',
        },
      ],
      extra: {
        source_width: options.width,
        source_height: options.height,
      },
      audio_muted: false,
      poster_frame_index: 0,
    });
    // make sure source_type = 3
    form.source_type = '3';

    if (form.configure_mode === '1') {
      MediaRepository.stringifyStoryStickers(form);
    } else if (form.configure_mode === '2') {
      if (typeof form.recipient_users !== 'string') {
        form.recipient_users = JSON.stringify(form.recipient_users ? [form.recipient_users.map(x => Number(x))] : []);
      }
      form.thread_ids = JSON.stringify(form.thread_ids || []);
    }
    const { body } = await this.client.request.send({
      url: '/api/v1/media/configure_to_story/',
      method: 'POST',
      qs: {
        video: '1',
      },
      form: this.client.request.sign(form),
    });
    return body;
  }

  public async configureSidecar(options: MediaConfigureSidecarOptions) {
    const isVideo = (arg: MediaConfigureSidecarItem): arg is MediaConfigureSidecarVideoItem =>
      (arg as MediaConfigureSidecarVideoItem).length !== undefined;

    const devicePayload = this.client.state.devicePayload;
    const sidecarId = options.upload_id || Date.now().toString();
    const now = DateTime.local().toFormat('yyyy:mm:dd HH:mm:ss');
    options = defaultsDeep(options, {
      _csrftoken: this.client.state.cookieCsrfToken,
      _uid: this.client.state.cookieUserId,
      _uuid: this.client.state.uuid,
      timezone_offset: '0',
      source_type: '4',
      device_id: this.client.state.deviceId,
      caption: '',
      client_sidecar_id: sidecarId,
      upload_id: sidecarId,
      device: devicePayload,
    });
    options.children_metadata = options.children_metadata.map(item => {
      const { width, height } = item;
      item = defaultsDeep(item, {
        timezone_offset: '0',
        caption: null,
        source_type: '4',
        extra: { source_width: width, source_height: height },
        edits: { crop_original_size: [width, height], crop_center: [0.0, -0.0], crop_zoom: 1.0 },
        device: devicePayload,
      });
      if (typeof item.extra !== 'string') {
        item.extra = JSON.stringify(item.extra);
      }
      if (typeof item.edits !== 'string') {
        item.edits = JSON.stringify(item.edits);
      }
      if (typeof item.device !== 'string') {
        item.device = JSON.stringify(item.device);
      }
      if (item.usertags && typeof item.usertags !== 'string') {
        item.usertags = JSON.stringify(item.usertags);
      }
      if (isVideo(item)) {
        item = defaultsDeep(item, {
          filter_type: '0',
          video_result: '',
          date_time_original: now,
          audio_muted: 'false',
          clips: [{ length: item.length, source_type: '4' }],
          poster_frame_index: '0',
        });
        const clips = item as MediaConfigureSidecarVideoItem;
        if (typeof clips !== 'string') {
          (item as MediaConfigureSidecarVideoItem).clips = JSON.stringify(clips);
        }
      }
      return item;
    });

    if (typeof options.location !== 'string') {
      options.location = JSON.stringify(options.location);
    }

    const { body } = await this.client.request.send({
      url: '/api/v1/media/configure_sidecar/',
      method: 'POST',
      form: this.client.request.sign(options),
    });
    return body;
  }

  public async configureToIgtv(options: MediaConfigureToIgtvOptions) {
    const form: MediaConfigureToIgtvOptions = defaultsDeep(options, {
      caption: '',
      date_time_original: new Date().toISOString().replace(/[-:]/g, ''),
      igtv_share_preview_to_feed: '0',
      clips: [
        {
          length: options.length,
          source_type: options.source_type || '4',
        },
      ],
      audio_muted: false,
      poster_frame_index: 0,
      filter_type: '0',
      timezone_offset: this.client.state.timezoneOffset,
      media_folder: options.source_type !== '4' ? 'Camera' : undefined,
      source_type: '4',
      device: this.client.state.devicePayload,
      retryContext: { num_step_auto_retry: 0, num_reupload: 0, num_step_manual_retry: 0 },
    });
    const retryContext = options.retryContext;
    delete form.retryContext;
    const { body } = await this.client.request.send({
      url: '/api/v1/media/configure_to_igtv/',
      method: 'POST',
      qs: {
        video: '1',
      },
      headers: {
        is_igtv_video: '1',
        retry_context: JSON.stringify(retryContext),
      },
      form: this.client.request.sign({
        ...form,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async onlyMe(mediaId: string): Promise<StatusResponse> {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/only_me/`,
      method: 'POST',
      form: this.client.request.sign({
        media_id: mediaId,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async undoOnlyMe(mediaId: string): Promise<StatusResponse> {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/undo_only_me/`,
      method: 'POST',
      form: this.client.request.sign({
        media_id: mediaId,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
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

  // tip: id = savedFeed.items()[0].media.id
  /**
   * save a media, or save it to collection if you pass the collection ids in array
   * @param {string} mediaId - The mediaId of the post
   * @param {string[]} [collection_ids] - Optional, The array of collection ids if you want to save the media to a specific collection
   * Example:
   * save("2524149952724070925_1829855275") save media
   * save("2524149952724070925_1829855275", ["17865977635619975"]) save media to 1 collection
   * save("2524149952724070925_1829855275", ["17865977635619975", "17845997638619928"]) save media to 2 collection
   */
  public async save(mediaId: string, collection_ids?: string[]) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/save/`,
      method: 'POST',
      form: this.client.request.sign({
        added_collection_ids: collection_ids ? JSON.stringify(collection_ids) : undefined,
        _uuid: this.client.state.uuid,
        _uid: this.client.state.cookieUserId,
        _csrftoken: this.client.state.cookieCsrfToken,
        device_id: this.client.state.deviceId,
      }),
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

  public async storyPollVote(
    mediaId: string,
    pollId: string | number,
    vote: '0' | '1',
  ): Promise<MediaUpdatedMediaResponseRootObject> {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/${pollId}/story_poll_vote/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        radio_type: this.client.state.radioType,
        _uid: this.client.state.cookieUserId,
        vote,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async storyQuestionResponse(
    mediaId: string,
    questionId: string | number,
    options: StoryTextQuestionResponse | StoryMusicQuestionResponse,
  ): Promise<StatusResponse> {
    const chance = new Chance();
    // @ts-ignore
    if (typeof options.response === 'undefined') {
      options = defaultsDeep(options, { music_browse_session_id: chance.guid({ version: 4 }) });
    }

    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/${questionId}/story_question_response/`,
      method: 'POST',
      form: this.client.request.sign({
        client_context: chance.guid({ version: 4 }),
        mutation_token: chance.guid({ version: 4 }),
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        ...options,
      }),
    });
    return body;
  }

  public async storySliderVote(
    mediaId: string,
    sliderId: string | number,
    vote: number,
  ): Promise<MediaUpdatedMediaResponseRootObject> {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/${sliderId}/story_slider_vote/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        vote: vote.toFixed(8),
      }),
    });
    return body;
  }

  /**
   * Answers a story quiz
   * @param mediaId storyId
   * @param quizId id of the quiz
   * @param answer index (string is only for compatibility)
   */
  public async storyQuizAnswer(
    mediaId: string,
    quizId: string | number,
    answer: '0' | '1' | '2' | '3' | string,
  ): Promise<MediaUpdatedMediaResponseRootObject> {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${mediaId}/${quizId}/story_quiz_answer/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        answer,
      }),
    });
    return body;
  }

  private async storyCountdownAction(countdownId: string | number, action: string): Promise<StatusResponse> {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${countdownId}/${action}/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async storyCountdownFollow(countdownId: string | number) {
    return this.storyCountdownAction(countdownId, 'follow_story_countdown');
  }

  public async storyCountdownUnfollow(countdownId: string | number) {
    return this.storyCountdownAction(countdownId, 'unfollow_story_countdown');
  }
}
