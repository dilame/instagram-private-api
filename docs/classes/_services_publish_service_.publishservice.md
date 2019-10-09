> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["services/publish.service"](../modules/_services_publish_service_.md) / [PublishService](_services_publish_service_.publishservice.md) /

# Class: PublishService

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **PublishService**

## Index

### Constructors

* [constructor](_services_publish_service_.publishservice.md#constructor)

### Methods

* [album](_services_publish_service_.publishservice.md#album)
* [photo](_services_publish_service_.publishservice.md#photo)
* [story](_services_publish_service_.publishservice.md#story)
* [video](_services_publish_service_.publishservice.md#video)
* [getVideoInfo](_services_publish_service_.publishservice.md#static-getvideoinfo)

## Constructors

###  constructor

\+ **new PublishService**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[PublishService](_services_publish_service_.publishservice.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[PublishService](_services_publish_service_.publishservice.md)*

## Methods

###  album

▸ **album**(`options`: [PostingAlbumOptions](../interfaces/_types_posting_album_options_.postingalbumoptions.md)): *`Promise<any>`*

*Defined in [services/publish.service.ts:110](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/publish.service.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PostingAlbumOptions](../interfaces/_types_posting_album_options_.postingalbumoptions.md) |

**Returns:** *`Promise<any>`*

___

###  photo

▸ **photo**(`options`: [PostingPhotoOptions](../interfaces/_types_posting_photo_options_.postingphotooptions.md)): *`Promise<MediaRepositoryConfigureResponseRootObject>`*

*Defined in [services/publish.service.ts:28](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/publish.service.ts#L28)*

Uploads a single photo to the timeline-feed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [PostingPhotoOptions](../interfaces/_types_posting_photo_options_.postingphotooptions.md) | the options, containing caption and image-data  |

**Returns:** *`Promise<MediaRepositoryConfigureResponseRootObject>`*

___

###  story

▸ **story**(`options`: [PostingStoryPhotoOptions](../interfaces/_types_posting_photo_options_.postingstoryphotooptions.md) | [PostingStoryVideoOptions](../interfaces/_types_posting_video_options_.postingstoryvideooptions.md)): *`Promise<any>`*

*Defined in [services/publish.service.ts:262](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/publish.service.ts#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PostingStoryPhotoOptions](../interfaces/_types_posting_photo_options_.postingstoryphotooptions.md) \| [PostingStoryVideoOptions](../interfaces/_types_posting_video_options_.postingstoryvideooptions.md) |

**Returns:** *`Promise<any>`*

___

###  video

▸ **video**(`options`: [PostingVideoOptions](../interfaces/_types_posting_video_options_.postingvideooptions.md)): *`Promise<MediaRepositoryConfigureResponseRootObject>`*

*Defined in [services/publish.service.ts:61](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/publish.service.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PostingVideoOptions](../interfaces/_types_posting_video_options_.postingvideooptions.md) |

**Returns:** *`Promise<MediaRepositoryConfigureResponseRootObject>`*

___

### `Static` getVideoInfo

▸ **getVideoInfo**(`buffer`: `Buffer`): *object*

*Defined in [services/publish.service.ts:379](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/publish.service.ts#L379)*

Gets duration in ms, width and height info for a video in the mp4 container

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buffer` | `Buffer` | Buffer, containing the video-file |

**Returns:** *object*

duration in ms, width and height in px