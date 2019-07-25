> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["core/feed"](../modules/_core_feed_.md) / [Feed](_core_feed_.feed.md) /

# Class: Feed <**Response, Item**>

## Type parameters

▪ **Response**

▪ **Item**

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **Feed**

  - [AccountFollowersFeed](_feeds_account_followers_feed_.accountfollowersfeed.md)

  - [AccountFollowingFeed](_feeds_account_following_feed_.accountfollowingfeed.md)

  - [PendingFriendshipsFeed](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md)

  - [BlockedUsersFeed](_feeds_blocked_users_feed_.blockedusersfeed.md)

  - [DirectInboxFeed](_feeds_direct_inbox_feed_.directinboxfeed.md)

  - [DirectPendingInboxFeed](_feeds_direct_pending_feed_.directpendinginboxfeed.md)

  - [DirectThreadFeed](_feeds_direct_thread_feed_.directthreadfeed.md)

  - [DiscoverFeed](_feeds_discover_feed_.discoverfeed.md)

  - [LocationFeed](_feeds_location_feed_.locationfeed.md)

  - [MediaCommentsFeed](_feeds_media_comments_feed_.mediacommentsfeed.md)

  - [NewsFeed](_feeds_news_feed_.newsfeed.md)

  - [ReelsMediaFeed](_feeds_reels_media_feed_.reelsmediafeed.md)

  - [SavedFeed](_feeds_saved_feed_.savedfeed.md)

  - [TagFeed](_feeds_tag_feed_.tagfeed.md)

  - [TimelineFeed](_feeds_timeline_feed_.timelinefeed.md)

  - [UserFeed](_feeds_user_feed_.userfeed.md)

  - [ReelsTrayFeed](_feeds_reels_tray_feed_.reelstrayfeed.md)

  - [MusicSearchFeed](_feeds_music_search_feed_.musicsearchfeed.md)

  - [MusicTrendingFeed](_feeds_music_trending_feed_.musictrendingfeed.md)

  - [MusicMoodFeed](_feeds_music_mood_feed_.musicmoodfeed.md)

  - [MusicGenreFeed](_feeds_music_genre_feed_.musicgenrefeed.md)

  - [UsertagsFeed](_feeds_usertags_feed_.usertagsfeed.md)

## Index

### Constructors

- [constructor](_core_feed_.feed.md#constructor)

### Properties

- [items\$](_core_feed_.feed.md#items$)

### Methods

- [deserialize](_core_feed_.feed.md#deserialize)
- [isMoreAvailable](_core_feed_.feed.md#ismoreavailable)
- [items](_core_feed_.feed.md#abstract-items)
- [request](_core_feed_.feed.md#abstract-request)
- [serialize](_core_feed_.feed.md#serialize)
- [toPlain](_core_feed_.feed.md#toplain)

### Object literals

- [attemptOptions](_core_feed_.feed.md#attemptoptions)

## Constructors

### constructor

\+ **new Feed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[Feed](\_core_feed_.feed.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[Feed](\_core_feed_.feed.md)\_

## Properties

### items\$

• **items\$**: _any_ = new Observable<Item[]>(observer => {
let subscribed = true;
process.nextTick(async () => {
do {
try {
await retry(
async () => {
const items = await this.items();
observer.next(items);
},
{
handleError(error, context) {
// If instagram just tells us to wait - we are waiting.
if (
error instanceof IgResponseError &&
error.response.statusCode === 400 &&
error.response.body.status === 'fail'
) {
return;
} else {
context.abort();
}
},
...this.attemptOptions,
},
);
} catch (e) {
observer.error(e);
}
} while (this.isMoreAvailable() && subscribed);
observer.complete();
});
return () => (subscribed = false);
})

_Defined in [core/feed.ts:18](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L18)_

## Methods

### deserialize

▸ **deserialize**(`data`: string): _void_

_Defined in [core/feed.ts:69](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L69)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `data` | string |

**Returns:** _void_

---

### isMoreAvailable

▸ **isMoreAvailable**(): _boolean_

_Defined in [core/feed.ts:77](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L77)_

**Returns:** _boolean_

---

### `Abstract` items

▸ **items**(): _`Promise<Array<Item>>`_

_Defined in [core/feed.ts:63](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L63)_

**Returns:** _`Promise<Array<Item>>`_

---

### `Abstract` request

▸ **request**(...`args`: `Array<any>`): _`Promise<Response>`_

_Defined in [core/feed.ts:61](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L61)_

**Parameters:**

| Name      | Type         |
| --------- | ------------ |
| `...args` | `Array<any>` |

**Returns:** _`Promise<Response>`_

---

### serialize

▸ **serialize**(): _any_

_Defined in [core/feed.ts:65](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L65)_

**Returns:** _any_

---

### toPlain

▸ **toPlain**(): _any_

_Defined in [core/feed.ts:73](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L73)_

**Returns:** _any_

## Object literals

### attemptOptions

### ▪ **attemptOptions**: _object_

_Defined in [core/feed.ts:10](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L10)_

### delay

• **delay**: _number_ = 60000

_Defined in [core/feed.ts:11](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L11)_

### factor

• **factor**: _number_ = 1.5

_Defined in [core/feed.ts:12](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L12)_

### jitter

• **jitter**: _boolean_ = true

_Defined in [core/feed.ts:16](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L16)_

### maxAttempts

• **maxAttempts**: _number_ = 10

_Defined in [core/feed.ts:13](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L13)_

### maxDelay

• **maxDelay**: _number_ = 300000

_Defined in [core/feed.ts:15](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L15)_

### minDelay

• **minDelay**: _number_ = 60000

_Defined in [core/feed.ts:14](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L14)_
