> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/usertags.feed"](../modules/_feeds_usertags_feed_.md) / [UsertagsFeed](_feeds_usertags_feed_.usertagsfeed.md) /

# Class: UsertagsFeed

## Hierarchy

  * [Feed](_core_feed_.feed.md)‹*[UsertagsFeedResponseRootObject](../interfaces/_responses_usertags_feed_response_.usertagsfeedresponserootobject.md)*, *[UsertagsFeedResponseItemsItem](../interfaces/_responses_usertags_feed_response_.usertagsfeedresponseitemsitem.md)*›

  * **UsertagsFeed**

## Index

### Constructors

* [constructor](_feeds_usertags_feed_.usertagsfeed.md#constructor)

### Properties

* [id](_feeds_usertags_feed_.usertagsfeed.md#id)

### Accessors

* [items$](_feeds_usertags_feed_.usertagsfeed.md#items$)

### Methods

* [deserialize](_feeds_usertags_feed_.usertagsfeed.md#deserialize)
* [isMoreAvailable](_feeds_usertags_feed_.usertagsfeed.md#ismoreavailable)
* [items](_feeds_usertags_feed_.usertagsfeed.md#items)
* [observable](_feeds_usertags_feed_.usertagsfeed.md#observable)
* [request](_feeds_usertags_feed_.usertagsfeed.md#request)
* [serialize](_feeds_usertags_feed_.usertagsfeed.md#serialize)
* [toPlain](_feeds_usertags_feed_.usertagsfeed.md#toplain)

### Object literals

* [attemptOptions](_feeds_usertags_feed_.usertagsfeed.md#attemptoptions)

## Constructors

###  constructor

\+ **new UsertagsFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[UsertagsFeed](_feeds_usertags_feed_.usertagsfeed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[UsertagsFeed](_feeds_usertags_feed_.usertagsfeed.md)*

## Properties

###  id

• **id**: *number | string*

*Defined in [feeds/usertags.feed.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/usertags.feed.ts#L6)*

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

▸ **items**(): *`Promise<UsertagsFeedResponseItemsItem[]>`*

*Overrides [Feed](_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)*

*Defined in [feeds/usertags.feed.ts:26](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/usertags.feed.ts#L26)*

**Returns:** *`Promise<UsertagsFeedResponseItemsItem[]>`*

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

▸ **request**(): *`Promise<UsertagsFeedResponseRootObject>`*

*Overrides [Feed](_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)*

*Defined in [feeds/usertags.feed.ts:15](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/usertags.feed.ts#L15)*

**Returns:** *`Promise<UsertagsFeedResponseRootObject>`*

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