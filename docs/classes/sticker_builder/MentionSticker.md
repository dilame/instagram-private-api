[instagram-private-api](../../README.md) / [sticker-builder](../../modules/sticker_builder.md) / MentionSticker

# Class: MentionSticker

[sticker-builder](../../modules/sticker_builder.md).MentionSticker

## Hierarchy

- [`InstaSticker`](InstaSticker.md)

  ↳ **`MentionSticker`**

## Table of contents

### Constructors

- [constructor](MentionSticker.md#constructor)

### Properties

- [displayType](MentionSticker.md#displaytype)
- [height](MentionSticker.md#height)
- [isSticker](MentionSticker.md#issticker)
- [mediaId](MentionSticker.md#mediaid)
- [rotation](MentionSticker.md#rotation)
- [userId](MentionSticker.md#userid)
- [width](MentionSticker.md#width)
- [x](MentionSticker.md#x)
- [y](MentionSticker.md#y)
- [z](MentionSticker.md#z)

### Accessors

- [additionalConfigureProperties](MentionSticker.md#additionalconfigureproperties)
- [id](MentionSticker.md#id)
- [key](MentionSticker.md#key)

### Methods

- [bottom](MentionSticker.md#bottom)
- [center](MentionSticker.md#center)
- [left](MentionSticker.md#left)
- [moveBackwards](MentionSticker.md#movebackwards)
- [moveForward](MentionSticker.md#moveforward)
- [right](MentionSticker.md#right)
- [rotateDeg](MentionSticker.md#rotatedeg)
- [scale](MentionSticker.md#scale)
- [toJSON](MentionSticker.md#tojson)
- [top](MentionSticker.md#top)

## Constructors

### constructor

• **new MentionSticker**()

#### Inherited from

[InstaSticker](InstaSticker.md).[constructor](InstaSticker.md#constructor)

## Properties

### displayType

• `Optional` **displayType**: ``"mention_username"`` \| ``"mention_reshare"`` = `'mention_username'`

#### Defined in

[src/sticker-builder/stickers/mention.sticker.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/mention.sticker.ts#L6)

___

### height

• **height**: `number` = `0.125`

#### Overrides

[InstaSticker](InstaSticker.md).[height](InstaSticker.md#height)

#### Defined in

[src/sticker-builder/stickers/mention.sticker.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/mention.sticker.ts#L10)

___

### isSticker

• **isSticker**: `boolean` = `true`

#### Inherited from

[InstaSticker](InstaSticker.md).[isSticker](InstaSticker.md#issticker)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L12)

___

### mediaId

• `Optional` **mediaId**: `string`

#### Defined in

[src/sticker-builder/stickers/mention.sticker.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/mention.sticker.ts#L8)

___

### rotation

• **rotation**: `number` = `0.0`

#### Inherited from

[InstaSticker](InstaSticker.md).[rotation](InstaSticker.md#rotation)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L7)

___

### userId

• **userId**: `string`

#### Defined in

[src/sticker-builder/stickers/mention.sticker.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/mention.sticker.ts#L5)

___

### width

• **width**: `number` = `0.64`

#### Overrides

[InstaSticker](InstaSticker.md).[width](InstaSticker.md#width)

#### Defined in

[src/sticker-builder/stickers/mention.sticker.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/mention.sticker.ts#L9)

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

[src/sticker-builder/stickers/mention.sticker.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/mention.sticker.ts#L20)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/mention.sticker.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/mention.sticker.ts#L12)

___

### key

• `get` **key**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/mention.sticker.ts:16](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/mention.sticker.ts#L16)

## Methods

### bottom

▸ **bottom**(): [`MentionSticker`](MentionSticker.md)

#### Returns

[`MentionSticker`](MentionSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[bottom](InstaSticker.md#bottom)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:66](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L66)

___

### center

▸ **center**(): [`MentionSticker`](MentionSticker.md)

#### Returns

[`MentionSticker`](MentionSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[center](InstaSticker.md#center)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L25)

___

### left

▸ **left**(): [`MentionSticker`](MentionSticker.md)

#### Returns

[`MentionSticker`](MentionSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[left](InstaSticker.md#left)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:56](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L56)

___

### moveBackwards

▸ **moveBackwards**(`layers?`): [`MentionSticker`](MentionSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`MentionSticker`](MentionSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveBackwards](InstaSticker.md#movebackwards)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:47](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L47)

___

### moveForward

▸ **moveForward**(`layers?`): [`MentionSticker`](MentionSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`MentionSticker`](MentionSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveForward](InstaSticker.md#moveforward)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L42)

___

### right

▸ **right**(): [`MentionSticker`](MentionSticker.md)

#### Returns

[`MentionSticker`](MentionSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[right](InstaSticker.md#right)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:51](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L51)

___

### rotateDeg

▸ **rotateDeg**(`deg`): [`MentionSticker`](MentionSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deg` | `number` |

#### Returns

[`MentionSticker`](MentionSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[rotateDeg](InstaSticker.md#rotatedeg)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L31)

___

### scale

▸ **scale**(`factor`): [`MentionSticker`](MentionSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

[`MentionSticker`](MentionSticker.md)

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

▸ **top**(): [`MentionSticker`](MentionSticker.md)

#### Returns

[`MentionSticker`](MentionSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[top](InstaSticker.md#top)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:61](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L61)
