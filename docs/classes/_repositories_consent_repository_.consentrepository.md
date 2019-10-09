> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/consent.repository"](../modules/_repositories_consent_repository_.md) / [ConsentRepository](_repositories_consent_repository_.consentrepository.md) /

# Class: ConsentRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **ConsentRepository**

## Index

### Constructors

* [constructor](_repositories_consent_repository_.consentrepository.md#constructor)

### Methods

* [auto](_repositories_consent_repository_.consentrepository.md#auto)
* [existingUserFlow](_repositories_consent_repository_.consentrepository.md#existinguserflow)
* [existingUserFlowDob](_repositories_consent_repository_.consentrepository.md#existinguserflowdob)
* [existingUserFlowIntro](_repositories_consent_repository_.consentrepository.md#existinguserflowintro)
* [existingUserFlowTosAndTwoAgeButton](_repositories_consent_repository_.consentrepository.md#existinguserflowtosandtwoagebutton)

## Constructors

###  constructor

\+ **new ConsentRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[ConsentRepository](_repositories_consent_repository_.consentrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[ConsentRepository](_repositories_consent_repository_.consentrepository.md)*

## Methods

###  auto

▸ **auto**(): *`Promise<any>`*

*Defined in [repositories/consent.repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/consent.repository.ts#L6)*

**Returns:** *`Promise<any>`*

___

###  existingUserFlow

▸ **existingUserFlow**(`data?`: object): *`Promise<any>`*

*Defined in [repositories/consent.repository.ts:41](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/consent.repository.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`data?` | object |

**Returns:** *`Promise<any>`*

___

###  existingUserFlowDob

▸ **existingUserFlowDob**(`year`: string | number, `month`: string | number, `day`: string | number): *`Promise<any>`*

*Defined in [repositories/consent.repository.ts:25](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/consent.repository.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | string \| number |
`month` | string \| number |
`day` | string \| number |

**Returns:** *`Promise<any>`*

___

###  existingUserFlowIntro

▸ **existingUserFlowIntro**(): *`Promise<any>`*

*Defined in [repositories/consent.repository.ts:18](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/consent.repository.ts#L18)*

**Returns:** *`Promise<any>`*

___

###  existingUserFlowTosAndTwoAgeButton

▸ **existingUserFlowTosAndTwoAgeButton**(): *`Promise<any>`*

*Defined in [repositories/consent.repository.ts:34](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/consent.repository.ts#L34)*

**Returns:** *`Promise<any>`*