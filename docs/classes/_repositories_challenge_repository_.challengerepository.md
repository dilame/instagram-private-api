> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/challenge.repository"](../modules/_repositories_challenge_repository_.md) / [ChallengeRepository](_repositories_challenge_repository_.challengerepository.md) /

# Class: ChallengeRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **ChallengeRepository**

## Index

### Constructors

- [constructor](_repositories_challenge_repository_.challengerepository.md#constructor)

### Methods

- [auto](_repositories_challenge_repository_.challengerepository.md#auto)
- [deltaLoginReview](_repositories_challenge_repository_.challengerepository.md#deltaloginreview)
- [reset](_repositories_challenge_repository_.challengerepository.md#reset)
- [selectVerifyMethod](_repositories_challenge_repository_.challengerepository.md#selectverifymethod)
- [sendPhoneNumber](_repositories_challenge_repository_.challengerepository.md#sendphonenumber)
- [sendSecurityCode](_repositories_challenge_repository_.challengerepository.md#sendsecuritycode)
- [state](_repositories_challenge_repository_.challengerepository.md#state)

## Constructors

### constructor

\+ **new ChallengeRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[ChallengeRepository](\_repositories_challenge_repository_.challengerepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[ChallengeRepository](\_repositories_challenge_repository_.challengerepository.md)\_

## Methods

### auto

▸ **auto**(`reset`: boolean): _`Promise<ChallengeStateResponse>`_

_Defined in [repositories/challenge.repository.ts:52](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/challenge.repository.ts#L52)_

**Parameters:**

| Name    | Type    | Default |
| ------- | ------- | ------- |
| `reset` | boolean | false   |

**Returns:** _`Promise<ChallengeStateResponse>`_

---

### deltaLoginReview

▸ **deltaLoginReview**(`choice`: "1" | "0"): _`Promise<any>`_

_Defined in [repositories/challenge.repository.ts:33](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/challenge.repository.ts#L33)_

**Parameters:**

| Name     | Type       |
| -------- | ---------- |
| `choice` | "1" \| "0" |

**Returns:** _`Promise<any>`_

---

### reset

▸ **reset**(): _`Promise<any>`_

_Defined in [repositories/challenge.repository.ts:76](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/challenge.repository.ts#L76)_

**Returns:** _`Promise<any>`_

---

### selectVerifyMethod

▸ **selectVerifyMethod**(`choice`: string): _`Promise<any>`_

_Defined in [repositories/challenge.repository.ts:18](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/challenge.repository.ts#L18)_

**Parameters:**

| Name     | Type   |
| -------- | ------ |
| `choice` | string |

**Returns:** _`Promise<any>`_

---

### sendPhoneNumber

▸ **sendPhoneNumber**(`phoneNumber`: string): _`Promise<any>`_

_Defined in [repositories/challenge.repository.ts:37](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/challenge.repository.ts#L37)_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `phoneNumber` | string |

**Returns:** _`Promise<any>`_

---

### sendSecurityCode

▸ **sendSecurityCode**(`code`: string | number): _`Promise<any>`_

_Defined in [repositories/challenge.repository.ts:90](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/challenge.repository.ts#L90)_

**Parameters:**

| Name   | Type             |
| ------ | ---------------- |
| `code` | string \| number |

**Returns:** _`Promise<any>`_

---

### state

▸ **state**(): _`Promise<any>`_

_Defined in [repositories/challenge.repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/challenge.repository.ts#L6)_

**Returns:** _`Promise<any>`_
