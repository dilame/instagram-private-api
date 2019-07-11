import { IgApiClient } from '../src';

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  const inboxFeed = ig.feed.directInbox(10);
  do {
    let threads = await inboxFeed.items();
    threads.forEach(element => {
      console.log(element['users'][0]['username']);
    });
  } while (inboxFeed.moreAvailable);
})();
