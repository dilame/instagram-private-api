import * as _ from 'lodash';
import * as Chance from 'chance';
import * as Exceptions from './exceptions';
import * as CONSTANTS from './constants/constants';
import * as Helpers from './helpers';
import * as Bluebird from 'bluebird';
import { Device } from './devices/device';
import { Internal } from './v1/internal';
import { StoryTrayFeed } from './v1/feeds/story-tray.feed';
import { TimelineFeed } from './v1/feeds/timeline.feed';
import { Request } from './request';
import { Account } from './v1/account';
import { InboxFeed } from './v1/feeds/inbox.feed';
import { Relationship } from './v1/relationship';
import CookieStorage = require('./v1/cookie-storage');

export class Session {
  private jar: any;

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

  get advertising_id() {
    return this.device.adid;
  }

  get CSRFToken() {
    const cookies = this.jar.getCookies(CONSTANTS.HOST);
    const item = _.find(cookies, { key: 'csrftoken' });
    // @ts-ignore
    return item ? item.value : 'missing';
  }

  static create(device, storage, username, password, proxy) {
    const session = new Session(device, storage);
    if (_.isString(proxy) && !_.isEmpty(proxy)) session.proxyUrl = proxy;
    return session
      .getAccountId()
      .then(
        () =>
          // Disabled for the moment
          // But `loginFlow` should be called every time the user closes an reopen the app.
          //return session.loginFlow()
          //    .then(() => session)
          session,
      )
      .catch(Exceptions.CookieNotValidError, () =>
        // We either not have valid cookes or authentication is not fain!
        Session.login(session, username, password),
      );
  }

  static login(session, username, password) {
    return Bluebird.try(async () => {
      await session.preLoginFlow();
      await new Request(session)
        .setResource('login')
        .setMethod('POST')
        .setData({
          username,
          password,
          guid: session.uuid,
          phone_id: session.phone_id,
          adid: session.adid,
          login_attempt_count: 0,
        })
        .signPayload()
        .send();
      await session.loginFlow();
      return session;
    })
      .catch(Exceptions.CheckpointError, async error => {
        // This situation is not really obvious,
        // but even if you got checkpoint error (aka captcha or phone)
        // verification, it is still an valid session unless `sessionid` missing
        await session.getAccountId().catch(Exceptions.CookieNotValidError, () => {
          throw error;
        });
        return session;
      })
      .catch(error => {
        if (error.name === 'RequestError' && _.isObject(error.json)) {
          if (error.json.invalid_credentials) throw new Exceptions.AuthenticationError(error.message);
          if (error.json.error_type === 'inactive user')
            throw new Exceptions.AccountBanned(`${error.json.message} ${error.json.help_url}`);
        }
        throw error;
      });
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

  getAccount() {
    return this.getAccountId().then(id => Account.getById(this, id));
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
}
