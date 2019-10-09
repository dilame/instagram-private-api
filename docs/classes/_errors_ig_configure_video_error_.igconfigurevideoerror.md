> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-configure-video-error"](../modules/_errors_ig_configure_video_error_.md) / [IgConfigureVideoError](_errors_ig_configure_video_error_.igconfigurevideoerror.md) /

# Class: IgConfigureVideoError <**TBody**>

## Type parameters

▪ **TBody**: *object*

## Hierarchy

  * [IgUploadVideoError](_errors_ig_upload_video_error_.iguploadvideoerror.md)

  * **IgConfigureVideoError**

## Index

### Constructors

* [constructor](_errors_ig_configure_video_error_.igconfigurevideoerror.md#constructor)

### Properties

* [message](_errors_ig_configure_video_error_.igconfigurevideoerror.md#message)
* [name](_errors_ig_configure_video_error_.igconfigurevideoerror.md#name)
* [response](_errors_ig_configure_video_error_.igconfigurevideoerror.md#response)
* [stack](_errors_ig_configure_video_error_.igconfigurevideoerror.md#optional-stack)
* [text](_errors_ig_configure_video_error_.igconfigurevideoerror.md#text)
* [videoInfo](_errors_ig_configure_video_error_.igconfigurevideoerror.md#videoinfo)

## Constructors

###  constructor

\+ **new IgConfigureVideoError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹*[UploadRepositoryVideoResponseRootObject](../interfaces/_responses_upload_repository_video_response_.uploadrepositoryvideoresponserootobject.md)*›, `videoInfo`: any): *[IgConfigureVideoError](_errors_ig_configure_video_error_.igconfigurevideoerror.md)*

*Inherited from [IgUploadVideoError](_errors_ig_upload_video_error_.iguploadvideoerror.md).[constructor](_errors_ig_upload_video_error_.iguploadvideoerror.md#constructor)*

*Overrides [IgResponseError](_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)*

*Defined in [errors/ig-upload-video-error.ts:5](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-upload-video-error.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹*[UploadRepositoryVideoResponseRootObject](../interfaces/_responses_upload_repository_video_response_.uploadrepositoryvideoresponserootobject.md)*› |
`videoInfo` | any |

**Returns:** *[IgConfigureVideoError](_errors_ig_configure_video_error_.igconfigurevideoerror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from void*

Defined in /Users/bowzee/WebstormProjects/instagram-private-api/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from void*

*Overrides void*

Defined in /Users/bowzee/WebstormProjects/instagram-private-api/node_modules/ts-custom-error/dist/custom-error.d.ts:2

___

###  response

• **response**: *[IgResponse](../modules/_types_common_types_.md#igresponse)‹*`TBody`*›*

*Inherited from [IgResponseError](_errors_ig_response_error_.igresponseerror.md).[response](_errors_ig_response_error_.igresponseerror.md#response)*

*Defined in [errors/ig-response.error.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L9)*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from void*

*Overrides void*

Defined in /Users/bowzee/WebstormProjects/instagram-private-api/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

###  text

• **text**: *string*

*Inherited from [IgResponseError](_errors_ig_response_error_.igresponseerror.md).[text](_errors_ig_response_error_.igresponseerror.md#text)*

*Defined in [errors/ig-response.error.ts:7](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L7)*

___

###  videoInfo

• **videoInfo**: *any*

*Inherited from [IgUploadVideoError](_errors_ig_upload_video_error_.iguploadvideoerror.md).[videoInfo](_errors_ig_upload_video_error_.iguploadvideoerror.md#videoinfo)*

*Defined in [errors/ig-upload-video-error.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-upload-video-error.ts#L6)*