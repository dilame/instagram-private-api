[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / MediaRepository

# Class: MediaRepository

[repositories](../../modules/repositories.md).MediaRepository

## Hierarchy

- `Repository`

  ↳ **`MediaRepository`**

## Table of contents

### Constructors

- [constructor](MediaRepository.md#constructor)

### Methods

- [blocked](MediaRepository.md#blocked)
- [checkOffensiveComment](MediaRepository.md#checkoffensivecomment)
- [comment](MediaRepository.md#comment)
- [commentsBulkDelete](MediaRepository.md#commentsbulkdelete)
- [commentsDisable](MediaRepository.md#commentsdisable)
- [commentsEnable](MediaRepository.md#commentsenable)
- [configure](MediaRepository.md#configure)
- [configureSidecar](MediaRepository.md#configuresidecar)
- [configureToIgtv](MediaRepository.md#configuretoigtv)
- [configureToStory](MediaRepository.md#configuretostory)
- [configureToStoryVideo](MediaRepository.md#configuretostoryvideo)
- [configureVideo](MediaRepository.md#configurevideo)
- [delete](MediaRepository.md#delete)
- [editMedia](MediaRepository.md#editmedia)
- [info](MediaRepository.md#info)
- [like](MediaRepository.md#like)
- [likeComment](MediaRepository.md#likecomment)
- [likers](MediaRepository.md#likers)
- [onlyMe](MediaRepository.md#onlyme)
- [save](MediaRepository.md#save)
- [seen](MediaRepository.md#seen)
- [storyCountdownFollow](MediaRepository.md#storycountdownfollow)
- [storyCountdownUnfollow](MediaRepository.md#storycountdownunfollow)
- [storyPollVote](MediaRepository.md#storypollvote)
- [storyQuestionResponse](MediaRepository.md#storyquestionresponse)
- [storyQuizAnswer](MediaRepository.md#storyquizanswer)
- [storySliderVote](MediaRepository.md#storyslidervote)
- [undoOnlyMe](MediaRepository.md#undoonlyme)
- [unlike](MediaRepository.md#unlike)
- [unlikeComment](MediaRepository.md#unlikecomment)
- [unsave](MediaRepository.md#unsave)
- [uploadFinish](MediaRepository.md#uploadfinish)

## Constructors

### constructor

• **new MediaRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### blocked

▸ **blocked**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/repositories/media.repository.ts:249](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L249)

___

### checkOffensiveComment

▸ **checkOffensiveComment**(`commentText`, `mediaId?`): `Promise`<[`MediaRepositoryCheckOffensiveCommentResponseRootObject`](../../interfaces/responses/MediaRepositoryCheckOffensiveCommentResponseRootObject.md)\>

Normally, this is requested before each comment is sent to ensure it isn't spam or hateful

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commentText` | `string` |  |
| `mediaId?` | `string` | The mediaId of the post |

#### Returns

`Promise`<[`MediaRepositoryCheckOffensiveCommentResponseRootObject`](../../interfaces/responses/MediaRepositoryCheckOffensiveCommentResponseRootObject.md)\>

#### Defined in

[src/repositories/media.repository.ts:154](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L154)

___

### comment

▸ **comment**(`__namedParameters`): `Promise`<[`MediaRepositoryCommentResponseComment`](../../interfaces/responses/MediaRepositoryCommentResponseComment.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.mediaId` | `string` |
| `__namedParameters.module?` | `string` |
| `__namedParameters.replyToCommentId?` | `string` |
| `__namedParameters.text` | `string` |

#### Returns

`Promise`<[`MediaRepositoryCommentResponseComment`](../../interfaces/responses/MediaRepositoryCommentResponseComment.md)\>

#### Defined in

[src/repositories/media.repository.ts:186](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L186)

___

### commentsBulkDelete

▸ **commentsBulkDelete**(`mediaId`, `commentIds`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `commentIds` | `string`[] |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/media.repository.ts:172](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L172)

___

### commentsDisable

▸ **commentsDisable**(`mediaId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:216](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L216)

___

### commentsEnable

▸ **commentsEnable**(`mediaId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:229](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L229)

___

### configure

▸ **configure**(`options`): `Promise`<[`MediaRepositoryConfigureResponseRootObject`](../../interfaces/responses/MediaRepositoryConfigureResponseRootObject.md)\>

Configures an upload (indicated by {upload_id} in the options) for the timeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`MediaConfigureTimelineOptions`](../../interfaces/types/MediaConfigureTimelineOptions.md) | configuration-options |

#### Returns

`Promise`<[`MediaRepositoryConfigureResponseRootObject`](../../interfaces/responses/MediaRepositoryConfigureResponseRootObject.md)\>

#### Defined in

[src/repositories/media.repository.ts:319](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L319)

___

### configureSidecar

▸ **configureSidecar**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MediaConfigureSidecarOptions`](../../interfaces/types/MediaConfigureSidecarOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:509](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L509)

___

### configureToIgtv

▸ **configureToIgtv**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MediaConfigureToIgtvOptions`](../../interfaces/types/MediaConfigureToIgtvOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:579](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L579)

___

### configureToStory

▸ **configureToStory**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MediaConfigureStoryPhotoOptions`](../../interfaces/types/MediaConfigureStoryPhotoOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:421](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L421)

___

### configureToStoryVideo

▸ **configureToStoryVideo**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MediaConfigureStoryVideoOptions`](../../interfaces/types/MediaConfigureStoryVideoOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:458](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L458)

___

### configureVideo

▸ **configureVideo**(`options`): `Promise`<[`MediaRepositoryConfigureResponseRootObject`](../../interfaces/responses/MediaRepositoryConfigureResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MediaConfigureTimelineVideoOptions`](../../interfaces/types/MediaConfigureTimelineVideoOptions.md) |

#### Returns

`Promise`<[`MediaRepositoryConfigureResponseRootObject`](../../interfaces/responses/MediaRepositoryConfigureResponseRootObject.md)\>

#### Defined in

[src/repositories/media.repository.ts:365](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L365)

___

### delete

▸ **delete**(`__namedParameters`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.mediaId` | `string` |
| `__namedParameters.mediaType?` | ``"PHOTO"`` \| ``"VIDEO"`` \| ``"CAROUSEL"`` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:72](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L72)

___

### editMedia

▸ **editMedia**(`__namedParameters`): `Promise`<[`MediaEditResponseRootObject`](../../interfaces/responses/MediaEditResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.captionText` | `string` |
| `__namedParameters.mediaId` | `string` |

#### Returns

`Promise`<[`MediaEditResponseRootObject`](../../interfaces/responses/MediaEditResponseRootObject.md)\>

#### Defined in

[src/repositories/media.repository.ts:50](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L50)

___

### info

▸ **info**(`mediaId`): `Promise`<[`MediaInfoResponseRootObject`](../../interfaces/responses/MediaInfoResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<[`MediaInfoResponseRootObject`](../../interfaces/responses/MediaInfoResponseRootObject.md)\>

#### Defined in

[src/repositories/media.repository.ts:35](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L35)

___

### like

▸ **like**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LikeRequestOptions`](../../modules/types.md#likerequestoptions) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:119](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L119)

___

### likeComment

▸ **likeComment**(`commentId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:133](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L133)

___

### likers

▸ **likers**(`id`): `Promise`<[`MediaRepositoryLikersResponseRootObject`](../../interfaces/responses/MediaRepositoryLikersResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`MediaRepositoryLikersResponseRootObject`](../../interfaces/responses/MediaRepositoryLikersResponseRootObject.md)\>

#### Defined in

[src/repositories/media.repository.ts:242](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L242)

___

### onlyMe

▸ **onlyMe**(`mediaId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/media.repository.ts:621](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L621)

___

### save

▸ **save**(`mediaId`, `collection_ids?`): `Promise`<`any`\>

save a media, or save it to collection if you pass the collection ids in array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaId` | `string` | The mediaId of the post |
| `collection_ids?` | `string`[] | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:690](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L690)

___

### seen

▸ **seen**(`reels`, `module?`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reels` | `Object` | `undefined` |
| `module` | `string` | `'feed_timeline'` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/media.repository.ts:649](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L649)

___

### storyCountdownFollow

▸ **storyCountdownFollow**(`countdownId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `countdownId` | `string` \| `number` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/media.repository.ts:815](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L815)

___

### storyCountdownUnfollow

▸ **storyCountdownUnfollow**(`countdownId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `countdownId` | `string` \| `number` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/media.repository.ts:819](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L819)

___

### storyPollVote

▸ **storyPollVote**(`mediaId`, `pollId`, `vote`): `Promise`<[`MediaUpdatedMediaResponseRootObject`](../../interfaces/responses/MediaUpdatedMediaResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `pollId` | `string` \| `number` |
| `vote` | ``"1"`` \| ``"0"`` |

#### Returns

`Promise`<[`MediaUpdatedMediaResponseRootObject`](../../interfaces/responses/MediaUpdatedMediaResponseRootObject.md)\>

#### Defined in

[src/repositories/media.repository.ts:713](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L713)

___

### storyQuestionResponse

▸ **storyQuestionResponse**(`mediaId`, `questionId`, `options`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `questionId` | `string` \| `number` |
| `options` | `StoryTextQuestionResponse` \| `StoryMusicQuestionResponse` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/media.repository.ts:732](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L732)

___

### storyQuizAnswer

▸ **storyQuizAnswer**(`mediaId`, `quizId`, `answer`): `Promise`<[`MediaUpdatedMediaResponseRootObject`](../../interfaces/responses/MediaUpdatedMediaResponseRootObject.md)\>

Answers a story quiz

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaId` | `string` | storyId |
| `quizId` | `string` \| `number` | id of the quiz |
| `answer` | `string` | index (string is only for compatibility) |

#### Returns

`Promise`<[`MediaUpdatedMediaResponseRootObject`](../../interfaces/responses/MediaUpdatedMediaResponseRootObject.md)\>

#### Defined in

[src/repositories/media.repository.ts:782](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L782)

___

### storySliderVote

▸ **storySliderVote**(`mediaId`, `sliderId`, `vote`): `Promise`<[`MediaUpdatedMediaResponseRootObject`](../../interfaces/responses/MediaUpdatedMediaResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `sliderId` | `string` \| `number` |
| `vote` | `number` |

#### Returns

`Promise`<[`MediaUpdatedMediaResponseRootObject`](../../interfaces/responses/MediaUpdatedMediaResponseRootObject.md)\>

#### Defined in

[src/repositories/media.repository.ts:758](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L758)

___

### undoOnlyMe

▸ **undoOnlyMe**(`mediaId`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/media.repository.ts:635](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L635)

___

### unlike

▸ **unlike**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UnlikeRequestOptions`](../../modules/types.md#unlikerequestoptions) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:126](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L126)

___

### unlikeComment

▸ **unlikeComment**(`commentId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:141](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L141)

___

### unsave

▸ **unsave**(`mediaId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:705](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L705)

___

### uploadFinish

▸ **uploadFinish**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.source_type` | `string` |
| `options.upload_id` | `string` |
| `options.video?` | `Object` |
| `options.video.audio_muted?` | `boolean` |
| `options.video.clips?` | { `length`: `number` ; `source_type`: `string`  }[] |
| `options.video.length` | `number` |
| `options.video.poster_frame_index?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/media.repository.ts:256](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/media.repository.ts#L256)
