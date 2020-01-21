import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

@injectable()
export class LoomRepository {
  constructor(private http: AndroidHttp) {}
  public async fetchConfig() {
    const { body } = await this.http.send({
      url: '/api/v1/loom/fetch_config/',
    });
    return body;
  }
}
