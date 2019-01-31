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
    const that = this;
    return this._cookiesStore.getSessionId().then(() => that._cookiesStore.getAccountId());
  }

  setProxy (url) {
    this.proxyUrl = url;
    return this;
  }

  getAccount () {
    const that = this;
    return that.getAccountId().then(id => Account.getById(that, id));
  }

  destroy () {
    const that = this;
    return new Request(this)
      .setMethod('POST')
      .setResource('logout')
      .generateUUID()
      .send()
      .then(response => {
        that._cookiesStore.destroy();
        delete that._cookiesStore;
        return response;
      });
  }

  static create (device, storage, username, password, proxy) {
    const that = this;
    const session = new Session(device, storage);
    if (_.isString(proxy) && !_.isEmpty(proxy)) session.proxyUrl = proxy;
    return session
      .getAccountId()
      .then(() => // Disabled for the moment
        // But `loginFlow` should be called every time the user closes an reopen the app.
        //return session.loginFlow()
        //    .then(() => session)
        session)
      .catch(Exceptions.CookieNotValidError, () => // We either not have valid cookes or authentication is not fain!
        Session.login(session, username, password));
  }

  loginFlow () {
    // Right now only requests after closing and re-opening the app are made
    // Later we should also include requests made after a full re-login.

    return new Timeline(this)
      .get()
      .then(() => Relationship.getBootstrapUsers(this))
      .then(() => new Story(this).get())
      .then(() => Internal.getRankedRecipients(this, 'reshare'))
      .then(() => Internal.getRankedRecipients(this, 'raven'))
      .then(() => new Inbox(this).get())
      .then(() => Internal.getPresences(this))
      .then(() => Internal.getRecentActivityInbox(this))
      .then(() => Internal.getProfileNotice(this))
      .then(() => Internal.getExploreFeed(this));
  }

  preLoginFlow () {
    // Only on full re-login.
    return Internal.readMsisdnHeader(this)
      .then(() => Internal.qeSync(this, true))
      .then(() => Internal.launcherSync(this, true))
      .then(() => Internal.logAttribution(this))
      .then(() => Internal.fetchZeroRatingToken(this))
      .then(() => Internal.setContactPointPrefill(this))
      .catch(error => {
        throw new Error(error.message);
      });
  }

  static login (session, username, password) {
    return session
      .preLoginFlow()
      .then(() =>
        new Request(session)
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
          .send(),
      )
      .then(() => session.loginFlow())
      .then(() => session)
      .catch(Exceptions.CheckpointError, error => // This situation is not really obvious,
// but even if you got checkpoint error (aka captcha or phone)
// verification, it is still an valid session unless `sessionid` missing
        session
          .getAccountId()
          .then(() => // We got sessionId and accountId, we are good to go
            session)
          .catch(Exceptions.CookieNotValidError, e => {
            throw error;
          }))
      .catch(error => {
        if (error.name === 'RequestError' && _.isObject(error.json)) {
          if (error.json.invalid_credentials)
            throw new Exceptions.AuthenticationError(error.message);
          if (error.json.error_type === 'inactive user')
            throw new Exceptions.AccountBanned(
              `${error.json.message} ${error.json.help_url}`,
            );
        }
        throw error;
      });
  }
}

module.exports = Session;
