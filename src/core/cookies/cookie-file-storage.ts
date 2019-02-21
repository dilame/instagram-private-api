import { CookieStorage } from './cookie-storage';
import { HOSTNAME } from '../../constants/constants';

const FileCookieStore = require('tough-cookie-file-store');
const touch = require('touch');
const path = require('path');
const fs = require('fs');

export class CookieFileStorage extends CookieStorage {
  constructor (cookiePath) {
    cookiePath = path.resolve(cookiePath);
    CookieFileStorage.ensureExistenceOfJSONFilePath(cookiePath);
    const store = new FileCookieStore(cookiePath);
    store.__proto__.getAllCookies = cb => {
      store.findCookies(HOSTNAME, '/', (err, cookies) => {
        cookies.sort((a, b) => (a.creationIndex || 0) - (b.creationIndex || 0));
        cb(null, cookies);
      });
    };
    super(store);
  }

  destroy () {
    // @ts-ignore
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
