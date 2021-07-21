[instagram-private-api](../../README.md) / [index](../../modules/index.md) / TopicalExploreFeed

# Class: TopicalExploreFeed

[index](../../modules/index.md).TopicalExploreFeed

## Hierarchy

- [`Feed`](Feed.md)<[`TopicalExploreFeedResponseRootObject`](../../interfaces/index/TopicalExploreFeedResponseRootObject.md), [`TopicalExploreFeedResponseSectionalItemsItem`](../../interfaces/index/TopicalExploreFeedResponseSectionalItemsItem.md)\>

  ↳ **`TopicalExploreFeed`**

## Table of contents

### Constructors

- [constructor](TopicalExploreFeed.md#constructor)

### Properties

- [attemptOptions](TopicalExploreFeed.md#attemptoptions)
- [clusterId](TopicalExploreFeed.md#clusterid)
- [lat](TopicalExploreFeed.md#lat)
- [lng](TopicalExploreFeed.md#lng)
- [module](TopicalExploreFeed.md#module)
- [sessionId](TopicalExploreFeed.md#sessionid)

### Accessors

- [items$](TopicalExploreFeed.md#items$)
- [state](TopicalExploreFeed.md#state)

### Methods

- [deserialize](TopicalExploreFeed.md#deserialize)
- [isMoreAvailable](TopicalExploreFeed.md#ismoreavailable)
- [items](TopicalExploreFeed.md#items)
- [observable](TopicalExploreFeed.md#observable)
- [request](TopicalExploreFeed.md#request)
- [serialize](TopicalExploreFeed.md#serialize)
- [toPlain](TopicalExploreFeed.md#toplain)

## Constructors

### constructor

• **new TopicalExploreFeed**(`client`)

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

### clusterId

• **clusterId**: `string` = `'explore_all:0'`

Change this to set the category

#### Defined in

[src/feeds/topical-explore.feed.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/topical-explore.feed.ts#L15)

___

### lat

• `Optional` **lat**: `string` \| `number`

#### Defined in

[src/feeds/topical-explore.feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/topical-explore.feed.ts#L10)

___

### lng

• `Optional` **lng**: `string` \| `number`

#### Defined in

[src/feeds/topical-explore.feed.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/topical-explore.feed.ts#L11)

___

### module

• **module**: `string` = `'explore_popular'`

#### Defined in

[src/feeds/topical-explore.feed.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/topical-explore.feed.ts#L9)

___

### sessionId

• **sessionId**: `string`

#### Defined in

[src/feeds/topical-explore.feed.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/topical-explore.feed.ts#L16)

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
| `body` | [`TopicalExploreFeedResponseRootObject`](../../interfaces/index/TopicalExploreFeedResponseRootObject.md) |

#### Returns

`void`

#### Defined in

[src/feeds/topical-explore.feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/topical-explore.feed.ts#L21)

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

▸ **items**(): `Promise`<[`TopicalExploreFeedResponseSectionalItemsItem`](../../interfaces/index/TopicalExploreFeedResponseSectionalItemsItem.md)[]\>

#### Returns

`Promise`<[`TopicalExploreFeedResponseSectionalItemsItem`](../../interfaces/index/TopicalExploreFeedResponseSectionalItemsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/topical-explore.feed.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/topical-explore.feed.ts#L26)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`TopicalExploreFeedResponseSectionalItemsItem`](../../interfaces/index/TopicalExploreFeedResponseSectionalItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`TopicalExploreFeedResponseSectionalItemsItem`](../../interfaces/index/TopicalExploreFeedResponseSectionalItemsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`TopicalExploreFeedResponseRootObject`](../../interfaces/index/TopicalExploreFeedResponseRootObject.md)\>

#### Returns

`Promise`<[`TopicalExploreFeedResponseRootObject`](../../interfaces/index/TopicalExploreFeedResponseRootObject.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/topical-explore.feed.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/topical-explore.feed.ts#L31)

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
