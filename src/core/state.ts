import * as _ from 'lodash';
import * as Bluebird from 'bluebird';
import * as Chance from 'chance';
import { jar } from 'request';
import { Cookie, CookieJar, MemoryCookieStore } from 'tough-cookie';
import * as devices from '../samples/devices.json';
import * as builds from '../samples/builds.json';
import * as supportedCapabilities from '../samples/supported-capabilities.json';
import * as Constants from './constants';
import { ChallengeStateResponse, CheckpointResponse } from '../responses';
import { IgCookieNotFoundError, IgNoCheckpointError, IgUserIdNotFoundError } from '../errors';
import { Enumerable } from '../decorators';
import debug from 'debug';

const AUTHORIZATION_TAG: unique symbol = Symbol('authorization-tag');

interface ParsedAuthorization {
  ds_user_id: string;
  sessionid: string;
  should_use_header_over_cookie: string;
  [AUTHORIZATION_TAG]: string;
}

export class State {
  private static stateDebug = debug('ig:state');
  get signatureKey(): string {
    return this.constants.SIGNATURE_KEY;
  }

  get signatureVersion(): string {
    return this.constants.SIGNATURE_VERSION;
  }

  get userBreadcrumbKey(): string {
    return this.constants.BREADCRUMB_KEY;
  }

  get appVersion(): string {
    return this.constants.APP_VERSION;
  }

  get appVersionCode(): string {
    return this.constants.APP_VERSION_CODE;
  }

  get fbAnalyticsApplicationId(): string {
    return this.constants.FACEBOOK_ANALYTICS_APPLICATION_ID;
  }

  get fbOtaFields(): string {
    return this.constants.FACEBOOK_OTA_FIELDS;
  }

  get fbOrcaApplicationId(): string {
    return this.constants.FACEBOOK_ORCA_APPLICATION_ID;
  }

  get loginExperiments(): string {
    return this.constants.LOGIN_EXPERIMENTS;
  }

  get experiments(): string {
    return this.constants.EXPERIMENTS;
  }

  get bloksVersionId(): string {
    return this.constants.BLOKS_VERSION_ID;
  }

  @Enumerable(false)
  constants = Constants;
  supportedCapabilities = supportedCapabilities;
  language: string = 'en_US';
  timezoneOffset: string = String(new Date().getTimezoneOffset() * -60);
  radioType = 'wifi-none';
  capabilitiesHeader = '3brTv10=';
  connectionTypeHeader = 'WIFI';
  isLayoutRTL: boolean = false;
  euDCEnabled?: boolean = undefined;
  adsOptOut: boolean = false;
  thumbnailCacheBustingValue: number = 1000;
  igWWWClaim?: string;
  authorization?: string;
  passwordEncryptionPubKey?: string;
  passwordEncryptionKeyId?: string | number;
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
  @Enumerable(false)
  proxyUrl: string;
  @Enumerable(false)
  cookieStore = new MemoryCookieStore();
  @Enumerable(false)
  cookieJar = jar(this.cookieStore);
  @Enumerable(false)
  checkpoint: CheckpointResponse | null = null;
  @Enumerable(false)
  challenge: ChallengeStateResponse | null = null;
  clientSessionIdLifetime: number = 1200000;
  pigeonSessionIdLifetime: number = 1200000;

  @Enumerable(false)
  parsedAuthorization?: ParsedAuthorization;

  /**
   * The current application session ID.
   *
   * This is a temporary ID which changes in the official app every time the
   * user closes and re-opens the Instagram application or switches account.
   *
   * We will update it once an hour
   */
  public get clientSessionId(): string {
    return this.generateTemporaryGuid('clientSessionId', this.clientSessionIdLifetime);
  }

  public get pigeonSessionId(): string {
    return this.generateTemporaryGuid('pigeonSessionId', this.pigeonSessionIdLifetime);
  }

  public get appUserAgent() {
    return `Instagram ${this.appVersion} Android (${this.deviceString}; ${this.language}; ${this.appVersionCode})`;
  }

  public get webUserAgent() {
    return `Mozilla/5.0 (Linux; Android ${this.devicePayload.android_release}; ${this.devicePayload.model} Build/${this.build}; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 ${this.appUserAgent}`;
  }

  public get devicePayload() {
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

  public get batteryLevel() {
    const chance = new Chance(this.deviceId);
    const percentTime = chance.integer({ min: 200, max: 600 });
    return 100 - (Math.round(Date.now() / 1000 / percentTime) % 100);
  }

  public get isCharging() {
    const chance = new Chance(`${this.deviceId}${Math.round(Date.now() / 10800000)}`);
    return chance.bool();
  }

  public get challengeUrl() {
    if (!this.checkpoint) {
      throw new IgNoCheckpointError();
    }
    return `/api/v1${this.checkpoint.challenge.api_path}`;
  }

  public get cookieCsrfToken() {
    try {
      return this.extractCookieValue('csrftoken');
    } catch {
      State.stateDebug('csrftoken lookup failed, returning "missing".');
      return 'missing';
    }
  }

  public get cookieUserId() {
    const cookie = this.extractCookie('ds_user_id');
    if (cookie !== null) {
      return cookie.value;
    }
    this.updateAuthorization();
    if (!this.parsedAuthorization) {
      State.stateDebug('Could not find ds_user_id');
      throw new IgCookieNotFoundError('ds_user_id');
    }
    return this.parsedAuthorization.ds_user_id;
  }

  public get cookieUsername() {
    return this.extractCookieValue('ds_user');
  }

  public isExperimentEnabled(experiment) {
    return this.experiments.includes(experiment);
  }

  public extractCookie(key: string): Cookie | null {
    const cookies = this.cookieJar.getCookies(this.constants.HOST);
    return _.find(cookies, { key }) || null;
  }

  public extractCookieValue(key: string): string {
    const cookie = this.extractCookie(key);
    if (cookie === null) {
      State.stateDebug(`Could not find ${key}`);
      throw new IgCookieNotFoundError(key);
    }
    return cookie.value;
  }

  public extractUserId(): string {
    try {
      return this.cookieUserId;
    } catch (e) {
      if (this.challenge === null || !this.challenge.user_id) {
        throw new IgUserIdNotFoundError();
      }
      return String(this.challenge.user_id);
    }
  }

  public async deserializeCookieJar(cookies: string | CookieJar.Serialized) {
    this.cookieJar['_jar'] = await Bluebird.fromCallback(cb => CookieJar.deserialize(cookies, this.cookieStore, cb));
  }

  public async serializeCookieJar(): Promise<CookieJar.Serialized> {
    return Bluebird.fromCallback(cb => this.cookieJar['_jar'].serialize(cb));
  }

  public async serialize(): Promise<{ constants; cookies } & any> {
    const obj = {
      constants: this.constants,
      cookies: JSON.stringify(await this.serializeCookieJar()),
    };
    for (const [key, value] of Object.entries(this)) {
      obj[key] = value;
    }
    return obj;
  }

  public async deserialize(state: string | any): Promise<void> {
    State.stateDebug(`Deserializing state of type ${typeof state}`);
    const obj = typeof state === 'string' ? JSON.parse(state) : state;
    if (typeof obj !== 'object') {
      State.stateDebug(`State deserialization failed, obj is of type ${typeof obj} (object expected)`);
      throw new TypeError("State isn't an object or serialized JSON");
    }
    State.stateDebug(`Deserializing ${Object.keys(obj).join(', ')}`);
    if (obj.constants) {
      this.constants = obj.constants;
      delete obj.constants;
    }
    if (obj.cookies) {
      await this.deserializeCookieJar(obj.cookies);
      delete obj.cookies;
    }
    for (const [key, value] of Object.entries(obj)) {
      this[key] = value;
    }
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

  private generateTemporaryGuid(seed: string, lifetime: number) {
    return new Chance(`${seed}${this.deviceId}${Math.round(Date.now() / lifetime)}`).guid();
  }

  private hasValidAuthorization() {
    return this.parsedAuthorization && this.parsedAuthorization[AUTHORIZATION_TAG] === this.authorization;
  }

  private updateAuthorization() {
    if (!this.hasValidAuthorization()) {
      if (this.authorization?.startsWith('Bearer IGT:2:')) {
        try {
          this.parsedAuthorization = {
            ...JSON.parse(Buffer.from(this.authorization.substring('Bearer IGT:2:'.length), 'base64').toString()),
            [AUTHORIZATION_TAG]: this.authorization,
          };
        } catch (e) {
          State.stateDebug(`Could not parse authorization: ${e}`);
          this.parsedAuthorization = undefined;
        }
      } else {
        this.parsedAuthorization = undefined;
      }
    }
  }
}
