import { Repository } from '../core/repository';
import { DiscoverRepositoryChainingResponseRootObject } from '../responses/discover.repository.chaining.response';

export class DiscoverRepository extends Repository {
  /**
   * Gets the suggestions based on a user
   * @param targetId user id/pk
   */
  async chaining(targetId: string): Promise<DiscoverRepositoryChainingResponseRootObject> {
    const { body } = await this.client.request.send<DiscoverRepositoryChainingResponseRootObject>({
      url: '/api/v1/discover/chaining/',
      qs: {
        target_id: targetId,
      },
    });
    return body;
  }

  async topicalExplore() {
    const { body } = await this.client.request.send({
      url: '/api/v1/discover/topical_explore/',
      qs: {
        is_prefetch: true,
        omit_cover_media: false,
        use_sectional_payload: true,
        timezone_offset: this.client.state.timezoneOffset,
        session_id: this.client.state.clientSessionId,
        include_fixed_destinations: false,
      },
    });
    return body;
  }

  async markSuSeen() {
    const { body } = await this.client.request.send({
      url: '/api/v1/discover/mark_su_seen/',
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  async profileSuBadge() {
    const { body } = await this.client.request.send({
      url: '/api/v1/discover/profile_su_badge/',
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }
}
