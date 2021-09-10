[instagram-private-api](../../README.md) / [index](../../modules/index.md) / EntityFactory

# Class: EntityFactory

[index](../../modules/index.md).EntityFactory

## Hierarchy

- `Repository`

  ↳ **`EntityFactory`**

## Table of contents

### Constructors

- [constructor](EntityFactory.md#constructor)

### Methods

- [directThread](EntityFactory.md#directthread)
- [profile](EntityFactory.md#profile)

## Constructors

### constructor

• **new EntityFactory**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### directThread

▸ **directThread**(`id`): [`DirectThreadEntity`](../entities/DirectThreadEntity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `string`[] |

#### Returns

[`DirectThreadEntity`](../entities/DirectThreadEntity.md)

#### Defined in

[src/core/entity.factory.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/entity.factory.ts#L5)

___

### profile

▸ **profile**(`pk`): [`ProfileEntity`](../entities/ProfileEntity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pk` | `string` |

#### Returns

[`ProfileEntity`](../entities/ProfileEntity.md)

#### Defined in

[src/core/entity.factory.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/entity.factory.ts#L15)
