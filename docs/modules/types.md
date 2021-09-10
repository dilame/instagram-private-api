[instagram-private-api](../README.md) / types

# Module: types

## Table of contents

### Interfaces

- [AccountEditProfileOptions](../interfaces/types/AccountEditProfileOptions.md)
- [AccountInsightsOptions](../interfaces/types/AccountInsightsOptions.md)
- [AccountTwoFactorLoginOptions](../interfaces/types/AccountTwoFactorLoginOptions.md)
- [CreateHighlightsReelOptions](../interfaces/types/CreateHighlightsReelOptions.md)
- [DirectThreadBroadcastPhotoOptions](../interfaces/types/DirectThreadBroadcastPhotoOptions.md)
- [DirectThreadBroadcastPhotoStoryOptions](../interfaces/types/DirectThreadBroadcastPhotoStoryOptions.md)
- [DirectThreadBroadcastReelOptions](../interfaces/types/DirectThreadBroadcastReelOptions.md)
- [DirectThreadBroadcastStoryOptions](../interfaces/types/DirectThreadBroadcastStoryOptions.md)
- [DirectThreadBroadcastVideoOptions](../interfaces/types/DirectThreadBroadcastVideoOptions.md)
- [DirectThreadBroadcastVideoStoryOptions](../interfaces/types/DirectThreadBroadcastVideoStoryOptions.md)
- [DirectThreadBroadcastVoiceOptions](../interfaces/types/DirectThreadBroadcastVoiceOptions.md)
- [EditHighlightsReelOptions](../interfaces/types/EditHighlightsReelOptions.md)
- [GraphQLRequestOptions](../interfaces/types/GraphQLRequestOptions.md)
- [IgtvWriteSeenStateOptions](../interfaces/types/IgtvWriteSeenStateOptions.md)
- [LiveRtmpSettings](../interfaces/types/LiveRtmpSettings.md)
- [MediaConfigureOptions](../interfaces/types/MediaConfigureOptions.md)
- [MediaConfigureSidecarItem](../interfaces/types/MediaConfigureSidecarItem.md)
- [MediaConfigureSidecarOptions](../interfaces/types/MediaConfigureSidecarOptions.md)
- [MediaConfigureSidecarVideoItem](../interfaces/types/MediaConfigureSidecarVideoItem.md)
- [MediaConfigureStoryBaseOptions](../interfaces/types/MediaConfigureStoryBaseOptions.md)
- [MediaConfigureStoryPhotoOptions](../interfaces/types/MediaConfigureStoryPhotoOptions.md)
- [MediaConfigureStoryVideoOptions](../interfaces/types/MediaConfigureStoryVideoOptions.md)
- [MediaConfigureTimelineOptions](../interfaces/types/MediaConfigureTimelineOptions.md)
- [MediaConfigureTimelineVideoOptions](../interfaces/types/MediaConfigureTimelineVideoOptions.md)
- [MediaConfigureToIgtvOptions](../interfaces/types/MediaConfigureToIgtvOptions.md)
- [MediaConfigureVideoOptions](../interfaces/types/MediaConfigureVideoOptions.md)
- [MediaLocation](../interfaces/types/MediaLocation.md)
- [PostingAlbumItem](../interfaces/types/PostingAlbumItem.md)
- [PostingAlbumOptions](../interfaces/types/PostingAlbumOptions.md)
- [PostingAlbumPhotoItem](../interfaces/types/PostingAlbumPhotoItem.md)
- [PostingAlbumVideoItem](../interfaces/types/PostingAlbumVideoItem.md)
- [PostingPhotoOptions](../interfaces/types/PostingPhotoOptions.md)
- [PostingStoryPhotoOptions](../interfaces/types/PostingStoryPhotoOptions.md)
- [PostingStoryVideoOptions](../interfaces/types/PostingStoryVideoOptions.md)
- [PostingVideoOptions](../interfaces/types/PostingVideoOptions.md)
- [PostsInsightsFeedOptions](../interfaces/types/PostsInsightsFeedOptions.md)
- [StoryAttachedMedia](../interfaces/types/StoryAttachedMedia.md)
- [StoryChat](../interfaces/types/StoryChat.md)
- [StoryCountdown](../interfaces/types/StoryCountdown.md)
- [StoryCta](../interfaces/types/StoryCta.md)
- [StoryHashtag](../interfaces/types/StoryHashtag.md)
- [StoryLocation](../interfaces/types/StoryLocation.md)
- [StoryMention](../interfaces/types/StoryMention.md)
- [StoryPoll](../interfaces/types/StoryPoll.md)
- [StoryPollTallie](../interfaces/types/StoryPollTallie.md)
- [StoryQuestion](../interfaces/types/StoryQuestion.md)
- [StoryQuiz](../interfaces/types/StoryQuiz.md)
- [StoryServiceSeenInputItems](../interfaces/types/StoryServiceSeenInputItems.md)
- [StoryServiceSeenInputReels](../interfaces/types/StoryServiceSeenInputReels.md)
- [StorySlider](../interfaces/types/StorySlider.md)
- [StorySticker](../interfaces/types/StorySticker.md)
- [TimelineFeedsOptions](../interfaces/types/TimelineFeedsOptions.md)
- [UploadPhotoOptions](../interfaces/types/UploadPhotoOptions.md)
- [UploadRetryContext](../interfaces/types/UploadRetryContext.md)
- [UploadSegmentedVideoOptions](../interfaces/types/UploadSegmentedVideoOptions.md)
- [UploadVideoOptions](../interfaces/types/UploadVideoOptions.md)
- [UploadVideoSegmentInitOptions](../interfaces/types/UploadVideoSegmentInitOptions.md)
- [UploadVideoSegmentTransferOptions](../interfaces/types/UploadVideoSegmentTransferOptions.md)
- [UserLookupOptions](../interfaces/types/UserLookupOptions.md)

### Type aliases

- [DirectThreadBroadcastOptions](types.md#directthreadbroadcastoptions)
- [IgAppModule](types.md#igappmodule)
- [IgResponse](types.md#igresponse)
- [InsightsFriendlyName](types.md#insightsfriendlyname)
- [InsightsSurface](types.md#insightssurface)
- [LikeModuleInfoOption](types.md#likemoduleinfooption)
- [LikeRequestOptions](types.md#likerequestoptions)
- [MediaLikeOrUnlikeOptions](types.md#medialikeorunlikeoptions)
- [SegmentDivider](types.md#segmentdivider)
- [SetBestiesInput](types.md#setbestiesinput)
- [StoryServiceInput](types.md#storyserviceinput)
- [TimelineFeedReason](types.md#timelinefeedreason)
- [UnlikeRequestOptions](types.md#unlikerequestoptions)

### Variables

- [SEGMENT\_DIVIDERS](types.md#segment_dividers)

## Type aliases

### DirectThreadBroadcastOptions

Ƭ **DirectThreadBroadcastOptions**: `DirectTreadBroadcastBaseOptions` & `XOR`<`ExistingThreadOptions`, `CreateThreadOptions`\>

#### Defined in

[src/types/direct-thread.broadcast.options.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/direct-thread.broadcast.options.ts#L18)

___

### IgAppModule

Ƭ **IgAppModule**: ``"feed_timeline"`` \| ``"newsfeed"`` \| ``"profile"`` \| ``"media_view_profile"`` \| ``"video_view_profile"`` \| ``"photo_view_profile"`` \| ``"followers"`` \| ``"following"`` \| ``"self_followers"`` \| ``"self_following"`` \| ``"comment_likers"`` \| ``"comment_owner"`` \| ``"feed_contextual_post"`` \| ``"feed_contextual_hashtag"`` \| ``"feed_contextual_location"`` \| ``"feed_contextual_newsfeed_multi_media_liked"`` \| ``"likers_likers_media_view_profile"`` \| ``"likers_likers_photo_view_profile"`` \| ``"likers_likers_video_view_profile"`` \| ``"self_likers_self_likers_media_view_profile"`` \| ``"self_likers_self_likers_photo_view_profile"`` \| ``"self_likers_self_likers_video_view_profile"`` \| ``"story_camera_music_overlay_post_capture"`` \| ``"story_camera_music_overlay_pre_capture"`` \| ``"story_viewer_profile"`` \| ``"story_viewer_default"`` \| ``"find_friends_contacts"`` \| ``"explore_people"`` \| ``"igtv_feed_timeline"`` \| `string`

#### Defined in

[src/types/common.types.ts:3](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/common.types.ts#L3)

___

### IgResponse

Ƭ **IgResponse**<`Body`\>: `Pick`<`Response`, `Exclude`<keyof `Response`, ``"body"``\>\> & { `body`: `Body`  }

#### Type parameters

| Name |
| :------ |
| `Body` |

#### Defined in

[src/types/common.types.ts:35](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/common.types.ts#L35)

___

### InsightsFriendlyName

Ƭ **InsightsFriendlyName**: ``"IgInsightsAccountInsightsSurfaceQuery"`` \| ``"IgInsightsAccountInsightsWithTabsQuery"`` \| ``"IgInsightsPostGridSurfaceQuery"`` \| ``"IgInsightsPostInsightsQuery"`` \| ``"IgInsightsStoryInsightsAppQuery"`` \| `string`

#### Defined in

[src/types/graphql-request.options.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/graphql-request.options.ts#L8)

___

### InsightsSurface

Ƭ **InsightsSurface**: ``"account"`` \| ``"post"`` \| ``"story"`` \| `string`

#### Defined in

[src/types/graphql-request.options.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/graphql-request.options.ts#L15)

___

### LikeModuleInfoOption

Ƭ **LikeModuleInfoOption**: `FeedTimeline` \| `FeedContextualHashtag` \| `FeedContextualLocation` \| `Profile` \| `MediaViewProfile` \| `VideoViewProfile` \| `PhotoViewProfile` & { [x: string]: `any`;  }

#### Defined in

[src/types/media.like.options.ts:36](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.like.options.ts#L36)

___

### LikeRequestOptions

Ƭ **LikeRequestOptions**: `LikeOrUnlikeBaseOptions` & { `d`: ``1`` \| ``0``  }

#### Defined in

[src/types/media.like.options.ts:51](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.like.options.ts#L51)

___

### MediaLikeOrUnlikeOptions

Ƭ **MediaLikeOrUnlikeOptions**: `LikeOrUnlikeBaseOptions` & { `action`: ``"like"`` \| ``"unlike"`` ; `d?`: ``1`` \| ``0``  }

#### Defined in

[src/types/media.like.options.ts:59](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.like.options.ts#L59)

___

### SegmentDivider

Ƭ **SegmentDivider**: (`options`: { `buffer`: `Buffer` ; `client`: [`IgApiClient`](../classes/index/IgApiClient.md)  }) => `Buffer`[]

#### Type declaration

▸ (`options`): `Buffer`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.buffer` | `Buffer` |
| `options.client` | [`IgApiClient`](../classes/index/IgApiClient.md) |

##### Returns

`Buffer`[]

#### Defined in

[src/types/upload.video.options.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/upload.video.options.ts#L38)

___

### SetBestiesInput

Ƭ **SetBestiesInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `add?` | (`string` \| `number`)[] |
| `remove?` | (`string` \| `number`)[] |

#### Defined in

[src/types/set-besties.input.ts:1](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/set-besties.input.ts#L1)

___

### StoryServiceInput

Ƭ **StoryServiceInput**: [`StoryServiceSeenInputItems`](../interfaces/types/StoryServiceSeenInputItems.md)[] \| [`StoryServiceSeenInputReels`](../interfaces/types/StoryServiceSeenInputReels.md)

#### Defined in

[src/types/stories.types.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/stories.types.ts#L13)

___

### TimelineFeedReason

Ƭ **TimelineFeedReason**: ``"pagination"`` \| ``"pull_to_refresh"`` \| ``"warm_start_fetch"`` \| ``"cold_start_fetch"``

#### Defined in

[src/types/timeline-feed.types.ts:1](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/timeline-feed.types.ts#L1)

___

### UnlikeRequestOptions

Ƭ **UnlikeRequestOptions**: `LikeOrUnlikeBaseOptions` & { `d?`: ``0``  }

#### Defined in

[src/types/media.like.options.ts:55](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.like.options.ts#L55)

## Variables

### SEGMENT\_DIVIDERS

• `Const` **SEGMENT\_DIVIDERS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `sectionSize` | (`sectionSize`: `any`) => [`SegmentDivider`](types.md#segmentdivider) |
| `totalSections` | (`numSections`: `any`) => [`SegmentDivider`](types.md#segmentdivider) |

#### Defined in

[src/types/upload.video.options.ts:54](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/upload.video.options.ts#L54)
