[instagram-private-api](../../README.md) / [responses](../../modules/responses.md) / PendingFriendshipsFeedResponseUsersItem

# Class: PendingFriendshipsFeedResponseUsersItem

[responses](../../modules/responses.md).PendingFriendshipsFeedResponseUsersItem

## Hierarchy

- [`ProfileEntity`](../entities/ProfileEntity.md)

  ↳ **`PendingFriendshipsFeedResponseUsersItem`**

## Table of contents

### Constructors

- [constructor](PendingFriendshipsFeedResponseUsersItem.md#constructor)

### Properties

- [full\_name](PendingFriendshipsFeedResponseUsersItem.md#full_name)
- [has\_anonymous\_profile\_picture](PendingFriendshipsFeedResponseUsersItem.md#has_anonymous_profile_picture)
- [is\_favorite](PendingFriendshipsFeedResponseUsersItem.md#is_favorite)
- [is\_private](PendingFriendshipsFeedResponseUsersItem.md#is_private)
- [is\_verified](PendingFriendshipsFeedResponseUsersItem.md#is_verified)
- [latest\_reel\_media](PendingFriendshipsFeedResponseUsersItem.md#latest_reel_media)
- [pk](PendingFriendshipsFeedResponseUsersItem.md#pk)
- [profile\_pic\_id](PendingFriendshipsFeedResponseUsersItem.md#profile_pic_id)
- [profile\_pic\_url](PendingFriendshipsFeedResponseUsersItem.md#profile_pic_url)
- [username](PendingFriendshipsFeedResponseUsersItem.md#username)

### Methods

- [checkFollow](PendingFriendshipsFeedResponseUsersItem.md#checkfollow)
- [checkUnfollow](PendingFriendshipsFeedResponseUsersItem.md#checkunfollow)

## Constructors

### constructor

• **new PendingFriendshipsFeedResponseUsersItem**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

[ProfileEntity](../entities/ProfileEntity.md).[constructor](../entities/ProfileEntity.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Properties

### full\_name

• **full\_name**: `string`

#### Defined in

[src/responses/account-friendships.feed.response.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/responses/account-friendships.feed.response.ts#L14)

___

### has\_anonymous\_profile\_picture

• **has\_anonymous\_profile\_picture**: `boolean`

#### Defined in

[src/responses/account-friendships.feed.response.ts:19](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/responses/account-friendships.feed.response.ts#L19)

___

### is\_favorite

• **is\_favorite**: `boolean`

#### Defined in

[src/responses/account-friendships.feed.response.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/responses/account-friendships.feed.response.ts#L20)

___

### is\_private

• **is\_private**: `boolean`

#### Defined in

[src/responses/account-friendships.feed.response.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/responses/account-friendships.feed.response.ts#L15)

___

### is\_verified

• **is\_verified**: `boolean`

#### Defined in

[src/responses/account-friendships.feed.response.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/responses/account-friendships.feed.response.ts#L18)

___

### latest\_reel\_media

• `Optional` **latest\_reel\_media**: `number`

#### Defined in

[src/responses/account-friendships.feed.response.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/responses/account-friendships.feed.response.ts#L21)

___

### pk

• **pk**: `number`

#### Overrides

[ProfileEntity](../entities/ProfileEntity.md).[pk](../entities/ProfileEntity.md#pk)

#### Defined in

[src/responses/account-friendships.feed.response.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/responses/account-friendships.feed.response.ts#L12)

___

### profile\_pic\_id

• `Optional` **profile\_pic\_id**: `string`

#### Defined in

[src/responses/account-friendships.feed.response.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/responses/account-friendships.feed.response.ts#L17)

___

### profile\_pic\_url

• **profile\_pic\_url**: `string`

#### Defined in

[src/responses/account-friendships.feed.response.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/responses/account-friendships.feed.response.ts#L16)

___

### username

• **username**: `string`

#### Defined in

[src/responses/account-friendships.feed.response.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/responses/account-friendships.feed.response.ts#L13)

## Methods

### checkFollow

▸ **checkFollow**(): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Inherited from

[ProfileEntity](../entities/ProfileEntity.md).[checkFollow](../entities/ProfileEntity.md#checkfollow)

#### Defined in

[src/entities/profile.entity.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/entities/profile.entity.ts#L5)

___

### checkUnfollow

▸ **checkUnfollow**(): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Inherited from

[ProfileEntity](../entities/ProfileEntity.md).[checkUnfollow](../entities/ProfileEntity.md#checkunfollow)

#### Defined in

[src/entities/profile.entity.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/entities/profile.entity.ts#L10)
