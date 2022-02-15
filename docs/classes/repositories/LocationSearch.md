[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / LocationSearch

# Class: LocationSearch

[repositories](../../modules/repositories.md).LocationSearch

## Hierarchy

- `Repository`

  ↳ **`LocationSearch`**

## Table of contents

### Constructors

- [constructor](LocationSearch.md#constructor)

### Methods

- [index](LocationSearch.md#index)

## Constructors

### constructor

• **new LocationSearch**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### index

▸ **index**(`latitude`, `longitude`, `searchQuery?`): `Promise`<[`LocationRepositorySearchResponseRootObject`](../../interfaces/responses/LocationRepositorySearchResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `latitude` | `number` |
| `longitude` | `number` |
| `searchQuery?` | `string` |

#### Returns

`Promise`<[`LocationRepositorySearchResponseRootObject`](../../interfaces/responses/LocationRepositorySearchResponseRootObject.md)\>

#### Defined in

[src/repositories/location-search.repository.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/location-search.repository.ts#L5)
