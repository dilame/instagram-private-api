import { IgApiClient } from './client';
import {
  AccountFollowersFeed,
  AccountFollowingFeed,
  DirectInboxFeed,
  DirectThreadFeed,
  LocationFeed,
  MediaCommentsFeed,
  TagFeed,
  TimelineFeed,
  UserFeed,
  SavedMediaFeed,
} from '../feeds';
import { DirectInboxFeedResponseThreadsItem } from '../responses';
import { TimelineFeedReason } from '../types/timeline-feed.types';

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
  public directThread(
    options: Pick<DirectInboxFeedResponseThreadsItem, 'thread_id' | 'oldest_cursor'>,
    seqId?: number,
  ): DirectThreadFeed {
    const feed = new DirectThreadFeed(this.client);
    feed.id = options.thread_id;
    feed.cursor = options.oldest_cursor;
    feed.seqId = seqId;
    return feed;
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

  public timeline(reason?: TimelineFeedReason): TimelineFeed {
    const feed = new TimelineFeed(this.client);
    if (reason) {
      feed.reason = reason;
    }
    return feed;
  }
  public saved(): SavedMediaFeed {
    return new SavedMediaFeed(this.client);
  }
}
