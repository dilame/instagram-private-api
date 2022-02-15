[instagram-private-api](../../README.md) / [sticker-builder](../../modules/sticker_builder.md) / InstaSticker

# Class: InstaSticker

[sticker-builder](../../modules/sticker_builder.md).InstaSticker

## Hierarchy

- **`InstaSticker`**

  ↳ [`AttachmentSticker`](AttachmentSticker.md)

  ↳ [`ChatSticker`](ChatSticker.md)

  ↳ [`CountdownSticker`](CountdownSticker.md)

  ↳ [`HashtagSticker`](HashtagSticker.md)

  ↳ [`LocationSticker`](LocationSticker.md)

  ↳ [`MentionSticker`](MentionSticker.md)

  ↳ [`PollSticker`](PollSticker.md)

  ↳ [`QuizSticker`](QuizSticker.md)

  ↳ [`QuestionSticker`](QuestionSticker.md)

  ↳ [`SliderSticker`](SliderSticker.md)

## Table of contents

### Constructors

- [constructor](InstaSticker.md#constructor)

### Properties

- [height](InstaSticker.md#height)
- [isSticker](InstaSticker.md#issticker)
- [rotation](InstaSticker.md#rotation)
- [width](InstaSticker.md#width)
- [x](InstaSticker.md#x)
- [y](InstaSticker.md#y)
- [z](InstaSticker.md#z)

### Accessors

- [additionalConfigureProperties](InstaSticker.md#additionalconfigureproperties)
- [id](InstaSticker.md#id)
- [key](InstaSticker.md#key)

### Methods

- [bottom](InstaSticker.md#bottom)
- [center](InstaSticker.md#center)
- [left](InstaSticker.md#left)
- [moveBackwards](InstaSticker.md#movebackwards)
- [moveForward](InstaSticker.md#moveforward)
- [right](InstaSticker.md#right)
- [rotateDeg](InstaSticker.md#rotatedeg)
- [scale](InstaSticker.md#scale)
- [toJSON](InstaSticker.md#tojson)
- [top](InstaSticker.md#top)

## Constructors

### constructor

• **new InstaSticker**()

## Properties

### height

• **height**: `number`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L6)

___

### isSticker

• **isSticker**: `boolean` = `true`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L12)

___

### rotation

• **rotation**: `number` = `0.0`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L7)

___

### width

• **width**: `number`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L5)

___

### x

• **x**: `number` = `0.0`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L8)

___

### y

• **y**: `number` = `0.0`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L9)

___

### z

• **z**: `number` = `0`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L10)

## Accessors

### additionalConfigureProperties

• `get` **additionalConfigureProperties**(): `any`

Only used to set the media id when attaching media

#### Returns

`any`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L21)

___

### id

• `Abstract` `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L14)

___

### key

• `Abstract` `get` **key**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L16)

## Methods

### bottom

▸ **bottom**(): [`InstaSticker`](InstaSticker.md)

#### Returns

[`InstaSticker`](InstaSticker.md)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:66](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L66)

___

### center

▸ **center**(): [`InstaSticker`](InstaSticker.md)

#### Returns

[`InstaSticker`](InstaSticker.md)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L25)

___

### left

▸ **left**(): [`InstaSticker`](InstaSticker.md)

#### Returns

[`InstaSticker`](InstaSticker.md)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:56](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L56)

___

### moveBackwards

▸ **moveBackwards**(`layers?`): [`InstaSticker`](InstaSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`InstaSticker`](InstaSticker.md)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:47](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L47)

___

### moveForward

▸ **moveForward**(`layers?`): [`InstaSticker`](InstaSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`InstaSticker`](InstaSticker.md)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L42)

___

### right

▸ **right**(): [`InstaSticker`](InstaSticker.md)

#### Returns

[`InstaSticker`](InstaSticker.md)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:51](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L51)

___

### rotateDeg

▸ **rotateDeg**(`deg`): [`InstaSticker`](InstaSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deg` | `number` |

#### Returns

[`InstaSticker`](InstaSticker.md)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L31)

___

### scale

▸ **scale**(`factor`): [`InstaSticker`](InstaSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

[`InstaSticker`](InstaSticker.md)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:36](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L36)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:71](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L71)

___

### top

▸ **top**(): [`InstaSticker`](InstaSticker.md)

#### Returns

[`InstaSticker`](InstaSticker.md)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:61](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L61)
