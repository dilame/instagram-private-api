[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / IgtvChannelFeed

# Class: IgtvChannelFeed

[feeds](../../modules/feeds.md).IgtvChannelFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`IgtvChannelFeedResponseRootObject`](../../interfaces/responses/IgtvChannelFeedResponseRootObject.md), [`IgtvChannelFeedResponseItemsItem`](../../interfaces/responses/IgtvChannelFeedResponseItemsItem.md)\>

  ↳ **`IgtvChannelFeed`**

## Table of contents

### Constructors

- [constructor](IgtvChannelFeed.md#constructor)

### Properties

- [attemptOptions](IgtvChannelFeed.md#attemptoptions)
- [channelId](IgtvChannelFeed.md#channelid)

### Accessors

- [items$](IgtvChannelFeed.md#items$)

### Methods

- [deserialize](IgtvChannelFeed.md#deserialize)
- [isMoreAvailable](IgtvChannelFeed.md#ismoreavailable)
- [items](IgtvChannelFeed.md#items)
- [observable](IgtvChannelFeed.md#observable)
- [request](IgtvChannelFeed.md#request)
- [serialize](IgtvChannelFeed.md#serialize)
- [toPlain](IgtvChannelFeed.md#toplain)

## Constructors

### constructor

• **new IgtvChannelFeed**(`client`)

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

### channelId

• **channelId**: `string`

#### Defined in

[src/feeds/igtv.channel.feed.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/igtv.channel.feed.ts#L9)

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

▸ **items**(): `Promise`<[`IgtvChannelFeedResponseItemsItem`](../../interfaces/responses/IgtvChannelFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`IgtvChannelFeedResponseItemsItem`](../../interfaces/responses/IgtvChannelFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/igtv.channel.feed.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/igtv.channel.feed.ts#L38)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`IgtvChannelFeedResponseItemsItem`](../../interfaces/responses/IgtvChannelFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`IgtvChannelFeedResponseItemsItem`](../../interfaces/responses/IgtvChannelFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`IgtvChannelFeedResponseRootObject`](../../interfaces/responses/IgtvChannelFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`IgtvChannelFeedResponseRootObject`](../../interfaces/responses/IgtvChannelFeedResponseRootObject.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/igtv.channel.feed.ts:19](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/igtv.channel.feed.ts#L19)

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
