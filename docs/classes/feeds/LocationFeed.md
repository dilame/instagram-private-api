[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / LocationFeed

# Class: LocationFeed

[feeds](../../modules/feeds.md).LocationFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`LocationFeedResponse`](../../interfaces/responses/LocationFeedResponse.md), [`LocationFeedResponseMedia`](../../interfaces/responses/LocationFeedResponseMedia.md)\>

  ↳ **`LocationFeed`**

## Table of contents

### Constructors

- [constructor](LocationFeed.md#constructor)

### Properties

- [attemptOptions](LocationFeed.md#attemptoptions)
- [id](LocationFeed.md#id)
- [tab](LocationFeed.md#tab)

### Accessors

- [items$](LocationFeed.md#items$)

### Methods

- [deserialize](LocationFeed.md#deserialize)
- [isMoreAvailable](LocationFeed.md#ismoreavailable)
- [items](LocationFeed.md#items)
- [observable](LocationFeed.md#observable)
- [request](LocationFeed.md#request)
- [serialize](LocationFeed.md#serialize)
- [toPlain](LocationFeed.md#toplain)

## Constructors

### constructor

• **new LocationFeed**(`client`)

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

• **id**: `string` \| `number`

#### Defined in

[src/feeds/location.feed.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/location.feed.ts#L7)

___

### tab

• **tab**: ``"recent"`` \| ``"ranked"``

#### Defined in

[src/feeds/location.feed.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/location.feed.ts#L8)

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

▸ **items**(): `Promise`<[`LocationFeedResponseMedia`](../../interfaces/responses/LocationFeedResponseMedia.md)[]\>

#### Returns

`Promise`<[`LocationFeedResponseMedia`](../../interfaces/responses/LocationFeedResponseMedia.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/location.feed.ts:41](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/location.feed.ts#L41)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`LocationFeedResponseMedia`](../../interfaces/responses/LocationFeedResponseMedia.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`LocationFeedResponseMedia`](../../interfaces/responses/LocationFeedResponseMedia.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`LocationFeedResponse`](../../interfaces/responses/LocationFeedResponse.md)\>

#### Returns

`Promise`<[`LocationFeedResponse`](../../interfaces/responses/LocationFeedResponse.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/location.feed.ts:23](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/location.feed.ts#L23)

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
