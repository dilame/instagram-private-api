[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / TimelineFeed

# Class: TimelineFeed

[feeds](../../modules/feeds.md).TimelineFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`TimelineFeedResponse`](../../interfaces/responses/TimelineFeedResponse.md), [`TimelineFeedResponseMedia_or_ad`](../../interfaces/responses/TimelineFeedResponseMedia_or_ad.md)\>

  ↳ **`TimelineFeed`**

## Table of contents

### Constructors

- [constructor](TimelineFeed.md#constructor)

### Properties

- [attemptOptions](TimelineFeed.md#attemptoptions)
- [reason](TimelineFeed.md#reason)
- [tag](TimelineFeed.md#tag)

### Accessors

- [items$](TimelineFeed.md#items$)
- [state](TimelineFeed.md#state)

### Methods

- [deserialize](TimelineFeed.md#deserialize)
- [isMoreAvailable](TimelineFeed.md#ismoreavailable)
- [items](TimelineFeed.md#items)
- [observable](TimelineFeed.md#observable)
- [request](TimelineFeed.md#request)
- [serialize](TimelineFeed.md#serialize)
- [toPlain](TimelineFeed.md#toplain)

## Constructors

### constructor

• **new TimelineFeed**(`client`)

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

### reason

• **reason**: [`TimelineFeedReason`](../../modules/types.md#timelinefeedreason)

#### Defined in

[src/feeds/timeline.feed.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/timeline.feed.ts#L11)

___

### tag

• **tag**: `string`

#### Defined in

[src/feeds/timeline.feed.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/timeline.feed.ts#L8)

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
| `body` | `any` |

#### Returns

`void`

#### Defined in

[src/feeds/timeline.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/timeline.feed.ts#L12)

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

▸ **items**(): `Promise`<[`TimelineFeedResponseMedia_or_ad`](../../interfaces/responses/TimelineFeedResponseMedia_or_ad.md)[]\>

#### Returns

`Promise`<[`TimelineFeedResponseMedia_or_ad`](../../interfaces/responses/TimelineFeedResponseMedia_or_ad.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/timeline.feed.ts:66](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/timeline.feed.ts#L66)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`TimelineFeedResponseMedia_or_ad`](../../interfaces/responses/TimelineFeedResponseMedia_or_ad.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`TimelineFeedResponseMedia_or_ad`](../../interfaces/responses/TimelineFeedResponseMedia_or_ad.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(`options?`): `Promise`<[`TimelineFeedResponse`](../../interfaces/responses/TimelineFeedResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TimelineFeedsOptions`](../../interfaces/types/TimelineFeedsOptions.md) |

#### Returns

`Promise`<[`TimelineFeedResponse`](../../interfaces/responses/TimelineFeedResponse.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/timeline.feed.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/timeline.feed.ts#L17)

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
