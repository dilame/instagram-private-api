import * as _ from 'lodash';
import * as Bluebird from 'bluebird';
import * as Chance from 'chance';
import { jar } from 'request';
import { MemoryCookieStore, Cookie, CookieJar } from 'tough-cookie';
import * as devices from '../samples/devices.json';
import * as builds from '../samples/builds.json';
import * as loginExperiments from '../samples/login-experiments.json';
import * as experiments from '../samples/experiments.json';
import * as CONSTANTS from './constants';
import { TLD } from './constants';
import { CheckpointResponse } from '../responses';

export class State {
  signatureKey: string = '19ce5f445dbfd9d29c59dc2a78c616a7fc090a8e018b9267bc4240a30244c53b';
  signatureVersion: string = '4';
  appVersion: string = '76.0.0.15.395';
  appVersionCode: string = '138226743';
  fbAnalyticsApplicationId: string = '567067343352427';
  loginExperiments: string = loginExperiments.join(',');
  experiments: string = experiments.join(',');
  language: string = 'en_US';
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
  get CSRFToken() {
    const cookies = this.cookieJar.getCookies(CONSTANTS.HOST);
    const item = _.find(cookies, { key: 'csrftoken' });
    // @ts-ignore
    return item ? item.value : 'missing';
  }

  get appUserAgent() {
    return `Instagram ${this.appVersion} Android (${this.deviceString}; ${this.language}; ${this.appVersionCode})`;
  }
  get webUserAgent() {
    return `Mozilla/5.0 (Linux; Android ${this.payload.android_release}; ${this.payload.model} Build/${
      this.build
    }; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 ${
      this.appUserAgent
    }`;
  }

  get payload() {
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
}
