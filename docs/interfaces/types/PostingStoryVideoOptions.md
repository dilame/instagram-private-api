[instagram-private-api](../../README.md) / [types](../../modules/types.md) / PostingStoryVideoOptions

# Interface: PostingStoryVideoOptions

[types](../../modules/types.md).PostingStoryVideoOptions

## Hierarchy

- `PostingStoryOptions`

  ↳ **`PostingStoryVideoOptions`**

## Table of contents

### Properties

- [caption](PostingStoryVideoOptions.md#caption)
- [chat](PostingStoryVideoOptions.md#chat)
- [countdown](PostingStoryVideoOptions.md#countdown)
- [coverImage](PostingStoryVideoOptions.md#coverimage)
- [hashtags](PostingStoryVideoOptions.md#hashtags)
- [link](PostingStoryVideoOptions.md#link)
- [location](PostingStoryVideoOptions.md#location)
- [media](PostingStoryVideoOptions.md#media)
- [mentions](PostingStoryVideoOptions.md#mentions)
- [poll](PostingStoryVideoOptions.md#poll)
- [question](PostingStoryVideoOptions.md#question)
- [quiz](PostingStoryVideoOptions.md#quiz)
- [recipientUsers](PostingStoryVideoOptions.md#recipientusers)
- [replyType](PostingStoryVideoOptions.md#replytype)
- [slider](PostingStoryVideoOptions.md#slider)
- [stickerConfig](PostingStoryVideoOptions.md#stickerconfig)
- [threadIds](PostingStoryVideoOptions.md#threadids)
- [toBesties](PostingStoryVideoOptions.md#tobesties)
- [transcodeDelay](PostingStoryVideoOptions.md#transcodedelay)
- [video](PostingStoryVideoOptions.md#video)
- [viewMode](PostingStoryVideoOptions.md#viewmode)

## Properties

### caption

• `Optional` **caption**: `string`

#### Inherited from

PostingStoryOptions.caption

#### Defined in

[src/types/posting.options.ts:29](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L29)

___

### chat

• `Optional` **chat**: [`StoryChat`](StoryChat.md)

#### Inherited from

PostingStoryOptions.chat

#### Defined in

[src/types/posting.options.ts:45](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L45)

___

### countdown

• `Optional` **countdown**: [`StoryCountdown`](StoryCountdown.md)

#### Inherited from

PostingStoryOptions.countdown

#### Defined in

[src/types/posting.options.ts:43](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L43)

___

### coverImage

• **coverImage**: `Buffer`

#### Defined in

[src/types/posting.video.options.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.video.options.ts#L14)

___

### hashtags

• `Optional` **hashtags**: [`StoryHashtag`](StoryHashtag.md)[]

#### Inherited from

PostingStoryOptions.hashtags

#### Defined in

[src/types/posting.options.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L38)

___

### link

• `Optional` **link**: `string`

#### Inherited from

PostingStoryOptions.link

#### Defined in

[src/types/posting.options.ts:47](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L47)

___

### location

• `Optional` **location**: `PostingStoryLocationSticker`

#### Inherited from

PostingStoryOptions.location

#### Defined in

[src/types/posting.options.ts:37](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L37)

___

### media

• `Optional` **media**: [`StoryAttachedMedia`](StoryAttachedMedia.md)

#### Inherited from

PostingStoryOptions.media

#### Defined in

[src/types/posting.options.ts:44](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L44)

___

### mentions

• `Optional` **mentions**: [`StoryMention`](StoryMention.md)[]

#### Inherited from

PostingStoryOptions.mentions

#### Defined in

[src/types/posting.options.ts:39](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L39)

___

### poll

• `Optional` **poll**: [`StoryPoll`](StoryPoll.md)

#### Inherited from

PostingStoryOptions.poll

#### Defined in

[src/types/posting.options.ts:40](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L40)

___

### question

• `Optional` **question**: [`StoryQuestion`](StoryQuestion.md)

#### Inherited from

PostingStoryOptions.question

#### Defined in

[src/types/posting.options.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L42)

___

### quiz

• `Optional` **quiz**: [`StoryQuiz`](StoryQuiz.md)

#### Inherited from

PostingStoryOptions.quiz

#### Defined in

[src/types/posting.options.ts:46](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L46)

___

### recipientUsers

• `Optional` **recipientUsers**: `string`[]

#### Inherited from

PostingStoryOptions.recipientUsers

#### Defined in

[src/types/posting.options.ts:32](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L32)

___

### replyType

• `Optional` **replyType**: `string`

#### Inherited from

PostingStoryOptions.replyType

#### Defined in

[src/types/posting.options.ts:34](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L34)

___

### slider

• `Optional` **slider**: [`StorySlider`](StorySlider.md)

#### Inherited from

PostingStoryOptions.slider

#### Defined in

[src/types/posting.options.ts:41](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L41)

___

### stickerConfig

• `Optional` **stickerConfig**: `any`

#### Inherited from

PostingStoryOptions.stickerConfig

#### Defined in

[src/types/posting.options.ts:49](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L49)

___

### threadIds

• `Optional` **threadIds**: `string`[]

#### Inherited from

PostingStoryOptions.threadIds

#### Defined in

[src/types/posting.options.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L31)

___

### toBesties

• `Optional` **toBesties**: `boolean`

#### Inherited from

PostingStoryOptions.toBesties

#### Defined in

[src/types/posting.options.ts:30](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L30)

___

### transcodeDelay

• `Optional` **transcodeDelay**: `number`

#### Defined in

[src/types/posting.video.options.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.video.options.ts#L15)

___

### video

• **video**: `Buffer`

#### Defined in

[src/types/posting.video.options.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.video.options.ts#L13)

___

### viewMode

• `Optional` **viewMode**: `string`

#### Inherited from

PostingStoryOptions.viewMode

#### Defined in

[src/types/posting.options.ts:33](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/posting.options.ts#L33)
