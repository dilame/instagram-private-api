> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["entities/direct-thread.entity"](../modules/_entities_direct_thread_entity_.md) / [DirectThreadEntity](_entities_direct_thread_entity_.directthreadentity.md) /

# Class: DirectThreadEntity

## Hierarchy

  * [Entity](_core_entity_.entity.md)

  * **DirectThreadEntity**

## Index

### Constructors

* [constructor](_entities_direct_thread_entity_.directthreadentity.md#constructor)

### Properties

* [threadId](_entities_direct_thread_entity_.directthreadentity.md#threadid)
* [userIds](_entities_direct_thread_entity_.directthreadentity.md#userids)

### Methods

* [addUser](_entities_direct_thread_entity_.directthreadentity.md#adduser)
* [broadcastLink](_entities_direct_thread_entity_.directthreadentity.md#broadcastlink)
* [broadcastPhoto](_entities_direct_thread_entity_.directthreadentity.md#broadcastphoto)
* [broadcastProfile](_entities_direct_thread_entity_.directthreadentity.md#broadcastprofile)
* [broadcastReel](_entities_direct_thread_entity_.directthreadentity.md#broadcastreel)
* [broadcastStory](_entities_direct_thread_entity_.directthreadentity.md#broadcaststory)
* [broadcastText](_entities_direct_thread_entity_.directthreadentity.md#broadcasttext)
* [broadcastUserStory](_entities_direct_thread_entity_.directthreadentity.md#broadcastuserstory)
* [broadcastVideo](_entities_direct_thread_entity_.directthreadentity.md#broadcastvideo)
* [deleteItem](_entities_direct_thread_entity_.directthreadentity.md#deleteitem)
* [hide](_entities_direct_thread_entity_.directthreadentity.md#hide)
* [leave](_entities_direct_thread_entity_.directthreadentity.md#leave)
* [markItemSeen](_entities_direct_thread_entity_.directthreadentity.md#markitemseen)
* [mute](_entities_direct_thread_entity_.directthreadentity.md#mute)
* [unmute](_entities_direct_thread_entity_.directthreadentity.md#unmute)
* [updateTitle](_entities_direct_thread_entity_.directthreadentity.md#updatetitle)

## Constructors

###  constructor

\+ **new DirectThreadEntity**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[DirectThreadEntity](_entities_direct_thread_entity_.directthreadentity.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[DirectThreadEntity](_entities_direct_thread_entity_.directthreadentity.md)*

## Properties

###  threadId

• **threadId**: *string* =  null

*Defined in [entities/direct-thread.entity.ts:14](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L14)*

___

###  userIds

• **userIds**: *string[]* =  null

*Defined in [entities/direct-thread.entity.ts:15](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L15)*

## Methods

###  addUser

▸ **addUser**(`userIds`: string[] | number[]): *`Promise<DirectThreadRepositoryAddUserResponseRootObject>`*

*Defined in [entities/direct-thread.entity.ts:175](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`userIds` | string[] \| number[] |

**Returns:** *`Promise<DirectThreadRepositoryAddUserResponseRootObject>`*

___

###  broadcastLink

▸ **broadcastLink**(`link_text`: string, `link_urls`: string[]): *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

*Defined in [entities/direct-thread.entity.ts:84](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`link_text` | string |
`link_urls` | string[] |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

___

###  broadcastPhoto

▸ **broadcastPhoto**(`options`: [DirectThreadBroadcastPhotoOptions](../interfaces/_types_direct_thread_broadcast_media_options_.directthreadbroadcastphotooptions.md)): *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

*Defined in [entities/direct-thread.entity.ts:94](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DirectThreadBroadcastPhotoOptions](../interfaces/_types_direct_thread_broadcast_media_options_.directthreadbroadcastphotooptions.md) |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

___

###  broadcastProfile

▸ **broadcastProfile**(`id`: number | string): *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

*Defined in [entities/direct-thread.entity.ts:75](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number \| string |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

___

###  broadcastReel

▸ **broadcastReel**(`options`: [DirectThreadBroadcastReelOptions](../interfaces/_types_direct_thread_broadcast_reel_options_.directthreadbroadcastreeloptions.md)): *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

*Defined in [entities/direct-thread.entity.ts:41](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L41)*

This is used when replying to a story (swiping up) and it's creator

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [DirectThreadBroadcastReelOptions](../interfaces/_types_direct_thread_broadcast_reel_options_.directthreadbroadcastreeloptions.md) |   |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

___

###  broadcastStory

▸ **broadcastStory**(`input`: `Buffer` | [DirectThreadBroadcastStoryOptions](../interfaces/_types_direct_thread_broadcast_media_options_.directthreadbroadcaststoryoptions.md)): *`Promise<any>`*

*Defined in [entities/direct-thread.entity.ts:133](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L133)*

Uploads a story to the thread
The story is either destroyable (view 'once') or 'replayable'

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | `Buffer` \| [DirectThreadBroadcastStoryOptions](../interfaces/_types_direct_thread_broadcast_media_options_.directthreadbroadcaststoryoptions.md) |   |

**Returns:** *`Promise<any>`*

___

###  broadcastText

▸ **broadcastText**(`text`: string): *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

*Defined in [entities/direct-thread.entity.ts:24](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

___

###  broadcastUserStory

▸ **broadcastUserStory**(`options`: [DirectThreadBroadcastReelOptions](../interfaces/_types_direct_thread_broadcast_reel_options_.directthreadbroadcastreeloptions.md)): *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

*Defined in [entities/direct-thread.entity.ts:60](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L60)*

This is used when sharing a story (app: plane/share button) to a thread

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [DirectThreadBroadcastReelOptions](../interfaces/_types_direct_thread_broadcast_reel_options_.directthreadbroadcastreeloptions.md) |   |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

___

###  broadcastVideo

▸ **broadcastVideo**(`options`: [DirectThreadBroadcastVideoOptions](../interfaces/_types_direct_thread_broadcast_media_options_.directthreadbroadcastvideooptions.md)): *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

*Defined in [entities/direct-thread.entity.ts:108](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DirectThreadBroadcastVideoOptions](../interfaces/_types_direct_thread_broadcast_media_options_.directthreadbroadcastvideooptions.md) |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

___

###  deleteItem

▸ **deleteItem**(`itemId`: string | number): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:17](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`itemId` | string \| number |

**Returns:** *`Promise<StatusResponse>`*

___

###  hide

▸ **hide**(): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:167](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L167)*

**Returns:** *`Promise<StatusResponse>`*

___

###  leave

▸ **leave**(): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:171](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L171)*

**Returns:** *`Promise<StatusResponse>`*

___

###  markItemSeen

▸ **markItemSeen**(`threadItemId`: string): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:179](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`threadItemId` | string |

**Returns:** *`Promise<StatusResponse>`*

___

###  mute

▸ **mute**(): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:159](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L159)*

**Returns:** *`Promise<StatusResponse>`*

___

###  unmute

▸ **unmute**(): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:163](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L163)*

**Returns:** *`Promise<StatusResponse>`*

___

###  updateTitle

▸ **updateTitle**(`title`: string): *`Promise<DirectThreadRepositoryUpdateTitleResponseRootObject>`*

*Defined in [entities/direct-thread.entity.ts:155](https://github.com/dilame/instagram-private-api/blob/3e16058/src/entities/direct-thread.entity.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *`Promise<DirectThreadRepositoryUpdateTitleResponseRootObject>`*