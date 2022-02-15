[instagram-private-api](../../README.md) / [types](../../modules/types.md) / MediaConfigureSidecarVideoItem

# Interface: MediaConfigureSidecarVideoItem

[types](../../modules/types.md).MediaConfigureSidecarVideoItem

## Hierarchy

- [`MediaConfigureSidecarItem`](MediaConfigureSidecarItem.md)

  ↳ **`MediaConfigureSidecarVideoItem`**

## Table of contents

### Properties

- [audio\_muted](MediaConfigureSidecarVideoItem.md#audio_muted)
- [caption](MediaConfigureSidecarVideoItem.md#caption)
- [clips](MediaConfigureSidecarVideoItem.md#clips)
- [date\_time\_original](MediaConfigureSidecarVideoItem.md#date_time_original)
- [device](MediaConfigureSidecarVideoItem.md#device)
- [edits](MediaConfigureSidecarVideoItem.md#edits)
- [extra](MediaConfigureSidecarVideoItem.md#extra)
- [filter\_type](MediaConfigureSidecarVideoItem.md#filter_type)
- [height](MediaConfigureSidecarVideoItem.md#height)
- [length](MediaConfigureSidecarVideoItem.md#length)
- [poster\_frame\_index](MediaConfigureSidecarVideoItem.md#poster_frame_index)
- [source\_type](MediaConfigureSidecarVideoItem.md#source_type)
- [timezone\_offset](MediaConfigureSidecarVideoItem.md#timezone_offset)
- [upload\_id](MediaConfigureSidecarVideoItem.md#upload_id)
- [usertags](MediaConfigureSidecarVideoItem.md#usertags)
- [video\_result](MediaConfigureSidecarVideoItem.md#video_result)
- [width](MediaConfigureSidecarVideoItem.md#width)

## Properties

### audio\_muted

• `Optional` **audio\_muted**: `string`

#### Defined in

[src/types/media.configure-sidecar.options.ts:49](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L49)

___

### caption

• `Optional` **caption**: ``null``

#### Inherited from

[MediaConfigureSidecarItem](MediaConfigureSidecarItem.md).[caption](MediaConfigureSidecarItem.md#caption)

#### Defined in

[src/types/media.configure-sidecar.options.ts:27](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L27)

___

### clips

• `Optional` **clips**: `string` \| { `length`: `number` ; `source_type`: `string`  }[]

#### Defined in

[src/types/media.configure-sidecar.options.ts:50](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L50)

___

### date\_time\_original

• `Optional` **date\_time\_original**: `string`

#### Defined in

[src/types/media.configure-sidecar.options.ts:48](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L48)

___

### device

• `Optional` **device**: `string` \| { `android_release`: `string` ; `android_version`: `number` ; `manufacturer`: `string` ; `model`: `string`  }

#### Inherited from

[MediaConfigureSidecarItem](MediaConfigureSidecarItem.md).[device](MediaConfigureSidecarItem.md#device)

#### Defined in

[src/types/media.configure-sidecar.options.ts:32](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L32)

___

### edits

• `Optional` **edits**: `string` \| { `crop_center`: [`number`, `number`] ; `crop_original_size`: [`number`, `number`] ; `crop_zoom`: `number`  }

#### Inherited from

[MediaConfigureSidecarItem](MediaConfigureSidecarItem.md).[edits](MediaConfigureSidecarItem.md#edits)

#### Defined in

[src/types/media.configure-sidecar.options.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L31)

___

### extra

• `Optional` **extra**: `string` \| { `source_height`: `number` ; `source_width`: `number`  }

#### Inherited from

[MediaConfigureSidecarItem](MediaConfigureSidecarItem.md).[extra](MediaConfigureSidecarItem.md#extra)

#### Defined in

[src/types/media.configure-sidecar.options.ts:30](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L30)

___

### filter\_type

• `Optional` **filter\_type**: `string`

#### Defined in

[src/types/media.configure-sidecar.options.ts:46](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L46)

___

### height

• **height**: `number`

#### Inherited from

[MediaConfigureSidecarItem](MediaConfigureSidecarItem.md).[height](MediaConfigureSidecarItem.md#height)

#### Defined in

[src/types/media.configure-sidecar.options.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L42)

___

### length

• **length**: `string`

#### Defined in

[src/types/media.configure-sidecar.options.ts:51](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L51)

___

### poster\_frame\_index

• `Optional` **poster\_frame\_index**: `string`

#### Defined in

[src/types/media.configure-sidecar.options.ts:52](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L52)

___

### source\_type

• `Optional` **source\_type**: `string`

#### Inherited from

[MediaConfigureSidecarItem](MediaConfigureSidecarItem.md).[source_type](MediaConfigureSidecarItem.md#source_type)

#### Defined in

[src/types/media.configure-sidecar.options.ts:28](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L28)

___

### timezone\_offset

• `Optional` **timezone\_offset**: `string`

#### Inherited from

[MediaConfigureSidecarItem](MediaConfigureSidecarItem.md).[timezone_offset](MediaConfigureSidecarItem.md#timezone_offset)

#### Defined in

[src/types/media.configure-sidecar.options.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L26)

___

### upload\_id

• **upload\_id**: `string`

#### Inherited from

[MediaConfigureSidecarItem](MediaConfigureSidecarItem.md).[upload_id](MediaConfigureSidecarItem.md#upload_id)

#### Defined in

[src/types/media.configure-sidecar.options.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L25)

___

### usertags

• `Optional` **usertags**: `string` \| `PostingUsertags`

#### Inherited from

[MediaConfigureSidecarItem](MediaConfigureSidecarItem.md).[usertags](MediaConfigureSidecarItem.md#usertags)

#### Defined in

[src/types/media.configure-sidecar.options.ts:29](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L29)

___

### video\_result

• `Optional` **video\_result**: `string`

#### Defined in

[src/types/media.configure-sidecar.options.ts:47](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L47)

___

### width

• **width**: `number`

#### Inherited from

[MediaConfigureSidecarItem](MediaConfigureSidecarItem.md).[width](MediaConfigureSidecarItem.md#width)

#### Defined in

[src/types/media.configure-sidecar.options.ts:41](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-sidecar.options.ts#L41)
