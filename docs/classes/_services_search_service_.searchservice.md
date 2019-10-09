> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["services/search.service"](../modules/_services_search_service_.md) / [SearchService](_services_search_service_.searchservice.md) /

# Class: SearchService

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **SearchService**

## Index

### Constructors

* [constructor](_services_search_service_.searchservice.md#constructor)

### Methods

* [blended](_services_search_service_.searchservice.md#blended)
* [blendedItems](_services_search_service_.searchservice.md#blendeditems)
* [location](_services_search_service_.searchservice.md#location)
* [places](_services_search_service_.searchservice.md#places)
* [tags](_services_search_service_.searchservice.md#tags)
* [users](_services_search_service_.searchservice.md#users)

## Constructors

###  constructor

\+ **new SearchService**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[SearchService](_services_search_service_.searchservice.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[SearchService](_services_search_service_.searchservice.md)*

## Methods

###  blended

▸ **blended**(`query`: string): *`Promise<FbsearchRepositoryTopsearchFlatResponseListItem[]>`*

*Defined in [services/search.service.ts:4](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/search.service.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *`Promise<FbsearchRepositoryTopsearchFlatResponseListItem[]>`*

___

###  blendedItems

▸ **blendedItems**(`query`: string): *`Promise<(FbsearchRepositoryTopsearchFlatResponsePlace | FbsearchRepositoryTopsearchFlatResponseHashtag | FbsearchRepositoryTopsearchFlatResponseUser)[]>`*

*Defined in [services/search.service.ts:8](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/search.service.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *`Promise<(FbsearchRepositoryTopsearchFlatResponsePlace | FbsearchRepositoryTopsearchFlatResponseHashtag | FbsearchRepositoryTopsearchFlatResponseUser)[]>`*

___

###  location

▸ **location**(`latitude`: number, `longitude`: number, `query?`: string): *`Promise<LocationRepositorySearchResponseVenuesItem[]>`*

*Defined in [services/search.service.ts:25](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/search.service.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | number |
`longitude` | number |
`query?` | string |

**Returns:** *`Promise<LocationRepositorySearchResponseVenuesItem[]>`*

___

###  places

▸ **places**(`query`: string): *`Promise<FbsearchRepositoryPlacesResponseItemsItem[]>`*

*Defined in [services/search.service.ts:20](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/search.service.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *`Promise<FbsearchRepositoryPlacesResponseItemsItem[]>`*

___

###  tags

▸ **tags**(`query`: string): *`Promise<TagRepositorySearchResponseResultsItem[]>`*

*Defined in [services/search.service.ts:16](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/search.service.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *`Promise<TagRepositorySearchResponseResultsItem[]>`*

___

###  users

▸ **users**(`query`: string): *`Promise<UserRepositorySearchResponseUsersItem[]>`*

*Defined in [services/search.service.ts:12](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/search.service.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *`Promise<UserRepositorySearchResponseUsersItem[]>`*