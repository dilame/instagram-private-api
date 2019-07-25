> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/location-search.repository"](../modules/_repositories_location_search_repository_.md) / [LocationSearch](_repositories_location_search_repository_.locationsearch.md) /

# Class: LocationSearch

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **LocationSearch**

## Index

### Constructors

- [constructor](_repositories_location_search_repository_.locationsearch.md#constructor)

### Methods

- [index](_repositories_location_search_repository_.locationsearch.md#index)

## Constructors

### constructor

\+ **new LocationSearch**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[LocationSearch](\_repositories_location_search_repository_.locationsearch.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[LocationSearch](\_repositories_location_search_repository_.locationsearch.md)\_

## Methods

### index

▸ **index**(`latitude`: number, `longitude`: number, `searchQuery?`: string): _`Promise<LocationRepositorySearchResponseRootObject>`_

_Defined in [repositories/location-search.repository.ts:5](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/location-search.repository.ts#L5)_

**Parameters:**

| Name           | Type   |
| -------------- | ------ |
| `latitude`     | number |
| `longitude`    | number |
| `searchQuery?` | string |

**Returns:** _`Promise<LocationRepositorySearchResponseRootObject>`_
