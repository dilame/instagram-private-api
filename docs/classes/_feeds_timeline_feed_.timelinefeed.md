> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/timeline.feed"](../modules/_feeds_timeline_feed_.md) / [TimelineFeed](_feeds_timeline_feed_.timelinefeed.md) /

# Class: TimelineFeed

## Hierarchy

  * [Feed](_core_feed_.feed.md)‹*[TimelineFeedResponse](../interfaces/_responses_timeline_feed_response_.timelinefeedresponse.md)*, *[TimelineFeedResponseMedia_or_ad](../interfaces/_responses_timeline_feed_response_.timelinefeedresponsemedia_or_ad.md)*›

  * **TimelineFeed**

## Index

### Constructors

* [constructor](_feeds_timeline_feed_.timelinefeed.md#constructor)

### Properties

* [reason](_feeds_timeline_feed_.timelinefeed.md#reason)
* [tag](_feeds_timeline_feed_.timelinefeed.md#tag)

### Accessors

* [items$](_feeds_timeline_feed_.timelinefeed.md#items$)
* [state](_feeds_timeline_feed_.timelinefeed.md#state)

### Methods

* [deserialize](_feeds_timeline_feed_.timelinefeed.md#deserialize)
* [isMoreAvailable](_feeds_timeline_feed_.timelinefeed.md#ismoreavailable)
* [items](_feeds_timeline_feed_.timelinefeed.md#items)
* [observable](_feeds_timeline_feed_.timelinefeed.md#observable)
* [request](_feeds_timeline_feed_.timelinefeed.md#request)
* [serialize](_feeds_timeline_feed_.timelinefeed.md#serialize)
* [toPlain](_feeds_timeline_feed_.timelinefeed.md#toplain)

### Object literals

* [attemptOptions](_feeds_timeline_feed_.timelinefeed.md#attemptoptions)

## Constructors

###  constructor

\+ **new TimelineFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[TimelineFeed](_feeds_timeline_feed_.timelinefeed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[TimelineFeed](_feeds_timeline_feed_.timelinefeed.md)*

## Properties

###  reason

• **reason**: *[TimelineFeedReason](../modules/_types_timeline_feed_types_.md#timelinefeedreason)* =  sample(['pull_to_refresh', 'warm_start_fetch', 'cold_start_fetch'])

*Defined in [feeds/timeline.feed.ts:11](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/timeline.feed.ts#L11)*

___

###  tag

• **tag**: *string*

*Defined in [feeds/timeline.feed.ts:8](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/timeline.feed.ts#L8)*

## Accessors

###  items$

• **get items$**(): *`Observable<Item[]>`*

*Inherited from [Feed](_core_feed_.feed.md).[items$](_core_feed_.feed.md#items$)*

*Defined in [core/feed.ts:18](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L18)*

**Returns:** *`Observable<Item[]>`*

___

###  state

• **set state**(`body`: any): *void*

*Defined in [feeds/timeline.feed.ts:12](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/timeline.feed.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |

**Returns:** *void*

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

▸ **items**(): *`Promise<TimelineFeedResponseMedia_or_ad[]>`*

*Overrides [Feed](_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)*

*Defined in [feeds/timeline.feed.ts:66](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/timeline.feed.ts#L66)*

**Returns:** *`Promise<TimelineFeedResponseMedia_or_ad[]>`*

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

▸ **request**(`options`: [TimelineFeedsOptions](../interfaces/_types_timeline_feed_types_.timelinefeedsoptions.md)): *`Promise<TimelineFeedResponse>`*

*Overrides [Feed](_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)*

*Defined in [feeds/timeline.feed.ts:17](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/timeline.feed.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [TimelineFeedsOptions](../interfaces/_types_timeline_feed_types_.timelinefeedsoptions.md) |  {} |

**Returns:** *`Promise<TimelineFeedResponse>`*

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