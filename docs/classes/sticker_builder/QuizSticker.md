[instagram-private-api](../../README.md) / [sticker-builder](../../modules/sticker_builder.md) / QuizSticker

# Class: QuizSticker

[sticker-builder](../../modules/sticker_builder.md).QuizSticker

## Hierarchy

- [`InstaSticker`](InstaSticker.md)

  ↳ **`QuizSticker`**

## Table of contents

### Constructors

- [constructor](QuizSticker.md#constructor)

### Properties

- [correctAnswer](QuizSticker.md#correctanswer)
- [endBackgroundColor](QuizSticker.md#endbackgroundcolor)
- [height](QuizSticker.md#height)
- [isSticker](QuizSticker.md#issticker)
- [question](QuizSticker.md#question)
- [rotation](QuizSticker.md#rotation)
- [startBackgroundColor](QuizSticker.md#startbackgroundcolor)
- [textColor](QuizSticker.md#textcolor)
- [viewerAnswer](QuizSticker.md#vieweranswer)
- [viewerCanAnswer](QuizSticker.md#viewercananswer)
- [width](QuizSticker.md#width)
- [x](QuizSticker.md#x)
- [y](QuizSticker.md#y)
- [z](QuizSticker.md#z)

### Accessors

- [additionalConfigureProperties](QuizSticker.md#additionalconfigureproperties)
- [id](QuizSticker.md#id)
- [key](QuizSticker.md#key)
- [options](QuizSticker.md#options)

### Methods

- [bottom](QuizSticker.md#bottom)
- [center](QuizSticker.md#center)
- [left](QuizSticker.md#left)
- [moveBackwards](QuizSticker.md#movebackwards)
- [moveForward](QuizSticker.md#moveforward)
- [right](QuizSticker.md#right)
- [rotateDeg](QuizSticker.md#rotatedeg)
- [scale](QuizSticker.md#scale)
- [toJSON](QuizSticker.md#tojson)
- [top](QuizSticker.md#top)

## Constructors

### constructor

• **new QuizSticker**()

#### Inherited from

[InstaSticker](InstaSticker.md).[constructor](InstaSticker.md#constructor)

## Properties

### correctAnswer

• **correctAnswer**: `number`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:24](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L24)

___

### endBackgroundColor

• `Optional` **endBackgroundColor**: `string` = `'#262626'`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:27](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L27)

___

### height

• **height**: `number`

#### Overrides

[InstaSticker](InstaSticker.md).[height](InstaSticker.md#height)

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L31)

___

### isSticker

• **isSticker**: `boolean` = `true`

#### Inherited from

[InstaSticker](InstaSticker.md).[isSticker](InstaSticker.md#issticker)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L12)

___

### question

• **question**: `string`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L8)

___

### rotation

• **rotation**: `number` = `0.0`

#### Inherited from

[InstaSticker](InstaSticker.md).[rotation](InstaSticker.md#rotation)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L7)

___

### startBackgroundColor

• `Optional` **startBackgroundColor**: `string` = `'#262626'`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L26)

___

### textColor

• `Optional` **textColor**: `string` = `'#ffffff'`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L25)

___

### viewerAnswer

• `Optional` **viewerAnswer**: `number` = `-1`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:29](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L29)

___

### viewerCanAnswer

• `Optional` **viewerCanAnswer**: `boolean` = `false`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:28](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L28)

___

### width

• **width**: `number` = `0.7291667`

#### Overrides

[InstaSticker](InstaSticker.md).[width](InstaSticker.md#width)

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:30](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L30)

___

### x

• **x**: `number` = `0.0`

#### Inherited from

[InstaSticker](InstaSticker.md).[x](InstaSticker.md#x)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L8)

___

### y

• **y**: `number` = `0.0`

#### Inherited from

[InstaSticker](InstaSticker.md).[y](InstaSticker.md#y)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L9)

___

### z

• **z**: `number` = `0`

#### Inherited from

[InstaSticker](InstaSticker.md).[z](InstaSticker.md#z)

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

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:33](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L33)

___

### key

• `get` **key**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:37](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L37)

___

### options

• `get` **options**(): `string`[] \| `Options`

#### Returns

`string`[] \| `Options`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L20)

• `set` **options**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string`[] \| `Options` |

#### Returns

`void`

#### Defined in

[src/sticker-builder/stickers/quiz.sticker.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/quiz.sticker.ts#L10)

## Methods

### bottom

▸ **bottom**(): [`QuizSticker`](QuizSticker.md)

#### Returns

[`QuizSticker`](QuizSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[bottom](InstaSticker.md#bottom)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:66](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L66)

___

### center

▸ **center**(): [`QuizSticker`](QuizSticker.md)

#### Returns

[`QuizSticker`](QuizSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[center](InstaSticker.md#center)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L25)

___

### left

▸ **left**(): [`QuizSticker`](QuizSticker.md)

#### Returns

[`QuizSticker`](QuizSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[left](InstaSticker.md#left)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:56](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L56)

___

### moveBackwards

▸ **moveBackwards**(`layers?`): [`QuizSticker`](QuizSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`QuizSticker`](QuizSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveBackwards](InstaSticker.md#movebackwards)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:47](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L47)

___

### moveForward

▸ **moveForward**(`layers?`): [`QuizSticker`](QuizSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`QuizSticker`](QuizSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveForward](InstaSticker.md#moveforward)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L42)

___

### right

▸ **right**(): [`QuizSticker`](QuizSticker.md)

#### Returns

[`QuizSticker`](QuizSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[right](InstaSticker.md#right)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:51](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L51)

___

### rotateDeg

▸ **rotateDeg**(`deg`): [`QuizSticker`](QuizSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deg` | `number` |

#### Returns

[`QuizSticker`](QuizSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[rotateDeg](InstaSticker.md#rotatedeg)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L31)

___

### scale

▸ **scale**(`factor`): [`QuizSticker`](QuizSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

[`QuizSticker`](QuizSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[scale](InstaSticker.md#scale)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:36](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L36)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

[InstaSticker](InstaSticker.md).[toJSON](InstaSticker.md#tojson)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:71](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L71)

___

### top

▸ **top**(): [`QuizSticker`](QuizSticker.md)

#### Returns

[`QuizSticker`](QuizSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[top](InstaSticker.md#top)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:61](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L61)
