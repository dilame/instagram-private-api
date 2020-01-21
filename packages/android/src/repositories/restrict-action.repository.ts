import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import { RestrictActionRepositoryRestrictResponseRootObject } from '../responses';

@injectable()
export class RestrictActionRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async restrict(targetUserId: number | string): Promise<RestrictActionRepositoryRestrictResponseRootObject> {
    const { body } = await this.http.send<RestrictActionRepositoryRestrictResponseRootObject>({
      url: '/api/v1/restrict_action/restrict/',
      method: 'POST',
      form: {
        _csrftoken: this.state.cookieCsrfToken,
        _uuid: this.state.uuid,
        target_user_id: targetUserId,
      },
    });
    return body;
  }

  public async unrestrict(targetUserId: number | string): Promise<RestrictActionRepositoryRestrictResponseRootObject> {
    const { body } = await this.http.send<RestrictActionRepositoryRestrictResponseRootObject>({
      url: '/api/v1/restrict_action/unrestrict/',
      method: 'POST',
      form: {
        _csrftoken: this.state.cookieCsrfToken,
        _uuid: this.state.uuid,
        target_user_id: targetUserId,
      },
    });
    return body;
  }
}
