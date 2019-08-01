> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["services/publish.service"](../modules/_services_publish_service_.md) / [PublishService](_services_publish_service_.publishservice.md) /

# Class: PublishService

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **PublishService**

## Index

### Constructors

- [constructor](_services_publish_service_.publishservice.md#constructor)

### Methods

- [photo](_services_publish_service_.publishservice.md#photo)
- [story](_services_publish_service_.publishservice.md#story)

## Constructors

### constructor

\+ **new PublishService**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[PublishService](\_services_publish_service_.publishservice.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[PublishService](\_services_publish_service_.publishservice.md)\_

## Methods

### photo

▸ **photo**(`options`: [PostingPhotoOptions](../interfaces/_types_posting_photo_options_.postingphotooptions.md)): _`Promise<MediaRepositoryConfigureResponseRootObject>`_

_Defined in [services/publish.service.ts:11](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/publish.service.ts#L11)_

Uploads a single photo to the timeline-feed

**Parameters:**

| Name      | Type                                                                                      | Description                                    |
| --------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `options` | [PostingPhotoOptions](../interfaces/_types_posting_photo_options_.postingphotooptions.md) | the options, containing caption and image-data |

**Returns:** _`Promise<MediaRepositoryConfigureResponseRootObject>`_

---

### story

▸ **story**(`options`: [PostingStoryOptions](../interfaces/_types_posting_photo_options_.postingstoryoptions.md)): _`Promise<any>`_

_Defined in [services/publish.service.ts:45](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/publish.service.ts#L45)_

**Parameters:**

| Name      | Type                                                                                      |
| --------- | ----------------------------------------------------------------------------------------- |
| `options` | [PostingStoryOptions](../interfaces/_types_posting_photo_options_.postingstoryoptions.md) |

**Returns:** _`Promise<any>`_
