> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/direct-thread.repository"](../modules/_repositories_direct_thread_repository_.md) / [DirectThreadRepository](_repositories_direct_thread_repository_.directthreadrepository.md) /

# Class: DirectThreadRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **DirectThreadRepository**

## Index

### Constructors

- [constructor](_repositories_direct_thread_repository_.directthreadrepository.md#constructor)

### Methods

- [addUser](_repositories_direct_thread_repository_.directthreadrepository.md#adduser)
- [approve](_repositories_direct_thread_repository_.directthreadrepository.md#approve)
- [approveMultiple](_repositories_direct_thread_repository_.directthreadrepository.md#approvemultiple)
- [approveParticipantRequests](_repositories_direct_thread_repository_.directthreadrepository.md#approveparticipantrequests)
- [broadcast](_repositories_direct_thread_repository_.directthreadrepository.md#broadcast)
- [decline](_repositories_direct_thread_repository_.directthreadrepository.md#decline)
- [declineAll](_repositories_direct_thread_repository_.directthreadrepository.md#declineall)
- [declineMultiple](_repositories_direct_thread_repository_.directthreadrepository.md#declinemultiple)
- [getByParticipants](_repositories_direct_thread_repository_.directthreadrepository.md#getbyparticipants)
- [hide](_repositories_direct_thread_repository_.directthreadrepository.md#hide)
- [leave](_repositories_direct_thread_repository_.directthreadrepository.md#leave)
- [mute](_repositories_direct_thread_repository_.directthreadrepository.md#mute)
- [unmute](_repositories_direct_thread_repository_.directthreadrepository.md#unmute)
- [updateTitle](_repositories_direct_thread_repository_.directthreadrepository.md#updatetitle)

## Constructors

### constructor

\+ **new DirectThreadRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[DirectThreadRepository](\_repositories_direct_thread_repository_.directthreadrepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[DirectThreadRepository](\_repositories_direct_thread_repository_.directthreadrepository.md)\_

## Methods

### addUser

▸ **addUser**(`threadId`: string | number, `userIds`: string[] | number[]): _`Promise<DirectThreadRepositoryAddUserResponseRootObject>`_

_Defined in [repositories/direct-thread.repository.ts:147](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L147)_

**Parameters:**

| Name       | Type                 |
| ---------- | -------------------- |
| `threadId` | string \| number     |
| `userIds`  | string[] \| number[] |

**Returns:** _`Promise<DirectThreadRepositoryAddUserResponseRootObject>`_

---

### approve

▸ **approve**(`threadId`: string | number): _`Promise<StatusResponse>`_

_Defined in [repositories/direct-thread.repository.ts:14](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L14)_

**Parameters:**

| Name       | Type             |
| ---------- | ---------------- |
| `threadId` | string \| number |

**Returns:** _`Promise<StatusResponse>`_

---

### approveMultiple

▸ **approveMultiple**(`threadIds`: string[] | number[]): _`Promise<StatusResponse>`_

_Defined in [repositories/direct-thread.repository.ts:26](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L26)_

**Parameters:**

| Name        | Type                 |
| ----------- | -------------------- |
| `threadIds` | string[] \| number[] |

**Returns:** _`Promise<StatusResponse>`_

---

### approveParticipantRequests

▸ **approveParticipantRequests**(`threadId`: string | number, `userIds`: string[]): _`Promise<DirectThreadRepositoryApproveParticipantRequestResponseRootObject>`_

_Defined in [repositories/direct-thread.repository.ts:76](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L76)_

**Parameters:**

| Name       | Type             |
| ---------- | ---------------- |
| `threadId` | string \| number |
| `userIds`  | string[]         |

**Returns:** _`Promise<DirectThreadRepositoryApproveParticipantRequestResponseRootObject>`_

---

### broadcast

▸ **broadcast**(`options`: [DirectThreadBroadcastOptions](../modules/_types_direct_thread_broadcast_options_.md#directthreadbroadcastoptions)): _`Promise<DirectThreadRepositoryBroadcastResponseRootObject>`_

_Defined in [repositories/direct-thread.repository.ts:188](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L188)_

**Parameters:**

| Name      | Type                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| `options` | [DirectThreadBroadcastOptions](../modules/_types_direct_thread_broadcast_options_.md#directthreadbroadcastoptions) |

**Returns:** _`Promise<DirectThreadRepositoryBroadcastResponseRootObject>`_

---

### decline

▸ **decline**(`threadId`: string | number): _`Promise<StatusResponse>`_

_Defined in [repositories/direct-thread.repository.ts:39](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L39)_

**Parameters:**

| Name       | Type             |
| ---------- | ---------------- |
| `threadId` | string \| number |

**Returns:** _`Promise<StatusResponse>`_

---

### declineAll

▸ **declineAll**(): _`Promise<StatusResponse>`_

_Defined in [repositories/direct-thread.repository.ts:64](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L64)_

**Returns:** _`Promise<StatusResponse>`_

---

### declineMultiple

▸ **declineMultiple**(`threadIds`: string[] | number[]): _`Promise<StatusResponse>`_

_Defined in [repositories/direct-thread.repository.ts:51](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L51)_

**Parameters:**

| Name        | Type                 |
| ----------- | -------------------- |
| `threadIds` | string[] \| number[] |

**Returns:** _`Promise<StatusResponse>`_

---

### getByParticipants

▸ **getByParticipants**(`recipientUsers`: string[] | number[]): _`Promise<DirectThreadRepositoryGetByParticipantsResponseRootObject>`_

_Defined in [repositories/direct-thread.repository.ts:94](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L94)_

**Parameters:**

| Name             | Type                 |
| ---------------- | -------------------- |
| `recipientUsers` | string[] \| number[] |

**Returns:** _`Promise<DirectThreadRepositoryGetByParticipantsResponseRootObject>`_

---

### hide

▸ **hide**(`threadId`: string): _`Promise<StatusResponse>`_

_Defined in [repositories/direct-thread.repository.ts:175](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L175)_

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `threadId` | string |

**Returns:** _`Promise<StatusResponse>`_

---

### leave

▸ **leave**(`threadId`: string): _`Promise<StatusResponse>`_

_Defined in [repositories/direct-thread.repository.ts:163](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L163)_

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `threadId` | string |

**Returns:** _`Promise<StatusResponse>`_

---

### mute

▸ **mute**(`threadId`: string | number): _`Promise<StatusResponse>`_

_Defined in [repositories/direct-thread.repository.ts:123](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L123)_

**Parameters:**

| Name       | Type             |
| ---------- | ---------------- |
| `threadId` | string \| number |

**Returns:** _`Promise<StatusResponse>`_

---

### unmute

▸ **unmute**(`threadId`: string | number): _`Promise<StatusResponse>`_

_Defined in [repositories/direct-thread.repository.ts:135](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L135)_

**Parameters:**

| Name       | Type             |
| ---------- | ---------------- |
| `threadId` | string \| number |

**Returns:** _`Promise<StatusResponse>`_

---

### updateTitle

▸ **updateTitle**(`threadId`: string | number, `title`: string): _`Promise<DirectThreadRepositoryUpdateTitleResponseRootObject>`_

_Defined in [repositories/direct-thread.repository.ts:107](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct-thread.repository.ts#L107)_

**Parameters:**

| Name       | Type             |
| ---------- | ---------------- |
| `threadId` | string \| number |
| `title`    | string           |

**Returns:** _`Promise<DirectThreadRepositoryUpdateTitleResponseRootObject>`_
