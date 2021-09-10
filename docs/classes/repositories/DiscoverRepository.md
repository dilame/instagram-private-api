[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / DiscoverRepository

# Class: DiscoverRepository

[repositories](../../modules/repositories.md).DiscoverRepository

## Hierarchy

- `Repository`

  ↳ **`DiscoverRepository`**

## Table of contents

### Constructors

- [constructor](DiscoverRepository.md#constructor)

### Methods

- [chaining](DiscoverRepository.md#chaining)
- [markSuSeen](DiscoverRepository.md#marksuseen)
- [profileSuBadge](DiscoverRepository.md#profilesubadge)
- [topicalExplore](DiscoverRepository.md#topicalexplore)

## Constructors

### constructor

• **new DiscoverRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### chaining

▸ **chaining**(`targetId`): `Promise`<`DiscoverRepositoryChainingResponseRootObject`\>

Gets the suggestions based on a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetId` | `string` | user id/pk |

#### Returns

`Promise`<`DiscoverRepositoryChainingResponseRootObject`\>

#### Defined in

[src/repositories/discover.repository.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/discover.repository.ts#L9)

___

### markSuSeen

▸ **markSuSeen**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/discover.repository.ts:34](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/discover.repository.ts#L34)

___

### profileSuBadge

▸ **profileSuBadge**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/discover.repository.ts:46](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/discover.repository.ts#L46)

___

### topicalExplore

▸ **topicalExplore**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/discover.repository.ts:19](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/discover.repository.ts#L19)
