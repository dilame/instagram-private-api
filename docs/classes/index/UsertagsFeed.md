[instagram-private-api](../../README.md) / [index](../../modules/index.md) / UsertagsFeed

# Class: UsertagsFeed

[index](../../modules/index.md).UsertagsFeed

## Hierarchy

- [`Feed`](Feed.md)<[`UsertagsFeedResponseRootObject`](../../interfaces/index/UsertagsFeedResponseRootObject.md), [`UsertagsFeedResponseItemsItem`](../../interfaces/index/UsertagsFeedResponseItemsItem.md)\>

  ↳ **`UsertagsFeed`**

## Table of contents

### Constructors

- [constructor](UsertagsFeed.md#constructor)

### Properties

- [attemptOptions](UsertagsFeed.md#attemptoptions)
- [id](UsertagsFeed.md#id)

### Accessors

- [items$](UsertagsFeed.md#items$)

### Methods

- [deserialize](UsertagsFeed.md#deserialize)
- [isMoreAvailable](UsertagsFeed.md#ismoreavailable)
- [items](UsertagsFeed.md#items)
- [observable](UsertagsFeed.md#observable)
- [request](UsertagsFeed.md#request)
- [serialize](UsertagsFeed.md#serialize)
- [toPlain](UsertagsFeed.md#toplain)

## Constructors

### constructor

• **new UsertagsFeed**(`client`)

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

### id

• **id**: `string` \| `number`

#### Defined in

[src/feeds/usertags.feed.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/usertags.feed.ts#L6)

## Accessors

### items$

• `get` **items$**(): `Observable`<`Item`[]\>

#### Returns

`Observable`<`Item`[]\>

#### Defined in

[src/core/feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L18)

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

▸ **items**(): `Promise`<[`UsertagsFeedResponseItemsItem`](../../interfaces/index/UsertagsFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`UsertagsFeedResponseItemsItem`](../../interfaces/index/UsertagsFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/usertags.feed.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/usertags.feed.ts#L26)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`UsertagsFeedResponseItemsItem`](../../interfaces/index/UsertagsFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`UsertagsFeedResponseItemsItem`](../../interfaces/index/UsertagsFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`UsertagsFeedResponseRootObject`](../../interfaces/index/UsertagsFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`UsertagsFeedResponseRootObject`](../../interfaces/index/UsertagsFeedResponseRootObject.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/usertags.feed.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/usertags.feed.ts#L15)

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
