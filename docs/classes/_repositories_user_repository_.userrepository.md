> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/user.repository"](../modules/_repositories_user_repository_.md) / [UserRepository](_repositories_user_repository_.userrepository.md) /

# Class: UserRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **UserRepository**

## Index

### Constructors

* [constructor](_repositories_user_repository_.userrepository.md#constructor)

### Methods

* [accountDetails](_repositories_user_repository_.userrepository.md#accountdetails)
* [arlinkDownloadInfo](_repositories_user_repository_.userrepository.md#arlinkdownloadinfo)
* [flagUser](_repositories_user_repository_.userrepository.md#flaguser)
* [formerUsernames](_repositories_user_repository_.userrepository.md#formerusernames)
* [getIdByUsername](_repositories_user_repository_.userrepository.md#getidbyusername)
* [info](_repositories_user_repository_.userrepository.md#info)
* [search](_repositories_user_repository_.userrepository.md#search)
* [searchExact](_repositories_user_repository_.userrepository.md#searchexact)
* [sharedFollowerAccounts](_repositories_user_repository_.userrepository.md#sharedfolloweraccounts)

## Constructors

###  constructor

\+ **new UserRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[UserRepository](_repositories_user_repository_.userrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[UserRepository](_repositories_user_repository_.userrepository.md)*

## Methods

###  accountDetails

▸ **accountDetails**(`id?`: string | number): *`Promise<any>`*

*Defined in [repositories/user.repository.ts:47](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/user.repository.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`id?` | string \| number |

**Returns:** *`Promise<any>`*

___

###  arlinkDownloadInfo

▸ **arlinkDownloadInfo**(): *`Promise<any>`*

*Defined in [repositories/user.repository.ts:17](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/user.repository.ts#L17)*

**Returns:** *`Promise<any>`*

___

###  flagUser

▸ **flagUser**(`id`: string | number): *`Promise<any>`*

*Defined in [repositories/user.repository.ts:67](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/user.repository.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |

**Returns:** *`Promise<any>`*

___

###  formerUsernames

▸ **formerUsernames**(`id?`: string | number): *`Promise<any>`*

*Defined in [repositories/user.repository.ts:54](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/user.repository.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`id?` | string \| number |

**Returns:** *`Promise<any>`*

___

###  getIdByUsername

▸ **getIdByUsername**(`username`: string): *`Promise<number>`*

*Defined in [repositories/user.repository.ts:83](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/user.repository.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |

**Returns:** *`Promise<number>`*

___

###  info

▸ **info**(`id`: string | number): *`Promise<UserRepositoryInfoResponseUser>`*

*Defined in [repositories/user.repository.ts:11](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/user.repository.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |

**Returns:** *`Promise<UserRepositoryInfoResponseUser>`*

___

###  search

▸ **search**(`username`: string): *`Promise<UserRepositorySearchResponseRootObject>`*

*Defined in [repositories/user.repository.ts:26](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/user.repository.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |

**Returns:** *`Promise<UserRepositorySearchResponseRootObject>`*

___

###  searchExact

▸ **searchExact**(`username`: string): *`Promise<UserRepositorySearchResponseUsersItem>`*

*Defined in [repositories/user.repository.ts:37](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/user.repository.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |

**Returns:** *`Promise<UserRepositorySearchResponseUsersItem>`*

___

###  sharedFollowerAccounts

▸ **sharedFollowerAccounts**(`id`: string | number): *`Promise<any>`*

*Defined in [repositories/user.repository.ts:61](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/user.repository.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |

**Returns:** *`Promise<any>`*