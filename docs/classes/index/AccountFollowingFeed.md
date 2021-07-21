[instagram-private-api](../../README.md) / [index](../../modules/index.md) / AccountFollowingFeed

# Class: AccountFollowingFeed

[index](../../modules/index.md).AccountFollowingFeed

## Hierarchy

- [`Feed`](Feed.md)<[`AccountFollowingFeedResponse`](../../interfaces/index/AccountFollowingFeedResponse.md), [`AccountFollowingFeedResponseUsersItem`](AccountFollowingFeedResponseUsersItem.md)\>

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

### enableGroups

• **enableGroups**: `boolean` = `true`

#### Defined in

[src/feeds/account-following.feed.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-following.feed.ts#L9)

___

### id

• **id**: `string` \| `number`

#### Defined in

[src/feeds/account-following.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-following.feed.ts#L12)

___

### includesHashtags

• **includesHashtags**: `boolean` = `true`

#### Defined in

[src/feeds/account-following.feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-following.feed.ts#L10)

___

### nextMaxId

• **nextMaxId**: `string`

#### Defined in

[src/feeds/account-following.feed.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-following.feed.ts#L14)

___

### order

• `Optional` **order**: ``"default"`` \| ``"date_followed_latest"`` \| ``"date_followed_earliest"`` = `'default'`

#### Defined in

[src/feeds/account-following.feed.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-following.feed.ts#L7)

___

### query

• **query**: `string` = `''`

#### Defined in

[src/feeds/account-following.feed.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-following.feed.ts#L8)

___

### searchSurface

• `Optional` **searchSurface**: `string`

#### Defined in

[src/feeds/account-following.feed.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-following.feed.ts#L6)

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
| `body` | [`AccountFollowingFeedResponse`](../../interfaces/index/AccountFollowingFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/account-following.feed.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-following.feed.ts#L16)

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

▸ **items**(): `Promise`<[`AccountFollowingFeedResponseUsersItem`](AccountFollowingFeedResponseUsersItem.md)[]\>

#### Returns

`Promise`<[`AccountFollowingFeedResponseUsersItem`](AccountFollowingFeedResponseUsersItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/account-following.feed.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-following.feed.ts#L38)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`AccountFollowingFeedResponseUsersItem`](AccountFollowingFeedResponseUsersItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`AccountFollowingFeedResponseUsersItem`](AccountFollowingFeedResponseUsersItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`AccountFollowingFeedResponse`](../../interfaces/index/AccountFollowingFeedResponse.md)\>

#### Returns

`Promise`<[`AccountFollowingFeedResponse`](../../interfaces/index/AccountFollowingFeedResponse.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/account-following.feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-following.feed.ts#L21)

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
