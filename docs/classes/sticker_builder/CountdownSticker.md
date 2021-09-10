[instagram-private-api](../../README.md) / [sticker-builder](../../modules/sticker_builder.md) / CountdownSticker

# Class: CountdownSticker

[sticker-builder](../../modules/sticker_builder.md).CountdownSticker

## Hierarchy

- [`InstaSticker`](InstaSticker.md)

  ↳ **`CountdownSticker`**

## Table of contents

### Constructors

- [constructor](CountdownSticker.md#constructor)

### Properties

- [digitCardColor](CountdownSticker.md#digitcardcolor)
- [digitColor](CountdownSticker.md#digitcolor)
- [endBackgroundColor](CountdownSticker.md#endbackgroundcolor)
- [followingEnabled](CountdownSticker.md#followingenabled)
- [height](CountdownSticker.md#height)
- [isSticker](CountdownSticker.md#issticker)
- [rotation](CountdownSticker.md#rotation)
- [startBackgroundColor](CountdownSticker.md#startbackgroundcolor)
- [text](CountdownSticker.md#text)
- [textColor](CountdownSticker.md#textcolor)
- [width](CountdownSticker.md#width)
- [x](CountdownSticker.md#x)
- [y](CountdownSticker.md#y)
- [z](CountdownSticker.md#z)

### Accessors

- [additionalConfigureProperties](CountdownSticker.md#additionalconfigureproperties)
- [endTs](CountdownSticker.md#endts)
- [id](CountdownSticker.md#id)
- [key](CountdownSticker.md#key)

### Methods

- [bottom](CountdownSticker.md#bottom)
- [center](CountdownSticker.md#center)
- [left](CountdownSticker.md#left)
- [moveBackwards](CountdownSticker.md#movebackwards)
- [moveForward](CountdownSticker.md#moveforward)
- [right](CountdownSticker.md#right)
- [rotateDeg](CountdownSticker.md#rotatedeg)
- [scale](CountdownSticker.md#scale)
- [toJSON](CountdownSticker.md#tojson)
- [top](CountdownSticker.md#top)

## Constructors

### constructor

• **new CountdownSticker**()

#### Inherited from

[InstaSticker](InstaSticker.md).[constructor](InstaSticker.md#constructor)

## Properties

### digitCardColor

• `Optional` **digitCardColor**: `string` = `'#ffffffcc'`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L25)

___

### digitColor

• `Optional` **digitColor**: `string` = `'#7e0091'`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:24](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L24)

___

### endBackgroundColor

• `Optional` **endBackgroundColor**: `string` = `'#5eb1ff'`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:23](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L23)

___

### followingEnabled

• `Optional` **followingEnabled**: `boolean` = `true`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L26)

___

### height

• **height**: `number` = `0.26013514`

#### Overrides

[InstaSticker](InstaSticker.md).[height](InstaSticker.md#height)

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:28](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L28)

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

• `Optional` **startBackgroundColor**: `string` = `'#ca2ee1'`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:22](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L22)

___

### text

• **text**: `string`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L20)

___

### textColor

• `Optional` **textColor**: `string` = `'#ffffff'`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L21)

___

### width

• **width**: `number` = `0.703125`

#### Overrides

[InstaSticker](InstaSticker.md).[width](InstaSticker.md#width)

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:27](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L27)

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

### endTs

• `get` **endTs**(): `number` \| `DateTime`

#### Returns

`number` \| `DateTime`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L8)

• `set` **endTs**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `DateTime` |

#### Returns

`void`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L12)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:30](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L30)

___

### key

• `get` **key**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/countdown.sticker.ts:34](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/countdown.sticker.ts#L34)

## Methods

### bottom

▸ **bottom**(): [`CountdownSticker`](CountdownSticker.md)

#### Returns

[`CountdownSticker`](CountdownSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[bottom](InstaSticker.md#bottom)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:66](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L66)

___

### center

▸ **center**(): [`CountdownSticker`](CountdownSticker.md)

#### Returns

[`CountdownSticker`](CountdownSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[center](InstaSticker.md#center)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L25)

___

### left

▸ **left**(): [`CountdownSticker`](CountdownSticker.md)

#### Returns

[`CountdownSticker`](CountdownSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[left](InstaSticker.md#left)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:56](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L56)

___

### moveBackwards

▸ **moveBackwards**(`layers?`): [`CountdownSticker`](CountdownSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`CountdownSticker`](CountdownSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveBackwards](InstaSticker.md#movebackwards)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:47](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L47)

___

### moveForward

▸ **moveForward**(`layers?`): [`CountdownSticker`](CountdownSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`CountdownSticker`](CountdownSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveForward](InstaSticker.md#moveforward)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L42)

___

### right

▸ **right**(): [`CountdownSticker`](CountdownSticker.md)

#### Returns

[`CountdownSticker`](CountdownSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[right](InstaSticker.md#right)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:51](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L51)

___

### rotateDeg

▸ **rotateDeg**(`deg`): [`CountdownSticker`](CountdownSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deg` | `number` |

#### Returns

[`CountdownSticker`](CountdownSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[rotateDeg](InstaSticker.md#rotatedeg)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L31)

___

### scale

▸ **scale**(`factor`): [`CountdownSticker`](CountdownSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

[`CountdownSticker`](CountdownSticker.md)

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

▸ **top**(): [`CountdownSticker`](CountdownSticker.md)

#### Returns

[`CountdownSticker`](CountdownSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[top](InstaSticker.md#top)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:61](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L61)
