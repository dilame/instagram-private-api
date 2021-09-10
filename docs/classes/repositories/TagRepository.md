[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / TagRepository

# Class: TagRepository

[repositories](../../modules/repositories.md).TagRepository

## Hierarchy

- `Repository`

  ↳ **`TagRepository`**

## Table of contents

### Constructors

- [constructor](TagRepository.md#constructor)

### Methods

- [search](TagRepository.md#search)
- [section](TagRepository.md#section)

## Constructors

### constructor

• **new TagRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### search

▸ **search**(`q`): `Promise`<[`TagRepositorySearchResponseRootObject`](../../interfaces/responses/TagRepositorySearchResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |

#### Returns

`Promise`<[`TagRepositorySearchResponseRootObject`](../../interfaces/responses/TagRepositorySearchResponseRootObject.md)\>

#### Defined in

[src/repositories/tag.repository.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/tag.repository.ts#L5)

___

### section

▸ **section**(`q`, `tab`): `Promise`<[`TagRepositorySearchResponseRootObject`](../../interfaces/responses/TagRepositorySearchResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `tab` | `string` |

#### Returns

`Promise`<[`TagRepositorySearchResponseRootObject`](../../interfaces/responses/TagRepositorySearchResponseRootObject.md)\>

#### Defined in

[src/repositories/tag.repository.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/tag.repository.ts#L17)
