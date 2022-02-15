[instagram-private-api](../../README.md) / [errors](../../modules/errors.md) / IgConfigureVideoError

# Class: IgConfigureVideoError

[errors](../../modules/errors.md).IgConfigureVideoError

## Hierarchy

- [`IgUploadVideoError`](IgUploadVideoError.md)

  ↳ **`IgConfigureVideoError`**

## Table of contents

### Constructors

- [constructor](IgConfigureVideoError.md#constructor)

### Properties

- [message](IgConfigureVideoError.md#message)
- [name](IgConfigureVideoError.md#name)
- [response](IgConfigureVideoError.md#response)
- [stack](IgConfigureVideoError.md#stack)
- [text](IgConfigureVideoError.md#text)
- [videoInfo](IgConfigureVideoError.md#videoinfo)
- [stackTraceLimit](IgConfigureVideoError.md#stacktracelimit)

### Methods

- [captureStackTrace](IgConfigureVideoError.md#capturestacktrace)
- [prepareStackTrace](IgConfigureVideoError.md#preparestacktrace)

## Constructors

### constructor

• **new IgConfigureVideoError**(`response`, `videoInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`IgResponse`](../../modules/types.md#igresponse)<[`UploadRepositoryVideoResponseRootObject`](../../interfaces/responses/UploadRepositoryVideoResponseRootObject.md)\> |
| `videoInfo` | `any` |

#### Inherited from

[IgUploadVideoError](IgUploadVideoError.md).[constructor](IgUploadVideoError.md#constructor)

#### Defined in

[src/errors/ig-upload-video-error.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-upload-video-error.ts#L6)

## Properties

### message

• **message**: `string`

#### Inherited from

[IgUploadVideoError](IgUploadVideoError.md).[message](IgUploadVideoError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

[IgUploadVideoError](IgUploadVideoError.md).[name](IgUploadVideoError.md#name)

#### Defined in

node_modules/ts-custom-error/dist/custom-error.d.ts:2

___

### response

• **response**: [`IgResponse`](../../modules/types.md#igresponse)<`any`\>

#### Inherited from

[IgUploadVideoError](IgUploadVideoError.md).[response](IgUploadVideoError.md#response)

#### Defined in

[src/errors/ig-response.error.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-response.error.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[IgUploadVideoError](IgUploadVideoError.md).[stack](IgUploadVideoError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### text

• **text**: `string`

#### Inherited from

[IgUploadVideoError](IgUploadVideoError.md).[text](IgUploadVideoError.md#text)

#### Defined in

[src/errors/ig-response.error.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/errors/ig-response.error.ts#L7)

___

### videoInfo

• **videoInfo**: `any`

#### Inherited from

[IgUploadVideoError](IgUploadVideoError.md).[videoInfo](IgUploadVideoError.md#videoinfo)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[IgUploadVideoError](IgUploadVideoError.md).[stackTraceLimit](IgUploadVideoError.md#stacktracelimit)

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

[IgUploadVideoError](IgUploadVideoError.md).[captureStackTrace](IgUploadVideoError.md#capturestacktrace)

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

[IgUploadVideoError](IgUploadVideoError.md).[prepareStackTrace](IgUploadVideoError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:140
