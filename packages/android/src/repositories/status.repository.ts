import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

@injectable()
export class StatusRepository {
  constructor(private http: AndroidHttp) {}
  public async getViewableStatuses() {
    const { body } = await this.http.send({
      url: '/api/v1/status/get_viewable_statuses/',
      method: 'GET',
    });
    return body;
  }
}
