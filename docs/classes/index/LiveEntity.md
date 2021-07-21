[instagram-private-api](../../README.md) / [index](../../modules/index.md) / LiveEntity

# Class: LiveEntity

[index](../../modules/index.md).LiveEntity

## Hierarchy

- [`Entity`](Entity.md)

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
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Inherited from

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/repository.ts#L7)

## Methods

### getUrlAndKey

▸ `Static` **getUrlAndKey**(`info`): [`LiveRtmpSettings`](../../interfaces/index/LiveRtmpSettings.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Object` |
| `info.broadcast_id` | `string` |
| `info.upload_url` | `string` |

#### Returns

[`LiveRtmpSettings`](../../interfaces/index/LiveRtmpSettings.md)

#### Defined in

[src/entities/live.entity.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/live.entity.ts#L5)
