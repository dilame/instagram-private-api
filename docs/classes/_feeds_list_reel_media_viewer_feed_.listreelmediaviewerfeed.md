> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/list-reel-media-viewer.feed"](../modules/_feeds_list_reel_media_viewer_feed_.md) / [ListReelMediaViewerFeed](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md) /

# Class: ListReelMediaViewerFeed

## Hierarchy

  * [Feed](_core_feed_.feed.md)‹*[ListReelMediaViewerFeedResponseRootObject](../interfaces/_responses_list_reel_media_viewer_feed_response_.listreelmediaviewerfeedresponserootobject.md)*, *[ListReelMediaViewerFeedResponseUsersItem](../interfaces/_responses_list_reel_media_viewer_feed_response_.listreelmediaviewerfeedresponseusersitem.md)*›

  * **ListReelMediaViewerFeed**

## Index

### Constructors

* [constructor](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md#constructor)

### Accessors

* [items$](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md#items$)

### Methods

* [deserialize](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md#deserialize)
* [isMoreAvailable](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md#ismoreavailable)
* [items](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md#items)
* [observable](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md#observable)
* [request](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md#request)
* [serialize](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md#serialize)
* [toPlain](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md#toplain)

### Object literals

* [attemptOptions](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md#attemptoptions)

## Constructors

###  constructor

\+ **new ListReelMediaViewerFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[ListReelMediaViewerFeed](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[ListReelMediaViewerFeed](_feeds_list_reel_media_viewer_feed_.listreelmediaviewerfeed.md)*

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

*Defined in [feeds/list-reel-media-viewer.feed.ts:36](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/list-reel-media-viewer.feed.ts#L36)*

**Returns:** *boolean*

___

###  items

▸ **items**(): *`Promise<ListReelMediaViewerFeedResponseUsersItem[]>`*

*Overrides [Feed](_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)*

*Defined in [feeds/list-reel-media-viewer.feed.ts:14](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/list-reel-media-viewer.feed.ts#L14)*

**Returns:** *`Promise<ListReelMediaViewerFeedResponseUsersItem[]>`*

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

▸ **request**(): *`Promise<ListReelMediaViewerFeedResponseRootObject>`*

*Overrides [Feed](_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)*

*Defined in [feeds/list-reel-media-viewer.feed.ts:23](https://github.com/dilame/instagram-private-api/blob/3e16058/src/feeds/list-reel-media-viewer.feed.ts#L23)*

**Returns:** *`Promise<ListReelMediaViewerFeedResponseRootObject>`*

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