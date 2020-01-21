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
  IgtvBrowseFeed,
  IgtvChannelFeed,
  LikedFeed,
} from '../feeds';
import { DirectInboxFeedResponseThreadsItem } from '../responses';
import { plainToClassFromExist } from 'class-transformer';
import * as Chance from 'chance';
import { PostsInsightsFeedOptions, TimelineFeedReason, IgAppModule } from '../types';
import { UserStoryFeed } from '../feeds/user-story.feed';
import { ListReelMediaViewerFeed } from '../feeds/list-reel-media-viewer.feed';
import { MediaInlineChildCommentsFeed } from '../feeds/media.inline-child-comments.feed';
import { injectable, inject } from 'tsyringe';
import { AndroidState } from './android.state';
import DependencyContainer from 'tsyringe/dist/typings/types/dependency-container';

@injectable()
export class FeedFactory {
  constructor(@inject('IoC') private container: DependencyContainer, private state: AndroidState) {}

  public accountFollowers(id?: string | number): AccountFollowersFeed {
    const feed = this.container.resolve(AccountFollowersFeed);
    feed.id = id || this.state.cookieUserId;
    return feed;
  }

  public accountFollowing(id?: string | number): AccountFollowingFeed {
    const feed = this.container.resolve(AccountFollowingFeed);
    feed.id = id || this.state.cookieUserId;
    return feed;
  }

  public news(): NewsFeed {
    return this.container.resolve(NewsFeed);
  }

  public discover(): DiscoverFeed {
    return this.container.resolve(DiscoverFeed);
  }

  public pendingFriendships(): PendingFriendshipsFeed {
    return this.container.resolve(PendingFriendshipsFeed);
  }

  public blockedUsers(): BlockedUsersFeed {
    return this.container.resolve(BlockedUsersFeed);
  }

  public directInbox(): DirectInboxFeed {
    return this.container.resolve(DirectInboxFeed);
  }

  public directPending(): DirectPendingInboxFeed {
    return this.container.resolve(DirectPendingInboxFeed);
  }

  public directThread(
    options: Pick<DirectInboxFeedResponseThreadsItem, 'thread_id' | 'oldest_cursor'>,
    seqId?: number,
  ): DirectThreadFeed {
    const feed = this.container.resolve(DirectThreadFeed);
    feed.id = options.thread_id;
    feed.cursor = options.oldest_cursor;
    feed.seqId = seqId;
    return feed;
  }

  public user(id: string | number): UserFeed {
    const feed = this.container.resolve(UserFeed);
    feed.id = id;
    return feed;
  }

  public tag(tag: string): TagFeed {
    const feed = this.container.resolve(TagFeed);
    feed.tag = tag;
    return feed;
  }

  public tags(tag: string, tab: 'top' | 'recent' | 'places' = 'top'): TagsFeed {
    const feed = this.container.resolve(TagsFeed);
    feed.tag = tag;
    feed.tab = tab;
    return feed;
  }

  public location(id: string | number, tab: 'recent' | 'ranked' = 'ranked'): LocationFeed {
    const feed = this.container.resolve(LocationFeed);
    feed.id = id;
    feed.tab = tab;
    return feed;
  }

  public mediaComments(id: string): MediaCommentsFeed {
    const feed = this.container.resolve(MediaCommentsFeed);
    feed.id = id;
    return feed;
  }

  public reelsMedia(options: { userIds: Array<number | string>; source?: IgAppModule }): ReelsMediaFeed {
    return plainToClassFromExist(this.container.resolve(ReelsMediaFeed), options);
  }

  public userStory(userId: string | number): UserStoryFeed {
    return plainToClassFromExist(this.container.resolve(UserStoryFeed), { userId });
  }

  public reelsTray(reason: 'pull_to_refresh' | 'cold_start' = 'cold_start'): ReelsTrayFeed {
    return plainToClassFromExist(this.container.resolve(ReelsTrayFeed), { reason });
  }

  public timeline(reason?: TimelineFeedReason): TimelineFeed {
    const feed = this.container.resolve(TimelineFeed);
    if (reason) {
      feed.reason = reason;
    }
    return feed;
  }

  public musicTrending(product: IgAppModule = 'story_camera_music_overlay_post_capture'): MusicTrendingFeed {
    return plainToClassFromExist(this.container.resolve(MusicTrendingFeed), { product });
  }

  public musicSearch(query: string, product: IgAppModule = 'story_camera_music_overlay_post_capture'): MusicSearchFeed {
    const options = {
      query,
      product,
      searchSessionId: new Chance(query).guid(),
    };
    return plainToClassFromExist(this.container.resolve(MusicSearchFeed), options);
  }

  public musicGenre(
    id: number | string,
    product: IgAppModule = 'story_camera_music_overlay_post_capture',
  ): MusicGenreFeed {
    return plainToClassFromExist(this.container.resolve(MusicGenreFeed), {
      id,
      product,
    });
  }

  public musicMood(
    id: number | string,
    product: IgAppModule = 'story_camera_music_overlay_post_capture',
  ): MusicMoodFeed {
    return plainToClassFromExist(this.container.resolve(MusicMoodFeed), {
      id,
      product,
    });
  }

  public usertags(id: number | string): UsertagsFeed {
    return plainToClassFromExist(this.container.resolve(UsertagsFeed), { id });
  }

  public postsInsightsFeed(options: PostsInsightsFeedOptions) {
    return plainToClassFromExist(this.container.resolve(PostsInsightsFeed), { options });
  }

  public storiesInsights(timeframe: 'ONE_DAY' | 'ONE_WEEK' | 'TWO_WEEKS') {
    return plainToClassFromExist(this.container.resolve(StoriesInsightsFeed), { timeframe });
  }

  public saved(): SavedFeed {
    return this.container.resolve(SavedFeed);
  }

  public listReelMediaViewers(mediaId: string): ListReelMediaViewerFeed {
    return plainToClassFromExist(this.container.resolve(ListReelMediaViewerFeed), { mediaId });
  }

  public mediaInlineChildComments(mediaId: string, commentId: string, minId?: string): MediaInlineChildCommentsFeed {
    return plainToClassFromExist(this.container.resolve(MediaInlineChildCommentsFeed), {
      mediaId,
      commentId,
      nextMinId: minId,
    });
  }

  public igtvBrowse(isPrefetch?: boolean): IgtvBrowseFeed {
    return plainToClassFromExist(this.container.resolve(IgtvBrowseFeed), {
      isPrefetch: !!isPrefetch,
    });
  }
  // TODO: nerix
  // public storyQuestionResponses(
  //   mediaId: string,
  //   stickerId: string | number,
  // ): MediaStickerResponsesFeed<
  //   StoryQuestionResponsesFeedResponseRootObject,
  //   StoryQuestionResponsesFeedResponseRespondersItem
  // > {
  //   return plainToClassFromExist(this.container.resolve(MediaStickerResponsesFeed), {
  //     mediaId,
  //     stickerId,
  //     name: 'story_question_responses',
  //     rootName: 'responder_info',
  //     itemName: 'responders',
  //   });
  // }
  //
  // public storyPollVoters(
  //   mediaId: string,
  //   stickerId: string | number,
  // ): MediaStickerResponsesFeed<StoryPollVotersFeedResponseRootObject, StoryPollVotersFeedResponseVotersItem> {
  //   return plainToClassFromExist(this.container.resolve(MediaStickerResponsesFeed<any, any>), {
  //     mediaId,
  //     stickerId,
  //     name: 'story_poll_voters',
  //     rootName: 'voter_info',
  //     itemName: 'voters',
  //   });
  // }
  //
  // public storyQuizParticipants(
  //   mediaId: string,
  //   stickerId: string | number,
  // ): MediaStickerResponsesFeed<
  //   StoryQuizParticipantsFeedResponseRootObject,
  //   StoryQuizParticipantsFeedResponseParticipantsItem
  // > {
  //   return plainToClassFromExist(this.container.resolve(MediaStickerResponsesFeed<any, any>), {
  //     mediaId,
  //     stickerId,
  //     name: 'story_quiz_participants',
  //     rootName: 'participant_info',
  //     itemName: 'participants',
  //   });
  // }
  //
  // public storySliderVoters(
  //   mediaId: string,
  //   stickerId: string | number,
  // ): MediaStickerResponsesFeed<
  //   StorySliderVotersFeedResponseResponseRootObject,
  //   StorySliderVotersFeedResponseResponseVotersItem
  // > {
  //   return plainToClassFromExist(this.container.resolve(MediaStickerResponsesFeed<any, any>), {
  //     mediaId,
  //     stickerId,
  //     name: 'story_slider_voters',
  //     rootName: 'voter_info',
  //     itemName: 'voters',
  //   });
  // }

  public igtvChannel(id: string | number) {
    if (/[0-9]/.test(id.toString())) {
      id = `user_${id}`;
    }
    return plainToClassFromExist(this.container.resolve(IgtvChannelFeed), {
      channelId: id,
    });
  }

  /**
   * Returns the suggested videos after the current (id) one
   * @param id pk of the video
   */
  public igtvChaining(id: string | number) {
    return this.igtvChannel(`chaining_${id}`);
  }

  public liked(): LikedFeed {
    return this.container.resolve(LikedFeed);
  }
}
