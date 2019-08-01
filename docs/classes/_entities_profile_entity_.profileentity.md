> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["entities/profile.entity"](../modules/_entities_profile_entity_.md) / [ProfileEntity](_entities_profile_entity_.profileentity.md) /

# Class: ProfileEntity

## Hierarchy

- [Entity](_core_entity_.entity.md)

- **ProfileEntity**

- [AccountFollowersFeedResponseUsersItem](_responses_account_followers_feed_response_.accountfollowersfeedresponseusersitem.md)

- [AccountFollowingFeedResponseUsersItem](_responses_account_following_feed_response_.accountfollowingfeedresponseusersitem.md)

- [PendingFriendshipsFeedResponseUsersItem](_responses_account_friendships_feed_response_.pendingfriendshipsfeedresponseusersitem.md)

## Index

### Constructors

- [constructor](_entities_profile_entity_.profileentity.md#constructor)

### Properties

- [pk](_entities_profile_entity_.profileentity.md#pk)

### Methods

- [checkFollow](_entities_profile_entity_.profileentity.md#checkfollow)
- [checkUnfollow](_entities_profile_entity_.profileentity.md#checkunfollow)

## Constructors

### constructor

\+ **new ProfileEntity**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[ProfileEntity](\_entities_profile_entity_.profileentity.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[ProfileEntity](\_entities_profile_entity_.profileentity.md)\_

## Properties

### pk

• **pk**: _string | number_

_Defined in [entities/profile.entity.ts:4](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/profile.entity.ts#L4)_

## Methods

### checkFollow

▸ **checkFollow**(): _`Promise<any>`_

_Defined in [entities/profile.entity.ts:5](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/profile.entity.ts#L5)_

**Returns:** _`Promise<any>`_

---

### checkUnfollow

▸ **checkUnfollow**(): _`Promise<any>`_

_Defined in [entities/profile.entity.ts:10](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/profile.entity.ts#L10)_

**Returns:** _`Promise<any>`_
