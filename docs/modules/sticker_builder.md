[instagram-private-api](../README.md) / sticker-builder

# Module: sticker-builder

## Table of contents

### Classes

- [AttachmentSticker](../classes/sticker_builder/AttachmentSticker.md)
- [ChatSticker](../classes/sticker_builder/ChatSticker.md)
- [CountdownSticker](../classes/sticker_builder/CountdownSticker.md)
- [HashtagSticker](../classes/sticker_builder/HashtagSticker.md)
- [InstaSticker](../classes/sticker_builder/InstaSticker.md)
- [LocationSticker](../classes/sticker_builder/LocationSticker.md)
- [MentionSticker](../classes/sticker_builder/MentionSticker.md)
- [PollSticker](../classes/sticker_builder/PollSticker.md)
- [QuestionSticker](../classes/sticker_builder/QuestionSticker.md)
- [QuizSticker](../classes/sticker_builder/QuizSticker.md)
- [SliderSticker](../classes/sticker_builder/SliderSticker.md)
- [StickerBuilder](../classes/sticker_builder/StickerBuilder.md)

### Interfaces

- [PollStickerTallie](../interfaces/sticker_builder/PollStickerTallie.md)

### Type aliases

- [StickerConfig](sticker_builder.md#stickerconfig)
- [StickerOptions](sticker_builder.md#stickeroptions)

## Type aliases

### StickerConfig

Ƭ **StickerConfig**: `any` & { `story_sticker_ids`: `string`  }

#### Defined in

[src/sticker-builder/sticker-builder.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L20)

___

### StickerOptions

Ƭ **StickerOptions**<`T`\>: `Diff`<`T`, [`InstaSticker`](../classes/sticker_builder/InstaSticker.md)\> & `Partial`<[`InstaSticker`](../classes/sticker_builder/InstaSticker.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`InstaSticker`](../classes/sticker_builder/InstaSticker.md) |

#### Defined in

[src/sticker-builder/sticker-builder.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L18)
