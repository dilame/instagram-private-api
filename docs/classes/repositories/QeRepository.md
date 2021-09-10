[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / QeRepository

# Class: QeRepository

[repositories](../../modules/repositories.md).QeRepository

## Hierarchy

- `Repository`

  ↳ **`QeRepository`**

## Table of contents

### Constructors

- [constructor](QeRepository.md#constructor)

### Methods

- [sync](QeRepository.md#sync)
- [syncExperiments](QeRepository.md#syncexperiments)
- [syncLoginExperiments](QeRepository.md#syncloginexperiments)

## Constructors

### constructor

• **new QeRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### sync

▸ **sync**(`experiments`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `experiments` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/qe.repository.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/qe.repository.ts#L10)

___

### syncExperiments

▸ **syncExperiments**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/qe.repository.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/qe.repository.ts#L4)

___

### syncLoginExperiments

▸ **syncLoginExperiments**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/qe.repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/qe.repository.ts#L7)
