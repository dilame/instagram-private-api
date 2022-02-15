[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / IgtvRepository

# Class: IgtvRepository

[repositories](../../modules/repositories.md).IgtvRepository

## Hierarchy

- `Repository`

  ↳ **`IgtvRepository`**

## Table of contents

### Constructors

- [constructor](IgtvRepository.md#constructor)

### Methods

- [allUserSeries](IgtvRepository.md#alluserseries)
- [createSeries](IgtvRepository.md#createseries)
- [search](IgtvRepository.md#search)
- [seriesAddEpisode](IgtvRepository.md#seriesaddepisode)
- [writeSeenState](IgtvRepository.md#writeseenstate)

## Constructors

### constructor

• **new IgtvRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### allUserSeries

▸ **allUserSeries**(`user`, `data?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` \| `number` |
| `data` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/igtv.repository.ts:34](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/igtv.repository.ts#L34)

___

### createSeries

▸ **createSeries**(`title`, `description?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `title` | `string` | `undefined` |
| `description` | `string` | `''` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/igtv.repository.ts:43](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/igtv.repository.ts#L43)

___

### search

▸ **search**(`query?`): `Promise`<[`IgtvSearchResponseRootObject`](../../interfaces/responses/IgtvSearchResponseRootObject.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query` | `string` | `''` |

#### Returns

`Promise`<[`IgtvSearchResponseRootObject`](../../interfaces/responses/IgtvSearchResponseRootObject.md)\>

#### Defined in

[src/repositories/igtv.repository.ts:22](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/igtv.repository.ts#L22)

___

### seriesAddEpisode

▸ **seriesAddEpisode**(`series`, `mediaId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `series` | `string` \| `number` |
| `mediaId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/igtv.repository.ts:59](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/igtv.repository.ts#L59)

___

### writeSeenState

▸ **writeSeenState**(`options`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IgtvWriteSeenStateOptions`](../../interfaces/types/IgtvWriteSeenStateOptions.md) |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/igtv.repository.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/igtv.repository.ts#L8)
