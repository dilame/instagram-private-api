[instagram-private-api](../../README.md) / [index](../../modules/index.md) / DirectPendingInboxFeed

# Class: DirectPendingInboxFeed

[index](../../modules/index.md).DirectPendingInboxFeed

## Hierarchy

- [`Feed`](Feed.md)<[`DirectInboxFeedResponse`](../../interfaces/index/DirectInboxFeedResponse.md), [`DirectInboxFeedResponseThreadsItem`](DirectInboxFeedResponseThreadsItem.md)\>

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
| `body` | [`DirectInboxFeedResponse`](../../interfaces/index/DirectInboxFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/direct-pending.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-pending.feed.ts#L12)

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

▸ **items**(): `Promise`<[`DirectInboxFeedResponseThreadsItem`](DirectInboxFeedResponseThreadsItem.md)[]\>

#### Returns

`Promise`<[`DirectInboxFeedResponseThreadsItem`](DirectInboxFeedResponseThreadsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/direct-pending.feed.ts:35](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-pending.feed.ts#L35)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`DirectInboxFeedResponseThreadsItem`](DirectInboxFeedResponseThreadsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`DirectInboxFeedResponseThreadsItem`](DirectInboxFeedResponseThreadsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### records

▸ **records**(): `Promise`<[`DirectThreadEntity`](DirectThreadEntity.md)[]\>

#### Returns

`Promise`<[`DirectThreadEntity`](DirectThreadEntity.md)[]\>

#### Defined in

[src/feeds/direct-pending.feed.ts:40](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-pending.feed.ts#L40)

___

### request

▸ **request**(): `Promise`<[`DirectInboxFeedResponse`](../../interfaces/index/DirectInboxFeedResponse.md)\>

#### Returns

`Promise`<[`DirectInboxFeedResponse`](../../interfaces/index/DirectInboxFeedResponse.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/direct-pending.feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-pending.feed.ts#L18)

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
