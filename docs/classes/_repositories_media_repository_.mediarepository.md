> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/media.repository"](../modules/_repositories_media_repository_.md) / [MediaRepository](_repositories_media_repository_.mediarepository.md) /

# Class: MediaRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **MediaRepository**

## Index

### Constructors

* [constructor](_repositories_media_repository_.mediarepository.md#constructor)

### Methods

* [blocked](_repositories_media_repository_.mediarepository.md#blocked)
* [checkOffensiveComment](_repositories_media_repository_.mediarepository.md#checkoffensivecomment)
* [comment](_repositories_media_repository_.mediarepository.md#comment)
* [commentsBulkDelete](_repositories_media_repository_.mediarepository.md#commentsbulkdelete)
* [configure](_repositories_media_repository_.mediarepository.md#configure)
* [configureSidecar](_repositories_media_repository_.mediarepository.md#configuresidecar)
* [configureToStory](_repositories_media_repository_.mediarepository.md#configuretostory)
* [configureToStoryVideo](_repositories_media_repository_.mediarepository.md#configuretostoryvideo)
* [configureVideo](_repositories_media_repository_.mediarepository.md#configurevideo)
* [delete](_repositories_media_repository_.mediarepository.md#delete)
* [editMedia](_repositories_media_repository_.mediarepository.md#editmedia)
* [info](_repositories_media_repository_.mediarepository.md#info)
* [like](_repositories_media_repository_.mediarepository.md#like)
* [likers](_repositories_media_repository_.mediarepository.md#likers)
* [save](_repositories_media_repository_.mediarepository.md#save)
* [seen](_repositories_media_repository_.mediarepository.md#seen)
* [unlike](_repositories_media_repository_.mediarepository.md#unlike)
* [unsave](_repositories_media_repository_.mediarepository.md#unsave)
* [uploadFinish](_repositories_media_repository_.mediarepository.md#uploadfinish)

## Constructors

###  constructor

\+ **new MediaRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[MediaRepository](_repositories_media_repository_.mediarepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[MediaRepository](_repositories_media_repository_.mediarepository.md)*

## Methods

###  blocked

▸ **blocked**(): *`Promise<string[]>`*

*Defined in [repositories/media.repository.ts:204](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L204)*

**Returns:** *`Promise<string[]>`*

___

###  checkOffensiveComment

▸ **checkOffensiveComment**(`commentText`: string, `mediaId?`: string): *`Promise<MediaRepositoryCheckOffensiveCommentResponseRootObject>`*

*Defined in [repositories/media.repository.ts:135](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L135)*

Normally, this is requested before each comment is sent to ensure it isn't spam or hateful

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`commentText` | string | - |
`mediaId?` | string | The mediaId of the post  |

**Returns:** *`Promise<MediaRepositoryCheckOffensiveCommentResponseRootObject>`*

___

###  comment

▸ **comment**(`__namedParameters`: object): *`Promise<MediaRepositoryCommentResponseComment>`*

*Defined in [repositories/media.repository.ts:167](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *`Promise<MediaRepositoryCommentResponseComment>`*

___

###  commentsBulkDelete

▸ **commentsBulkDelete**(`mediaId`: string, `commentIds`: string[]): *`Promise<StatusResponse>`*

*Defined in [repositories/media.repository.ts:153](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`mediaId` | string |
`commentIds` | string[] |

**Returns:** *`Promise<StatusResponse>`*

___

###  configure

▸ **configure**(`options`: [MediaConfigureTimelineOptions](../interfaces/_types_media_configure_options_.mediaconfiguretimelineoptions.md)): *`Promise<MediaRepositoryConfigureResponseRootObject>`*

*Defined in [repositories/media.repository.ts:274](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L274)*

Configures an upload (indicated by {upload_id} in the options) for the timeline

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [MediaConfigureTimelineOptions](../interfaces/_types_media_configure_options_.mediaconfiguretimelineoptions.md) | configuration-options  |

**Returns:** *`Promise<MediaRepositoryConfigureResponseRootObject>`*

___

###  configureSidecar

▸ **configureSidecar**(`options`: [MediaConfigureSidecarOptions](../interfaces/_types_media_configure_sidecar_options_.mediaconfiguresidecaroptions.md)): *`Promise<any>`*

*Defined in [repositories/media.repository.ts:478](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L478)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MediaConfigureSidecarOptions](../interfaces/_types_media_configure_sidecar_options_.mediaconfiguresidecaroptions.md) |

**Returns:** *`Promise<any>`*

___

###  configureToStory

▸ **configureToStory**(`options`: [MediaConfigureStoryPhotoOptions](../interfaces/_types_media_configure_story_options_.mediaconfigurestoryphotooptions.md)): *`Promise<any>`*

*Defined in [repositories/media.repository.ts:392](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L392)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MediaConfigureStoryPhotoOptions](../interfaces/_types_media_configure_story_options_.mediaconfigurestoryphotooptions.md) |

**Returns:** *`Promise<any>`*

___

###  configureToStoryVideo

▸ **configureToStoryVideo**(`options`: [MediaConfigureStoryVideoOptions](../interfaces/_types_media_configure_story_options_.mediaconfigurestoryvideooptions.md)): *`Promise<any>`*

*Defined in [repositories/media.repository.ts:429](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L429)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MediaConfigureStoryVideoOptions](../interfaces/_types_media_configure_story_options_.mediaconfigurestoryvideooptions.md) |

**Returns:** *`Promise<any>`*

___

###  configureVideo

▸ **configureVideo**(`options`: [MediaConfigureTimelineVideoOptions](../interfaces/_types_media_configure_video_options_.mediaconfiguretimelinevideooptions.md)): *`Promise<MediaRepositoryConfigureResponseRootObject>`*

*Defined in [repositories/media.repository.ts:320](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L320)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MediaConfigureTimelineVideoOptions](../interfaces/_types_media_configure_video_options_.mediaconfiguretimelinevideooptions.md) |

**Returns:** *`Promise<MediaRepositoryConfigureResponseRootObject>`*

___

###  delete

▸ **delete**(`__namedParameters`: object): *`Promise<any>`*

*Defined in [repositories/media.repository.ts:69](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *`Promise<any>`*

___

###  editMedia

▸ **editMedia**(`__namedParameters`: object): *`Promise<MediaEditResponseRootObject>`*

*Defined in [repositories/media.repository.ts:47](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *`Promise<MediaEditResponseRootObject>`*

___

###  info

▸ **info**(`mediaId`: string): *`Promise<MediaInfoResponseRootObject>`*

*Defined in [repositories/media.repository.ts:32](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`mediaId` | string |

**Returns:** *`Promise<MediaInfoResponseRootObject>`*

___

###  like

▸ **like**(`options`: [LikeRequestOptions](../modules/_types_media_like_options_.md#likerequestoptions)): *`Promise<any>`*

*Defined in [repositories/media.repository.ts:116](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [LikeRequestOptions](../modules/_types_media_like_options_.md#likerequestoptions) |

**Returns:** *`Promise<any>`*

___

###  likers

▸ **likers**(`id`: string): *`Promise<MediaRepositoryLikersResponseRootObject>`*

*Defined in [repositories/media.repository.ts:197](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *`Promise<MediaRepositoryLikersResponseRootObject>`*

___

###  save

▸ **save**(`mediaId`: string): *`Promise<any>`*

*Defined in [repositories/media.repository.ts:580](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L580)*

**Parameters:**

Name | Type |
------ | ------ |
`mediaId` | string |

**Returns:** *`Promise<any>`*

___

###  seen

▸ **seen**(`reels`: object, `module`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *`Promise<StatusResponse>`*

*Defined in [repositories/media.repository.ts:548](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L548)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reels` | object | - |
`module` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) | "feed_timeline" |

**Returns:** *`Promise<StatusResponse>`*

___

###  unlike

▸ **unlike**(`options`: [UnlikeRequestOptions](../modules/_types_media_like_options_.md#unlikerequestoptions)): *`Promise<any>`*

*Defined in [repositories/media.repository.ts:123](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UnlikeRequestOptions](../modules/_types_media_like_options_.md#unlikerequestoptions) |

**Returns:** *`Promise<any>`*

___

###  unsave

▸ **unsave**(`mediaId`: string): *`Promise<any>`*

*Defined in [repositories/media.repository.ts:588](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L588)*

**Parameters:**

Name | Type |
------ | ------ |
`mediaId` | string |

**Returns:** *`Promise<any>`*

___

###  uploadFinish

▸ **uploadFinish**(`options`: object): *`Promise<any>`*

*Defined in [repositories/media.repository.ts:211](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/media.repository.ts#L211)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | object |

**Returns:** *`Promise<any>`*