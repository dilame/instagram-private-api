[instagram-private-api](../../README.md) / [index](../../modules/index.md) / Feed

# Class: Feed<Response, Item\>

[index](../../modules/index.md).Feed

## Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | `any` |
| `Item` | `any` |

## Hierarchy

- `Repository`

  ↳ **`Feed`**

  ↳↳ [`AccountFollowersFeed`](AccountFollowersFeed.md)

  ↳↳ [`AccountFollowingFeed`](AccountFollowingFeed.md)

  ↳↳ [`PendingFriendshipsFeed`](PendingFriendshipsFeed.md)

  ↳↳ [`BestiesFeed`](BestiesFeed.md)

  ↳↳ [`BlockedUsersFeed`](BlockedUsersFeed.md)

  ↳↳ [`DirectInboxFeed`](DirectInboxFeed.md)

  ↳↳ [`DirectThreadFeed`](DirectThreadFeed.md)

  ↳↳ [`DiscoverFeed`](DiscoverFeed.md)

  ↳↳ [`LocationFeed`](LocationFeed.md)

  ↳↳ [`MediaCommentsFeed`](MediaCommentsFeed.md)

  ↳↳ [`NewsFeed`](NewsFeed.md)

  ↳↳ [`ReelsMediaFeed`](ReelsMediaFeed.md)

  ↳↳ [`SavedFeed`](SavedFeed.md)

  ↳↳ [`TagFeed`](TagFeed.md)

  ↳↳ [`TagsFeed`](TagsFeed.md)

  ↳↳ [`TimelineFeed`](TimelineFeed.md)

  ↳↳ [`UserFeed`](UserFeed.md)

  ↳↳ [`DirectPendingInboxFeed`](DirectPendingInboxFeed.md)

  ↳↳ [`ReelsTrayFeed`](ReelsTrayFeed.md)

  ↳↳ [`MusicSearchFeed`](MusicSearchFeed.md)

  ↳↳ [`MusicTrendingFeed`](MusicTrendingFeed.md)

  ↳↳ [`MusicMoodFeed`](MusicMoodFeed.md)

  ↳↳ [`MusicGenreFeed`](MusicGenreFeed.md)

  ↳↳ [`UsertagsFeed`](UsertagsFeed.md)

  ↳↳ [`PostsInsightsFeed`](PostsInsightsFeed.md)

  ↳↳ [`StoriesInsightsFeed`](StoriesInsightsFeed.md)

  ↳↳ [`IgtvBrowseFeed`](IgtvBrowseFeed.md)

  ↳↳ [`IgtvChannelFeed`](IgtvChannelFeed.md)

  ↳↳ [`LikedFeed`](LikedFeed.md)

  ↳↳ [`TopicalExploreFeed`](TopicalExploreFeed.md)

## Table of contents

### Constructors

- [constructor](Feed.md#constructor)

### Properties

- [attemptOptions](Feed.md#attemptoptions)

### Accessors

- [items$](Feed.md#items$)

### Methods

- [deserialize](Feed.md#deserialize)
- [isMoreAvailable](Feed.md#ismoreavailable)
- [items](Feed.md#items)
- [observable](Feed.md#observable)
- [request](Feed.md#request)
- [serialize](Feed.md#serialize)
- [toPlain](Feed.md#toplain)

## Constructors

### constructor

• **new Feed**<`Response`, `Item`\>(`client`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | `any` |
| `Item` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/repository.ts#L7)

## Properties

### attemptOptions

• **attemptOptions**: `Partial`<`AttemptOptions`<`any`\>\>

#### Defined in

[src/core/feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L10)

## Accessors

### items$

• `get` **items$**(): `Observable`<`Item`[]\>

#### Returns

`Observable`<`Item`[]\>

#### Defined in

[src/core/feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L18)

## Methods

### deserialize

▸ **deserialize**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Defined in

[src/core/feed.ts:79](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L79)

___

### isMoreAvailable

▸ **isMoreAvailable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/feed.ts:87](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L87)

___

### items

▸ `Abstract` **items**(): `Promise`<`Item`[]\>

#### Returns

`Promise`<`Item`[]\>

#### Defined in

[src/core/feed.ts:73](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L73)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<`Item`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<`Item`[]\>

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ `Abstract` **request**(...`args`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/core/feed.ts:71](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L71)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Defined in

[src/core/feed.ts:75](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L75)

___

### toPlain

▸ **toPlain**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/core/feed.ts:83](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L83)
