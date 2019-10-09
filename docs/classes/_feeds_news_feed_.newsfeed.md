> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/news.feed"](../modules/_feeds_news_feed_.md) / [NewsFeed](_feeds_news_feed_.newsfeed.md) /

# Class: NewsFeed

## Hierarchy

  * [Feed](_core_feed_.feed.md)‹*[NewsFeedResponseRootObject](../interfaces/_responses_news_feed_response_.newsfeedresponserootobject.md)*, *[NewsFeedResponseStoriesItem](_responses_news_feed_response_.newsfeedresponsestoriesitem.md)*›

  * **NewsFeed**

## Index

### Constructors

* [constructor](_feeds_news_feed_.newsfeed.md#constructor)

### Accessors

* [items$](_feeds_news_feed_.newsfeed.md#items$)
* [state](_feeds_news_feed_.newsfeed.md#state)

### Methods

* [deserialize](_feeds_news_feed_.newsfeed.md#deserialize)
* [isMoreAvailable](_feeds_news_feed_.newsfeed.md#ismoreavailable)
* [items](_feeds_news_feed_.newsfeed.md#items)
* [observable](_feeds_news_feed_.newsfeed.md#observable)
* [request](_feeds_news_feed_.newsfeed.md#request)
* [serialize](_feeds_news_feed_.newsfeed.md#serialize)
* [toPlain](_feeds_news_feed_.newsfeed.md#toplain)

### Object literals

* [attemptOptions](_feeds_news_feed_.newsfeed.md#attemptoptions)

## Constructors

###  constructor

\+ **new NewsFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[NewsFeed](_feeds_news_feed_.newsfeed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[NewsFeed](_feeds_news_feed_.newsfeed.md)*

## Accessors

###  items$

• **get items$**(): *`Observable<Item[]>`*

*Inherited from [Feed](_core_feed_.feed.md).[items$](_core_feed_.feed.md#items$)*

*Defined in [core/feed.ts:18](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/feed.ts#L18)*

**Returns:** *`Observable<Item[]>`*

___

###  state

• **set state**(`body`: [NewsFeedResponseRootObject](../interfaces/_responses_news_feed_response_.newsfeedresponserootobject.md)): *void*

*Defined in [feeds/news.feed.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/news.feed.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | [NewsFeedResponseRootObject](../interfaces/_responses_news_feed_response_.newsfeedresponserootobject.md) |

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

▸ **items**(): *`Promise<NewsFeedResponseStoriesItem[]>`*

*Overrides [Feed](_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)*

*Defined in [feeds/news.feed.ts:25](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/news.feed.ts#L25)*

**Returns:** *`Promise<NewsFeedResponseStoriesItem[]>`*

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

▸ **request**(): *`Promise<NewsFeedResponseRootObject>`*

*Overrides [Feed](_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)*

*Defined in [feeds/news.feed.ts:14](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/news.feed.ts#L14)*

**Returns:** *`Promise<NewsFeedResponseRootObject>`*

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