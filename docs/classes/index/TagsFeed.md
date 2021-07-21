[instagram-private-api](../../README.md) / [index](../../modules/index.md) / TagsFeed

# Class: TagsFeed

[index](../../modules/index.md).TagsFeed

## Hierarchy

- [`Feed`](Feed.md)<[`TagsFeedResponse`](../../interfaces/index/TagsFeedResponse.md), [`TagsFeedResponseMedia`](../../interfaces/index/TagsFeedResponseMedia.md)\>

  ↳ **`TagsFeed`**

## Table of contents

### Constructors

- [constructor](TagsFeed.md#constructor)

### Properties

- [attemptOptions](TagsFeed.md#attemptoptions)
- [tab](TagsFeed.md#tab)
- [tag](TagsFeed.md#tag)

### Accessors

- [items$](TagsFeed.md#items$)

### Methods

- [deserialize](TagsFeed.md#deserialize)
- [isMoreAvailable](TagsFeed.md#ismoreavailable)
- [items](TagsFeed.md#items)
- [observable](TagsFeed.md#observable)
- [request](TagsFeed.md#request)
- [serialize](TagsFeed.md#serialize)
- [toPlain](TagsFeed.md#toplain)

## Constructors

### constructor

• **new TagsFeed**(`client`)

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

### tab

• **tab**: ``"recent"`` \| ``"top"`` \| ``"places"``

#### Defined in

[src/feeds/tags.feed.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/tags.feed.ts#L8)

___

### tag

• **tag**: `string`

#### Defined in

[src/feeds/tags.feed.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/tags.feed.ts#L7)

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

#### Inherited from

[Feed](Feed.md).[isMoreAvailable](Feed.md#ismoreavailable)

#### Defined in

[src/core/feed.ts:87](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L87)

___

### items

▸ **items**(): `Promise`<[`TagsFeedResponseMedia`](../../interfaces/index/TagsFeedResponseMedia.md)[]\>

#### Returns

`Promise`<[`TagsFeedResponseMedia`](../../interfaces/index/TagsFeedResponseMedia.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/tags.feed.ts:41](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/tags.feed.ts#L41)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`TagsFeedResponseMedia`](../../interfaces/index/TagsFeedResponseMedia.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`TagsFeedResponseMedia`](../../interfaces/index/TagsFeedResponseMedia.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`TagsFeedResponse`](../../interfaces/index/TagsFeedResponse.md)\>

#### Returns

`Promise`<[`TagsFeedResponse`](../../interfaces/index/TagsFeedResponse.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/tags.feed.ts:23](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/tags.feed.ts#L23)

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
