[instagram-private-api](../../README.md) / [errors](../../modules/errors.md) / IgClientError

# Class: IgClientError

[errors](../../modules/errors.md).IgClientError

## Hierarchy

- `CustomError`

  ↳ **`IgClientError`**

  ↳↳ [`IgChallengeWrongCodeError`](IgChallengeWrongCodeError.md)

  ↳↳ [`IgCookieNotFoundError`](IgCookieNotFoundError.md)

  ↳↳ [`IgExactUserNotFoundError`](IgExactUserNotFoundError.md)

  ↳↳ [`IgNetworkError`](IgNetworkError.md)

  ↳↳ [`IgNoCheckpointError`](IgNoCheckpointError.md)

  ↳↳ [`IgParseError`](IgParseError.md)

  ↳↳ [`IgRequestsLimitError`](IgRequestsLimitError.md)

  ↳↳ [`IgResponseError`](IgResponseError.md)

  ↳↳ [`IgUserIdNotFoundError`](IgUserIdNotFoundError.md)

## Table of contents

### Constructors

- [constructor](IgClientError.md#constructor)

### Properties

- [message](IgClientError.md#message)
- [name](IgClientError.md#name)
- [stack](IgClientError.md#stack)
- [stackTraceLimit](IgClientError.md#stacktracelimit)

### Methods

- [captureStackTrace](IgClientError.md#capturestacktrace)
- [prepareStackTrace](IgClientError.md#preparestacktrace)

## Constructors

### constructor

• **new IgClientError**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Instagram API error was made.'` |

#### Overrides

CustomError.constructor

#### Defined in

[src/errors/ig-client.error.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-client.error.ts#L4)

## Properties

### message

• **message**: `string`

#### Inherited from

CustomError.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

CustomError.name

#### Defined in

node_modules/ts-custom-error/dist/custom-error.d.ts:2

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

CustomError.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

CustomError.stackTraceLimit

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

CustomError.captureStackTrace

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

CustomError.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:140
