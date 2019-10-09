> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/account.repository"](../modules/_repositories_account_repository_.md) / [AccountRepository](_repositories_account_repository_.accountrepository.md) /

# Class: AccountRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **AccountRepository**

## Index

### Constructors

* [constructor](_repositories_account_repository_.accountrepository.md#constructor)

### Methods

* [changePassword](_repositories_account_repository_.accountrepository.md#changepassword)
* [changeProfilePicture](_repositories_account_repository_.accountrepository.md#changeprofilepicture)
* [contactPointPrefill](_repositories_account_repository_.accountrepository.md#contactpointprefill)
* [create](_repositories_account_repository_.accountrepository.md#create)
* [currentUser](_repositories_account_repository_.accountrepository.md#currentuser)
* [editProfile](_repositories_account_repository_.accountrepository.md#editprofile)
* [getPrefillCandidates](_repositories_account_repository_.accountrepository.md#getprefillcandidates)
* [login](_repositories_account_repository_.accountrepository.md#login)
* [logout](_repositories_account_repository_.accountrepository.md#logout)
* [msisdnHeaderBootstrap](_repositories_account_repository_.accountrepository.md#msisdnheaderbootstrap)
* [processContactPointSignals](_repositories_account_repository_.accountrepository.md#processcontactpointsignals)
* [readMsisdnHeader](_repositories_account_repository_.accountrepository.md#readmsisdnheader)
* [removeProfilePicture](_repositories_account_repository_.accountrepository.md#removeprofilepicture)
* [setBiography](_repositories_account_repository_.accountrepository.md#setbiography)
* [setPrivate](_repositories_account_repository_.accountrepository.md#setprivate)
* [setPublic](_repositories_account_repository_.accountrepository.md#setpublic)
* [twoFactorLogin](_repositories_account_repository_.accountrepository.md#twofactorlogin)

## Constructors

###  constructor

\+ **new AccountRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[AccountRepository](_repositories_account_repository_.accountrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[AccountRepository](_repositories_account_repository_.accountrepository.md)*

## Methods

###  changePassword

▸ **changePassword**(`oldPassword`: string, `newPassword`: string): *`Promise<any>`*

*Defined in [repositories/account.repository.ts:196](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`oldPassword` | string |
`newPassword` | string |

**Returns:** *`Promise<any>`*

___

###  changeProfilePicture

▸ **changeProfilePicture**(`stream`: `ReadStream`): *`Promise<AccountRepositoryCurrentUserResponseRootObject>`*

*Defined in [repositories/account.repository.ts:158](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | `ReadStream` |

**Returns:** *`Promise<AccountRepositoryCurrentUserResponseRootObject>`*

___

###  contactPointPrefill

▸ **contactPointPrefill**(`usage`: string): *`Promise<any>`*

*Defined in [repositories/account.repository.ts:264](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L264)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`usage` | string | "default" |

**Returns:** *`Promise<any>`*

___

###  create

▸ **create**(`__namedParameters`: object): *`Promise<any>`*

*Defined in [repositories/account.repository.ts:100](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *`Promise<any>`*

___

###  currentUser

▸ **currentUser**(): *`Promise<AccountRepositoryCurrentUserResponseUser>`*

*Defined in [repositories/account.repository.ts:133](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L133)*

**Returns:** *`Promise<AccountRepositoryCurrentUserResponseUser>`*

___

###  editProfile

▸ **editProfile**(`options`: [AccountEditProfileOptions](../interfaces/_types_account_edit_profile_options_.accounteditprofileoptions.md)): *`Promise<AccountRepositoryCurrentUserResponseUser>`*

*Defined in [repositories/account.repository.ts:181](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AccountEditProfileOptions](../interfaces/_types_account_edit_profile_options_.accounteditprofileoptions.md) |

**Returns:** *`Promise<AccountRepositoryCurrentUserResponseUser>`*

___

###  getPrefillCandidates

▸ **getPrefillCandidates**(): *`Promise<any>`*

*Defined in [repositories/account.repository.ts:276](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L276)*

**Returns:** *`Promise<any>`*

___

###  login

▸ **login**(`username`: string, `password`: string): *`Promise<AccountRepositoryLoginResponseLogged_in_user>`*

*Defined in [repositories/account.repository.ts:25](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |
`password` | string |

**Returns:** *`Promise<AccountRepositoryLoginResponseLogged_in_user>`*

___

###  logout

▸ **logout**(): *`Promise<StatusResponse>`*

*Defined in [repositories/account.repository.ts:85](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L85)*

**Returns:** *`Promise<StatusResponse>`*

___

###  msisdnHeaderBootstrap

▸ **msisdnHeaderBootstrap**(`usage`: string): *`Promise<any>`*

*Defined in [repositories/account.repository.ts:252](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L252)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`usage` | string | "default" |

**Returns:** *`Promise<any>`*

___

###  processContactPointSignals

▸ **processContactPointSignals**(): *`Promise<any>`*

*Defined in [repositories/account.repository.ts:289](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L289)*

**Returns:** *`Promise<any>`*

___

###  readMsisdnHeader

▸ **readMsisdnHeader**(`usage`: string): *`Promise<any>`*

*Defined in [repositories/account.repository.ts:237](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L237)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`usage` | string | "default" |

**Returns:** *`Promise<any>`*

___

###  removeProfilePicture

▸ **removeProfilePicture**(): *`Promise<AccountRepositoryCurrentUserResponseRootObject>`*

*Defined in [repositories/account.repository.ts:212](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L212)*

**Returns:** *`Promise<AccountRepositoryCurrentUserResponseRootObject>`*

___

###  setBiography

▸ **setBiography**(`text`: string): *`Promise<AccountRepositoryCurrentUserResponseUser>`*

*Defined in [repositories/account.repository.ts:143](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *`Promise<AccountRepositoryCurrentUserResponseUser>`*

___

###  setPrivate

▸ **setPrivate**(): *`Promise<AccountRepositoryCurrentUserResponseRootObject>`*

*Defined in [repositories/account.repository.ts:216](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L216)*

**Returns:** *`Promise<AccountRepositoryCurrentUserResponseRootObject>`*

___

###  setPublic

▸ **setPublic**(): *`Promise<AccountRepositoryCurrentUserResponseRootObject>`*

*Defined in [repositories/account.repository.ts:220](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L220)*

**Returns:** *`Promise<AccountRepositoryCurrentUserResponseRootObject>`*

___

###  twoFactorLogin

▸ **twoFactorLogin**(`options`: [AccountTwoFactorLoginOptions](../interfaces/_types_account_two_factor_login_options_.accounttwofactorloginoptions.md)): *`Promise<AccountRepositoryLoginResponseLogged_in_user>`*

*Defined in [repositories/account.repository.ts:61](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/account.repository.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AccountTwoFactorLoginOptions](../interfaces/_types_account_two_factor_login_options_.accounttwofactorloginoptions.md) |

**Returns:** *`Promise<AccountRepositoryLoginResponseLogged_in_user>`*