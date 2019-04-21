import * as _ from 'lodash';
import * as Bluebird from 'bluebird';
import * as Chance from 'chance';
import { jar } from 'request';
import { Cookie, CookieJar, MemoryCookieStore } from 'tough-cookie';
import * as devices from '../samples/devices.json';
import * as builds from '../samples/builds.json';
import * as CONSTANTS from './constants';
import {
  APP_VERSION,
  APP_VERSION_CODE,
  EXPERIMENTS,
  FACEBOOK_ANALYTICS_APPLICATION_ID,
  LOGIN_EXPERIMENTS,
  SIGNATURE_KEY,
  SIGNATURE_VERSION,
  TLD,
} from './constants';
import { ChallengeStateResponse, CheckpointResponse } from '../responses';
import { IgNoCheckpointError } from '../errors';

export class State {
  signatureKey: string = SIGNATURE_KEY;
  signatureVersion: string = SIGNATURE_VERSION;
  appVersion: string = APP_VERSION;
  appVersionCode: string = APP_VERSION_CODE;
  fbAnalyticsApplicationId: string = FACEBOOK_ANALYTICS_APPLICATION_ID;
  loginExperiments: string = LOGIN_EXPERIMENTS;
  experiments: string = EXPERIMENTS;
  language: string = 'en_US';
  timezoneOffset: string = String(new Date().getTimezoneOffset() * -60);
  deviceString: string;
  build: string;
  uuid: string;
  phoneId: string;
  /**
   * Google Play Advertising ID.
   *
   * The advertising ID is a unique ID for advertising, provided by Google
   * Play services for use in Google Play apps. Used by Instagram.
   *
   * @see https://support.google.com/googleplay/android-developer/answer/6048248?hl=en
   */
  adid: string;
  deviceId: string;
  proxyUrl: string;
  cookieStore = new MemoryCookieStore();
  cookieJar = jar(this.cookieStore);
  checkpoint: CheckpointResponse = null;
  challenge: ChallengeStateResponse = null;

  get CSRFToken() {
    const cookies = this.cookieJar.getCookies(CONSTANTS.HOST);
    const item = _.find(cookies, { key: 'csrftoken' });
    // @ts-ignore
    return item ? item.value : 'missing';
  }

  get challengeUrl() {
    if (!this.checkpoint) {
      throw new IgNoCheckpointError();
    }
    return `/api/v1${this.checkpoint.challenge.api_path}`;
  }

  /**
   * The current application session ID.
   *
   * This is a temporary ID which changes in the official app every time the
   * user closes and re-opens the Instagram application or switches account.
   *
   * We will update it once an hour
   */
  get sessionId(): string {
    const chance = new Chance(`${this.deviceId}${Math.round(Date.now() / 3600000)}`);
    return chance.guid();
  }

  get appUserAgent() {
    return `Instagram ${this.appVersion} Android (${this.deviceString}; ${this.language}; ${this.appVersionCode})`;
  }

  get webUserAgent() {
    return `Mozilla/5.0 (Linux; Android ${this.devicePayload.android_release}; ${this.devicePayload.model} Build/${
      this.build
    }; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 ${
      this.appUserAgent
    }`;
  }

  get devicePayload() {
    const deviceParts = this.deviceString.split(';');
    const [android_version, android_release] = deviceParts[0].split('/');
    const [manufacturer] = deviceParts[3].split('/');
    const model = deviceParts[4];
    return {
      android_version,
      android_release,
      manufacturer,
      model,
    };
  }

  public async extractCookie(name: string): Promise<Cookie> {
    return Bluebird.fromCallback<Cookie>(cb => this.cookieStore.findCookie(TLD, '/', name, cb));
  }

  public async extractCookieAccountId(): Promise<number | string> {
    const cookie = await this.extractCookie('ds_user_id');
    return cookie.value;
  }

  public async deserializeCookieJar(cookies: string) {
    this.cookieJar['_jar'] = await Bluebird.fromCallback(cb => CookieJar.deserialize(cookies, this.cookieStore, cb));
  }

  public async serializeCookieJar(): Promise<string> {
    return Bluebird.fromCallback(cb => this.cookieJar['_jar'].serialize(cb));
  }

  public generateDevice(seed: string): void {
    const chance = new Chance(seed);
    this.deviceString = chance.pickone(devices);
    const id = chance.string({
      pool: 'abcdef0123456789',
      length: 16,
    });
    this.deviceId = `android-${id}`;
    this.uuid = chance.guid();
    this.phoneId = chance.guid();
    this.adid = chance.guid();
    this.build = chance.pickone(builds);
  }

  public setDevice(device: object): void {
    this.deviceString = device.deviceString;
    this.deviceId = device.deviceId;
    this.uuid = device.uuid;
    this.phoneId = device.phoneId;
    this.adid = chance.guid();
    this.build = chance.pickone(builds);
  }
}
