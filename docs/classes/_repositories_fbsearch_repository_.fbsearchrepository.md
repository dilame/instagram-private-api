> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/fbsearch.repository"](../modules/_repositories_fbsearch_repository_.md) / [FbsearchRepository](_repositories_fbsearch_repository_.fbsearchrepository.md) /

# Class: FbsearchRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **FbsearchRepository**

## Index

### Constructors

* [constructor](_repositories_fbsearch_repository_.fbsearchrepository.md#constructor)

### Methods

* [places](_repositories_fbsearch_repository_.fbsearchrepository.md#places)
* [recentSearches](_repositories_fbsearch_repository_.fbsearchrepository.md#recentsearches)
* [suggestedSearches](_repositories_fbsearch_repository_.fbsearchrepository.md#suggestedsearches)
* [topsearchFlat](_repositories_fbsearch_repository_.fbsearchrepository.md#topsearchflat)

## Constructors

###  constructor

\+ **new FbsearchRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[FbsearchRepository](_repositories_fbsearch_repository_.fbsearchrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[FbsearchRepository](_repositories_fbsearch_repository_.fbsearchrepository.md)*

## Methods

###  places

▸ **places**(`query`: string): *`Promise<FbsearchRepositoryPlacesResponseRootObject>`*

*Defined in [repositories/fbsearch.repository.ts:36](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/fbsearch.repository.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *`Promise<FbsearchRepositoryPlacesResponseRootObject>`*

___

###  recentSearches

▸ **recentSearches**(): *`Promise<any>`*

*Defined in [repositories/fbsearch.repository.ts:17](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/fbsearch.repository.ts#L17)*

**Returns:** *`Promise<any>`*

___

###  suggestedSearches

▸ **suggestedSearches**(`type`: "blended" | "users" | "hashtags" | "places"): *`Promise<any>`*

*Defined in [repositories/fbsearch.repository.ts:8](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/fbsearch.repository.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | "blended" \| "users" \| "hashtags" \| "places" |

**Returns:** *`Promise<any>`*

___

###  topsearchFlat

▸ **topsearchFlat**(`query`: string): *`Promise<FbsearchRepositoryTopsearchFlatResponseRootObject>`*

*Defined in [repositories/fbsearch.repository.ts:24](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/fbsearch.repository.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *`Promise<FbsearchRepositoryTopsearchFlatResponseRootObject>`*