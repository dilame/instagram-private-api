import * as _ from 'lodash';
import * as Chance from 'chance';
import * as CONSTANTS from '../constants/constants';
import { Helpers } from '../helpers';
import * as Bluebird from 'bluebird';
import { Device } from './devices/device';
import { Internal } from '../v1/internal';
import { InboxFeed, StoryTrayFeed, TimelineFeed } from '../feeds';
import { Request } from './request';
import { Account } from '../v1/account';
import { Relationship } from '../v1/relationship';
import { CookieStorage } from './cookies';
import { CookieJar } from 'tough-cookie';
import {
  AccountBannedError,
  AuthenticationError,
  CheckpointError,
  CookieNotValidError,
  RequestError,
} from './exceptions';

export class Session {
  private jar: any;
  public loginAttemptCount = 0;
  constructor(public device: Device, public cookieStore: CookieStorage, proxy?: string) {
    this.jar = Request.jar(cookieStore.store);
    if (_.isString(proxy) && !_.isEmpty(proxy)) this.proxyUrl = proxy;
  }

  private _proxyUrl: string;

  get proxyUrl() {
    return this._proxyUrl;
  }

  set proxyUrl(val) {
    if (!Helpers.isValidUrl(val) && val !== null) throw new Error('`proxyUrl` argument is not an valid url');
    this._proxyUrl = val;
  }

  /**
   * The current application session ID.
   *
   * This is a temporary ID which changes in the official app every time the
   * user closes and re-opens the Instagram application or switches account.
   *
   * We will update it once an hour
   */
  get session_id(): string {
    const chance = new Chance(`${this.device.username}${Math.round(Date.now() / 3600000)}`);
    return chance.guid();
  }

  get uuid() {
    return this.device.uuid;
  }

  get phone_id() {
    return this.device.phoneId;
  }

  get device_id() {
    return this.device.id;
  }

  get advertising_id() {
    return this.device.adid;
  }

  get CSRFToken() {
    const cookies = this.jar.getCookies(CONSTANTS.HOST);
    const item = _.find(cookies, { key: 'csrftoken' });
    // @ts-ignore
    return item ? item.value : 'missing';
  }

  /**
   *  @deprecated Use Session instance methods for login instead of static
   */
  static create(device: Device, storage: CookieStorage, username: string, password: string, proxy?: string): Bluebird<Session> {
    const session = new Session(device, storage);
    if (!_.isEmpty(proxy)) session.proxyUrl = proxy;
    return session.getAccountId()
      .then(() => session)
      // We either not have valid cookes or authentication is not fain!
      .catch(CookieNotValidError, () => Session.login(session, username, password));
  }
  /**
   *  @deprecated Use Session instance methods for login instead of static
   */
  static login(session: Session, username: string, password: string): Bluebird<Session> {
    return Bluebird.try(async () => {
      await session.preLoginFlow();
      await session.login(username, password);
      // Call login flow after returning the result
      _.defer(async () => await session.loginFlow());
      return session;
    })
  }

  setDevice(device: Device) {
    this.device = device;
    return this;
  }

  getAccountId() {
    return this.cookieStore.getAccountId();
  }

  setProxy(url) {
    this.proxyUrl = url;
    return this;
  }

  async getAccount() {
    const accountId = await this.getAccountId();
    return Account.getById(this, accountId);
  }

  destroy() {
    return new Request(this)
      .setMethod('POST')
      .setResource('logout')
      .generateUUID()
      .send()
      .then(response => {
        this.cookieStore.destroy();
        delete this.cookieStore;
        return response;
      });
  }

  login(username, password) {
    return new Request(this)
      .setResource('login')
      .setMethod('POST')
      .setData({
        username,
        password,
        guid: this.uuid,
        phone_id: this.phone_id,
        device_id: this.device_id,
        adid: this.advertising_id,
        google_tokens: '[]',
        login_attempt_count: this.loginAttemptCount++,
      })
      .signPayload()
      .send()
      .tap(() => this.loginAttemptCount = 0)
      .catch(CheckpointError, async error => {
        // This situation is not really obvious,
        // but even if you got checkpoint error (aka captcha or phone)
        // verification, it is still an valid session unless `sessionid` missing
        await this.getAccountId()
          .catch(CookieNotValidError, () => {
            throw error;
          });
        return this;
      })
      .catch(RequestError, error => {
        if (_.isObject(error.json)) {
          if (error.json.invalid_credentials) throw new AuthenticationError(error.message);
          if (error.json.error_type === 'inactive user')
            throw new AccountBannedError(`${error.json.message} ${error.json.help_url}`);
        }
        throw error;
      });
  }

  loginFlow(concurrency = 1) {
    // Right now only requests after closing and re-opening the app are made
    // Later we should also include requests made after a full re-login.
    return Bluebird.map(
      [
        new TimelineFeed(this).get({}),
        new StoryTrayFeed(this).get(),
        new InboxFeed(this).get(),
        Relationship.getBootstrapUsers(this),
        Internal.getRankedRecipients(this, 'reshare'),
        Internal.getPresences(this),
        Internal.getRecentActivityInbox(this),
        Internal.getProfileNotice(this),
        Internal.getExploreFeed(this),
      ],
      () => true,
      { concurrency },
    );
  }

  preLoginFlow(concurrency = 1) {
    // Only on full re-login.
    return Bluebird.map(
      [
        Internal.qeSync(this, true),
        Internal.readMsisdnHeader(this),
        Internal.launcherSync(this, true),
        Internal.logAttribution(this),
        Internal.fetchZeroRatingToken(this),
        Internal.setContactPointPrefill(this),
      ],
      () => true,
      { concurrency },
    ).catch(error => {
      throw new Error(error.message);
    });
  }

  serializeCookies(): Bluebird<string> {
    return Bluebird.fromCallback(cb => this.jar._jar.serialize(cb));
  }

  async deserializeCookies(cookies: string) {
    this.jar._jar = await Bluebird.fromCallback(cb => CookieJar.deserialize(cookies, this.cookieStore.store, cb))
  }
}
