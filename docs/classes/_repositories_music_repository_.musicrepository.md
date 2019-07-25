> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/music.repository"](../modules/_repositories_music_repository_.md) / [MusicRepository](_repositories_music_repository_.musicrepository.md) /

# Class: MusicRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **MusicRepository**

## Index

### Constructors

- [constructor](_repositories_music_repository_.musicrepository.md#constructor)

### Methods

- [genres](_repositories_music_repository_.musicrepository.md#genres)
- [lyrics](_repositories_music_repository_.musicrepository.md#lyrics)
- [moods](_repositories_music_repository_.musicrepository.md#moods)

## Constructors

### constructor

\+ **new MusicRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[MusicRepository](\_repositories_music_repository_.musicrepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[MusicRepository](\_repositories_music_repository_.musicrepository.md)\_

## Methods

### genres

▸ **genres**(`product?`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): _`Promise<MusicRepositoryGenresResponseRootObject>`_

_Defined in [repositories/music.repository.ts:22](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/music.repository.ts#L22)_

**Parameters:**

| Name       | Type                                                          |
| ---------- | ------------------------------------------------------------- |
| `product?` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) |

**Returns:** _`Promise<MusicRepositoryGenresResponseRootObject>`_

---

### lyrics

▸ **lyrics**(`trackId`: number | string): _`Promise<MusicRepositoryLyricsResponseRootObject>`_

_Defined in [repositories/music.repository.ts:37](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/music.repository.ts#L37)_

**Parameters:**

| Name      | Type             |
| --------- | ---------------- |
| `trackId` | number \| string |

**Returns:** _`Promise<MusicRepositoryLyricsResponseRootObject>`_

---

### moods

▸ **moods**(`product?`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): _`Promise<MusicRepositoryMoodsResponseRootObject>`_

_Defined in [repositories/music.repository.ts:7](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/music.repository.ts#L7)_

**Parameters:**

| Name       | Type                                                          |
| ---------- | ------------------------------------------------------------- |
| `product?` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) |

**Returns:** _`Promise<MusicRepositoryMoodsResponseRootObject>`_
