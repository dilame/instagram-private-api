import { Repository } from '../core/repository';
import { RestrictActionRepositoryRestrictResponseRootObject } from '../responses';

export class RestrictActionRepository extends Repository {
  public async restrict(targetUserId: number | string): Promise<RestrictActionRepositoryRestrictResponseRootObject> {
    const { body } = await this.client.request.send<RestrictActionRepositoryRestrictResponseRootObject>({
      url: '/api/v1/restrict_action/restrict/',
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        target_user_id: targetUserId,
      },
    });
    return body;
  }

  public async unrestrict(targetUserId: number | string): Promise<RestrictActionRepositoryRestrictResponseRootObject> {
    const { body } = await this.client.request.send<RestrictActionRepositoryRestrictResponseRootObject>({
      url: '/api/v1/restrict_action/unrestrict/',
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        target_user_id: targetUserId,
      },
    });
    return body;
  }
}
