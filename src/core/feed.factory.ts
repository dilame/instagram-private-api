import { IgApiClient } from './client';
import { AccountFollowersFeed } from '../feeds';
import { AccountFollowingFeed } from '../feeds';
import { DirectInboxFeed } from '../feeds';
import { UserFeed } from '../feeds';
import { TagFeed } from '../feeds';
import { LocationFeed } from '../feeds';
import { MediaCommentsFeed } from '../feeds';

export class FeedFactory {
  constructor(private client: IgApiClient) {}
  public accountFollowers(id: string | number): AccountFollowersFeed {
    const feed = new AccountFollowersFeed(this.client);
    feed.id = id;
    return feed;
  }
  public accountFollowing(id: string | number): AccountFollowingFeed {
    const feed = new AccountFollowingFeed(this.client);
    feed.id = id;
    return feed;
  }
  public directInbox(): DirectInboxFeed {
    return new DirectInboxFeed(this.client);
  }
  public user(id: string | number): UserFeed {
    const feed = new UserFeed(this.client);
    feed.id = id;
    return feed;
  }
  public tag(tag: string): TagFeed {
    const feed = new TagFeed(this.client);
    feed.tag = tag;
    return feed;
  }
  public location(id: string | number, tab: 'recent' | 'ranked' = 'ranked'): LocationFeed {
    const feed = new LocationFeed(this.client);
    feed.id = id;
    feed.tab = tab;
    return feed;
  }
  public mediaComments(id: string): MediaCommentsFeed {
    const feed = new MediaCommentsFeed(this.client);
    feed.id = id;
    return feed;
  }
}
