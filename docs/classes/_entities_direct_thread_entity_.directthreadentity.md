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
* [broadcastStory](_entities_direct_thread_entity_.directthreadentity.md#broadcaststory)
* [broadcastText](_entities_direct_thread_entity_.directthreadentity.md#broadcasttext)
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

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[DirectThreadEntity](_entities_direct_thread_entity_.directthreadentity.md)*

## Properties

###  threadId

• **threadId**: *string* =  null

*Defined in [entities/direct-thread.entity.ts:7](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L7)*

___

###  userIds

• **userIds**: *string[]* =  null

*Defined in [entities/direct-thread.entity.ts:8](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L8)*

## Methods

###  addUser

▸ **addUser**(`userIds`: string[] | number[]): *`Promise<DirectThreadRepositoryAddUserResponseRootObject>`*

*Defined in [entities/direct-thread.entity.ts:83](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`userIds` | string[] \| number[] |

**Returns:** *`Promise<DirectThreadRepositoryAddUserResponseRootObject>`*

___

###  broadcastLink

▸ **broadcastLink**(`link_text`: string, `link_urls`: string[]): *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

*Defined in [entities/direct-thread.entity.ts:23](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`link_text` | string |
`link_urls` | string[] |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

___

###  broadcastPhoto

▸ **broadcastPhoto**(`options`: [DirectThreadBroadcastPhotoOptions](../interfaces/_types_direct_thread_broadcast_photo_options_.directthreadbroadcastphotooptions.md)): *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

*Defined in [entities/direct-thread.entity.ts:33](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DirectThreadBroadcastPhotoOptions](../interfaces/_types_direct_thread_broadcast_photo_options_.directthreadbroadcastphotooptions.md) |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

___

###  broadcastStory

▸ **broadcastStory**(`file`: `Buffer`): *`Promise<any>`*

*Defined in [entities/direct-thread.entity.ts:47](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`file` | `Buffer` |

**Returns:** *`Promise<any>`*

___

###  broadcastText

▸ **broadcastText**(`text`: string): *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

*Defined in [entities/direct-thread.entity.ts:10](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponsePayload>`*

___

###  hide

▸ **hide**(): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:75](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L75)*

**Returns:** *`Promise<StatusResponse>`*

___

###  leave

▸ **leave**(): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:79](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L79)*

**Returns:** *`Promise<StatusResponse>`*

___

###  markItemSeen

▸ **markItemSeen**(`threadItemId`: string): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:87](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`threadItemId` | string |

**Returns:** *`Promise<StatusResponse>`*

___

###  mute

▸ **mute**(): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:67](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L67)*

**Returns:** *`Promise<StatusResponse>`*

___

###  unmute

▸ **unmute**(): *`Promise<StatusResponse>`*

*Defined in [entities/direct-thread.entity.ts:71](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L71)*

**Returns:** *`Promise<StatusResponse>`*

___

###  updateTitle

▸ **updateTitle**(`title`: string): *`Promise<DirectThreadRepositoryUpdateTitleResponseRootObject>`*

*Defined in [entities/direct-thread.entity.ts:63](https://github.com/dilame/instagram-private-api/blob/01eb399/src/entities/direct-thread.entity.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *`Promise<DirectThreadRepositoryUpdateTitleResponseRootObject>`*