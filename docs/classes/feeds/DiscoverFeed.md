[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / DiscoverFeed

# Class: DiscoverFeed

[feeds](../../modules/feeds.md).DiscoverFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`DiscoverFeedResponseRootObject`](../../interfaces/responses/DiscoverFeedResponseRootObject.md), [`DiscoverFeedResponseUser`](../responses/DiscoverFeedResponseUser.md)\>

  ↳ **`DiscoverFeed`**

## Table of contents

### Constructors

- [constructor](DiscoverFeed.md#constructor)

### Properties

- [attemptOptions](DiscoverFeed.md#attemptoptions)

### Accessors

- [items$](DiscoverFeed.md#items$)
- [state](DiscoverFeed.md#state)

### Methods

- [deserialize](DiscoverFeed.md#deserialize)
- [isMoreAvailable](DiscoverFeed.md#ismoreavailable)
- [items](DiscoverFeed.md#items)
- [observable](DiscoverFeed.md#observable)
- [request](DiscoverFeed.md#request)
- [serialize](DiscoverFeed.md#serialize)
- [toPlain](DiscoverFeed.md#toplain)

## Constructors

### constructor

• **new DiscoverFeed**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

[Feed](../index/Feed.md).[constructor](../index/Feed.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/core/repository.ts#L7)

## Properties

### attemptOptions

• **attemptOptions**: `Partial`<`AttemptOptions`<`any`\>\>

#### Inherited from

[Feed](../index/Feed.md).[attemptOptions](../index/Feed.md#attemptoptions)

#### Defined in

[src/core/feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/core/feed.ts#L10)

## Accessors

### items$

• `get` **items$**(): `Observable`<`Item`[]\>

#### Returns

`Observable`<`Item`[]\>

#### Defined in

[src/core/feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/core/feed.ts#L18)

___

### state

• `set` **state**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`DiscoverFeedResponseRootObject`](../../interfaces/responses/DiscoverFeedResponseRootObject.md) |

#### Returns

`void`

#### Defined in

[src/feeds/discover.feed.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/feeds/discover.feed.ts#L9)

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

[src/core/feed.ts:79](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/core/feed.ts#L79)

___

### isMoreAvailable

▸ **isMoreAvailable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Feed](../index/Feed.md).[isMoreAvailable](../index/Feed.md#ismoreavailable)

#### Defined in

[src/core/feed.ts:87](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/core/feed.ts#L87)

___

### items

▸ **items**(): `Promise`<[`DiscoverFeedResponseUser`](../responses/DiscoverFeedResponseUser.md)[]\>

#### Returns

`Promise`<[`DiscoverFeedResponseUser`](../responses/DiscoverFeedResponseUser.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/discover.feed.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/feeds/discover.feed.ts#L31)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`DiscoverFeedResponseUser`](../responses/DiscoverFeedResponseUser.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`DiscoverFeedResponseUser`](../responses/DiscoverFeedResponseUser.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`DiscoverFeedResponseRootObject`](../../interfaces/responses/DiscoverFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`DiscoverFeedResponseRootObject`](../../interfaces/responses/DiscoverFeedResponseRootObject.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/discover.feed.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/feeds/discover.feed.ts#L14)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[Feed](../index/Feed.md).[serialize](../index/Feed.md#serialize)

#### Defined in

[src/core/feed.ts:75](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/core/feed.ts#L75)

___

### toPlain

▸ **toPlain**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

[Feed](../index/Feed.md).[toPlain](../index/Feed.md#toplain)

#### Defined in

[src/core/feed.ts:83](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/core/feed.ts#L83)
