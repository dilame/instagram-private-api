[instagram-private-api](../../README.md) / [index](../../modules/index.md) / MusicGenreFeed

# Class: MusicGenreFeed

[index](../../modules/index.md).MusicGenreFeed

## Hierarchy

- [`Feed`](Feed.md)<[`MusicGenreFeedResponseRootObject`](../../interfaces/index/MusicGenreFeedResponseRootObject.md), [`MusicGenreFeedResponseItemsItem`](../../interfaces/index/MusicGenreFeedResponseItemsItem.md)\>

  ↳ **`MusicGenreFeed`**

## Table of contents

### Constructors

- [constructor](MusicGenreFeed.md#constructor)

### Properties

- [attemptOptions](MusicGenreFeed.md#attemptoptions)
- [id](MusicGenreFeed.md#id)
- [product](MusicGenreFeed.md#product)

### Accessors

- [items$](MusicGenreFeed.md#items$)

### Methods

- [deserialize](MusicGenreFeed.md#deserialize)
- [isMoreAvailable](MusicGenreFeed.md#ismoreavailable)
- [items](MusicGenreFeed.md#items)
- [observable](MusicGenreFeed.md#observable)
- [request](MusicGenreFeed.md#request)
- [serialize](MusicGenreFeed.md#serialize)
- [toPlain](MusicGenreFeed.md#toplain)

## Constructors

### constructor

• **new MusicGenreFeed**(`client`)

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

[src/feeds/music-genre.feed.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-genre.feed.ts#L13)

___

### product

• **product**: `string`

#### Defined in

[src/feeds/music-genre.feed.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-genre.feed.ts#L11)

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

[src/feeds/music-genre.feed.ts:41](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-genre.feed.ts#L41)

___

### items

▸ **items**(): `Promise`<[`MusicGenreFeedResponseItemsItem`](../../interfaces/index/MusicGenreFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`MusicGenreFeedResponseItemsItem`](../../interfaces/index/MusicGenreFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/music-genre.feed.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-genre.feed.ts#L15)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`MusicGenreFeedResponseItemsItem`](../../interfaces/index/MusicGenreFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`MusicGenreFeedResponseItemsItem`](../../interfaces/index/MusicGenreFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`MusicGenreFeedResponseRootObject`](../../interfaces/index/MusicGenreFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`MusicGenreFeedResponseRootObject`](../../interfaces/index/MusicGenreFeedResponseRootObject.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/music-genre.feed.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/music-genre.feed.ts#L20)

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
