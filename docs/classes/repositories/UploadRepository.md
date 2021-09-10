[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / UploadRepository

# Class: UploadRepository

[repositories](../../modules/repositories.md).UploadRepository

## Hierarchy

- `Repository`

  ↳ **`UploadRepository`**

## Table of contents

### Constructors

- [constructor](UploadRepository.md#constructor)

### Methods

- [endSegmentedVideo](UploadRepository.md#endsegmentedvideo)
- [initVideo](UploadRepository.md#initvideo)
- [photo](UploadRepository.md#photo)
- [startSegmentedVideo](UploadRepository.md#startsegmentedvideo)
- [video](UploadRepository.md#video)
- [videoSegmentInit](UploadRepository.md#videosegmentinit)
- [videoSegmentTransfer](UploadRepository.md#videosegmenttransfer)
- [createVideoRuploadParams](UploadRepository.md#createvideoruploadparams)

## Constructors

### constructor

• **new UploadRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### endSegmentedVideo

▸ **endSegmentedVideo**(`__namedParameters`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/upload.repository.ts:170](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/upload.repository.ts#L170)

___

### initVideo

▸ **initVideo**(`__namedParameters`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/repositories/upload.repository.ts:80](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/upload.repository.ts#L80)

___

### photo

▸ **photo**(`options`): `Promise`<[`UploadRepositoryPhotoResponseRootObject`](../../interfaces/responses/UploadRepositoryPhotoResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UploadPhotoOptions`](../../interfaces/types/UploadPhotoOptions.md) |

#### Returns

`Promise`<[`UploadRepositoryPhotoResponseRootObject`](../../interfaces/responses/UploadRepositoryPhotoResponseRootObject.md)\>

#### Defined in

[src/repositories/upload.repository.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/upload.repository.ts#L18)

___

### startSegmentedVideo

▸ **startSegmentedVideo**(`ruploadParams`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ruploadParams` | `any` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/repositories/upload.repository.ts:98](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/upload.repository.ts#L98)

___

### video

▸ **video**(`options`): `Promise`<`any`\>

Uploads a video (container: mp4 with h264 and aac)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UploadVideoOptions`](../../interfaces/types/UploadVideoOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/upload.repository.ts:45](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/upload.repository.ts#L45)

___

### videoSegmentInit

▸ **videoSegmentInit**(`options`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UploadVideoSegmentInitOptions`](../../interfaces/types/UploadVideoSegmentInitOptions.md) |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/repositories/upload.repository.ts:117](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/upload.repository.ts#L117)

___

### videoSegmentTransfer

▸ **videoSegmentTransfer**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UploadVideoSegmentTransferOptions`](../../interfaces/types/UploadVideoSegmentTransferOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/upload.repository.ts:141](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/upload.repository.ts#L141)

___

### createVideoRuploadParams

▸ `Static` **createVideoRuploadParams**(`options`, `uploadId`, `retryContext?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UploadVideoOptions`](../../interfaces/types/UploadVideoOptions.md) |
| `uploadId` | `string` \| `number` |
| `retryContext?` | [`UploadRetryContext`](../../interfaces/types/UploadRetryContext.md) |

#### Returns

`any`

#### Defined in

[src/repositories/upload.repository.ts:214](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/upload.repository.ts#L214)
