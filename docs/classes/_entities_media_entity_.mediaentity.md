> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["entities/media.entity"](../modules/_entities_media_entity_.md) / [MediaEntity](_entities_media_entity_.mediaentity.md) /

# Class: MediaEntity

## Hierarchy

  * [Entity](_core_entity_.entity.md)

  * **MediaEntity**

## Index

### Constructors

* [constructor](_entities_media_entity_.mediaentity.md#constructor)

### Methods

* [oembed](_entities_media_entity_.mediaentity.md#static-oembed)

## Constructors

###  constructor

\+ **new MediaEntity**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[MediaEntity](_entities_media_entity_.mediaentity.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[MediaEntity](_entities_media_entity_.mediaentity.md)*

## Methods

### `Static` oembed

▸ **oembed**(`url`: string): *`Promise<MediaEntityOembedResponse>`*

*Defined in [entities/media.entity.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/media.entity.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *`Promise<MediaEntityOembedResponse>`*