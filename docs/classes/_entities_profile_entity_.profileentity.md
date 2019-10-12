> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["entities/profile.entity"](../modules/_entities_profile_entity_.md) / [ProfileEntity](_entities_profile_entity_.profileentity.md) /

# Class: ProfileEntity

## Hierarchy

  * [Entity](_core_entity_.entity.md)

  * **ProfileEntity**

  * [AccountFollowersFeedResponseUsersItem](_responses_account_followers_feed_response_.accountfollowersfeedresponseusersitem.md)

  * [DiscoverFeedResponseUser](_responses_discover_feed_response_.discoverfeedresponseuser.md)

  * [PendingFriendshipsFeedResponseUsersItem](_responses_account_friendships_feed_response_.pendingfriendshipsfeedresponseusersitem.md)

  * [AccountFollowingFeedResponseUsersItem](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md)

## Index

### Constructors

* [constructor](_entities_profile_entity_.profileentity.md#constructor)

### Properties

* [pk](_entities_profile_entity_.profileentity.md#pk)

### Methods

* [checkFollow](_entities_profile_entity_.profileentity.md#checkfollow)
* [checkUnfollow](_entities_profile_entity_.profileentity.md#checkunfollow)

## Constructors

###  constructor

\+ **new ProfileEntity**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[ProfileEntity](_entities_profile_entity_.profileentity.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[ProfileEntity](_entities_profile_entity_.profileentity.md)*

## Properties

###  pk

• **pk**: *string | number*

*Defined in [entities/profile.entity.ts:4](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/profile.entity.ts#L4)*

## Methods

###  checkFollow

▸ **checkFollow**(): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [entities/profile.entity.ts:5](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/profile.entity.ts#L5)*

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  checkUnfollow

▸ **checkUnfollow**(): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [entities/profile.entity.ts:10](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/profile.entity.ts#L10)*

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*