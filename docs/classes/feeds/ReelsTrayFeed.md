[instagram-private-api](../../README.md) / [feeds](../../modules/feeds.md) / ReelsTrayFeed

# Class: ReelsTrayFeed

[feeds](../../modules/feeds.md).ReelsTrayFeed

## Hierarchy

- [`Feed`](../index/Feed.md)<[`ReelsTrayFeedResponseRootObject`](../../interfaces/responses/ReelsTrayFeedResponseRootObject.md), [`ReelsTrayFeedResponseTrayItem`](../../interfaces/responses/ReelsTrayFeedResponseTrayItem.md)\>

  ↳ **`ReelsTrayFeed`**

## Table of contents

### Constructors

- [constructor](ReelsTrayFeed.md#constructor)

### Properties

- [attemptOptions](ReelsTrayFeed.md#attemptoptions)
- [reason](ReelsTrayFeed.md#reason)

### Accessors

- [items$](ReelsTrayFeed.md#items$)

### Methods

- [deserialize](ReelsTrayFeed.md#deserialize)
- [isMoreAvailable](ReelsTrayFeed.md#ismoreavailable)
- [items](ReelsTrayFeed.md#items)
- [observable](ReelsTrayFeed.md#observable)
- [request](ReelsTrayFeed.md#request)
- [serialize](ReelsTrayFeed.md#serialize)
- [toPlain](ReelsTrayFeed.md#toplain)

## Constructors

### constructor

• **new ReelsTrayFeed**(`client`)

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

### reason

• **reason**: ``"pull_to_refresh"`` \| ``"cold_start"``

#### Defined in

[src/feeds/reels-tray.feed.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/reels-tray.feed.ts#L5)

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

▸ **items**(): `Promise`<[`ReelsTrayFeedResponseTrayItem`](../../interfaces/responses/ReelsTrayFeedResponseTrayItem.md)[]\>

Returns only the stories (without the broadcasts)

#### Returns

`Promise`<[`ReelsTrayFeedResponseTrayItem`](../../interfaces/responses/ReelsTrayFeedResponseTrayItem.md)[]\>

#### Overrides

[Feed](../index/Feed.md).[items](../index/Feed.md#items)

#### Defined in

[src/feeds/reels-tray.feed.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/reels-tray.feed.ts#L12)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`ReelsTrayFeedResponseTrayItem`](../../interfaces/responses/ReelsTrayFeedResponseTrayItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`ReelsTrayFeedResponseTrayItem`](../../interfaces/responses/ReelsTrayFeedResponseTrayItem.md)[]\>

#### Inherited from

[Feed](../index/Feed.md).[observable](../index/Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`ReelsTrayFeedResponseRootObject`](../../interfaces/responses/ReelsTrayFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`ReelsTrayFeedResponseRootObject`](../../interfaces/responses/ReelsTrayFeedResponseRootObject.md)\>

#### Overrides

[Feed](../index/Feed.md).[request](../index/Feed.md#request)

#### Defined in

[src/feeds/reels-tray.feed.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/feeds/reels-tray.feed.ts#L17)

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
