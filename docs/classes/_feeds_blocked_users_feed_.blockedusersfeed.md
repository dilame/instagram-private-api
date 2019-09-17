> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/blocked-users.feed"](../modules/_feeds_blocked_users_feed_.md) / [BlockedUsersFeed](_feeds_blocked_users_feed_.blockedusersfeed.md) /

# Class: BlockedUsersFeed

## Hierarchy

  * [Feed](_core_feed_.feed.md)‹*[BlockedUsersFeedResponseRootObject](../interfaces/_responses_blocked_users_feed_response_.blockedusersfeedresponserootobject.md)*, *[BlockedUsersFeedResponseBlockedListItem](_responses_blocked_users_feed_response_.blockedusersfeedresponseblockedlistitem.md)*›

  * **BlockedUsersFeed**

## Index

### Constructors

* [constructor](_feeds_blocked_users_feed_.blockedusersfeed.md#constructor)

### Accessors

* [items$](_feeds_blocked_users_feed_.blockedusersfeed.md#items$)
* [state](_feeds_blocked_users_feed_.blockedusersfeed.md#state)

### Methods

* [deserialize](_feeds_blocked_users_feed_.blockedusersfeed.md#deserialize)
* [isMoreAvailable](_feeds_blocked_users_feed_.blockedusersfeed.md#ismoreavailable)
* [items](_feeds_blocked_users_feed_.blockedusersfeed.md#items)
* [observable](_feeds_blocked_users_feed_.blockedusersfeed.md#observable)
* [request](_feeds_blocked_users_feed_.blockedusersfeed.md#request)
* [serialize](_feeds_blocked_users_feed_.blockedusersfeed.md#serialize)
* [toPlain](_feeds_blocked_users_feed_.blockedusersfeed.md#toplain)

### Object literals

* [attemptOptions](_feeds_blocked_users_feed_.blockedusersfeed.md#attemptoptions)

## Constructors

###  constructor

\+ **new BlockedUsersFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[BlockedUsersFeed](_feeds_blocked_users_feed_.blockedusersfeed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[BlockedUsersFeed](_feeds_blocked_users_feed_.blockedusersfeed.md)*

## Accessors

###  items$

• **get items$**(): *`Observable<Item[]>`*

*Inherited from [Feed](_core_feed_.feed.md).[items$](_core_feed_.feed.md#items$)*

*Defined in [core/feed.ts:18](https://github.com/dilame/instagram-private-api/blob/173bc62/src/core/feed.ts#L18)*

**Returns:** *`Observable<Item[]>`*

___

###  state

• **set state**(`body`: [BlockedUsersFeedResponseRootObject](../interfaces/_responses_blocked_users_feed_response_.blockedusersfeedresponserootobject.md)): *void*

*Defined in [feeds/blocked-users.feed.ts:12](https://github.com/dilame/instagram-private-api/blob/173bc62/src/feeds/blocked-users.feed.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | [BlockedUsersFeedResponseRootObject](../interfaces/_responses_blocked_users_feed_response_.blockedusersfeedresponserootobject.md) |

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

▸ **items**(): *`Promise<BlockedUsersFeedResponseBlockedListItem[]>`*

*Overrides [Feed](_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)*

*Defined in [feeds/blocked-users.feed.ts:28](https://github.com/dilame/instagram-private-api/blob/173bc62/src/feeds/blocked-users.feed.ts#L28)*

**Returns:** *`Promise<BlockedUsersFeedResponseBlockedListItem[]>`*

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

▸ **request**(): *`Promise<BlockedUsersFeedResponseRootObject>`*

*Overrides [Feed](_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)*

*Defined in [feeds/blocked-users.feed.ts:17](https://github.com/dilame/instagram-private-api/blob/173bc62/src/feeds/blocked-users.feed.ts#L17)*

**Returns:** *`Promise<BlockedUsersFeedResponseRootObject>`*

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