[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / UserFeed

# Class: UserFeed

[feeds](../../modules/feeds.md).UserFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`UserFeedResponse`](../../interfaces/responses/UserFeedResponse.md), [`UserFeedResponseItemsItem`](../../interfaces/responses/UserFeedResponseItemsItem.md)\>

  ↳ **`UserFeed`**

## Table of contents

### Constructors

- [constructor](UserFeed.md#constructor)

### Properties

- [attemptOptions](UserFeed.md#attemptoptions)
- [id](UserFeed.md#id)

### Accessors

- [items$](UserFeed.md#items$)

### Methods

- [deserialize](UserFeed.md#deserialize)
- [isMoreAvailable](UserFeed.md#ismoreavailable)
- [items](UserFeed.md#items)
- [observable](UserFeed.md#observable)
- [request](UserFeed.md#request)
- [serialize](UserFeed.md#serialize)
- [toPlain](UserFeed.md#toplain)

## Constructors

### constructor

• **new UserFeed**(`client`)

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

### id

• **id**: `string` \| `number`

#### Defined in

[src/feeds/user.feed.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/user.feed.ts#L6)

## Accessors

### items$

• `get` **items$**(): `Observable`<`Item`[]\>

#### Returns

`Observable`<`Item`[]\>

#### Defined in

[src/core/feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L18)

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

▸ **items**(): `Promise`<[`UserFeedResponseItemsItem`](../../interfaces/responses/UserFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`UserFeedResponseItemsItem`](../../interfaces/responses/UserFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/user.feed.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/user.feed.ts#L26)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`UserFeedResponseItemsItem`](../../interfaces/responses/UserFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`UserFeedResponseItemsItem`](../../interfaces/responses/UserFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`UserFeedResponse`](../../interfaces/responses/UserFeedResponse.md)\>

#### Returns

`Promise`<[`UserFeedResponse`](../../interfaces/responses/UserFeedResponse.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/user.feed.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/user.feed.ts#L15)

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
