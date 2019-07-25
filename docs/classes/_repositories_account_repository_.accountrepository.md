> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/account.repository"](../modules/_repositories_account_repository_.md) / [AccountRepository](_repositories_account_repository_.accountrepository.md) /

# Class: AccountRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **AccountRepository**

## Index

### Constructors

- [constructor](_repositories_account_repository_.accountrepository.md#constructor)

### Methods

- [changePassword](_repositories_account_repository_.accountrepository.md#changepassword)
- [changeProfilePicture](_repositories_account_repository_.accountrepository.md#changeprofilepicture)
- [contactPointPrefill](_repositories_account_repository_.accountrepository.md#contactpointprefill)
- [create](_repositories_account_repository_.accountrepository.md#create)
- [currentUser](_repositories_account_repository_.accountrepository.md#currentuser)
- [editProfile](_repositories_account_repository_.accountrepository.md#editprofile)
- [getPrefillCandidates](_repositories_account_repository_.accountrepository.md#getprefillcandidates)
- [login](_repositories_account_repository_.accountrepository.md#login)
- [logout](_repositories_account_repository_.accountrepository.md#logout)
- [msisdnHeaderBootstrap](_repositories_account_repository_.accountrepository.md#msisdnheaderbootstrap)
- [processContactPointSignals](_repositories_account_repository_.accountrepository.md#processcontactpointsignals)
- [readMsisdnHeader](_repositories_account_repository_.accountrepository.md#readmsisdnheader)
- [removeProfilePicture](_repositories_account_repository_.accountrepository.md#removeprofilepicture)
- [setBiography](_repositories_account_repository_.accountrepository.md#setbiography)
- [setPrivate](_repositories_account_repository_.accountrepository.md#setprivate)
- [setPublic](_repositories_account_repository_.accountrepository.md#setpublic)
- [twoFactorLogin](_repositories_account_repository_.accountrepository.md#twofactorlogin)

## Constructors

### constructor

\+ **new AccountRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[AccountRepository](\_repositories_account_repository_.accountrepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[AccountRepository](\_repositories_account_repository_.accountrepository.md)\_

## Methods

### changePassword

▸ **changePassword**(`oldPassword`: string, `newPassword`: string): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:196](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L196)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `oldPassword` | string |
| `newPassword` | string |

**Returns:** _`Promise<any>`_

---

### changeProfilePicture

▸ **changeProfilePicture**(`stream`: `ReadStream`): _`Promise<AccountRepositoryCurrentUserResponseRootObject>`_

_Defined in [repositories/account.repository.ts:158](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L158)_

**Parameters:**

| Name     | Type         |
| -------- | ------------ |
| `stream` | `ReadStream` |

**Returns:** _`Promise<AccountRepositoryCurrentUserResponseRootObject>`_

---

### contactPointPrefill

▸ **contactPointPrefill**(`usage`: string): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:264](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L264)_

**Parameters:**

| Name    | Type   | Default   |
| ------- | ------ | --------- |
| `usage` | string | "default" |

**Returns:** _`Promise<any>`_

---

### create

▸ **create**(`__namedParameters`: object): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:100](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L100)_

**Parameters:**

| Name                | Type   |
| ------------------- | ------ |
| `__namedParameters` | object |

**Returns:** _`Promise<any>`_

---

### currentUser

▸ **currentUser**(): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:133](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L133)_

**Returns:** _`Promise<any>`_

---

### editProfile

▸ **editProfile**(`options`: [AccountEditProfileOptions](../interfaces/_types_account_edit_profile_options_.accounteditprofileoptions.md)): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:181](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L181)_

**Parameters:**

| Name      | Type                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| `options` | [AccountEditProfileOptions](../interfaces/_types_account_edit_profile_options_.accounteditprofileoptions.md) |

**Returns:** _`Promise<any>`_

---

### getPrefillCandidates

▸ **getPrefillCandidates**(): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:276](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L276)_

**Returns:** _`Promise<any>`_

---

### login

▸ **login**(`username`: string, `password`: string): _`Promise<AccountRepositoryLoginResponseLogged_in_user>`_

_Defined in [repositories/account.repository.ts:25](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L25)_

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `username` | string |
| `password` | string |

**Returns:** _`Promise<AccountRepositoryLoginResponseLogged_in_user>`_

---

### logout

▸ **logout**(): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:85](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L85)_

**Returns:** _`Promise<any>`_

---

### msisdnHeaderBootstrap

▸ **msisdnHeaderBootstrap**(`usage`: string): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:252](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L252)_

**Parameters:**

| Name    | Type   | Default   |
| ------- | ------ | --------- |
| `usage` | string | "default" |

**Returns:** _`Promise<any>`_

---

### processContactPointSignals

▸ **processContactPointSignals**(): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:289](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L289)_

**Returns:** _`Promise<any>`_

---

### readMsisdnHeader

▸ **readMsisdnHeader**(`usage`: string): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:237](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L237)_

**Parameters:**

| Name    | Type   | Default   |
| ------- | ------ | --------- |
| `usage` | string | "default" |

**Returns:** _`Promise<any>`_

---

### removeProfilePicture

▸ **removeProfilePicture**(): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:212](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L212)_

**Returns:** _`Promise<any>`_

---

### setBiography

▸ **setBiography**(`text`: string): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:143](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L143)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `text` | string |

**Returns:** _`Promise<any>`_

---

### setPrivate

▸ **setPrivate**(): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:216](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L216)_

**Returns:** _`Promise<any>`_

---

### setPublic

▸ **setPublic**(): _`Promise<any>`_

_Defined in [repositories/account.repository.ts:220](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L220)_

**Returns:** _`Promise<any>`_

---

### twoFactorLogin

▸ **twoFactorLogin**(`options`: [AccountTwoFactorLoginOptions](../interfaces/_types_account_two_factor_login_options_.accounttwofactorloginoptions.md)): _`Promise<AccountRepositoryLoginResponseLogged_in_user>`_

_Defined in [repositories/account.repository.ts:61](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/account.repository.ts#L61)_

**Parameters:**

| Name      | Type                                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------- |
| `options` | [AccountTwoFactorLoginOptions](../interfaces/_types_account_two_factor_login_options_.accounttwofactorloginoptions.md) |

**Returns:** _`Promise<AccountRepositoryLoginResponseLogged_in_user>`_
