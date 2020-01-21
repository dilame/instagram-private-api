import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

@injectable()
export class QeRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public syncExperiments() {
    return this.sync(this.state.experiments);
  }
  public async syncLoginExperiments() {
    return this.sync(this.state.loginExperiments);
  }
  public async sync(experiments) {
    let data;
    try {
      const uid = this.state.cookieUserId;
      data = {
        _csrftoken: this.state.cookieCsrfToken,
        id: uid,
        _uid: uid,
        _uuid: this.state.uuid,
      };
    } catch {
      data = {
        id: this.state.uuid,
      };
    }
    data = Object.assign(data, { experiments });
    const { body } = await this.http.send({
      method: 'POST',
      url: '/api/v1/qe/sync/',
      headers: {
        'X-DEVICE-ID': this.state.uuid,
      },
      form: this.http.sign(data),
    });
    return body;
  }
}
