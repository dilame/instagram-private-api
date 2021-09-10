[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / ChallengeRepository

# Class: ChallengeRepository

[repositories](../../modules/repositories.md).ChallengeRepository

All methods expects [State.checkpoint](../index/State.md#checkpoint) to be filled with [CheckpointResponse](../../interfaces/responses/CheckpointResponse.md).
It is filled in automatically when [IgCheckpointError](../errors/IgCheckpointError.md) occurs.

## Hierarchy

- `Repository`

  ↳ **`ChallengeRepository`**

## Table of contents

### Constructors

- [constructor](ChallengeRepository.md#constructor)

### Methods

- [auto](ChallengeRepository.md#auto)
- [deltaLoginReview](ChallengeRepository.md#deltaloginreview)
- [replay](ChallengeRepository.md#replay)
- [reset](ChallengeRepository.md#reset)
- [selectVerifyMethod](ChallengeRepository.md#selectverifymethod)
- [sendPhoneNumber](ChallengeRepository.md#sendphonenumber)
- [sendSecurityCode](ChallengeRepository.md#sendsecuritycode)
- [state](ChallengeRepository.md#state)

## Constructors

### constructor

• **new ChallengeRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### auto

▸ **auto**(`reset?`): `Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reset` | `boolean` | `false` |

#### Returns

`Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

#### Defined in

[src/repositories/challenge.repository.ts:80](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/challenge.repository.ts#L80)

___

### deltaLoginReview

▸ **deltaLoginReview**(`choice`): `Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

«We detected an unusual login attempt»

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `choice` | ``"1"`` \| ``"0"`` | It was me = 0, It wasn't me = 1 |

#### Returns

`Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

#### Defined in

[src/repositories/challenge.repository.ts:61](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/challenge.repository.ts#L61)

___

### replay

▸ **replay**(`choice`): `Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

«Didn't receive your code? Get a new one»

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `choice` | `string` | Verification method. Phone number = 0, email = 1 |

#### Returns

`Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

#### Defined in

[src/repositories/challenge.repository.ts:53](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/challenge.repository.ts#L53)

___

### reset

▸ **reset**(): `Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

Go back to "select_verify_method"

#### Returns

`Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

#### Defined in

[src/repositories/challenge.repository.ts:107](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/challenge.repository.ts#L107)

___

### selectVerifyMethod

▸ **selectVerifyMethod**(`choice`, `isReplay?`): `Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

Select verification method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `choice` | `string` | `undefined` | Verification method. Phone number = 0, email = 1 |
| `isReplay` | `boolean` | `false` | resend code |

#### Returns

`Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

#### Defined in

[src/repositories/challenge.repository.ts:30](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/challenge.repository.ts#L30)

___

### sendPhoneNumber

▸ **sendPhoneNumber**(`phoneNumber`): `Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |

#### Returns

`Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

#### Defined in

[src/repositories/challenge.repository.ts:65](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/challenge.repository.ts#L65)

___

### sendSecurityCode

▸ **sendSecurityCode**(`code`): `Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

Send the code received in the message

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` \| `number` |

#### Returns

`Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

#### Defined in

[src/repositories/challenge.repository.ts:124](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/challenge.repository.ts#L124)

___

### state

▸ **state**(): `Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

Get challenge state.

#### Returns

`Promise`<[`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md)\>

#### Defined in

[src/repositories/challenge.repository.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/challenge.repository.ts#L13)
