// THIS CLASS IS DEPRECATED AND WILL BE REMOVED IN NEXT MAJOR VERSION
// Please, use require('instagram-private-api').Device instead

const CONSTANTS = require('./constants');
const _ = require('lodash');
const md5 = require('js-md5');

// Thanks to @mgp25 for such a list
const devices = require('./devices.json');

class Device {
  constructor(username) {
    if (!_.isString(username))
      throw new Error(
        '`Device` class needs username to be able generate correlated phone_id seed!',
      );
    this.username = username;
  }

  get id() {
    return `android-${this.md5.slice(0, 16)}`;
  }

  get md5() {
    return md5(this.username);
  }

  // Useful for getting device from csv based on line number
  get md5int() {
    if (!this._md5int) this._md5int = parseInt(parseInt(this.md5, 32) / 10e32);
    return this._md5int;
  }

  get api() {
    if (!this._api) {
      this._api = 15 + (this.md5int % 10);
      if (this._api > 19) this._api++; // ignore api 19
    }
    return this._api;
  }

  set api(api) {
    this._api = api;
  }

  get release() {
    if (!this._release)
      this._release = [
        '4.0.4',
        '4.1.2',
        '4.2.2',
        '4.3.1',
        '4.4.4',
        '5.0.1',
        '5.1.1',
        '6.0.1',
        '7.0',
        '7.1.2',
      ][this.md5int % 10];
    return this._release;
  }

  set release(release) {
    this._release = release;
  }

  get build() {
    if (!this._build)
      this._build = [
        'IMM76L',
        'JZO54K',
        'JDQ39',
        'JLS36I',
        'KTU84P',
        'LRX22C',
        'LMY48M',
        'MMB29V',
        'NRD91N',
        'N2G48C',
      ][this.md5int % 10];
    return this._build;
  }

  set build(build) {
    this._build = build;
  }

  get info() {
    if (this._info) return this._info;
    const line = devices[this.md5int % devices.length];
    const info = {
      manufacturer: line[0],
      device: line[1],
      model: line[2],
    };
    this._info = info;
    return info;
  }

  set info(info) {
    this._info = info;
  }

  get payload() {
    const payload = {};
    payload.manufacturer = this.info.manufacturer;
    payload.model = this.info.model;
    payload.android_version = this.api;
    payload.android_release = this.release;
    return payload;
  }

  get dpi() {
    if (!this._dpi)
      this._dpi = ['801', '577', '576', '538', '515', '424', '401', '373'][
        this.md5int % 8
      ];
    return this._dpi;
  }

  set dpi(set) {
    return (this._dpi = set);
  }

  get resolution() {
    if (!this._resolution)
      this._resolution = [
        '3840x2160',
        '1440x2560',
        '2560x1440',
        '1440x2560',
        '2560x1440',
        '1080x1920',
        '1080x1920',
        '1080x1920',
      ][this.md5int % 8];
    return this._resolution;
  }

  set resolution(resolution) {
    return (this._resolution = resolution);
  }

  get language() {
    if (!this._language) this._language = 'en_US';
    return this._language;
  }

  set language(lang) {
    return (this._language = lang);
  }

  userAgent(version) {
    const agent = [
      `${this.api}/${this.release}`,
      `${this.dpi}dpi`,
      this.resolution,
      this.info.manufacturer,
      this.info.model,
      this.info.device,
      this.language,
    ];
    return CONSTANTS.instagramAgentTemplate({
      agent: agent.join('; '),
      version: version || CONSTANTS.PRIVATE_KEY.APP_VERSION,
    });
  }

  userAgentWeb(version) {
    return CONSTANTS.instagramAgentWebTemplate({
      instagramAgent: this.userAgent(),
      release: this.release,
      model: this.info.model,
      build: this.build,
    });
  }
}

module.exports = Device;
