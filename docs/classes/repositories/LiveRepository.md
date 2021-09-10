[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / LiveRepository

# Class: LiveRepository

[repositories](../../modules/repositories.md).LiveRepository

## Hierarchy

- `Repository`

  ↳ **`LiveRepository`**

## Table of contents

### Constructors

- [constructor](LiveRepository.md#constructor)

### Methods

- [activateQuestion](LiveRepository.md#activatequestion)
- [addPostLiveToIgtv](LiveRepository.md#addpostlivetoigtv)
- [addToPostLive](LiveRepository.md#addtopostlive)
- [comment](LiveRepository.md#comment)
- [create](LiveRepository.md#create)
- [createQuestion](LiveRepository.md#createquestion)
- [deactivateQuestion](LiveRepository.md#deactivatequestion)
- [endBroadcast](LiveRepository.md#endbroadcast)
- [getComment](LiveRepository.md#getcomment)
- [getFinalViewerList](LiveRepository.md#getfinalviewerlist)
- [getJoinRequestCounts](LiveRepository.md#getjoinrequestcounts)
- [getLikeCount](LiveRepository.md#getlikecount)
- [getLivePresence](LiveRepository.md#getlivepresence)
- [getLiveQuestions](LiveRepository.md#getlivequestions)
- [getPostLiveThumbnails](LiveRepository.md#getpostlivethumbnails)
- [getQuestions](LiveRepository.md#getquestions)
- [getViewerList](LiveRepository.md#getviewerlist)
- [heartbeatAndGetViewerCount](LiveRepository.md#heartbeatandgetviewercount)
- [info](LiveRepository.md#info)
- [like](LiveRepository.md#like)
- [muteComment](LiveRepository.md#mutecomment)
- [pinComment](LiveRepository.md#pincomment)
- [resumeBroadcastAfterContentMatch](LiveRepository.md#resumebroadcastaftercontentmatch)
- [start](LiveRepository.md#start)
- [unmuteComment](LiveRepository.md#unmutecomment)
- [unpinComment](LiveRepository.md#unpincomment)
- [wave](LiveRepository.md#wave)

## Constructors

### constructor

• **new LiveRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### activateQuestion

▸ **activateQuestion**(`broadcastId`, `questionId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |
| `questionId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:145](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L145)

___

### addPostLiveToIgtv

▸ **addPostLiveToIgtv**(`__namedParameters`): `Promise`<[`LiveAddPostLiveToIgtvResponseRootObject`](../../interfaces/responses/LiveAddPostLiveToIgtvResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.broadcastId` | `string` |
| `__namedParameters.coverUploadId` | `string` |
| `__namedParameters.description` | `string` |
| `__namedParameters.igtvSharePreviewToFeed?` | `boolean` |
| `__namedParameters.title` | `string` |

#### Returns

`Promise`<[`LiveAddPostLiveToIgtvResponseRootObject`](../../interfaces/responses/LiveAddPostLiveToIgtvResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:284](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L284)

___

### addToPostLive

▸ **addToPostLive**(`broadcastId`): `Promise`<[`LiveAddToPostResponse`](../../interfaces/responses/LiveAddToPostResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |

#### Returns

`Promise`<[`LiveAddToPostResponse`](../../interfaces/responses/LiveAddToPostResponse.md)\>

#### Defined in

[src/repositories/live.repository.ts:387](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L387)

___

### comment

▸ **comment**(`broadcastId`, `message`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |
| `message` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:328](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L328)

___

### create

▸ **create**(`__namedParameters`): `Promise`<[`LiveCreateBroadcastResponseRootObject`](../../interfaces/responses/LiveCreateBroadcastResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.message?` | `string` |
| `__namedParameters.previewHeight?` | `string` \| `number` |
| `__namedParameters.previewWidth?` | `string` \| `number` |

#### Returns

`Promise`<[`LiveCreateBroadcastResponseRootObject`](../../interfaces/responses/LiveCreateBroadcastResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:97](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L97)

___

### createQuestion

▸ **createQuestion**(`broadcastId`, `question`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |
| `question` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:131](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L131)

___

### deactivateQuestion

▸ **deactivateQuestion**(`broadcastId`, `questionId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |
| `questionId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:158](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L158)

___

### endBroadcast

▸ **endBroadcast**(`broadcastId`, `endAfterCopyrightWarning?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `broadcastId` | `string` | `undefined` |
| `endAfterCopyrightWarning` | `boolean` | `false` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:314](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L314)

___

### getComment

▸ **getComment**(`__namedParameters`): `Promise`<[`LiveCommentsResponseRootObject`](../../interfaces/responses/LiveCommentsResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.broadcastId` | `string` |
| `__namedParameters.commentsRequested?` | `number` |
| `__namedParameters.lastCommentTs?` | `string` \| `number` |

#### Returns

`Promise`<[`LiveCommentsResponseRootObject`](../../interfaces/responses/LiveCommentsResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:35](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L35)

___

### getFinalViewerList

▸ **getFinalViewerList**(`broadcastId`): `Promise`<[`LiveFinalViewersResponseRootObject`](../../interfaces/responses/LiveFinalViewersResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |

#### Returns

`Promise`<[`LiveFinalViewersResponseRootObject`](../../interfaces/responses/LiveFinalViewersResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:76](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L76)

___

### getJoinRequestCounts

▸ **getJoinRequestCounts**(`__namedParameters`): `Promise`<[`LiveJoinRequestCountsResponseRootObject`](../../interfaces/responses/LiveJoinRequestCountsResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.broadcastId` | `string` |
| `__namedParameters.lastFetchTs` | `string` \| `number` |
| `__namedParameters.lastSeenTs` | `string` \| `number` |
| `__namedParameters.lastTotalCount` | `string` \| `number` |

#### Returns

`Promise`<[`LiveJoinRequestCountsResponseRootObject`](../../interfaces/responses/LiveJoinRequestCountsResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:245](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L245)

___

### getLikeCount

▸ **getLikeCount**(`broadcastId`, `likeTs?`): `Promise`<[`LiveLikeCountResponseRootObject`](../../interfaces/responses/LiveLikeCountResponseRootObject.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `broadcastId` | `string` | `undefined` |
| `likeTs` | `string` \| `number` | `0` |

#### Returns

`Promise`<[`LiveLikeCountResponseRootObject`](../../interfaces/responses/LiveLikeCountResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:206](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L206)

___

### getLivePresence

▸ **getLivePresence**(): `Promise`<`any`\>

Shows all online users, ready to watch your stream

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:403](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L403)

___

### getLiveQuestions

▸ **getLiveQuestions**(`broadcastId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:376](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L376)

___

### getPostLiveThumbnails

▸ **getPostLiveThumbnails**(`broadcastId`): `Promise`<[`LivePostLiveThumbnailsResponseRootObject`](../../interfaces/responses/LivePostLiveThumbnailsResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |

#### Returns

`Promise`<[`LivePostLiveThumbnailsResponseRootObject`](../../interfaces/responses/LivePostLiveThumbnailsResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:220](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L220)

___

### getQuestions

▸ **getQuestions**(): `Promise`<[`LiveGetQuestionsResponseRootObject`](../../interfaces/responses/LiveGetQuestionsResponseRootObject.md)\>

#### Returns

`Promise`<[`LiveGetQuestionsResponseRootObject`](../../interfaces/responses/LiveGetQuestionsResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:170](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L170)

___

### getViewerList

▸ **getViewerList**(`broadcastId`): `Promise`<[`LiveViewerListResponseRootObject`](../../interfaces/responses/LiveViewerListResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |

#### Returns

`Promise`<[`LiveViewerListResponseRootObject`](../../interfaces/responses/LiveViewerListResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:123](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L123)

___

### heartbeatAndGetViewerCount

▸ **heartbeatAndGetViewerCount**(`broadcastId`): `Promise`<[`LiveHeartbeatViewerCountResponseRootObject`](../../interfaces/responses/LiveHeartbeatViewerCountResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |

#### Returns

`Promise`<[`LiveHeartbeatViewerCountResponseRootObject`](../../interfaces/responses/LiveHeartbeatViewerCountResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:55](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L55)

___

### info

▸ **info**(`broadcastId`): `Promise`<[`LiveInfoResponseRootObject`](../../interfaces/responses/LiveInfoResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |

#### Returns

`Promise`<[`LiveInfoResponseRootObject`](../../interfaces/responses/LiveInfoResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:68](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L68)

___

### like

▸ **like**(`broadcastId`, `likeCount?`): `Promise`<[`LiveLikeResponseRootObject`](../../interfaces/responses/LiveLikeResponseRootObject.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `broadcastId` | `string` | `undefined` |
| `likeCount` | `number` | `1` |

#### Returns

`Promise`<[`LiveLikeResponseRootObject`](../../interfaces/responses/LiveLikeResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:192](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L192)

___

### muteComment

▸ **muteComment**(`broadcastId`): `Promise`<[`LiveSwitchCommentsResponseRootObject`](../../interfaces/responses/LiveSwitchCommentsResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |

#### Returns

`Promise`<[`LiveSwitchCommentsResponseRootObject`](../../interfaces/responses/LiveSwitchCommentsResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:22](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L22)

___

### pinComment

▸ **pinComment**(`broadcastId`, `commentId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |
| `commentId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:346](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L346)

___

### resumeBroadcastAfterContentMatch

▸ **resumeBroadcastAfterContentMatch**(`broadcastId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:231](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L231)

___

### start

▸ **start**(`broadcastId`, `sendNotifications?`): `Promise`<[`LiveStartBroadcastResponseRootObject`](../../interfaces/responses/LiveStartBroadcastResponseRootObject.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `broadcastId` | `string` | `undefined` |
| `sendNotifications` | `boolean` | `true` |

#### Returns

`Promise`<[`LiveStartBroadcastResponseRootObject`](../../interfaces/responses/LiveStartBroadcastResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:268](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L268)

___

### unmuteComment

▸ **unmuteComment**(`broadcastId`): `Promise`<[`LiveSwitchCommentsResponseRootObject`](../../interfaces/responses/LiveSwitchCommentsResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |

#### Returns

`Promise`<[`LiveSwitchCommentsResponseRootObject`](../../interfaces/responses/LiveSwitchCommentsResponseRootObject.md)\>

#### Defined in

[src/repositories/live.repository.ts:84](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L84)

___

### unpinComment

▸ **unpinComment**(`broadcastId`, `commentId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |
| `commentId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:361](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L361)

___

### wave

▸ **wave**(`broadcastId`, `viewerId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcastId` | `string` |
| `viewerId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/live.repository.ts:178](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/live.repository.ts#L178)
