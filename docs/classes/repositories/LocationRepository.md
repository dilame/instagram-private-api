[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / LocationRepository

# Class: LocationRepository

[repositories](../../modules/repositories.md).LocationRepository

## Hierarchy

- `Repository`

  ↳ **`LocationRepository`**

## Table of contents

### Constructors

- [constructor](LocationRepository.md#constructor)

### Methods

- [info](LocationRepository.md#info)
- [story](LocationRepository.md#story)

## Constructors

### constructor

• **new LocationRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### info

▸ **info**(`id`): `Promise`<[`LocationRepositoryInfoResponseRootObject`](../../interfaces/responses/LocationRepositoryInfoResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<[`LocationRepositoryInfoResponseRootObject`](../../interfaces/responses/LocationRepositoryInfoResponseRootObject.md)\>

#### Defined in

[src/repositories/location.repository.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/location.repository.ts#L6)

___

### story

▸ **story**(`id`): `Promise`<[`LocationRepositoryStoryResponseRootObject`](../../interfaces/responses/LocationRepositoryStoryResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<[`LocationRepositoryStoryResponseRootObject`](../../interfaces/responses/LocationRepositoryStoryResponseRootObject.md)\>

#### Defined in

[src/repositories/location.repository.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/location.repository.ts#L14)
