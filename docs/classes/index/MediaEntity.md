[instagram-private-api](../../README.md) / [index](../../modules/index.md) / MediaEntity

# Class: MediaEntity

[index](../../modules/index.md).MediaEntity

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`MediaEntity`**

## Table of contents

### Constructors

- [constructor](MediaEntity.md#constructor)

### Methods

- [oembed](MediaEntity.md#oembed)

## Constructors

### constructor

• **new MediaEntity**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Inherited from

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/repository.ts#L7)

## Methods

### oembed

▸ `Static` **oembed**(`url`): `Promise`<[`MediaEntityOembedResponse`](../../interfaces/index/MediaEntityOembedResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<[`MediaEntityOembedResponse`](../../interfaces/index/MediaEntityOembedResponse.md)\>

#### Defined in

[src/entities/media.entity.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/media.entity.ts#L6)
