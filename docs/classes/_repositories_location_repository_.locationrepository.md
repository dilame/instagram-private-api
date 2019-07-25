> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/location.repository"](../modules/_repositories_location_repository_.md) / [LocationRepository](_repositories_location_repository_.locationrepository.md) /

# Class: LocationRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **LocationRepository**

## Index

### Constructors

- [constructor](_repositories_location_repository_.locationrepository.md#constructor)

### Methods

- [info](_repositories_location_repository_.locationrepository.md#info)

## Constructors

### constructor

\+ **new LocationRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[LocationRepository](\_repositories_location_repository_.locationrepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[LocationRepository](\_repositories_location_repository_.locationrepository.md)\_

## Methods

### info

▸ **info**(`id`: number | string): _`Promise<LocationRepositoryInfoResponseRootObject>`_

_Defined in [repositories/location.repository.ts:5](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/location.repository.ts#L5)_

**Parameters:**

| Name | Type             |
| ---- | ---------------- |
| `id` | number \| string |

**Returns:** _`Promise<LocationRepositoryInfoResponseRootObject>`_
