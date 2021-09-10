[instagram-private-api](../../README.md) / [index](../../modules/index.md) / Request

# Class: Request

[index](../../modules/index.md).Request

## Table of contents

### Constructors

- [constructor](Request.md#constructor)

### Properties

- [attemptOptions](Request.md#attemptoptions)
- [defaults](Request.md#defaults)
- [end$](Request.md#end$)
- [error$](Request.md#error$)

### Methods

- [getDefaultHeaders](Request.md#getdefaultheaders)
- [send](Request.md#send)
- [sign](Request.md#sign)
- [signature](Request.md#signature)
- [userBreadcrumb](Request.md#userbreadcrumb)

## Constructors

### constructor

• **new Request**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Defined in

[src/core/request.ts:44](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/request.ts#L44)

## Properties

### attemptOptions

• **attemptOptions**: `Partial`<`AttemptOptions`<`any`\>\>

#### Defined in

[src/core/request.ts:39](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/request.ts#L39)

___

### defaults

• **defaults**: `Partial`<`Options`\> = `{}`

#### Defined in

[src/core/request.ts:42](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/request.ts#L42)

___

### end$

• **end$**: `Subject`<`unknown`\>

#### Defined in

[src/core/request.ts:37](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/request.ts#L37)

___

### error$

• **error$**: `Subject`<[`IgClientError`](../errors/IgClientError.md)\>

#### Defined in

[src/core/request.ts:38](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/request.ts#L38)

## Methods

### getDefaultHeaders

▸ **getDefaultHeaders**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `Accept-Encoding` | `string` |
| `Accept-Language` | `string` |
| `Authorization` | `string` |
| `Connection` | `string` |
| `Host` | `string` |
| `User-Agent` | `string` |
| `X-Ads-Opt-Out` | `string` |
| `X-Bloks-Is-Layout-RTL` | `string` |
| `X-Bloks-Version-Id` | `string` |
| `X-CM-Bandwidth-KBPS` | `string` |
| `X-CM-Latency` | `string` |
| `X-FB-HTTP-Engine` | `string` |
| `X-IG-Android-ID` | `string` |
| `X-IG-App-ID` | `string` |
| `X-IG-App-Locale` | `string` |
| `X-IG-Bandwidth-Speed-KBPS` | `string` |
| `X-IG-Bandwidth-TotalBytes-B` | `string` |
| `X-IG-Bandwidth-TotalTime-MS` | `string` |
| `X-IG-Capabilities` | `string` |
| `X-IG-Connection-Speed` | `string` |
| `X-IG-Connection-Type` | `string` |
| `X-IG-Device-ID` | `string` |
| `X-IG-Device-Locale` | `string` |
| `X-IG-EU-DC-ENABLED` | `string` |
| `X-IG-Extended-CDN-Thumbnail-Cache-Busting-Value` | `string` |
| `X-IG-WWW-Claim` | `string` |
| `X-MID` | `string` |
| `X-Pigeon-Rawclienttime` | `string` |
| `X-Pigeon-Session-Id` | `string` |

#### Defined in

[src/core/request.ts:183](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/request.ts#L183)

___

### send

▸ **send**<`T`\>(`userOptions`, `onlyCheckHttpStatus?`): `Promise`<[`IgResponse`](../../modules/types.md#igresponse)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOptions` | `Options` |
| `onlyCheckHttpStatus?` | `boolean` |

#### Returns

`Promise`<[`IgResponse`](../../modules/types.md#igresponse)<`T`\>\>

#### Defined in

[src/core/request.ts:59](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/request.ts#L59)

___

### sign

▸ **sign**(`payload`): `SignedPost`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Payload` |

#### Returns

`SignedPost`

#### Defined in

[src/core/request.ts:115](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/request.ts#L115)

___

### signature

▸ **signature**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[src/core/request.ts:109](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/request.ts#L109)

___

### userBreadcrumb

▸ **userBreadcrumb**(`size`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`string`

#### Defined in

[src/core/request.ts:124](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/request.ts#L124)
