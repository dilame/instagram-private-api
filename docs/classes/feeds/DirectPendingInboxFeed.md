[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / DirectPendingInboxFeed

# Class: DirectPendingInboxFeed

[feeds](../../modules/feeds.md).DirectPendingInboxFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`DirectInboxFeedResponse`](../../interfaces/responses/DirectInboxFeedResponse.md), [`DirectInboxFeedResponseThreadsItem`](../responses/DirectInboxFeedResponseThreadsItem.md)\>

  ↳ **`DirectPendingInboxFeed`**

## Table of contents

### Constructors

- [constructor](DirectPendingInboxFeed.md#constructor)

### Properties

- [attemptOptions](DirectPendingInboxFeed.md#attemptoptions)

### Accessors

- [items$](DirectPendingInboxFeed.md#items$)
- [state](DirectPendingInboxFeed.md#state)

### Methods

- [deserialize](DirectPendingInboxFeed.md#deserialize)
- [isMoreAvailable](DirectPendingInboxFeed.md#ismoreavailable)
- [items](DirectPendingInboxFeed.md#items)
- [observable](DirectPendingInboxFeed.md#observable)
- [records](DirectPendingInboxFeed.md#records)
- [request](DirectPendingInboxFeed.md#request)
- [serialize](DirectPendingInboxFeed.md#serialize)
- [toPlain](DirectPendingInboxFeed.md#toplain)

## Constructors

### constructor

• **new DirectPendingInboxFeed**(`client`)

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
| `body` | [`DirectInboxFeedResponse`](../../interfaces/responses/DirectInboxFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/direct-pending.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/feeds/direct-pending.feed.ts#L12)

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

▸ **items**(): `Promise`<[`DirectInboxFeedResponseThreadsItem`](../responses/DirectInboxFeedResponseThreadsItem.md)[]\>

#### Returns

`Promise`<[`DirectInboxFeedResponseThreadsItem`](../responses/DirectInboxFeedResponseThreadsItem.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/direct-pending.feed.ts:35](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/feeds/direct-pending.feed.ts#L35)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`DirectInboxFeedResponseThreadsItem`](../responses/DirectInboxFeedResponseThreadsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`DirectInboxFeedResponseThreadsItem`](../responses/DirectInboxFeedResponseThreadsItem.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/core/feed.ts#L21)

___

### records

▸ **records**(): `Promise`<[`DirectThreadEntity`](../entities/DirectThreadEntity.md)[]\>

#### Returns

`Promise`<[`DirectThreadEntity`](../entities/DirectThreadEntity.md)[]\>

#### Defined in

[src/feeds/direct-pending.feed.ts:40](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/feeds/direct-pending.feed.ts#L40)

___

### request

▸ **request**(): `Promise`<[`DirectInboxFeedResponse`](../../interfaces/responses/DirectInboxFeedResponse.md)\>

#### Returns

`Promise`<[`DirectInboxFeedResponse`](../../interfaces/responses/DirectInboxFeedResponse.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/direct-pending.feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/4971f34/src/feeds/direct-pending.feed.ts#L18)

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
