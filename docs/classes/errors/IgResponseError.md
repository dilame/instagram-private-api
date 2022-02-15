[instagram-private-api](../../README.md) / [errors](../../modules/errors.md) / IgResponseError

# Class: IgResponseError<TBody\>

[errors](../../modules/errors.md).IgResponseError

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBody` | extends `Object``any` |

## Hierarchy

- [`IgClientError`](IgClientError.md)

  ↳ **`IgResponseError`**

  ↳↳ [`IgActionSpamError`](IgActionSpamError.md)

  ↳↳ [`IgCheckpointError`](IgCheckpointError.md)

  ↳↳ [`IgInactiveUserError`](IgInactiveUserError.md)

  ↳↳ [`IgLoginBadPasswordError`](IgLoginBadPasswordError.md)

  ↳↳ [`IgLoginInvalidUserError`](IgLoginInvalidUserError.md)

  ↳↳ [`IgLoginRequiredError`](IgLoginRequiredError.md)

  ↳↳ [`IgLoginTwoFactorRequiredError`](IgLoginTwoFactorRequiredError.md)

  ↳↳ [`IgNotFoundError`](IgNotFoundError.md)

  ↳↳ [`IgPrivateUserError`](IgPrivateUserError.md)

  ↳↳ [`IgSentryBlockError`](IgSentryBlockError.md)

  ↳↳ [`IgUploadVideoError`](IgUploadVideoError.md)

  ↳↳ [`IgUserHasLoggedOutError`](IgUserHasLoggedOutError.md)

## Table of contents

### Constructors

- [constructor](IgResponseError.md#constructor)

### Properties

- [message](IgResponseError.md#message)
- [name](IgResponseError.md#name)
- [response](IgResponseError.md#response)
- [stack](IgResponseError.md#stack)
- [text](IgResponseError.md#text)
- [stackTraceLimit](IgResponseError.md#stacktracelimit)

### Methods

- [captureStackTrace](IgResponseError.md#capturestacktrace)
- [prepareStackTrace](IgResponseError.md#preparestacktrace)

## Constructors

### constructor

• **new IgResponseError**<`TBody`\>(`response`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBody` | extends `Object``any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`IgResponse`](../../modules/types.md#igresponse)<`TBody`\> |

#### Overrides

[IgClientError](IgClientError.md).[constructor](IgClientError.md#constructor)

#### Defined in

[src/errors/ig-response.error.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-response.error.ts#L11)

## Properties

### message

• **message**: `string`

#### Inherited from

[IgClientError](IgClientError.md).[message](IgClientError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

[IgClientError](IgClientError.md).[name](IgClientError.md#name)

#### Defined in

node_modules/ts-custom-error/dist/custom-error.d.ts:2

___

### response

• **response**: [`IgResponse`](../../modules/types.md#igresponse)<`TBody`\>

#### Defined in

[src/errors/ig-response.error.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-response.error.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[IgClientError](IgClientError.md).[stack](IgClientError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### text

• **text**: `string`

#### Defined in

[src/errors/ig-response.error.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-response.error.ts#L7)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[IgClientError](IgClientError.md).[stackTraceLimit](IgClientError.md#stacktracelimit)

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

[IgClientError](IgClientError.md).[captureStackTrace](IgClientError.md#capturestacktrace)

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

[IgClientError](IgClientError.md).[prepareStackTrace](IgClientError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:140
