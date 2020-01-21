import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

@injectable()
export class LinkedAccountRepository {
  constructor(private http: AndroidHttp) {}
  public async getLinkageStatus() {
    const { body } = await this.http.send({
      url: `/api/v1/linked_accounts/get_linkage_status/`,
    });
    return body;
  }
}
