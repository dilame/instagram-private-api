[instagram-private-api](../../README.md) / [index](../../modules/index.md) / MediaCommentsFeed

# Class: MediaCommentsFeed

[index](../../modules/index.md).MediaCommentsFeed

## Hierarchy

- [`Feed`](Feed.md)<[`MediaCommentsFeedResponse`](../../interfaces/index/MediaCommentsFeedResponse.md), [`MediaCommentsFeedResponseCommentsItem`](../../interfaces/index/MediaCommentsFeedResponseCommentsItem.md)\>

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
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Inherited from

[Feed](Feed.md).[constructor](Feed.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/repository.ts#L7)

## Properties

### attemptOptions

• **attemptOptions**: `Partial`<`AttemptOptions`<`any`\>\>

#### Inherited from

[Feed](Feed.md).[attemptOptions](Feed.md#attemptoptions)

#### Defined in

[src/core/feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L10)

___

### id

• **id**: `string`

#### Defined in

[src/feeds/media-comments.feed.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/media-comments.feed.ts#L6)

## Accessors

### items$

• `get` **items$**(): `Observable`<`Item`[]\>

#### Returns

`Observable`<`Item`[]\>

#### Defined in

[src/core/feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L18)

___

### state

• `set` **state**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`MediaCommentsFeedResponse`](../../interfaces/index/MediaCommentsFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/media-comments.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/media-comments.feed.ts#L12)

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

[Feed](Feed.md).[deserialize](Feed.md#deserialize)

#### Defined in

[src/core/feed.ts:79](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L79)

___

### isMoreAvailable

▸ **isMoreAvailable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Feed](Feed.md).[isMoreAvailable](Feed.md#ismoreavailable)

#### Defined in

[src/core/feed.ts:87](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L87)

___

### items

▸ **items**(): `Promise`<[`MediaCommentsFeedResponseCommentsItem`](../../interfaces/index/MediaCommentsFeedResponseCommentsItem.md)[]\>

#### Returns

`Promise`<[`MediaCommentsFeedResponseCommentsItem`](../../interfaces/index/MediaCommentsFeedResponseCommentsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/media-comments.feed.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/media-comments.feed.ts#L31)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`MediaCommentsFeedResponseCommentsItem`](../../interfaces/index/MediaCommentsFeedResponseCommentsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`MediaCommentsFeedResponseCommentsItem`](../../interfaces/index/MediaCommentsFeedResponseCommentsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`MediaCommentsFeedResponse`](../../interfaces/index/MediaCommentsFeedResponse.md)\>

#### Returns

`Promise`<[`MediaCommentsFeedResponse`](../../interfaces/index/MediaCommentsFeedResponse.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/media-comments.feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/media-comments.feed.ts#L18)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[Feed](Feed.md).[serialize](Feed.md#serialize)

#### Defined in

[src/core/feed.ts:75](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L75)

___

### toPlain

▸ **toPlain**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

[Feed](Feed.md).[toPlain](Feed.md#toplain)

#### Defined in

[src/core/feed.ts:83](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L83)
