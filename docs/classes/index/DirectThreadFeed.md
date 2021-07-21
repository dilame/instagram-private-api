[instagram-private-api](../../README.md) / [index](../../modules/index.md) / DirectThreadFeed

# Class: DirectThreadFeed

[index](../../modules/index.md).DirectThreadFeed

## Hierarchy

- [`Feed`](Feed.md)<[`DirectThreadFeedResponse`](../../interfaces/index/DirectThreadFeedResponse.md), [`DirectThreadFeedResponseItemsItem`](../../interfaces/index/DirectThreadFeedResponseItemsItem.md)\>

  ↳ **`DirectThreadFeed`**

## Table of contents

### Constructors

- [constructor](DirectThreadFeed.md#constructor)

### Properties

- [attemptOptions](DirectThreadFeed.md#attemptoptions)
- [cursor](DirectThreadFeed.md#cursor)
- [id](DirectThreadFeed.md#id)
- [seqId](DirectThreadFeed.md#seqid)

### Accessors

- [items$](DirectThreadFeed.md#items$)
- [state](DirectThreadFeed.md#state)

### Methods

- [deserialize](DirectThreadFeed.md#deserialize)
- [isMoreAvailable](DirectThreadFeed.md#ismoreavailable)
- [items](DirectThreadFeed.md#items)
- [observable](DirectThreadFeed.md#observable)
- [request](DirectThreadFeed.md#request)
- [serialize](DirectThreadFeed.md#serialize)
- [toPlain](DirectThreadFeed.md#toplain)

## Constructors

### constructor

• **new DirectThreadFeed**(`client`)

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

### cursor

• **cursor**: `string`

#### Defined in

[src/feeds/direct-thread.feed.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-thread.feed.ts#L9)

___

### id

• **id**: `string`

#### Defined in

[src/feeds/direct-thread.feed.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-thread.feed.ts#L6)

___

### seqId

• **seqId**: `number`

#### Defined in

[src/feeds/direct-thread.feed.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-thread.feed.ts#L7)

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
| `body` | [`DirectThreadFeedResponse`](../../interfaces/index/DirectThreadFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/direct-thread.feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-thread.feed.ts#L10)

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

▸ **items**(): `Promise`<[`DirectThreadFeedResponseItemsItem`](../../interfaces/index/DirectThreadFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`DirectThreadFeedResponseItemsItem`](../../interfaces/index/DirectThreadFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/direct-thread.feed.ts:29](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-thread.feed.ts#L29)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`DirectThreadFeedResponseItemsItem`](../../interfaces/index/DirectThreadFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`DirectThreadFeedResponseItemsItem`](../../interfaces/index/DirectThreadFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`DirectThreadFeedResponse`](../../interfaces/index/DirectThreadFeedResponse.md)\>

#### Returns

`Promise`<[`DirectThreadFeedResponse`](../../interfaces/index/DirectThreadFeedResponse.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/direct-thread.feed.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-thread.feed.ts#L14)

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
