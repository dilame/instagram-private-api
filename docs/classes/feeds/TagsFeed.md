[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / TagsFeed

# Class: TagsFeed

[feeds](../../modules/feeds.md).TagsFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`TagsFeedResponse`](../../interfaces/responses/TagsFeedResponse.md), [`TagsFeedResponseMedia`](../../interfaces/responses/TagsFeedResponseMedia.md)\>

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

### tab

• **tab**: ``"top"`` \| ``"recent"`` \| ``"places"``

#### Defined in

[src/feeds/tags.feed.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/tags.feed.ts#L8)

___

### tag

• **tag**: `string`

#### Defined in

[src/feeds/tags.feed.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/tags.feed.ts#L7)

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

▸ **items**(): `Promise`<[`TagsFeedResponseMedia`](../../interfaces/responses/TagsFeedResponseMedia.md)[]\>

#### Returns

`Promise`<[`TagsFeedResponseMedia`](../../interfaces/responses/TagsFeedResponseMedia.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/tags.feed.ts:41](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/tags.feed.ts#L41)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`TagsFeedResponseMedia`](../../interfaces/responses/TagsFeedResponseMedia.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`TagsFeedResponseMedia`](../../interfaces/responses/TagsFeedResponseMedia.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`TagsFeedResponse`](../../interfaces/responses/TagsFeedResponse.md)\>

#### Returns

`Promise`<[`TagsFeedResponse`](../../interfaces/responses/TagsFeedResponse.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/tags.feed.ts:23](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/tags.feed.ts#L23)

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
