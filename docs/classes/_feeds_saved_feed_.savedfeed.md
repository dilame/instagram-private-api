> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/saved.feed"](../modules/_feeds_saved_feed_.md) / [SavedFeed](_feeds_saved_feed_.savedfeed.md) /

# Class: SavedFeed

## Hierarchy

  * [Feed](_core_feed_.feed.md)‹*[SavedFeedResponseRootObject](../interfaces/_responses_saved_feed_response_.savedfeedresponserootobject.md)*, *[SavedFeedResponseMedia](../interfaces/_responses_saved_feed_response_.savedfeedresponsemedia.md)*›

  * **SavedFeed**

## Index

### Constructors

* [constructor](_feeds_saved_feed_.savedfeed.md#constructor)

### Accessors

* [items$](_feeds_saved_feed_.savedfeed.md#items$)
* [state](_feeds_saved_feed_.savedfeed.md#state)

### Methods

* [deserialize](_feeds_saved_feed_.savedfeed.md#deserialize)
* [isMoreAvailable](_feeds_saved_feed_.savedfeed.md#ismoreavailable)
* [items](_feeds_saved_feed_.savedfeed.md#items)
* [observable](_feeds_saved_feed_.savedfeed.md#observable)
* [request](_feeds_saved_feed_.savedfeed.md#request)
* [serialize](_feeds_saved_feed_.savedfeed.md#serialize)
* [toPlain](_feeds_saved_feed_.savedfeed.md#toplain)

### Object literals

* [attemptOptions](_feeds_saved_feed_.savedfeed.md#attemptoptions)

## Constructors

###  constructor

\+ **new SavedFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[SavedFeed](_feeds_saved_feed_.savedfeed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[SavedFeed](_feeds_saved_feed_.savedfeed.md)*

## Accessors

###  items$

• **get items$**(): *`Observable<Item[]>`*

*Inherited from [Feed](_core_feed_.feed.md).[items$](_core_feed_.feed.md#items$)*

*Defined in [core/feed.ts:18](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L18)*

**Returns:** *`Observable<Item[]>`*

___

###  state

• **set state**(`body`: [SavedFeedResponseRootObject](../interfaces/_responses_saved_feed_response_.savedfeedresponserootobject.md)): *void*

*Defined in [feeds/saved.feed.ts:9](https://github.com/dilame/instagram-private-api/blob/173bc62/src/feeds/saved.feed.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | [SavedFeedResponseRootObject](../interfaces/_responses_saved_feed_response_.savedfeedresponserootobject.md) |

**Returns:** *void*

## Methods

###  deserialize

▸ **deserialize**(`data`: string): *void*

*Inherited from [Feed](_core_feed_.feed.md).[deserialize](_core_feed_.feed.md#deserialize)*

*Defined in [core/feed.ts:79](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *void*

___

###  isMoreAvailable

▸ **isMoreAvailable**(): *boolean*

*Inherited from [Feed](_core_feed_.feed.md).[isMoreAvailable](_core_feed_.feed.md#ismoreavailable)*

*Defined in [core/feed.ts:87](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L87)*

**Returns:** *boolean*

___

###  items

▸ **items**(): *`Promise<SavedFeedResponseMedia[]>`*

*Overrides [Feed](_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)*

*Defined in [feeds/saved.feed.ts:26](https://github.com/dilame/instagram-private-api/blob/173bc62/src/feeds/saved.feed.ts#L26)*

**Returns:** *`Promise<SavedFeedResponseMedia[]>`*

___

###  observable

▸ **observable**(`semaphore?`: function, `attemptOptions?`: `Partial<AttemptOptions<any>>`): *`Observable<Item[]>`*

*Inherited from [Feed](_core_feed_.feed.md).[observable](_core_feed_.feed.md#observable)*

*Defined in [core/feed.ts:21](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L21)*

**Parameters:**

▪`Optional`  **semaphore**: *function*

▸ (): *`Promise<any>`*

▪`Optional`  **attemptOptions**: *`Partial<AttemptOptions<any>>`*

**Returns:** *`Observable<Item[]>`*

___

###  request

▸ **request**(): *`Promise<SavedFeedResponseRootObject>`*

*Overrides [Feed](_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)*

*Defined in [feeds/saved.feed.ts:14](https://github.com/dilame/instagram-private-api/blob/173bc62/src/feeds/saved.feed.ts#L14)*

**Returns:** *`Promise<SavedFeedResponseRootObject>`*

___

###  serialize

▸ **serialize**(): *string*

*Inherited from [Feed](_core_feed_.feed.md).[serialize](_core_feed_.feed.md#serialize)*

*Defined in [core/feed.ts:75](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L75)*

**Returns:** *string*

___

###  toPlain

▸ **toPlain**(): *`Object`*

*Inherited from [Feed](_core_feed_.feed.md).[toPlain](_core_feed_.feed.md#toplain)*

*Defined in [core/feed.ts:83](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L83)*

**Returns:** *`Object`*

## Object literals

###  attemptOptions

### ▪ **attemptOptions**: *object*

*Inherited from [Feed](_core_feed_.feed.md).[attemptOptions](_core_feed_.feed.md#attemptoptions)*

*Defined in [core/feed.ts:10](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L10)*

###  delay

• **delay**: *number* = 60000

*Defined in [core/feed.ts:11](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L11)*

###  factor

• **factor**: *number* = 1.5

*Defined in [core/feed.ts:12](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L12)*

###  jitter

• **jitter**: *true* = true

*Defined in [core/feed.ts:16](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L16)*

###  maxAttempts

• **maxAttempts**: *number* = 10

*Defined in [core/feed.ts:13](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L13)*

###  maxDelay

• **maxDelay**: *number* = 300000

*Defined in [core/feed.ts:15](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L15)*

###  minDelay

• **minDelay**: *number* = 60000

*Defined in [core/feed.ts:14](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L14)*