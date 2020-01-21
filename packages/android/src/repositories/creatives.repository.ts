import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

@injectable()
export class CreativesRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async writeSupportedCapabilities() {
    const { body } = await this.http.send({
      url: '/api/v1/creatives/write_supported_capabilities/',
      method: 'POST',
      form: this.http.sign({
        supported_capabilities_new: JSON.stringify(this.state.supportedCapabilities),
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        _uuid: this.state.uuid,
      }),
    });
    return body;
  }
}
