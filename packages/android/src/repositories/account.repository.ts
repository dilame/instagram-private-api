import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

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
import debug from 'debug';
import * as crypto from 'crypto';
import { UploadRepository } from './upload.repository';

@injectable()
export class AccountRepository {
  constructor(private http: AndroidHttp, private state: AndroidState, private upload: UploadRepository) {}
  private static accountDebug = debug('ig:account');
  public async login(username: string, password: string): Promise<AccountRepositoryLoginResponseLogged_in_user> {
    const { encrypted, time } = this.encryptPassword(password);
    const response = await Bluebird.try(() =>
      this.http.send<AccountRepositoryLoginResponseRootObject>({
        method: 'POST',
        url: '/api/v1/accounts/login/',
        form: this.http.sign({
          username,
          password,
          enc_password: `#PWD_INSTAGRAM:4:${time}:${encrypted}`,
          guid: this.state.uuid,
          phone_id: this.state.phoneId,
          _csrftoken: this.state.cookieCsrfToken,
          device_id: this.state.deviceId,
          adid: '' /*this.state.adid ? not set on pre-login*/,
          google_tokens: '[]',
          login_attempt_count: 0,
          country_codes: JSON.stringify([{ country_code: '1', source: 'default' }]),
          jazoest: AccountRepository.createJazoest(this.state.phoneId),
        }),
      }),
    ).catch(IgResponseError, error => {
      if (error.response.body.two_factor_required) {
        AccountRepository.accountDebug(
          `Login failed, two factor auth required: ${JSON.stringify(error.response.body.two_factor_info)}`,
        );
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

  public static createJazoest(input: string): string {
    const buf = Buffer.from(input, 'ascii');
    let sum = 0;
    for (let i = 0; i < buf.byteLength; i++) {
      sum += buf.readUInt8(i);
    }
    return `2${sum}`;
  }

  public encryptPassword(password: string): { time: string; encrypted: string } {
    const randKey = crypto.randomBytes(32);
    const iv = crypto.randomBytes(12);
    const rsaEncrypted = crypto.publicEncrypt(
      {
        key: Buffer.from(this.state.passwordEncryptionPubKey, 'base64').toString(),
        // @ts-ignore
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      randKey,
    );
    const cipher = crypto.createCipheriv('aes-256-gcm', randKey, iv);
    const time = Math.floor(Date.now() / 1000).toString();
    cipher.setAAD(Buffer.from(time));
    const aesEncrypted = Buffer.concat([cipher.update(password, 'utf8'), cipher.final()]);
    const sizeBuffer = Buffer.alloc(2, 0);
    sizeBuffer.writeInt16LE(rsaEncrypted.byteLength, 0);
    const authTag = cipher.getAuthTag();
    return {
      time,
      encrypted: Buffer.concat([
        // @ts-ignore
        Buffer.from([1, this.state.passwordEncryptionKeyId]),
        iv,
        sizeBuffer,
        rsaEncrypted,
        authTag,
        aesEncrypted,
      ]).toString('base64'),
    };
  }

  public async twoFactorLogin(
    options: AccountTwoFactorLoginOptions,
  ): Promise<AccountRepositoryLoginResponseLogged_in_user> {
    options = defaultsDeep(options, {
      trustThisDevice: '1',
      verificationMethod: '1',
    });
    const { body } = await this.http.send<AccountRepositoryLoginResponseLogged_in_user>({
      url: '/api/v1/accounts/two_factor_login/',
      method: 'POST',
      form: this.http.sign({
        verification_code: options.verificationCode,
        _csrftoken: this.state.cookieCsrfToken,
        two_factor_identifier: options.twoFactorIdentifier,
        username: options.username,
        trust_this_device: options.trustThisDevice,
        guid: this.state.uuid,
        device_id: this.state.deviceId,
        verification_method: options.verificationMethod,
      }),
    });
    return body;
  }

  public async logout() {
    const { body } = await this.http.send<StatusResponse>({
      method: 'POST',
      url: '/api/v1/accounts/logout/',
      form: {
        guid: this.state.uuid,
        phone_id: this.state.phoneId,
        _csrftoken: this.state.cookieCsrfToken,
        device_id: this.state.deviceId,
        _uuid: this.state.uuid,
      },
    });
    return body;
  }

  async create({ username, password, email, first_name }) {
    const { body } = await Bluebird.try(() =>
      this.http.send({
        method: 'POST',
        url: '/api/v1/accounts/create/',
        form: this.http.sign({
          username,
          password,
          email,
          first_name,
          guid: this.state.uuid,
          device_id: this.state.deviceId,
          _csrftoken: this.state.cookieCsrfToken,
          force_sign_up_code: '',
          qs_stamp: '',
          waterfall_id: this.state.uuid,
          sn_nonce: '',
          sn_result: '',
        }),
      }),
    ).catch(IgResponseError, error => {
      switch (error.response.body.error_type) {
        case 'signup_block': {
          AccountRepository.accountDebug('Signup failed');
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
    const { body } = await this.http.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: '/api/v1/accounts/current_user/',
      qs: {
        edit: true,
      },
    });
    return body.user;
  }

  public async setBiography(text: string) {
    const { body } = await this.http.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: '/api/v1/accounts/set_biography/',
      method: 'POST',
      form: this.http.sign({
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        device_id: this.state.deviceId,
        _uuid: this.state.uuid,
        raw_text: text,
      }),
    });
    return body.user;
  }
  // TODO: move this method to service!!!
  public async changeProfilePicture(picture: Buffer): Promise<AccountRepositoryCurrentUserResponseRootObject> {
    const uploadId = Date.now().toString();
    await this.upload.photo({
      file: picture,
      uploadId,
    });
    const { body } = await this.http.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: '/api/v1/accounts/change_profile_picture/',
      method: 'POST',
      form: {
        _csrftoken: this.state.cookieCsrfToken,
        _uuid: this.state.uuid,
        use_fbuploader: true,
        upload_id: uploadId,
      },
    });
    return body;
  }

  public async editProfile(options: AccountEditProfileOptions) {
    const { body } = await this.http.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: '/api/v1/accounts/edit_profile/',
      method: 'POST',
      form: this.http.sign({
        ...options,
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        device_id: this.state.deviceId,
        _uuid: this.state.uuid,
      }),
    });
    return body.user;
  }

  public async changePassword(oldPassword: string, newPassword: string) {
    const { body } = await this.http.send({
      url: '/api/v1/accounts/change_password/',
      method: 'POST',
      form: this.http.sign({
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        _uuid: this.state.uuid,
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
    const { body } = await this.http.send<AccountRepositoryCurrentUserResponseRootObject>({
      url: `/api/v1/accounts/${command}/`,
      method: 'POST',
      form: this.http.sign({
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        _uuid: this.state.uuid,
      }),
    });
    return body;
  }

  public async readMsisdnHeader(usage = 'default') {
    const { body } = await this.http.send({
      method: 'POST',
      url: '/api/v1/accounts/read_msisdn_header/',
      headers: {
        'X-DEVICE-ID': this.state.uuid,
      },
      form: this.http.sign({
        mobile_subno_usage: usage,
        device_id: this.state.uuid,
      }),
    });
    return body;
  }

  public async msisdnHeaderBootstrap(usage = 'default') {
    const { body } = await this.http.send({
      method: 'POST',
      url: '/api/v1/accounts/msisdn_header_bootstrap/',
      form: this.http.sign({
        mobile_subno_usage: usage,
        device_id: this.state.uuid,
      }),
    });
    return body;
  }

  public async contactPointPrefill(usage = 'default') {
    const { body } = await this.http.send({
      method: 'POST',
      url: '/api/v1/accounts/contact_point_prefill/',
      form: this.http.sign({
        mobile_subno_usage: usage,
        device_id: this.state.uuid,
      }),
    });
    return body;
  }

  public async getPrefillCandidates() {
    const { body } = await this.http.send({
      method: 'POST',
      url: '/api/v1/accounts/get_prefill_candidates/',
      form: this.http.sign({
        android_device_id: this.state.deviceId,
        usages: '["account_recovery_omnibox"]',
        device_id: this.state.uuid,
      }),
    });
    return body;
  }

  public async processContactPointSignals() {
    const { body } = await this.http.send({
      method: 'POST',
      url: '/api/v1/accounts/process_contact_point_signals/',
      form: this.http.sign({
        phone_id: this.state.phoneId,
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        device_id: this.state.uuid,
        _uuid: this.state.uuid,
        google_tokens: '[]',
      }),
    });
    return body;
  }

  public async sendRecoveryFlowEmail(query: string) {
    const { body } = await this.http.send({
      url: '/api/v1/accounts/send_recovery_flow_email/',
      method: 'POST',
      form: this.http.sign({
        _csrftoken: this.state.cookieCsrfToken,
        adid: '' /*this.state.adid ? not available on pre-login?*/,
        guid: this.state.uuid,
        device_id: this.state.deviceId,
        query,
      }),
    });
    return body;
  }
}
