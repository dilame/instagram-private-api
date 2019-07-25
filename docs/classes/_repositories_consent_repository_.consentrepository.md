> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/consent.repository"](../modules/_repositories_consent_repository_.md) / [ConsentRepository](_repositories_consent_repository_.consentrepository.md) /

# Class: ConsentRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **ConsentRepository**

## Index

### Constructors

- [constructor](_repositories_consent_repository_.consentrepository.md#constructor)

### Methods

- [auto](_repositories_consent_repository_.consentrepository.md#auto)
- [existingUserFlow](_repositories_consent_repository_.consentrepository.md#existinguserflow)
- [existingUserFlowDob](_repositories_consent_repository_.consentrepository.md#existinguserflowdob)
- [existingUserFlowIntro](_repositories_consent_repository_.consentrepository.md#existinguserflowintro)
- [existingUserFlowTosAndTwoAgeButton](_repositories_consent_repository_.consentrepository.md#existinguserflowtosandtwoagebutton)

## Constructors

### constructor

\+ **new ConsentRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[ConsentRepository](\_repositories_consent_repository_.consentrepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[ConsentRepository](\_repositories_consent_repository_.consentrepository.md)\_

## Methods

### auto

▸ **auto**(): _`Promise<any>`_

_Defined in [repositories/consent.repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/consent.repository.ts#L6)_

**Returns:** _`Promise<any>`_

---

### existingUserFlow

▸ **existingUserFlow**(`data?`: object): _`Promise<any>`_

_Defined in [repositories/consent.repository.ts:41](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/consent.repository.ts#L41)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `data?` | object |

**Returns:** _`Promise<any>`_

---

### existingUserFlowDob

▸ **existingUserFlowDob**(`year`: string | number, `month`: string | number, `day`: string | number): _`Promise<any>`_

_Defined in [repositories/consent.repository.ts:25](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/consent.repository.ts#L25)_

**Parameters:**

| Name    | Type             |
| ------- | ---------------- |
| `year`  | string \| number |
| `month` | string \| number |
| `day`   | string \| number |

**Returns:** _`Promise<any>`_

---

### existingUserFlowIntro

▸ **existingUserFlowIntro**(): _`Promise<any>`_

_Defined in [repositories/consent.repository.ts:18](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/consent.repository.ts#L18)_

**Returns:** _`Promise<any>`_

---

### existingUserFlowTosAndTwoAgeButton

▸ **existingUserFlowTosAndTwoAgeButton**(): _`Promise<any>`_

_Defined in [repositories/consent.repository.ts:34](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/consent.repository.ts#L34)_

**Returns:** _`Promise<any>`_
