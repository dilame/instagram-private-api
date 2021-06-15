/* tslint:disable:no-console */
/*
  This is an example of unfollowing users who aren't following you back.
  Thanks to the developers for this great package.
 */
import 'dotenv/config';
import { IgApiClient, Feed } from '../src';

const ig = new IgApiClient();

ig.state.generateDevice(process.env.IG_USERNAME);

(async () => {
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);

  const followersFeed = ig.feed.accountFollowers(ig.state.cookieUserId);
  const followingFeed = ig.feed.accountFollowing(ig.state.cookieUserId);

  const followers = await getAllItemsFromFeed(followersFeed);
  const following = await getAllItemsFromFeed(followingFeed);
  // Making a new map of users username that follow you.
  const followersUsername = new Set(followers.map(({ username }) => username));
  // Filtering through the ones who aren't following you.
  const notFollowingYou = following.filter(({ username }) => !followersUsername.has(username));
  // Looping through and unfollowing each user
  for (const user of notFollowingYou) {
    await ig.friendship.destroy(user.pk);
    console.log(`unfollowed ${user.username}`);
    /*
        Time, is the delay which is between 1 second and 7 seconds.
        Creating a promise to stop the loop to avoid api spam
     */
    const time = Math.round(Math.random() * 6000) + 1000;
    await new Promise(resolve => setTimeout(resolve, time));
  }
})();

/**
 * Source: https://github.com/dilame/instagram-private-api/issues/969#issuecomment-551436680
 * @param feed
 * @returns All items from the feed
 */

async function getAllItemsFromFeed<T>(feed: Feed<any, T>): Promise<T[]> {
  let items = [];
  do {
    items = items.concat(await feed.items());
  } while (feed.isMoreAvailable());
  return items;
}
