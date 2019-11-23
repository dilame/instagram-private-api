import 'dotenv/config';
import { IgApiClient } from '../src';

function fakeSave(data: string) {
  // here you would save it to a file/database etc.
  return data;
}

function fakeExists() {
  // here you would check if the data exists
  return false;
}

function fakeLoad() {
  // here you would load the data
  return '';
}

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  // This function executes after every request
  ig.request.end$.subscribe(async () => {
    fakeSave(await ig.state.exportState(/*here you can pass true if you want to also save the version*/));
  });
  if (fakeExists()) {
    await ig.state.importState(fakeLoad());
  }
  // This call will provoke request.$end stream
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
})();
