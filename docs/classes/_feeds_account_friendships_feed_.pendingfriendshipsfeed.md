> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["feeds/account-friendships.feed"](../modules/_feeds_account_friendships_feed_.md) / [PendingFriendshipsFeed](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md) /

# Class: PendingFriendshipsFeed

## Hierarchy

- [Feed](_core_feed_.feed.md)‹_[PendingFriendshipsFeedResponse](../interfaces/\_responses_account_friendships_feed_response_.pendingfriendshipsfeedresponse.md)_, _[PendingFriendshipsFeedResponseUsersItem](_responses_account_friendships_feed_response_.pendingfriendshipsfeedresponseusersitem.md)\_›

- **PendingFriendshipsFeed**

## Index

### Constructors

- [constructor](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md#constructor)

### Properties

- [items\$](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md#items$)

### Accessors

- [state](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md#state)

### Methods

- [deserialize](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md#deserialize)
- [isMoreAvailable](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md#ismoreavailable)
- [items](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md#items)
- [request](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md#request)
- [serialize](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md#serialize)
- [toPlain](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md#toplain)

### Object literals

- [attemptOptions](_feeds_account_friendships_feed_.pendingfriendshipsfeed.md#attemptoptions)

## Constructors

### constructor

\+ **new PendingFriendshipsFeed**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[PendingFriendshipsFeed](\_feeds_account_friendships_feed_.pendingfriendshipsfeed.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[PendingFriendshipsFeed](\_feeds_account_friendships_feed_.pendingfriendshipsfeed.md)\_

## Properties

### items\$

• **items\$**: _any_ = new Observable<Item[]>(observer => {
let subscribed = true;
process.nextTick(async () => {
do {
try {
await retry(
async () => {
const items = await this.items();
observer.next(items);
},
{
handleError(error, context) {
// If instagram just tells us to wait - we are waiting.
if (
error instanceof IgResponseError &&
error.response.statusCode === 400 &&
error.response.body.status === 'fail'
) {
return;
} else {
context.abort();
}
},
...this.attemptOptions,
},
);
} catch (e) {
observer.error(e);
}
} while (this.isMoreAvailable() && subscribed);
observer.complete();
});
return () => (subscribed = false);
})

_Inherited from [Feed](\_core_feed_.feed.md).[items\$](_core_feed_.feed.md#items$)\_

_Defined in [core/feed.ts:18](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L18)_

## Accessors

### state

• **set state**(`body`: [PendingFriendshipsFeedResponse](../interfaces/_responses_account_friendships_feed_response_.pendingfriendshipsfeedresponse.md)): _void_

_Defined in [feeds/account-friendships.feed.ts:12](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/feeds/account-friendships.feed.ts#L12)_

**Parameters:**

| Name   | Type                                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `body` | [PendingFriendshipsFeedResponse](../interfaces/_responses_account_friendships_feed_response_.pendingfriendshipsfeedresponse.md) |

**Returns:** _void_

## Methods

### deserialize

▸ **deserialize**(`data`: string): _void_

_Inherited from [Feed](\_core_feed_.feed.md).[deserialize](_core_feed_.feed.md#deserialize)\_

_Defined in [core/feed.ts:69](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L69)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `data` | string |

**Returns:** _void_

---

### isMoreAvailable

▸ **isMoreAvailable**(): _boolean_

_Inherited from [Feed](\_core_feed_.feed.md).[isMoreAvailable](_core_feed_.feed.md#ismoreavailable)\_

_Defined in [core/feed.ts:77](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L77)_

**Returns:** _boolean_

---

### items

▸ **items**(): _`Promise<any>`_

_Overrides [Feed](\_core_feed_.feed.md).[items](_core_feed_.feed.md#abstract-items)\_

_Defined in [feeds/account-friendships.feed.ts:29](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/feeds/account-friendships.feed.ts#L29)_

**Returns:** _`Promise<any>`_

---

### request

▸ **request**(): _`Promise<any>`_

_Overrides [Feed](\_core_feed_.feed.md).[request](_core_feed_.feed.md#abstract-request)\_

_Defined in [feeds/account-friendships.feed.ts:17](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/feeds/account-friendships.feed.ts#L17)_

**Returns:** _`Promise<any>`_

---

### serialize

▸ **serialize**(): _any_

_Inherited from [Feed](\_core_feed_.feed.md).[serialize](_core_feed_.feed.md#serialize)\_

_Defined in [core/feed.ts:65](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L65)_

**Returns:** _any_

---

### toPlain

▸ **toPlain**(): _any_

_Inherited from [Feed](\_core_feed_.feed.md).[toPlain](_core_feed_.feed.md#toplain)\_

_Defined in [core/feed.ts:73](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L73)_

**Returns:** _any_

## Object literals

### attemptOptions

### ▪ **attemptOptions**: _object_

_Inherited from [Feed](\_core_feed_.feed.md).[attemptOptions](_core_feed_.feed.md#attemptoptions)\_

_Defined in [core/feed.ts:10](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L10)_

### delay

• **delay**: _number_ = 60000

_Defined in [core/feed.ts:11](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L11)_

### factor

• **factor**: _number_ = 1.5

_Defined in [core/feed.ts:12](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L12)_

### jitter

• **jitter**: _boolean_ = true

_Defined in [core/feed.ts:16](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L16)_

### maxAttempts

• **maxAttempts**: _number_ = 10

_Defined in [core/feed.ts:13](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L13)_

### maxDelay

• **maxDelay**: _number_ = 300000

_Defined in [core/feed.ts:15](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L15)_

### minDelay

• **minDelay**: _number_ = 60000

_Defined in [core/feed.ts:14](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/feed.ts#L14)_
