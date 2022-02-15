[instagram-private-api](../../README.md) / [index](../../modules/index.md) / FeedFactory

# Class: FeedFactory

[index](../../modules/index.md).FeedFactory

## Table of contents

### Constructors

- [constructor](FeedFactory.md#constructor)

### Methods

- [accountFollowers](FeedFactory.md#accountfollowers)
- [accountFollowing](FeedFactory.md#accountfollowing)
- [bestFriendships](FeedFactory.md#bestfriendships)
- [blockedUsers](FeedFactory.md#blockedusers)
- [directInbox](FeedFactory.md#directinbox)
- [directPending](FeedFactory.md#directpending)
- [directThread](FeedFactory.md#directthread)
- [discover](FeedFactory.md#discover)
- [igtvBrowse](FeedFactory.md#igtvbrowse)
- [igtvChaining](FeedFactory.md#igtvchaining)
- [igtvChannel](FeedFactory.md#igtvchannel)
- [liked](FeedFactory.md#liked)
- [listReelMediaViewers](FeedFactory.md#listreelmediaviewers)
- [location](FeedFactory.md#location)
- [mediaComments](FeedFactory.md#mediacomments)
- [mediaInlineChildComments](FeedFactory.md#mediainlinechildcomments)
- [musicGenre](FeedFactory.md#musicgenre)
- [musicMood](FeedFactory.md#musicmood)
- [musicSearch](FeedFactory.md#musicsearch)
- [musicTrending](FeedFactory.md#musictrending)
- [news](FeedFactory.md#news)
- [pendingFriendships](FeedFactory.md#pendingfriendships)
- [postsInsightsFeed](FeedFactory.md#postsinsightsfeed)
- [reelsMedia](FeedFactory.md#reelsmedia)
- [reelsTray](FeedFactory.md#reelstray)
- [saved](FeedFactory.md#saved)
- [storiesInsights](FeedFactory.md#storiesinsights)
- [storyPollVoters](FeedFactory.md#storypollvoters)
- [storyQuestionResponses](FeedFactory.md#storyquestionresponses)
- [storyQuizParticipants](FeedFactory.md#storyquizparticipants)
- [storySliderVoters](FeedFactory.md#storyslidervoters)
- [tag](FeedFactory.md#tag)
- [tags](FeedFactory.md#tags)
- [timeline](FeedFactory.md#timeline)
- [topicalExplore](FeedFactory.md#topicalexplore)
- [user](FeedFactory.md#user)
- [userStory](FeedFactory.md#userstory)
- [usertags](FeedFactory.md#usertags)

## Constructors

### constructor

• **new FeedFactory**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Defined in

[src/core/feed.factory.ts:54](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L54)

## Methods

### accountFollowers

▸ **accountFollowers**(`options?`): [`AccountFollowersFeed`](../feeds/AccountFollowersFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `number` \| `Partial`<`Pick`<[`AccountFollowersFeed`](../feeds/AccountFollowersFeed.md), ``"searchSurface"`` \| ``"order"`` \| ``"query"`` \| ``"enableGroups"`` \| ``"id"``\>\> |

#### Returns

[`AccountFollowersFeed`](../feeds/AccountFollowersFeed.md)

#### Defined in

[src/core/feed.factory.ts:56](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L56)

___

### accountFollowing

▸ **accountFollowing**(`options?`): [`AccountFollowingFeed`](../feeds/AccountFollowingFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `number` \| `Partial`<`Pick`<[`AccountFollowingFeed`](../feeds/AccountFollowingFeed.md), ``"searchSurface"`` \| ``"order"`` \| ``"query"`` \| ``"enableGroups"`` \| ``"id"`` \| ``"includesHashtags"``\>\> |

#### Returns

[`AccountFollowingFeed`](../feeds/AccountFollowingFeed.md)

#### Defined in

[src/core/feed.factory.ts:68](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L68)

___

### bestFriendships

▸ **bestFriendships**(): [`BestiesFeed`](../feeds/BestiesFeed.md)

#### Returns

[`BestiesFeed`](../feeds/BestiesFeed.md)

#### Defined in

[src/core/feed.factory.ts:94](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L94)

___

### blockedUsers

▸ **blockedUsers**(): [`BlockedUsersFeed`](../feeds/BlockedUsersFeed.md)

#### Returns

[`BlockedUsersFeed`](../feeds/BlockedUsersFeed.md)

#### Defined in

[src/core/feed.factory.ts:98](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L98)

___

### directInbox

▸ **directInbox**(): [`DirectInboxFeed`](../feeds/DirectInboxFeed.md)

#### Returns

[`DirectInboxFeed`](../feeds/DirectInboxFeed.md)

#### Defined in

[src/core/feed.factory.ts:102](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L102)

___

### directPending

▸ **directPending**(): [`DirectPendingInboxFeed`](../feeds/DirectPendingInboxFeed.md)

#### Returns

[`DirectPendingInboxFeed`](../feeds/DirectPendingInboxFeed.md)

#### Defined in

[src/core/feed.factory.ts:106](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L106)

___

### directThread

▸ **directThread**(`options`, `seqId?`): [`DirectThreadFeed`](../feeds/DirectThreadFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Pick`<[`DirectInboxFeedResponseThreadsItem`](../responses/DirectInboxFeedResponseThreadsItem.md), ``"thread_id"`` \| ``"oldest_cursor"``\> |
| `seqId?` | `number` |

#### Returns

[`DirectThreadFeed`](../feeds/DirectThreadFeed.md)

#### Defined in

[src/core/feed.factory.ts:110](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L110)

___

### discover

▸ **discover**(): [`DiscoverFeed`](../feeds/DiscoverFeed.md)

#### Returns

[`DiscoverFeed`](../feeds/DiscoverFeed.md)

#### Defined in

[src/core/feed.factory.ts:86](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L86)

___

### igtvBrowse

▸ **igtvBrowse**(`isPrefetch?`): [`IgtvBrowseFeed`](../feeds/IgtvBrowseFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `isPrefetch?` | `boolean` |

#### Returns

[`IgtvBrowseFeed`](../feeds/IgtvBrowseFeed.md)

#### Defined in

[src/core/feed.factory.ts:234](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L234)

___

### igtvChaining

▸ **igtvChaining**(`id`): [`IgtvChannelFeed`](../feeds/IgtvChannelFeed.md)

Returns the suggested videos after the current (id) one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | pk of the video |

#### Returns

[`IgtvChannelFeed`](../feeds/IgtvChannelFeed.md)

#### Defined in

[src/core/feed.factory.ts:314](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L314)

___

### igtvChannel

▸ **igtvChannel**(`id`): [`IgtvChannelFeed`](../feeds/IgtvChannelFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

[`IgtvChannelFeed`](../feeds/IgtvChannelFeed.md)

#### Defined in

[src/core/feed.factory.ts:301](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L301)

___

### liked

▸ **liked**(): [`LikedFeed`](../feeds/LikedFeed.md)

#### Returns

[`LikedFeed`](../feeds/LikedFeed.md)

#### Defined in

[src/core/feed.factory.ts:318](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L318)

___

### listReelMediaViewers

▸ **listReelMediaViewers**(`mediaId`): `ListReelMediaViewerFeed`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`ListReelMediaViewerFeed`

#### Defined in

[src/core/feed.factory.ts:222](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L222)

___

### location

▸ **location**(`id`, `tab?`): [`LocationFeed`](../feeds/LocationFeed.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | `undefined` |
| `tab` | ``"recent"`` \| ``"ranked"`` | `'ranked'` |

#### Returns

[`LocationFeed`](../feeds/LocationFeed.md)

#### Defined in

[src/core/feed.factory.ts:140](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L140)

___

### mediaComments

▸ **mediaComments**(`id`): [`MediaCommentsFeed`](../feeds/MediaCommentsFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`MediaCommentsFeed`](../feeds/MediaCommentsFeed.md)

#### Defined in

[src/core/feed.factory.ts:147](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L147)

___

### mediaInlineChildComments

▸ **mediaInlineChildComments**(`mediaId`, `commentId`, `minId?`): `MediaInlineChildCommentsFeed`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `commentId` | `string` |
| `minId?` | `string` |

#### Returns

`MediaInlineChildCommentsFeed`

#### Defined in

[src/core/feed.factory.ts:226](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L226)

___

### musicGenre

▸ **musicGenre**(`id`, `product?`): [`MusicGenreFeed`](../feeds/MusicGenreFeed.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | `undefined` |
| `product` | `string` | `'story_camera_music_overlay_post_capture'` |

#### Returns

[`MusicGenreFeed`](../feeds/MusicGenreFeed.md)

#### Defined in

[src/core/feed.factory.ts:186](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L186)

___

### musicMood

▸ **musicMood**(`id`, `product?`): [`MusicMoodFeed`](../feeds/MusicMoodFeed.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | `undefined` |
| `product` | `string` | `'story_camera_music_overlay_post_capture'` |

#### Returns

[`MusicMoodFeed`](../feeds/MusicMoodFeed.md)

#### Defined in

[src/core/feed.factory.ts:196](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L196)

___

### musicSearch

▸ **musicSearch**(`query`, `product?`): [`MusicSearchFeed`](../feeds/MusicSearchFeed.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query` | `string` | `undefined` |
| `product` | `string` | `'story_camera_music_overlay_post_capture'` |

#### Returns

[`MusicSearchFeed`](../feeds/MusicSearchFeed.md)

#### Defined in

[src/core/feed.factory.ts:177](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L177)

___

### musicTrending

▸ **musicTrending**(`product?`): [`MusicTrendingFeed`](../feeds/MusicTrendingFeed.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `product` | `string` | `'story_camera_music_overlay_post_capture'` |

#### Returns

[`MusicTrendingFeed`](../feeds/MusicTrendingFeed.md)

#### Defined in

[src/core/feed.factory.ts:173](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L173)

___

### news

▸ **news**(): [`NewsFeed`](../feeds/NewsFeed.md)

#### Returns

[`NewsFeed`](../feeds/NewsFeed.md)

#### Defined in

[src/core/feed.factory.ts:82](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L82)

___

### pendingFriendships

▸ **pendingFriendships**(): [`PendingFriendshipsFeed`](../feeds/PendingFriendshipsFeed.md)

#### Returns

[`PendingFriendshipsFeed`](../feeds/PendingFriendshipsFeed.md)

#### Defined in

[src/core/feed.factory.ts:90](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L90)

___

### postsInsightsFeed

▸ **postsInsightsFeed**(`options`): [`PostsInsightsFeed`](../feeds/PostsInsightsFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PostsInsightsFeedOptions`](../../interfaces/types/PostsInsightsFeedOptions.md) |

#### Returns

[`PostsInsightsFeed`](../feeds/PostsInsightsFeed.md)

#### Defined in

[src/core/feed.factory.ts:210](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L210)

___

### reelsMedia

▸ **reelsMedia**(`options`): [`ReelsMediaFeed`](../feeds/ReelsMediaFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.source?` | `string` |
| `options.userIds` | (`string` \| `number`)[] |

#### Returns

[`ReelsMediaFeed`](../feeds/ReelsMediaFeed.md)

#### Defined in

[src/core/feed.factory.ts:153](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L153)

___

### reelsTray

▸ **reelsTray**(`reason?`): [`ReelsTrayFeed`](../feeds/ReelsTrayFeed.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reason` | ``"pull_to_refresh"`` \| ``"cold_start"`` | `'cold_start'` |

#### Returns

[`ReelsTrayFeed`](../feeds/ReelsTrayFeed.md)

#### Defined in

[src/core/feed.factory.ts:161](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L161)

___

### saved

▸ **saved**(): [`SavedFeed`](../feeds/SavedFeed.md)

#### Returns

[`SavedFeed`](../feeds/SavedFeed.md)

#### Defined in

[src/core/feed.factory.ts:218](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L218)

___

### storiesInsights

▸ **storiesInsights**(`timeframe`): [`StoriesInsightsFeed`](../feeds/StoriesInsightsFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeframe` | ``"ONE_DAY"`` \| ``"ONE_WEEK"`` \| ``"TWO_WEEKS"`` |

#### Returns

[`StoriesInsightsFeed`](../feeds/StoriesInsightsFeed.md)

#### Defined in

[src/core/feed.factory.ts:214](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L214)

___

### storyPollVoters

▸ **storyPollVoters**(`mediaId`, `stickerId`): `MediaStickerResponsesFeed`<[`StoryPollVotersFeedResponseRootObject`](../../interfaces/responses/StoryPollVotersFeedResponseRootObject.md), [`StoryPollVotersFeedResponseVotersItem`](../../interfaces/responses/StoryPollVotersFeedResponseVotersItem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `stickerId` | `string` \| `number` |

#### Returns

`MediaStickerResponsesFeed`<[`StoryPollVotersFeedResponseRootObject`](../../interfaces/responses/StoryPollVotersFeedResponseRootObject.md), [`StoryPollVotersFeedResponseVotersItem`](../../interfaces/responses/StoryPollVotersFeedResponseVotersItem.md)\>

#### Defined in

[src/core/feed.factory.ts:256](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L256)

___

### storyQuestionResponses

▸ **storyQuestionResponses**(`mediaId`, `stickerId`): `MediaStickerResponsesFeed`<[`StoryQuestionResponsesFeedResponseRootObject`](../../interfaces/responses/StoryQuestionResponsesFeedResponseRootObject.md), [`StoryQuestionResponsesFeedResponseRespondersItem`](../../interfaces/responses/StoryQuestionResponsesFeedResponseRespondersItem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `stickerId` | `string` \| `number` |

#### Returns

`MediaStickerResponsesFeed`<[`StoryQuestionResponsesFeedResponseRootObject`](../../interfaces/responses/StoryQuestionResponsesFeedResponseRootObject.md), [`StoryQuestionResponsesFeedResponseRespondersItem`](../../interfaces/responses/StoryQuestionResponsesFeedResponseRespondersItem.md)\>

#### Defined in

[src/core/feed.factory.ts:240](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L240)

___

### storyQuizParticipants

▸ **storyQuizParticipants**(`mediaId`, `stickerId`): `MediaStickerResponsesFeed`<[`StoryQuizParticipantsFeedResponseRootObject`](../../interfaces/responses/StoryQuizParticipantsFeedResponseRootObject.md), [`StoryQuizParticipantsFeedResponseParticipantsItem`](../../interfaces/responses/StoryQuizParticipantsFeedResponseParticipantsItem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `stickerId` | `string` \| `number` |

#### Returns

`MediaStickerResponsesFeed`<[`StoryQuizParticipantsFeedResponseRootObject`](../../interfaces/responses/StoryQuizParticipantsFeedResponseRootObject.md), [`StoryQuizParticipantsFeedResponseParticipantsItem`](../../interfaces/responses/StoryQuizParticipantsFeedResponseParticipantsItem.md)\>

#### Defined in

[src/core/feed.factory.ts:269](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L269)

___

### storySliderVoters

▸ **storySliderVoters**(`mediaId`, `stickerId`): `MediaStickerResponsesFeed`<[`StorySliderVotersFeedResponseResponseRootObject`](../../interfaces/responses/StorySliderVotersFeedResponseResponseRootObject.md), [`StorySliderVotersFeedResponseResponseVotersItem`](../../interfaces/responses/StorySliderVotersFeedResponseResponseVotersItem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `stickerId` | `string` \| `number` |

#### Returns

`MediaStickerResponsesFeed`<[`StorySliderVotersFeedResponseResponseRootObject`](../../interfaces/responses/StorySliderVotersFeedResponseResponseRootObject.md), [`StorySliderVotersFeedResponseResponseVotersItem`](../../interfaces/responses/StorySliderVotersFeedResponseResponseVotersItem.md)\>

#### Defined in

[src/core/feed.factory.ts:285](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L285)

___

### tag

▸ **tag**(`tag`): [`TagFeed`](../feeds/TagFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

[`TagFeed`](../feeds/TagFeed.md)

#### Defined in

[src/core/feed.factory.ts:127](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L127)

___

### tags

▸ **tags**(`tag`, `tab?`): [`TagsFeed`](../feeds/TagsFeed.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tag` | `string` | `undefined` |
| `tab` | ``"top"`` \| ``"recent"`` \| ``"places"`` | `'top'` |

#### Returns

[`TagsFeed`](../feeds/TagsFeed.md)

#### Defined in

[src/core/feed.factory.ts:133](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L133)

___

### timeline

▸ **timeline**(`reason?`): [`TimelineFeed`](../feeds/TimelineFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | [`TimelineFeedReason`](../../modules/types.md#timelinefeedreason) |

#### Returns

[`TimelineFeed`](../feeds/TimelineFeed.md)

#### Defined in

[src/core/feed.factory.ts:165](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L165)

___

### topicalExplore

▸ **topicalExplore**(`options?`): [`TopicalExploreFeed`](../feeds/TopicalExploreFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`Pick`<[`TopicalExploreFeed`](../feeds/TopicalExploreFeed.md), ``"sessionId"`` \| ``"clusterId"`` \| ``"lat"`` \| ``"lng"`` \| ``"module"``\>\> |

#### Returns

[`TopicalExploreFeed`](../feeds/TopicalExploreFeed.md)

#### Defined in

[src/core/feed.factory.ts:322](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L322)

___

### user

▸ **user**(`id`): [`UserFeed`](../feeds/UserFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

[`UserFeed`](../feeds/UserFeed.md)

#### Defined in

[src/core/feed.factory.ts:121](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L121)

___

### userStory

▸ **userStory**(`userId`): `UserStoryFeed`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` \| `number` |

#### Returns

`UserStoryFeed`

#### Defined in

[src/core/feed.factory.ts:157](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L157)

___

### usertags

▸ **usertags**(`id`): [`UsertagsFeed`](../feeds/UsertagsFeed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

[`UsertagsFeed`](../feeds/UsertagsFeed.md)

#### Defined in

[src/core/feed.factory.ts:206](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/feed.factory.ts#L206)
