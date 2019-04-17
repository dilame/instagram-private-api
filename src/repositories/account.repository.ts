import { sample } from 'lodash';
import { Repository } from '../core/repository';
import {
  AccountRepositoryCurrentUserResponseRootObject,
  AccountRepositoryLoginResponseLogged_in_user,
  AccountRepositoryLoginResponseRootObject,
} from '../responses';
import Bluebird = require('bluebird');
import { AccountEditProfileOptions } from '../types/account.edit-profile.options';

export class AccountRepository extends Repository {
  public async login(username: string, password: string): Promise<AccountRepositoryLoginResponseLogged_in_user> {
    const response = await this.client.request.send<AccountRepositoryLoginResponseRootObject>({
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
    return response.body.logged_in_user;
  }

  public async preLoginFlow(concurrency = 1) {
    await Bluebird.map(
      [this.readMsisdnHeader(), this.contactPointPrefill(), this.launcherSync(), this.qeSync()],
      () => true,
      { concurrency },
    );
  }

  public async currentUser() {
    const { body } = await this.client.request.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: '/api/v1/accounts/current_user/',
      qs: {
        edit: true,
      },
    });
    return body.user;
  }
  public async setBiography(text: string) {
    const { body } = await this.client.request.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: '/api/v1/accounts/set_biography/',
      method: 'POST',
      form: this.client.request.signPost({
        _csrftoken: this.client.state.CSRFToken,
        _uid: await this.client.state.extractCookieAccountId(),
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
        raw_text: text,
      }),
    });
    return body.user;
  }
  public async editProfile(options: AccountEditProfileOptions) {
    const { body } = await this.client.request.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: '/api/v1/accounts/edit_profile/',
      method: 'POST',
      form: this.client.request.signPost({
        ...options,
        _csrftoken: this.client.state.CSRFToken,
        _uid: await this.client.state.extractCookieAccountId(),
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body.user;
  }
  private readMsisdnHeader() {
    return this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/read_msisdn_header/',
      headers: {
        'X-DEVICE-ID': this.client.state.uuid,
      },
      form: this.client.request.signPost({
        mobile_subno_usage: sample(['default', 'ig_select_app']),
        device_id: this.client.state.uuid,
      }),
    });
  }

  private contactPointPrefill() {
    return this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/contact_point_prefill/',
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
        experiments: this.client.state.loginExperiments,
      }),
    });
  }
}
