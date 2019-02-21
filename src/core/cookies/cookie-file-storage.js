import { CookieStorage } from './cookie-storage';

const FileCookieStore = require('tough-cookie-file-store');
const touch = require('touch');
const path = require('path');
const fs = require('fs');
const CONSTANTS = require('../../constants/constants');

export class CookieFileStorage extends CookieStorage {
  constructor (cookiePath) {
    cookiePath = path.resolve(cookiePath);
    CookieFileStorage.ensureExistenceOfJSONFilePath(cookiePath);
    const store = new FileCookieStore(cookiePath);
    store.__proto__.getAllCookies = cb => {
      store.findCookies(CONSTANTS.HOSTNAME, '/', (err, cookies) => {
        cookies.sort((a, b) => (a.creationIndex || 0) - (b.creationIndex || 0));
        cb(null, cookies);
      });
    };
    super(store);
  }

  destroy () {
    fs.unlinkSync(this.storage.filePath);
  }

  static ensureExistenceOfJSONFilePath(path){
    try {
      touch.sync(path);
      JSON.parse(fs.readFileSync(path));
    } catch (e) {
      fs.unlinkSync(path);
    }
    touch.sync(path);
  }
}
