[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / MusicRepository

# Class: MusicRepository

[repositories](../../modules/repositories.md).MusicRepository

## Hierarchy

- `Repository`

  ↳ **`MusicRepository`**

## Table of contents

### Constructors

- [constructor](MusicRepository.md#constructor)

### Methods

- [genres](MusicRepository.md#genres)
- [lyrics](MusicRepository.md#lyrics)
- [moods](MusicRepository.md#moods)

## Constructors

### constructor

• **new MusicRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### genres

▸ **genres**(`product?`): `Promise`<[`MusicRepositoryGenresResponseRootObject`](../../interfaces/responses/MusicRepositoryGenresResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `product?` | `string` |

#### Returns

`Promise`<[`MusicRepositoryGenresResponseRootObject`](../../interfaces/responses/MusicRepositoryGenresResponseRootObject.md)\>

#### Defined in

[src/repositories/music.repository.ts:22](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/music.repository.ts#L22)

___

### lyrics

▸ **lyrics**(`trackId`): `Promise`<`MusicRepositoryLyricsResponseRootObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackId` | `string` \| `number` |

#### Returns

`Promise`<`MusicRepositoryLyricsResponseRootObject`\>

#### Defined in

[src/repositories/music.repository.ts:37](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/music.repository.ts#L37)

___

### moods

▸ **moods**(`product?`): `Promise`<[`MusicRepositoryMoodsResponseRootObject`](../../interfaces/responses/MusicRepositoryMoodsResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `product?` | `string` |

#### Returns

`Promise`<[`MusicRepositoryMoodsResponseRootObject`](../../interfaces/responses/MusicRepositoryMoodsResponseRootObject.md)\>

#### Defined in

[src/repositories/music.repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/music.repository.ts#L7)
