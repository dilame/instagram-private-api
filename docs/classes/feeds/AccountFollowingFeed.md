[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / AccountFollowingFeed

# Class: AccountFollowingFeed

[feeds](../../modules/feeds.md).AccountFollowingFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`AccountFollowingFeedResponse`](../../interfaces/responses/AccountFollowingFeedResponse.md), [`AccountFollowingFeedResponseUsersItem`](../responses/AccountFollowingFeedResponseUsersItem.md)\>

  ↳ **`AccountFollowingFeed`**

## Table of contents

### Constructors

- [constructor](AccountFollowingFeed.md#constructor)

### Properties

- [attemptOptions](AccountFollowingFeed.md#attemptoptions)
- [enableGroups](AccountFollowingFeed.md#enablegroups)
- [id](AccountFollowingFeed.md#id)
- [includesHashtags](AccountFollowingFeed.md#includeshashtags)
- [nextMaxId](AccountFollowingFeed.md#nextmaxid)
- [order](AccountFollowingFeed.md#order)
- [query](AccountFollowingFeed.md#query)
- [searchSurface](AccountFollowingFeed.md#searchsurface)

### Accessors

- [items$](AccountFollowingFeed.md#items$)
- [state](AccountFollowingFeed.md#state)

### Methods

- [deserialize](AccountFollowingFeed.md#deserialize)
- [isMoreAvailable](AccountFollowingFeed.md#ismoreavailable)
- [items](AccountFollowingFeed.md#items)
- [observable](AccountFollowingFeed.md#observable)
- [request](AccountFollowingFeed.md#request)
- [serialize](AccountFollowingFeed.md#serialize)
- [toPlain](AccountFollowingFeed.md#toplain)

## Constructors

### constructor

• **new AccountFollowingFeed**(`client`)

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

### enableGroups

• **enableGroups**: `boolean` = `true`

#### Defined in

[src/feeds/account-following.feed.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-following.feed.ts#L9)

___

### id

• **id**: `string` \| `number`

#### Defined in

[src/feeds/account-following.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-following.feed.ts#L12)

___

### includesHashtags

• **includesHashtags**: `boolean` = `true`

#### Defined in

[src/feeds/account-following.feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-following.feed.ts#L10)

___

### nextMaxId

• **nextMaxId**: `string`

#### Defined in

[src/feeds/account-following.feed.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-following.feed.ts#L14)

___

### order

• `Optional` **order**: ``"default"`` \| ``"date_followed_latest"`` \| ``"date_followed_earliest"`` = `'default'`

#### Defined in

[src/feeds/account-following.feed.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-following.feed.ts#L7)

___

### query

• **query**: `string` = `''`

#### Defined in

[src/feeds/account-following.feed.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-following.feed.ts#L8)

___

### searchSurface

• `Optional` **searchSurface**: `string`

#### Defined in

[src/feeds/account-following.feed.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-following.feed.ts#L6)

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
| `body` | [`AccountFollowingFeedResponse`](../../interfaces/responses/AccountFollowingFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/account-following.feed.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-following.feed.ts#L16)

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

▸ **items**(): `Promise`<[`AccountFollowingFeedResponseUsersItem`](../responses/AccountFollowingFeedResponseUsersItem.md)[]\>

#### Returns

`Promise`<[`AccountFollowingFeedResponseUsersItem`](../responses/AccountFollowingFeedResponseUsersItem.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/account-following.feed.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-following.feed.ts#L38)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`AccountFollowingFeedResponseUsersItem`](../responses/AccountFollowingFeedResponseUsersItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`AccountFollowingFeedResponseUsersItem`](../responses/AccountFollowingFeedResponseUsersItem.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`AccountFollowingFeedResponse`](../../interfaces/responses/AccountFollowingFeedResponse.md)\>

#### Returns

`Promise`<[`AccountFollowingFeedResponse`](../../interfaces/responses/AccountFollowingFeedResponse.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/account-following.feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/account-following.feed.ts#L21)

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
