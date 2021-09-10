[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / LauncherRepository

# Class: LauncherRepository

[repositories](../../modules/repositories.md).LauncherRepository

## Hierarchy

- `Repository`

  ↳ **`LauncherRepository`**

## Table of contents

### Constructors

- [constructor](LauncherRepository.md#constructor)

### Methods

- [postLoginSync](LauncherRepository.md#postloginsync)
- [preLoginSync](LauncherRepository.md#preloginsync)
- [sync](LauncherRepository.md#sync)

## Constructors

### constructor

• **new LauncherRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### postLoginSync

▸ **postLoginSync**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/launcher.repository.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/launcher.repository.ts#L11)

___

### preLoginSync

▸ **preLoginSync**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/launcher.repository.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/launcher.repository.ts#L4)

___

### sync

▸ **sync**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/launcher.repository.ts:22](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/launcher.repository.ts#L22)
