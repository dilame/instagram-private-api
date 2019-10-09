> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/music-mood.feed"](../modules/_feeds_music_mood_feed_.md) / [MusicMoodFeed](_feeds_music_mood_feed_.musicmoodfeed.md) /

# Class: MusicMoodFeed

## Hierarchy

  * [Feed](_core_feed_.feed.md)‹*[MusicMoodFeedResponseRootObject](../interfaces/_responses_music_mood_feed_response_.musicmoodfeedresponserootobject.md)*, *[MusicMoodFeedResponseItemsItem](../interfaces/_responses_music_mood_feed_response_.musicmoodfeedresponseitemsitem.md)*›

  * **MusicMoodFeed**

## Index

### Constructors

* [constructor](_feeds_music_mood_feed_.musicmoodfeed.md#constructor)

### Properties

* [id](_feeds_music_mood_feed_.musicmoodfeed.md#id)
* [product](_feeds_music_mood_feed_.musicmoodfeed.md#product)

### Accessors

* [items$](_feeds_music_mood_feed_.musicmoodfeed.md#items$)

### Methods

* [deserialize](_feeds_music_mood_feed_.musicmoodfeed.md#deserialize)
* [isMoreAvailable](_feeds_music_mood_feed_.musicmoodfeed.md#ismoreavailable)
* [items](_feeds_music_mood_feed_.musicmoodfeed.md#items)
* [observable](_feeds_music_mood_feed_.musicmoodfeed.md#observable)
* [request](_feeds_music_mood_feed_.musicmoodfeed.md#request)
* [serialize](_feeds_music_mood_feed_.musicmoodfeed.md#serialize)
* [toPlain](_feeds_music_mood_feed_.musicmoodfeed.md#toplain)

### Object literals

* [attemptOptions](_feeds_music_mood_feed_.musicmoodfeed.md#attemptoptions)

## Constructors

###  constructor

\+ **new MusicMoodFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[MusicMoodFeed](_feeds_music_mood_feed_.musicmoodfeed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[MusicMoodFeed](_feeds_music_mood_feed_.musicmoodfeed.md)*

## Properties

###  id

• **id**: *number | string*

*Defined in [feeds/music-mood.feed.ts:13](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/music-mood.feed.ts#L13)*

___

###  product

• **product**: *[IgAppModule](../modules/_types_common_types_.md#igappmodule)*

*Defined in [feeds/music-mood.feed.ts:11](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/music-mood.feed.ts#L11)*

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

*Defined in [feeds/music-mood.feed.ts:41](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/music-mood.feed.ts#L41)*

**Returns:** *boolean*

___

###  items

▸ **items**(): *`Promise<MusicMoodFeedResponseItemsItem[]>`*

*Overrides [Feed](_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)*

*Defined in [feeds/music-mood.feed.ts:15](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/music-mood.feed.ts#L15)*

**Returns:** *`Promise<MusicMoodFeedResponseItemsItem[]>`*

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

▸ **request**(): *`Promise<MusicMoodFeedResponseRootObject>`*

*Overrides [Feed](_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)*

*Defined in [feeds/music-mood.feed.ts:20](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/music-mood.feed.ts#L20)*

**Returns:** *`Promise<MusicMoodFeedResponseRootObject>`*

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