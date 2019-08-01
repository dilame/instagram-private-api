> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["core/entity.factory"](../modules/_core_entity_factory_.md) / [EntityFactory](_core_entity_factory_.entityfactory.md) /

# Class: EntityFactory

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **EntityFactory**

## Index

### Constructors

- [constructor](_core_entity_factory_.entityfactory.md#constructor)

### Methods

- [directThread](_core_entity_factory_.entityfactory.md#directthread)
- [profile](_core_entity_factory_.entityfactory.md#profile)

## Constructors

### constructor

\+ **new EntityFactory**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[EntityFactory](\_core_entity_factory_.entityfactory.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[EntityFactory](\_core_entity_factory_.entityfactory.md)\_

## Methods

### directThread

▸ **directThread**(`id`: string | string[]): _[DirectThreadEntity](\_entities_direct_thread_entity_.directthreadentity.md)\_

_Defined in [core/entity.factory.ts:5](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/entity.factory.ts#L5)_

**Parameters:**

| Name | Type               |
| ---- | ------------------ |
| `id` | string \| string[] |

**Returns:** _[DirectThreadEntity](\_entities_direct_thread_entity_.directthreadentity.md)\_

---

### profile

▸ **profile**(`pk`: string): _[ProfileEntity](\_entities_profile_entity_.profileentity.md)\_

_Defined in [core/entity.factory.ts:14](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/entity.factory.ts#L14)_

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `pk` | string |

**Returns:** _[ProfileEntity](\_entities_profile_entity_.profileentity.md)\_
