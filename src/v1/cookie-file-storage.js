const FileCookieStore = require('tough-cookie-file-store');
const path = require('path');
const fs = require('fs');
const Helpers = require('../helpers');
const CookieStorage = require('./cookie-storage');
const CONSTANTS = require('../constants/constants');

class CookieFileStorage extends CookieStorage {
  constructor (cookiePath) {
    cookiePath = path.resolve(cookiePath);
    Helpers.ensureExistenceOfJSONFilePath(cookiePath);
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
}

module.exports = CookieFileStorage;
