[instagram-private-api](../../README.md) / [types](../../modules/types.md) / MediaConfigureStoryVideoOptions

# Interface: MediaConfigureStoryVideoOptions

[types](../../modules/types.md).MediaConfigureStoryVideoOptions

## Hierarchy

- [`MediaConfigureVideoOptions`](MediaConfigureVideoOptions.md)

- [`MediaConfigureStoryBaseOptions`](MediaConfigureStoryBaseOptions.md)

  ↳ **`MediaConfigureStoryVideoOptions`**

## Table of contents

### Properties

- [allow\_multi\_configures](MediaConfigureStoryVideoOptions.md#allow_multi_configures)
- [attached\_media](MediaConfigureStoryVideoOptions.md#attached_media)
- [audience](MediaConfigureStoryVideoOptions.md#audience)
- [audio\_muted](MediaConfigureStoryVideoOptions.md#audio_muted)
- [camera\_position](MediaConfigureStoryVideoOptions.md#camera_position)
- [caption](MediaConfigureStoryVideoOptions.md#caption)
- [client\_context](MediaConfigureStoryVideoOptions.md#client_context)
- [client\_shared\_at](MediaConfigureStoryVideoOptions.md#client_shared_at)
- [clips](MediaConfigureStoryVideoOptions.md#clips)
- [configure\_mode](MediaConfigureStoryVideoOptions.md#configure_mode)
- [geotag\_enabled](MediaConfigureStoryVideoOptions.md#geotag_enabled)
- [height](MediaConfigureStoryVideoOptions.md#height)
- [internal\_features](MediaConfigureStoryVideoOptions.md#internal_features)
- [length](MediaConfigureStoryVideoOptions.md#length)
- [mas\_opt\_in](MediaConfigureStoryVideoOptions.md#mas_opt_in)
- [media\_latitude](MediaConfigureStoryVideoOptions.md#media_latitude)
- [media\_longitude](MediaConfigureStoryVideoOptions.md#media_longitude)
- [poster\_frame\_index](MediaConfigureStoryVideoOptions.md#poster_frame_index)
- [posting\_latitude](MediaConfigureStoryVideoOptions.md#posting_latitude)
- [posting\_longitude](MediaConfigureStoryVideoOptions.md#posting_longitude)
- [recipient\_users](MediaConfigureStoryVideoOptions.md#recipient_users)
- [reel\_mentions](MediaConfigureStoryVideoOptions.md#reel_mentions)
- [reply\_type](MediaConfigureStoryVideoOptions.md#reply_type)
- [story\_chats](MediaConfigureStoryVideoOptions.md#story_chats)
- [story\_countdowns](MediaConfigureStoryVideoOptions.md#story_countdowns)
- [story\_cta](MediaConfigureStoryVideoOptions.md#story_cta)
- [story\_hashtags](MediaConfigureStoryVideoOptions.md#story_hashtags)
- [story\_locations](MediaConfigureStoryVideoOptions.md#story_locations)
- [story\_media\_creation\_date](MediaConfigureStoryVideoOptions.md#story_media_creation_date)
- [story\_polls](MediaConfigureStoryVideoOptions.md#story_polls)
- [story\_questions](MediaConfigureStoryVideoOptions.md#story_questions)
- [story\_quizs](MediaConfigureStoryVideoOptions.md#story_quizs)
- [story\_sliders](MediaConfigureStoryVideoOptions.md#story_sliders)
- [story\_sticker\_ids](MediaConfigureStoryVideoOptions.md#story_sticker_ids)
- [thread\_ids](MediaConfigureStoryVideoOptions.md#thread_ids)
- [upload\_id](MediaConfigureStoryVideoOptions.md#upload_id)
- [view\_mode](MediaConfigureStoryVideoOptions.md#view_mode)
- [width](MediaConfigureStoryVideoOptions.md#width)

## Properties

### allow\_multi\_configures

• `Optional` **allow\_multi\_configures**: ``"1"`` \| ``"0"``

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[allow_multi_configures](MediaConfigureStoryBaseOptions.md#allow_multi_configures)

#### Defined in

[src/types/media.configure-story.options.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L11)

___

### attached\_media

• `Optional` **attached\_media**: `string` \| [[`StoryAttachedMedia`](StoryAttachedMedia.md)]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[attached_media](MediaConfigureStoryBaseOptions.md#attached_media)

#### Defined in

[src/types/media.configure-story.options.ts:48](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L48)

___

### audience

• `Optional` **audience**: ``"besties"``

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[audience](MediaConfigureStoryBaseOptions.md#audience)

#### Defined in

[src/types/media.configure-story.options.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L7)

___

### audio\_muted

• `Optional` **audio\_muted**: `boolean`

#### Inherited from

[MediaConfigureVideoOptions](MediaConfigureVideoOptions.md).[audio_muted](MediaConfigureVideoOptions.md#audio_muted)

#### Defined in

[src/types/media.configure-video.options.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L8)

___

### camera\_position

• `Optional` **camera\_position**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[camera_position](MediaConfigureStoryBaseOptions.md#camera_position)

#### Defined in

[src/types/media.configure-story.options.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L10)

___

### caption

• `Optional` **caption**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[caption](MediaConfigureStoryBaseOptions.md#caption)

#### Defined in

[src/types/media.configure-story.options.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L20)

___

### client\_context

• `Optional` **client\_context**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[client_context](MediaConfigureStoryBaseOptions.md#client_context)

#### Defined in

[src/types/media.configure-story.options.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L16)

___

### client\_shared\_at

• `Optional` **client\_shared\_at**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[client_shared_at](MediaConfigureStoryBaseOptions.md#client_shared_at)

#### Defined in

[src/types/media.configure-story.options.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L6)

___

### clips

• `Optional` **clips**: { `length`: `number` ; `source_type`: `string`  }[]

#### Inherited from

[MediaConfigureVideoOptions](MediaConfigureVideoOptions.md).[clips](MediaConfigureVideoOptions.md#clips)

#### Defined in

[src/types/media.configure-video.options.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L7)

___

### configure\_mode

• **configure\_mode**: ``"1"`` \| ``"2"``

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[configure_mode](MediaConfigureStoryBaseOptions.md#configure_mode)

#### Defined in

[src/types/media.configure-story.options.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L9)

___

### geotag\_enabled

• `Optional` **geotag\_enabled**: ``"1"`` \| ``"0"``

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[geotag_enabled](MediaConfigureStoryBaseOptions.md#geotag_enabled)

#### Defined in

[src/types/media.configure-video.options.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L14)

___

### height

• **height**: `number`

#### Inherited from

[MediaConfigureVideoOptions](MediaConfigureVideoOptions.md).[height](MediaConfigureVideoOptions.md#height)

#### Defined in

[src/types/media.configure-video.options.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L12)

___

### internal\_features

• `Optional` **internal\_features**: ``"polling_sticker"``

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[internal_features](MediaConfigureStoryBaseOptions.md#internal_features)

#### Defined in

[src/types/media.configure-story.options.ts:39](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L39)

___

### length

• **length**: `number`

#### Inherited from

[MediaConfigureVideoOptions](MediaConfigureVideoOptions.md).[length](MediaConfigureVideoOptions.md#length)

#### Defined in

[src/types/media.configure-video.options.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L6)

___

### mas\_opt\_in

• `Optional` **mas\_opt\_in**: ``"NOT_PROMPTED"``

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[mas_opt_in](MediaConfigureStoryBaseOptions.md#mas_opt_in)

#### Defined in

[src/types/media.configure-story.options.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L21)

___

### media\_latitude

• `Optional` **media\_latitude**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[media_latitude](MediaConfigureStoryBaseOptions.md#media_latitude)

#### Defined in

[src/types/media.configure-video.options.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L17)

___

### media\_longitude

• `Optional` **media\_longitude**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[media_longitude](MediaConfigureStoryBaseOptions.md#media_longitude)

#### Defined in

[src/types/media.configure-video.options.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L18)

___

### poster\_frame\_index

• `Optional` **poster\_frame\_index**: `number`

#### Inherited from

[MediaConfigureVideoOptions](MediaConfigureVideoOptions.md).[poster_frame_index](MediaConfigureVideoOptions.md#poster_frame_index)

#### Defined in

[src/types/media.configure-video.options.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L9)

___

### posting\_latitude

• `Optional` **posting\_latitude**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[posting_latitude](MediaConfigureStoryBaseOptions.md#posting_latitude)

#### Defined in

[src/types/media.configure-video.options.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L15)

___

### posting\_longitude

• `Optional` **posting\_longitude**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[posting_longitude](MediaConfigureStoryBaseOptions.md#posting_longitude)

#### Defined in

[src/types/media.configure-video.options.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L16)

___

### recipient\_users

• `Optional` **recipient\_users**: `string` \| `string`[]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[recipient_users](MediaConfigureStoryBaseOptions.md#recipient_users)

#### Defined in

[src/types/media.configure-story.options.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L15)

___

### reel\_mentions

• `Optional` **reel\_mentions**: `string` \| [`StoryMention`](StoryMention.md)[]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[reel_mentions](MediaConfigureStoryBaseOptions.md#reel_mentions)

#### Defined in

[src/types/media.configure-story.options.ts:35](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L35)

___

### reply\_type

• `Optional` **reply\_type**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[reply_type](MediaConfigureStoryBaseOptions.md#reply_type)

#### Defined in

[src/types/media.configure-story.options.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L18)

___

### story\_chats

• `Optional` **story\_chats**: `string` \| [[`StoryChat`](StoryChat.md)]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_chats](MediaConfigureStoryBaseOptions.md#story_chats)

#### Defined in

[src/types/media.configure-story.options.ts:50](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L50)

___

### story\_countdowns

• `Optional` **story\_countdowns**: `string` \| [[`StoryCountdown`](StoryCountdown.md)]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_countdowns](MediaConfigureStoryBaseOptions.md#story_countdowns)

#### Defined in

[src/types/media.configure-story.options.ts:46](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L46)

___

### story\_cta

• `Optional` **story\_cta**: `string` \| [[`StoryCta`](StoryCta.md)]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_cta](MediaConfigureStoryBaseOptions.md#story_cta)

#### Defined in

[src/types/media.configure-story.options.ts:55](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L55)

___

### story\_hashtags

• `Optional` **story\_hashtags**: `string` \| [`StoryHashtag`](StoryHashtag.md)[]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_hashtags](MediaConfigureStoryBaseOptions.md#story_hashtags)

#### Defined in

[src/types/media.configure-story.options.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L26)

___

### story\_locations

• `Optional` **story\_locations**: `string` \| [[`StoryLocation`](StoryLocation.md)]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_locations](MediaConfigureStoryBaseOptions.md#story_locations)

#### Defined in

[src/types/media.configure-story.options.ts:28](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L28)

___

### story\_media\_creation\_date

• `Optional` **story\_media\_creation\_date**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_media_creation_date](MediaConfigureStoryBaseOptions.md#story_media_creation_date)

#### Defined in

[src/types/media.configure-story.options.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L5)

___

### story\_polls

• `Optional` **story\_polls**: `string` \| [[`StoryPoll`](StoryPoll.md)]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_polls](MediaConfigureStoryBaseOptions.md#story_polls)

#### Defined in

[src/types/media.configure-story.options.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L38)

___

### story\_questions

• `Optional` **story\_questions**: `string` \| [[`StoryQuestion`](StoryQuestion.md)]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_questions](MediaConfigureStoryBaseOptions.md#story_questions)

#### Defined in

[src/types/media.configure-story.options.ts:44](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L44)

___

### story\_quizs

• `Optional` **story\_quizs**: `string` \| [[`StoryQuiz`](StoryQuiz.md)]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_quizs](MediaConfigureStoryBaseOptions.md#story_quizs)

#### Defined in

[src/types/media.configure-story.options.ts:52](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L52)

___

### story\_sliders

• `Optional` **story\_sliders**: `string` \| [[`StorySlider`](StorySlider.md)]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_sliders](MediaConfigureStoryBaseOptions.md#story_sliders)

#### Defined in

[src/types/media.configure-story.options.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L42)

___

### story\_sticker\_ids

• `Optional` **story\_sticker\_ids**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[story_sticker_ids](MediaConfigureStoryBaseOptions.md#story_sticker_ids)

#### Defined in

[src/types/media.configure-story.options.ts:23](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L23)

___

### thread\_ids

• `Optional` **thread\_ids**: `string` \| `string`[]

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[thread_ids](MediaConfigureStoryBaseOptions.md#thread_ids)

#### Defined in

[src/types/media.configure-story.options.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L14)

___

### upload\_id

• **upload\_id**: `string`

#### Inherited from

[MediaConfigureVideoOptions](MediaConfigureVideoOptions.md).[upload_id](MediaConfigureVideoOptions.md#upload_id)

#### Defined in

[src/types/media.configure-video.options.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L5)

___

### view\_mode

• `Optional` **view\_mode**: `string`

#### Inherited from

[MediaConfigureStoryBaseOptions](MediaConfigureStoryBaseOptions.md).[view_mode](MediaConfigureStoryBaseOptions.md#view_mode)

#### Defined in

[src/types/media.configure-story.options.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-story.options.ts#L17)

___

### width

• **width**: `number`

#### Inherited from

[MediaConfigureVideoOptions](MediaConfigureVideoOptions.md).[width](MediaConfigureVideoOptions.md#width)

#### Defined in

[src/types/media.configure-video.options.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-video.options.ts#L11)
