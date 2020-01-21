import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import { DiscoverRepositoryChainingResponseRootObject } from '../responses/discover.repository.chaining.response';

@injectable()
export class DiscoverRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  /**
   * Gets the suggestions based on a user
   * @param targetId user id/pk
   */
  async chaining(targetId: string): Promise<DiscoverRepositoryChainingResponseRootObject> {
    const { body } = await this.http.send<DiscoverRepositoryChainingResponseRootObject>({
      url: '/api/v1/discover/chaining/',
      qs: {
        target_id: targetId,
      },
    });
    return body;
  }

  async topicalExplore() {
    const { body } = await this.http.send({
      url: '/api/v1/discover/topical_explore/',
      qs: {
        is_prefetch: true,
        omit_cover_media: false,
        use_sectional_payload: true,
        timezone_offset: this.state.timezoneOffset,
        session_id: this.state.clientSessionId,
        include_fixed_destinations: false,
      },
    });
    return body;
  }

  async markSuSeen() {
    const { body } = await this.http.send({
      url: '/api/v1/discover/mark_su_seen/',
      method: 'POST',
      form: this.http.sign({
        _csrftoken: this.state.cookieCsrfToken,
        _uuid: this.state.uuid,
      }),
    });
    return body;
  }

  async profileSuBadge() {
    const { body } = await this.http.send({
      url: '/api/v1/discover/profile_su_badge/',
      method: 'POST',
      form: this.http.sign({
        _csrftoken: this.state.cookieCsrfToken,
        _uuid: this.state.uuid,
      }),
    });
    return body;
  }
}
