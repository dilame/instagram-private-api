const MemoryCookieStore = require('tough-cookie/lib/memstore.js').MemoryCookieStore;
const CookieStorage = require('./cookie-storage');

class CookieMemoryStorage extends CookieStorage {
  constructor () {
    super(new MemoryCookieStore());
  }

  destroy () {}
}

module.exports = CookieMemoryStorage;
