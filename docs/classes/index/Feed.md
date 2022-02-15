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

  ↳↳ [`AccountFollowersFeed`](../feeds/AccountFollowersFeed.md)

  ↳↳ [`AccountFollowingFeed`](../feeds/AccountFollowingFeed.md)

  ↳↳ [`PendingFriendshipsFeed`](../feeds/PendingFriendshipsFeed.md)

  ↳↳ [`BestiesFeed`](../feeds/BestiesFeed.md)

  ↳↳ [`BlockedUsersFeed`](../feeds/BlockedUsersFeed.md)

  ↳↳ [`DirectInboxFeed`](../feeds/DirectInboxFeed.md)

  ↳↳ [`DirectThreadFeed`](../feeds/DirectThreadFeed.md)

  ↳↳ [`DiscoverFeed`](../feeds/DiscoverFeed.md)

  ↳↳ [`LocationFeed`](../feeds/LocationFeed.md)

  ↳↳ [`MediaCommentsFeed`](../feeds/MediaCommentsFeed.md)

  ↳↳ [`NewsFeed`](../feeds/NewsFeed.md)

  ↳↳ [`ReelsMediaFeed`](../feeds/ReelsMediaFeed.md)

  ↳↳ [`SavedFeed`](../feeds/SavedFeed.md)

  ↳↳ [`TagFeed`](../feeds/TagFeed.md)

  ↳↳ [`TagsFeed`](../feeds/TagsFeed.md)

  ↳↳ [`TimelineFeed`](../feeds/TimelineFeed.md)

  ↳↳ [`UserFeed`](../feeds/UserFeed.md)

  ↳↳ [`DirectPendingInboxFeed`](../feeds/DirectPendingInboxFeed.md)

  ↳↳ [`ReelsTrayFeed`](../feeds/ReelsTrayFeed.md)

  ↳↳ [`MusicSearchFeed`](../feeds/MusicSearchFeed.md)

  ↳↳ [`MusicTrendingFeed`](../feeds/MusicTrendingFeed.md)

  ↳↳ [`MusicMoodFeed`](../feeds/MusicMoodFeed.md)

  ↳↳ [`MusicGenreFeed`](../feeds/MusicGenreFeed.md)

  ↳↳ [`UsertagsFeed`](../feeds/UsertagsFeed.md)

  ↳↳ [`PostsInsightsFeed`](../feeds/PostsInsightsFeed.md)

  ↳↳ [`StoriesInsightsFeed`](../feeds/StoriesInsightsFeed.md)

  ↳↳ [`IgtvBrowseFeed`](../feeds/IgtvBrowseFeed.md)

  ↳↳ [`IgtvChannelFeed`](../feeds/IgtvChannelFeed.md)

  ↳↳ [`LikedFeed`](../feeds/LikedFeed.md)

  ↳↳ [`TopicalExploreFeed`](../feeds/TopicalExploreFeed.md)

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

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Properties

### attemptOptions

• **attemptOptions**: `Partial`<`AttemptOptions`<`any`\>\>

#### Defined in

[src/core/feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L10)

## Accessors

### items$

• `get` **items$**(): `Observable`<`Item`[]\>

#### Returns

`Observable`<`Item`[]\>

#### Defined in

[src/core/feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L18)

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

[src/core/feed.ts:79](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L79)

___

### isMoreAvailable

▸ **isMoreAvailable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/feed.ts:87](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L87)

___

### items

▸ `Abstract` **items**(): `Promise`<`Item`[]\>

#### Returns

`Promise`<`Item`[]\>

#### Defined in

[src/core/feed.ts:73](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L73)

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

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

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

[src/core/feed.ts:71](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L71)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Defined in

[src/core/feed.ts:75](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L75)

___

### toPlain

▸ **toPlain**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/core/feed.ts:83](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L83)
