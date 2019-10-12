> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["core/entity.factory"](../modules/_core_entity_factory_.md) / [EntityFactory](_core_entity_factory_.entityfactory.md) /

# Class: EntityFactory

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **EntityFactory**

## Index

### Constructors

* [constructor](_core_entity_factory_.entityfactory.md#constructor)

### Methods

* [directThread](_core_entity_factory_.entityfactory.md#directthread)
* [profile](_core_entity_factory_.entityfactory.md#profile)

## Constructors

###  constructor

\+ **new EntityFactory**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[EntityFactory](_core_entity_factory_.entityfactory.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[EntityFactory](_core_entity_factory_.entityfactory.md)*

## Methods

###  directThread

▸ **directThread**(`id`: string | string[]): *[DirectThreadEntity](_entities_direct_thread_entity_.directthreadentity.md)*

*Defined in [core/entity.factory.ts:5](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/entity.factory.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| string[] |

**Returns:** *[DirectThreadEntity](_entities_direct_thread_entity_.directthreadentity.md)*

___

###  profile

▸ **profile**(`pk`: string): *[ProfileEntity](_entities_profile_entity_.profileentity.md)*

*Defined in [core/entity.factory.ts:15](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/entity.factory.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`pk` | string |

**Returns:** *[ProfileEntity](_entities_profile_entity_.profileentity.md)*