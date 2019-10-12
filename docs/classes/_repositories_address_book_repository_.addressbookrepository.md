> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/address-book.repository"](../modules/_repositories_address_book_repository_.md) / [AddressBookRepository](_repositories_address_book_repository_.addressbookrepository.md) /

# Class: AddressBookRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **AddressBookRepository**

## Index

### Constructors

* [constructor](_repositories_address_book_repository_.addressbookrepository.md#constructor)

### Methods

* [acquireOwnerContacts](_repositories_address_book_repository_.addressbookrepository.md#acquireownercontacts)
* [link](_repositories_address_book_repository_.addressbookrepository.md#link)

## Constructors

###  constructor

\+ **new AddressBookRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[AddressBookRepository](_repositories_address_book_repository_.addressbookrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[AddressBookRepository](_repositories_address_book_repository_.addressbookrepository.md)*

## Methods

###  acquireOwnerContacts

▸ **acquireOwnerContacts**(`me`: object): *`Promise<StatusResponse>`*

*Defined in [repositories/address-book.repository.ts:31](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/address-book.repository.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`me` | object |

**Returns:** *`Promise<StatusResponse>`*

___

###  link

▸ **link**(`contacts`: `Array<object>`, `module?`: [IgAppModule](../modules/_types_common_types_.md#igappmodule)): *`Promise<AddressBookRepositoryLinkResponseRootObject>`*

*Defined in [repositories/address-book.repository.ts:7](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/address-book.repository.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`contacts` | `Array<object>` |
`module?` | [IgAppModule](../modules/_types_common_types_.md#igappmodule) |

**Returns:** *`Promise<AddressBookRepositoryLinkResponseRootObject>`*