> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/reels-media.feed"](../modules/_feeds_reels_media_feed_.md) / [ReelsMediaFeed](_feeds_reels_media_feed_.reelsmediafeed.md) /

# Class: ReelsMediaFeed

## Hierarchy

  * [Feed](_core_feed_.feed.md)‹*[ReelsMediaFeedResponseRootObject](../interfaces/_responses_reels_media_feed_response_.reelsmediafeedresponserootobject.md)*, *[ReelsMediaFeedResponseItem](../interfaces/_responses_reels_media_feed_response_.reelsmediafeedresponseitem.md)*›

  * **ReelsMediaFeed**

## Index

### Constructors

* [constructor](_feeds_reels_media_feed_.reelsmediafeed.md#constructor)

### Properties

* [source](_feeds_reels_media_feed_.reelsmediafeed.md#source)
* [userIds](_feeds_reels_media_feed_.reelsmediafeed.md#userids)

### Accessors

* [items$](_feeds_reels_media_feed_.reelsmediafeed.md#items$)

### Methods

* [deserialize](_feeds_reels_media_feed_.reelsmediafeed.md#deserialize)
* [isMoreAvailable](_feeds_reels_media_feed_.reelsmediafeed.md#ismoreavailable)
* [items](_feeds_reels_media_feed_.reelsmediafeed.md#items)
* [observable](_feeds_reels_media_feed_.reelsmediafeed.md#observable)
* [request](_feeds_reels_media_feed_.reelsmediafeed.md#request)
* [serialize](_feeds_reels_media_feed_.reelsmediafeed.md#serialize)
* [toPlain](_feeds_reels_media_feed_.reelsmediafeed.md#toplain)

### Object literals

* [attemptOptions](_feeds_reels_media_feed_.reelsmediafeed.md#attemptoptions)

## Constructors

###  constructor

\+ **new ReelsMediaFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[ReelsMediaFeed](_feeds_reels_media_feed_.reelsmediafeed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[ReelsMediaFeed](_feeds_reels_media_feed_.reelsmediafeed.md)*

## Properties

###  source

• **source**: *[IgAppModule](../modules/_types_common_types_.md#igappmodule)* = "feed_timeline"

*Defined in [feeds/reels-media.feed.ts:8](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/reels-media.feed.ts#L8)*

___

###  userIds

• **userIds**: *`Array<number | string>`*

*Defined in [feeds/reels-media.feed.ts:7](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/reels-media.feed.ts#L7)*

## Accessors

###  items$

• **get items$**(): *`Observable<Item[]>`*

*Inherited from [Feed](_core_feed_.feed.md).[items$](_core_feed_.feed.md#items$)*

*Defined in [core/feed.ts:18](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L18)*

**Returns:** *`Observable<Item[]>`*

## Methods

###  deserialize

▸ **deserialize**(`data`: string): *void*

*Inherited from [Feed](_core_feed_.feed.md).[deserialize](_core_feed_.feed.md#deserialize)*

*Defined in [core/feed.ts:79](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *void*

___

###  isMoreAvailable

▸ **isMoreAvailable**(): *boolean*

*Inherited from [Feed](_core_feed_.feed.md).[isMoreAvailable](_core_feed_.feed.md#ismoreavailable)*

*Defined in [core/feed.ts:87](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L87)*

**Returns:** *boolean*

___

###  items

▸ **items**(): *`Promise<any[]>`*

*Overrides [Feed](_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)*

*Defined in [feeds/reels-media.feed.ts:29](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/reels-media.feed.ts#L29)*

**Returns:** *`Promise<any[]>`*

___

###  observable

▸ **observable**(`semaphore?`: function, `attemptOptions?`: `Partial<AttemptOptions<any>>`): *`Observable<Item[]>`*

*Inherited from [Feed](_core_feed_.feed.md).[observable](_core_feed_.feed.md#observable)*

*Defined in [core/feed.ts:21](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L21)*

**Parameters:**

▪`Optional`  **semaphore**: *function*

▸ (): *`Promise<any>`*

▪`Optional`  **attemptOptions**: *`Partial<AttemptOptions<any>>`*

**Returns:** *`Observable<Item[]>`*

___

###  request

▸ **request**(): *`Promise<ReelsMediaFeedResponseRootObject>`*

*Overrides [Feed](_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)*

*Defined in [feeds/reels-media.feed.ts:12](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/reels-media.feed.ts#L12)*

**Returns:** *`Promise<ReelsMediaFeedResponseRootObject>`*

___

###  serialize

▸ **serialize**(): *string*

*Inherited from [Feed](_core_feed_.feed.md).[serialize](_core_feed_.feed.md#serialize)*

*Defined in [core/feed.ts:75](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L75)*

**Returns:** *string*

___

###  toPlain

▸ **toPlain**(): *`Object`*

*Inherited from [Feed](_core_feed_.feed.md).[toPlain](_core_feed_.feed.md#toplain)*

*Defined in [core/feed.ts:83](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L83)*

**Returns:** *`Object`*

## Object literals

###  attemptOptions

### ▪ **attemptOptions**: *object*

*Inherited from [Feed](_core_feed_.feed.md).[attemptOptions](_core_feed_.feed.md#attemptoptions)*

*Defined in [core/feed.ts:10](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L10)*

###  delay

• **delay**: *number* = 60000

*Defined in [core/feed.ts:11](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L11)*

###  factor

• **factor**: *number* = 1.5

*Defined in [core/feed.ts:12](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L12)*

###  jitter

• **jitter**: *true* = true

*Defined in [core/feed.ts:16](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L16)*

###  maxAttempts

• **maxAttempts**: *number* = 10

*Defined in [core/feed.ts:13](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L13)*

###  maxDelay

• **maxDelay**: *number* = 300000

*Defined in [core/feed.ts:15](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L15)*

###  minDelay

• **minDelay**: *number* = 60000

*Defined in [core/feed.ts:14](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L14)*