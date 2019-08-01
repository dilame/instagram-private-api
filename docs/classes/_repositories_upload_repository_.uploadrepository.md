> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/upload.repository"](../modules/_repositories_upload_repository_.md) / [UploadRepository](_repositories_upload_repository_.uploadrepository.md) /

# Class: UploadRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **UploadRepository**

## Index

### Constructors

- [constructor](_repositories_upload_repository_.uploadrepository.md#constructor)

### Methods

- [photo](_repositories_upload_repository_.uploadrepository.md#photo)

## Constructors

### constructor

\+ **new UploadRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[UploadRepository](\_repositories_upload_repository_.uploadrepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[UploadRepository](\_repositories_upload_repository_.uploadrepository.md)\_

## Methods

### photo

▸ **photo**(`options`: [UploadPhotoOptions](../interfaces/_types_upload_photo_options_.uploadphotooptions.md)): _`Promise<UploadRepositoryPhotoResponseRootObject>`_

_Defined in [repositories/upload.repository.ts:10](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/upload.repository.ts#L10)_

**Parameters:**

| Name      | Type                                                                                   |
| --------- | -------------------------------------------------------------------------------------- |
| `options` | [UploadPhotoOptions](../interfaces/_types_upload_photo_options_.uploadphotooptions.md) |

**Returns:** _`Promise<UploadRepositoryPhotoResponseRootObject>`_
