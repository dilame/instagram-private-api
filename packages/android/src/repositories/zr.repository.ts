import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

@injectable()
export class ZrRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public tokenResult() {
    return this.http.send({
      url: '/api/v1/zr/token/result/',
      qs: {
        device_id: this.state.deviceId,
        token_hash: '',
        custom_device_id: this.state.uuid,
        fetch_reason: 'token_expired',
      },
    });
  }
}
