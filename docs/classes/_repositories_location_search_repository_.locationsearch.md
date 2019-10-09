> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/location-search.repository"](../modules/_repositories_location_search_repository_.md) / [LocationSearch](_repositories_location_search_repository_.locationsearch.md) /

# Class: LocationSearch

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **LocationSearch**

## Index

### Constructors

* [constructor](_repositories_location_search_repository_.locationsearch.md#constructor)

### Methods

* [index](_repositories_location_search_repository_.locationsearch.md#index)

## Constructors

###  constructor

\+ **new LocationSearch**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[LocationSearch](_repositories_location_search_repository_.locationsearch.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[LocationSearch](_repositories_location_search_repository_.locationsearch.md)*

## Methods

###  index

▸ **index**(`latitude`: number, `longitude`: number, `searchQuery?`: string): *`Promise<LocationRepositorySearchResponseRootObject>`*

*Defined in [repositories/location-search.repository.ts:5](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/location-search.repository.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | number |
`longitude` | number |
`searchQuery?` | string |

**Returns:** *`Promise<LocationRepositorySearchResponseRootObject>`*