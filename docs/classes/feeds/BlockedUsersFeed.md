[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / BlockedUsersFeed

# Class: BlockedUsersFeed

[feeds](../../modules/feeds.md).BlockedUsersFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`BlockedUsersFeedResponseRootObject`](../../interfaces/responses/BlockedUsersFeedResponseRootObject.md), [`BlockedUsersFeedResponseBlockedListItem`](../responses/BlockedUsersFeedResponseBlockedListItem.md)\>

  ↳ **`BlockedUsersFeed`**

## Table of contents

### Constructors

- [constructor](BlockedUsersFeed.md#constructor)

### Properties

- [attemptOptions](BlockedUsersFeed.md#attemptoptions)

### Accessors

- [items$](BlockedUsersFeed.md#items$)
- [state](BlockedUsersFeed.md#state)

### Methods

- [deserialize](BlockedUsersFeed.md#deserialize)
- [isMoreAvailable](BlockedUsersFeed.md#ismoreavailable)
- [items](BlockedUsersFeed.md#items)
- [observable](BlockedUsersFeed.md#observable)
- [request](BlockedUsersFeed.md#request)
- [serialize](BlockedUsersFeed.md#serialize)
- [toPlain](BlockedUsersFeed.md#toplain)

## Constructors

### constructor

• **new BlockedUsersFeed**(`client`)

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
| `body` | [`BlockedUsersFeedResponseRootObject`](../../interfaces/responses/BlockedUsersFeedResponseRootObject.md) |

#### Returns

`void`

#### Defined in

[src/feeds/blocked-users.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/blocked-users.feed.ts#L12)

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

▸ **items**(): `Promise`<[`BlockedUsersFeedResponseBlockedListItem`](../responses/BlockedUsersFeedResponseBlockedListItem.md)[]\>

#### Returns

`Promise`<[`BlockedUsersFeedResponseBlockedListItem`](../responses/BlockedUsersFeedResponseBlockedListItem.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/blocked-users.feed.ts:28](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/blocked-users.feed.ts#L28)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`BlockedUsersFeedResponseBlockedListItem`](../responses/BlockedUsersFeedResponseBlockedListItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`BlockedUsersFeedResponseBlockedListItem`](../responses/BlockedUsersFeedResponseBlockedListItem.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`BlockedUsersFeedResponseRootObject`](../../interfaces/responses/BlockedUsersFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`BlockedUsersFeedResponseRootObject`](../../interfaces/responses/BlockedUsersFeedResponseRootObject.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/blocked-users.feed.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/blocked-users.feed.ts#L17)

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
