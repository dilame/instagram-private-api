[instagram-private-api](../../README.md) / [index](../../modules/index.md) / MusicTrendingFeed

# Class: MusicTrendingFeed

[index](../../modules/index.md).MusicTrendingFeed

## Hierarchy

- [`Feed`](Feed.md)<[`MusicTrendingFeedResponseRootObject`](../../interfaces/index/MusicTrendingFeedResponseRootObject.md), [`MusicTrendingFeedResponseItemsItem`](../../interfaces/index/MusicTrendingFeedResponseItemsItem.md)\>

  ↳ **`MusicTrendingFeed`**

## Table of contents

### Constructors

- [constructor](MusicTrendingFeed.md#constructor)

### Properties

- [attemptOptions](MusicTrendingFeed.md#attemptoptions)
- [product](MusicTrendingFeed.md#product)

### Accessors

- [items$](MusicTrendingFeed.md#items$)

### Methods

- [deserialize](MusicTrendingFeed.md#deserialize)
- [isMoreAvailable](MusicTrendingFeed.md#ismoreavailable)
- [items](MusicTrendingFeed.md#items)
- [observable](MusicTrendingFeed.md#observable)
- [request](MusicTrendingFeed.md#request)
- [serialize](MusicTrendingFeed.md#serialize)
- [toPlain](MusicTrendingFeed.md#toplain)

## Constructors

### constructor

• **new MusicTrendingFeed**(`client`)

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

### product

• **product**: `string`

#### Defined in

[src/feeds/music-trending.feed.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-trending.feed.ts#L11)

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

#### Inherited from

[Feed](Feed.md).[deserialize](Feed.md#deserialize)

#### Defined in

[src/core/feed.ts:79](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L79)

___

### isMoreAvailable

▸ **isMoreAvailable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Feed](Feed.md).[isMoreAvailable](Feed.md#ismoreavailable)

#### Defined in

[src/feeds/music-trending.feed.ts:39](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-trending.feed.ts#L39)

___

### items

▸ **items**(): `Promise`<[`MusicTrendingFeedResponseItemsItem`](../../interfaces/index/MusicTrendingFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`MusicTrendingFeedResponseItemsItem`](../../interfaces/index/MusicTrendingFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/music-trending.feed.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-trending.feed.ts#L13)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`MusicTrendingFeedResponseItemsItem`](../../interfaces/index/MusicTrendingFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`MusicTrendingFeedResponseItemsItem`](../../interfaces/index/MusicTrendingFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`MusicTrendingFeedResponseRootObject`](../../interfaces/index/MusicTrendingFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`MusicTrendingFeedResponseRootObject`](../../interfaces/index/MusicTrendingFeedResponseRootObject.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/music-trending.feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-trending.feed.ts#L18)

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
