> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/music.repository"](../modules/_repositories_music_repository_.md) / [MusicRepository](_repositories_music_repository_.musicrepository.md) /

# Class: MusicRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **MusicRepository**

## Index

### Constructors

* [constructor](_repositories_music_repository_.musicrepository.md#constructor)

### Methods

* [genres](_repositories_music_repository_.musicrepository.md#genres)
* [lyrics](_repositories_music_repository_.musicrepository.md#lyrics)
* [moods](_repositories_music_repository_.musicrepository.md#moods)

## Constructors

###  constructor

\+ **new MusicRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[MusicRepository](_repositories_music_repository_.musicrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[MusicRepository](_repositories_music_repository_.musicrepository.md)*

## Methods

###  genres

▸ **genres**(`product?`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *`Promise<MusicRepositoryGenresResponseRootObject>`*

*Defined in [repositories/music.repository.ts:22](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/music.repository.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`product?` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) |

**Returns:** *`Promise<MusicRepositoryGenresResponseRootObject>`*

___

###  lyrics

▸ **lyrics**(`trackId`: number | string): *`Promise<MusicRepositoryLyricsResponseRootObject>`*

*Defined in [repositories/music.repository.ts:37](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/music.repository.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`trackId` | number \| string |

**Returns:** *`Promise<MusicRepositoryLyricsResponseRootObject>`*

___

###  moods

▸ **moods**(`product?`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *`Promise<MusicRepositoryMoodsResponseRootObject>`*

*Defined in [repositories/music.repository.ts:7](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/music.repository.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`product?` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) |

**Returns:** *`Promise<MusicRepositoryMoodsResponseRootObject>`*