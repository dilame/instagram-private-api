> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/music-trending.feed"](../modules/_feeds_music_trending_feed_.md) / [MusicTrendingFeed](_feeds_music_trending_feed_.musictrendingfeed.md) /

# Class: MusicTrendingFeed

## Hierarchy

  * [Feed](_core_feed_.feed.md)‹*[MusicTrendingFeedResponseRootObject](../interfaces/_responses_music_trending_feed_response_.musictrendingfeedresponserootobject.md)*, *[MusicTrendingFeedResponseItemsItem](../interfaces/_responses_music_trending_feed_response_.musictrendingfeedresponseitemsitem.md)*›

  * **MusicTrendingFeed**

## Index

### Constructors

* [constructor](_feeds_music_trending_feed_.musictrendingfeed.md#constructor)

### Properties

* [product](_feeds_music_trending_feed_.musictrendingfeed.md#product)

### Accessors

* [items$](_feeds_music_trending_feed_.musictrendingfeed.md#items$)

### Methods

* [deserialize](_feeds_music_trending_feed_.musictrendingfeed.md#deserialize)
* [isMoreAvailable](_feeds_music_trending_feed_.musictrendingfeed.md#ismoreavailable)
* [items](_feeds_music_trending_feed_.musictrendingfeed.md#items)
* [observable](_feeds_music_trending_feed_.musictrendingfeed.md#observable)
* [request](_feeds_music_trending_feed_.musictrendingfeed.md#request)
* [serialize](_feeds_music_trending_feed_.musictrendingfeed.md#serialize)
* [toPlain](_feeds_music_trending_feed_.musictrendingfeed.md#toplain)

### Object literals

* [attemptOptions](_feeds_music_trending_feed_.musictrendingfeed.md#attemptoptions)

## Constructors

###  constructor

\+ **new MusicTrendingFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[MusicTrendingFeed](_feeds_music_trending_feed_.musictrendingfeed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[MusicTrendingFeed](_feeds_music_trending_feed_.musictrendingfeed.md)*

## Properties

###  product

• **product**: *[IgAppModule](../modules/_types_common_types_.md#igappmodule)*

*Defined in [feeds/music-trending.feed.ts:11](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/music-trending.feed.ts#L11)*

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

*Overrides [Feed](_core_feed_.feed.md).[isMoreAvailable](_core_feed_.feed.md#ismoreavailable)*

*Defined in [feeds/music-trending.feed.ts:39](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/music-trending.feed.ts#L39)*

**Returns:** *boolean*

___

###  items

▸ **items**(): *`Promise<MusicTrendingFeedResponseItemsItem[]>`*

*Overrides [Feed](_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)*

*Defined in [feeds/music-trending.feed.ts:13](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/music-trending.feed.ts#L13)*

**Returns:** *`Promise<MusicTrendingFeedResponseItemsItem[]>`*

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

▸ **request**(): *`Promise<MusicTrendingFeedResponseRootObject>`*

*Overrides [Feed](_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)*

*Defined in [feeds/music-trending.feed.ts:18](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/music-trending.feed.ts#L18)*

**Returns:** *`Promise<MusicTrendingFeedResponseRootObject>`*

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