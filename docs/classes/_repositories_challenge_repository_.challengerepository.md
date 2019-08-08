> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/challenge.repository"](../modules/_repositories_challenge_repository_.md) / [ChallengeRepository](_repositories_challenge_repository_.challengerepository.md) /

# Class: ChallengeRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **ChallengeRepository**

## Index

### Constructors

* [constructor](_repositories_challenge_repository_.challengerepository.md#constructor)

### Methods

* [auto](_repositories_challenge_repository_.challengerepository.md#auto)
* [deltaLoginReview](_repositories_challenge_repository_.challengerepository.md#deltaloginreview)
* [reset](_repositories_challenge_repository_.challengerepository.md#reset)
* [selectVerifyMethod](_repositories_challenge_repository_.challengerepository.md#selectverifymethod)
* [sendPhoneNumber](_repositories_challenge_repository_.challengerepository.md#sendphonenumber)
* [sendSecurityCode](_repositories_challenge_repository_.challengerepository.md#sendsecuritycode)
* [state](_repositories_challenge_repository_.challengerepository.md#state)

## Constructors

###  constructor

\+ **new ChallengeRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[ChallengeRepository](_repositories_challenge_repository_.challengerepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[ChallengeRepository](_repositories_challenge_repository_.challengerepository.md)*

## Methods

###  auto

▸ **auto**(`reset`: boolean): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:52](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/challenge.repository.ts#L52)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reset` | boolean | false |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  deltaLoginReview

▸ **deltaLoginReview**(`choice`: "1" | "0"): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:33](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/challenge.repository.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`choice` | "1" \| "0" |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  reset

▸ **reset**(): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:76](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/challenge.repository.ts#L76)*

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  selectVerifyMethod

▸ **selectVerifyMethod**(`choice`: string): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:18](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/challenge.repository.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`choice` | string |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  sendPhoneNumber

▸ **sendPhoneNumber**(`phoneNumber`: string): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:37](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/challenge.repository.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`phoneNumber` | string |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  sendSecurityCode

▸ **sendSecurityCode**(`code`: string | number): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:90](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/challenge.repository.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | string \| number |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  state

▸ **state**(): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:6](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/challenge.repository.ts#L6)*

**Returns:** *`Promise<ChallengeStateResponse>`*