import { ReadStream } from 'fs';
import { Repository } from '../core/repository';
import {
  AccountRepositoryCurrentUserResponseRootObject,
  AccountRepositoryLoginResponseLogged_in_user,
  AccountRepositoryLoginResponseRootObject,
} from '../responses';
import { AccountEditProfileOptions } from '../types/account.edit-profile.options';
import Bluebird = require('bluebird');

export class AccountRepository extends Repository {
  public async login(username: string, password: string): Promise<AccountRepositoryLoginResponseLogged_in_user> {
    const response = await this.client.request.send<AccountRepositoryLoginResponseRootObject>({
      method: 'POST',
      url: '/api/v1/accounts/login/',
      form: this.client.request.sign({
        username,
        password,
        guid: this.client.state.uuid,
        phone_id: this.client.state.phoneId,
        _csrftoken: this.client.state.CSRFToken,
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
      [this.readMsisdnHeader(), this.contactPointPrefill(), this.client.launcher.sync(), this.client.qe.sync()],
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
      form: this.client.request.sign({
        _csrftoken: this.client.state.CSRFToken,
        _uid: await this.client.state.extractCookieAccountId(),
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
        raw_text: text,
      }),
    });
    return body.user;
  }

  public async changeProfilePicture(stream: ReadStream): Promise<AccountRepositoryCurrentUserResponseRootObject> {
    const signedParameters = this.client.request.sign({
      _csrftoken: this.client.state.CSRFToken,
      _uid: await this.client.state.extractCookieAccountId(),
      _uuid: this.client.state.uuid,
    });
    const { body } = await this.client.request.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: '/api/v1/accounts/change_profile_picture/',
      method: 'POST',
      formData: {
        ...signedParameters,
        profile_pic: {
          value: stream,
          options: {
            filename: 'profile_pic',
            contentType: 'application/octet-stream',
          },
        },
      },
    });
    return body;
  }

  public async editProfile(options: AccountEditProfileOptions) {
    const { body } = await this.client.request.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: '/api/v1/accounts/edit_profile/',
      method: 'POST',
      form: this.client.request.sign({
        ...options,
        _csrftoken: this.client.state.CSRFToken,
        _uid: await this.client.state.extractCookieAccountId(),
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body.user;
  }

  public async removeProfilePicture() {
    return this.command('remove_profile_picture');
  }

  public async setPrivate() {
    return this.command('set_private');
  }

  public async setPublic() {
    return this.command('set_public');
  }

  private async command(command: string): Promise<AccountRepositoryCurrentUserResponseRootObject> {
    const { body } = await this.client.request.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: `/api/v1/accounts/${command}/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.CSRFToken,
        _uid: await this.client.state.extractCookieAccountId(),
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async readMsisdnHeader() {
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/read_msisdn_header/',
      headers: {
        'X-DEVICE-ID': this.client.state.uuid,
      },
      form: this.client.request.sign({
        mobile_subno_usage: 'default',
        device_id: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async msisdnHeaderBootstrap() {
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/msisdn_header_bootstrap/',
      form: this.client.request.sign({
        mobile_subno_usage: 'ig_select_app',
        device_id: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async contactPointPrefill() {
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/contact_point_prefill/',
      form: this.client.request.sign({
        mobile_subno_usage: 'default',
        device_id: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async getPrefillCandidates() {
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/get_prefill_candidates/',
      form: this.client.request.sign({
        android_device_id: this.client.state.deviceId,
        usages: '["account_recovery_omnibox"]',
        device_id: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async processContactPointSignals() {
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/process_contact_point_signals/',
      form: this.client.request.sign({
        phone_id: this.client.state.phoneId,
        _csrftoken: this.client.state.CSRFToken,
        _uid: await this.client.state.extractCookieAccountId(),
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
        google_tokens: '[]',
      }),
    });
    return body;
  }
}
