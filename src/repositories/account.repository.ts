import { ReadStream } from 'fs';
import { Repository } from '../core/repository';
import {
  AccountRepositoryCurrentUserResponseRootObject,
  AccountRepositoryLoginErrorResponse,
  AccountRepositoryLoginResponseLogged_in_user,
  AccountRepositoryLoginResponseRootObject,
  SpamResponse,
  StatusResponse,
} from '../responses';
import {
  IgLoginBadPasswordError,
  IgLoginInvalidUserError,
  IgLoginTwoFactorRequiredError,
  IgResponseError,
} from '../errors';
import { IgResponse, AccountEditProfileOptions, AccountTwoFactorLoginOptions } from '../types';
import { defaultsDeep } from 'lodash';
import { IgSignupBlockError } from '../errors/ig-signup-block.error';
import Bluebird = require('bluebird');

export class AccountRepository extends Repository {
  public async login(username: string, password: string): Promise<AccountRepositoryLoginResponseLogged_in_user> {
    const response = await Bluebird.try(() =>
      this.client.request.send<AccountRepositoryLoginResponseRootObject>({
        method: 'POST',
        url: '/api/v1/accounts/login/',
        form: this.client.request.sign({
          username,
          password,
          guid: this.client.state.uuid,
          phone_id: this.client.state.phoneId,
          _csrftoken: this.client.state.cookieCsrfToken,
          device_id: this.client.state.deviceId,
          adid: this.client.state.adid,
          google_tokens: '[]',
          login_attempt_count: 0,
        }),
      }),
    ).catch(IgResponseError, error => {
      if (error.response.body.two_factor_required) {
        throw new IgLoginTwoFactorRequiredError(error.response as IgResponse<AccountRepositoryLoginErrorResponse>);
      }
      switch (error.response.body.error_type) {
        case 'bad_password': {
          throw new IgLoginBadPasswordError(error.response as IgResponse<AccountRepositoryLoginErrorResponse>);
        }
        case 'invalid_user': {
          throw new IgLoginInvalidUserError(error.response as IgResponse<AccountRepositoryLoginErrorResponse>);
        }
        default: {
          throw error;
        }
      }
    });
    return response.body.logged_in_user;
  }

  public async twoFactorLogin(
    options: AccountTwoFactorLoginOptions,
  ): Promise<AccountRepositoryLoginResponseLogged_in_user> {
    options = defaultsDeep(options, {
      trustThisDevice: '1',
      verificationMethod: '1',
    });
    const { body } = await this.client.request.send<AccountRepositoryLoginResponseLogged_in_user>({
      url: '/api/v1/accounts/two_factor_login/',
      method: 'POST',
      form: this.client.request.sign({
        verification_code: options.verificationCode,
        _csrftoken: this.client.state.cookieCsrfToken,
        two_factor_identifier: options.twoFactorIdentifier,
        username: options.username,
        trust_this_device: options.trustThisDevice,
        guid: this.client.state.uuid,
        device_id: this.client.state.deviceId,
        verification_method: options.verificationMethod,
      }),
    });
    return body;
  }

  public async logout() {
    const { body } = await this.client.request.send<StatusResponse>({
      method: 'POST',
      url: '/api/v1/accounts/logout/',
      form: {
        guid: this.client.state.uuid,
        phone_id: this.client.state.phoneId,
        _csrftoken: this.client.state.cookieCsrfToken,
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  async create({ username, password, email, first_name }) {
    const { body } = await Bluebird.try(() =>
      this.client.request.send({
        method: 'POST',
        url: '/api/v1/accounts/create/',
        form: this.client.request.sign({
          username,
          password,
          email,
          first_name,
          guid: this.client.state.uuid,
          device_id: this.client.state.deviceId,
          _csrftoken: this.client.state.cookieCsrfToken,
          force_sign_up_code: '',
          qs_stamp: '',
          waterfall_id: this.client.state.uuid,
          sn_nonce: '',
          sn_result: '',
        }),
      }),
    ).catch(IgResponseError, error => {
      switch (error.response.body.error_type) {
        case 'signup_block': {
          throw new IgSignupBlockError(error.response as IgResponse<SpamResponse>);
        }
        default: {
          throw error;
        }
      }
    });
    return body;
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
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
        raw_text: text,
      }),
    });
    return body.user;
  }

  public async changeProfilePicture(stream: ReadStream): Promise<AccountRepositoryCurrentUserResponseRootObject> {
    const signedParameters = this.client.request.sign({
      _csrftoken: this.client.state.cookieCsrfToken,
      _uid: this.client.state.cookieUserId,
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
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body.user;
  }

  public async changePassword(oldPassword: string, newPassword: string) {
    const { body } = await this.client.request.send({
      url: '/api/v1/accounts/change_password/',
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        old_password: oldPassword,
        new_password1: newPassword,
        new_password2: newPassword,
      }),
    });
    return body;
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
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async readMsisdnHeader(usage = 'default') {
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/read_msisdn_header/',
      headers: {
        'X-DEVICE-ID': this.client.state.uuid,
      },
      form: this.client.request.sign({
        mobile_subno_usage: usage,
        device_id: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async msisdnHeaderBootstrap(usage = 'default') {
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/msisdn_header_bootstrap/',
      form: this.client.request.sign({
        mobile_subno_usage: usage,
        device_id: this.client.state.uuid,
      }),
    });
    return body;
  }

  public async contactPointPrefill(usage = 'default') {
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/accounts/contact_point_prefill/',
      form: this.client.request.sign({
        mobile_subno_usage: usage,
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
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        device_id: this.client.state.uuid,
        _uuid: this.client.state.uuid,
        google_tokens: '[]',
      }),
    });
    return body;
  }
}
