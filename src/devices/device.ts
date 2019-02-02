import * as Chance from 'chance';
import * as devices from './devices.json';
import * as builds from './builds.json';
import * as CONSTANTS from '../constants/constants';
import * as _ from 'lodash';
import { IDevicePayload } from './device.interface';

export class Device {
  static appUserAgentTemplate = _.template('Instagram <%= version %> Android (<%= agent %>)');
  static webUserAgentTemplate = _.template(
    'Mozilla/5.0 (Linux; Android <%= release %>; <%= model %> Build/<%= build %>; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 <%= instagramAgent %>',
  );
  deviceString: string;
  android_version: string;
  android_release: string;
  model: string;
  build: string;
  md5: string;
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
  id: string;
  private payload: IDevicePayload;

  constructor(public username: string, public language = 'en_US') {
    const chance = new Chance(username);
    this.deviceString = chance.pickone(devices);
    const id = chance.string({
      pool: 'abcdefghijklmnopqrstuvwxyz0123456789',
      length: 16,
    });
    this.id = `android-${id}`;
    this.uuid = chance.guid();
    this.phoneId = chance.guid();
    this.adid = chance.guid();
    const deviceParts = this.deviceString.split(';');
    const [android_version, android_release] = deviceParts[0].split('/');
    const [manufacturer] = deviceParts[3].split('/');
    const model = deviceParts[4];

    this.payload = {
      android_version,
      android_release,
      manufacturer,
      model,
    };
    this.android_version = android_version;
    this.android_release = android_release;
    this.build = chance.pickone(builds);
    this.model = model;
    // md5 emulation for backward-compatibility. Will be removed later
    this.md5 = chance.string({
      pool: 'abcdefghijklmnopqrstuvwxyz0123456789',
      length: 32,
    });
  }

  userAgent(version: string): string {
    return Device.appUserAgentTemplate({
      agent: [this.deviceString, this.language, CONSTANTS.PRIVATE_KEY.VERSION_CODE].join('; '),
      version: version || CONSTANTS.PRIVATE_KEY.APP_VERSION,
    });
  }

  userAgentWeb(version: string): string {
    return Device.webUserAgentTemplate({
      instagramAgent: this.userAgent(version),
      release: this.android_release,
      model: this.model,
      build: this.build,
    });
  }
}
