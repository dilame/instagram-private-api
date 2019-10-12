> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/direct-pending.feed"](../modules/_feeds_direct_pending_feed_.md) / [DirectPendingInboxFeed](_feeds_direct_pending_feed_.directpendinginboxfeed.md) /

# Class: DirectPendingInboxFeed

## Hierarchy

  * [Feed](_core_feed_.feed.md)‹*[DirectInboxFeedResponse](../interfaces/_responses_direct_inbox_feed_response_.directinboxfeedresponse.md)*, *[DirectInboxFeedResponseThreadsItem](_responses_direct_inbox_feed_response_.directinboxfeedresponsethreadsitem.md)*›

  * **DirectPendingInboxFeed**

## Index

### Constructors

* [constructor](_feeds_direct_pending_feed_.directpendinginboxfeed.md#constructor)

### Accessors

* [items$](_feeds_direct_pending_feed_.directpendinginboxfeed.md#items$)
* [state](_feeds_direct_pending_feed_.directpendinginboxfeed.md#state)

### Methods

* [deserialize](_feeds_direct_pending_feed_.directpendinginboxfeed.md#deserialize)
* [isMoreAvailable](_feeds_direct_pending_feed_.directpendinginboxfeed.md#ismoreavailable)
* [items](_feeds_direct_pending_feed_.directpendinginboxfeed.md#items)
* [observable](_feeds_direct_pending_feed_.directpendinginboxfeed.md#observable)
* [records](_feeds_direct_pending_feed_.directpendinginboxfeed.md#records)
* [request](_feeds_direct_pending_feed_.directpendinginboxfeed.md#request)
* [serialize](_feeds_direct_pending_feed_.directpendinginboxfeed.md#serialize)
* [toPlain](_feeds_direct_pending_feed_.directpendinginboxfeed.md#toplain)

### Object literals

* [attemptOptions](_feeds_direct_pending_feed_.directpendinginboxfeed.md#attemptoptions)

## Constructors

###  constructor

\+ **new DirectPendingInboxFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[DirectPendingInboxFeed](_feeds_direct_pending_feed_.directpendinginboxfeed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[DirectPendingInboxFeed](_feeds_direct_pending_feed_.directpendinginboxfeed.md)*

## Accessors

###  items$

• **get items$**(): *`Observable<Item[]>`*

*Inherited from [Feed](_core_feed_.feed.md).[items$](_core_feed_.feed.md#items$)*

*Defined in [core/feed.ts:18](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L18)*

**Returns:** *`Observable<Item[]>`*

___

###  state

• **set state**(`body`: [DirectInboxFeedResponse](../interfaces/_responses_direct_inbox_feed_response_.directinboxfeedresponse.md)): *void*

*Defined in [feeds/direct-pending.feed.ts:12](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/direct-pending.feed.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | [DirectInboxFeedResponse](../interfaces/_responses_direct_inbox_feed_response_.directinboxfeedresponse.md) |

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

▸ **items**(): *`Promise<DirectInboxFeedResponseThreadsItem[]>`*

*Overrides [Feed](_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)*

*Defined in [feeds/direct-pending.feed.ts:35](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/direct-pending.feed.ts#L35)*

**Returns:** *`Promise<DirectInboxFeedResponseThreadsItem[]>`*

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

###  records

▸ **records**(): *`Promise<DirectThreadEntity[]>`*

*Defined in [feeds/direct-pending.feed.ts:40](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/direct-pending.feed.ts#L40)*

**Returns:** *`Promise<DirectThreadEntity[]>`*

___

###  request

▸ **request**(): *`Promise<DirectInboxFeedResponse>`*

*Overrides [Feed](_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)*

*Defined in [feeds/direct-pending.feed.ts:18](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/direct-pending.feed.ts#L18)*

**Returns:** *`Promise<DirectInboxFeedResponse>`*

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