[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / SavedFeed

# Class: SavedFeed

[feeds](../../modules/feeds.md).SavedFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`SavedFeedResponseRootObject`](../../interfaces/responses/SavedFeedResponseRootObject.md), [`SavedFeedResponseMedia`](../../interfaces/responses/SavedFeedResponseMedia.md)\>

  ↳ **`SavedFeed`**

## Table of contents

### Constructors

- [constructor](SavedFeed.md#constructor)

### Properties

- [attemptOptions](SavedFeed.md#attemptoptions)

### Accessors

- [items$](SavedFeed.md#items$)
- [state](SavedFeed.md#state)

### Methods

- [deserialize](SavedFeed.md#deserialize)
- [isMoreAvailable](SavedFeed.md#ismoreavailable)
- [items](SavedFeed.md#items)
- [observable](SavedFeed.md#observable)
- [request](SavedFeed.md#request)
- [serialize](SavedFeed.md#serialize)
- [toPlain](SavedFeed.md#toplain)

## Constructors

### constructor

• **new SavedFeed**(`client`)

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
| `body` | [`SavedFeedResponseRootObject`](../../interfaces/responses/SavedFeedResponseRootObject.md) |

#### Returns

`void`

#### Defined in

[src/feeds/saved.feed.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/saved.feed.ts#L9)

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

▸ **items**(): `Promise`<[`SavedFeedResponseMedia`](../../interfaces/responses/SavedFeedResponseMedia.md)[]\>

#### Returns

`Promise`<[`SavedFeedResponseMedia`](../../interfaces/responses/SavedFeedResponseMedia.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/saved.feed.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/saved.feed.ts#L26)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`SavedFeedResponseMedia`](../../interfaces/responses/SavedFeedResponseMedia.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`SavedFeedResponseMedia`](../../interfaces/responses/SavedFeedResponseMedia.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`SavedFeedResponseRootObject`](../../interfaces/responses/SavedFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`SavedFeedResponseRootObject`](../../interfaces/responses/SavedFeedResponseRootObject.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/saved.feed.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/saved.feed.ts#L14)

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
