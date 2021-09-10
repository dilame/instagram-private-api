[instagram-private-api](../../README.md) / [sticker-builder](../../modules/sticker_builder.md) / SliderSticker

# Class: SliderSticker

[sticker-builder](../../modules/sticker_builder.md).SliderSticker

## Hierarchy

- [`InstaSticker`](InstaSticker.md)

  ↳ **`SliderSticker`**

## Table of contents

### Constructors

- [constructor](SliderSticker.md#constructor)

### Properties

- [backgroundColor](SliderSticker.md#backgroundcolor)
- [emoji](SliderSticker.md#emoji)
- [height](SliderSticker.md#height)
- [isSticker](SliderSticker.md#issticker)
- [question](SliderSticker.md#question)
- [rotation](SliderSticker.md#rotation)
- [sliderVoteAverage](SliderSticker.md#slidervoteaverage)
- [sliderVoteCount](SliderSticker.md#slidervotecount)
- [textColor](SliderSticker.md#textcolor)
- [viewerCanVote](SliderSticker.md#viewercanvote)
- [viewerVote](SliderSticker.md#viewervote)
- [width](SliderSticker.md#width)
- [x](SliderSticker.md#x)
- [y](SliderSticker.md#y)
- [z](SliderSticker.md#z)

### Accessors

- [additionalConfigureProperties](SliderSticker.md#additionalconfigureproperties)
- [id](SliderSticker.md#id)
- [key](SliderSticker.md#key)

### Methods

- [bottom](SliderSticker.md#bottom)
- [center](SliderSticker.md#center)
- [left](SliderSticker.md#left)
- [moveBackwards](SliderSticker.md#movebackwards)
- [moveForward](SliderSticker.md#moveforward)
- [right](SliderSticker.md#right)
- [rotateDeg](SliderSticker.md#rotatedeg)
- [scale](SliderSticker.md#scale)
- [toJSON](SliderSticker.md#tojson)
- [top](SliderSticker.md#top)

## Constructors

### constructor

• **new SliderSticker**()

#### Inherited from

[InstaSticker](InstaSticker.md).[constructor](InstaSticker.md#constructor)

## Properties

### backgroundColor

• `Optional` **backgroundColor**: `string` = `'#ffffff'`

#### Defined in

[src/sticker-builder/stickers/slider.sticker.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L6)

___

### emoji

• **emoji**: `string`

#### Defined in

[src/sticker-builder/stickers/slider.sticker.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L5)

___

### height

• **height**: `number` = `0.22212838`

#### Overrides

[InstaSticker](InstaSticker.md).[height](InstaSticker.md#height)

#### Defined in

[src/sticker-builder/stickers/slider.sticker.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L14)

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

[src/sticker-builder/stickers/slider.sticker.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L4)

___

### rotation

• **rotation**: `number` = `0.0`

#### Inherited from

[InstaSticker](InstaSticker.md).[rotation](InstaSticker.md#rotation)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L7)

___

### sliderVoteAverage

• `Optional` **sliderVoteAverage**: `number` = `0.0`

#### Defined in

[src/sticker-builder/stickers/slider.sticker.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L12)

___

### sliderVoteCount

• `Optional` **sliderVoteCount**: `number` = `0`

#### Defined in

[src/sticker-builder/stickers/slider.sticker.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L10)

___

### textColor

• `Optional` **textColor**: `string` = `'#000000'`

#### Defined in

[src/sticker-builder/stickers/slider.sticker.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L7)

___

### viewerCanVote

• `Optional` **viewerCanVote**: `boolean` = `false`

#### Defined in

[src/sticker-builder/stickers/slider.sticker.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L9)

___

### viewerVote

• `Optional` **viewerVote**: `number` = `-1.0`

#### Defined in

[src/sticker-builder/stickers/slider.sticker.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L11)

___

### width

• **width**: `number` = `0.7291667`

#### Overrides

[InstaSticker](InstaSticker.md).[width](InstaSticker.md#width)

#### Defined in

[src/sticker-builder/stickers/slider.sticker.ts:13](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L13)

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

[src/sticker-builder/stickers/slider.sticker.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L16)

___

### key

• `get` **key**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/slider.sticker.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/slider.sticker.ts#L20)

## Methods

### bottom

▸ **bottom**(): [`SliderSticker`](SliderSticker.md)

#### Returns

[`SliderSticker`](SliderSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[bottom](InstaSticker.md#bottom)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:66](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L66)

___

### center

▸ **center**(): [`SliderSticker`](SliderSticker.md)

#### Returns

[`SliderSticker`](SliderSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[center](InstaSticker.md#center)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L25)

___

### left

▸ **left**(): [`SliderSticker`](SliderSticker.md)

#### Returns

[`SliderSticker`](SliderSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[left](InstaSticker.md#left)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:56](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L56)

___

### moveBackwards

▸ **moveBackwards**(`layers?`): [`SliderSticker`](SliderSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`SliderSticker`](SliderSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveBackwards](InstaSticker.md#movebackwards)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:47](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L47)

___

### moveForward

▸ **moveForward**(`layers?`): [`SliderSticker`](SliderSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`SliderSticker`](SliderSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveForward](InstaSticker.md#moveforward)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L42)

___

### right

▸ **right**(): [`SliderSticker`](SliderSticker.md)

#### Returns

[`SliderSticker`](SliderSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[right](InstaSticker.md#right)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:51](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L51)

___

### rotateDeg

▸ **rotateDeg**(`deg`): [`SliderSticker`](SliderSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deg` | `number` |

#### Returns

[`SliderSticker`](SliderSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[rotateDeg](InstaSticker.md#rotatedeg)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L31)

___

### scale

▸ **scale**(`factor`): [`SliderSticker`](SliderSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

[`SliderSticker`](SliderSticker.md)

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

▸ **top**(): [`SliderSticker`](SliderSticker.md)

#### Returns

[`SliderSticker`](SliderSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[top](InstaSticker.md#top)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:61](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L61)
