[instagram-private-api](../../README.md) / [errors](../../modules/errors.md) / IgLoginTwoFactorRequiredError

# Class: IgLoginTwoFactorRequiredError

[errors](../../modules/errors.md).IgLoginTwoFactorRequiredError

## Hierarchy

- [`IgResponseError`](IgResponseError.md)<[`AccountRepositoryLoginErrorResponse`](../../interfaces/responses/AccountRepositoryLoginErrorResponse.md)\>

  ↳ **`IgLoginTwoFactorRequiredError`**

## Table of contents

### Constructors

- [constructor](IgLoginTwoFactorRequiredError.md#constructor)

### Properties

- [message](IgLoginTwoFactorRequiredError.md#message)
- [name](IgLoginTwoFactorRequiredError.md#name)
- [response](IgLoginTwoFactorRequiredError.md#response)
- [stack](IgLoginTwoFactorRequiredError.md#stack)
- [text](IgLoginTwoFactorRequiredError.md#text)
- [stackTraceLimit](IgLoginTwoFactorRequiredError.md#stacktracelimit)

### Methods

- [captureStackTrace](IgLoginTwoFactorRequiredError.md#capturestacktrace)
- [prepareStackTrace](IgLoginTwoFactorRequiredError.md#preparestacktrace)

## Constructors

### constructor

• **new IgLoginTwoFactorRequiredError**(`response`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`IgResponse`](../../modules/types.md#igresponse)<[`AccountRepositoryLoginErrorResponse`](../../interfaces/responses/AccountRepositoryLoginErrorResponse.md)\> |

#### Inherited from

[IgResponseError](IgResponseError.md).[constructor](IgResponseError.md#constructor)

#### Defined in

[src/errors/ig-response.error.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-response.error.ts#L11)

## Properties

### message

• **message**: `string`

#### Inherited from

[IgResponseError](IgResponseError.md).[message](IgResponseError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

[IgResponseError](IgResponseError.md).[name](IgResponseError.md#name)

#### Defined in

node_modules/ts-custom-error/dist/custom-error.d.ts:2

___

### response

• **response**: [`IgResponse`](../../modules/types.md#igresponse)<[`AccountRepositoryLoginErrorResponse`](../../interfaces/responses/AccountRepositoryLoginErrorResponse.md)\>

#### Inherited from

[IgResponseError](IgResponseError.md).[response](IgResponseError.md#response)

#### Defined in

[src/errors/ig-response.error.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-response.error.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[IgResponseError](IgResponseError.md).[stack](IgResponseError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### text

• **text**: `string`

#### Inherited from

[IgResponseError](IgResponseError.md).[text](IgResponseError.md#text)

#### Defined in

[src/errors/ig-response.error.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-response.error.ts#L7)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[IgResponseError](IgResponseError.md).[stackTraceLimit](IgResponseError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:142

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `Object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[IgResponseError](IgResponseError.md).[captureStackTrace](IgResponseError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:133

___

### prepareStackTrace

▸ `Static` `Optional` **prepareStackTrace**(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### Inherited from

[IgResponseError](IgResponseError.md).[prepareStackTrace](IgResponseError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:140
