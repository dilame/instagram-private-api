> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/tag.repository"](../modules/_repositories_tag_repository_.md) / [TagRepository](_repositories_tag_repository_.tagrepository.md) /

# Class: TagRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **TagRepository**

## Index

### Constructors

* [constructor](_repositories_tag_repository_.tagrepository.md#constructor)

### Methods

* [search](_repositories_tag_repository_.tagrepository.md#search)
* [section](_repositories_tag_repository_.tagrepository.md#section)

## Constructors

###  constructor

\+ **new TagRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[TagRepository](_repositories_tag_repository_.tagrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[TagRepository](_repositories_tag_repository_.tagrepository.md)*

## Methods

###  search

▸ **search**(`q`: string): *`Promise<TagRepositorySearchResponseRootObject>`*

*Defined in [repositories/tag.repository.ts:5](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/tag.repository.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`q` | string |

**Returns:** *`Promise<TagRepositorySearchResponseRootObject>`*

___

###  section

▸ **section**(`q`: string, `tab`: string): *`Promise<TagRepositorySearchResponseRootObject>`*

*Defined in [repositories/tag.repository.ts:17](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/tag.repository.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`q` | string |
`tab` | string |

**Returns:** *`Promise<TagRepositorySearchResponseRootObject>`*