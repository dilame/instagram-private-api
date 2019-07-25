> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["services/simulate.service"](../modules/_services_simulate_service_.md) / [SimulateService](_services_simulate_service_.simulateservice.md) /

# Class: SimulateService

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **SimulateService**

## Index

### Constructors

- [constructor](_services_simulate_service_.simulateservice.md#constructor)

### Methods

- [postLoginFlow](_services_simulate_service_.simulateservice.md#postloginflow)
- [preLoginFlow](_services_simulate_service_.simulateservice.md#preloginflow)

## Constructors

### constructor

\+ **new SimulateService**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[SimulateService](\_services_simulate_service_.simulateservice.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[SimulateService](\_services_simulate_service_.simulateservice.md)\_

## Methods

### postLoginFlow

▸ **postLoginFlow**(`concurrency?`: number, `toShuffle?`: boolean): _`Promise<void>`_

_Defined in [services/simulate.service.ts:71](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/simulate.service.ts#L71)_

**Parameters:**

| Name           | Type    |
| -------------- | ------- |
| `concurrency?` | number  |
| `toShuffle?`   | boolean |

**Returns:** _`Promise<void>`_

---

### preLoginFlow

▸ **preLoginFlow**(`concurrency?`: number, `toShuffle?`: boolean): _`Promise<void>`_

_Defined in [services/simulate.service.ts:63](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/simulate.service.ts#L63)_

**Parameters:**

| Name           | Type    |
| -------------- | ------- |
| `concurrency?` | number  |
| `toShuffle?`   | boolean |

**Returns:** _`Promise<void>`_
