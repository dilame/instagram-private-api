[instagram-private-api](../../README.md) / [index](../../modules/index.md) / AccountFollowersFeed

# Class: AccountFollowersFeed

[index](../../modules/index.md).AccountFollowersFeed

## Hierarchy

- [`Feed`](Feed.md)<[`AccountFollowersFeedResponse`](../../interfaces/index/AccountFollowersFeedResponse.md), [`AccountFollowersFeedResponseUsersItem`](AccountFollowersFeedResponseUsersItem.md)\>

  ↳ **`AccountFollowersFeed`**

## Table of contents

### Constructors

- [constructor](AccountFollowersFeed.md#constructor)

### Properties

- [attemptOptions](AccountFollowersFeed.md#attemptoptions)
- [enableGroups](AccountFollowersFeed.md#enablegroups)
- [id](AccountFollowersFeed.md#id)
- [nextMaxId](AccountFollowersFeed.md#nextmaxid)
- [order](AccountFollowersFeed.md#order)
- [query](AccountFollowersFeed.md#query)
- [searchSurface](AccountFollowersFeed.md#searchsurface)

### Accessors

- [items$](AccountFollowersFeed.md#items$)
- [state](AccountFollowersFeed.md#state)

### Methods

- [deserialize](AccountFollowersFeed.md#deserialize)
- [isMoreAvailable](AccountFollowersFeed.md#ismoreavailable)
- [items](AccountFollowersFeed.md#items)
- [observable](AccountFollowersFeed.md#observable)
- [request](AccountFollowersFeed.md#request)
- [serialize](AccountFollowersFeed.md#serialize)
- [toPlain](AccountFollowersFeed.md#toplain)

## Constructors

### constructor

• **new AccountFollowersFeed**(`client`)

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

[src/feeds/account-followers.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-followers.feed.ts#L12)

___

### id

• **id**: `string` \| `number`

#### Defined in

[src/feeds/account-followers.feed.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-followers.feed.ts#L14)

___

### nextMaxId

• **nextMaxId**: `string`

#### Defined in

[src/feeds/account-followers.feed.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-followers.feed.ts#L16)

___

### order

• `Optional` **order**: ``"default"``

only 'default' seems to work

#### Defined in

[src/feeds/account-followers.feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-followers.feed.ts#L10)

___

### query

• **query**: `string` = `''`

#### Defined in

[src/feeds/account-followers.feed.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-followers.feed.ts#L11)

___

### searchSurface

• `Optional` **searchSurface**: `string`

#### Defined in

[src/feeds/account-followers.feed.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-followers.feed.ts#L6)

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
| `body` | [`AccountFollowersFeedResponse`](../../interfaces/index/AccountFollowersFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/account-followers.feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-followers.feed.ts#L18)

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

▸ **items**(): `Promise`<[`AccountFollowersFeedResponseUsersItem`](AccountFollowersFeedResponseUsersItem.md)[]\>

#### Returns

`Promise`<[`AccountFollowersFeedResponseUsersItem`](AccountFollowersFeedResponseUsersItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/account-followers.feed.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-followers.feed.ts#L38)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`AccountFollowersFeedResponseUsersItem`](AccountFollowersFeedResponseUsersItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`AccountFollowersFeedResponseUsersItem`](AccountFollowersFeedResponseUsersItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`AccountFollowersFeedResponse`](../../interfaces/index/AccountFollowersFeedResponse.md)\>

#### Returns

`Promise`<[`AccountFollowersFeedResponse`](../../interfaces/index/AccountFollowersFeedResponse.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/account-followers.feed.ts:23](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-followers.feed.ts#L23)

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
