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
* [reelsMedia](_core_feed_factory_.feedfactory.md#reelsmedia)
* [reelsTray](_core_feed_factory_.feedfactory.md#reelstray)
* [saved](_core_feed_factory_.feedfactory.md#saved)
* [tag](_core_feed_factory_.feedfactory.md#tag)
* [timeline](_core_feed_factory_.feedfactory.md#timeline)
* [user](_core_feed_factory_.feedfactory.md#user)
* [usertags](_core_feed_factory_.feedfactory.md#usertags)

## Constructors

###  constructor

\+ **new FeedFactory**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[FeedFactory](_core_feed_factory_.feedfactory.md)*

*Defined in [core/feed.factory.ts:32](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[FeedFactory](_core_feed_factory_.feedfactory.md)*

## Methods

###  accountFollowers

▸ **accountFollowers**(`id?`: string | number): *[AccountFollowersFeed](_feeds_account_followers_feed_.accountfollowersfeed.md)*

*Defined in [core/feed.factory.ts:35](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`id?` | string \| number |

**Returns:** *[AccountFollowersFeed](_feeds_account_followers_feed_.accountfollowersfeed.md)*

___

###  accountFollowing

▸ **accountFollowing**(`id?`: string | number): *[AccountFollowingFeed](_feeds_account_following_feed_.accountfollowingfeed.md)*

*Defined in [core/feed.factory.ts:41](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`id?` | string \| number |

**Returns:** *[AccountFollowingFeed](_feeds_account_following_feed_.accountfollowingfeed.md)*

___

###  blockedUsers

▸ **blockedUsers**(): *[BlockedUsersFeed](_feeds_blocked_users_feed_.blockedusersfeed.md)*

*Defined in [core/feed.factory.ts:59](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L59)*

**Returns:** *[BlockedUsersFeed](_feeds_blocked_users_feed_.blockedusersfeed.md)*

___

###  directInbox

▸ **directInbox**(): *[DirectInboxFeed](_feeds_direct_inbox_feed_.directinboxfeed.md)*

*Defined in [core/feed.factory.ts:63](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L63)*

**Returns:** *[DirectInboxFeed](_feeds_direct_inbox_feed_.directinboxfeed.md)*

___

###  directPending

▸ **directPending**(): *[DirectPendingInboxFeed](_feeds_direct_pending_feed_.directpendinginboxfeed.md)*

*Defined in [core/feed.factory.ts:67](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L67)*

**Returns:** *[DirectPendingInboxFeed](_feeds_direct_pending_feed_.directpendinginboxfeed.md)*

___

###  directThread

▸ **directThread**(`options`: `Pick<DirectInboxFeedResponseThreadsItem, "thread_id" | "oldest_cursor">`, `seqId?`: number): *[DirectThreadFeed](_feeds_direct_thread_feed_.directthreadfeed.md)*

*Defined in [core/feed.factory.ts:71](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | `Pick<DirectInboxFeedResponseThreadsItem, "thread_id" \| "oldest_cursor">` |
`seqId?` | number |

**Returns:** *[DirectThreadFeed](_feeds_direct_thread_feed_.directthreadfeed.md)*

___

###  discover

▸ **discover**(): *[DiscoverFeed](_feeds_discover_feed_.discoverfeed.md)*

*Defined in [core/feed.factory.ts:51](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L51)*

**Returns:** *[DiscoverFeed](_feeds_discover_feed_.discoverfeed.md)*

___

###  location

▸ **location**(`id`: string | number, `tab`: "recent" | "ranked"): *[LocationFeed](_feeds_location_feed_.locationfeed.md)*

*Defined in [core/feed.factory.ts:94](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L94)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string \| number | - |
`tab` | "recent" \| "ranked" | "ranked" |

**Returns:** *[LocationFeed](_feeds_location_feed_.locationfeed.md)*

___

###  mediaComments

▸ **mediaComments**(`id`: string): *[MediaCommentsFeed](_feeds_media_comments_feed_.mediacommentsfeed.md)*

*Defined in [core/feed.factory.ts:101](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[MediaCommentsFeed](_feeds_media_comments_feed_.mediacommentsfeed.md)*

___

###  musicGenre

▸ **musicGenre**(`id`: number | string, `product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *[MusicGenreFeed](_feeds_music_genre_feed_.musicgenrefeed.md)*

*Defined in [core/feed.factory.ts:136](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L136)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | number \| string | - |
`product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** *[MusicGenreFeed](_feeds_music_genre_feed_.musicgenrefeed.md)*

___

###  musicMood

▸ **musicMood**(`id`: number | string, `product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *[MusicMoodFeed](_feeds_music_mood_feed_.musicmoodfeed.md)*

*Defined in [core/feed.factory.ts:146](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L146)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | number \| string | - |
`product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** *[MusicMoodFeed](_feeds_music_mood_feed_.musicmoodfeed.md)*

___

###  musicSearch

▸ **musicSearch**(`query`: string, `product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *[MusicSearchFeed](_feeds_music_search_feed_.musicsearchfeed.md)*

*Defined in [core/feed.factory.ts:127](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L127)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`query` | string | - |
`product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** *[MusicSearchFeed](_feeds_music_search_feed_.musicsearchfeed.md)*

___

###  musicTrending

▸ **musicTrending**(`product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *[MusicTrendingFeed](_feeds_music_trending_feed_.musictrendingfeed.md)*

*Defined in [core/feed.factory.ts:123](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L123)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** *[MusicTrendingFeed](_feeds_music_trending_feed_.musictrendingfeed.md)*

___

###  news

▸ **news**(): *[NewsFeed](_feeds_news_feed_.newsfeed.md)*

*Defined in [core/feed.factory.ts:47](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L47)*

**Returns:** *[NewsFeed](_feeds_news_feed_.newsfeed.md)*

___

###  pendingFriendships

▸ **pendingFriendships**(): *[PendingFriendshipsFeed](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md)*

*Defined in [core/feed.factory.ts:55](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L55)*

**Returns:** *[PendingFriendshipsFeed](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md)*

___

###  reelsMedia

▸ **reelsMedia**(`options`: object): *[ReelsMediaFeed](_feeds_reels_media_feed_.reelsmediafeed.md)*

*Defined in [core/feed.factory.ts:107](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | object |

**Returns:** *[ReelsMediaFeed](_feeds_reels_media_feed_.reelsmediafeed.md)*

___

###  reelsTray

▸ **reelsTray**(`reason`: "pull_to_refresh" | "cold_start"): *[ReelsTrayFeed](_feeds_reels_tray_feed_.reelstrayfeed.md)*

*Defined in [core/feed.factory.ts:111](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L111)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reason` | "pull_to_refresh" \| "cold_start" | "cold_start" |

**Returns:** *[ReelsTrayFeed](_feeds_reels_tray_feed_.reelstrayfeed.md)*

___

###  saved

▸ **saved**(): *[SavedFeed](_feeds_saved_feed_.savedfeed.md)*

*Defined in [core/feed.factory.ts:160](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L160)*

**Returns:** *[SavedFeed](_feeds_saved_feed_.savedfeed.md)*

___

###  tag

▸ **tag**(`tag`: string): *[TagFeed](_feeds_tag_feed_.tagfeed.md)*

*Defined in [core/feed.factory.ts:88](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

**Returns:** *[TagFeed](_feeds_tag_feed_.tagfeed.md)*

___

###  timeline

▸ **timeline**(`reason?`: [TimelineFeedReason](../modules/_types_timeline_feed_types_.md#timelinefeedreason)): *[TimelineFeed](_feeds_timeline_feed_.timelinefeed.md)*

*Defined in [core/feed.factory.ts:115](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`reason?` | [TimelineFeedReason](../modules/_types_timeline_feed_types_.md#timelinefeedreason) |

**Returns:** *[TimelineFeed](_feeds_timeline_feed_.timelinefeed.md)*

___

###  user

▸ **user**(`id`: string | number): *[UserFeed](_feeds_user_feed_.userfeed.md)*

*Defined in [core/feed.factory.ts:82](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |

**Returns:** *[UserFeed](_feeds_user_feed_.userfeed.md)*

___

###  usertags

▸ **usertags**(`id`: number | string): *[UsertagsFeed](_feeds_usertags_feed_.usertagsfeed.md)*

*Defined in [core/feed.factory.ts:156](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/feed.factory.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number \| string |

**Returns:** *[UsertagsFeed](_feeds_usertags_feed_.usertagsfeed.md)*