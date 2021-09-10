[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / MusicMoodFeed

# Class: MusicMoodFeed

[feeds](../../modules/feeds.md).MusicMoodFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`MusicMoodFeedResponseRootObject`](../../interfaces/responses/MusicMoodFeedResponseRootObject.md), [`MusicMoodFeedResponseItemsItem`](../../interfaces/responses/MusicMoodFeedResponseItemsItem.md)\>

  ↳ **`MusicMoodFeed`**

## Table of contents

### Constructors

- [constructor](MusicMoodFeed.md#constructor)

### Properties

- [attemptOptions](MusicMoodFeed.md#attemptoptions)
- [id](MusicMoodFeed.md#id)
- [product](MusicMoodFeed.md#product)

### Accessors

- [items$](MusicMoodFeed.md#items$)

### Methods

- [deserialize](MusicMoodFeed.md#deserialize)
- [isMoreAvailable](MusicMoodFeed.md#ismoreavailable)
- [items](MusicMoodFeed.md#items)
- [observable](MusicMoodFeed.md#observable)
- [request](MusicMoodFeed.md#request)
- [serialize](MusicMoodFeed.md#serialize)
- [toPlain](MusicMoodFeed.md#toplain)

## Constructors

### constructor

• **new MusicMoodFeed**(`client`)

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

[src/feeds/music-mood.feed.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/music-mood.feed.ts#L13)

___

### product

• **product**: `string`

#### Defined in

[src/feeds/music-mood.feed.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/music-mood.feed.ts#L11)

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

#### Overrides

[Feed](../index/Feed.md).[isMoreAvailable](../index/Feed.md#ismoreavailable)

#### Defined in

[src/feeds/music-mood.feed.ts:41](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/music-mood.feed.ts#L41)

___

### items

▸ **items**(): `Promise`<[`MusicMoodFeedResponseItemsItem`](../../interfaces/responses/MusicMoodFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`MusicMoodFeedResponseItemsItem`](../../interfaces/responses/MusicMoodFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/music-mood.feed.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/music-mood.feed.ts#L15)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`MusicMoodFeedResponseItemsItem`](../../interfaces/responses/MusicMoodFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`MusicMoodFeedResponseItemsItem`](../../interfaces/responses/MusicMoodFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`MusicMoodFeedResponseRootObject`](../../interfaces/responses/MusicMoodFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`MusicMoodFeedResponseRootObject`](../../interfaces/responses/MusicMoodFeedResponseRootObject.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/music-mood.feed.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/music-mood.feed.ts#L20)

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
