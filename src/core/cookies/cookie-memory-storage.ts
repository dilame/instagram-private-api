import { MemoryCookieStore } from 'tough-cookie/lib/memstore';
import { CookieStorage } from './cookie-storage';

export class CookieMemoryStorage extends CookieStorage {
  constructor () {
    super(new MemoryCookieStore());
  }

  destroy () {}
}
