> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/discover.repository"](../modules/_repositories_discover_repository_.md) / [DiscoverRepository](_repositories_discover_repository_.discoverrepository.md) /

# Class: DiscoverRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **DiscoverRepository**

## Index

### Constructors

* [constructor](_repositories_discover_repository_.discoverrepository.md#constructor)

### Methods

* [chaining](_repositories_discover_repository_.discoverrepository.md#chaining)
* [markSuSeen](_repositories_discover_repository_.discoverrepository.md#marksuseen)
* [profileSuBadge](_repositories_discover_repository_.discoverrepository.md#profilesubadge)
* [topicalExplore](_repositories_discover_repository_.discoverrepository.md#topicalexplore)

## Constructors

###  constructor

\+ **new DiscoverRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[DiscoverRepository](_repositories_discover_repository_.discoverrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[DiscoverRepository](_repositories_discover_repository_.discoverrepository.md)*

## Methods

###  chaining

▸ **chaining**(`targetId`: string): *`Promise<DiscoverRepositoryChainingResponseRootObject>`*

*Defined in [repositories/discover.repository.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/discover.repository.ts#L9)*

Gets the suggestions based on a user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`targetId` | string | user id/pk  |

**Returns:** *`Promise<DiscoverRepositoryChainingResponseRootObject>`*

___

###  markSuSeen

▸ **markSuSeen**(): *`Promise<any>`*

*Defined in [repositories/discover.repository.ts:34](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/discover.repository.ts#L34)*

**Returns:** *`Promise<any>`*

___

###  profileSuBadge

▸ **profileSuBadge**(): *`Promise<any>`*

*Defined in [repositories/discover.repository.ts:46](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/discover.repository.ts#L46)*

**Returns:** *`Promise<any>`*

___

###  topicalExplore

▸ **topicalExplore**(): *`Promise<any>`*

*Defined in [repositories/discover.repository.ts:19](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/discover.repository.ts#L19)*

**Returns:** *`Promise<any>`*