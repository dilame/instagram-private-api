> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/live.repository"](../modules/_repositories_live_repository_.md) / [LiveRepository](_repositories_live_repository_.liverepository.md) /

# Class: LiveRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **LiveRepository**

## Index

### Constructors

- [constructor](_repositories_live_repository_.liverepository.md#constructor)

### Methods

- [activateQuestion](_repositories_live_repository_.liverepository.md#activatequestion)
- [comment](_repositories_live_repository_.liverepository.md#comment)
- [create](_repositories_live_repository_.liverepository.md#create)
- [createQuestion](_repositories_live_repository_.liverepository.md#createquestion)
- [deactivateQuestion](_repositories_live_repository_.liverepository.md#deactivatequestion)
- [endBroadcast](_repositories_live_repository_.liverepository.md#endbroadcast)
- [getComment](_repositories_live_repository_.liverepository.md#getcomment)
- [getFinalViewerList](_repositories_live_repository_.liverepository.md#getfinalviewerlist)
- [getJoinRequestCounts](_repositories_live_repository_.liverepository.md#getjoinrequestcounts)
- [getLikeCount](_repositories_live_repository_.liverepository.md#getlikecount)
- [getLiveQuestions](_repositories_live_repository_.liverepository.md#getlivequestions)
- [getQuestions](_repositories_live_repository_.liverepository.md#getquestions)
- [getViewerList](_repositories_live_repository_.liverepository.md#getviewerlist)
- [heartbeatAndGetViewerCount](_repositories_live_repository_.liverepository.md#heartbeatandgetviewercount)
- [info](_repositories_live_repository_.liverepository.md#info)
- [like](_repositories_live_repository_.liverepository.md#like)
- [muteComment](_repositories_live_repository_.liverepository.md#mutecomment)
- [pinComment](_repositories_live_repository_.liverepository.md#pincomment)
- [resumeBroadcastAfterContentMatch](_repositories_live_repository_.liverepository.md#resumebroadcastaftercontentmatch)
- [start](_repositories_live_repository_.liverepository.md#start)
- [unmuteComment](_repositories_live_repository_.liverepository.md#unmutecomment)
- [unpinComment](_repositories_live_repository_.liverepository.md#unpincomment)
- [wave](_repositories_live_repository_.liverepository.md#wave)

## Constructors

### constructor

\+ **new LiveRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[LiveRepository](\_repositories_live_repository_.liverepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[LiveRepository](\_repositories_live_repository_.liverepository.md)\_

## Methods

### activateQuestion

▸ **activateQuestion**(`broadcastId`: string, `questionId`: string): _`Promise<any>`_

_Defined in [repositories/live.repository.ts:142](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L142)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |
| `questionId`  | string |

**Returns:** _`Promise<any>`_

---

### comment

▸ **comment**(`broadcastId`: string, `message`: string): _`Promise<any>`_

_Defined in [repositories/live.repository.ts:284](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L284)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |
| `message`     | string |

**Returns:** _`Promise<any>`_

---

### create

▸ **create**(`__namedParameters`: object): _`Promise<LiveCreateBroadcastResponseRootObject>`_

_Defined in [repositories/live.repository.ts:94](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L94)_

**Parameters:**

| Name                | Type   |
| ------------------- | ------ |
| `__namedParameters` | object |

**Returns:** _`Promise<LiveCreateBroadcastResponseRootObject>`_

---

### createQuestion

▸ **createQuestion**(`broadcastId`: string, `question`: string): _`Promise<any>`_

_Defined in [repositories/live.repository.ts:128](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L128)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |
| `question`    | string |

**Returns:** _`Promise<any>`_

---

### deactivateQuestion

▸ **deactivateQuestion**(`broadcastId`: string, `questionId`: string): _`Promise<any>`_

_Defined in [repositories/live.repository.ts:155](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L155)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |
| `questionId`  | string |

**Returns:** _`Promise<any>`_

---

### endBroadcast

▸ **endBroadcast**(`broadcastId`: string, `endAfterCopyrightWarning`: boolean): _`Promise<any>`_

_Defined in [repositories/live.repository.ts:270](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L270)_

**Parameters:**

| Name                       | Type    | Default |
| -------------------------- | ------- | ------- |
| `broadcastId`              | string  | -       |
| `endAfterCopyrightWarning` | boolean | false   |

**Returns:** _`Promise<any>`_

---

### getComment

▸ **getComment**(`__namedParameters`: object): _`Promise<LiveCommentsResponseRootObject>`_

_Defined in [repositories/live.repository.ts:32](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L32)_

**Parameters:**

| Name                | Type   |
| ------------------- | ------ |
| `__namedParameters` | object |

**Returns:** _`Promise<LiveCommentsResponseRootObject>`_

---

### getFinalViewerList

▸ **getFinalViewerList**(`broadcastId`: string): _`Promise<LiveFinalViewersResponseRootObject>`_

_Defined in [repositories/live.repository.ts:73](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L73)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |

**Returns:** _`Promise<LiveFinalViewersResponseRootObject>`_

---

### getJoinRequestCounts

▸ **getJoinRequestCounts**(`__namedParameters`: object): _`Promise<LiveJoinRequestCountsResponseRootObject>`_

_Defined in [repositories/live.repository.ts:231](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L231)_

**Parameters:**

| Name                | Type   |
| ------------------- | ------ |
| `__namedParameters` | object |

**Returns:** _`Promise<LiveJoinRequestCountsResponseRootObject>`_

---

### getLikeCount

▸ **getLikeCount**(`broadcastId`: string, `likeTs`: string | number): _`Promise<LiveLikeCountResponseRootObject>`_

_Defined in [repositories/live.repository.ts:203](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L203)_

**Parameters:**

| Name          | Type             | Default |
| ------------- | ---------------- | ------- |
| `broadcastId` | string           | -       |
| `likeTs`      | string \| number | 0       |

**Returns:** _`Promise<LiveLikeCountResponseRootObject>`_

---

### getLiveQuestions

▸ **getLiveQuestions**(`broadcastId`: string): _`Promise<any>`_

_Defined in [repositories/live.repository.ts:332](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L332)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |

**Returns:** _`Promise<any>`_

---

### getQuestions

▸ **getQuestions**(): _`Promise<LiveGetQuestionsResponseRootObject>`_

_Defined in [repositories/live.repository.ts:167](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L167)_

**Returns:** _`Promise<LiveGetQuestionsResponseRootObject>`_

---

### getViewerList

▸ **getViewerList**(`broadcastId`: string): _`Promise<LiveViewerListResponseRootObject>`_

_Defined in [repositories/live.repository.ts:120](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L120)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |

**Returns:** _`Promise<LiveViewerListResponseRootObject>`_

---

### heartbeatAndGetViewerCount

▸ **heartbeatAndGetViewerCount**(`broadcastId`: string): _`Promise<LiveHeartbeatViewerCountResponseRootObject>`_

_Defined in [repositories/live.repository.ts:52](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L52)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |

**Returns:** _`Promise<LiveHeartbeatViewerCountResponseRootObject>`_

---

### info

▸ **info**(`broadcastId`: string): _`Promise<LiveInfoResponseRootObject>`_

_Defined in [repositories/live.repository.ts:65](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L65)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |

**Returns:** _`Promise<LiveInfoResponseRootObject>`_

---

### like

▸ **like**(`broadcastId`: string, `likeCount`: number): _`Promise<LiveLikeResponseRootObject>`_

_Defined in [repositories/live.repository.ts:189](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L189)_

**Parameters:**

| Name          | Type   | Default |
| ------------- | ------ | ------- |
| `broadcastId` | string | -       |
| `likeCount`   | number | 1       |

**Returns:** _`Promise<LiveLikeResponseRootObject>`_

---

### muteComment

▸ **muteComment**(`broadcastId`: string): _`Promise<LiveSwitchCommentsResponseRootObject>`_

_Defined in [repositories/live.repository.ts:19](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L19)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |

**Returns:** _`Promise<LiveSwitchCommentsResponseRootObject>`_

---

### pinComment

▸ **pinComment**(`broadcastId`: string, `commentId`: string): _`Promise<any>`_

_Defined in [repositories/live.repository.ts:302](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L302)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |
| `commentId`   | string |

**Returns:** _`Promise<any>`_

---

### resumeBroadcastAfterContentMatch

▸ **resumeBroadcastAfterContentMatch**(`broadcastId`: string): _`Promise<any>`_

_Defined in [repositories/live.repository.ts:217](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L217)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |

**Returns:** _`Promise<any>`_

---

### start

▸ **start**(`broadcastId`: string, `sendNotifications`: boolean): _`Promise<LiveStartBroadcastResponseRootObject>`_

_Defined in [repositories/live.repository.ts:254](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L254)_

**Parameters:**

| Name                | Type    | Default |
| ------------------- | ------- | ------- |
| `broadcastId`       | string  | -       |
| `sendNotifications` | boolean | true    |

**Returns:** _`Promise<LiveStartBroadcastResponseRootObject>`_

---

### unmuteComment

▸ **unmuteComment**(`broadcastId`: string): _`Promise<LiveSwitchCommentsResponseRootObject>`_

_Defined in [repositories/live.repository.ts:81](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L81)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |

**Returns:** _`Promise<LiveSwitchCommentsResponseRootObject>`_

---

### unpinComment

▸ **unpinComment**(`broadcastId`: string, `commentId`: string): _`Promise<any>`_

_Defined in [repositories/live.repository.ts:317](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L317)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |
| `commentId`   | string |

**Returns:** _`Promise<any>`_

---

### wave

▸ **wave**(`broadcastId`: string, `viewerId`: string): _`Promise<any>`_

_Defined in [repositories/live.repository.ts:175](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/live.repository.ts#L175)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `broadcastId` | string |
| `viewerId`    | string |

**Returns:** _`Promise<any>`_
