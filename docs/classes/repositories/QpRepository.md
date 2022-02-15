[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / QpRepository

# Class: QpRepository

[repositories](../../modules/repositories.md).QpRepository

## Hierarchy

- `Repository`

  ↳ **`QpRepository`**

## Table of contents

### Constructors

- [constructor](QpRepository.md#constructor)

### Properties

- [surfacesToQueries](QpRepository.md#surfacestoqueries)
- [surfacesToTriggers](QpRepository.md#surfacestotriggers)

### Methods

- [batchFetch](QpRepository.md#batchfetch)
- [getCooldowns](QpRepository.md#getcooldowns)

## Constructors

### constructor

• **new QpRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Properties

### surfacesToQueries

• **surfacesToQueries**: `string`

#### Defined in

[src/repositories/qp.repository.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/qp.repository.ts#L26)

___

### surfacesToTriggers

• **surfacesToTriggers**: `string`

#### Defined in

[src/repositories/qp.repository.ts:27](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/qp.repository.ts#L27)

## Methods

### batchFetch

▸ **batchFetch**(): `Promise`<[`IgResponse`](../../modules/types.md#igresponse)<`any`\>\>

#### Returns

`Promise`<[`IgResponse`](../../modules/types.md#igresponse)<`any`\>\>

#### Defined in

[src/repositories/qp.repository.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/qp.repository.ts#L10)

___

### getCooldowns

▸ **getCooldowns**(): `Promise`<[`IgResponse`](../../modules/types.md#igresponse)<`any`\>\>

#### Returns

`Promise`<[`IgResponse`](../../modules/types.md#igresponse)<`any`\>\>

#### Defined in

[src/repositories/qp.repository.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/qp.repository.ts#L4)
