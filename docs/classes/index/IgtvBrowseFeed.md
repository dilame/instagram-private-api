[instagram-private-api](../../README.md) / [index](../../modules/index.md) / IgtvBrowseFeed

# Class: IgtvBrowseFeed

[index](../../modules/index.md).IgtvBrowseFeed

## Hierarchy

- [`Feed`](Feed.md)<[`IgtvBrowseFeedResponseRootObject`](../../interfaces/index/IgtvBrowseFeedResponseRootObject.md), [`IgtvBrowseFeedResponseBrowseItemsItem`](../../interfaces/index/IgtvBrowseFeedResponseBrowseItemsItem.md)\>

  ↳ **`IgtvBrowseFeed`**

## Table of contents

### Constructors

- [constructor](IgtvBrowseFeed.md#constructor)

### Properties

- [attemptOptions](IgtvBrowseFeed.md#attemptoptions)
- [isPrefetch](IgtvBrowseFeed.md#isprefetch)

### Accessors

- [items$](IgtvBrowseFeed.md#items$)

### Methods

- [deserialize](IgtvBrowseFeed.md#deserialize)
- [isMoreAvailable](IgtvBrowseFeed.md#ismoreavailable)
- [items](IgtvBrowseFeed.md#items)
- [observable](IgtvBrowseFeed.md#observable)
- [request](IgtvBrowseFeed.md#request)
- [serialize](IgtvBrowseFeed.md#serialize)
- [toPlain](IgtvBrowseFeed.md#toplain)

## Constructors

### constructor

• **new IgtvBrowseFeed**(`client`)

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

### isPrefetch

• **isPrefetch**: `boolean` = `false`

#### Defined in

[src/feeds/igtv.browse.feed.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/igtv.browse.feed.ts#L6)

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

▸ **items**(): `Promise`<[`IgtvBrowseFeedResponseBrowseItemsItem`](../../interfaces/index/IgtvBrowseFeedResponseBrowseItemsItem.md)[]\>

#### Returns

`Promise`<[`IgtvBrowseFeedResponseBrowseItemsItem`](../../interfaces/index/IgtvBrowseFeedResponseBrowseItemsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/igtv.browse.feed.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/igtv.browse.feed.ts#L11)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`IgtvBrowseFeedResponseBrowseItemsItem`](../../interfaces/index/IgtvBrowseFeedResponseBrowseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`IgtvBrowseFeedResponseBrowseItemsItem`](../../interfaces/index/IgtvBrowseFeedResponseBrowseItemsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`IgtvBrowseFeedResponseRootObject`](../../interfaces/index/IgtvBrowseFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`IgtvBrowseFeedResponseRootObject`](../../interfaces/index/IgtvBrowseFeedResponseRootObject.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/igtv.browse.feed.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/igtv.browse.feed.ts#L16)

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
