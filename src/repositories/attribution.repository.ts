import { Repository } from '../core/repository';

export class AttributionRepository extends Repository {
  public async logAttribution() {
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/attribution/log_attribution/',
      form: this.client.request.sign({
        adid: this.client.state.adid,
      }),
    });
    return body;
  }
  // This method participates in post-login flow
  // And it crashes in official IG app, so we just catch it and return error
  public async logResurrectAttribution() {
    try {
      const { body } = await this.client.request.send({
        method: 'POST',
        url: '/api/v1/attribution/log_resurrect_attribution/',
        form: this.client.request.sign({
          _csrftoken: this.client.state.cookieCsrfToken,
          _uid: this.client.state.cookieUserId,
          adid: this.client.state.adid,
          _uuid: this.client.state.uuid,
        }),
      });
      return body;
    } catch (e) {
      return e;
    }
  }
}
