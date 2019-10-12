> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["core/state"](../modules/_core_state_.md) / [State](_core_state_.state.md) /

# Class: State

## Hierarchy

* **State**

## Index

### Properties

* [adid](_core_state_.state.md#adid)
* [appVersion](_core_state_.state.md#appversion)
* [appVersionCode](_core_state_.state.md#appversioncode)
* [build](_core_state_.state.md#build)
* [capabilitiesHeader](_core_state_.state.md#capabilitiesheader)
* [challenge](_core_state_.state.md#challenge)
* [checkpoint](_core_state_.state.md#checkpoint)
* [clientSessionIdLifetime](_core_state_.state.md#clientsessionidlifetime)
* [connectionTypeHeader](_core_state_.state.md#connectiontypeheader)
* [cookieJar](_core_state_.state.md#cookiejar)
* [cookieStore](_core_state_.state.md#cookiestore)
* [deviceId](_core_state_.state.md#deviceid)
* [deviceString](_core_state_.state.md#devicestring)
* [experiments](_core_state_.state.md#experiments)
* [fbAnalyticsApplicationId](_core_state_.state.md#fbanalyticsapplicationid)
* [fbOrcaApplicationId](_core_state_.state.md#fborcaapplicationid)
* [fbOtaFields](_core_state_.state.md#fbotafields)
* [language](_core_state_.state.md#language)
* [loginExperiments](_core_state_.state.md#loginexperiments)
* [phoneId](_core_state_.state.md#phoneid)
* [pigeonSessionIdLifetime](_core_state_.state.md#pigeonsessionidlifetime)
* [proxyUrl](_core_state_.state.md#proxyurl)
* [radioType](_core_state_.state.md#radiotype)
* [signatureKey](_core_state_.state.md#signaturekey)
* [signatureVersion](_core_state_.state.md#signatureversion)
* [supportedCapabilities](_core_state_.state.md#supportedcapabilities)
* [timezoneOffset](_core_state_.state.md#timezoneoffset)
* [userBreadcrumbKey](_core_state_.state.md#userbreadcrumbkey)
* [uuid](_core_state_.state.md#uuid)

### Accessors

* [appUserAgent](_core_state_.state.md#appuseragent)
* [batteryLevel](_core_state_.state.md#batterylevel)
* [challengeUrl](_core_state_.state.md#challengeurl)
* [clientSessionId](_core_state_.state.md#clientsessionid)
* [cookieCsrfToken](_core_state_.state.md#cookiecsrftoken)
* [cookieUserId](_core_state_.state.md#cookieuserid)
* [cookieUsername](_core_state_.state.md#cookieusername)
* [devicePayload](_core_state_.state.md#devicepayload)
* [isCharging](_core_state_.state.md#ischarging)
* [pigeonSessionId](_core_state_.state.md#pigeonsessionid)
* [webUserAgent](_core_state_.state.md#webuseragent)

### Methods

* [deserializeCookieJar](_core_state_.state.md#deserializecookiejar)
* [extractCookie](_core_state_.state.md#extractcookie)
* [extractCookieValue](_core_state_.state.md#extractcookievalue)
* [extractUserId](_core_state_.state.md#extractuserid)
* [generateDevice](_core_state_.state.md#generatedevice)
* [isExperimentEnabled](_core_state_.state.md#isexperimentenabled)
* [serializeCookieJar](_core_state_.state.md#serializecookiejar)

## Properties

###  adid

• **adid**: *string*

*Defined in [core/state.ts:54](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L54)*

Google Play Advertising ID.

The advertising ID is a unique ID for advertising, provided by Google
Play services for use in Google Play apps. Used by Instagram.

**`see`** https://support.google.com/googleplay/android-developer/answer/6048248?hl=en

___

###  appVersion

• **appVersion**: *string* =  APP_VERSION

*Defined in [core/state.ts:29](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L29)*

___

###  appVersionCode

• **appVersionCode**: *string* =  APP_VERSION_CODE

*Defined in [core/state.ts:30](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L30)*

___

###  build

• **build**: *string*

*Defined in [core/state.ts:43](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L43)*

___

###  capabilitiesHeader

• **capabilitiesHeader**: *string* = "3brTvw=="

*Defined in [core/state.ts:40](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L40)*

___

###  challenge

• **challenge**: *[ChallengeStateResponse](../interfaces/_responses_challenge_state_response_.challengestateresponse.md) | null* =  null

*Defined in [core/state.ts:60](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L60)*

___

###  checkpoint

• **checkpoint**: *[CheckpointResponse](../interfaces/_responses_checkpoint_response_.checkpointresponse.md) | null* =  null

*Defined in [core/state.ts:59](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L59)*

___

###  clientSessionIdLifetime

• **clientSessionIdLifetime**: *number* = 1200000

*Defined in [core/state.ts:61](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L61)*

___

###  connectionTypeHeader

• **connectionTypeHeader**: *string* = "WIFI"

*Defined in [core/state.ts:41](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L41)*

___

###  cookieJar

• **cookieJar**: *`CookieJar`* =  jar(this.cookieStore)

*Defined in [core/state.ts:58](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L58)*

___

###  cookieStore

• **cookieStore**: *`MemoryCookieStore`* =  new MemoryCookieStore()

*Defined in [core/state.ts:57](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L57)*

___

###  deviceId

• **deviceId**: *string*

*Defined in [core/state.ts:55](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L55)*

___

###  deviceString

• **deviceString**: *string*

*Defined in [core/state.ts:42](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L42)*

___

###  experiments

• **experiments**: *string* =  EXPERIMENTS

*Defined in [core/state.ts:35](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L35)*

___

###  fbAnalyticsApplicationId

• **fbAnalyticsApplicationId**: *string* =  FACEBOOK_ANALYTICS_APPLICATION_ID

*Defined in [core/state.ts:31](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L31)*

___

###  fbOrcaApplicationId

• **fbOrcaApplicationId**: *string* =  FACEBOOK_ORCA_APPLICATION_ID

*Defined in [core/state.ts:33](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L33)*

___

###  fbOtaFields

• **fbOtaFields**: *string* =  FACEBOOK_OTA_FIELDS

*Defined in [core/state.ts:32](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L32)*

___

###  language

• **language**: *string* = "en_US"

*Defined in [core/state.ts:37](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L37)*

___

###  loginExperiments

• **loginExperiments**: *string* =  LOGIN_EXPERIMENTS

*Defined in [core/state.ts:34](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L34)*

___

###  phoneId

• **phoneId**: *string*

*Defined in [core/state.ts:45](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L45)*

___

###  pigeonSessionIdLifetime

• **pigeonSessionIdLifetime**: *number* = 1200000

*Defined in [core/state.ts:62](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L62)*

___

###  proxyUrl

• **proxyUrl**: *string*

*Defined in [core/state.ts:56](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L56)*

___

###  radioType

• **radioType**: *string* = "wifi-none"

*Defined in [core/state.ts:39](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L39)*

___

###  signatureKey

• **signatureKey**: *string* =  SIGNATURE_KEY

*Defined in [core/state.ts:26](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L26)*

___

###  signatureVersion

• **signatureVersion**: *string* =  SIGNATURE_VERSION

*Defined in [core/state.ts:27](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L27)*

___

###  supportedCapabilities

• **supportedCapabilities**: *object | object[]* =  supportedCapabilities

*Defined in [core/state.ts:36](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L36)*

___

###  timezoneOffset

• **timezoneOffset**: *string* =  String(new Date().getTimezoneOffset() * -60)

*Defined in [core/state.ts:38](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L38)*

___

###  userBreadcrumbKey

• **userBreadcrumbKey**: *string* =  BREADCRUMB_KEY

*Defined in [core/state.ts:28](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L28)*

___

###  uuid

• **uuid**: *string*

*Defined in [core/state.ts:44](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L44)*

## Accessors

###  appUserAgent

• **get appUserAgent**(): *string*

*Defined in [core/state.ts:80](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L80)*

**Returns:** *string*

___

###  batteryLevel

• **get batteryLevel**(): *number*

*Defined in [core/state.ts:105](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L105)*

**Returns:** *number*

___

###  challengeUrl

• **get challengeUrl**(): *string*

*Defined in [core/state.ts:116](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L116)*

**Returns:** *string*

___

###  clientSessionId

• **get clientSessionId**(): *string*

*Defined in [core/state.ts:72](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L72)*

The current application session ID.

This is a temporary ID which changes in the official app every time the
user closes and re-opens the Instagram application or switches account.

We will update it once an hour

**Returns:** *string*

___

###  cookieCsrfToken

• **get cookieCsrfToken**(): *string*

*Defined in [core/state.ts:123](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L123)*

**Returns:** *string*

___

###  cookieUserId

• **get cookieUserId**(): *string*

*Defined in [core/state.ts:131](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L131)*

**Returns:** *string*

___

###  cookieUsername

• **get cookieUsername**(): *string*

*Defined in [core/state.ts:135](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L135)*

**Returns:** *string*

___

###  devicePayload

• **get devicePayload**(): *object*

*Defined in [core/state.ts:92](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L92)*

**Returns:** *object*

___

###  isCharging

• **get isCharging**(): *boolean*

*Defined in [core/state.ts:111](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L111)*

**Returns:** *boolean*

___

###  pigeonSessionId

• **get pigeonSessionId**(): *string*

*Defined in [core/state.ts:76](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L76)*

**Returns:** *string*

___

###  webUserAgent

• **get webUserAgent**(): *string*

*Defined in [core/state.ts:84](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L84)*

**Returns:** *string*

## Methods

###  deserializeCookieJar

▸ **deserializeCookieJar**(`cookies`: string): *`Promise<void>`*

*Defined in [core/state.ts:167](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`cookies` | string |

**Returns:** *`Promise<void>`*

___

###  extractCookie

▸ **extractCookie**(`key`: string): *`Cookie` | null*

*Defined in [core/state.ts:143](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *`Cookie` | null*

___

###  extractCookieValue

▸ **extractCookieValue**(`key`: string): *string*

*Defined in [core/state.ts:148](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*

___

###  extractUserId

▸ **extractUserId**(): *string*

*Defined in [core/state.ts:156](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L156)*

**Returns:** *string*

___

###  generateDevice

▸ **generateDevice**(`seed`: string): *void*

*Defined in [core/state.ts:175](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | string |

**Returns:** *void*

___

###  isExperimentEnabled

▸ **isExperimentEnabled**(`experiment`: any): *boolean*

*Defined in [core/state.ts:139](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`experiment` | any |

**Returns:** *boolean*

___

###  serializeCookieJar

▸ **serializeCookieJar**(): *`Promise<Serialized>`*

*Defined in [core/state.ts:171](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/state.ts#L171)*

**Returns:** *`Promise<Serialized>`*