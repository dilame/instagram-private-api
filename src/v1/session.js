import * as _ from 'lodash';
import * as CookieStorage from './cookie-storage';
import * as CONSTANTS from './constants';
import * as Account from './account';
import * as Exceptions from './exceptions';
import * as Request from '../request';
import * as Internal from './internal';
import * as Timeline from './feeds/timeline-feed';
import * as Inbox from './feeds/inbox';
import * as Relationship from './relationship';
import * as Story from './feeds/story-tray';
import * as Helpers from '../helpers';
import * as Promise from 'bluebird';

class Session {
  constructor (device, storage, proxy) {
    this.setDevice(device);
    this.setCookiesStorage(storage);
    if (_.isString(proxy) && !_.isEmpty(proxy)) this.proxyUrl = proxy;

    this._uuid = Helpers.generateUUID();
    this._phone_id = Helpers.generateUUID();
    this._adid = Helpers.generateUUID();
    this._id = Helpers.generateUUID();
  }

  get jar () {
    return this._jar;
  }

  set jar (val) {}

  get cookieStore () {
    return this._cookiesStore;
  }

  set cookieStore (val) {}

  get device () {
    return this._device;
  }

  set device (val) {}

  get uuid () {
    return this._uuid;
  }

  set uuid (val) {}

  get phone_id () {
    return this._phone_id;
  }

  set phone_id (val) {}

  get advertising_id () {
    return this._adid;
  }

  set advertising_id (val) {}

  get session_id () {
    return this._id;
  }

  set session_id (val) {}

  get CSRFToken () {
    const cookies = this.jar.getCookies(CONSTANTS.HOST);
    const item = _.find(cookies, { key: 'csrftoken' });
    return item ? item.value : 'missing';
  }

  set CSRFToken (val) {}

  get proxyUrl () {
    return this._proxyUrl;
  }

  set proxyUrl (val) {
    if (!Helpers.isValidUrl(val) && val !== null)
      throw new Error('`proxyUrl` argument is not an valid url');
    this._proxyUrl = val;
  }

  setCookiesStorage (storage) {
    if (!(storage instanceof CookieStorage))
      throw new Error('`storage` is not an valid instance of `CookieStorage`');
    this._cookiesStore = storage;
    this._jar = Request.jar(storage.store);
    return this;
  }

  setDevice (device) {
    this._device = device;
    return this;
  }

  getAccountId () {
    return this._cookiesStore
      .getSessionId()
      .then(() => this._cookiesStore.getAccountId());
  }

  setProxy (url) {
    this.proxyUrl = url;
    return this;
  }

  getAccount () {
    return this.getAccountId().then(id => Account.getById(this, id));
  }

  destroy () {
    return new Request(this)
      .setMethod('POST')
      .setResource('logout')
      .generateUUID()
      .send()
      .then(response => {
        this._cookiesStore.destroy();
        delete this._cookiesStore;
        return response;
      });
  }

  static create (device, storage, username, password, proxy) {
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

  loginFlow () {
    // Right now only requests after closing and re-opening the app are made
    // Later we should also include requests made after a full re-login.
    return Promise.all([
      new Timeline(this).get(),
      new Story(this).get(),
      new Inbox(this).get(),
      Relationship.getBootstrapUsers(this),
      Internal.getRankedRecipients(this, 'reshare'),
      Internal.getPresences(this),
      Internal.getRecentActivityInbox(this),
      Internal.getProfileNotice(this),
      Internal.getExploreFeed(this)
    ]);
  }

  preLoginFlow () {
    // Only on full re-login.
    return Promise.all([
      Internal.qeSync(this, true),
      Internal.launcherSync(this, true),
      Internal.logAttribution(this),
      Internal.fetchZeroRatingToken(this),
      Internal.setContactPointPrefill(this)
    ]).catch(error => {
      throw new Error(error.message);
    });
  }

  static login (session, username, password) {
    return Promise.try(async () => {
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
          await session.getAccountId()
            .catch(Exceptions.CookieNotValidError, () => {
              throw error;
            });
          return session
        },
      )
      .catch(error => {
        if (error.name === 'RequestError' && _.isObject(error.json)) {
          if (error.json.invalid_credentials)
            throw new Exceptions.AuthenticationError(error.message);
          if (error.json.error_type === 'inactive user')
            throw new Exceptions.AccountBanned(`${error.json.message} ${error.json.help_url}`);
        }
        throw error;
      });
  }
}

module.exports = Session;
