[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / HighlightsRepository

# Class: HighlightsRepository

[repositories](../../modules/repositories.md).HighlightsRepository

## Hierarchy

- `Repository`

  ↳ **`HighlightsRepository`**

## Table of contents

### Constructors

- [constructor](HighlightsRepository.md#constructor)

### Methods

- [createReel](HighlightsRepository.md#createreel)
- [deleteReel](HighlightsRepository.md#deletereel)
- [editReel](HighlightsRepository.md#editreel)
- [highlightsTray](HighlightsRepository.md#highlightstray)

## Constructors

### constructor

• **new HighlightsRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### createReel

▸ **createReel**(`options`): `Promise`<[`HighlightsRepositoryCreateReelResponseRootObject`](../../interfaces/responses/HighlightsRepositoryCreateReelResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateHighlightsReelOptions`](../../interfaces/types/CreateHighlightsReelOptions.md) |

#### Returns

`Promise`<[`HighlightsRepositoryCreateReelResponseRootObject`](../../interfaces/responses/HighlightsRepositoryCreateReelResponseRootObject.md)\>

#### Defined in

[src/repositories/highlights.repository.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/highlights.repository.ts#L25)

___

### deleteReel

▸ **deleteReel**(`highlightId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `highlightId` | `string` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/highlights.repository.ts:67](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/highlights.repository.ts#L67)

___

### editReel

▸ **editReel**(`options`): `Promise`<[`HighlightsRepositoryEditReelResponseRootObject`](../../interfaces/responses/HighlightsRepositoryEditReelResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EditHighlightsReelOptions`](../../interfaces/types/EditHighlightsReelOptions.md) |

#### Returns

`Promise`<[`HighlightsRepositoryEditReelResponseRootObject`](../../interfaces/responses/HighlightsRepositoryEditReelResponseRootObject.md)\>

#### Defined in

[src/repositories/highlights.repository.ts:47](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/highlights.repository.ts#L47)

___

### highlightsTray

▸ **highlightsTray**(`userId`): `Promise`<[`HighlightsRepositoryHighlightsTrayResponseRootObject`](../../interfaces/responses/HighlightsRepositoryHighlightsTrayResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` \| `number` |

#### Returns

`Promise`<[`HighlightsRepositoryHighlightsTrayResponseRootObject`](../../interfaces/responses/HighlightsRepositoryHighlightsTrayResponseRootObject.md)\>

#### Defined in

[src/repositories/highlights.repository.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/highlights.repository.ts#L11)
