> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/direct-thread.repository"](../modules/_repositories_direct_thread_repository_.md) / [DirectThreadRepository](_repositories_direct_thread_repository_.directthreadrepository.md) /

# Class: DirectThreadRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **DirectThreadRepository**

## Index

### Constructors

* [constructor](_repositories_direct_thread_repository_.directthreadrepository.md#constructor)

### Methods

* [addUser](_repositories_direct_thread_repository_.directthreadrepository.md#adduser)
* [approve](_repositories_direct_thread_repository_.directthreadrepository.md#approve)
* [approveMultiple](_repositories_direct_thread_repository_.directthreadrepository.md#approvemultiple)
* [approveParticipantRequests](_repositories_direct_thread_repository_.directthreadrepository.md#approveparticipantrequests)
* [broadcast](_repositories_direct_thread_repository_.directthreadrepository.md#broadcast)
* [decline](_repositories_direct_thread_repository_.directthreadrepository.md#decline)
* [declineAll](_repositories_direct_thread_repository_.directthreadrepository.md#declineall)
* [declineMultiple](_repositories_direct_thread_repository_.directthreadrepository.md#declinemultiple)
* [deleteItem](_repositories_direct_thread_repository_.directthreadrepository.md#deleteitem)
* [getByParticipants](_repositories_direct_thread_repository_.directthreadrepository.md#getbyparticipants)
* [hide](_repositories_direct_thread_repository_.directthreadrepository.md#hide)
* [leave](_repositories_direct_thread_repository_.directthreadrepository.md#leave)
* [markItemSeen](_repositories_direct_thread_repository_.directthreadrepository.md#markitemseen)
* [mute](_repositories_direct_thread_repository_.directthreadrepository.md#mute)
* [unmute](_repositories_direct_thread_repository_.directthreadrepository.md#unmute)
* [updateTitle](_repositories_direct_thread_repository_.directthreadrepository.md#updatetitle)

## Constructors

###  constructor

\+ **new DirectThreadRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[DirectThreadRepository](_repositories_direct_thread_repository_.directthreadrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[DirectThreadRepository](_repositories_direct_thread_repository_.directthreadrepository.md)*

## Methods

###  addUser

▸ **addUser**(`threadId`: string | number, `userIds`: string[] | number[]): *`Promise<DirectThreadRepositoryAddUserResponseRootObject>`*

*Defined in [repositories/direct-thread.repository.ts:147](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string \| number |
`userIds` | string[] \| number[] |

**Returns:** *`Promise<DirectThreadRepositoryAddUserResponseRootObject>`*

___

###  approve

▸ **approve**(`threadId`: string | number): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:14](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string \| number |

**Returns:** *`Promise<StatusResponse>`*

___

###  approveMultiple

▸ **approveMultiple**(`threadIds`: string[] | number[]): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:26](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`threadIds` | string[] \| number[] |

**Returns:** *`Promise<StatusResponse>`*

___

###  approveParticipantRequests

▸ **approveParticipantRequests**(`threadId`: string | number, `userIds`: string[]): *`Promise<DirectThreadRepositoryApproveParticipantRequestResponseRootObject>`*

*Defined in [repositories/direct-thread.repository.ts:76](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string \| number |
`userIds` | string[] |

**Returns:** *`Promise<DirectThreadRepositoryApproveParticipantRequestResponseRootObject>`*

___

###  broadcast

▸ **broadcast**(`options`: [DirectThreadBroadcastOptions](../modules/_types_direct_thread_broadcast_options_.md#directthreadbroadcastoptions)): *`Promise<DirectThreadRepositoryBroadcastResponseRootObject>`*

*Defined in [repositories/direct-thread.repository.ts:204](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L204)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DirectThreadBroadcastOptions](../modules/_types_direct_thread_broadcast_options_.md#directthreadbroadcastoptions) |

**Returns:** *`Promise<DirectThreadRepositoryBroadcastResponseRootObject>`*

___

###  decline

▸ **decline**(`threadId`: string | number): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:39](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string \| number |

**Returns:** *`Promise<StatusResponse>`*

___

###  declineAll

▸ **declineAll**(): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:64](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L64)*

**Returns:** *`Promise<StatusResponse>`*

___

###  declineMultiple

▸ **declineMultiple**(`threadIds`: string[] | number[]): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:51](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`threadIds` | string[] \| number[] |

**Returns:** *`Promise<StatusResponse>`*

___

###  deleteItem

▸ **deleteItem**(`threadId`: string | number, `itemId`: string | number): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:232](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L232)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string \| number |
`itemId` | string \| number |

**Returns:** *`Promise<StatusResponse>`*

___

###  getByParticipants

▸ **getByParticipants**(`recipientUsers`: string[] | number[]): *`Promise<DirectThreadRepositoryGetByParticipantsResponseRootObject>`*

*Defined in [repositories/direct-thread.repository.ts:94](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`recipientUsers` | string[] \| number[] |

**Returns:** *`Promise<DirectThreadRepositoryGetByParticipantsResponseRootObject>`*

___

###  hide

▸ **hide**(`threadId`: string): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:175](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string |

**Returns:** *`Promise<StatusResponse>`*

___

###  leave

▸ **leave**(`threadId`: string): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:163](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string |

**Returns:** *`Promise<StatusResponse>`*

___

###  markItemSeen

▸ **markItemSeen**(`threadId`: string, `threadItemId`: string): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:188](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string |
`threadItemId` | string |

**Returns:** *`Promise<StatusResponse>`*

___

###  mute

▸ **mute**(`threadId`: string | number): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:123](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string \| number |

**Returns:** *`Promise<StatusResponse>`*

___

###  unmute

▸ **unmute**(`threadId`: string | number): *`Promise<StatusResponse>`*

*Defined in [repositories/direct-thread.repository.ts:135](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string \| number |

**Returns:** *`Promise<StatusResponse>`*

___

###  updateTitle

▸ **updateTitle**(`threadId`: string | number, `title`: string): *`Promise<DirectThreadRepositoryUpdateTitleResponseRootObject>`*

*Defined in [repositories/direct-thread.repository.ts:107](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/direct-thread.repository.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`threadId` | string \| number |
`title` | string |

**Returns:** *`Promise<DirectThreadRepositoryUpdateTitleResponseRootObject>`*