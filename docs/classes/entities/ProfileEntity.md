[instagram-private-api](../../README.md) / [entities](../../modules/entities.md) / ProfileEntity

# Class: ProfileEntity

[entities](../../modules/entities.md).ProfileEntity

## Hierarchy

- [`Entity`](../index/Entity.md)

  ↳ **`ProfileEntity`**

  ↳↳ [`AccountFollowersFeedResponseUsersItem`](../responses/AccountFollowersFeedResponseUsersItem.md)

  ↳↳ [`DiscoverFeedResponseUser`](../responses/DiscoverFeedResponseUser.md)

  ↳↳ [`PendingFriendshipsFeedResponseUsersItem`](../responses/PendingFriendshipsFeedResponseUsersItem.md)

  ↳↳ [`BestiesFeedResponseUsersItem`](../responses/BestiesFeedResponseUsersItem.md)

  ↳↳ [`AccountFollowingFeedResponseUsersItem`](../responses/AccountFollowingFeedResponseUsersItem.md)

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
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

[Entity](../index/Entity.md).[constructor](../index/Entity.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Properties

### pk

• **pk**: `string` \| `number`

#### Defined in

[src/entities/profile.entity.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/entities/profile.entity.ts#L4)

## Methods

### checkFollow

▸ **checkFollow**(): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/entities/profile.entity.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/entities/profile.entity.ts#L5)

___

### checkUnfollow

▸ **checkUnfollow**(): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/entities/profile.entity.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/entities/profile.entity.ts#L10)
