[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / PendingFriendshipsFeed

# Class: PendingFriendshipsFeed

[feeds](../../modules/feeds.md).PendingFriendshipsFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`PendingFriendshipsFeedResponse`](../../interfaces/responses/PendingFriendshipsFeedResponse.md), [`PendingFriendshipsFeedResponseUsersItem`](../responses/PendingFriendshipsFeedResponseUsersItem.md)\>

  ↳ **`PendingFriendshipsFeed`**

## Table of contents

### Constructors

- [constructor](PendingFriendshipsFeed.md#constructor)

### Properties

- [attemptOptions](PendingFriendshipsFeed.md#attemptoptions)

### Accessors

- [items$](PendingFriendshipsFeed.md#items$)
- [state](PendingFriendshipsFeed.md#state)

### Methods

- [deserialize](PendingFriendshipsFeed.md#deserialize)
- [isMoreAvailable](PendingFriendshipsFeed.md#ismoreavailable)
- [items](PendingFriendshipsFeed.md#items)
- [observable](PendingFriendshipsFeed.md#observable)
- [request](PendingFriendshipsFeed.md#request)
- [serialize](PendingFriendshipsFeed.md#serialize)
- [toPlain](PendingFriendshipsFeed.md#toplain)

## Constructors

### constructor

• **new PendingFriendshipsFeed**(`client`)

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
| `body` | [`PendingFriendshipsFeedResponse`](../../interfaces/responses/PendingFriendshipsFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/account-friendships.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-friendships.feed.ts#L12)

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

▸ **items**(): `Promise`<[`PendingFriendshipsFeedResponseUsersItem`](../responses/PendingFriendshipsFeedResponseUsersItem.md)[]\>

#### Returns

`Promise`<[`PendingFriendshipsFeedResponseUsersItem`](../responses/PendingFriendshipsFeedResponseUsersItem.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/account-friendships.feed.ts:29](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-friendships.feed.ts#L29)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`PendingFriendshipsFeedResponseUsersItem`](../responses/PendingFriendshipsFeedResponseUsersItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`PendingFriendshipsFeedResponseUsersItem`](../responses/PendingFriendshipsFeedResponseUsersItem.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`PendingFriendshipsFeedResponse`](../../interfaces/responses/PendingFriendshipsFeedResponse.md)\>

#### Returns

`Promise`<[`PendingFriendshipsFeedResponse`](../../interfaces/responses/PendingFriendshipsFeedResponse.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/account-friendships.feed.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-friendships.feed.ts#L17)

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
