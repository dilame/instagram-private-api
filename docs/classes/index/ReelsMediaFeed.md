[instagram-private-api](../../README.md) / [index](../../modules/index.md) / ReelsMediaFeed

# Class: ReelsMediaFeed

[index](../../modules/index.md).ReelsMediaFeed

## Hierarchy

- [`Feed`](Feed.md)<[`ReelsMediaFeedResponseRootObject`](../../interfaces/index/ReelsMediaFeedResponseRootObject.md), [`ReelsMediaFeedResponseItem`](../../interfaces/index/ReelsMediaFeedResponseItem.md)\>

  ↳ **`ReelsMediaFeed`**

## Table of contents

### Constructors

- [constructor](ReelsMediaFeed.md#constructor)

### Properties

- [attemptOptions](ReelsMediaFeed.md#attemptoptions)
- [source](ReelsMediaFeed.md#source)
- [userIds](ReelsMediaFeed.md#userids)

### Accessors

- [items$](ReelsMediaFeed.md#items$)

### Methods

- [deserialize](ReelsMediaFeed.md#deserialize)
- [isMoreAvailable](ReelsMediaFeed.md#ismoreavailable)
- [items](ReelsMediaFeed.md#items)
- [observable](ReelsMediaFeed.md#observable)
- [request](ReelsMediaFeed.md#request)
- [serialize](ReelsMediaFeed.md#serialize)
- [toPlain](ReelsMediaFeed.md#toplain)

## Constructors

### constructor

• **new ReelsMediaFeed**(`client`)

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

### source

• **source**: `string` = `'feed_timeline'`

#### Defined in

[src/feeds/reels-media.feed.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/reels-media.feed.ts#L8)

___

### userIds

• **userIds**: (`string` \| `number`)[]

#### Defined in

[src/feeds/reels-media.feed.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/reels-media.feed.ts#L7)

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

▸ **items**(): `Promise`<[`ReelsMediaFeedResponseItem`](../../interfaces/index/ReelsMediaFeedResponseItem.md)[]\>

#### Returns

`Promise`<[`ReelsMediaFeedResponseItem`](../../interfaces/index/ReelsMediaFeedResponseItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/reels-media.feed.ts:29](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/reels-media.feed.ts#L29)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`ReelsMediaFeedResponseItem`](../../interfaces/index/ReelsMediaFeedResponseItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`ReelsMediaFeedResponseItem`](../../interfaces/index/ReelsMediaFeedResponseItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`ReelsMediaFeedResponseRootObject`](../../interfaces/index/ReelsMediaFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`ReelsMediaFeedResponseRootObject`](../../interfaces/index/ReelsMediaFeedResponseRootObject.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/reels-media.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/reels-media.feed.ts#L12)

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
