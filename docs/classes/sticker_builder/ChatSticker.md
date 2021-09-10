[instagram-private-api](../../README.md) / [sticker-builder](../../modules/sticker_builder.md) / ChatSticker

# Class: ChatSticker

[sticker-builder](../../modules/sticker_builder.md).ChatSticker

## Hierarchy

- [`InstaSticker`](InstaSticker.md)

  ↳ **`ChatSticker`**

## Table of contents

### Constructors

- [constructor](ChatSticker.md#constructor)

### Properties

- [endBackgroundColor](ChatSticker.md#endbackgroundcolor)
- [hasStartedChat](ChatSticker.md#hasstartedchat)
- [height](ChatSticker.md#height)
- [isSticker](ChatSticker.md#issticker)
- [rotation](ChatSticker.md#rotation)
- [startBackgroundColor](ChatSticker.md#startbackgroundcolor)
- [text](ChatSticker.md#text)
- [width](ChatSticker.md#width)
- [x](ChatSticker.md#x)
- [y](ChatSticker.md#y)
- [z](ChatSticker.md#z)

### Accessors

- [additionalConfigureProperties](ChatSticker.md#additionalconfigureproperties)
- [id](ChatSticker.md#id)
- [key](ChatSticker.md#key)

### Methods

- [bottom](ChatSticker.md#bottom)
- [center](ChatSticker.md#center)
- [left](ChatSticker.md#left)
- [moveBackwards](ChatSticker.md#movebackwards)
- [moveForward](ChatSticker.md#moveforward)
- [right](ChatSticker.md#right)
- [rotateDeg](ChatSticker.md#rotatedeg)
- [scale](ChatSticker.md#scale)
- [toJSON](ChatSticker.md#tojson)
- [top](ChatSticker.md#top)

## Constructors

### constructor

• **new ChatSticker**()

#### Inherited from

[InstaSticker](InstaSticker.md).[constructor](InstaSticker.md#constructor)

## Properties

### endBackgroundColor

• `Optional` **endBackgroundColor**: `string` = `'#27c4f5'`

#### Defined in

[src/sticker-builder/stickers/chat.sticker.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/chat.sticker.ts#L6)

___

### hasStartedChat

• `Optional` **hasStartedChat**: `boolean` = `false`

#### Defined in

[src/sticker-builder/stickers/chat.sticker.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/chat.sticker.ts#L7)

___

### height

• **height**: `number` = `0.1266892`

#### Overrides

[InstaSticker](InstaSticker.md).[height](InstaSticker.md#height)

#### Defined in

[src/sticker-builder/stickers/chat.sticker.ts:9](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/chat.sticker.ts#L9)

___

### isSticker

• **isSticker**: `boolean` = `true`

#### Inherited from

[InstaSticker](InstaSticker.md).[isSticker](InstaSticker.md#issticker)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L12)

___

### rotation

• **rotation**: `number` = `0.0`

#### Inherited from

[InstaSticker](InstaSticker.md).[rotation](InstaSticker.md#rotation)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L7)

___

### startBackgroundColor

• `Optional` **startBackgroundColor**: `string` = `'#3897f0'`

#### Defined in

[src/sticker-builder/stickers/chat.sticker.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/chat.sticker.ts#L5)

___

### text

• **text**: `string`

#### Defined in

[src/sticker-builder/stickers/chat.sticker.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/chat.sticker.ts#L4)

___

### width

• **width**: `number` = `0.453125`

#### Overrides

[InstaSticker](InstaSticker.md).[width](InstaSticker.md#width)

#### Defined in

[src/sticker-builder/stickers/chat.sticker.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/chat.sticker.ts#L8)

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

[src/sticker-builder/stickers/chat.sticker.ts:11](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/chat.sticker.ts#L11)

___

### key

• `get` **key**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/chat.sticker.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/chat.sticker.ts#L15)

## Methods

### bottom

▸ **bottom**(): [`ChatSticker`](ChatSticker.md)

#### Returns

[`ChatSticker`](ChatSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[bottom](InstaSticker.md#bottom)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:66](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L66)

___

### center

▸ **center**(): [`ChatSticker`](ChatSticker.md)

#### Returns

[`ChatSticker`](ChatSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[center](InstaSticker.md#center)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L25)

___

### left

▸ **left**(): [`ChatSticker`](ChatSticker.md)

#### Returns

[`ChatSticker`](ChatSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[left](InstaSticker.md#left)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:56](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L56)

___

### moveBackwards

▸ **moveBackwards**(`layers?`): [`ChatSticker`](ChatSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`ChatSticker`](ChatSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveBackwards](InstaSticker.md#movebackwards)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:47](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L47)

___

### moveForward

▸ **moveForward**(`layers?`): [`ChatSticker`](ChatSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`ChatSticker`](ChatSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveForward](InstaSticker.md#moveforward)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L42)

___

### right

▸ **right**(): [`ChatSticker`](ChatSticker.md)

#### Returns

[`ChatSticker`](ChatSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[right](InstaSticker.md#right)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:51](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L51)

___

### rotateDeg

▸ **rotateDeg**(`deg`): [`ChatSticker`](ChatSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deg` | `number` |

#### Returns

[`ChatSticker`](ChatSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[rotateDeg](InstaSticker.md#rotatedeg)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L31)

___

### scale

▸ **scale**(`factor`): [`ChatSticker`](ChatSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

[`ChatSticker`](ChatSticker.md)

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

▸ **top**(): [`ChatSticker`](ChatSticker.md)

#### Returns

[`ChatSticker`](ChatSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[top](InstaSticker.md#top)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:61](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L61)
