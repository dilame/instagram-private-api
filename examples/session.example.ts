import 'dotenv/config';
import { IgApiClient } from '../src';

function fakeSave(cookies: string) {
  return cookies;
}

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  // This function executes after every request
  ig.request.end$.subscribe(async () => {
    // Here you have JSON object with cookies.
    // You could stringify it and save to any persistent storage
    // In addition you should save device data. Explore it in core/state.ts
    const cookies = await ig.state.serializeCookieJar();
    fakeSave(JSON.stringify(cookies));
    // In order to restore session cookies you need this
    await ig.state.deserializeCookieJar(JSON.stringify(cookies));
  });
  // This call will provoke request.$end stream
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
})();
