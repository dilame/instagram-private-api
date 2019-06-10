import { Repository } from '../core/repository';
import Chance = require('chance');
import { LiveSwitchCommentsResponseRootObject } from '../responses/live.switch-comments.response';
import { LiveCreateBroadcastResponseRootObject } from '../responses/live.create-broadcast.response';
import { LiveStartBroadcastResponseRootObject } from '../responses/live.start-broadcast.response';
import { LiveEndBroadcastResponseRootObject } from '../responses/live.end-broadcast.response';
import { LiveCommentsResponseRootObject } from '../responses/live.comments.response';
import { LiveHeartbeatViewerCountResponseRootObject } from '../responses/live.heartbeat-viewer-count.response';
import { LiveInfoResponseRootObject } from '../responses/live.info.response';
import { LiveFinalViewersResponseRootObject } from '../responses/live.final-viewers.response';
import { LiveObsSettings } from '../types/live.obs-settings';
import { LiveViewerListResponseRootObject } from '../responses/live.viewer-list.response';
import { LiveShowQuestionResponseRootObject } from '../responses/live.show-question.response';
import { LiveHideQuestionResponseRootObject } from '../responses/live.hide-question.response';
import { LiveGetQuestionsResponseRootObject } from '../responses/live.get-questions.response';
import { LiveWaveResponseRootObject } from '../responses/live.wave.response';
import { LiveLikeResponseRootObject } from '../responses/live.like.response';
import { LiveLikeCountResponseRootObject } from '../responses/live.like-count.response';
import { LiveJoinRequestCountsResponseRootObject } from '../responses/live.join-request-counts.response';

export class LiveRepository extends Repository {

  public async disableComments(broadcastId: string): Promise<LiveSwitchCommentsResponseRootObject> {
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

  public async getComments(broadcastId: string, commentsRequested: number = 4, lastCommentTs: string = ''): Promise<LiveCommentsResponseRootObject> {
    const { body } = await this.client.request.send<LiveCommentsResponseRootObject>({
      url:
        lastCommentTs === '' ?
          `/api/v1/live/${broadcastId}/get_comment/?num_comments_requested=${commentsRequested}`
          : `/api/v1/live/${broadcastId}/get_comment/?last_comment_ts=${lastCommentTs}&num_comments_requested=${commentsRequested}`,
      method: 'GET',
    });
    return body;
  }

  public async getHeartbeatViewerCount(broadcastId: string): Promise<LiveHeartbeatViewerCountResponseRootObject> {
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

  public async getInfo(broadcastId: string): Promise<LiveInfoResponseRootObject> {
    const { body } = await this.client.request.send<LiveInfoResponseRootObject>({
      url: `/api/v1/live/${broadcastId}/info/`,
      method: 'GET',
    });
    return body;
  }

  public async getFinalViewers(broadcastId: string): Promise<LiveFinalViewersResponseRootObject> {
    const { body } = await this.client.request.send<LiveFinalViewersResponseRootObject>({
      url: `api/v1/live/${broadcastId}/get_final_viewer_list/`,
      method: 'GET',
    });
    return body;
  }

  public async enableComments(broadcastId: string): Promise<LiveSwitchCommentsResponseRootObject> {
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

  public async createBroadcast(
    previewWidth: number = 720,
    previewHeight: number = 1184,
    message: string = '',
  ): Promise<LiveCreateBroadcastResponseRootObject> {
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

  public async showQuestion(broadcastId: string, questionId: string): Promise<LiveShowQuestionResponseRootObject> {
    // TODO: not working on client
    const { body } = await this.client.request.send<LiveShowQuestionResponseRootObject>({
      url: `/api/v1/live/${broadcastId}/question/${questionId}/activate/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async hideQuestion(broadcastId: string, questionId: string): Promise<LiveHideQuestionResponseRootObject> {
    const { body } = await this.client.request.send<LiveHideQuestionResponseRootObject>({
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

  public async wave(broadcastId: string, viewerId: string): Promise<LiveWaveResponseRootObject> {
    const { body } = await this.client.request.send<LiveWaveResponseRootObject>({
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

  public async getLikeCount(broadcastId: string, likeTs: string = ''): Promise<LiveLikeCountResponseRootObject> {
    const { body } = await this.client.request.send<LiveLikeCountResponseRootObject>({
      url: `/api/v1/live/${broadcastId}/get_like_count/` + (likeTs === '' ? '' : `?like_ts=${likeTs}`),
      method: 'GET',
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

  public async getJoinRequestCounts(
    broadcastId: string,
    lastTotalCount: number = 0,
    lastSeenTs: number = 0,
    lastFetchTs: number = 0)
    : Promise<LiveJoinRequestCountsResponseRootObject> {
    const baseUrl = `/api/v1/live/${broadcastId}/get_join_request_counts/`;
    const { body } = await this.client.request.send<LiveJoinRequestCountsResponseRootObject>({
      url: `${baseUrl}?last_total_count${lastTotalCount}&last_seen_ts=${lastSeenTs}&last_seen_ts${lastFetchTs}`,
      method: 'GET',
    });
    return body;
  }

  public getObsSettings(info: LiveCreateBroadcastResponseRootObject): LiveObsSettings {
    const parts = info.upload_url.split(new RegExp(info.broadcast_id));
    return { stream_url: parts[0], stream_key: info.broadcast_id + parts[1]};
}

  public async startBroadcast(broadcastId: string, sendNotifications: boolean): Promise<LiveStartBroadcastResponseRootObject> {
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

  public async endBroadcast(
    broadcastId: string,
    endAfterCopyrightWarning: boolean = false,
  ): Promise<LiveEndBroadcastResponseRootObject> {
    const { body } = await this.client.request.send<LiveEndBroadcastResponseRootObject>({
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

  /* 301 - moved */

  public async comment(broadcastId: string, message: string): Promise<any> {
    // 301 - moved?
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/comment`,
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

  public async pinComment(broadcastId: string, commentId: string): Promise<any> {
    // TODO: 301 - moved
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/pin_comment`,
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
    // TODO: 301 - moved
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/unpin_comment`,
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
    // TODO: 301 - moved
    const { body } = await this.client.request.send({
      url: `/api/v1/live/${broadcastId}/questions`,
      method: 'POST',
      form: this.client.request.sign({
        sources: 'story_and_live',
      }),
    });
    return body;
  }

}
