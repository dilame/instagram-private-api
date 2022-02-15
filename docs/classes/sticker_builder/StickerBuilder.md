[instagram-private-api](../../README.md) / [sticker-builder](../../modules/sticker_builder.md) / StickerBuilder

# Class: StickerBuilder

[sticker-builder](../../modules/sticker_builder.md).StickerBuilder

## Table of contents

### Constructors

- [constructor](StickerBuilder.md#constructor)

### Methods

- [add](StickerBuilder.md#add)
- [build](StickerBuilder.md#build)
- [attachment](StickerBuilder.md#attachment)
- [attachmentFromMedia](StickerBuilder.md#attachmentfrommedia)
- [chat](StickerBuilder.md#chat)
- [countdown](StickerBuilder.md#countdown)
- [hashtag](StickerBuilder.md#hashtag)
- [location](StickerBuilder.md#location)
- [mention](StickerBuilder.md#mention)
- [mentionReel](StickerBuilder.md#mentionreel)
- [poll](StickerBuilder.md#poll)
- [question](StickerBuilder.md#question)
- [quiz](StickerBuilder.md#quiz)
- [slider](StickerBuilder.md#slider)

## Constructors

### constructor

• **new StickerBuilder**()

## Methods

### add

▸ **add**(`sticker`): [`StickerBuilder`](StickerBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sticker` | [`InstaSticker`](InstaSticker.md) |

#### Returns

[`StickerBuilder`](StickerBuilder.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L25)

___

### build

▸ **build**(): `any`

#### Returns

`any`

#### Defined in

[src/sticker-builder/sticker-builder.ts:30](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L30)

___

### attachment

▸ `Static` **attachment**(`options`): [`AttachmentSticker`](AttachmentSticker.md)

The mediaId only contains the media pk.
The user id is stored in mediaOwnerId.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`AttachmentSticker`](AttachmentSticker.md)\> |

#### Returns

[`AttachmentSticker`](AttachmentSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:119](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L119)

___

### attachmentFromMedia

▸ `Static` **attachmentFromMedia**(`mediaInfo`, `additional?`): [`AttachmentSticker`](AttachmentSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaInfo` | `Object` |
| `mediaInfo.pk` | `string` |
| `mediaInfo.user` | `Object` |
| `mediaInfo.user.pk` | `string` \| `number` |
| `additional` | `Partial`<[`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`AttachmentSticker`](AttachmentSticker.md)\>\> |

#### Returns

[`AttachmentSticker`](AttachmentSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:123](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L123)

___

### chat

▸ `Static` **chat**(`options`): [`ChatSticker`](ChatSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`ChatSticker`](ChatSticker.md)\> |

#### Returns

[`ChatSticker`](ChatSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:90](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L90)

___

### countdown

▸ `Static` **countdown**(`options`): [`CountdownSticker`](CountdownSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`CountdownSticker`](CountdownSticker.md)\> |

#### Returns

[`CountdownSticker`](CountdownSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:86](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L86)

___

### hashtag

▸ `Static` **hashtag**(`options`): [`HashtagSticker`](HashtagSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`HashtagSticker`](HashtagSticker.md)\> |

#### Returns

[`HashtagSticker`](HashtagSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:55](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L55)

___

### location

▸ `Static` **location**(`options`): [`LocationSticker`](LocationSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`LocationSticker`](LocationSticker.md)\> |

#### Returns

[`LocationSticker`](LocationSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:82](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L82)

___

### mention

▸ `Static` **mention**(`options`): [`MentionSticker`](MentionSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`MentionSticker`](MentionSticker.md)\> |

#### Returns

[`MentionSticker`](MentionSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:59](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L59)

___

### mentionReel

▸ `Static` **mentionReel**(`mediaInfo`, `additional?`): [`MentionSticker`](MentionSticker.md)

Wrapper to create a story-mention

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaInfo` | `Object` | StoryItem Object with pk and a user |
| `mediaInfo.pk` | `string` | - |
| `mediaInfo.user` | `Object` | - |
| `mediaInfo.user.pk` | `string` \| `number` | - |
| `additional` | `Partial`<[`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`MentionSticker`](MentionSticker.md)\>\> | any additional options |

#### Returns

[`MentionSticker`](MentionSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:68](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L68)

___

### poll

▸ `Static` **poll**(`options`): [`PollSticker`](PollSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`PollSticker`](PollSticker.md)\> |

#### Returns

[`PollSticker`](PollSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:94](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L94)

___

### question

▸ `Static` **question**(`options`): [`QuestionSticker`](QuestionSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`QuestionSticker`](QuestionSticker.md)\> |

#### Returns

[`QuestionSticker`](QuestionSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:98](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L98)

___

### quiz

▸ `Static` **quiz**(`options`): [`QuizSticker`](QuizSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`QuizSticker`](QuizSticker.md)\> |

#### Returns

[`QuizSticker`](QuizSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:102](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L102)

___

### slider

▸ `Static` **slider**(`options`): [`SliderSticker`](SliderSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StickerOptions`](../../modules/sticker_builder.md#stickeroptions)<[`SliderSticker`](SliderSticker.md)\> |

#### Returns

[`SliderSticker`](SliderSticker.md)

#### Defined in

[src/sticker-builder/sticker-builder.ts:110](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/sticker-builder.ts#L110)
