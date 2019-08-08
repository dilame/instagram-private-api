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

*Defined in [core/request.ts:37](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/request.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[Request](_core_request_.request.md)*

## Properties

###  defaults

• **defaults**: *`Partial<Options>`*

*Defined in [core/request.ts:37](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/request.ts#L37)*

___

###  end$

• **end$**: *`Subject<Object>`* =  new Subject()

*Defined in [core/request.ts:32](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/request.ts#L32)*

___

###  error$

• **error$**: *`Subject<IgClientError>`* =  new Subject<IgClientError>()

*Defined in [core/request.ts:33](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/request.ts#L33)*

## Methods

###  send

▸ **send**<**T**>(`userOptions`: `Options`): *`Promise<IgResponse<T>>`*

*Defined in [core/request.ts:54](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/request.ts#L54)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`userOptions` | `Options` |

**Returns:** *`Promise<IgResponse<T>>`*

___

###  sign

▸ **sign**(`payload`: `Payload`): *`SignedPost`*

*Defined in [core/request.ts:85](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/request.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | `Payload` |

**Returns:** *`SignedPost`*

___

###  signature

▸ **signature**(`data`: string): *string*

*Defined in [core/request.ts:79](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/request.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *string*

___

###  userBreadcrumb

▸ **userBreadcrumb**(`size`: number): *string*

*Defined in [core/request.ts:94](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/request.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *string*

## Object literals

###  attemptOptions

### ▪ **attemptOptions**: *object*

*Defined in [core/request.ts:34](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/request.ts#L34)*

###  maxAttempts

• **maxAttempts**: *number* = 1

*Defined in [core/request.ts:35](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/request.ts#L35)*