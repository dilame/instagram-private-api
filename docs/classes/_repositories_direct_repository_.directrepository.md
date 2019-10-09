> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/direct.repository"](../modules/_repositories_direct_repository_.md) / [DirectRepository](_repositories_direct_repository_.directrepository.md) /

# Class: DirectRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **DirectRepository**

## Index

### Constructors

* [constructor](_repositories_direct_repository_.directrepository.md#constructor)

### Methods

* [createGroupThread](_repositories_direct_repository_.directrepository.md#creategroupthread)
* [getPresence](_repositories_direct_repository_.directrepository.md#getpresence)
* [rankedRecipients](_repositories_direct_repository_.directrepository.md#rankedrecipients)

## Constructors

###  constructor

\+ **new DirectRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[DirectRepository](_repositories_direct_repository_.directrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[DirectRepository](_repositories_direct_repository_.directrepository.md)*

## Methods

###  createGroupThread

▸ **createGroupThread**(`recipientUsers`: string[], `threadTitle`: string): *`Promise<DirectRepositoryCreateGroupThreadResponseRootObject>`*

*Defined in [repositories/direct.repository.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct.repository.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`recipientUsers` | string[] |
`threadTitle` | string |

**Returns:** *`Promise<DirectRepositoryCreateGroupThreadResponseRootObject>`*

___

###  getPresence

▸ **getPresence**(): *`Promise<DirectRepositoryGetPresenceResponseRootObject>`*

*Defined in [repositories/direct.repository.ts:43](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct.repository.ts#L43)*

**Returns:** *`Promise<DirectRepositoryGetPresenceResponseRootObject>`*

___

###  rankedRecipients

▸ **rankedRecipients**(`mode`: "raven" | "reshare", `query`: string): *`Promise<DirectRepositoryRankedRecipientsResponseRootObject>`*

*Defined in [repositories/direct.repository.ts:27](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct.repository.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mode` | "raven" \| "reshare" | "raven" |
`query` | string | "" |

**Returns:** *`Promise<DirectRepositoryRankedRecipientsResponseRootObject>`*