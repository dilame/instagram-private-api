import { InstagramRepository } from './repository';
import { plainToClass } from 'class-transformer';
import { LoginResponse } from '../responses/login.response';
import { LOGIN_EXPERIMENTS } from '../constants/constants';
import Bluebird = require('bluebird');

export class AuthRepository extends InstagramRepository {
  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/login/',
      form: this.client.request.signPost({
        username,
        password,
        guid: this.client.state.uuid,
        phone_id: this.client.state.phoneId,
        device_id: this.client.state.deviceId,
        adid: this.client.state.adid,
        google_tokens: '[]',
        login_attempt_count: 0,
      }),
    });
    return plainToClass(LoginResponse, response.body.logged_in_user as LoginResponse);
  }

  async preLoginFlow(concurrency = 1) {
    await Bluebird.map(
      [this.readMsisdnHeader(), this.contactPointPrefill(), this.launcherSync(), this.qeSync()],
      () => true,
      { concurrency },
    );
  }

  private readMsisdnHeader() {
    return this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/read_msisdn_header/',
      headers: {
        'X-DEVICE-ID': this.client.state.uuid,
      },
      form: this.client.request.signPost({
        mobile_subno_usage: 'default',
        device_id: this.client.state.uuid,
      }),
    });
  }

  private contactPointPrefill() {
    return this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/contact_point_prefill/',
      headers: {
        'X-DEVICE-ID': this.client.state.uuid,
      },
      form: this.client.request.signPost({
        mobile_subno_usage: 'default',
        device_id: this.client.state.uuid,
      }),
    });
  }

  private launcherSync() {
    return this.client.request.send({
      method: 'POST',
      url: '/api/v1/launcher/sync/',
      headers: {
        'X-DEVICE-ID': this.client.state.uuid,
      },
      form: this.client.request.signPost({
        id: this.client.state.uuid,
        configs:
          'ig_fbns_blocked,ig_android_felix_release_players,ig_user_mismatch_soft_error,ig_android_carrier_signals_killswitch,ig_android_killswitch_perm_direct_ssim,fizz_ig_android,ig_mi_block_expired_events,ig_android_os_version_blocking_config',
      }),
    });
  }

  private qeSync() {
    return this.client.request.send({
      method: 'POST',
      url: '/api/v1/qe/sync/',
      headers: {
        'X-DEVICE-ID': this.client.state.uuid,
      },
      form: this.client.request.signPost({
        id: this.client.state.uuid,
        experiments: LOGIN_EXPERIMENTS.join(','),
      }),
    });
  }
}
