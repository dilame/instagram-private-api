import { Repository } from '../core/repository';
import {
  DirectThreadRepositoryAddUserResponseRootObject,
  DirectThreadRepositoryBroadcastResponseRootObject,
  DirectThreadRepositoryGetByParticipantsResponseRootObject,
  DirectThreadRepositoryUpdateTitleResponseRootObject,
  StatusResponse,
} from '../responses';
import { DirectThreadBroadcastOptions } from '../types';
import Chance = require('chance');
import { DirectThreadRepositoryApproveParticipantRequestResponseRootObject } from '../responses';

export class DirectThreadRepository extends Repository {
  public async approve(threadId: string | number): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: `/api/v1/direct_v2/threads/${threadId}/approve/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async approveMultiple(threadIds: string[] | number[]): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: '/api/v1/direct_v2/threads/approve_multiple/',
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        thread_ids: JSON.stringify(threadIds),
      },
    });
    return body;
  }

  public async decline(threadId: string | number): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: `/api/v1/direct_v2/threads/${threadId}/decline/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async declineMultiple(threadIds: string[] | number[]): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: '/api/v1/direct_v2/threads/decline_multiple/',
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        thread_ids: JSON.stringify(threadIds),
      },
    });
    return body;
  }

  public async declineAll(): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: `/api/v1/direct_v2/threads/decline_all/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async approveParticipantRequests(
    threadId: string | number,
    userIds: string[],
  ): Promise<DirectThreadRepositoryApproveParticipantRequestResponseRootObject> {
    const { body } = await this.client.request.send<DirectThreadRepositoryApproveParticipantRequestResponseRootObject>({
      url: `/api/v1/direct_v2/threads/${threadId}/approve_participant_requests/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        user_ids: JSON.stringify(userIds),
        share_join_chat_story: true,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  // move to direct-repo?
  public async getByParticipants(
    recipientUsers: string[] | number[],
  ): Promise<DirectThreadRepositoryGetByParticipantsResponseRootObject> {
    const { body } = await this.client.request.send<DirectThreadRepositoryGetByParticipantsResponseRootObject>({
      url: '/api/v1/direct_v2/threads/get_by_participants/',
      method: 'GET',
      qs: {
        recipient_users: JSON.stringify(recipientUsers),
      },
    });
    return body;
  }

  public async updateTitle(
    threadId: string | number,
    title: string,
  ): Promise<DirectThreadRepositoryUpdateTitleResponseRootObject> {
    const { body } = await this.client.request.send<DirectThreadRepositoryUpdateTitleResponseRootObject>({
      url: `/api/v1/direct_v2/threads/${threadId}/update_title/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        title,
      },
    });
    return body;
  }

  public async mute(threadId: string | number): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: `/api/v1/direct_v2/threads/${threadId}/mute/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async unmute(threadId: string | number): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: `/api/v1/direct_v2/threads/${threadId}/unmute/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async addUser(
    threadId: string | number,
    userIds: string[] | number[],
  ): Promise<DirectThreadRepositoryAddUserResponseRootObject> {
    const { body } = await this.client.request.send<DirectThreadRepositoryAddUserResponseRootObject>({
      url: `/api/v1/direct_v2/threads/${threadId}/add_user/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        user_ids: JSON.stringify(userIds),
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async leave(threadId: string): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: `/api/v1/direct_v2/threads/${threadId}/leave/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async hide(threadId: string): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: `/api/v1/direct_v2/threads/${threadId}/hide/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        use_unified_inbox: true,
      },
    });
    return body;
  }

  public async markItemSeen(threadId: string, threadItemId: string) {
    const { body } = await this.client.request.send<StatusResponse>({
      url: `/api/v1/direct_v2/threads/${threadId}/items/${threadItemId}/seen/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        use_unified_inbox: true,
        action: 'mark_seen',
        thread_id: threadId,
        item_id: threadItemId,
      },
    });
    return body;
  }

  public async broadcast(
    options: DirectThreadBroadcastOptions,
  ): Promise<DirectThreadRepositoryBroadcastResponseRootObject> {
    const mutationToken = new Chance().guid();
    const recipients = options.threadIds || options.userIds;
    const recipientsType = options.threadIds ? 'thread_ids' : 'recipient_users';
    const recipientsIds = recipients instanceof Array ? recipients : [recipients];

    const form = {
      action: 'send_item',
      [recipientsType]: JSON.stringify(recipientsType === 'thread_ids' ? recipientsIds : [recipientsIds]),
      client_context: mutationToken,
      _csrftoken: this.client.state.cookieCsrfToken,
      device_id: this.client.state.deviceId,
      mutation_token: mutationToken,
      _uuid: this.client.state.uuid,
      ...options.form,
    };

    const { body } = await this.client.request.send<DirectThreadRepositoryBroadcastResponseRootObject>({
      url: `/api/v1/direct_v2/threads/broadcast/${options.item}/`,
      method: 'POST',
      form: options.signed ? this.client.request.sign(form) : form,
      qs: options.qs,
    });
    return body;
  }

  public async deleteItem(threadId: string | number, itemId: string | number): Promise<StatusResponse> {
    const { body } = await this.client.request.send({
      url: `/api/v1/direct_v2/threads/${threadId}/items/${itemId}/delete/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }
}
