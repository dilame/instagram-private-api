[instagram-private-api](../../README.md) / [errors](../../modules/errors.md) / IgUploadVideoError

# Class: IgUploadVideoError

[errors](../../modules/errors.md).IgUploadVideoError

## Hierarchy

- [`IgResponseError`](IgResponseError.md)

  ↳ **`IgUploadVideoError`**

  ↳↳ [`IgConfigureVideoError`](IgConfigureVideoError.md)

## Table of contents

### Constructors

- [constructor](IgUploadVideoError.md#constructor)

### Properties

- [message](IgUploadVideoError.md#message)
- [name](IgUploadVideoError.md#name)
- [response](IgUploadVideoError.md#response)
- [stack](IgUploadVideoError.md#stack)
- [text](IgUploadVideoError.md#text)
- [videoInfo](IgUploadVideoError.md#videoinfo)
- [stackTraceLimit](IgUploadVideoError.md#stacktracelimit)

### Methods

- [captureStackTrace](IgUploadVideoError.md#capturestacktrace)
- [prepareStackTrace](IgUploadVideoError.md#preparestacktrace)

## Constructors

### constructor

• **new IgUploadVideoError**(`response`, `videoInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`IgResponse`](../../modules/types.md#igresponse)<[`UploadRepositoryVideoResponseRootObject`](../../interfaces/responses/UploadRepositoryVideoResponseRootObject.md)\> |
| `videoInfo` | `any` |

#### Overrides

[IgResponseError](IgResponseError.md).[constructor](IgResponseError.md#constructor)

#### Defined in

[src/errors/ig-upload-video-error.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-upload-video-error.ts#L6)

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

• **response**: [`IgResponse`](../../modules/types.md#igresponse)<`any`\>

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

### videoInfo

• **videoInfo**: `any`

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
