import { IgApiClient } from './client';
import {
  AccountFollowersFeed,
  AccountFollowingFeed,
  BlockedUsersFeed,
  DirectInboxFeed,
  DirectPendingInboxFeed,
  DirectThreadFeed,
  DiscoverFeed,
  PostsInsightsFeed,
  LocationFeed,
  MediaCommentsFeed,
  MusicGenreFeed,
  MusicMoodFeed,
  MusicSearchFeed,
  MusicTrendingFeed,
  NewsFeed,
  PendingFriendshipsFeed,
  ReelsMediaFeed,
  ReelsTrayFeed,
  SavedFeed,
  StoriesInsightsFeed,
  TagFeed,
  TagsFeed,
  TimelineFeed,
  UserFeed,
  UsertagsFeed,
} from '../feeds';
import { DirectInboxFeedResponseThreadsItem } from '../responses';
import { TimelineFeedReason } from '../types/timeline-feed.types';
import { IgAppModule } from '../types/common.types';
import { plainToClassFromExist } from 'class-transformer';
import * as Chance from 'chance';
import { PostsInsightsFeedOptions } from '../types';
import { UserStoryFeed } from '../feeds/user-story.feed';
import { ListReelMediaViewerFeed } from '../feeds/list-reel-media-viewer.feed';
import { MediaInlineChildCommentsFeed } from '../feeds/media.inline-child-comments.feed';

export class FeedFactory {
  constructor(private client: IgApiClient) {}

  public accountFollowers(id?: string | number): AccountFollowersFeed {
    const feed = new AccountFollowersFeed(this.client);
    feed.id = id || this.client.state.cookieUserId;
    return feed;
  }

  public accountFollowing(id?: string | number): AccountFollowingFeed {
    const feed = new AccountFollowingFeed(this.client);
    feed.id = id || this.client.state.cookieUserId;
    return feed;
  }

  public news(): NewsFeed {
    return new NewsFeed(this.client);
  }

  public discover(): DiscoverFeed {
    return new DiscoverFeed(this.client);
  }

  public pendingFriendships(): PendingFriendshipsFeed {
    return new PendingFriendshipsFeed(this.client);
  }

  public blockedUsers(): BlockedUsersFeed {
    return new BlockedUsersFeed(this.client);
  }

  public directInbox(): DirectInboxFeed {
    return new DirectInboxFeed(this.client);
  }

  public directPending(): DirectPendingInboxFeed {
    return new DirectPendingInboxFeed(this.client);
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

  public tags(tag: string, tab: 'top' | 'recent' | 'places' = 'top'): TagsFeed {
    const feed = new TagsFeed(this.client);
    feed.tag = tag;
    feed.tab = tab;
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

  public reelsMedia(options: { userIds: Array<number | string>; source?: IgAppModule }): ReelsMediaFeed {
    return plainToClassFromExist(new ReelsMediaFeed(this.client), options);
  }

  public userStory(userId: string | number): UserStoryFeed {
    return plainToClassFromExist(new UserStoryFeed(this.client), { userId });
  }

  public reelsTray(reason: 'pull_to_refresh' | 'cold_start' = 'cold_start'): ReelsTrayFeed {
    return plainToClassFromExist(new ReelsTrayFeed(this.client), { reason });
  }

  public timeline(reason?: TimelineFeedReason): TimelineFeed {
    const feed = new TimelineFeed(this.client);
    if (reason) {
      feed.reason = reason;
    }
    return feed;
  }

  public musicTrending(product: IgAppModule = 'story_camera_music_overlay_post_capture'): MusicTrendingFeed {
    return plainToClassFromExist(new MusicTrendingFeed(this.client), { product });
  }

  public musicSearch(query: string, product: IgAppModule = 'story_camera_music_overlay_post_capture'): MusicSearchFeed {
    const options = {
      query,
      product,
      searchSessionId: new Chance(query).guid(),
    };
    return plainToClassFromExist(new MusicSearchFeed(this.client), options);
  }

  public musicGenre(
    id: number | string,
    product: IgAppModule = 'story_camera_music_overlay_post_capture',
  ): MusicGenreFeed {
    return plainToClassFromExist(new MusicGenreFeed(this.client), {
      id,
      product,
    });
  }

  public musicMood(
    id: number | string,
    product: IgAppModule = 'story_camera_music_overlay_post_capture',
  ): MusicMoodFeed {
    return plainToClassFromExist(new MusicMoodFeed(this.client), {
      id,
      product,
    });
  }

  public usertags(id: number | string): UsertagsFeed {
    return plainToClassFromExist(new UsertagsFeed(this.client), { id });
  }

  public postsInsightsFeed(options: PostsInsightsFeedOptions) {
    return plainToClassFromExist(new PostsInsightsFeed(this.client), { options });
  }

  public storiesInsights(timeframe: 'ONE_DAY' | 'ONE_WEEK' | 'TWO_WEEKS') {
    return plainToClassFromExist(new StoriesInsightsFeed(this.client), { timeframe });
  }

  public saved(): SavedFeed {
    return new SavedFeed(this.client);
  }

  public listReelMediaViewers(mediaId: string): ListReelMediaViewerFeed {
    return plainToClassFromExist(new ListReelMediaViewerFeed(this.client), { mediaId });
  }

  public mediaInlineChildComments(mediaId: string, commentId: string, minId?: string): MediaInlineChildCommentsFeed {
    return plainToClassFromExist(new MediaInlineChildCommentsFeed(this.client), {
      mediaId,
      commentId,
      nextMinId: minId,
    });
  }
}
