> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["responses/account-following.feed.response"](../modules/_responses_account_following_feed_response_.md) / [AccountFollowingFeedResponseUsersItem](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md) /

# Class: AccountFollowingFeedResponseUsersItem

## Hierarchy

- [ProfileEntity](_entities_profile_entity_.profileentity.md)

- **AccountFollowingFeedResponseUsersItem**

## Index

### Constructors

- [constructor](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#constructor)

### Properties

- [full_name](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#full_name)
- [has_anonymous_profile_picture](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#has_anonymous_profile_picture)
- [is_favorite](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#is_favorite)
- [is_private](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#is_private)
- [is_verified](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#is_verified)
- [latest_reel_media](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#optional-latest_reel_media)
- [pk](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#pk)
- [profile_pic_id](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#optional-profile_pic_id)
- [profile_pic_url](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#profile_pic_url)
- [username](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#username)

### Methods

- [checkFollow](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#checkfollow)
- [checkUnfollow](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md#checkunfollow)

## Constructors

### constructor

\+ **new AccountFollowingFeedResponseUsersItem**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[AccountFollowingFeedResponseUsersItem](\_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[AccountFollowingFeedResponseUsersItem](\_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md)\_

## Properties

### full_name

• **full_name**: _string_

_Defined in [responses/account-following.feed.response.ts:14](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/responses/account-following.feed.response.ts#L14)_

---

### has_anonymous_profile_picture

• **has_anonymous_profile_picture**: _boolean_

_Defined in [responses/account-following.feed.response.ts:19](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/responses/account-following.feed.response.ts#L19)_

---

### is_favorite

• **is_favorite**: _boolean_

_Defined in [responses/account-following.feed.response.ts:20](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/responses/account-following.feed.response.ts#L20)_

---

### is_private

• **is_private**: _boolean_

_Defined in [responses/account-following.feed.response.ts:15](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/responses/account-following.feed.response.ts#L15)_

---

### is_verified

• **is_verified**: _boolean_

_Defined in [responses/account-following.feed.response.ts:18](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/responses/account-following.feed.response.ts#L18)_

---

### `Optional` latest_reel_media

• **latest_reel_media**? : _number_

_Defined in [responses/account-following.feed.response.ts:21](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/responses/account-following.feed.response.ts#L21)_

---

### pk

• **pk**: _number_

_Overrides [ProfileEntity](\_entities_profile_entity_.profileentity.md).[pk](_entities_profile_entity_.profileentity.md#pk)\_

_Defined in [responses/account-following.feed.response.ts:12](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/responses/account-following.feed.response.ts#L12)_

---

### `Optional` profile_pic_id

• **profile_pic_id**? : _string_

_Defined in [responses/account-following.feed.response.ts:17](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/responses/account-following.feed.response.ts#L17)_

---

### profile_pic_url

• **profile_pic_url**: _string_

_Defined in [responses/account-following.feed.response.ts:16](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/responses/account-following.feed.response.ts#L16)_

---

### username

• **username**: _string_

_Defined in [responses/account-following.feed.response.ts:13](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/responses/account-following.feed.response.ts#L13)_

## Methods

### checkFollow

▸ **checkFollow**(): _`Promise<any>`_

_Inherited from [ProfileEntity](\_entities_profile_entity_.profileentity.md).[checkFollow](_entities_profile_entity_.profileentity.md#checkfollow)\_

_Defined in [entities/profile.entity.ts:5](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/profile.entity.ts#L5)_

**Returns:** _`Promise<any>`_

---

### checkUnfollow

▸ **checkUnfollow**(): _`Promise<any>`_

_Inherited from [ProfileEntity](\_entities_profile_entity_.profileentity.md).[checkUnfollow](_entities_profile_entity_.profileentity.md#checkunfollow)\_

_Defined in [entities/profile.entity.ts:10](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/profile.entity.ts#L10)_

**Returns:** _`Promise<any>`_
