import * as Chance from 'chance';
import * as devices from './devices.json';
import * as builds from './builds.json';
import * as CONSTANTS from '../v1/constants';
import * as _ from 'lodash';
import { IDevicePayload, IDeviceProps } from './device.interface';

export class Device {
  username: string;
  deviceString: string;
  android_version: string;
  android_release: string;
  model: string;
  build: string;
  chance: any;
  md5: string;
  appUserAgentTemplate = _.template(
    'Instagram <%= version %> Android (<%= agent %>)',
  );
  webUserAgentTemplate = _.template(
    'Mozilla/5.0 (Linux; Android <%= release %>; <%= model %> Build/<%= build %>; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 <%= instagramAgent %>',
  );
  id: string;
  private payload: IDevicePayload;

  constructor(props: IDeviceProps) {
    this.username = props.username;
    const chance = new Chance(this.username);
    this.chance = chance;
    this.deviceString = chance.pickone(devices);
    const id = chance.string({
      pool: 'abcdefghijklmnopqrstuvwxyz0123456789',
      length: 16,
    });
    this.id = `android-${id}`;

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

  _language = 'en_US';

  get language() {
    return this._language;
  }

  set language(v: string) {
    this._language = v;
  }

  userAgent(version: string): string {
    return this.appUserAgentTemplate({
      agent: [
        this.deviceString,
        this.language,
        CONSTANTS.PRIVATE_KEY.VERSION_CODE,
      ].join('; '),
      version: version || CONSTANTS.PRIVATE_KEY.APP_VERSION,
    });
  }

  userAgentWeb(version: string): string {
    return this.webUserAgentTemplate({
      instagramAgent: this.userAgent(version),
      release: this.android_release,
      model: this.model,
      build: this.build,
    });
  }
}
