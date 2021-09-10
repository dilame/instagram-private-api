[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / AdsRepository

# Class: AdsRepository

[repositories](../../modules/repositories.md).AdsRepository

## Hierarchy

- `Repository`

  ↳ **`AdsRepository`**

## Table of contents

### Constructors

- [constructor](AdsRepository.md#constructor)

### Methods

- [graphQL](AdsRepository.md#graphql)

## Constructors

### constructor

• **new AdsRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### graphQL

▸ **graphQL**<`T`\>(`options`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GraphQLRequestOptions`](../../interfaces/types/GraphQLRequestOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/repositories/ads.repository.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/ads.repository.ts#L5)
