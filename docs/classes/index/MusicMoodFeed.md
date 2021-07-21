[instagram-private-api](../../README.md) / [index](../../modules/index.md) / MusicMoodFeed

# Class: MusicMoodFeed

[index](../../modules/index.md).MusicMoodFeed

## Hierarchy

- [`Feed`](Feed.md)<[`MusicMoodFeedResponseRootObject`](../../interfaces/index/MusicMoodFeedResponseRootObject.md), [`MusicMoodFeedResponseItemsItem`](../../interfaces/index/MusicMoodFeedResponseItemsItem.md)\>

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

• **id**: `string` \| `number`

#### Defined in

[src/feeds/music-mood.feed.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-mood.feed.ts#L13)

___

### product

• **product**: `string`

#### Defined in

[src/feeds/music-mood.feed.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-mood.feed.ts#L11)

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

[src/feeds/music-mood.feed.ts:41](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-mood.feed.ts#L41)

___

### items

▸ **items**(): `Promise`<[`MusicMoodFeedResponseItemsItem`](../../interfaces/index/MusicMoodFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`MusicMoodFeedResponseItemsItem`](../../interfaces/index/MusicMoodFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/music-mood.feed.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-mood.feed.ts#L15)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`MusicMoodFeedResponseItemsItem`](../../interfaces/index/MusicMoodFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`MusicMoodFeedResponseItemsItem`](../../interfaces/index/MusicMoodFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`MusicMoodFeedResponseRootObject`](../../interfaces/index/MusicMoodFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`MusicMoodFeedResponseRootObject`](../../interfaces/index/MusicMoodFeedResponseRootObject.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/music-mood.feed.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-mood.feed.ts#L20)

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
