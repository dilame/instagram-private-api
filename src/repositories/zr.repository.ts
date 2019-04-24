import { Repository } from '../core/repository';

export class ZrRepository extends Repository {
  public tokenResult() {
    return this.client.request.send({
      url: '/api/v1/zr/token/result/',
      qs: {
        device_id: this.client.state.deviceId,
        token_hash: '',
        custom_device_id: this.client.state.uuid,
        fetch_reason: 'token_expired',
      },
    });
  }
}
