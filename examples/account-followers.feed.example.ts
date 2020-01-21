/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '@igpapi/android';

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.qe.syncLoginExperiments();
  const auth = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  const followersFeed = ig.feed.accountFollowers(auth.pk);
  for await (let { items } of followersFeed) {
    console.log(items);
  }
})();
