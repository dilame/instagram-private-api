[instagram-private-api](../../README.md) / [sticker-builder](../../modules/sticker_builder.md) / PollSticker

# Class: PollSticker

[sticker-builder](../../modules/sticker_builder.md).PollSticker

## Hierarchy

- [`InstaSticker`](InstaSticker.md)

  ↳ **`PollSticker`**

## Table of contents

### Constructors

- [constructor](PollSticker.md#constructor)

### Properties

- [finished](PollSticker.md#finished)
- [height](PollSticker.md#height)
- [isSharedResult](PollSticker.md#issharedresult)
- [isSticker](PollSticker.md#issticker)
- [question](PollSticker.md#question)
- [rotation](PollSticker.md#rotation)
- [viewerCanVote](PollSticker.md#viewercanvote)
- [viewerVote](PollSticker.md#viewervote)
- [width](PollSticker.md#width)
- [x](PollSticker.md#x)
- [y](PollSticker.md#y)
- [z](PollSticker.md#z)

### Accessors

- [additionalConfigureProperties](PollSticker.md#additionalconfigureproperties)
- [id](PollSticker.md#id)
- [key](PollSticker.md#key)
- [tallies](PollSticker.md#tallies)

### Methods

- [bottom](PollSticker.md#bottom)
- [center](PollSticker.md#center)
- [left](PollSticker.md#left)
- [moveBackwards](PollSticker.md#movebackwards)
- [moveForward](PollSticker.md#moveforward)
- [right](PollSticker.md#right)
- [rotateDeg](PollSticker.md#rotatedeg)
- [scale](PollSticker.md#scale)
- [toJSON](PollSticker.md#tojson)
- [top](PollSticker.md#top)

## Constructors

### constructor

• **new PollSticker**()

#### Inherited from

[InstaSticker](InstaSticker.md).[constructor](InstaSticker.md#constructor)

## Properties

### finished

• `Optional` **finished**: `boolean` = `false`

#### Defined in

[src/sticker-builder/stickers/poll.sticker.ts:24](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L24)

___

### height

• **height**: `number` = `0.1266892`

#### Overrides

[InstaSticker](InstaSticker.md).[height](InstaSticker.md#height)

#### Defined in

[src/sticker-builder/stickers/poll.sticker.ts:29](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L29)

___

### isSharedResult

• `Optional` **isSharedResult**: `boolean` = `false`

#### Defined in

[src/sticker-builder/stickers/poll.sticker.ts:27](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L27)

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

[src/sticker-builder/stickers/poll.sticker.ts:22](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L22)

___

### rotation

• **rotation**: `number` = `0.0`

#### Inherited from

[InstaSticker](InstaSticker.md).[rotation](InstaSticker.md#rotation)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L7)

___

### viewerCanVote

• `Optional` **viewerCanVote**: `boolean` = `true`

#### Defined in

[src/sticker-builder/stickers/poll.sticker.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L26)

___

### viewerVote

• `Optional` **viewerVote**: `number` = `0`

#### Defined in

[src/sticker-builder/stickers/poll.sticker.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L25)

___

### width

• **width**: `number` = `0.49934897`

#### Overrides

[InstaSticker](InstaSticker.md).[width](InstaSticker.md#width)

#### Defined in

[src/sticker-builder/stickers/poll.sticker.ts:28](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L28)

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

[src/sticker-builder/stickers/poll.sticker.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L31)

___

### key

• `get` **key**(): `string`

#### Returns

`string`

#### Defined in

[src/sticker-builder/stickers/poll.sticker.ts:35](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L35)

___

### tallies

• `get` **tallies**(): `Tallies`

#### Returns

`Tallies`

#### Defined in

[src/sticker-builder/stickers/poll.sticker.ts:14](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L14)

• `set` **tallies**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Tallies` |

#### Returns

`void`

#### Defined in

[src/sticker-builder/stickers/poll.sticker.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/poll.sticker.ts#L18)

## Methods

### bottom

▸ **bottom**(): [`PollSticker`](PollSticker.md)

#### Returns

[`PollSticker`](PollSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[bottom](InstaSticker.md#bottom)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:66](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L66)

___

### center

▸ **center**(): [`PollSticker`](PollSticker.md)

#### Returns

[`PollSticker`](PollSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[center](InstaSticker.md#center)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L25)

___

### left

▸ **left**(): [`PollSticker`](PollSticker.md)

#### Returns

[`PollSticker`](PollSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[left](InstaSticker.md#left)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:56](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L56)

___

### moveBackwards

▸ **moveBackwards**(`layers?`): [`PollSticker`](PollSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`PollSticker`](PollSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveBackwards](InstaSticker.md#movebackwards)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:47](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L47)

___

### moveForward

▸ **moveForward**(`layers?`): [`PollSticker`](PollSticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layers` | `number` | `1` |

#### Returns

[`PollSticker`](PollSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[moveForward](InstaSticker.md#moveforward)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L42)

___

### right

▸ **right**(): [`PollSticker`](PollSticker.md)

#### Returns

[`PollSticker`](PollSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[right](InstaSticker.md#right)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:51](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L51)

___

### rotateDeg

▸ **rotateDeg**(`deg`): [`PollSticker`](PollSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deg` | `number` |

#### Returns

[`PollSticker`](PollSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[rotateDeg](InstaSticker.md#rotatedeg)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L31)

___

### scale

▸ **scale**(`factor`): [`PollSticker`](PollSticker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

[`PollSticker`](PollSticker.md)

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

▸ **top**(): [`PollSticker`](PollSticker.md)

#### Returns

[`PollSticker`](PollSticker.md)

#### Inherited from

[InstaSticker](InstaSticker.md).[top](InstaSticker.md#top)

#### Defined in

[src/sticker-builder/stickers/insta-sticker.ts:61](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/sticker-builder/stickers/insta-sticker.ts#L61)
