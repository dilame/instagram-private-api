> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["entities/media.entity"](../modules/_entities_media_entity_.md) / [MediaEntity](_entities_media_entity_.mediaentity.md) /

# Class: MediaEntity

## Hierarchy

- [Entity](_core_entity_.entity.md)

- **MediaEntity**

## Index

### Constructors

- [constructor](_entities_media_entity_.mediaentity.md#constructor)

### Methods

- [oembed](_entities_media_entity_.mediaentity.md#static-oembed)

## Constructors

### constructor

\+ **new MediaEntity**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[MediaEntity](\_entities_media_entity_.mediaentity.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[MediaEntity](\_entities_media_entity_.mediaentity.md)\_

## Methods

### `Static` oembed

▸ **oembed**(`url`: string): _`Promise<MediaEntityOembedResponse>`_

_Defined in [entities/media.entity.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/media.entity.ts#L6)_

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `url` | string |

**Returns:** _`Promise<MediaEntityOembedResponse>`_
