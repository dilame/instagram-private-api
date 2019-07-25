> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["core/request"](../modules/_core_request_.md) / [Request](_core_request_.request.md) /

# Class: Request

## Hierarchy

- **Request**

## Index

### Constructors

- [constructor](_core_request_.request.md#constructor)

### Properties

- [defaults](_core_request_.request.md#defaults)
- [end\$](_core_request_.request.md#end$)
- [error\$](_core_request_.request.md#error$)

### Methods

- [send](_core_request_.request.md#send)
- [sign](_core_request_.request.md#sign)
- [signature](_core_request_.request.md#signature)
- [userBreadcrumb](_core_request_.request.md#userbreadcrumb)

### Object literals

- [attemptOptions](_core_request_.request.md#attemptoptions)

## Constructors

### constructor

\+ **new Request**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[Request](\_core_request_.request.md)\_

_Defined in [core/request.ts:37](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/request.ts#L37)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[Request](\_core_request_.request.md)\_

## Properties

### defaults

• **defaults**: _`Partial<Options>`_

_Defined in [core/request.ts:37](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/request.ts#L37)_

---

### end\$

• **end\$**: _any_ = new Subject()

_Defined in [core/request.ts:32](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/request.ts#L32)_

---

### error\$

• **error\$**: _any_ = new Subject<IgClientError>()

_Defined in [core/request.ts:33](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/request.ts#L33)_

## Methods

### send

▸ **send**<**T**>(`userOptions`: `Options`): _`Promise<IgResponse<T>>`_

_Defined in [core/request.ts:54](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/request.ts#L54)_

**Type parameters:**

▪ **T**

**Parameters:**

| Name          | Type      |
| ------------- | --------- |
| `userOptions` | `Options` |

**Returns:** _`Promise<IgResponse<T>>`_

---

### sign

▸ **sign**(`payload`: `Payload`): _`SignedPost`_

_Defined in [core/request.ts:85](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/request.ts#L85)_

**Parameters:**

| Name      | Type      |
| --------- | --------- |
| `payload` | `Payload` |

**Returns:** _`SignedPost`_

---

### signature

▸ **signature**(`data`: string): _string_

_Defined in [core/request.ts:79](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/request.ts#L79)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `data` | string |

**Returns:** _string_

---

### userBreadcrumb

▸ **userBreadcrumb**(`size`: number): _string_

_Defined in [core/request.ts:94](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/request.ts#L94)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `size` | number |

**Returns:** _string_

## Object literals

### attemptOptions

### ▪ **attemptOptions**: _object_

_Defined in [core/request.ts:34](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/request.ts#L34)_

### maxAttempts

• **maxAttempts**: _number_ = 1

_Defined in [core/request.ts:35](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/request.ts#L35)_
