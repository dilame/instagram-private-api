> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["core/request"](../modules/_core_request_.md) / [Request](_core_request_.request.md) /

# Class: Request

## Hierarchy

* **Request**

## Index

### Constructors

* [constructor](_core_request_.request.md#constructor)

### Properties

* [defaults](_core_request_.request.md#defaults)
* [end$](_core_request_.request.md#end$)
* [error$](_core_request_.request.md#error$)

### Methods

* [send](_core_request_.request.md#send)
* [sign](_core_request_.request.md#sign)
* [signature](_core_request_.request.md#signature)
* [userBreadcrumb](_core_request_.request.md#userbreadcrumb)

### Object literals

* [attemptOptions](_core_request_.request.md#attemptoptions)

## Constructors

###  constructor

\+ **new Request**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[Request](_core_request_.request.md)*

*Defined in [core/request.ts:38](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/request.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[Request](_core_request_.request.md)*

## Properties

###  defaults

• **defaults**: *`Partial<Options>`*

*Defined in [core/request.ts:38](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/request.ts#L38)*

___

###  end$

• **end$**: *`Subject<unknown>`* =  new Subject()

*Defined in [core/request.ts:33](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/request.ts#L33)*

___

###  error$

• **error$**: *`Subject<IgClientError>`* =  new Subject<IgClientError>()

*Defined in [core/request.ts:34](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/request.ts#L34)*

## Methods

###  send

▸ **send**<**T**>(`userOptions`: `Options`, `onlyCheckHttpStatus?`: boolean): *`Promise<IgResponse<T>>`*

*Defined in [core/request.ts:55](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/request.ts#L55)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`userOptions` | `Options` |
`onlyCheckHttpStatus?` | boolean |

**Returns:** *`Promise<IgResponse<T>>`*

___

###  sign

▸ **sign**(`payload`: `Payload`): *`SignedPost`*

*Defined in [core/request.ts:86](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/request.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | `Payload` |

**Returns:** *`SignedPost`*

___

###  signature

▸ **signature**(`data`: string): *string*

*Defined in [core/request.ts:80](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/request.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *string*

___

###  userBreadcrumb

▸ **userBreadcrumb**(`size`: number): *string*

*Defined in [core/request.ts:95](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/request.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *string*

## Object literals

###  attemptOptions

### ▪ **attemptOptions**: *object*

*Defined in [core/request.ts:35](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/request.ts#L35)*

###  maxAttempts

• **maxAttempts**: *number* = 1

*Defined in [core/request.ts:36](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/request.ts#L36)*