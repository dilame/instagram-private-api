> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/qe.repository"](../modules/_repositories_qe_repository_.md) / [QeRepository](_repositories_qe_repository_.qerepository.md) /

# Class: QeRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **QeRepository**

## Index

### Constructors

* [constructor](_repositories_qe_repository_.qerepository.md#constructor)

### Methods

* [sync](_repositories_qe_repository_.qerepository.md#sync)
* [syncExperiments](_repositories_qe_repository_.qerepository.md#syncexperiments)
* [syncLoginExperiments](_repositories_qe_repository_.qerepository.md#syncloginexperiments)

## Constructors

###  constructor

\+ **new QeRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[QeRepository](_repositories_qe_repository_.qerepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[QeRepository](_repositories_qe_repository_.qerepository.md)*

## Methods

###  sync

▸ **sync**(`experiments`: any): *`Promise<any>`*

*Defined in [repositories/qe.repository.ts:10](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/qe.repository.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`experiments` | any |

**Returns:** *`Promise<any>`*

___

###  syncExperiments

▸ **syncExperiments**(): *`Promise<any>`*

*Defined in [repositories/qe.repository.ts:4](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/qe.repository.ts#L4)*

**Returns:** *`Promise<any>`*

___

###  syncLoginExperiments

▸ **syncLoginExperiments**(): *`Promise<any>`*

*Defined in [repositories/qe.repository.ts:7](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/qe.repository.ts#L7)*

**Returns:** *`Promise<any>`*