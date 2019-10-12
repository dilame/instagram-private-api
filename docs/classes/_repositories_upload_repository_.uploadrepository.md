> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/upload.repository"](../modules/_repositories_upload_repository_.md) / [UploadRepository](_repositories_upload_repository_.uploadrepository.md) /

# Class: UploadRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **UploadRepository**

## Index

### Constructors

* [constructor](_repositories_upload_repository_.uploadrepository.md#constructor)

### Methods

* [photo](_repositories_upload_repository_.uploadrepository.md#photo)
* [video](_repositories_upload_repository_.uploadrepository.md#video)

## Constructors

###  constructor

\+ **new UploadRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[UploadRepository](_repositories_upload_repository_.uploadrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[UploadRepository](_repositories_upload_repository_.uploadrepository.md)*

## Methods

###  photo

▸ **photo**(`options`: [UploadPhotoOptions](../interfaces/_types_upload_photo_options_.uploadphotooptions.md)): *`Promise<UploadRepositoryPhotoResponseRootObject>`*

*Defined in [repositories/upload.repository.ts:11](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/upload.repository.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UploadPhotoOptions](../interfaces/_types_upload_photo_options_.uploadphotooptions.md) |

**Returns:** *`Promise<UploadRepositoryPhotoResponseRootObject>`*

___

###  video

▸ **video**(`options`: [UploadVideoOptions](../interfaces/_types_upload_video_options_.uploadvideooptions.md)): *`Promise<any>`*

*Defined in [repositories/upload.repository.ts:47](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/upload.repository.ts#L47)*

Uploads a video (container: mp4 with h264 and aac)

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UploadVideoOptions](../interfaces/_types_upload_video_options_.uploadvideooptions.md) |

**Returns:** *`Promise<any>`*