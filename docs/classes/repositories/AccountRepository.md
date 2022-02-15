[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / AccountRepository

# Class: AccountRepository

[repositories](../../modules/repositories.md).AccountRepository

## Hierarchy

- `Repository`

  ↳ **`AccountRepository`**

## Table of contents

### Constructors

- [constructor](AccountRepository.md#constructor)

### Methods

- [changePassword](AccountRepository.md#changepassword)
- [changeProfilePicture](AccountRepository.md#changeprofilepicture)
- [contactPointPrefill](AccountRepository.md#contactpointprefill)
- [create](AccountRepository.md#create)
- [currentUser](AccountRepository.md#currentuser)
- [editProfile](AccountRepository.md#editprofile)
- [encryptPassword](AccountRepository.md#encryptpassword)
- [getPrefillCandidates](AccountRepository.md#getprefillcandidates)
- [login](AccountRepository.md#login)
- [logout](AccountRepository.md#logout)
- [msisdnHeaderBootstrap](AccountRepository.md#msisdnheaderbootstrap)
- [processContactPointSignals](AccountRepository.md#processcontactpointsignals)
- [readMsisdnHeader](AccountRepository.md#readmsisdnheader)
- [removeProfilePicture](AccountRepository.md#removeprofilepicture)
- [sendRecoveryFlowEmail](AccountRepository.md#sendrecoveryflowemail)
- [setBiography](AccountRepository.md#setbiography)
- [setPrivate](AccountRepository.md#setprivate)
- [setPublic](AccountRepository.md#setpublic)
- [twoFactorLogin](AccountRepository.md#twofactorlogin)
- [createJazoest](AccountRepository.md#createjazoest)

## Constructors

### constructor

• **new AccountRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### changePassword

▸ **changePassword**(`oldPassword`, `newPassword`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPassword` | `string` |
| `newPassword` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/account.repository.ts:237](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L237)

___

### changeProfilePicture

▸ **changeProfilePicture**(`picture`): `Promise`<[`AccountRepositoryCurrentUserResponseRootObject`](../../interfaces/responses/AccountRepositoryCurrentUserResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `picture` | `Buffer` |

#### Returns

`Promise`<[`AccountRepositoryCurrentUserResponseRootObject`](../../interfaces/responses/AccountRepositoryCurrentUserResponseRootObject.md)\>

#### Defined in

[src/repositories/account.repository.ts:203](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L203)

___

### contactPointPrefill

▸ **contactPointPrefill**(`usage?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `usage` | `string` | `'default'` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/account.repository.ts:305](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L305)

___

### create

▸ **create**(`__namedParameters`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/account.repository.ts:144](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L144)

___

### currentUser

▸ **currentUser**(): `Promise`<[`AccountRepositoryCurrentUserResponseUser`](../../interfaces/responses/AccountRepositoryCurrentUserResponseUser.md)\>

#### Returns

`Promise`<[`AccountRepositoryCurrentUserResponseUser`](../../interfaces/responses/AccountRepositoryCurrentUserResponseUser.md)\>

#### Defined in

[src/repositories/account.repository.ts:178](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L178)

___

### editProfile

▸ **editProfile**(`options`): `Promise`<[`AccountRepositoryCurrentUserResponseUser`](../../interfaces/responses/AccountRepositoryCurrentUserResponseUser.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AccountEditProfileOptions`](../../interfaces/types/AccountEditProfileOptions.md) |

#### Returns

`Promise`<[`AccountRepositoryCurrentUserResponseUser`](../../interfaces/responses/AccountRepositoryCurrentUserResponseUser.md)\>

#### Defined in

[src/repositories/account.repository.ts:222](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L222)

___

### encryptPassword

▸ **encryptPassword**(`password`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `encrypted` | `string` |
| `time` | `string` |

#### Defined in

[src/repositories/account.repository.ts:79](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L79)

___

### getPrefillCandidates

▸ **getPrefillCandidates**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/account.repository.ts:318](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L318)

___

### login

▸ **login**(`username`, `password`): `Promise`<[`AccountRepositoryLoginResponseLogged_in_user`](../../interfaces/responses/AccountRepositoryLoginResponseLogged_in_user.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password` | `string` |

#### Returns

`Promise`<[`AccountRepositoryLoginResponseLogged_in_user`](../../interfaces/responses/AccountRepositoryLoginResponseLogged_in_user.md)\>

#### Defined in

[src/repositories/account.repository.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L25)

___

### logout

▸ **logout**(): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/account.repository.ts:129](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L129)

___

### msisdnHeaderBootstrap

▸ **msisdnHeaderBootstrap**(`usage?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `usage` | `string` | `'default'` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/account.repository.ts:293](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L293)

___

### processContactPointSignals

▸ **processContactPointSignals**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/account.repository.ts:331](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L331)

___

### readMsisdnHeader

▸ **readMsisdnHeader**(`usage?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `usage` | `string` | `'default'` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/account.repository.ts:278](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L278)

___

### removeProfilePicture

▸ **removeProfilePicture**(): `Promise`<[`AccountRepositoryCurrentUserResponseRootObject`](../../interfaces/responses/AccountRepositoryCurrentUserResponseRootObject.md)\>

#### Returns

`Promise`<[`AccountRepositoryCurrentUserResponseRootObject`](../../interfaces/responses/AccountRepositoryCurrentUserResponseRootObject.md)\>

#### Defined in

[src/repositories/account.repository.ts:253](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L253)

___

### sendRecoveryFlowEmail

▸ **sendRecoveryFlowEmail**(`query`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/account.repository.ts:347](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L347)

___

### setBiography

▸ **setBiography**(`text`): `Promise`<[`AccountRepositoryCurrentUserResponseUser`](../../interfaces/responses/AccountRepositoryCurrentUserResponseUser.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`Promise`<[`AccountRepositoryCurrentUserResponseUser`](../../interfaces/responses/AccountRepositoryCurrentUserResponseUser.md)\>

#### Defined in

[src/repositories/account.repository.ts:188](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L188)

___

### setPrivate

▸ **setPrivate**(): `Promise`<[`AccountRepositoryCurrentUserResponseRootObject`](../../interfaces/responses/AccountRepositoryCurrentUserResponseRootObject.md)\>

#### Returns

`Promise`<[`AccountRepositoryCurrentUserResponseRootObject`](../../interfaces/responses/AccountRepositoryCurrentUserResponseRootObject.md)\>

#### Defined in

[src/repositories/account.repository.ts:257](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L257)

___

### setPublic

▸ **setPublic**(): `Promise`<[`AccountRepositoryCurrentUserResponseRootObject`](../../interfaces/responses/AccountRepositoryCurrentUserResponseRootObject.md)\>

#### Returns

`Promise`<[`AccountRepositoryCurrentUserResponseRootObject`](../../interfaces/responses/AccountRepositoryCurrentUserResponseRootObject.md)\>

#### Defined in

[src/repositories/account.repository.ts:261](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L261)

___

### twoFactorLogin

▸ **twoFactorLogin**(`options`): `Promise`<[`AccountRepositoryLoginResponseLogged_in_user`](../../interfaces/responses/AccountRepositoryLoginResponseLogged_in_user.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AccountTwoFactorLoginOptions`](../../interfaces/types/AccountTwoFactorLoginOptions.md) |

#### Returns

`Promise`<[`AccountRepositoryLoginResponseLogged_in_user`](../../interfaces/responses/AccountRepositoryLoginResponseLogged_in_user.md)\>

#### Defined in

[src/repositories/account.repository.ts:105](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L105)

___

### createJazoest

▸ `Static` **createJazoest**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

[src/repositories/account.repository.ts:70](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/account.repository.ts#L70)
