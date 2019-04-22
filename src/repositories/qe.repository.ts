import { Repository } from '../core/repository';

export class QeRepository extends Repository {
  public async sync() {
    let data;
    const uid = await this.client.state.extractCookieAccountId();
    if (uid) {
      data = {
        _csrftoken: this.client.state.CSRFToken,
        id: uid,
        _uid: uid,
        _uuid: this.client.state.uuid,
      };
    } else {
      data = {
        id: this.client.state.uuid,
      };
    }
    data = Object.assign(data, {
      experiments: this.client.state.loginExperiments,
    });
    return this.client.request.send({
      method: 'POST',
      url: '/api/v1/qe/sync/',
      headers: {
        'X-DEVICE-ID': this.client.state.uuid,
      },
      form: this.client.request.signPost(data),
    });
  }
}
