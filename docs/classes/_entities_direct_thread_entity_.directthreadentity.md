> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["entities/direct-thread.entity"](../modules/_entities_direct_thread_entity_.md) / [DirectThreadEntity](_entities_direct_thread_entity_.directthreadentity.md) /

# Class: DirectThreadEntity

## Hierarchy

- [Entity](_core_entity_.entity.md)

- **DirectThreadEntity**

## Index

### Constructors

- [constructor](_entities_direct_thread_entity_.directthreadentity.md#constructor)

### Properties

- [threadId](_entities_direct_thread_entity_.directthreadentity.md#threadid)
- [userIds](_entities_direct_thread_entity_.directthreadentity.md#userids)

### Methods

- [addUser](_entities_direct_thread_entity_.directthreadentity.md#adduser)
- [broadcastLink](_entities_direct_thread_entity_.directthreadentity.md#broadcastlink)
- [broadcastPhoto](_entities_direct_thread_entity_.directthreadentity.md#broadcastphoto)
- [broadcastStory](_entities_direct_thread_entity_.directthreadentity.md#broadcaststory)
- [broadcastText](_entities_direct_thread_entity_.directthreadentity.md#broadcasttext)
- [hide](_entities_direct_thread_entity_.directthreadentity.md#hide)
- [leave](_entities_direct_thread_entity_.directthreadentity.md#leave)
- [mute](_entities_direct_thread_entity_.directthreadentity.md#mute)
- [unmute](_entities_direct_thread_entity_.directthreadentity.md#unmute)
- [updateTitle](_entities_direct_thread_entity_.directthreadentity.md#updatetitle)

## Constructors

### constructor

\+ **new DirectThreadEntity**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[DirectThreadEntity](\_entities_direct_thread_entity_.directthreadentity.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[DirectThreadEntity](\_entities_direct_thread_entity_.directthreadentity.md)\_

## Properties

### threadId

• **threadId**: _string_ = null

_Defined in [entities/direct-thread.entity.ts:7](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L7)_

---

### userIds

• **userIds**: _string[]_ = null

_Defined in [entities/direct-thread.entity.ts:8](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L8)_

## Methods

### addUser

▸ **addUser**(`userIds`: string[] | number[]): _`Promise<any>`_

_Defined in [entities/direct-thread.entity.ts:83](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L83)_

**Parameters:**

| Name      | Type                 |
| --------- | -------------------- |
| `userIds` | string[] \| number[] |

**Returns:** _`Promise<any>`_

---

### broadcastLink

▸ **broadcastLink**(`link_text`: string, `link_urls`: string[]): _`Promise<any>`_

_Defined in [entities/direct-thread.entity.ts:23](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L23)_

**Parameters:**

| Name        | Type     |
| ----------- | -------- |
| `link_text` | string   |
| `link_urls` | string[] |

**Returns:** _`Promise<any>`_

---

### broadcastPhoto

▸ **broadcastPhoto**(`options`: [DirectThreadBroadcastPhotoOptions](../interfaces/_types_direct_thread_broadcast_photo_options_.directthreadbroadcastphotooptions.md)): _`Promise<any>`_

_Defined in [entities/direct-thread.entity.ts:33](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L33)_

**Parameters:**

| Name      | Type                                                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `options` | [DirectThreadBroadcastPhotoOptions](../interfaces/_types_direct_thread_broadcast_photo_options_.directthreadbroadcastphotooptions.md) |

**Returns:** _`Promise<any>`_

---

### broadcastStory

▸ **broadcastStory**(`file`: `Buffer`): _`Promise<any>`_

_Defined in [entities/direct-thread.entity.ts:47](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L47)_

**Parameters:**

| Name   | Type     |
| ------ | -------- |
| `file` | `Buffer` |

**Returns:** _`Promise<any>`_

---

### broadcastText

▸ **broadcastText**(`text`: string): _`Promise<any>`_

_Defined in [entities/direct-thread.entity.ts:10](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L10)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `text` | string |

**Returns:** _`Promise<any>`_

---

### hide

▸ **hide**(): _`Promise<any>`_

_Defined in [entities/direct-thread.entity.ts:75](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L75)_

**Returns:** _`Promise<any>`_

---

### leave

▸ **leave**(): _`Promise<any>`_

_Defined in [entities/direct-thread.entity.ts:79](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L79)_

**Returns:** _`Promise<any>`_

---

### mute

▸ **mute**(): _`Promise<any>`_

_Defined in [entities/direct-thread.entity.ts:67](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L67)_

**Returns:** _`Promise<any>`_

---

### unmute

▸ **unmute**(): _`Promise<any>`_

_Defined in [entities/direct-thread.entity.ts:71](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L71)_

**Returns:** _`Promise<any>`_

---

### updateTitle

▸ **updateTitle**(`title`: string): _`Promise<any>`_

_Defined in [entities/direct-thread.entity.ts:63](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/entities/direct-thread.entity.ts#L63)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `title` | string |

**Returns:** _`Promise<any>`_
