import 'dotenv/config';
import { IgApiClient } from '../src';
import { readFileSync } from 'fs';

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  const inboxFeed = ig.feed.directInbox();
  const threads = await inboxFeed.items();
  const thread = ig.entity.directThread(threads[0].thread_id);
  await thread.broadcastPhoto({
    file: readFileSync('./tools/images/original.jpg'),
  });
})();
