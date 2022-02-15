[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / FbsearchRepository

# Class: FbsearchRepository

[repositories](../../modules/repositories.md).FbsearchRepository

## Hierarchy

- `Repository`

  ↳ **`FbsearchRepository`**

## Table of contents

### Constructors

- [constructor](FbsearchRepository.md#constructor)

### Methods

- [places](FbsearchRepository.md#places)
- [recentSearches](FbsearchRepository.md#recentsearches)
- [suggestedSearches](FbsearchRepository.md#suggestedsearches)
- [topsearchFlat](FbsearchRepository.md#topsearchflat)

## Constructors

### constructor

• **new FbsearchRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### places

▸ **places**(`query`): `Promise`<[`FbsearchRepositoryPlacesResponseRootObject`](../../interfaces/responses/FbsearchRepositoryPlacesResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`<[`FbsearchRepositoryPlacesResponseRootObject`](../../interfaces/responses/FbsearchRepositoryPlacesResponseRootObject.md)\>

#### Defined in

[src/repositories/fbsearch.repository.ts:36](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/fbsearch.repository.ts#L36)

___

### recentSearches

▸ **recentSearches**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/fbsearch.repository.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/fbsearch.repository.ts#L17)

___

### suggestedSearches

▸ **suggestedSearches**(`type`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"places"`` \| ``"blended"`` \| ``"users"`` \| ``"hashtags"`` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/fbsearch.repository.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/fbsearch.repository.ts#L8)

___

### topsearchFlat

▸ **topsearchFlat**(`query`): `Promise`<[`FbsearchRepositoryTopsearchFlatResponseRootObject`](../../interfaces/responses/FbsearchRepositoryTopsearchFlatResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`<[`FbsearchRepositoryTopsearchFlatResponseRootObject`](../../interfaces/responses/FbsearchRepositoryTopsearchFlatResponseRootObject.md)\>

#### Defined in

[src/repositories/fbsearch.repository.ts:24](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/fbsearch.repository.ts#L24)
