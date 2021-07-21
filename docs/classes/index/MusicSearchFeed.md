[instagram-private-api](../../README.md) / [index](../../modules/index.md) / MusicSearchFeed

# Class: MusicSearchFeed

[index](../../modules/index.md).MusicSearchFeed

## Hierarchy

- [`Feed`](Feed.md)<[`MusicSearchFeedResponseRootObject`](../../interfaces/index/MusicSearchFeedResponseRootObject.md), [`MusicSearchFeedResponseItemsItem`](../../interfaces/index/MusicSearchFeedResponseItemsItem.md)\>

  ↳ **`MusicSearchFeed`**

## Table of contents

### Constructors

- [constructor](MusicSearchFeed.md#constructor)

### Properties

- [attemptOptions](MusicSearchFeed.md#attemptoptions)
- [product](MusicSearchFeed.md#product)
- [query](MusicSearchFeed.md#query)
- [searchSessionId](MusicSearchFeed.md#searchsessionid)

### Accessors

- [items$](MusicSearchFeed.md#items$)

### Methods

- [deserialize](MusicSearchFeed.md#deserialize)
- [isMoreAvailable](MusicSearchFeed.md#ismoreavailable)
- [items](MusicSearchFeed.md#items)
- [observable](MusicSearchFeed.md#observable)
- [request](MusicSearchFeed.md#request)
- [serialize](MusicSearchFeed.md#serialize)
- [toPlain](MusicSearchFeed.md#toplain)

## Constructors

### constructor

• **new MusicSearchFeed**(`client`)

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

[src/feeds/music-search.feed.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-search.feed.ts#L11)

___

### query

• **query**: `string`

#### Defined in

[src/feeds/music-search.feed.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-search.feed.ts#L13)

___

### searchSessionId

• **searchSessionId**: `string`

#### Defined in

[src/feeds/music-search.feed.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-search.feed.ts#L15)

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

[src/feeds/music-search.feed.ts:45](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-search.feed.ts#L45)

___

### items

▸ **items**(): `Promise`<[`MusicSearchFeedResponseItemsItem`](../../interfaces/index/MusicSearchFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`MusicSearchFeedResponseItemsItem`](../../interfaces/index/MusicSearchFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/music-search.feed.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-search.feed.ts#L17)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`MusicSearchFeedResponseItemsItem`](../../interfaces/index/MusicSearchFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`MusicSearchFeedResponseItemsItem`](../../interfaces/index/MusicSearchFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`MusicSearchFeedResponseRootObject`](../../interfaces/index/MusicSearchFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`MusicSearchFeedResponseRootObject`](../../interfaces/index/MusicSearchFeedResponseRootObject.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/music-search.feed.ts:22](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-search.feed.ts#L22)

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
