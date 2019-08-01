> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/media.repository"](../modules/_repositories_media_repository_.md) / [MediaRepository](_repositories_media_repository_.mediarepository.md) /

# Class: MediaRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **MediaRepository**

## Index

### Constructors

- [constructor](_repositories_media_repository_.mediarepository.md#constructor)

### Methods

- [blocked](_repositories_media_repository_.mediarepository.md#blocked)
- [comment](_repositories_media_repository_.mediarepository.md#comment)
- [configure](_repositories_media_repository_.mediarepository.md#configure)
- [configureToStory](_repositories_media_repository_.mediarepository.md#configuretostory)
- [delete](_repositories_media_repository_.mediarepository.md#delete)
- [editMedia](_repositories_media_repository_.mediarepository.md#editmedia)
- [info](_repositories_media_repository_.mediarepository.md#info)
- [like](_repositories_media_repository_.mediarepository.md#like)
- [likers](_repositories_media_repository_.mediarepository.md#likers)
- [listReelMediaViewer](_repositories_media_repository_.mediarepository.md#listreelmediaviewer)
- [save](_repositories_media_repository_.mediarepository.md#save)
- [seen](_repositories_media_repository_.mediarepository.md#seen)
- [unlike](_repositories_media_repository_.mediarepository.md#unlike)
- [unsave](_repositories_media_repository_.mediarepository.md#unsave)
- [uploadFinish](_repositories_media_repository_.mediarepository.md#uploadfinish)

## Constructors

### constructor

\+ **new MediaRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[MediaRepository](\_repositories_media_repository_.mediarepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[MediaRepository](\_repositories_media_repository_.mediarepository.md)\_

## Methods

### blocked

▸ **blocked**(): _`Promise<any>`_

_Defined in [repositories/media.repository.ts:156](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L156)_

**Returns:** _`Promise<any>`_

---

### comment

▸ **comment**(`__namedParameters`: object): _`Promise<any>`_

_Defined in [repositories/media.repository.ts:122](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L122)_

**Parameters:**

| Name                | Type   |
| ------------------- | ------ |
| `__namedParameters` | object |

**Returns:** _`Promise<any>`_

---

### configure

▸ **configure**(`options`: [MediaConfigureTimelineOptions](../interfaces/_types_media_configure_options_.mediaconfiguretimelineoptions.md)): _`Promise<MediaRepositoryConfigureResponseRootObject>`_

_Defined in [repositories/media.repository.ts:208](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L208)_

Configures an upload (indicated by {upload_id} in the options) for the timeline

**Parameters:**

| Name      | Type                                                                                                            | Description           |
| --------- | --------------------------------------------------------------------------------------------------------------- | --------------------- |
| `options` | [MediaConfigureTimelineOptions](../interfaces/_types_media_configure_options_.mediaconfiguretimelineoptions.md) | configuration-options |

**Returns:** _`Promise<MediaRepositoryConfigureResponseRootObject>`_

---

### configureToStory

▸ **configureToStory**(`options`: [MediaConfigureStoryOptions](../interfaces/_types_media_configure_options_.mediaconfigurestoryoptions.md)): _`Promise<any>`_

_Defined in [repositories/media.repository.ts:254](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L254)_

**Parameters:**

| Name      | Type                                                                                                      |
| --------- | --------------------------------------------------------------------------------------------------------- |
| `options` | [MediaConfigureStoryOptions](../interfaces/_types_media_configure_options_.mediaconfigurestoryoptions.md) |

**Returns:** _`Promise<any>`_

---

### delete

▸ **delete**(`__namedParameters`: object): _`Promise<any>`_

_Defined in [repositories/media.repository.ts:61](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L61)_

**Parameters:**

| Name                | Type   |
| ------------------- | ------ |
| `__namedParameters` | object |

**Returns:** _`Promise<any>`_

---

### editMedia

▸ **editMedia**(`__namedParameters`: object): _`Promise<MediaEditResponseRootObject>`_

_Defined in [repositories/media.repository.ts:39](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L39)_

**Parameters:**

| Name                | Type   |
| ------------------- | ------ |
| `__namedParameters` | object |

**Returns:** _`Promise<MediaEditResponseRootObject>`_

---

### info

▸ **info**(`mediaId`: string): _`Promise<MediaInfoResponseRootObject>`_

_Defined in [repositories/media.repository.ts:24](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L24)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `mediaId` | string |

**Returns:** _`Promise<MediaInfoResponseRootObject>`_

---

### like

▸ **like**(`options`: [LikeRequestOptions](../modules/_types_media_like_options_.md#likerequestoptions)): _`Promise<any>`_

_Defined in [repositories/media.repository.ts:108](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L108)_

**Parameters:**

| Name      | Type                                                                              |
| --------- | --------------------------------------------------------------------------------- |
| `options` | [LikeRequestOptions](../modules/_types_media_like_options_.md#likerequestoptions) |

**Returns:** _`Promise<any>`_

---

### likers

▸ **likers**(`id`: string): _`Promise<MediaRepositoryLikersResponseRootObject>`_

_Defined in [repositories/media.repository.ts:149](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L149)_

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `id` | string |

**Returns:** _`Promise<MediaRepositoryLikersResponseRootObject>`_

---

### listReelMediaViewer

▸ **listReelMediaViewer**(`mediaId`: string | number): _`Promise<MediaRepositoryListReelMediaViewerResponseRootObject>`_

_Defined in [repositories/media.repository.ts:347](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L347)_

**Parameters:**

| Name      | Type             |
| --------- | ---------------- |
| `mediaId` | string \| number |

**Returns:** _`Promise<MediaRepositoryListReelMediaViewerResponseRootObject>`_

---

### save

▸ **save**(`mediaId`: string): _`Promise<any>`_

_Defined in [repositories/media.repository.ts:361](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L361)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `mediaId` | string |

**Returns:** _`Promise<any>`_

---

### seen

▸ **seen**(`reels`: object, `module`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): _`Promise<StatusResponse>`_

_Defined in [repositories/media.repository.ts:316](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L316)_

**Parameters:**

| Name     | Type                                                          | Default         |
| -------- | ------------------------------------------------------------- | --------------- |
| `reels`  | object                                                        | -               |
| `module` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "feed_timeline" |

**Returns:** _`Promise<StatusResponse>`_

---

### unlike

▸ **unlike**(`options`: [UnlikeRequestOptions](../modules/_types_media_like_options_.md#unlikerequestoptions)): _`Promise<any>`_

_Defined in [repositories/media.repository.ts:115](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L115)_

**Parameters:**

| Name      | Type                                                                                  |
| --------- | ------------------------------------------------------------------------------------- |
| `options` | [UnlikeRequestOptions](../modules/_types_media_like_options_.md#unlikerequestoptions) |

**Returns:** _`Promise<any>`_

---

### unsave

▸ **unsave**(`mediaId`: string): _`Promise<any>`_

_Defined in [repositories/media.repository.ts:369](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L369)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `mediaId` | string |

**Returns:** _`Promise<any>`_

---

### uploadFinish

▸ **uploadFinish**(`options`: object): _`Promise<any>`_

_Defined in [repositories/media.repository.ts:163](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/media.repository.ts#L163)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `options` | object |

**Returns:** _`Promise<any>`_
