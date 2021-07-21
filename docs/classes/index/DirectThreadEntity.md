[instagram-private-api](../../README.md) / [index](../../modules/index.md) / DirectThreadEntity

# Class: DirectThreadEntity

[index](../../modules/index.md).DirectThreadEntity

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DirectThreadEntity`**

## Table of contents

### Constructors

- [constructor](DirectThreadEntity.md#constructor)

### Properties

- [threadId](DirectThreadEntity.md#threadid)
- [userIds](DirectThreadEntity.md#userids)

### Methods

- [addUser](DirectThreadEntity.md#adduser)
- [broadcastLink](DirectThreadEntity.md#broadcastlink)
- [broadcastPhoto](DirectThreadEntity.md#broadcastphoto)
- [broadcastPost](DirectThreadEntity.md#broadcastpost)
- [broadcastProfile](DirectThreadEntity.md#broadcastprofile)
- [broadcastReel](DirectThreadEntity.md#broadcastreel)
- [broadcastStory](DirectThreadEntity.md#broadcaststory)
- [broadcastText](DirectThreadEntity.md#broadcasttext)
- [broadcastUserStory](DirectThreadEntity.md#broadcastuserstory)
- [broadcastVideo](DirectThreadEntity.md#broadcastvideo)
- [broadcastVoice](DirectThreadEntity.md#broadcastvoice)
- [deleteItem](DirectThreadEntity.md#deleteitem)
- [hide](DirectThreadEntity.md#hide)
- [leave](DirectThreadEntity.md#leave)
- [markItemSeen](DirectThreadEntity.md#markitemseen)
- [mute](DirectThreadEntity.md#mute)
- [unmute](DirectThreadEntity.md#unmute)
- [updateTitle](DirectThreadEntity.md#updatetitle)

## Constructors

### constructor

• **new DirectThreadEntity**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Inherited from

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/repository.ts#L7)

## Properties

### threadId

• **threadId**: `string` = `null`

#### Defined in

[src/entities/direct-thread.entity.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L16)

___

### userIds

• **userIds**: `string`[] = `null`

#### Defined in

[src/entities/direct-thread.entity.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L17)

## Methods

### addUser

▸ **addUser**(`userIds`): `Promise`<[`DirectThreadRepositoryAddUserResponseRootObject`](../../interfaces/index/DirectThreadRepositoryAddUserResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userIds` | `string`[] \| `number`[] |

#### Returns

`Promise`<[`DirectThreadRepositoryAddUserResponseRootObject`](../../interfaces/index/DirectThreadRepositoryAddUserResponseRootObject.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:239](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L239)

___

### broadcastLink

▸ **broadcastLink**(`link_text`, `link_urls`): `Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link_text` | `string` |
| `link_urls` | `string`[] |

#### Returns

`Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:95](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L95)

___

### broadcastPhoto

▸ **broadcastPhoto**(`options`): `Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DirectThreadBroadcastPhotoOptions`](../../interfaces/index/DirectThreadBroadcastPhotoOptions.md) |

#### Returns

`Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:105](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L105)

___

### broadcastPost

▸ **broadcastPost**(`mediaId`): `Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:119](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L119)

___

### broadcastProfile

▸ **broadcastProfile**(`id`): `Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:86](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L86)

___

### broadcastReel

▸ **broadcastReel**(`options`): `Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

This is used when replying to a story (swiping up) and it's creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DirectThreadBroadcastReelOptions`](../../interfaces/index/DirectThreadBroadcastReelOptions.md) |

#### Returns

`Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:52](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L52)

___

### broadcastStory

▸ **broadcastStory**(`input`): `Promise`<`any`\>

Uploads a story to the thread
The story is either destroyable (view 'once') or 'replayable'

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Buffer` \| [`DirectThreadBroadcastPhotoStoryOptions`](../../interfaces/index/DirectThreadBroadcastPhotoStoryOptions.md) \| [`DirectThreadBroadcastVideoStoryOptions`](../../interfaces/index/DirectThreadBroadcastVideoStoryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/entities/direct-thread.entity.ts:195](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L195)

___

### broadcastText

▸ **broadcastText**(`text`, `skipLinkCheck?`): `Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

Sends a text message to the thread. If the message contains links, these links will be properly displayed (turn off with {@param skipLinkCheck})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to send |
| `skipLinkCheck?` | `boolean` | May be omitted; skips checking for links. This was added to only require `url-regex-safe` if it's necessary as it may cause problems (See #1328). |

#### Returns

`Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:33](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L33)

___

### broadcastUserStory

▸ **broadcastUserStory**(`options`): `Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

This is used when sharing a story (app: plane/share button) to a thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DirectThreadBroadcastReelOptions`](../../interfaces/index/DirectThreadBroadcastReelOptions.md) |

#### Returns

`Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:71](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L71)

___

### broadcastVideo

▸ **broadcastVideo**(`options`): `Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DirectThreadBroadcastVideoOptions`](../../interfaces/index/DirectThreadBroadcastVideoOptions.md) |

#### Returns

`Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:131](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L131)

___

### broadcastVoice

▸ **broadcastVoice**(`options`): `Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DirectThreadBroadcastVoiceOptions`](../../interfaces/index/DirectThreadBroadcastVoiceOptions.md) |

#### Returns

`Promise`<[`DirectThreadRepositoryBroadcastResponseRootObject`](../../interfaces/index/DirectThreadRepositoryBroadcastResponseRootObject.md) \| [`DirectThreadRepositoryBroadcastResponsePayload`](../../interfaces/index/DirectThreadRepositoryBroadcastResponsePayload.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:159](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L159)

___

### deleteItem

▸ **deleteItem**(`itemId`): `Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemId` | `string` \| `number` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:19](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L19)

___

### hide

▸ **hide**(): `Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:231](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L231)

___

### leave

▸ **leave**(): `Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:235](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L235)

___

### markItemSeen

▸ **markItemSeen**(`threadItemId`): `Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `threadItemId` | `string` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:243](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L243)

___

### mute

▸ **mute**(): `Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:223](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L223)

___

### unmute

▸ **unmute**(): `Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/index/StatusResponse.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:227](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L227)

___

### updateTitle

▸ **updateTitle**(`title`): `Promise`<[`DirectThreadRepositoryUpdateTitleResponseRootObject`](../../interfaces/index/DirectThreadRepositoryUpdateTitleResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`Promise`<[`DirectThreadRepositoryUpdateTitleResponseRootObject`](../../interfaces/index/DirectThreadRepositoryUpdateTitleResponseRootObject.md)\>

#### Defined in

[src/entities/direct-thread.entity.ts:219](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/entities/direct-thread.entity.ts#L219)
