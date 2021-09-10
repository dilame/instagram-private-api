[instagram-private-api](../../README.md) / [types](../../modules/types.md) / MediaConfigureToIgtvOptions

# Interface: MediaConfigureToIgtvOptions

[types](../../modules/types.md).MediaConfigureToIgtvOptions

## Table of contents

### Properties

- [audio\_muted](MediaConfigureToIgtvOptions.md#audio_muted)
- [caption](MediaConfigureToIgtvOptions.md#caption)
- [clips](MediaConfigureToIgtvOptions.md#clips)
- [date\_time\_original](MediaConfigureToIgtvOptions.md#date_time_original)
- [device](MediaConfigureToIgtvOptions.md#device)
- [extra](MediaConfigureToIgtvOptions.md#extra)
- [feed\_preview\_crop](MediaConfigureToIgtvOptions.md#feed_preview_crop)
- [filter\_type](MediaConfigureToIgtvOptions.md#filter_type)
- [igtv\_share\_preview\_to\_feed](MediaConfigureToIgtvOptions.md#igtv_share_preview_to_feed)
- [length](MediaConfigureToIgtvOptions.md#length)
- [media\_folder](MediaConfigureToIgtvOptions.md#media_folder)
- [poster\_frame\_index](MediaConfigureToIgtvOptions.md#poster_frame_index)
- [retryContext](MediaConfigureToIgtvOptions.md#retrycontext)
- [source\_type](MediaConfigureToIgtvOptions.md#source_type)
- [timezone\_offset](MediaConfigureToIgtvOptions.md#timezone_offset)
- [title](MediaConfigureToIgtvOptions.md#title)
- [upload\_id](MediaConfigureToIgtvOptions.md#upload_id)

## Properties

### audio\_muted

• `Optional` **audio\_muted**: `boolean`

#### Defined in

[src/types/media.configure-to-igtv.options.ts:20](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L20)

___

### caption

• `Optional` **caption**: `string`

#### Defined in

[src/types/media.configure-to-igtv.options.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L6)

___

### clips

• `Optional` **clips**: { `length`: `number` ; `source_type`: ``"4"`` \| ``"3"``  }[]

#### Defined in

[src/types/media.configure-to-igtv.options.ts:19](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L19)

___

### date\_time\_original

• `Optional` **date\_time\_original**: `string`

#### Defined in

[src/types/media.configure-to-igtv.options.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L17)

___

### device

• `Optional` **device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `android_release` | `string` |
| `android_version` | `number` |
| `manufacturer` | `string` |
| `model` | `string` |

#### Defined in

[src/types/media.configure-to-igtv.options.ts:26](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L26)

___

### extra

• **extra**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `source_height` | `number` |
| `source_width` | `number` |

#### Defined in

[src/types/media.configure-to-igtv.options.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L5)

___

### feed\_preview\_crop

• `Optional` **feed\_preview\_crop**: `string` \| { `crop_bottom`: `number` ; `crop_left`: `number` ; `crop_right`: `number` ; `crop_top`: `number`  }

#### Defined in

[src/types/media.configure-to-igtv.options.ts:8](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L8)

___

### filter\_type

• `Optional` **filter\_type**: `string`

#### Defined in

[src/types/media.configure-to-igtv.options.ts:22](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L22)

___

### igtv\_share\_preview\_to\_feed

• `Optional` **igtv\_share\_preview\_to\_feed**: ``"1"`` \| ``"0"``

#### Defined in

[src/types/media.configure-to-igtv.options.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L18)

___

### length

• **length**: `number`

#### Defined in

[src/types/media.configure-to-igtv.options.ts:4](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L4)

___

### media\_folder

• `Optional` **media\_folder**: `string`

#### Defined in

[src/types/media.configure-to-igtv.options.ts:24](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L24)

___

### poster\_frame\_index

• `Optional` **poster\_frame\_index**: `number`

#### Defined in

[src/types/media.configure-to-igtv.options.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L21)

___

### retryContext

• `Optional` **retryContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `num_reupload` | `number` |
| `num_step_auto_retry` | `number` |
| `num_step_manual_retry` | `number` |

#### Defined in

[src/types/media.configure-to-igtv.options.ts:33](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L33)

___

### source\_type

• `Optional` **source\_type**: ``"4"`` \| ``"3"``

#### Defined in

[src/types/media.configure-to-igtv.options.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L25)

___

### timezone\_offset

• `Optional` **timezone\_offset**: `string`

#### Defined in

[src/types/media.configure-to-igtv.options.ts:23](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L23)

___

### title

• **title**: `string`

#### Defined in

[src/types/media.configure-to-igtv.options.ts:3](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L3)

___

### upload\_id

• **upload\_id**: `string`

#### Defined in

[src/types/media.configure-to-igtv.options.ts:2](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/types/media.configure-to-igtv.options.ts#L2)
