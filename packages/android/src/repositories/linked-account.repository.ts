import { Repository } from '../core/repository';

export class LinkedAccountRepository extends Repository {
  public async getLinkageStatus() {
    const { body } = await this.client.request.send({
      url: `/api/v1/linked_accounts/get_linkage_status/`,
    });
    return body;
  }
}
