[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / UserRepository

# Class: UserRepository

[repositories](../../modules/repositories.md).UserRepository

## Hierarchy

- `Repository`

  ↳ **`UserRepository`**

## Table of contents

### Constructors

- [constructor](UserRepository.md#constructor)

### Methods

- [accountDetails](UserRepository.md#accountdetails)
- [arlinkDownloadInfo](UserRepository.md#arlinkdownloadinfo)
- [flagUser](UserRepository.md#flaguser)
- [formerUsernames](UserRepository.md#formerusernames)
- [getIdByUsername](UserRepository.md#getidbyusername)
- [info](UserRepository.md#info)
- [lookup](UserRepository.md#lookup)
- [search](UserRepository.md#search)
- [searchExact](UserRepository.md#searchexact)
- [sharedFollowerAccounts](UserRepository.md#sharedfolloweraccounts)
- [usernameinfo](UserRepository.md#usernameinfo)

## Constructors

### constructor

• **new UserRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### accountDetails

▸ **accountDetails**(`id?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` \| `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/user.repository.ts:61](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L61)

___

### arlinkDownloadInfo

▸ **arlinkDownloadInfo**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/user.repository.ts:28](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L28)

___

### flagUser

▸ **flagUser**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/user.repository.ts:84](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L84)

___

### formerUsernames

▸ **formerUsernames**(`id?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` \| `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/user.repository.ts:69](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L69)

___

### getIdByUsername

▸ **getIdByUsername**(`username`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/repositories/user.repository.ts:101](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L101)

___

### info

▸ **info**(`id`): `Promise`<[`UserRepositoryInfoResponseUser`](../../interfaces/responses/UserRepositoryInfoResponseUser.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<[`UserRepositoryInfoResponseUser`](../../interfaces/responses/UserRepositoryInfoResponseUser.md)\>

#### Defined in

[src/repositories/user.repository.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L14)

___

### lookup

▸ **lookup**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UserLookupOptions`](../../interfaces/types/UserLookupOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/user.repository.ts:106](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L106)

___

### search

▸ **search**(`username`): `Promise`<[`UserRepositorySearchResponseRootObject`](../../interfaces/responses/UserRepositorySearchResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`Promise`<[`UserRepositorySearchResponseRootObject`](../../interfaces/responses/UserRepositorySearchResponseRootObject.md)\>

#### Defined in

[src/repositories/user.repository.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L38)

___

### searchExact

▸ **searchExact**(`username`): `Promise`<[`UserRepositorySearchResponseUsersItem`](../../interfaces/responses/UserRepositorySearchResponseUsersItem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`Promise`<[`UserRepositorySearchResponseUsersItem`](../../interfaces/responses/UserRepositorySearchResponseUsersItem.md)\>

#### Defined in

[src/repositories/user.repository.ts:50](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L50)

___

### sharedFollowerAccounts

▸ **sharedFollowerAccounts**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/user.repository.ts:77](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L77)

___

### usernameinfo

▸ **usernameinfo**(`username`): `Promise`<[`UserRepositoryInfoResponseUser`](../../interfaces/responses/UserRepositoryInfoResponseUser.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`Promise`<[`UserRepositoryInfoResponseUser`](../../interfaces/responses/UserRepositoryInfoResponseUser.md)\>

#### Defined in

[src/repositories/user.repository.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/user.repository.ts#L21)
