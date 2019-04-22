import { Repository } from '../core/repository';

export class DiscoverRepository extends Repository {
  async topicalExplore() {
    const { body } = await this.client.request.send({
      url: '/api/v1/discover/topical_explore/',
      qs: {
        is_prefetch: true,
        omit_cover_media: false,
        use_sectional_payload: true,
        timezone_offset: this.client.state.timezoneOffset,
        session_id: this.client.state.sessionId,
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
        _csrftoken: this.client.state.CSRFToken,
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
        _csrftoken: this.client.state.CSRFToken,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }
}
