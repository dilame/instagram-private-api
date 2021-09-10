[instagram-private-api](../../README.md) / [types](../../modules/types.md) / MediaConfigureTimelineOptions

# Interface: MediaConfigureTimelineOptions

[types](../../modules/types.md).MediaConfigureTimelineOptions

## Hierarchy

- [`MediaConfigureOptions`](MediaConfigureOptions.md)

  ↳ **`MediaConfigureTimelineOptions`**

## Table of contents

### Properties

- [camera\_make](MediaConfigureTimelineOptions.md#camera_make)
- [camera\_model](MediaConfigureTimelineOptions.md#camera_model)
- [caption](MediaConfigureTimelineOptions.md#caption)
- [creation\_logger\_session\_id](MediaConfigureTimelineOptions.md#creation_logger_session_id)
- [date\_time\_digitalized](MediaConfigureTimelineOptions.md#date_time_digitalized)
- [date\_time\_original](MediaConfigureTimelineOptions.md#date_time_original)
- [device\_id](MediaConfigureTimelineOptions.md#device_id)
- [disable\_comments](MediaConfigureTimelineOptions.md#disable_comments)
- [edits](MediaConfigureTimelineOptions.md#edits)
- [extra](MediaConfigureTimelineOptions.md#extra)
- [geotag\_enabled](MediaConfigureTimelineOptions.md#geotag_enabled)
- [height](MediaConfigureTimelineOptions.md#height)
- [location](MediaConfigureTimelineOptions.md#location)
- [media\_folder](MediaConfigureTimelineOptions.md#media_folder)
- [media\_latitude](MediaConfigureTimelineOptions.md#media_latitude)
- [media\_longitude](MediaConfigureTimelineOptions.md#media_longitude)
- [posting\_latitude](MediaConfigureTimelineOptions.md#posting_latitude)
- [posting\_longitude](MediaConfigureTimelineOptions.md#posting_longitude)
- [scene\_capture\_type](MediaConfigureTimelineOptions.md#scene_capture_type)
- [software](MediaConfigureTimelineOptions.md#software)
- [source\_type](MediaConfigureTimelineOptions.md#source_type)
- [timezone\_offset](MediaConfigureTimelineOptions.md#timezone_offset)
- [upload\_id](MediaConfigureTimelineOptions.md#upload_id)
- [usertags](MediaConfigureTimelineOptions.md#usertags)
- [width](MediaConfigureTimelineOptions.md#width)

## Properties

### camera\_make

• `Optional` **camera\_make**: `string`

#### Defined in

[src/types/media.configure.options.ts:45](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L45)

___

### camera\_model

• `Optional` **camera\_model**: `string`

#### Defined in

[src/types/media.configure.options.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L42)

___

### caption

• `Optional` **caption**: `string`

#### Defined in

[src/types/media.configure.options.ts:39](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L39)

___

### creation\_logger\_session\_id

• `Optional` **creation\_logger\_session\_id**: `string`

#### Defined in

[src/types/media.configure.options.ts:44](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L44)

___

### date\_time\_digitalized

• `Optional` **date\_time\_digitalized**: `string`

#### Defined in

[src/types/media.configure.options.ts:36](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L36)

___

### date\_time\_original

• `Optional` **date\_time\_original**: `string`

#### Defined in

[src/types/media.configure.options.ts:37](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L37)

___

### device\_id

• `Optional` **device\_id**: `string`

#### Defined in

[src/types/media.configure.options.ts:43](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L43)

___

### disable\_comments

• `Optional` **disable\_comments**: `boolean`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[disable_comments](MediaConfigureOptions.md#disable_comments)

#### Defined in

[src/types/media.configure.options.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L6)

___

### edits

• `Optional` **edits**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `crop_center?` | [`number`, `number`] |
| `crop_original_size?` | [`number`, `number`] |
| `crop_zoom?` | `string` \| `number` |

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[edits](MediaConfigureOptions.md#edits)

#### Defined in

[src/types/media.configure.options.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L7)

___

### extra

• `Optional` **extra**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `source_height` | `number` |
| `source_width` | `number` |

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[extra](MediaConfigureOptions.md#extra)

#### Defined in

[src/types/media.configure.options.ts:12](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L12)

___

### geotag\_enabled

• `Optional` **geotag\_enabled**: ``"1"`` \| ``"0"``

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[geotag_enabled](MediaConfigureOptions.md#geotag_enabled)

#### Defined in

[src/types/media.configure.options.ts:24](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L24)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[height](MediaConfigureOptions.md#height)

#### Defined in

[src/types/media.configure.options.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L18)

___

### location

• `Optional` **location**: `string` \| [`MediaLocation`](MediaLocation.md)

#### Defined in

[src/types/media.configure.options.ts:33](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L33)

___

### media\_folder

• `Optional` **media\_folder**: `string`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[media_folder](MediaConfigureOptions.md#media_folder)

#### Defined in

[src/types/media.configure.options.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L21)

___

### media\_latitude

• `Optional` **media\_latitude**: `string`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[media_latitude](MediaConfigureOptions.md#media_latitude)

#### Defined in

[src/types/media.configure.options.ts:27](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L27)

___

### media\_longitude

• `Optional` **media\_longitude**: `string`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[media_longitude](MediaConfigureOptions.md#media_longitude)

#### Defined in

[src/types/media.configure.options.ts:28](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L28)

___

### posting\_latitude

• `Optional` **posting\_latitude**: `string`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[posting_latitude](MediaConfigureOptions.md#posting_latitude)

#### Defined in

[src/types/media.configure.options.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L25)

___

### posting\_longitude

• `Optional` **posting\_longitude**: `string`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[posting_longitude](MediaConfigureOptions.md#posting_longitude)

#### Defined in

[src/types/media.configure.options.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L26)

___

### scene\_capture\_type

• `Optional` **scene\_capture\_type**: `string`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[scene_capture_type](MediaConfigureOptions.md#scene_capture_type)

#### Defined in

[src/types/media.configure.options.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L20)

___

### software

• `Optional` **software**: `string`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[software](MediaConfigureOptions.md#software)

#### Defined in

[src/types/media.configure.options.ts:22](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L22)

___

### source\_type

• `Optional` **source\_type**: `string`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[source_type](MediaConfigureOptions.md#source_type)

#### Defined in

[src/types/media.configure.options.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L5)

___

### timezone\_offset

• `Optional` **timezone\_offset**: `string`

#### Defined in

[src/types/media.configure.options.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L38)

___

### upload\_id

• **upload\_id**: `string`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[upload_id](MediaConfigureOptions.md#upload_id)

#### Defined in

[src/types/media.configure.options.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L4)

___

### usertags

• `Optional` **usertags**: `string` \| `PostingUsertags`

#### Defined in

[src/types/media.configure.options.ts:35](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L35)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[MediaConfigureOptions](MediaConfigureOptions.md).[width](MediaConfigureOptions.md#width)

#### Defined in

[src/types/media.configure.options.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure.options.ts#L17)
