> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/user.repository"](../modules/_repositories_user_repository_.md) / [UserRepository](_repositories_user_repository_.userrepository.md) /

# Class: UserRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **UserRepository**

## Index

### Constructors

- [constructor](_repositories_user_repository_.userrepository.md#constructor)

### Methods

- [accountDetails](_repositories_user_repository_.userrepository.md#accountdetails)
- [arlinkDownloadInfo](_repositories_user_repository_.userrepository.md#arlinkdownloadinfo)
- [flagUser](_repositories_user_repository_.userrepository.md#flaguser)
- [formerUsernames](_repositories_user_repository_.userrepository.md#formerusernames)
- [getIdByUsername](_repositories_user_repository_.userrepository.md#getidbyusername)
- [info](_repositories_user_repository_.userrepository.md#info)
- [search](_repositories_user_repository_.userrepository.md#search)
- [searchExact](_repositories_user_repository_.userrepository.md#searchexact)
- [sharedFollowerAccounts](_repositories_user_repository_.userrepository.md#sharedfolloweraccounts)

## Constructors

### constructor

\+ **new UserRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[UserRepository](\_repositories_user_repository_.userrepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[UserRepository](\_repositories_user_repository_.userrepository.md)\_

## Methods

### accountDetails

▸ **accountDetails**(`id?`: string | number): _`Promise<any>`_

_Defined in [repositories/user.repository.ts:47](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/user.repository.ts#L47)_

**Parameters:**

| Name  | Type             |
| ----- | ---------------- |
| `id?` | string \| number |

**Returns:** _`Promise<any>`_

---

### arlinkDownloadInfo

▸ **arlinkDownloadInfo**(): _`Promise<any>`_

_Defined in [repositories/user.repository.ts:17](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/user.repository.ts#L17)_

**Returns:** _`Promise<any>`_

---

### flagUser

▸ **flagUser**(`id`: string | number): _`Promise<any>`_

_Defined in [repositories/user.repository.ts:67](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/user.repository.ts#L67)_

**Parameters:**

| Name | Type             |
| ---- | ---------------- |
| `id` | string \| number |

**Returns:** _`Promise<any>`_

---

### formerUsernames

▸ **formerUsernames**(`id?`: string | number): _`Promise<any>`_

_Defined in [repositories/user.repository.ts:54](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/user.repository.ts#L54)_

**Parameters:**

| Name  | Type             |
| ----- | ---------------- |
| `id?` | string \| number |

**Returns:** _`Promise<any>`_

---

### getIdByUsername

▸ **getIdByUsername**(`username`: string): _`Promise<number>`_

_Defined in [repositories/user.repository.ts:83](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/user.repository.ts#L83)_

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `username` | string |

**Returns:** _`Promise<number>`_

---

### info

▸ **info**(`id`: string | number): _`Promise<UserRepositoryInfoResponseUser>`_

_Defined in [repositories/user.repository.ts:11](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/user.repository.ts#L11)_

**Parameters:**

| Name | Type             |
| ---- | ---------------- |
| `id` | string \| number |

**Returns:** _`Promise<UserRepositoryInfoResponseUser>`_

---

### search

▸ **search**(`username`: string): _`Promise<UserRepositorySearchResponseRootObject>`_

_Defined in [repositories/user.repository.ts:26](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/user.repository.ts#L26)_

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `username` | string |

**Returns:** _`Promise<UserRepositorySearchResponseRootObject>`_

---

### searchExact

▸ **searchExact**(`username`: string): _`Promise<UserRepositorySearchResponseUsersItem>`_

_Defined in [repositories/user.repository.ts:37](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/user.repository.ts#L37)_

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `username` | string |

**Returns:** _`Promise<UserRepositorySearchResponseUsersItem>`_

---

### sharedFollowerAccounts

▸ **sharedFollowerAccounts**(`id`: string | number): _`Promise<any>`_

_Defined in [repositories/user.repository.ts:61](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/user.repository.ts#L61)_

**Parameters:**

| Name | Type             |
| ---- | ---------------- |
| `id` | string \| number |

**Returns:** _`Promise<any>`_
