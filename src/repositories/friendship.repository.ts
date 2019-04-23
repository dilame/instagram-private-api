import { Repository } from '../core/repository';
import { FriendshipRepositoryShowResponseRootObject, FriendshipRepositoryChangeResponseRootObject } from '../responses';

export class FriendshipRepository extends Repository {
  async show(id: string | number) {
    const { body } = await this.client.request.send<FriendshipRepositoryShowResponseRootObject>({
      url: `/api/v1/friendships/show/${id}/`,
    });
    return body;
  }

  async create(id: string, mediaIdAttribution?: string) {
    return this.change('create', id, mediaIdAttribution);
  }

  async destroy(id: string, mediaIdAttribution?: string) {
    return this.change('destroy', id, mediaIdAttribution);
  }

  private async change(action: string, id: string, mediaIdAttribution?: string) {
    const { body } = await this.client.request.send<FriendshipRepositoryChangeResponseRootObject>({
      url: `/api/v1/friendships/${action}/${id}/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        user_id: id,
        radio_type: this.client.state.radioType,
        _uid: this.client.state.cookieAccountId,
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
        media_id_attribution: mediaIdAttribution,
      }),
    });
    return body.friendship_status;
  }
}
