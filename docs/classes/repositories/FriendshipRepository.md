[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / FriendshipRepository

# Class: FriendshipRepository

[repositories](../../modules/repositories.md).FriendshipRepository

## Hierarchy

- `Repository`

  ↳ **`FriendshipRepository`**

## Table of contents

### Constructors

- [constructor](FriendshipRepository.md#constructor)

### Methods

- [approve](FriendshipRepository.md#approve)
- [block](FriendshipRepository.md#block)
- [create](FriendshipRepository.md#create)
- [deny](FriendshipRepository.md#deny)
- [destroy](FriendshipRepository.md#destroy)
- [mutePostsOrStoryFromFollow](FriendshipRepository.md#mutepostsorstoryfromfollow)
- [removeFollower](FriendshipRepository.md#removefollower)
- [setBesties](FriendshipRepository.md#setbesties)
- [show](FriendshipRepository.md#show)
- [showMany](FriendshipRepository.md#showmany)
- [unblock](FriendshipRepository.md#unblock)
- [unmutePostsOrStoryFromFollow](FriendshipRepository.md#unmutepostsorstoryfromfollow)

## Constructors

### constructor

• **new FriendshipRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### approve

▸ **approve**(`id`, `mediaIdAttribution?`): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `mediaIdAttribution?` | `string` |

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/repositories/friendship.repository.ts:46](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L46)

___

### block

▸ **block**(`id`, `mediaIdAttribution?`): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `mediaIdAttribution?` | `string` |

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/repositories/friendship.repository.ts:30](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L30)

___

### create

▸ **create**(`id`, `mediaIdAttribution?`): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `mediaIdAttribution?` | `string` |

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/repositories/friendship.repository.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L38)

___

### deny

▸ **deny**(`id`, `mediaIdAttribution?`): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `mediaIdAttribution?` | `string` |

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/repositories/friendship.repository.ts:50](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L50)

___

### destroy

▸ **destroy**(`id`, `mediaIdAttribution?`): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `mediaIdAttribution?` | `string` |

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/repositories/friendship.repository.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L42)

___

### mutePostsOrStoryFromFollow

▸ **mutePostsOrStoryFromFollow**(`options`): `Promise`<[`FriendshipRepositoryChangeResponseRootObject`](../../interfaces/responses/FriendshipRepositoryChangeResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.mediaId?` | `string` |
| `options.targetPostsAuthorId?` | `string` |
| `options.targetReelAuthorId?` | `string` |

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseRootObject`](../../interfaces/responses/FriendshipRepositoryChangeResponseRootObject.md)\>

#### Defined in

[src/repositories/friendship.repository.ts:94](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L94)

___

### removeFollower

▸ **removeFollower**(`id`): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/repositories/friendship.repository.ts:54](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L54)

___

### setBesties

▸ **setBesties**(`input?`): `Promise`<`Record`<`string`, [`FriendshipRepositorySetBestiesResponseRootObject_status`](../../interfaces/responses/FriendshipRepositorySetBestiesResponseRootObject_status.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`SetBestiesInput`](../../modules/types.md#setbestiesinput) |

#### Returns

`Promise`<`Record`<`string`, [`FriendshipRepositorySetBestiesResponseRootObject_status`](../../interfaces/responses/FriendshipRepositorySetBestiesResponseRootObject_status.md)\>\>

#### Defined in

[src/repositories/friendship.repository.ts:75](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L75)

___

### show

▸ **show**(`id`): `Promise`<[`FriendshipRepositoryShowResponseRootObject`](../../interfaces/responses/FriendshipRepositoryShowResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<[`FriendshipRepositoryShowResponseRootObject`](../../interfaces/responses/FriendshipRepositoryShowResponseRootObject.md)\>

#### Defined in

[src/repositories/friendship.repository.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L10)

___

### showMany

▸ **showMany**(`userIds`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userIds` | `string`[] \| `number`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/friendship.repository.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L17)

___

### unblock

▸ **unblock**(`id`, `mediaIdAttribution?`): `Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `mediaIdAttribution?` | `string` |

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseFriendship_status`](../../interfaces/responses/FriendshipRepositoryChangeResponseFriendship_status.md)\>

#### Defined in

[src/repositories/friendship.repository.ts:34](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L34)

___

### unmutePostsOrStoryFromFollow

▸ **unmutePostsOrStoryFromFollow**(`options`): `Promise`<[`FriendshipRepositoryChangeResponseRootObject`](../../interfaces/responses/FriendshipRepositoryChangeResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.targetPostsAuthorId?` | `string` |
| `options.targetReelAuthorId?` | `string` |

#### Returns

`Promise`<[`FriendshipRepositoryChangeResponseRootObject`](../../interfaces/responses/FriendshipRepositoryChangeResponseRootObject.md)\>

#### Defined in

[src/repositories/friendship.repository.ts:106](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/friendship.repository.ts#L106)
