> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["responses/discover.feed.response"](../modules/_responses_discover_feed_response_.md) / [DiscoverFeedResponseUser](_responses_discover_feed_response_.discoverfeedresponseuser.md) /

# Class: DiscoverFeedResponseUser

## Hierarchy

  * [ProfileEntity](_entities_profile_entity_.profileentity.md)

  * **DiscoverFeedResponseUser**

## Index

### Constructors

* [constructor](_responses_discover_feed_response_.discoverfeedresponseuser.md#constructor)

### Properties

* [full_name](_responses_discover_feed_response_.discoverfeedresponseuser.md#full_name)
* [has_anonymous_profile_picture](_responses_discover_feed_response_.discoverfeedresponseuser.md#has_anonymous_profile_picture)
* [is_private](_responses_discover_feed_response_.discoverfeedresponseuser.md#is_private)
* [is_verified](_responses_discover_feed_response_.discoverfeedresponseuser.md#is_verified)
* [pk](_responses_discover_feed_response_.discoverfeedresponseuser.md#pk)
* [profile_pic_id](_responses_discover_feed_response_.discoverfeedresponseuser.md#profile_pic_id)
* [profile_pic_url](_responses_discover_feed_response_.discoverfeedresponseuser.md#profile_pic_url)
* [username](_responses_discover_feed_response_.discoverfeedresponseuser.md#username)

### Methods

* [checkFollow](_responses_discover_feed_response_.discoverfeedresponseuser.md#checkfollow)
* [checkUnfollow](_responses_discover_feed_response_.discoverfeedresponseuser.md#checkunfollow)

## Constructors

###  constructor

\+ **new DiscoverFeedResponseUser**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[DiscoverFeedResponseUser](_responses_discover_feed_response_.discoverfeedresponseuser.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[DiscoverFeedResponseUser](_responses_discover_feed_response_.discoverfeedresponseuser.md)*

## Properties

###  full_name

• **full_name**: *string*

*Defined in [responses/discover.feed.response.ts:32](https://github.com/dilame/instagram-private-api/blob/3e16058/src/responses/discover.feed.response.ts#L32)*

___

###  has_anonymous_profile_picture

• **has_anonymous_profile_picture**: *boolean*

*Defined in [responses/discover.feed.response.ts:37](https://github.com/dilame/instagram-private-api/blob/3e16058/src/responses/discover.feed.response.ts#L37)*

___

###  is_private

• **is_private**: *boolean*

*Defined in [responses/discover.feed.response.ts:33](https://github.com/dilame/instagram-private-api/blob/3e16058/src/responses/discover.feed.response.ts#L33)*

___

###  is_verified

• **is_verified**: *boolean*

*Defined in [responses/discover.feed.response.ts:36](https://github.com/dilame/instagram-private-api/blob/3e16058/src/responses/discover.feed.response.ts#L36)*

___

###  pk

• **pk**: *string*

*Overrides [ProfileEntity](_entities_profile_entity_.profileentity.md).[pk](_entities_profile_entity_.profileentity.md#pk)*

*Defined in [responses/discover.feed.response.ts:30](https://github.com/dilame/instagram-private-api/blob/3e16058/src/responses/discover.feed.response.ts#L30)*

___

###  profile_pic_id

• **profile_pic_id**: *string*

*Defined in [responses/discover.feed.response.ts:35](https://github.com/dilame/instagram-private-api/blob/3e16058/src/responses/discover.feed.response.ts#L35)*

___

###  profile_pic_url

• **profile_pic_url**: *string*

*Defined in [responses/discover.feed.response.ts:34](https://github.com/dilame/instagram-private-api/blob/3e16058/src/responses/discover.feed.response.ts#L34)*

___

###  username

• **username**: *string*

*Defined in [responses/discover.feed.response.ts:31](https://github.com/dilame/instagram-private-api/blob/3e16058/src/responses/discover.feed.response.ts#L31)*

## Methods

###  checkFollow

▸ **checkFollow**(): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Inherited from [ProfileEntity](_entities_profile_entity_.profileentity.md).[checkFollow](_entities_profile_entity_.profileentity.md#checkfollow)*

*Defined in [entities/profile.entity.ts:5](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/profile.entity.ts#L5)*

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  checkUnfollow

▸ **checkUnfollow**(): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Inherited from [ProfileEntity](_entities_profile_entity_.profileentity.md).[checkUnfollow](_entities_profile_entity_.profileentity.md#checkunfollow)*

*Defined in [entities/profile.entity.ts:10](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/profile.entity.ts#L10)*

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*