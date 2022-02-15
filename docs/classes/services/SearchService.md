[instagram-private-api](../../README.md) / [services](../../modules/services.md) / SearchService

# Class: SearchService

[services](../../modules/services.md).SearchService

## Hierarchy

- `Repository`

  ↳ **`SearchService`**

## Table of contents

### Constructors

- [constructor](SearchService.md#constructor)

### Methods

- [blended](SearchService.md#blended)
- [blendedItems](SearchService.md#blendeditems)
- [location](SearchService.md#location)
- [places](SearchService.md#places)
- [tags](SearchService.md#tags)
- [users](SearchService.md#users)

## Constructors

### constructor

• **new SearchService**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### blended

▸ **blended**(`query`): `Promise`<[`FbsearchRepositoryTopsearchFlatResponseListItem`](../../interfaces/responses/FbsearchRepositoryTopsearchFlatResponseListItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`<[`FbsearchRepositoryTopsearchFlatResponseListItem`](../../interfaces/responses/FbsearchRepositoryTopsearchFlatResponseListItem.md)[]\>

#### Defined in

[src/services/search.service.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/search.service.ts#L4)

___

### blendedItems

▸ **blendedItems**(`query`): `Promise`<([`FbsearchRepositoryTopsearchFlatResponseUser`](../../interfaces/responses/FbsearchRepositoryTopsearchFlatResponseUser.md) \| [`FbsearchRepositoryTopsearchFlatResponseHashtag`](../../interfaces/responses/FbsearchRepositoryTopsearchFlatResponseHashtag.md) \| [`FbsearchRepositoryTopsearchFlatResponsePlace`](../../interfaces/responses/FbsearchRepositoryTopsearchFlatResponsePlace.md))[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`<([`FbsearchRepositoryTopsearchFlatResponseUser`](../../interfaces/responses/FbsearchRepositoryTopsearchFlatResponseUser.md) \| [`FbsearchRepositoryTopsearchFlatResponseHashtag`](../../interfaces/responses/FbsearchRepositoryTopsearchFlatResponseHashtag.md) \| [`FbsearchRepositoryTopsearchFlatResponsePlace`](../../interfaces/responses/FbsearchRepositoryTopsearchFlatResponsePlace.md))[]\>

#### Defined in

[src/services/search.service.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/search.service.ts#L8)

___

### location

▸ **location**(`latitude`, `longitude`, `query?`): `Promise`<[`LocationRepositorySearchResponseVenuesItem`](../../interfaces/responses/LocationRepositorySearchResponseVenuesItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `latitude` | `number` |
| `longitude` | `number` |
| `query?` | `string` |

#### Returns

`Promise`<[`LocationRepositorySearchResponseVenuesItem`](../../interfaces/responses/LocationRepositorySearchResponseVenuesItem.md)[]\>

#### Defined in

[src/services/search.service.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/search.service.ts#L25)

___

### places

▸ **places**(`query`): `Promise`<[`FbsearchRepositoryPlacesResponseItemsItem`](../../interfaces/responses/FbsearchRepositoryPlacesResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`<[`FbsearchRepositoryPlacesResponseItemsItem`](../../interfaces/responses/FbsearchRepositoryPlacesResponseItemsItem.md)[]\>

#### Defined in

[src/services/search.service.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/search.service.ts#L20)

___

### tags

▸ **tags**(`query`): `Promise`<[`TagRepositorySearchResponseResultsItem`](../../interfaces/responses/TagRepositorySearchResponseResultsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`<[`TagRepositorySearchResponseResultsItem`](../../interfaces/responses/TagRepositorySearchResponseResultsItem.md)[]\>

#### Defined in

[src/services/search.service.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/search.service.ts#L16)

___

### users

▸ **users**(`query`): `Promise`<[`UserRepositorySearchResponseUsersItem`](../../interfaces/responses/UserRepositorySearchResponseUsersItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`<[`UserRepositorySearchResponseUsersItem`](../../interfaces/responses/UserRepositorySearchResponseUsersItem.md)[]\>

#### Defined in

[src/services/search.service.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/search.service.ts#L12)
