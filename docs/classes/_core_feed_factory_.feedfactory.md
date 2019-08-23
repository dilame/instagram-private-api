> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["core/feed.factory"](../modules/_core_feed_factory_.md) / [FeedFactory](_core_feed_factory_.feedfactory.md) /

# Class: FeedFactory

## Hierarchy

* **FeedFactory**

## Index

### Constructors

* [constructor](_core_feed_factory_.feedfactory.md#constructor)

### Methods

* [accountFollowers](_core_feed_factory_.feedfactory.md#accountfollowers)
* [accountFollowing](_core_feed_factory_.feedfactory.md#accountfollowing)
* [blockedUsers](_core_feed_factory_.feedfactory.md#blockedusers)
* [directInbox](_core_feed_factory_.feedfactory.md#directinbox)
* [directPending](_core_feed_factory_.feedfactory.md#directpending)
* [directThread](_core_feed_factory_.feedfactory.md#directthread)
* [discover](_core_feed_factory_.feedfactory.md#discover)
* [location](_core_feed_factory_.feedfactory.md#location)
* [mediaComments](_core_feed_factory_.feedfactory.md#mediacomments)
* [musicGenre](_core_feed_factory_.feedfactory.md#musicgenre)
* [musicMood](_core_feed_factory_.feedfactory.md#musicmood)
* [musicSearch](_core_feed_factory_.feedfactory.md#musicsearch)
* [musicTrending](_core_feed_factory_.feedfactory.md#musictrending)
* [news](_core_feed_factory_.feedfactory.md#news)
* [pendingFriendships](_core_feed_factory_.feedfactory.md#pendingfriendships)
* [postsInsightsFeed](_core_feed_factory_.feedfactory.md#postsinsightsfeed)
* [reelsMedia](_core_feed_factory_.feedfactory.md#reelsmedia)
* [reelsTray](_core_feed_factory_.feedfactory.md#reelstray)
* [saved](_core_feed_factory_.feedfactory.md#saved)
* [storiesInsights](_core_feed_factory_.feedfactory.md#storiesinsights)
* [tag](_core_feed_factory_.feedfactory.md#tag)
* [timeline](_core_feed_factory_.feedfactory.md#timeline)
* [user](_core_feed_factory_.feedfactory.md#user)
* [usertags](_core_feed_factory_.feedfactory.md#usertags)

## Constructors

###  constructor

\+ **new FeedFactory**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[FeedFactory](_core_feed_factory_.feedfactory.md)*

*Defined in [core/feed.factory.ts:35](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[FeedFactory](_core_feed_factory_.feedfactory.md)*

## Methods

###  accountFollowers

▸ **accountFollowers**(`id?`: string | number): *[AccountFollowersFeed](_feeds_account_followers_feed_.accountfollowersfeed.md)*

*Defined in [core/feed.factory.ts:38](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`id?` | string \| number |

**Returns:** *[AccountFollowersFeed](_feeds_account_followers_feed_.accountfollowersfeed.md)*

___

###  accountFollowing

▸ **accountFollowing**(`id?`: string | number): *[AccountFollowingFeed](_feeds_account_following_feed_.accountfollowingfeed.md)*

*Defined in [core/feed.factory.ts:44](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`id?` | string \| number |

**Returns:** *[AccountFollowingFeed](_feeds_account_following_feed_.accountfollowingfeed.md)*

___

###  blockedUsers

▸ **blockedUsers**(): *[BlockedUsersFeed](_feeds_blocked_users_feed_.blockedusersfeed.md)*

*Defined in [core/feed.factory.ts:62](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L62)*

**Returns:** *[BlockedUsersFeed](_feeds_blocked_users_feed_.blockedusersfeed.md)*

___

###  directInbox

▸ **directInbox**(): *[DirectInboxFeed](_feeds_direct_inbox_feed_.directinboxfeed.md)*

*Defined in [core/feed.factory.ts:66](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L66)*

**Returns:** *[DirectInboxFeed](_feeds_direct_inbox_feed_.directinboxfeed.md)*

___

###  directPending

▸ **directPending**(): *[DirectPendingInboxFeed](_feeds_direct_pending_feed_.directpendinginboxfeed.md)*

*Defined in [core/feed.factory.ts:70](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L70)*

**Returns:** *[DirectPendingInboxFeed](_feeds_direct_pending_feed_.directpendinginboxfeed.md)*

___

###  directThread

▸ **directThread**(`options`: `Pick<DirectInboxFeedResponseThreadsItem, "thread_id" | "oldest_cursor">`, `seqId?`: number): *[DirectThreadFeed](_feeds_direct_thread_feed_.directthreadfeed.md)*

*Defined in [core/feed.factory.ts:74](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | `Pick<DirectInboxFeedResponseThreadsItem, "thread_id" \| "oldest_cursor">` |
`seqId?` | number |

**Returns:** *[DirectThreadFeed](_feeds_direct_thread_feed_.directthreadfeed.md)*

___

###  discover

▸ **discover**(): *[DiscoverFeed](_feeds_discover_feed_.discoverfeed.md)*

*Defined in [core/feed.factory.ts:54](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L54)*

**Returns:** *[DiscoverFeed](_feeds_discover_feed_.discoverfeed.md)*

___

###  location

▸ **location**(`id`: string | number, `tab`: "recent" | "ranked"): *[LocationFeed](_feeds_location_feed_.locationfeed.md)*

*Defined in [core/feed.factory.ts:97](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L97)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string \| number | - |
`tab` | "recent" \| "ranked" | "ranked" |

**Returns:** *[LocationFeed](_feeds_location_feed_.locationfeed.md)*

___

###  mediaComments

▸ **mediaComments**(`id`: string): *[MediaCommentsFeed](_feeds_media_comments_feed_.mediacommentsfeed.md)*

*Defined in [core/feed.factory.ts:104](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[MediaCommentsFeed](_feeds_media_comments_feed_.mediacommentsfeed.md)*

___

###  musicGenre

▸ **musicGenre**(`id`: number | string, `product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *[MusicGenreFeed](_feeds_music_genre_feed_.musicgenrefeed.md)*

*Defined in [core/feed.factory.ts:139](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L139)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | number \| string | - |
`product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** *[MusicGenreFeed](_feeds_music_genre_feed_.musicgenrefeed.md)*

___

###  musicMood

▸ **musicMood**(`id`: number | string, `product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *[MusicMoodFeed](_feeds_music_mood_feed_.musicmoodfeed.md)*

*Defined in [core/feed.factory.ts:149](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L149)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | number \| string | - |
`product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** *[MusicMoodFeed](_feeds_music_mood_feed_.musicmoodfeed.md)*

___

###  musicSearch

▸ **musicSearch**(`query`: string, `product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *[MusicSearchFeed](_feeds_music_search_feed_.musicsearchfeed.md)*

*Defined in [core/feed.factory.ts:130](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L130)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`query` | string | - |
`product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** *[MusicSearchFeed](_feeds_music_search_feed_.musicsearchfeed.md)*

___

###  musicTrending

▸ **musicTrending**(`product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *[MusicTrendingFeed](_feeds_music_trending_feed_.musictrendingfeed.md)*

*Defined in [core/feed.factory.ts:126](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L126)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** *[MusicTrendingFeed](_feeds_music_trending_feed_.musictrendingfeed.md)*

___

###  news

▸ **news**(): *[NewsFeed](_feeds_news_feed_.newsfeed.md)*

*Defined in [core/feed.factory.ts:50](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L50)*

**Returns:** *[NewsFeed](_feeds_news_feed_.newsfeed.md)*

___

###  pendingFriendships

▸ **pendingFriendships**(): *[PendingFriendshipsFeed](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md)*

*Defined in [core/feed.factory.ts:58](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L58)*

**Returns:** *[PendingFriendshipsFeed](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md)*

___

###  postsInsightsFeed

▸ **postsInsightsFeed**(`options`: [PostsInsightsFeedOptions](../interfaces/_types_insights_options_.postsinsightsfeedoptions.md)): *[PostsInsightsFeed](_feeds_posts_insights_feed_.postsinsightsfeed.md)*

*Defined in [core/feed.factory.ts:163](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PostsInsightsFeedOptions](../interfaces/_types_insights_options_.postsinsightsfeedoptions.md) |

**Returns:** *[PostsInsightsFeed](_feeds_posts_insights_feed_.postsinsightsfeed.md)*

___

###  reelsMedia

▸ **reelsMedia**(`options`: object): *[ReelsMediaFeed](_feeds_reels_media_feed_.reelsmediafeed.md)*

*Defined in [core/feed.factory.ts:110](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | object |

**Returns:** *[ReelsMediaFeed](_feeds_reels_media_feed_.reelsmediafeed.md)*

___

###  reelsTray

▸ **reelsTray**(`reason`: "pull_to_refresh" | "cold_start"): *[ReelsTrayFeed](_feeds_reels_tray_feed_.reelstrayfeed.md)*

*Defined in [core/feed.factory.ts:114](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L114)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reason` | "pull_to_refresh" \| "cold_start" | "cold_start" |

**Returns:** *[ReelsTrayFeed](_feeds_reels_tray_feed_.reelstrayfeed.md)*

___

###  saved

▸ **saved**(): *[SavedFeed](_feeds_saved_feed_.savedfeed.md)*

*Defined in [core/feed.factory.ts:171](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L171)*

**Returns:** *[SavedFeed](_feeds_saved_feed_.savedfeed.md)*

___

###  storiesInsights

▸ **storiesInsights**(`timeframe`: "ONE_DAY" | "ONE_WEEK" | "TWO_WEEKS"): *[StoriesInsightsFeed](_feeds_stories_insights_feed_.storiesinsightsfeed.md)*

*Defined in [core/feed.factory.ts:167](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`timeframe` | "ONE_DAY" \| "ONE_WEEK" \| "TWO_WEEKS" |

**Returns:** *[StoriesInsightsFeed](_feeds_stories_insights_feed_.storiesinsightsfeed.md)*

___

###  tag

▸ **tag**(`tag`: string): *[TagFeed](_feeds_tag_feed_.tagfeed.md)*

*Defined in [core/feed.factory.ts:91](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

**Returns:** *[TagFeed](_feeds_tag_feed_.tagfeed.md)*

___

###  timeline

▸ **timeline**(`reason?`: [TimelineFeedReason](../modules/_types_timeline_feed_types_.md#timelinefeedreason)): *[TimelineFeed](_feeds_timeline_feed_.timelinefeed.md)*

*Defined in [core/feed.factory.ts:118](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`reason?` | [TimelineFeedReason](../modules/_types_timeline_feed_types_.md#timelinefeedreason) |

**Returns:** *[TimelineFeed](_feeds_timeline_feed_.timelinefeed.md)*

___

###  user

▸ **user**(`id`: string | number): *[UserFeed](_feeds_user_feed_.userfeed.md)*

*Defined in [core/feed.factory.ts:85](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |

**Returns:** *[UserFeed](_feeds_user_feed_.userfeed.md)*

___

###  usertags

▸ **usertags**(`id`: number | string): *[UsertagsFeed](_feeds_usertags_feed_.usertagsfeed.md)*

*Defined in [core/feed.factory.ts:159](https://github.com/dilame/instagram-private-api/blob/e9c516c/src/core/feed.factory.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number \| string |

**Returns:** *[UsertagsFeed](_feeds_usertags_feed_.usertagsfeed.md)*