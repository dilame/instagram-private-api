> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["services/simulate.service"](../modules/_services_simulate_service_.md) / [SimulateService](_services_simulate_service_.simulateservice.md) /

# Class: SimulateService

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **SimulateService**

## Index

### Constructors

* [constructor](_services_simulate_service_.simulateservice.md#constructor)

### Methods

* [postLoginFlow](_services_simulate_service_.simulateservice.md#postloginflow)
* [preLoginFlow](_services_simulate_service_.simulateservice.md#preloginflow)

## Constructors

###  constructor

\+ **new SimulateService**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[SimulateService](_services_simulate_service_.simulateservice.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[SimulateService](_services_simulate_service_.simulateservice.md)*

## Methods

###  postLoginFlow

▸ **postLoginFlow**(`concurrency?`: number, `toShuffle?`: boolean): *`Promise<void>`*

*Defined in [services/simulate.service.ts:71](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/simulate.service.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`concurrency?` | number |
`toShuffle?` | boolean |

**Returns:** *`Promise<void>`*

___

###  preLoginFlow

▸ **preLoginFlow**(`concurrency?`: number, `toShuffle?`: boolean): *`Promise<void>`*

*Defined in [services/simulate.service.ts:63](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/simulate.service.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`concurrency?` | number |
`toShuffle?` | boolean |

**Returns:** *`Promise<void>`*