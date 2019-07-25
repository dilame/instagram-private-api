> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["services/search.service"](../modules/_services_search_service_.md) / [SearchService](_services_search_service_.searchservice.md) /

# Class: SearchService

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **SearchService**

## Index

### Constructors

- [constructor](_services_search_service_.searchservice.md#constructor)

### Methods

- [blended](_services_search_service_.searchservice.md#blended)
- [blendedItems](_services_search_service_.searchservice.md#blendeditems)
- [location](_services_search_service_.searchservice.md#location)
- [places](_services_search_service_.searchservice.md#places)
- [tags](_services_search_service_.searchservice.md#tags)
- [users](_services_search_service_.searchservice.md#users)

## Constructors

### constructor

\+ **new SearchService**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[SearchService](\_services_search_service_.searchservice.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[SearchService](\_services_search_service_.searchservice.md)\_

## Methods

### blended

▸ **blended**(`query`: string): _`Promise<any>`_

_Defined in [services/search.service.ts:4](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/search.service.ts#L4)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `query` | string |

**Returns:** _`Promise<any>`_

---

### blendedItems

▸ **blendedItems**(`query`: string): _`Promise<any>`_

_Defined in [services/search.service.ts:8](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/search.service.ts#L8)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `query` | string |

**Returns:** _`Promise<any>`_

---

### location

▸ **location**(`latitude`: number, `longitude`: number, `query?`: string): _`Promise<any>`_

_Defined in [services/search.service.ts:25](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/search.service.ts#L25)_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| `latitude`  | number |
| `longitude` | number |
| `query?`    | string |

**Returns:** _`Promise<any>`_

---

### places

▸ **places**(`query`: string): _`Promise<any>`_

_Defined in [services/search.service.ts:20](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/search.service.ts#L20)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `query` | string |

**Returns:** _`Promise<any>`_

---

### tags

▸ **tags**(`query`: string): _`Promise<any>`_

_Defined in [services/search.service.ts:16](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/search.service.ts#L16)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `query` | string |

**Returns:** _`Promise<any>`_

---

### users

▸ **users**(`query`: string): _`Promise<any>`_

_Defined in [services/search.service.ts:12](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/search.service.ts#L12)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `query` | string |

**Returns:** _`Promise<any>`_
