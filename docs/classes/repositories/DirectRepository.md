[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / DirectRepository

# Class: DirectRepository

[repositories](../../modules/repositories.md).DirectRepository

## Hierarchy

- `Repository`

  ↳ **`DirectRepository`**

## Table of contents

### Constructors

- [constructor](DirectRepository.md#constructor)

### Methods

- [createGroupThread](DirectRepository.md#creategroupthread)
- [getPresence](DirectRepository.md#getpresence)
- [rankedRecipients](DirectRepository.md#rankedrecipients)

## Constructors

### constructor

• **new DirectRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### createGroupThread

▸ **createGroupThread**(`recipientUsers`, `threadTitle`): `Promise`<[`DirectRepositoryCreateGroupThreadResponseRootObject`](../../interfaces/responses/DirectRepositoryCreateGroupThreadResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipientUsers` | `string`[] |
| `threadTitle` | `string` |

#### Returns

`Promise`<[`DirectRepositoryCreateGroupThreadResponseRootObject`](../../interfaces/responses/DirectRepositoryCreateGroupThreadResponseRootObject.md)\>

#### Defined in

[src/repositories/direct.repository.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct.repository.ts#L9)

___

### getPresence

▸ **getPresence**(): `Promise`<[`DirectRepositoryGetPresenceResponseRootObject`](../../interfaces/responses/DirectRepositoryGetPresenceResponseRootObject.md)\>

#### Returns

`Promise`<[`DirectRepositoryGetPresenceResponseRootObject`](../../interfaces/responses/DirectRepositoryGetPresenceResponseRootObject.md)\>

#### Defined in

[src/repositories/direct.repository.ts:43](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct.repository.ts#L43)

___

### rankedRecipients

▸ **rankedRecipients**(`mode?`, `query?`): `Promise`<[`DirectRepositoryRankedRecipientsResponseRootObject`](../../interfaces/responses/DirectRepositoryRankedRecipientsResponseRootObject.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mode` | ``"raven"`` \| ``"reshare"`` | `'raven'` |
| `query` | `string` | `''` |

#### Returns

`Promise`<[`DirectRepositoryRankedRecipientsResponseRootObject`](../../interfaces/responses/DirectRepositoryRankedRecipientsResponseRootObject.md)\>

#### Defined in

[src/repositories/direct.repository.ts:27](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct.repository.ts#L27)
