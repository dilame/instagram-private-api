[instagram-private-api](../../README.md) / [entities](../../modules/entities.md) / MediaEntity

# Class: MediaEntity

[entities](../../modules/entities.md).MediaEntity

## Hierarchy

- [`Entity`](../index/Entity.md)

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
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

[Entity](../index/Entity.md).[constructor](../index/Entity.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### oembed

▸ `Static` **oembed**(`url`): `Promise`<[`MediaEntityOembedResponse`](../../interfaces/responses/MediaEntityOembedResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<[`MediaEntityOembedResponse`](../../interfaces/responses/MediaEntityOembedResponse.md)\>

#### Defined in

[src/entities/media.entity.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/entities/media.entity.ts#L6)
