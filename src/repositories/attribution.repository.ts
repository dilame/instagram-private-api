import { Repository } from '../core/repository';

export class AttributionRepository extends Repository {
  public logAttrribution() {
    return this.client.request.send({
      method: 'POST',
      url: '/api/v1/attribution/log_attribution/',
      form: this.client.request.sign({
        adid: this.client.state.adid,
      }),
    });
  }
}
