[instagram-private-api](../../README.md) / [index](../../modules/index.md) / DirectInboxFeed

# Class: DirectInboxFeed

[index](../../modules/index.md).DirectInboxFeed

## Hierarchy

- [`Feed`](Feed.md)<[`DirectInboxFeedResponse`](../../interfaces/index/DirectInboxFeedResponse.md), [`DirectInboxFeedResponseThreadsItem`](DirectInboxFeedResponseThreadsItem.md)\>

  ↳ **`DirectInboxFeed`**

## Table of contents

### Constructors

- [constructor](DirectInboxFeed.md#constructor)

### Properties

- [attemptOptions](DirectInboxFeed.md#attemptoptions)

### Accessors

- [items$](DirectInboxFeed.md#items$)
- [state](DirectInboxFeed.md#state)

### Methods

- [deserialize](DirectInboxFeed.md#deserialize)
- [isMoreAvailable](DirectInboxFeed.md#ismoreavailable)
- [items](DirectInboxFeed.md#items)
- [observable](DirectInboxFeed.md#observable)
- [records](DirectInboxFeed.md#records)
- [request](DirectInboxFeed.md#request)
- [serialize](DirectInboxFeed.md#serialize)
- [toPlain](DirectInboxFeed.md#toplain)

## Constructors

### constructor

• **new DirectInboxFeed**(`client`)

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

[src/feeds/direct-inbox.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-inbox.feed.ts#L12)

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

[src/feeds/direct-inbox.feed.ts:35](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-inbox.feed.ts#L35)

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

[src/feeds/direct-inbox.feed.ts:40](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-inbox.feed.ts#L40)

___

### request

▸ **request**(): `Promise`<[`DirectInboxFeedResponse`](../../interfaces/index/DirectInboxFeedResponse.md)\>

#### Returns

`Promise`<[`DirectInboxFeedResponse`](../../interfaces/index/DirectInboxFeedResponse.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/direct-inbox.feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/direct-inbox.feed.ts#L18)

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
