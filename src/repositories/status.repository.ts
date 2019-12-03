import { Repository } from '../core/repository';

export class StatusRepository extends Repository {
  public async getViewableStatuses() {
    const { body } = await this.client.request.send({
      url: '/api/v1/status/get_viewable_statuses/',
      method: 'GET',
    });
    return body;
  }
}
