> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/qe.repository"](../modules/_repositories_qe_repository_.md) / [QeRepository](_repositories_qe_repository_.qerepository.md) /

# Class: QeRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **QeRepository**

## Index

### Constructors

- [constructor](_repositories_qe_repository_.qerepository.md#constructor)

### Methods

- [sync](_repositories_qe_repository_.qerepository.md#sync)
- [syncExperiments](_repositories_qe_repository_.qerepository.md#syncexperiments)
- [syncLoginExperiments](_repositories_qe_repository_.qerepository.md#syncloginexperiments)

## Constructors

### constructor

\+ **new QeRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[QeRepository](\_repositories_qe_repository_.qerepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[QeRepository](\_repositories_qe_repository_.qerepository.md)\_

## Methods

### sync

▸ **sync**(`experiments`: any): _`Promise<any>`_

_Defined in [repositories/qe.repository.ts:10](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/qe.repository.ts#L10)_

**Parameters:**

| Name          | Type |
| ------------- | ---- |
| `experiments` | any  |

**Returns:** _`Promise<any>`_

---

### syncExperiments

▸ **syncExperiments**(): _`Promise<any>`_

_Defined in [repositories/qe.repository.ts:4](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/qe.repository.ts#L4)_

**Returns:** _`Promise<any>`_

---

### syncLoginExperiments

▸ **syncLoginExperiments**(): _`Promise<any>`_

_Defined in [repositories/qe.repository.ts:7](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/qe.repository.ts#L7)_

**Returns:** _`Promise<any>`_
