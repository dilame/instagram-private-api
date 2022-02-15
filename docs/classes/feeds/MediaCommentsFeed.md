[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / MediaCommentsFeed

# Class: MediaCommentsFeed

[feeds](../../modules/feeds.md).MediaCommentsFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`MediaCommentsFeedResponse`](../../interfaces/responses/MediaCommentsFeedResponse.md), [`MediaCommentsFeedResponseCommentsItem`](../../interfaces/responses/MediaCommentsFeedResponseCommentsItem.md)\>

  ↳ **`MediaCommentsFeed`**

## Table of contents

### Constructors

- [constructor](MediaCommentsFeed.md#constructor)

### Properties

- [attemptOptions](MediaCommentsFeed.md#attemptoptions)
- [id](MediaCommentsFeed.md#id)

### Accessors

- [items$](MediaCommentsFeed.md#items$)
- [state](MediaCommentsFeed.md#state)

### Methods

- [deserialize](MediaCommentsFeed.md#deserialize)
- [isMoreAvailable](MediaCommentsFeed.md#ismoreavailable)
- [items](MediaCommentsFeed.md#items)
- [observable](MediaCommentsFeed.md#observable)
- [request](MediaCommentsFeed.md#request)
- [serialize](MediaCommentsFeed.md#serialize)
- [toPlain](MediaCommentsFeed.md#toplain)

## Constructors

### constructor

• **new MediaCommentsFeed**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

[Feed](../index/Feed.md).[constructor](../index/Feed.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Properties

### attemptOptions

• **attemptOptions**: `Partial`<`AttemptOptions`<`any`\>\>

#### Inherited from

[Feed](../index/Feed.md).[attemptOptions](../index/Feed.md#attemptoptions)

#### Defined in

[src/core/feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L10)

___

### id

• **id**: `string`

#### Defined in

[src/feeds/media-comments.feed.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/media-comments.feed.ts#L6)

## Accessors

### items$

• `get` **items$**(): `Observable`<`Item`[]\>

#### Returns

`Observable`<`Item`[]\>

#### Defined in

[src/core/feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L18)

___

### state

• `set` **state**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`MediaCommentsFeedResponse`](../../interfaces/responses/MediaCommentsFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/media-comments.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/media-comments.feed.ts#L12)

## Methods

### deserialize

▸ **deserialize**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Inherited from

[Feed](../index/Feed.md).[deserialize](../index/Feed.md#deserialize)

#### Defined in

[src/core/feed.ts:79](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L79)

___

### isMoreAvailable

▸ **isMoreAvailable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Feed](../index/Feed.md).[isMoreAvailable](../index/Feed.md#ismoreavailable)

#### Defined in

[src/core/feed.ts:87](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L87)

___

### items

▸ **items**(): `Promise`<[`MediaCommentsFeedResponseCommentsItem`](../../interfaces/responses/MediaCommentsFeedResponseCommentsItem.md)[]\>

#### Returns

`Promise`<[`MediaCommentsFeedResponseCommentsItem`](../../interfaces/responses/MediaCommentsFeedResponseCommentsItem.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/media-comments.feed.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/media-comments.feed.ts#L31)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`MediaCommentsFeedResponseCommentsItem`](../../interfaces/responses/MediaCommentsFeedResponseCommentsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`MediaCommentsFeedResponseCommentsItem`](../../interfaces/responses/MediaCommentsFeedResponseCommentsItem.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`MediaCommentsFeedResponse`](../../interfaces/responses/MediaCommentsFeedResponse.md)\>

#### Returns

`Promise`<[`MediaCommentsFeedResponse`](../../interfaces/responses/MediaCommentsFeedResponse.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/media-comments.feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/media-comments.feed.ts#L18)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[Feed](../index/Feed.md).[serialize](../index/Feed.md#serialize)

#### Defined in

[src/core/feed.ts:75](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L75)

___

### toPlain

▸ **toPlain**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

[Feed](../index/Feed.md).[toPlain](../index/Feed.md#toplain)

#### Defined in

[src/core/feed.ts:83](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L83)
