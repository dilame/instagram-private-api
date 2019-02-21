import * as Bluebird from 'bluebird';
import { TLD } from '../../constants/constants';
import * as _ from 'lodash';
import { CookieNotValidError } from '../exceptions';
import { Store, Cookie } from 'tough-cookie';

export class CookieStorage {
  constructor(public storage: Store) {
  }

  get store () {
    return this.storage;
  }

  getCookieValue(name): Bluebird<Cookie> {
    return new Bluebird((resolve, reject) => {
      this.storage.findCookie(TLD, '/', name, (err, cookie) => {
        if (err) return reject(err);
        if (!_.isObject(cookie)) return reject(new CookieNotValidError(name));
        resolve(cookie);
      });
    });
  }

  putCookie (cookie) {
    return Bluebird.fromCallback(cb => this.storage.putCookie(cookie, cb));
  }

  getCookies () {
    return new Bluebird((resolve, reject) => {
      this.storage.findCookies(TLD, '/', (err, cookies) => {
        if (err) return reject(err);
        resolve(cookies || []);
      });
    });
  }

  getAccountId (): Bluebird<number> {
    return this.getCookieValue('ds_user_id').then(cookie => {
      const id = parseInt(cookie.value);
      if (_.isNumber(id) && !_.isNaN(id)) {
        return id;
      } else {
        throw new CookieNotValidError('ds_user_id');
      }
    });
  }

  getSessionId () {
    const currentTime = new Date().getTime();
    return this.getCookieValue('sessionid').then(cookie => {
      const acceptable = cookie.expires instanceof Date && cookie.expires.getTime() > currentTime;
      if (acceptable) return cookie.value;
      throw new CookieNotValidError('sessionid');
    });
  }

  removeCheckpointStep () {
    return new Bluebird((resolve, reject) => {
      this.storage.removeCookie(TLD, '/', 'checkpoint_step', err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  destroy () {
    throw new Error('Method destroy is not implemented');
  }
}
