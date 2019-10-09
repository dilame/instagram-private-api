> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/restrict-action.repository"](../modules/_repositories_restrict_action_repository_.md) / [RestrictActionRepository](_repositories_restrict_action_repository_.restrictactionrepository.md) /

# Class: RestrictActionRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **RestrictActionRepository**

## Index

### Constructors

* [constructor](_repositories_restrict_action_repository_.restrictactionrepository.md#constructor)

### Methods

* [restrict](_repositories_restrict_action_repository_.restrictactionrepository.md#restrict)
* [unrestrict](_repositories_restrict_action_repository_.restrictactionrepository.md#unrestrict)

## Constructors

###  constructor

\+ **new RestrictActionRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[RestrictActionRepository](_repositories_restrict_action_repository_.restrictactionrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[RestrictActionRepository](_repositories_restrict_action_repository_.restrictactionrepository.md)*

## Methods

###  restrict

▸ **restrict**(`targetUserId`: number | string): *`Promise<RestrictActionRepositoryRestrictResponseRootObject>`*

*Defined in [repositories/restrict-action.repository.ts:5](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/restrict-action.repository.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`targetUserId` | number \| string |

**Returns:** *`Promise<RestrictActionRepositoryRestrictResponseRootObject>`*

___

###  unrestrict

▸ **unrestrict**(`targetUserId`: number | string): *`Promise<RestrictActionRepositoryRestrictResponseRootObject>`*

*Defined in [repositories/restrict-action.repository.ts:18](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/restrict-action.repository.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`targetUserId` | number \| string |

**Returns:** *`Promise<RestrictActionRepositoryRestrictResponseRootObject>`*