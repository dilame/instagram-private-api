[instagram-private-api](../../README.md) / [index](../../modules/index.md) / TimelineFeed

# Class: TimelineFeed

[index](../../modules/index.md).TimelineFeed

## Hierarchy

- [`Feed`](Feed.md)<[`TimelineFeedResponse`](../../interfaces/index/TimelineFeedResponse.md), [`TimelineFeedResponseMedia_or_ad`](../../interfaces/index/TimelineFeedResponseMedia_or_ad.md)\>

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

### reason

• **reason**: [`TimelineFeedReason`](../../modules/index.md#timelinefeedreason)

#### Defined in

[src/feeds/timeline.feed.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/timeline.feed.ts#L11)

___

### tag

• **tag**: `string`

#### Defined in

[src/feeds/timeline.feed.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/timeline.feed.ts#L8)

## Accessors

### items$

• `get` **items$**(): `Observable`<`Item`[]\>

#### Returns

`Observable`<`Item`[]\>

#### Defined in

[src/core/feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L18)

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

[src/feeds/timeline.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/timeline.feed.ts#L12)

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

▸ **items**(): `Promise`<[`TimelineFeedResponseMedia_or_ad`](../../interfaces/index/TimelineFeedResponseMedia_or_ad.md)[]\>

#### Returns

`Promise`<[`TimelineFeedResponseMedia_or_ad`](../../interfaces/index/TimelineFeedResponseMedia_or_ad.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/timeline.feed.ts:66](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/timeline.feed.ts#L66)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`TimelineFeedResponseMedia_or_ad`](../../interfaces/index/TimelineFeedResponseMedia_or_ad.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`TimelineFeedResponseMedia_or_ad`](../../interfaces/index/TimelineFeedResponseMedia_or_ad.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(`options?`): `Promise`<[`TimelineFeedResponse`](../../interfaces/index/TimelineFeedResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TimelineFeedsOptions`](../../interfaces/index/TimelineFeedsOptions.md) |

#### Returns

`Promise`<[`TimelineFeedResponse`](../../interfaces/index/TimelineFeedResponse.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/timeline.feed.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/timeline.feed.ts#L17)

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
