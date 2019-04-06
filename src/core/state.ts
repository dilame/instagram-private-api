import * as Chance from 'chance';
import * as devices from './devices/devices.json';
import * as builds from './devices/builds.json';
import { MemoryCookieStore } from 'tough-cookie';
import { jar } from 'request';
import * as CONSTANTS from '../constants/constants';
import * as _ from 'lodash';

export class State {
  signatureKey: string = '19ce5f445dbfd9d29c59dc2a78c616a7fc090a8e018b9267bc4240a30244c53b';
  signatureVersion: string = '4';
  appVersion: string = '76.0.0.15.395';
  appVersionCode: string = '138226743';
  fbAnalyticsApplicationId: string = '567067343352427';
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
  cookieJar = jar(new MemoryCookieStore());
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
