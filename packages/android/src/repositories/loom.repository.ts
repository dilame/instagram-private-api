import { Repository } from '../core/repository';

export class LoomRepository extends Repository {
  public async fetchConfig() {
    const { body } = await this.client.request.send({
      url: '/api/v1/loom/fetch_config/',
    });
    return body;
  }
}
