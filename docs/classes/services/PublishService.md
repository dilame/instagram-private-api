[instagram-private-api](../../README.md) / [services](../../modules/services.md) / PublishService

# Class: PublishService

[services](../../modules/services.md).PublishService

## Hierarchy

- `Repository`

  ↳ **`PublishService`**

## Table of contents

### Constructors

- [constructor](PublishService.md#constructor)

### Methods

- [album](PublishService.md#album)
- [igtvVideo](PublishService.md#igtvvideo)
- [photo](PublishService.md#photo)
- [story](PublishService.md#story)
- [video](PublishService.md#video)
- [catchTranscodeError](PublishService.md#catchtranscodeerror)
- [getMP4Duration](PublishService.md#getmp4duration)
- [getVideoInfo](PublishService.md#getvideoinfo)

## Constructors

### constructor

• **new PublishService**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### album

▸ **album**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PostingAlbumOptions`](../../interfaces/types/PostingAlbumOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/services/publish.service.ts:211](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/publish.service.ts#L211)

___

### igtvVideo

▸ **igtvVideo**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `PostingIgtvOptions` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/services/publish.service.ts:400](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/publish.service.ts#L400)

___

### photo

▸ **photo**(`options`): `Promise`<[`MediaRepositoryConfigureResponseRootObject`](../../interfaces/responses/MediaRepositoryConfigureResponseRootObject.md)\>

Uploads a single photo to the timeline-feed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`PostingPhotoOptions`](../../interfaces/types/PostingPhotoOptions.md) | the options, containing caption and image-data |

#### Returns

`Promise`<[`MediaRepositoryConfigureResponseRootObject`](../../interfaces/responses/MediaRepositoryConfigureResponseRootObject.md)\>

#### Defined in

[src/services/publish.service.ts:136](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/publish.service.ts#L136)

___

### story

▸ **story**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PostingStoryPhotoOptions`](../../interfaces/types/PostingStoryPhotoOptions.md) \| [`PostingStoryVideoOptions`](../../interfaces/types/PostingStoryVideoOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/services/publish.service.ts:284](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/publish.service.ts#L284)

___

### video

▸ **video**(`options`): `Promise`<[`MediaRepositoryConfigureResponseRootObject`](../../interfaces/responses/MediaRepositoryConfigureResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PostingVideoOptions`](../../interfaces/types/PostingVideoOptions.md) |

#### Returns

`Promise`<[`MediaRepositoryConfigureResponseRootObject`](../../interfaces/responses/MediaRepositoryConfigureResponseRootObject.md)\>

#### Defined in

[src/services/publish.service.ts:154](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/publish.service.ts#L154)

___

### catchTranscodeError

▸ `Static` **catchTranscodeError**(`videoInfo`, `transcodeDelayInMs`): (`error`: `any`) => `Bluebird`<`void`\>

The current way of handling the 202 - Accepted; Transcode pending -error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `videoInfo` | `any` | The video info for debugging reasons |
| `transcodeDelayInMs` | `number` | The delay for instagram to transcode the video |

#### Returns

`fn`

▸ (`error`): `Bluebird`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

##### Returns

`Bluebird`<`void`\>

#### Defined in

[src/services/publish.service.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/publish.service.ts#L42)

___

### getMP4Duration

▸ `Static` **getMP4Duration**(`buffer`): `number`

Reads the duration in ms from any MP4 file with at least one stream (a/v)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

`number`

#### Defined in

[src/services/publish.service.ts:74](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/publish.service.ts#L74)

___

### getVideoInfo

▸ `Static` **getVideoInfo**(`buffer`): `Object`

Gets duration in ms, width and height info for a video in the mp4 container

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `Buffer` | Buffer, containing the video-file |

#### Returns

`Object`

duration in ms, width and height in px

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[src/services/publish.service.ts:60](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/publish.service.ts#L60)
