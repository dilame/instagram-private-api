[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / DirectThreadRepository

# Class: DirectThreadRepository

[repositories](../../modules/repositories.md).DirectThreadRepository

## Hierarchy

- `Repository`

  ↳ **`DirectThreadRepository`**

## Table of contents

### Constructors

- [constructor](DirectThreadRepository.md#constructor)

### Methods

- [addUser](DirectThreadRepository.md#adduser)
- [approve](DirectThreadRepository.md#approve)
- [approveMultiple](DirectThreadRepository.md#approvemultiple)
- [approveParticipantRequests](DirectThreadRepository.md#approveparticipantrequests)
- [broadcast](DirectThreadRepository.md#broadcast)
- [decline](DirectThreadRepository.md#decline)
- [declineAll](DirectThreadRepository.md#declineall)
- [declineMultiple](DirectThreadRepository.md#declinemultiple)
- [deleteItem](DirectThreadRepository.md#deleteitem)
- [getByParticipants](DirectThreadRepository.md#getbyparticipants)
- [hide](DirectThreadRepository.md#hide)
- [leave](DirectThreadRepository.md#leave)
- [markItemSeen](DirectThreadRepository.md#markitemseen)
- [mute](DirectThreadRepository.md#mute)
- [unmute](DirectThreadRepository.md#unmute)
- [updateTitle](DirectThreadRepository.md#updatetitle)

## Constructors

### constructor

• **new DirectThreadRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### addUser

▸ **addUser**(`threadId`, `userIds`): `Promise`<[`DirectThreadRepositoryAddUserResponseRootObject`](../../interfaces/responses/DirectThreadRepositoryAddUserResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` \| `number` |
| `userIds` | `string`[] \| `number`[] |

#### Returns

`Promise`<[`DirectThreadRepositoryAddUserResponseRootObject`](../../interfaces/responses/DirectThreadRepositoryAddUserResponseRootObject.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:147](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L147)

___

### approve

▸ **approve**(`threadId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` \| `number` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L14)

___

### approveMultiple

▸ **approveMultiple**(`threadIds`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadIds` | `string`[] \| `number`[] |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L26)

___

### approveParticipantRequests

▸ **approveParticipantRequests**(`threadId`, `userIds`): `Promise`<[`DirectThreadRepositoryApproveParticipantRequestResponseRootObject`](../../interfaces/responses/DirectThreadRepositoryApproveParticipantRequestResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` \| `number` |
| `userIds` | `string`[] |

#### Returns

`Promise`<[`DirectThreadRepositoryApproveParticipantRequestResponseRootObject`](../../interfaces/responses/DirectThreadRepositoryApproveParticipantRequestResponseRootObject.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:76](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L76)

___

### broadcast

▸ **broadcast**(`options`): `Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/responses/DirectThreadRepositoryBroadcastResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DirectThreadBroadcastOptions`](../../modules/types.md#directthreadbroadcastoptions) |

#### Returns

`Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/responses/DirectThreadRepositoryBroadcastResponseRootObject.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:204](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L204)

___

### decline

▸ **decline**(`threadId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` \| `number` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:39](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L39)

___

### declineAll

▸ **declineAll**(): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:64](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L64)

___

### declineMultiple

▸ **declineMultiple**(`threadIds`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadIds` | `string`[] \| `number`[] |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:51](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L51)

___

### deleteItem

▸ **deleteItem**(`threadId`, `itemId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` \| `number` |
| `itemId` | `string` \| `number` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:232](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L232)

___

### getByParticipants

▸ **getByParticipants**(`recipientUsers`): `Promise`<[`DirectThreadRepositoryGetByParticipantsResponseRootObject`](../../interfaces/responses/DirectThreadRepositoryGetByParticipantsResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipientUsers` | `string`[] \| `number`[] |

#### Returns

`Promise`<[`DirectThreadRepositoryGetByParticipantsResponseRootObject`](../../interfaces/responses/DirectThreadRepositoryGetByParticipantsResponseRootObject.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:94](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L94)

___

### hide

▸ **hide**(`threadId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:175](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L175)

___

### leave

▸ **leave**(`threadId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:163](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L163)

___

### markItemSeen

▸ **markItemSeen**(`threadId`, `threadItemId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` |
| `threadItemId` | `string` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:188](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L188)

___

### mute

▸ **mute**(`threadId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` \| `number` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:123](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L123)

___

### unmute

▸ **unmute**(`threadId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` \| `number` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:135](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L135)

___

### updateTitle

▸ **updateTitle**(`threadId`, `title`): `Promise`<[`DirectThreadRepositoryUpdateTitleResponseRootObject`](../../interfaces/responses/DirectThreadRepositoryUpdateTitleResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadId` | `string` \| `number` |
| `title` | `string` |

#### Returns

`Promise`<[`DirectThreadRepositoryUpdateTitleResponseRootObject`](../../interfaces/responses/DirectThreadRepositoryUpdateTitleResponseRootObject.md)\>

#### Defined in

[src/repositories/direct-thread.repository.ts:107](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/direct-thread.repository.ts#L107)
