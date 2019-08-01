> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/fbsearch.repository"](../modules/_repositories_fbsearch_repository_.md) / [FbsearchRepository](_repositories_fbsearch_repository_.fbsearchrepository.md) /

# Class: FbsearchRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **FbsearchRepository**

## Index

### Constructors

- [constructor](_repositories_fbsearch_repository_.fbsearchrepository.md#constructor)

### Methods

- [places](_repositories_fbsearch_repository_.fbsearchrepository.md#places)
- [recentSearches](_repositories_fbsearch_repository_.fbsearchrepository.md#recentsearches)
- [suggestedSearches](_repositories_fbsearch_repository_.fbsearchrepository.md#suggestedsearches)
- [topsearchFlat](_repositories_fbsearch_repository_.fbsearchrepository.md#topsearchflat)

## Constructors

### constructor

\+ **new FbsearchRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[FbsearchRepository](\_repositories_fbsearch_repository_.fbsearchrepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[FbsearchRepository](\_repositories_fbsearch_repository_.fbsearchrepository.md)\_

## Methods

### places

▸ **places**(`query`: string): _`Promise<any>`_

_Defined in [repositories/fbsearch.repository.ts:36](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/fbsearch.repository.ts#L36)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `query` | string |

**Returns:** _`Promise<any>`_

---

### recentSearches

▸ **recentSearches**(): _`Promise<any>`_

_Defined in [repositories/fbsearch.repository.ts:17](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/fbsearch.repository.ts#L17)_

**Returns:** _`Promise<any>`_

---

### suggestedSearches

▸ **suggestedSearches**(`type`: "blended" | "users" | "hashtags" | "places"): _`Promise<any>`_

_Defined in [repositories/fbsearch.repository.ts:8](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/fbsearch.repository.ts#L8)_

**Parameters:**

| Name   | Type                                           |
| ------ | ---------------------------------------------- |
| `type` | "blended" \| "users" \| "hashtags" \| "places" |

**Returns:** _`Promise<any>`_

---

### topsearchFlat

▸ **topsearchFlat**(`query`: string): _`Promise<FbsearchRepositoryTopsearchFlatResponseRootObject>`_

_Defined in [repositories/fbsearch.repository.ts:24](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/fbsearch.repository.ts#L24)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `query` | string |

**Returns:** _`Promise<FbsearchRepositoryTopsearchFlatResponseRootObject>`_
