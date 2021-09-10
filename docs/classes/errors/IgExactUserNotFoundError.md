[instagram-private-api](../../README.md) / [errors](../../modules/errors.md) / IgExactUserNotFoundError

# Class: IgExactUserNotFoundError

[errors](../../modules/errors.md).IgExactUserNotFoundError

## Hierarchy

- [`IgClientError`](IgClientError.md)

  ↳ **`IgExactUserNotFoundError`**

## Table of contents

### Constructors

- [constructor](IgExactUserNotFoundError.md#constructor)

### Properties

- [message](IgExactUserNotFoundError.md#message)
- [name](IgExactUserNotFoundError.md#name)
- [stack](IgExactUserNotFoundError.md#stack)
- [stackTraceLimit](IgExactUserNotFoundError.md#stacktracelimit)

### Methods

- [captureStackTrace](IgExactUserNotFoundError.md#capturestacktrace)
- [prepareStackTrace](IgExactUserNotFoundError.md#preparestacktrace)

## Constructors

### constructor

• **new IgExactUserNotFoundError**()

#### Overrides

[IgClientError](IgClientError.md).[constructor](IgClientError.md#constructor)

#### Defined in

[src/errors/ig-exact-user-not-found-error.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-exact-user-not-found-error.ts#L4)

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

### stack

• `Optional` **stack**: `string`

#### Inherited from

[IgClientError](IgClientError.md).[stack](IgClientError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

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
