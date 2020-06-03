import { Repository } from '../core/repository';
import Chance = require('chance');
import {
  LiveSwitchCommentsResponseRootObject,
  LiveCreateBroadcastResponseRootObject,
  LiveStartBroadcastResponseRootObject,
  LiveAddPostLiveToIgtvResponseRootObject,
  LiveCommentsResponseRootObject,
  LiveHeartbeatViewerCountResponseRootObject,
  LiveInfoResponseRootObject,
  LiveFinalViewersResponseRootObject,
  LiveViewerListResponseRootObject,
  LiveGetQuestionsResponseRootObject,
  LiveLikeResponseRootObject,
  LiveLikeCountResponseRootObject,
  LivePostLiveThumbnailsResponseRootObject,
  LiveJoinRequestCountsResponseRootObject,
  LiveAddToPostResponse,
} from '../responses';

export class LiveRepository extends Repository {
  public async muteComment(broadcastId: string): Promise<LiveSwitchCommentsResponseRootObject> {
    const { body } = await this.client.request.send<LiveSwitchCommentsResponseRootObject>({
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

  public async getComment({
    broadcastId,
    commentsRequested = 4,
    lastCommentTs,
  }: {
    broadcastId: string;
    commentsRequested?: number;
    lastCommentTs?: string | number;
  }): Promise<LiveCommentsResponseRootObject> {
    const { body } = await this.client.request.send<LiveCommentsResponseRootObject>({
      url: `/api/v1/live/${broadcastId}/get_comment/`,
      method: 'GET',
      qs: {
        num_comments_requested: commentsRequested,
        last_comment_ts: lastCommentTs || 0,
      },
    });
    return body;
  }

  public async heartbeatAndGetViewerCount(broadcastId: string): Promise<LiveHeartbeatViewerCountResponseRootObject> {
    const { body } = await this.client.request.send<LiveHeartbeatViewerCountResponseRootObject>({
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

  public async info(broadcastId: string): Promise<LiveInfoResponseRootObject> {
    const { body } = await this.client.request.send<LiveInfoResponseRootObject>({
      url: `/api/v1/live/${broadcastId}/info/`,
      method: 'GET',
    });
    return body;
  }

  public async getFinalViewerList(broadcastId: string): Promise<LiveFinalViewersResponseRootObject> {
    const { body } = await this.client.request.send<LiveFinalViewersResponseRootObject>({
      url: `api/v1/live/${broadcastId}/get_final_viewer_list/`,
      method: 'GET',
    });
    return body;
  }

  public async unmuteComment(broadcastId: string): Promise<LiveSwitchCommentsResponseRootObject> {
    const { body } = await this.client.request.send<LiveSwitchCommentsResponseRootObject>({
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

  public async create({
    previewHeight = 1184,
    previewWidth = 720,
    message = '',
  }: {
    previewHeight?: number | string;
    previewWidth?: number | string;
    message?: string;
  }): Promise<LiveCreateBroadcastResponseRootObject> {
    const { body } = await this.client.request.send<LiveCreateBroadcastResponseRootObject>({
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

  public async getViewerList(broadcastId: string): Promise<LiveViewerListResponseRootObject> {
    const { body } = await this.client.request.send<LiveViewerListResponseRootObject>({
      url: `/api/v1/live/${broadcastId}/get_viewer_list/`,
      method: 'GET',
    });
    return body;
  }

  public async createQuestion(broadcastId: string, question: string): Promise<any> {
    // TODO: not enabled?
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/questions/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        text: question,
      },
    });
    return body;
  }

  public async activateQuestion(broadcastId: string, questionId: string) {
    // TODO: not working on client / while using obs -> useless?
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/question/${questionId}/activate/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async deactivateQuestion(broadcastId: string, questionId: string) {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/question/${questionId}/deactivate/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async getQuestions(): Promise<LiveGetQuestionsResponseRootObject> {
    const { body } = await this.client.request.send<LiveGetQuestionsResponseRootObject>({
      url: '/api/v1/live/get_questions/',
      method: 'GET',
    });
    return body;
  }

  public async wave(broadcastId: string, viewerId: string) {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/wave/`,
      method: 'POST',
      form: this.client.request.sign({
        viewer_id: viewerId,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async like(broadcastId: string, likeCount: number = 1): Promise<LiveLikeResponseRootObject> {
    const { body } = await this.client.request.send<LiveLikeResponseRootObject>({
      url: `/api/v1/live/${broadcastId}/like/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        user_like_count: likeCount,
      }),
    });
    return body;
  }

  public async getLikeCount(
    broadcastId: string,
    likeTs: string | number = 0,
  ): Promise<LiveLikeCountResponseRootObject> {
    const { body } = await this.client.request.send<LiveLikeCountResponseRootObject>({
      url: `/api/v1/live/${broadcastId}/get_like_count/`,
      method: 'GET',
      qs: {
        like_ts: likeTs,
      },
    });
    return body;
  }

  public async getPostLiveThumbnails(broadcastId: string): Promise<LivePostLiveThumbnailsResponseRootObject> {
    const { body } = await this.client.request.send<LivePostLiveThumbnailsResponseRootObject>({
      url: `/api/v1/live/${broadcastId}/get_post_live_thumbnails/`,
      method: 'GET',
      qs: {
        signed_body: this.client.request.sign({}),
      },
    });
    return body;
  }

  public async resumeBroadcastAfterContentMatch(broadcastId: string): Promise<any> {
    // TODO: test
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/resume_broadcast_after_content_match/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async getJoinRequestCounts({
    broadcastId,
    lastTotalCount = 0,
    lastSeenTs = 0,
    lastFetchTs = 0,
  }: {
    broadcastId: string;
    lastTotalCount: number | string;
    lastSeenTs: number | string;
    lastFetchTs: number | string;
  }): Promise<LiveJoinRequestCountsResponseRootObject> {
    const { body } = await this.client.request.send<LiveJoinRequestCountsResponseRootObject>({
      url: `/api/v1/live/${broadcastId}/get_join_request_counts/`,
      method: 'GET',
      qs: {
        last_total_count: lastTotalCount,
        last_seen_ts: lastSeenTs,
        last_fetch_ts: lastFetchTs,
      },
    });
    return body;
  }

  public async start(
    broadcastId: string,
    sendNotifications: boolean = true,
  ): Promise<LiveStartBroadcastResponseRootObject> {
    const { body } = await this.client.request.send<LiveStartBroadcastResponseRootObject>({
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

  public async addPostLiveToIgtv({
    broadcastId,
    title,
    description,
    coverUploadId,
    igtvSharePreviewToFeed = false,
  }: {
    broadcastId: string;
    title: string;
    description: string;
    coverUploadId: string;
    igtvSharePreviewToFeed?: boolean;
  }): Promise<LiveAddPostLiveToIgtvResponseRootObject> {
    const { body } = await this.client.request.send<LiveAddPostLiveToIgtvResponseRootObject>({
      url: `/api/v1/live/add_post_live_to_igtv/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        broadcast_id: broadcastId,
        cover_upload_id: coverUploadId,
        description: description,
        title: title,
        internal_only: false,
        igtv_share_preview_to_feed: igtvSharePreviewToFeed,
      }),
    });
    return body;
  }

  public async endBroadcast(broadcastId: string, endAfterCopyrightWarning: boolean = false) {
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

  public async comment(broadcastId: string, message: string): Promise<any> {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/comment/`,
      method: 'POST',
      form: this.client.request.sign({
        user_breadcrumb: this.client.request.userBreadcrumb(message.length),
        idempotence_token: new Chance().guid(),
        comment_text: message,
        live_or_vod: '1',
        offset_to_video_start: '0',
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async pinComment(broadcastId: string, commentId: string): Promise<any> {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/pin_comment/`,
      method: 'POST',
      form: this.client.request.sign({
        offset_to_video_start: 0,
        comment_id: commentId,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async unpinComment(broadcastId: string, commentId: string): Promise<any> {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/unpin_comment/`,
      method: 'POST',
      form: this.client.request.sign({
        offset_to_video_start: 0,
        comment_id: commentId,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async getLiveQuestions(broadcastId: string): Promise<any> {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/questions/`,
      method: 'POST',
      form: this.client.request.sign({
        sources: 'story_and_live',
      }),
    });
    return body;
  }

  public async addToPostLive(broadcastId: string): Promise<LiveAddToPostResponse> {
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/add_to_post_live/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  /**
   * Shows all online users, ready to watch your stream
   */
  public async getLivePresence(): Promise<any> {
    const { body } = await this.client.request.send({
      url: '/api/v1/live/get_live_presence/',
      method: 'GET',
    });
    return body;
  }
}
