[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / LikedFeed

# Class: LikedFeed

[feeds](../../modules/feeds.md).LikedFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`LikedFeedResponseRootObject`](../../interfaces/responses/LikedFeedResponseRootObject.md), [`LikedFeedResponseItemsItem`](../../interfaces/responses/LikedFeedResponseItemsItem.md)\>

  ↳ **`LikedFeed`**

## Table of contents

### Constructors

- [constructor](LikedFeed.md#constructor)

### Properties

- [attemptOptions](LikedFeed.md#attemptoptions)

### Accessors

- [items$](LikedFeed.md#items$)

### Methods

- [deserialize](LikedFeed.md#deserialize)
- [isMoreAvailable](LikedFeed.md#ismoreavailable)
- [items](LikedFeed.md#items)
- [observable](LikedFeed.md#observable)
- [request](LikedFeed.md#request)
- [serialize](LikedFeed.md#serialize)
- [toPlain](LikedFeed.md#toplain)

## Constructors

### constructor

• **new LikedFeed**(`client`)

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

▸ **items**(): `Promise`<[`LikedFeedResponseItemsItem`](../../interfaces/responses/LikedFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`LikedFeedResponseItemsItem`](../../interfaces/responses/LikedFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/liked.feed.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/liked.feed.ts#L9)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`LikedFeedResponseItemsItem`](../../interfaces/responses/LikedFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`LikedFeedResponseItemsItem`](../../interfaces/responses/LikedFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`LikedFeedResponseRootObject`](../../interfaces/responses/LikedFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`LikedFeedResponseRootObject`](../../interfaces/responses/LikedFeedResponseRootObject.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/liked.feed.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/liked.feed.ts#L14)

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
