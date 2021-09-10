[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / RestrictActionRepository

# Class: RestrictActionRepository

[repositories](../../modules/repositories.md).RestrictActionRepository

## Hierarchy

- `Repository`

  ↳ **`RestrictActionRepository`**

## Table of contents

### Constructors

- [constructor](RestrictActionRepository.md#constructor)

### Methods

- [restrict](RestrictActionRepository.md#restrict)
- [unrestrict](RestrictActionRepository.md#unrestrict)

## Constructors

### constructor

• **new RestrictActionRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### restrict

▸ **restrict**(`targetUserId`): `Promise`<[`RestrictActionRepositoryRestrictResponseRootObject`](../../interfaces/responses/RestrictActionRepositoryRestrictResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetUserId` | `string` \| `number` |

#### Returns

`Promise`<[`RestrictActionRepositoryRestrictResponseRootObject`](../../interfaces/responses/RestrictActionRepositoryRestrictResponseRootObject.md)\>

#### Defined in

[src/repositories/restrict-action.repository.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/restrict-action.repository.ts#L5)

___

### unrestrict

▸ **unrestrict**(`targetUserId`): `Promise`<[`RestrictActionRepositoryRestrictResponseRootObject`](../../interfaces/responses/RestrictActionRepositoryRestrictResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetUserId` | `string` \| `number` |

#### Returns

`Promise`<[`RestrictActionRepositoryRestrictResponseRootObject`](../../interfaces/responses/RestrictActionRepositoryRestrictResponseRootObject.md)\>

#### Defined in

[src/repositories/restrict-action.repository.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/restrict-action.repository.ts#L18)
