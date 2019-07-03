import 'dotenv/config';
import { IgApiClient } from '../src';

function fakeSave(cookies: string, state) {
  return {
    cookies,
    state,
  };
}

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  // This function executes after every request
  ig.request.end$.subscribe(async () => {
    // Here you have JSON object with cookies.
    // You could stringify it and save to any persistent storage
    const cookies = await ig.state.serializeCookieJar();
    const state = {
      deviceString: ig.state.deviceString,
      deviceId: ig.state.deviceId,
      uuid: ig.state.uuid,
      phoneId: ig.state.phoneId,
      adid: ig.state.adid,
      build: ig.state.build,
    };
    fakeSave(JSON.stringify(cookies), state);
    // In order to restore session cookies you need this
    await ig.state.deserializeCookieJar(JSON.stringify(cookies));
    ig.state.deviceString = state.deviceString;
    ig.state.deviceId = state.deviceId;
    ig.state.uuid = state.uuid;
    ig.state.phoneId = state.phoneId;
    ig.state.adid = state.adid;
    ig.state.build = state.build;
  });
  // This call will provoke request.$end stream
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
})();
