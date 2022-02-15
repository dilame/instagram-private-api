[instagram-private-api](../../README.md) / [index](../../modules/index.md) / State

# Class: State

[index](../../modules/index.md).State

## Table of contents

### Constructors

- [constructor](State.md#constructor)

### Properties

- [adid](State.md#adid)
- [adsOptOut](State.md#adsoptout)
- [authorization](State.md#authorization)
- [build](State.md#build)
- [capabilitiesHeader](State.md#capabilitiesheader)
- [challenge](State.md#challenge)
- [checkpoint](State.md#checkpoint)
- [clientSessionIdLifetime](State.md#clientsessionidlifetime)
- [connectionTypeHeader](State.md#connectiontypeheader)
- [constants](State.md#constants)
- [cookieJar](State.md#cookiejar)
- [cookieStore](State.md#cookiestore)
- [deviceId](State.md#deviceid)
- [deviceString](State.md#devicestring)
- [euDCEnabled](State.md#eudcenabled)
- [igWWWClaim](State.md#igwwwclaim)
- [isLayoutRTL](State.md#islayoutrtl)
- [language](State.md#language)
- [passwordEncryptionKeyId](State.md#passwordencryptionkeyid)
- [passwordEncryptionPubKey](State.md#passwordencryptionpubkey)
- [phoneId](State.md#phoneid)
- [pigeonSessionIdLifetime](State.md#pigeonsessionidlifetime)
- [proxyUrl](State.md#proxyurl)
- [radioType](State.md#radiotype)
- [supportedCapabilities](State.md#supportedcapabilities)
- [thumbnailCacheBustingValue](State.md#thumbnailcachebustingvalue)
- [timezoneOffset](State.md#timezoneoffset)
- [uuid](State.md#uuid)

### Accessors

- [appUserAgent](State.md#appuseragent)
- [appVersion](State.md#appversion)
- [appVersionCode](State.md#appversioncode)
- [batteryLevel](State.md#batterylevel)
- [bloksVersionId](State.md#bloksversionid)
- [challengeUrl](State.md#challengeurl)
- [clientSessionId](State.md#clientsessionid)
- [cookieCsrfToken](State.md#cookiecsrftoken)
- [cookieUserId](State.md#cookieuserid)
- [cookieUsername](State.md#cookieusername)
- [devicePayload](State.md#devicepayload)
- [experiments](State.md#experiments)
- [fbAnalyticsApplicationId](State.md#fbanalyticsapplicationid)
- [fbOrcaApplicationId](State.md#fborcaapplicationid)
- [fbOtaFields](State.md#fbotafields)
- [isCharging](State.md#ischarging)
- [loginExperiments](State.md#loginexperiments)
- [pigeonSessionId](State.md#pigeonsessionid)
- [signatureKey](State.md#signaturekey)
- [signatureVersion](State.md#signatureversion)
- [userBreadcrumbKey](State.md#userbreadcrumbkey)
- [webUserAgent](State.md#webuseragent)

### Methods

- [deserialize](State.md#deserialize)
- [deserializeCookieJar](State.md#deserializecookiejar)
- [extractCookie](State.md#extractcookie)
- [extractCookieValue](State.md#extractcookievalue)
- [extractUserId](State.md#extractuserid)
- [generateDevice](State.md#generatedevice)
- [isExperimentEnabled](State.md#isexperimentenabled)
- [serialize](State.md#serialize)
- [serializeCookieJar](State.md#serializecookiejar)

## Constructors

### constructor

• **new State**()

## Properties

### adid

• **adid**: `string`

Google Play Advertising ID.

The advertising ID is a unique ID for advertising, provided by Google
Play services for use in Google Play apps. Used by Instagram.

**`see`** https://support.google.com/googleplay/android-developer/answer/6048248?hl=en

#### Defined in

[src/core/state.ts:89](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L89)

___

### adsOptOut

• **adsOptOut**: `boolean` = `false`

#### Defined in

[src/core/state.ts:71](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L71)

___

### authorization

• `Optional` **authorization**: `string`

#### Defined in

[src/core/state.ts:74](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L74)

___

### build

• **build**: `string`

#### Defined in

[src/core/state.ts:78](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L78)

___

### capabilitiesHeader

• **capabilitiesHeader**: `string` = `'3brTvwE='`

#### Defined in

[src/core/state.ts:67](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L67)

___

### challenge

• **challenge**: [`ChallengeStateResponse`](../../interfaces/responses/ChallengeStateResponse.md) = `null`

#### Defined in

[src/core/state.ts:100](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L100)

___

### checkpoint

• **checkpoint**: [`CheckpointResponse`](../../interfaces/responses/CheckpointResponse.md) = `null`

#### Defined in

[src/core/state.ts:98](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L98)

___

### clientSessionIdLifetime

• **clientSessionIdLifetime**: `number` = `1200000`

#### Defined in

[src/core/state.ts:101](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L101)

___

### connectionTypeHeader

• **connectionTypeHeader**: `string` = `'WIFI'`

#### Defined in

[src/core/state.ts:68](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L68)

___

### constants

• **constants**: `__module`

#### Defined in

[src/core/state.ts:62](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L62)

___

### cookieJar

• **cookieJar**: `CookieJar`

#### Defined in

[src/core/state.ts:96](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L96)

___

### cookieStore

• **cookieStore**: `MemoryCookieStore`

#### Defined in

[src/core/state.ts:94](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L94)

___

### deviceId

• **deviceId**: `string`

#### Defined in

[src/core/state.ts:90](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L90)

___

### deviceString

• **deviceString**: `string`

#### Defined in

[src/core/state.ts:77](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L77)

___

### euDCEnabled

• `Optional` **euDCEnabled**: `boolean`

#### Defined in

[src/core/state.ts:70](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L70)

___

### igWWWClaim

• `Optional` **igWWWClaim**: `string`

#### Defined in

[src/core/state.ts:73](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L73)

___

### isLayoutRTL

• **isLayoutRTL**: `boolean` = `false`

#### Defined in

[src/core/state.ts:69](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L69)

___

### language

• **language**: `string` = `'en_US'`

#### Defined in

[src/core/state.ts:64](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L64)

___

### passwordEncryptionKeyId

• `Optional` **passwordEncryptionKeyId**: `string` \| `number`

#### Defined in

[src/core/state.ts:76](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L76)

___

### passwordEncryptionPubKey

• `Optional` **passwordEncryptionPubKey**: `string`

#### Defined in

[src/core/state.ts:75](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L75)

___

### phoneId

• **phoneId**: `string`

#### Defined in

[src/core/state.ts:80](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L80)

___

### pigeonSessionIdLifetime

• **pigeonSessionIdLifetime**: `number` = `1200000`

#### Defined in

[src/core/state.ts:102](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L102)

___

### proxyUrl

• **proxyUrl**: `string`

#### Defined in

[src/core/state.ts:92](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L92)

___

### radioType

• **radioType**: `string` = `'wifi-none'`

#### Defined in

[src/core/state.ts:66](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L66)

___

### supportedCapabilities

• **supportedCapabilities**: ({ `name`: `string` = "SUPPORTED\_SDK\_VERSIONS"; `value`: `string` = "13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0,45.0,46.0,47.0,48.0,49.0,50.0,51.0,52.0,53.0,54.0,55.0,56.0,57.0,58.0,59.0,60.0,61.0,62.0,63.0,64.0,65.0,66.0" } \| { `name`: `string` = "FACE\_TRACKER\_VERSION"; `value`: `number` = 12 })[]

#### Defined in

[src/core/state.ts:63](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L63)

___

### thumbnailCacheBustingValue

• **thumbnailCacheBustingValue**: `number` = `1000`

#### Defined in

[src/core/state.ts:72](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L72)

___

### timezoneOffset

• **timezoneOffset**: `string`

#### Defined in

[src/core/state.ts:65](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L65)

___

### uuid

• **uuid**: `string`

#### Defined in

[src/core/state.ts:79](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L79)

## Accessors

### appUserAgent

• `get` **appUserAgent**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:120](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L120)

___

### appVersion

• `get` **appVersion**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:29](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L29)

___

### appVersionCode

• `get` **appVersionCode**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:33](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L33)

___

### batteryLevel

• `get` **batteryLevel**(): `number`

#### Returns

`number`

#### Defined in

[src/core/state.ts:141](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L141)

___

### bloksVersionId

• `get` **bloksVersionId**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:57](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L57)

___

### challengeUrl

• `get` **challengeUrl**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:152](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L152)

___

### clientSessionId

• `get` **clientSessionId**(): `string`

The current application session ID.

This is a temporary ID which changes in the official app every time the
user closes and re-opens the Instagram application or switches account.

We will update it once an hour

#### Returns

`string`

#### Defined in

[src/core/state.ts:112](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L112)

___

### cookieCsrfToken

• `get` **cookieCsrfToken**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:159](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L159)

___

### cookieUserId

• `get` **cookieUserId**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:168](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L168)

___

### cookieUsername

• `get` **cookieUsername**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:172](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L172)

___

### devicePayload

• `get` **devicePayload**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `android_release` | `string` |
| `android_version` | `string` |
| `manufacturer` | `string` |
| `model` | `string` |

#### Defined in

[src/core/state.ts:128](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L128)

___

### experiments

• `get` **experiments**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:53](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L53)

___

### fbAnalyticsApplicationId

• `get` **fbAnalyticsApplicationId**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:37](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L37)

___

### fbOrcaApplicationId

• `get` **fbOrcaApplicationId**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:45](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L45)

___

### fbOtaFields

• `get` **fbOtaFields**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:41](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L41)

___

### isCharging

• `get` **isCharging**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/state.ts:147](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L147)

___

### loginExperiments

• `get` **loginExperiments**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:49](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L49)

___

### pigeonSessionId

• `get` **pigeonSessionId**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:116](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L116)

___

### signatureKey

• `get` **signatureKey**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:17](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L17)

___

### signatureVersion

• `get` **signatureVersion**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L21)

___

### userBreadcrumbKey

• `get` **userBreadcrumbKey**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L25)

___

### webUserAgent

• `get` **webUserAgent**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:124](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L124)

## Methods

### deserialize

▸ **deserialize**(`state`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/state.ts:224](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L224)

___

### deserializeCookieJar

▸ **deserializeCookieJar**(`cookies`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cookies` | `string` \| `Serialized` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/state.ts:205](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L205)

___

### extractCookie

▸ **extractCookie**(`key`): `Cookie`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Cookie`

#### Defined in

[src/core/state.ts:180](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L180)

___

### extractCookieValue

▸ **extractCookieValue**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[src/core/state.ts:185](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L185)

___

### extractUserId

▸ **extractUserId**(): `string`

#### Returns

`string`

#### Defined in

[src/core/state.ts:194](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L194)

___

### generateDevice

▸ **generateDevice**(`seed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `string` |

#### Returns

`void`

#### Defined in

[src/core/state.ts:245](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L245)

___

### isExperimentEnabled

▸ **isExperimentEnabled**(`experiment`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `experiment` | `any` |

#### Returns

`boolean`

#### Defined in

[src/core/state.ts:176](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L176)

___

### serialize

▸ **serialize**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/core/state.ts:213](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L213)

___

### serializeCookieJar

▸ **serializeCookieJar**(): `Promise`<`Serialized`\>

#### Returns

`Promise`<`Serialized`\>

#### Defined in

[src/core/state.ts:209](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/state.ts#L209)
