[instagram-private-api](../../README.md) / [services](../../modules/services.md) / SimulateService

# Class: SimulateService

[services](../../modules/services.md).SimulateService

## Hierarchy

- `Repository`

  ↳ **`SimulateService`**

## Table of contents

### Constructors

- [constructor](SimulateService.md#constructor)

### Methods

- [postLoginFlow](SimulateService.md#postloginflow)
- [preLoginFlow](SimulateService.md#preloginflow)

## Constructors

### constructor

• **new SimulateService**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### postLoginFlow

▸ **postLoginFlow**(`concurrency?`, `toShuffle?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `concurrency?` | `number` |
| `toShuffle?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/services/simulate.service.ts:72](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/simulate.service.ts#L72)

___

### preLoginFlow

▸ **preLoginFlow**(`concurrency?`, `toShuffle?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `concurrency?` | `number` |
| `toShuffle?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/services/simulate.service.ts:64](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/simulate.service.ts#L64)
