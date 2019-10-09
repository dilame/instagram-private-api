> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/challenge.repository"](../modules/_repositories_challenge_repository_.md) / [ChallengeRepository](_repositories_challenge_repository_.challengerepository.md) /

# Class: ChallengeRepository

All methods expects [State.checkpoint](_core_state_.state.md#checkpoint) to be filled with [CheckpointResponse](../interfaces/_responses_checkpoint_response_.checkpointresponse.md).
It is filled in automatically when [IgCheckpointError](_errors_ig_checkpoint_error_.igcheckpointerror.md) occurs.

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **ChallengeRepository**

## Index

### Constructors

* [constructor](_repositories_challenge_repository_.challengerepository.md#constructor)

### Methods

* [auto](_repositories_challenge_repository_.challengerepository.md#auto)
* [deltaLoginReview](_repositories_challenge_repository_.challengerepository.md#deltaloginreview)
* [replay](_repositories_challenge_repository_.challengerepository.md#replay)
* [reset](_repositories_challenge_repository_.challengerepository.md#reset)
* [selectVerifyMethod](_repositories_challenge_repository_.challengerepository.md#selectverifymethod)
* [sendPhoneNumber](_repositories_challenge_repository_.challengerepository.md#sendphonenumber)
* [sendSecurityCode](_repositories_challenge_repository_.challengerepository.md#sendsecuritycode)
* [state](_repositories_challenge_repository_.challengerepository.md#state)

## Constructors

###  constructor

\+ **new ChallengeRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[ChallengeRepository](_repositories_challenge_repository_.challengerepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[ChallengeRepository](_repositories_challenge_repository_.challengerepository.md)*

## Methods

###  auto

▸ **auto**(`reset`: boolean): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:80](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/challenge.repository.ts#L80)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reset` | boolean | false |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  deltaLoginReview

▸ **deltaLoginReview**(`choice`: "1" | "0"): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:61](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/challenge.repository.ts#L61)*

«We detected an unusual login attempt»

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`choice` | "1" \| "0" | It was me = 0, It wasn't me = 1  |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  replay

▸ **replay**(`choice`: string): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:53](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/challenge.repository.ts#L53)*

«Didn't receive your code? Get a new one»

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`choice` | string | Verification method. Phone number = 0, email = 1  |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  reset

▸ **reset**(): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:107](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/challenge.repository.ts#L107)*

Go back to "select_verify_method"

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  selectVerifyMethod

▸ **selectVerifyMethod**(`choice`: string, `isReplay`: boolean): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:30](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/challenge.repository.ts#L30)*

Select verification method.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`choice` | string | - | Verification method. Phone number = 0, email = 1 |
`isReplay` | boolean | false | resend code  |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  sendPhoneNumber

▸ **sendPhoneNumber**(`phoneNumber`: string): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:65](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/challenge.repository.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`phoneNumber` | string |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  sendSecurityCode

▸ **sendSecurityCode**(`code`: string | number): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:124](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/challenge.repository.ts#L124)*

Send the code received in the message

**Parameters:**

Name | Type |
------ | ------ |
`code` | string \| number |

**Returns:** *`Promise<ChallengeStateResponse>`*

___

###  state

▸ **state**(): *`Promise<ChallengeStateResponse>`*

*Defined in [repositories/challenge.repository.ts:13](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/challenge.repository.ts#L13)*

Get challenge state.

**Returns:** *`Promise<ChallengeStateResponse>`*