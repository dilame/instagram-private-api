[instagram-private-api](../../README.md) / [index](../../modules/index.md) / BestiesFeed

# Class: BestiesFeed

[index](../../modules/index.md).BestiesFeed

## Hierarchy

- [`Feed`](Feed.md)<[`BestiesFeedResponse`](../../interfaces/index/BestiesFeedResponse.md), [`BestiesFeedResponseUsersItem`](BestiesFeedResponseUsersItem.md)\>

  ↳ **`BestiesFeed`**

## Table of contents

### Constructors

- [constructor](BestiesFeed.md#constructor)

### Properties

- [attemptOptions](BestiesFeed.md#attemptoptions)

### Accessors

- [items$](BestiesFeed.md#items$)
- [state](BestiesFeed.md#state)

### Methods

- [deserialize](BestiesFeed.md#deserialize)
- [isMoreAvailable](BestiesFeed.md#ismoreavailable)
- [items](BestiesFeed.md#items)
- [observable](BestiesFeed.md#observable)
- [request](BestiesFeed.md#request)
- [serialize](BestiesFeed.md#serialize)
- [toPlain](BestiesFeed.md#toplain)

## Constructors

### constructor

• **new BestiesFeed**(`client`)

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
| `body` | [`BestiesFeedResponse`](../../interfaces/index/BestiesFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/account-friendships-besties.feed.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-friendships-besties.feed.ts#L9)

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

▸ **items**(): `Promise`<[`BestiesFeedResponseUsersItem`](BestiesFeedResponseUsersItem.md)[]\>

#### Returns

`Promise`<[`BestiesFeedResponseUsersItem`](BestiesFeedResponseUsersItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/account-friendships-besties.feed.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-friendships-besties.feed.ts#L26)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`BestiesFeedResponseUsersItem`](BestiesFeedResponseUsersItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`BestiesFeedResponseUsersItem`](BestiesFeedResponseUsersItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`BestiesFeedResponse`](../../interfaces/index/BestiesFeedResponse.md)\>

#### Returns

`Promise`<[`BestiesFeedResponse`](../../interfaces/index/BestiesFeedResponse.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/account-friendships-besties.feed.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/account-friendships-besties.feed.ts#L14)

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
