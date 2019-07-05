/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  const auth = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  console.log(JSON.stringify(auth));

  const targetUser = await ig.user.searchExact('username'); // getting exact user by login
  const reelsFeed = ig.feed.reelsMedia({ // working with reels media feed (stories feed)
    userIds: [targetUser.pk], // you can specify multiple user id's, "pk" param is user id
  });
  const storyItems = await reelsFeed.items(); // getting reels, see "account-followers.feed.example.ts" if you want to know how to work with feeds
  if (storyItems.length === 0) {// we can check items length and find out if the user does have any story to watch
    console.log(`${targetUser.username}'s story is empty`);
    return;
  }
  const seenResult = await ig.story.seen([storyItems[0]]);
  // now we can mark story as seen using story-service, you can specify multiple stories, in this case we are only watching the first story

  console.log(seenResult.status); // seenResult.status should be "ok"
})();
