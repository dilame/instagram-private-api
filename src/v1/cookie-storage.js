const Promise = require('bluebird');
const CONSTANTS = require('../constants/constants');
const _ = require('lodash');
const Exceptions = require('../exceptions');

class CookieStorage {
  constructor (cookieStorage) {
    this.storage = cookieStorage;
  }

  get store () {
    return this.storage;
  }

  set store (val) {}

  getCookieValue (name) {
    return new Promise((resolve, reject) => {
      this.storage.findCookie(CONSTANTS.TLD, '/', name, (err, cookie) => {
        if (err) return reject(err);
        if (!_.isObject(cookie)) return reject(new Exceptions.CookieNotValidError(name));
        resolve(cookie);
      });
    });
  }

  putCookie (cookie) {
    return new Promise((resolve, reject) => {
      this.storage.putCookie(cookie, resolve);
    });
  }

  getCookies () {
    return new Promise((resolve, reject) => {
      this.storage.findCookies(CONSTANTS.TLD, '/', (err, cookies) => {
        if (err) return reject(err);
        resolve(cookies || []);
      });
    });
  }

  getAccountId () {
    return this.getCookieValue('ds_user_id').then(cookie => {
      const id = parseInt(cookie.value);
      if (_.isNumber(id) && !_.isNaN(id)) {
        return id;
      } else {
        throw new Exceptions.CookieNotValidError('ds_user_id');
      }
    });
  }

  getSessionId () {
    const currentTime = new Date().getTime();
    return this.getCookieValue('sessionid').then(cookie => {
      const acceptable = cookie.expires instanceof Date && cookie.expires.getTime() > currentTime;
      if (acceptable) return cookie.value;
      throw new Exceptions.CookieNotValidError('sessionid');
    });
  }

  removeCheckpointStep () {
    return new Promise((resolve, reject) => {
      this.storage.removeCookie(CONSTANTS.TLD, '/', 'checkpoint_step', err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  destroy () {
    throw new Error('Method destroy is not implemented');
  }
}

module.exports = CookieStorage;
