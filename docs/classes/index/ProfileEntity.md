[instagram-private-api](../../README.md) / [index](../../modules/index.md) / ProfileEntity

# Class: ProfileEntity

[index](../../modules/index.md).ProfileEntity

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`ProfileEntity`**

  ↳↳ [`AccountFollowersFeedResponseUsersItem`](AccountFollowersFeedResponseUsersItem.md)

  ↳↳ [`DiscoverFeedResponseUser`](DiscoverFeedResponseUser.md)

  ↳↳ [`PendingFriendshipsFeedResponseUsersItem`](PendingFriendshipsFeedResponseUsersItem.md)

  ↳↳ [`BestiesFeedResponseUsersItem`](BestiesFeedResponseUsersItem.md)

  ↳↳ [`AccountFollowingFeedResponseUsersItem`](AccountFollowingFeedResponseUsersItem.md)

## Table of contents

### Constructors

- [constructor](ProfileEntity.md#constructor)

### Properties

- [pk](ProfileEntity.md#pk)

### Methods

- [checkFollow](ProfileEntity.md#checkfollow)
- [checkUnfollow](ProfileEntity.md#checkunfollow)

## Constructors

### constructor

• **new ProfileEntity**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Inherited from

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/repository.ts#L7)

## Properties

### pk

• **pk**: `string` \| `number`

#### Defined in

[src/entities/profile.entity.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/profile.entity.ts#L4)

## Methods

### checkFollow

▸ **checkFollow**(): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/index/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/index/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/entities/profile.entity.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/profile.entity.ts#L5)

___

### checkUnfollow

▸ **checkUnfollow**(): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/index/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/index/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/entities/profile.entity.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/profile.entity.ts#L10)
