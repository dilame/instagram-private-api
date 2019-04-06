import { IgApiClient } from '../client';
import { AccountFollowersFeed } from './account-followers.feed';
import { AccountFollowingFeed } from './account-following.feed';

export class FeedFactory {
  constructor(private client: IgApiClient) {}
  public accountFollowersFeed(id: string | number): AccountFollowersFeed {
    const feed = new AccountFollowersFeed(this.client);
    feed.id = id;
    return feed;
  }
  public accountFollowingFeed(id: string | number): AccountFollowingFeed {
    const feed = new AccountFollowingFeed(this.client);
    feed.id = id;
    return feed;
  }
}
