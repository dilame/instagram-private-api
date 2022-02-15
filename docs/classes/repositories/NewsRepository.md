[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / NewsRepository

# Class: NewsRepository

[repositories](../../modules/repositories.md).NewsRepository

## Hierarchy

- `Repository`

  ↳ **`NewsRepository`**

## Table of contents

### Constructors

- [constructor](NewsRepository.md#constructor)

### Methods

- [inbox](NewsRepository.md#inbox)

## Constructors

### constructor

• **new NewsRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### inbox

▸ **inbox**(): `Promise`<[`NewsRepositoryInboxResponseRootObject`](../../interfaces/responses/NewsRepositoryInboxResponseRootObject.md)\>

#### Returns

`Promise`<[`NewsRepositoryInboxResponseRootObject`](../../interfaces/responses/NewsRepositoryInboxResponseRootObject.md)\>

#### Defined in

[src/repositories/news.repository.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/news.repository.ts#L5)
