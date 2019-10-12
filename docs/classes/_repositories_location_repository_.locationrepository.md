> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/location.repository"](../modules/_repositories_location_repository_.md) / [LocationRepository](_repositories_location_repository_.locationrepository.md) /

# Class: LocationRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **LocationRepository**

## Index

### Constructors

* [constructor](_repositories_location_repository_.locationrepository.md#constructor)

### Methods

* [info](_repositories_location_repository_.locationrepository.md#info)
* [story](_repositories_location_repository_.locationrepository.md#story)

## Constructors

###  constructor

\+ **new LocationRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[LocationRepository](_repositories_location_repository_.locationrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[LocationRepository](_repositories_location_repository_.locationrepository.md)*

## Methods

###  info

▸ **info**(`id`: number | string): *`Promise<LocationRepositoryInfoResponseRootObject>`*

*Defined in [repositories/location.repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/location.repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number \| string |

**Returns:** *`Promise<LocationRepositoryInfoResponseRootObject>`*

___

###  story

▸ **story**(`id`: number | string): *`Promise<LocationRepositoryStoryResponseRootObject>`*

*Defined in [repositories/location.repository.ts:14](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/location.repository.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number \| string |

**Returns:** *`Promise<LocationRepositoryStoryResponseRootObject>`*