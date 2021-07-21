[instagram-private-api](../../README.md) / [index](../../modules/index.md) / BestiesFeedResponseUsersItem

# Class: BestiesFeedResponseUsersItem

[index](../../modules/index.md).BestiesFeedResponseUsersItem

## Hierarchy

- [`ProfileEntity`](ProfileEntity.md)

  ↳ **`BestiesFeedResponseUsersItem`**

## Table of contents

### Constructors

- [constructor](BestiesFeedResponseUsersItem.md#constructor)

### Properties

- [friendship\_status](BestiesFeedResponseUsersItem.md#friendship_status)
- [full\_name](BestiesFeedResponseUsersItem.md#full_name)
- [has\_anonymous\_profile\_picture](BestiesFeedResponseUsersItem.md#has_anonymous_profile_picture)
- [is\_bestie](BestiesFeedResponseUsersItem.md#is_bestie)
- [is\_private](BestiesFeedResponseUsersItem.md#is_private)
- [is\_verified](BestiesFeedResponseUsersItem.md#is_verified)
- [latest\_reel\_media](BestiesFeedResponseUsersItem.md#latest_reel_media)
- [pk](BestiesFeedResponseUsersItem.md#pk)
- [profile\_pic\_id](BestiesFeedResponseUsersItem.md#profile_pic_id)
- [profile\_pic\_url](BestiesFeedResponseUsersItem.md#profile_pic_url)
- [username](BestiesFeedResponseUsersItem.md#username)

### Methods

- [checkFollow](BestiesFeedResponseUsersItem.md#checkfollow)
- [checkUnfollow](BestiesFeedResponseUsersItem.md#checkunfollow)

## Constructors

### constructor

• **new BestiesFeedResponseUsersItem**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Inherited from

[ProfileEntity](ProfileEntity.md).[constructor](ProfileEntity.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/repository.ts#L7)

## Properties

### friendship\_status

• **friendship\_status**: `object`

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:22](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L22)

___

### full\_name

• **full\_name**: `string`

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L14)

___

### has\_anonymous\_profile\_picture

• **has\_anonymous\_profile\_picture**: `boolean`

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:19](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L19)

___

### is\_bestie

• **is\_bestie**: `boolean`

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L21)

___

### is\_private

• **is\_private**: `boolean`

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L15)

___

### is\_verified

• **is\_verified**: `boolean`

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L18)

___

### latest\_reel\_media

• `Optional` **latest\_reel\_media**: `number`

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L20)

___

### pk

• **pk**: `number`

#### Overrides

[ProfileEntity](ProfileEntity.md).[pk](ProfileEntity.md#pk)

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L12)

___

### profile\_pic\_id

• `Optional` **profile\_pic\_id**: `string`

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L17)

___

### profile\_pic\_url

• **profile\_pic\_url**: `string`

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L16)

___

### username

• **username**: `string`

#### Defined in

[src/responses/account-friendships-besties.feed.response.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/responses/account-friendships-besties.feed.response.ts#L13)

## Methods

### checkFollow

▸ **checkFollow**(): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/index/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/index/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Inherited from

[ProfileEntity](ProfileEntity.md).[checkFollow](ProfileEntity.md#checkfollow)

#### Defined in

[src/entities/profile.entity.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/profile.entity.ts#L5)

___

### checkUnfollow

▸ **checkUnfollow**(): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/index/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/index/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Inherited from

[ProfileEntity](ProfileEntity.md).[checkUnfollow](ProfileEntity.md#checkunfollow)

#### Defined in

[src/entities/profile.entity.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/profile.entity.ts#L10)
