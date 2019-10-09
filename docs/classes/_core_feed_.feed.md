> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["core/feed"](../modules/_core_feed_.md) / [Feed](_core_feed_.feed.md) /

# Class: Feed <**Response, Item**>

## Type parameters

▪ **Response**

▪ **Item**

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **Feed**

  * [AccountFollowersFeed](_feeds_account_followers_feed_.accountfollowersfeed.md)

  * [AccountFollowingFeed](_feeds_account_following_feed_.accountfollowingfeed.md)

  * [PendingFriendshipsFeed](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md)

  * [BlockedUsersFeed](_feeds_blocked_users_feed_.blockedusersfeed.md)

  * [DirectInboxFeed](_feeds_direct_inbox_feed_.directinboxfeed.md)

  * [DirectThreadFeed](_feeds_direct_thread_feed_.directthreadfeed.md)

  * [DiscoverFeed](_feeds_discover_feed_.discoverfeed.md)

  * [LocationFeed](_feeds_location_feed_.locationfeed.md)

  * [MediaCommentsFeed](_feeds_media_comments_feed_.mediacommentsfeed.md)

  * [NewsFeed](_feeds_news_feed_.newsfeed.md)

  * [ReelsMediaFeed](_feeds_reels_media_feed_.reelsmediafeed.md)

  * [SavedFeed](_feeds_saved_feed_.savedfeed.md)

  * [TagFeed](_feeds_tag_feed_.tagfeed.md)

  * [TagsFeed](_feeds_tags_feed_.tagsfeed.md)

  * [TimelineFeed](_feeds_timeline_feed_.timelinefeed.md)

  * [UserFeed](_feeds_user_feed_.userfeed.md)

  * [DirectPendingInboxFeed](_feeds_direct_pending_feed_.directpendinginboxfeed.md)

  * [ReelsTrayFeed](_feeds_reels_tray_feed_.reelstrayfeed.md)

  * [MusicSearchFeed](_feeds_music_search_feed_.musicsearchfeed.md)

  * [MusicTrendingFeed](_feeds_music_trending_feed_.musictrendingfeed.md)

  * [MusicMoodFeed](_feeds_music_mood_feed_.musicmoodfeed.md)

  * [MusicGenreFeed](_feeds_music_genre_feed_.musicgenrefeed.md)

  * [UsertagsFeed](_feeds_usertags_feed_.usertagsfeed.md)

  * [PostsInsightsFeed](_feeds_posts_insights_feed_.postsinsightsfeed.md)

  * [StoriesInsightsFeed](_feeds_stories_insights_feed_.storiesinsightsfeed.md)

  * [UserStoryFeed](_feeds_user_story_feed_.userstoryfeed.md)

  * [ListReelMediaViewerFeed](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md)

## Index

### Constructors

* [constructor](_core_feed_.feed.md#constructor)

### Accessors

* [items$](_core_feed_.feed.md#items$)

### Methods

* [deserialize](_core_feed_.feed.md#deserialize)
* [isMoreAvailable](_core_feed_.feed.md#ismoreavailable)
* [items](_core_feed_.feed.md#abstract-items)
* [observable](_core_feed_.feed.md#observable)
* [request](_core_feed_.feed.md#abstract-request)
* [serialize](_core_feed_.feed.md#serialize)
* [toPlain](_core_feed_.feed.md#toplain)

### Object literals

* [attemptOptions](_core_feed_.feed.md#attemptoptions)

## Constructors

###  constructor

\+ **new Feed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[Feed](_core_feed_.feed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[Feed](_core_feed_.feed.md)*

## Accessors

###  items$

• **get items$**(): *`Observable<Item[]>`*

*Defined in [core/feed.ts:18](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L18)*

**Returns:** *`Observable<Item[]>`*

## Methods

###  deserialize

▸ **deserialize**(`data`: string): *void*

*Defined in [core/feed.ts:79](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *void*

___

###  isMoreAvailable

▸ **isMoreAvailable**(): *boolean*

*Defined in [core/feed.ts:87](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L87)*

**Returns:** *boolean*

___

### `Abstract` items

▸ **items**(): *`Promise<Array<Item>>`*

*Defined in [core/feed.ts:73](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L73)*

**Returns:** *`Promise<Array<Item>>`*

___

###  observable

▸ **observable**(`semaphore?`: function, `attemptOptions?`: `Partial<AttemptOptions<any>>`): *`Observable<Item[]>`*

*Defined in [core/feed.ts:21](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L21)*

**Parameters:**

▪`Optional`  **semaphore**: *function*

▸ (): *`Promise<any>`*

▪`Optional`  **attemptOptions**: *`Partial<AttemptOptions<any>>`*

**Returns:** *`Observable<Item[]>`*

___

### `Abstract` request

▸ **request**(...`args`: `Array<any>`): *`Promise<Response>`*

*Defined in [core/feed.ts:71](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Array<any>` |

**Returns:** *`Promise<Response>`*

___

###  serialize

▸ **serialize**(): *string*

*Defined in [core/feed.ts:75](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L75)*

**Returns:** *string*

___

###  toPlain

▸ **toPlain**(): *`Object`*

*Defined in [core/feed.ts:83](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L83)*

**Returns:** *`Object`*

## Object literals

###  attemptOptions

### ▪ **attemptOptions**: *object*

*Defined in [core/feed.ts:10](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L10)*

###  delay

• **delay**: *number* = 60000

*Defined in [core/feed.ts:11](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L11)*

###  factor

• **factor**: *number* = 1.5

*Defined in [core/feed.ts:12](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L12)*

###  jitter

• **jitter**: *true* = true

*Defined in [core/feed.ts:16](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L16)*

###  maxAttempts

• **maxAttempts**: *number* = 10

*Defined in [core/feed.ts:13](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L13)*

###  maxDelay

• **maxDelay**: *number* = 300000

*Defined in [core/feed.ts:15](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L15)*

###  minDelay

• **minDelay**: *number* = 60000

*Defined in [core/feed.ts:14](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L14)*