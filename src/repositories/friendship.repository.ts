import { Repository } from '../core/repository';
import { FriendshipRepositoryShowResponseRootObject, FriendshipRepositoryChangeResponseRootObject } from '../responses';

export class FriendshipRepository extends Repository {
  async show(id: string | number) {
    const { body } = await this.client.request.send<FriendshipRepositoryShowResponseRootObject>({
      url: `/api/v1/friendships/show/${id}/`,
    });
    return body;
  }

  async showMany(userIds: string[] | number[]) {
    const { body } = await this.client.request.send({
      url: `/api/v1/friendships/show_many/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        user_ids: userIds.join(),
        _uuid: this.client.state.uuid,
      },
    });
    return body.friendship_statuses;
  }

  async block(id: string | number, mediaIdAttribution?: string) {
    return this.change('block', id, mediaIdAttribution);
  }

  async unblock(id: string | number, mediaIdAttribution?: string) {
    return this.change('unblock', id, mediaIdAttribution);
  }

  async create(id: string | number, mediaIdAttribution?: string) {
    return this.change('create', id, mediaIdAttribution);
  }

  async destroy(id: string | number, mediaIdAttribution?: string) {
    return this.change('destroy', id, mediaIdAttribution);
  }

  async approve(id: string | number, mediaIdAttribution?: string) {
    return this.change('approve', id, mediaIdAttribution);
  }

  async deny(id: string | number, mediaIdAttribution?: string) {
    return this.change('ignore', id, mediaIdAttribution);
  }

  async removeFollower(id: string | number) {
    return this.change('remove_follower', id);
  }

  private async change(action: string, id: string | number, mediaIdAttribution?: string) {
    const { body } = await this.client.request.send<FriendshipRepositoryChangeResponseRootObject>({
      url: `/api/v1/friendships/${action}/${id}/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        user_id: id,
        radio_type: this.client.state.radioType,
        _uid: this.client.state.cookieUserId,
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
        media_id_attribution: mediaIdAttribution,
      }),
    });
    return body.friendship_status;
  }
}
