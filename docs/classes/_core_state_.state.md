> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["core/state"](../modules/_core_state_.md) / [State](_core_state_.state.md) /

# Class: State

## Hierarchy

- **State**

## Index

### Properties

- [adid](_core_state_.state.md#adid)
- [appVersion](_core_state_.state.md#appversion)
- [appVersionCode](_core_state_.state.md#appversioncode)
- [build](_core_state_.state.md#build)
- [capabilitiesHeader](_core_state_.state.md#capabilitiesheader)
- [challenge](_core_state_.state.md#challenge)
- [checkpoint](_core_state_.state.md#checkpoint)
- [clientSessionIdLifetime](_core_state_.state.md#clientsessionidlifetime)
- [connectionTypeHeader](_core_state_.state.md#connectiontypeheader)
- [cookieJar](_core_state_.state.md#cookiejar)
- [cookieStore](_core_state_.state.md#cookiestore)
- [deviceId](_core_state_.state.md#deviceid)
- [deviceString](_core_state_.state.md#devicestring)
- [experiments](_core_state_.state.md#experiments)
- [fbAnalyticsApplicationId](_core_state_.state.md#fbanalyticsapplicationid)
- [fbOrcaApplicationId](_core_state_.state.md#fborcaapplicationid)
- [fbOtaFields](_core_state_.state.md#fbotafields)
- [language](_core_state_.state.md#language)
- [loginExperiments](_core_state_.state.md#loginexperiments)
- [phoneId](_core_state_.state.md#phoneid)
- [pigeonSessionIdLifetime](_core_state_.state.md#pigeonsessionidlifetime)
- [proxyUrl](_core_state_.state.md#proxyurl)
- [radioType](_core_state_.state.md#radiotype)
- [signatureKey](_core_state_.state.md#signaturekey)
- [signatureVersion](_core_state_.state.md#signatureversion)
- [supportedCapabilities](_core_state_.state.md#supportedcapabilities)
- [timezoneOffset](_core_state_.state.md#timezoneoffset)
- [userBreadcrumbKey](_core_state_.state.md#userbreadcrumbkey)
- [uuid](_core_state_.state.md#uuid)

### Accessors

- [appUserAgent](_core_state_.state.md#appuseragent)
- [batteryLevel](_core_state_.state.md#batterylevel)
- [challengeUrl](_core_state_.state.md#challengeurl)
- [clientSessionId](_core_state_.state.md#clientsessionid)
- [cookieCsrfToken](_core_state_.state.md#cookiecsrftoken)
- [cookieUserId](_core_state_.state.md#cookieuserid)
- [cookieUsername](_core_state_.state.md#cookieusername)
- [devicePayload](_core_state_.state.md#devicepayload)
- [isCharging](_core_state_.state.md#ischarging)
- [pigeonSessionId](_core_state_.state.md#pigeonsessionid)
- [webUserAgent](_core_state_.state.md#webuseragent)

### Methods

- [deserializeCookieJar](_core_state_.state.md#deserializecookiejar)
- [extractCookie](_core_state_.state.md#extractcookie)
- [extractCookieValue](_core_state_.state.md#extractcookievalue)
- [extractUserId](_core_state_.state.md#extractuserid)
- [generateDevice](_core_state_.state.md#generatedevice)
- [isExperimentEnabled](_core_state_.state.md#isexperimentenabled)
- [serializeCookieJar](_core_state_.state.md#serializecookiejar)

## Properties

### adid

• **adid**: _string_

_Defined in [core/state.ts:54](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L54)_

Google Play Advertising ID.

The advertising ID is a unique ID for advertising, provided by Google
Play services for use in Google Play apps. Used by Instagram.

**`see`** https://support.google.com/googleplay/android-developer/answer/6048248?hl=en

---

### appVersion

• **appVersion**: _string_ = APP_VERSION

_Defined in [core/state.ts:29](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L29)_

---

### appVersionCode

• **appVersionCode**: _string_ = APP_VERSION_CODE

_Defined in [core/state.ts:30](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L30)_

---

### build

• **build**: _string_

_Defined in [core/state.ts:43](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L43)_

---

### capabilitiesHeader

• **capabilitiesHeader**: _string_ = "3brTvw=="

_Defined in [core/state.ts:40](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L40)_

---

### challenge

• **challenge**: _[ChallengeStateResponse](../interfaces/\_responses_challenge_state_response_.challengestateresponse.md) | null\_ = null

_Defined in [core/state.ts:60](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L60)_

---

### checkpoint

• **checkpoint**: _[CheckpointResponse](../interfaces/\_responses_checkpoint_response_.checkpointresponse.md) | null\_ = null

_Defined in [core/state.ts:59](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L59)_

---

### clientSessionIdLifetime

• **clientSessionIdLifetime**: _number_ = 1200000

_Defined in [core/state.ts:61](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L61)_

---

### connectionTypeHeader

• **connectionTypeHeader**: _string_ = "WIFI"

_Defined in [core/state.ts:41](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L41)_

---

### cookieJar

• **cookieJar**: _any_ = jar(this.cookieStore)

_Defined in [core/state.ts:58](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L58)_

---

### cookieStore

• **cookieStore**: _`MemoryCookieStore`_ = new MemoryCookieStore()

_Defined in [core/state.ts:57](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L57)_

---

### deviceId

• **deviceId**: _string_

_Defined in [core/state.ts:55](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L55)_

---

### deviceString

• **deviceString**: _string_

_Defined in [core/state.ts:42](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L42)_

---

### experiments

• **experiments**: _string_ = EXPERIMENTS

_Defined in [core/state.ts:35](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L35)_

---

### fbAnalyticsApplicationId

• **fbAnalyticsApplicationId**: _string_ = FACEBOOK_ANALYTICS_APPLICATION_ID

_Defined in [core/state.ts:31](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L31)_

---

### fbOrcaApplicationId

• **fbOrcaApplicationId**: _string_ = FACEBOOK_ORCA_APPLICATION_ID

_Defined in [core/state.ts:33](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L33)_

---

### fbOtaFields

• **fbOtaFields**: _string_ = FACEBOOK_OTA_FIELDS

_Defined in [core/state.ts:32](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L32)_

---

### language

• **language**: _string_ = "en_US"

_Defined in [core/state.ts:37](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L37)_

---

### loginExperiments

• **loginExperiments**: _string_ = LOGIN_EXPERIMENTS

_Defined in [core/state.ts:34](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L34)_

---

### phoneId

• **phoneId**: _string_

_Defined in [core/state.ts:45](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L45)_

---

### pigeonSessionIdLifetime

• **pigeonSessionIdLifetime**: _number_ = 1200000

_Defined in [core/state.ts:62](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L62)_

---

### proxyUrl

• **proxyUrl**: _string_

_Defined in [core/state.ts:56](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L56)_

---

### radioType

• **radioType**: _string_ = "wifi-none"

_Defined in [core/state.ts:39](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L39)_

---

### signatureKey

• **signatureKey**: _string_ = SIGNATURE_KEY

_Defined in [core/state.ts:26](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L26)_

---

### signatureVersion

• **signatureVersion**: _string_ = SIGNATURE_VERSION

_Defined in [core/state.ts:27](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L27)_

---

### supportedCapabilities

• **supportedCapabilities**: _any_ = supportedCapabilities

_Defined in [core/state.ts:36](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L36)_

---

### timezoneOffset

• **timezoneOffset**: _string_ = String(new Date().getTimezoneOffset() \* -60)

_Defined in [core/state.ts:38](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L38)_

---

### userBreadcrumbKey

• **userBreadcrumbKey**: _string_ = BREADCRUMB_KEY

_Defined in [core/state.ts:28](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L28)_

---

### uuid

• **uuid**: _string_

_Defined in [core/state.ts:44](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L44)_

## Accessors

### appUserAgent

• **get appUserAgent**(): _string_

_Defined in [core/state.ts:80](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L80)_

**Returns:** _string_

---

### batteryLevel

• **get batteryLevel**(): _number_

_Defined in [core/state.ts:105](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L105)_

**Returns:** _number_

---

### challengeUrl

• **get challengeUrl**(): _string_

_Defined in [core/state.ts:116](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L116)_

**Returns:** _string_

---

### clientSessionId

• **get clientSessionId**(): _string_

_Defined in [core/state.ts:72](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L72)_

The current application session ID.

This is a temporary ID which changes in the official app every time the
user closes and re-opens the Instagram application or switches account.

We will update it once an hour

**Returns:** _string_

---

### cookieCsrfToken

• **get cookieCsrfToken**(): _string_

_Defined in [core/state.ts:123](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L123)_

**Returns:** _string_

---

### cookieUserId

• **get cookieUserId**(): _string_

_Defined in [core/state.ts:131](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L131)_

**Returns:** _string_

---

### cookieUsername

• **get cookieUsername**(): _string_

_Defined in [core/state.ts:135](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L135)_

**Returns:** _string_

---

### devicePayload

• **get devicePayload**(): _object_

_Defined in [core/state.ts:92](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L92)_

**Returns:** _object_

---

### isCharging

• **get isCharging**(): _boolean_

_Defined in [core/state.ts:111](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L111)_

**Returns:** _boolean_

---

### pigeonSessionId

• **get pigeonSessionId**(): _string_

_Defined in [core/state.ts:76](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L76)_

**Returns:** _string_

---

### webUserAgent

• **get webUserAgent**(): _string_

_Defined in [core/state.ts:84](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L84)_

**Returns:** _string_

## Methods

### deserializeCookieJar

▸ **deserializeCookieJar**(`cookies`: string): _`Promise<void>`_

_Defined in [core/state.ts:167](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L167)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `cookies` | string |

**Returns:** _`Promise<void>`_

---

### extractCookie

▸ **extractCookie**(`key`: string): _`Cookie` | null_

_Defined in [core/state.ts:143](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L143)_

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `key` | string |

**Returns:** _`Cookie` | null_

---

### extractCookieValue

▸ **extractCookieValue**(`key`: string): _string_

_Defined in [core/state.ts:148](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L148)_

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `key` | string |

**Returns:** _string_

---

### extractUserId

▸ **extractUserId**(): _string_

_Defined in [core/state.ts:156](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L156)_

**Returns:** _string_

---

### generateDevice

▸ **generateDevice**(`seed`: string): _void_

_Defined in [core/state.ts:175](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L175)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `seed` | string |

**Returns:** _void_

---

### isExperimentEnabled

▸ **isExperimentEnabled**(`experiment`: any): _boolean_

_Defined in [core/state.ts:139](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L139)_

**Parameters:**

| Name         | Type |
| ------------ | ---- |
| `experiment` | any  |

**Returns:** _boolean_

---

### serializeCookieJar

▸ **serializeCookieJar**(): _`Promise<Serialized>`_

_Defined in [core/state.ts:171](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/state.ts#L171)_

**Returns:** _`Promise<Serialized>`_
