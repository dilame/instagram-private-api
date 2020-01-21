import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

@injectable()
export class AttributionRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async logAttribution() {
    const { body } = await this.http.send({
      method: 'POST',
      url: '/api/v1/attribution/log_attribution/',
      form: this.http.sign({
        adid: this.state.adid,
      }),
    });
    return body;
  }
  // This method participates in post-login flow
  // And it crashes in official IG app, so we just catch it and return error
  public async logResurrectAttribution() {
    try {
      const { body } = await this.http.send({
        method: 'POST',
        url: '/api/v1/attribution/log_resurrect_attribution/',
        form: this.http.sign({
          _csrftoken: this.state.cookieCsrfToken,
          _uid: this.state.cookieUserId,
          adid: this.state.adid,
          _uuid: this.state.uuid,
        }),
      });
      return body;
    } catch (e) {
      return e;
    }
  }
}
