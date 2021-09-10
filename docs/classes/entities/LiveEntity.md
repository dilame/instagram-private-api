[instagram-private-api](../../README.md) / [entities](../../modules/entities.md) / LiveEntity

# Class: LiveEntity

[entities](../../modules/entities.md).LiveEntity

## Hierarchy

- [`Entity`](../index/Entity.md)

  ↳ **`LiveEntity`**

## Table of contents

### Constructors

- [constructor](LiveEntity.md#constructor)

### Methods

- [getUrlAndKey](LiveEntity.md#geturlandkey)

## Constructors

### constructor

• **new LiveEntity**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

[Entity](../index/Entity.md).[constructor](../index/Entity.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### getUrlAndKey

▸ `Static` **getUrlAndKey**(`info`): [`LiveRtmpSettings`](../../interfaces/types/LiveRtmpSettings.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Object` |
| `info.broadcast_id` | `string` |
| `info.upload_url` | `string` |

#### Returns

[`LiveRtmpSettings`](../../interfaces/types/LiveRtmpSettings.md)

#### Defined in

[src/entities/live.entity.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/entities/live.entity.ts#L5)
