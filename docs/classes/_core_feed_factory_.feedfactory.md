> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["core/feed.factory"](../modules/_core_feed_factory_.md) / [FeedFactory](_core_feed_factory_.feedfactory.md) /

# Class: FeedFactory

## Hierarchy

- **FeedFactory**

## Index

### Constructors

- [constructor](_core_feed_factory_.feedfactory.md#constructor)

### Methods

- [accountFollowers](_core_feed_factory_.feedfactory.md#accountfollowers)
- [accountFollowing](_core_feed_factory_.feedfactory.md#accountfollowing)
- [blockedUsers](_core_feed_factory_.feedfactory.md#blockedusers)
- [directInbox](_core_feed_factory_.feedfactory.md#directinbox)
- [directPending](_core_feed_factory_.feedfactory.md#directpending)
- [directThread](_core_feed_factory_.feedfactory.md#directthread)
- [discover](_core_feed_factory_.feedfactory.md#discover)
- [location](_core_feed_factory_.feedfactory.md#location)
- [mediaComments](_core_feed_factory_.feedfactory.md#mediacomments)
- [musicGenre](_core_feed_factory_.feedfactory.md#musicgenre)
- [musicMood](_core_feed_factory_.feedfactory.md#musicmood)
- [musicSearch](_core_feed_factory_.feedfactory.md#musicsearch)
- [musicTrending](_core_feed_factory_.feedfactory.md#musictrending)
- [news](_core_feed_factory_.feedfactory.md#news)
- [pendingFriendships](_core_feed_factory_.feedfactory.md#pendingfriendships)
- [reelsMedia](_core_feed_factory_.feedfactory.md#reelsmedia)
- [reelsTray](_core_feed_factory_.feedfactory.md#reelstray)
- [saved](_core_feed_factory_.feedfactory.md#saved)
- [tag](_core_feed_factory_.feedfactory.md#tag)
- [timeline](_core_feed_factory_.feedfactory.md#timeline)
- [user](_core_feed_factory_.feedfactory.md#user)
- [usertags](_core_feed_factory_.feedfactory.md#usertags)

## Constructors

### constructor

\+ **new FeedFactory**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[FeedFactory](\_core_feed_factory_.feedfactory.md)\_

_Defined in [core/feed.factory.ts:32](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L32)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[FeedFactory](\_core_feed_factory_.feedfactory.md)\_

## Methods

### accountFollowers

▸ **accountFollowers**(`id?`: string | number): _[AccountFollowersFeed](\_feeds_account_followers_feed_.accountfollowersfeed.md)\_

_Defined in [core/feed.factory.ts:35](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L35)_

**Parameters:**

| Name  | Type             |
| ----- | ---------------- |
| `id?` | string \| number |

**Returns:** _[AccountFollowersFeed](\_feeds_account_followers_feed_.accountfollowersfeed.md)\_

---

### accountFollowing

▸ **accountFollowing**(`id?`: string | number): _[AccountFollowingFeed](\_feeds_account_following_feed_.accountfollowingfeed.md)\_

_Defined in [core/feed.factory.ts:41](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L41)_

**Parameters:**

| Name  | Type             |
| ----- | ---------------- |
| `id?` | string \| number |

**Returns:** _[AccountFollowingFeed](\_feeds_account_following_feed_.accountfollowingfeed.md)\_

---

### blockedUsers

▸ **blockedUsers**(): _[BlockedUsersFeed](\_feeds_blocked_users_feed_.blockedusersfeed.md)\_

_Defined in [core/feed.factory.ts:59](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L59)_

**Returns:** _[BlockedUsersFeed](\_feeds_blocked_users_feed_.blockedusersfeed.md)\_

---

### directInbox

▸ **directInbox**(): _[DirectInboxFeed](\_feeds_direct_inbox_feed_.directinboxfeed.md)\_

_Defined in [core/feed.factory.ts:63](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L63)_

**Returns:** _[DirectInboxFeed](\_feeds_direct_inbox_feed_.directinboxfeed.md)\_

---

### directPending

▸ **directPending**(): _[DirectPendingInboxFeed](\_feeds_direct_pending_feed_.directpendinginboxfeed.md)\_

_Defined in [core/feed.factory.ts:67](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L67)_

**Returns:** _[DirectPendingInboxFeed](\_feeds_direct_pending_feed_.directpendinginboxfeed.md)\_

---

### directThread

▸ **directThread**(`options`: `Pick<DirectInboxFeedResponseThreadsItem, "thread_id" | "oldest_cursor">`, `seqId?`: number): _[DirectThreadFeed](\_feeds_direct_thread_feed_.directthreadfeed.md)\_

_Defined in [core/feed.factory.ts:71](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L71)_

**Parameters:**

| Name      | Type                                                                       |
| --------- | -------------------------------------------------------------------------- |
| `options` | `Pick<DirectInboxFeedResponseThreadsItem, "thread_id" \| "oldest_cursor">` |
| `seqId?`  | number                                                                     |

**Returns:** _[DirectThreadFeed](\_feeds_direct_thread_feed_.directthreadfeed.md)\_

---

### discover

▸ **discover**(): _[DiscoverFeed](\_feeds_discover_feed_.discoverfeed.md)\_

_Defined in [core/feed.factory.ts:51](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L51)_

**Returns:** _[DiscoverFeed](\_feeds_discover_feed_.discoverfeed.md)\_

---

### location

▸ **location**(`id`: string | number, `tab`: "recent" | "ranked"): _[LocationFeed](\_feeds_location_feed_.locationfeed.md)\_

_Defined in [core/feed.factory.ts:94](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L94)_

**Parameters:**

| Name  | Type                 | Default  |
| ----- | -------------------- | -------- |
| `id`  | string \| number     | -        |
| `tab` | "recent" \| "ranked" | "ranked" |

**Returns:** _[LocationFeed](\_feeds_location_feed_.locationfeed.md)\_

---

### mediaComments

▸ **mediaComments**(`id`: string): _[MediaCommentsFeed](\_feeds_media_comments_feed_.mediacommentsfeed.md)\_

_Defined in [core/feed.factory.ts:101](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L101)_

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `id` | string |

**Returns:** _[MediaCommentsFeed](\_feeds_media_comments_feed_.mediacommentsfeed.md)\_

---

### musicGenre

▸ **musicGenre**(`id`: number | string, `product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): _[MusicGenreFeed](\_feeds_music_genre_feed_.musicgenrefeed.md)\_

_Defined in [core/feed.factory.ts:136](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L136)_

**Parameters:**

| Name      | Type                                                          | Default                                   |
| --------- | ------------------------------------------------------------- | ----------------------------------------- |
| `id`      | number \| string                                              | -                                         |
| `product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** _[MusicGenreFeed](\_feeds_music_genre_feed_.musicgenrefeed.md)\_

---

### musicMood

▸ **musicMood**(`id`: number | string, `product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): _[MusicMoodFeed](\_feeds_music_mood_feed_.musicmoodfeed.md)\_

_Defined in [core/feed.factory.ts:146](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L146)_

**Parameters:**

| Name      | Type                                                          | Default                                   |
| --------- | ------------------------------------------------------------- | ----------------------------------------- |
| `id`      | number \| string                                              | -                                         |
| `product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** _[MusicMoodFeed](\_feeds_music_mood_feed_.musicmoodfeed.md)\_

---

### musicSearch

▸ **musicSearch**(`query`: string, `product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): _[MusicSearchFeed](\_feeds_music_search_feed_.musicsearchfeed.md)\_

_Defined in [core/feed.factory.ts:127](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L127)_

**Parameters:**

| Name      | Type                                                          | Default                                   |
| --------- | ------------------------------------------------------------- | ----------------------------------------- |
| `query`   | string                                                        | -                                         |
| `product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** _[MusicSearchFeed](\_feeds_music_search_feed_.musicsearchfeed.md)\_

---

### musicTrending

▸ **musicTrending**(`product`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): _[MusicTrendingFeed](\_feeds_music_trending_feed_.musictrendingfeed.md)\_

_Defined in [core/feed.factory.ts:123](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L123)_

**Parameters:**

| Name      | Type                                                          | Default                                   |
| --------- | ------------------------------------------------------------- | ----------------------------------------- |
| `product` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "story_camera_music_overlay_post_capture" |

**Returns:** _[MusicTrendingFeed](\_feeds_music_trending_feed_.musictrendingfeed.md)\_

---

### news

▸ **news**(): _[NewsFeed](\_feeds_news_feed_.newsfeed.md)\_

_Defined in [core/feed.factory.ts:47](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L47)_

**Returns:** _[NewsFeed](\_feeds_news_feed_.newsfeed.md)\_

---

### pendingFriendships

▸ **pendingFriendships**(): _[PendingFriendshipsFeed](\_feeds_account_friendships_feed_.pendingfriendshipsfeed.md)\_

_Defined in [core/feed.factory.ts:55](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L55)_

**Returns:** _[PendingFriendshipsFeed](\_feeds_account_friendships_feed_.pendingfriendshipsfeed.md)\_

---

### reelsMedia

▸ **reelsMedia**(`options`: object): _[ReelsMediaFeed](\_feeds_reels_media_feed_.reelsmediafeed.md)\_

_Defined in [core/feed.factory.ts:107](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L107)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `options` | object |

**Returns:** _[ReelsMediaFeed](\_feeds_reels_media_feed_.reelsmediafeed.md)\_

---

### reelsTray

▸ **reelsTray**(`reason`: "pull*to_refresh" | "cold_start"): \*[ReelsTrayFeed](\_feeds_reels_tray_feed*.reelstrayfeed.md)\*

_Defined in [core/feed.factory.ts:111](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L111)_

**Parameters:**

| Name     | Type                              | Default      |
| -------- | --------------------------------- | ------------ |
| `reason` | "pull_to_refresh" \| "cold_start" | "cold_start" |

**Returns:** _[ReelsTrayFeed](\_feeds_reels_tray_feed_.reelstrayfeed.md)\_

---

### saved

▸ **saved**(): _[SavedFeed](\_feeds_saved_feed_.savedfeed.md)\_

_Defined in [core/feed.factory.ts:160](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L160)_

**Returns:** _[SavedFeed](\_feeds_saved_feed_.savedfeed.md)\_

---

### tag

▸ **tag**(`tag`: string): _[TagFeed](\_feeds_tag_feed_.tagfeed.md)\_

_Defined in [core/feed.factory.ts:88](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L88)_

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `tag` | string |

**Returns:** _[TagFeed](\_feeds_tag_feed_.tagfeed.md)\_

---

### timeline

▸ **timeline**(`reason?`: [TimelineFeedReason](../modules/_types_timeline_feed_types_.md#timelinefeedreason)): _[TimelineFeed](\_feeds_timeline_feed_.timelinefeed.md)\_

_Defined in [core/feed.factory.ts:115](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L115)_

**Parameters:**

| Name      | Type                                                                               |
| --------- | ---------------------------------------------------------------------------------- |
| `reason?` | [TimelineFeedReason](../modules/_types_timeline_feed_types_.md#timelinefeedreason) |

**Returns:** _[TimelineFeed](\_feeds_timeline_feed_.timelinefeed.md)\_

---

### user

▸ **user**(`id`: string | number): _[UserFeed](\_feeds_user_feed_.userfeed.md)\_

_Defined in [core/feed.factory.ts:82](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L82)_

**Parameters:**

| Name | Type             |
| ---- | ---------------- |
| `id` | string \| number |

**Returns:** _[UserFeed](\_feeds_user_feed_.userfeed.md)\_

---

### usertags

▸ **usertags**(`id`: number | string): _[UsertagsFeed](\_feeds_usertags_feed_.usertagsfeed.md)\_

_Defined in [core/feed.factory.ts:156](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.factory.ts#L156)_

**Parameters:**

| Name | Type             |
| ---- | ---------------- |
| `id` | number \| string |

**Returns:** _[UsertagsFeed](\_feeds_usertags_feed_.usertagsfeed.md)\_
