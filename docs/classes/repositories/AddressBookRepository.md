[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / AddressBookRepository

# Class: AddressBookRepository

[repositories](../../modules/repositories.md).AddressBookRepository

## Hierarchy

- `Repository`

  ↳ **`AddressBookRepository`**

## Table of contents

### Constructors

- [constructor](AddressBookRepository.md#constructor)

### Methods

- [acquireOwnerContacts](AddressBookRepository.md#acquireownercontacts)
- [link](AddressBookRepository.md#link)

## Constructors

### constructor

• **new AddressBookRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### acquireOwnerContacts

▸ **acquireOwnerContacts**(`me`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `me` | `Object` |
| `me.email_addresses` | `string`[] |
| `me.first_name?` | `string` |
| `me.last_name?` | `string` |
| `me.phone_numbers` | `string`[] |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/repositories/address-book.repository.ts:31](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/address-book.repository.ts#L31)

___

### link

▸ **link**(`contacts`, `module?`): `Promise`<[`AddressBookRepositoryLinkResponseRootObject`](../../interfaces/responses/AddressBookRepositoryLinkResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contacts` | { `email_addresses`: `string`[] ; `first_name`: `string` ; `last_name`: `string` ; `phone_numbers`: `string`[]  }[] |
| `module?` | `string` |

#### Returns

`Promise`<[`AddressBookRepositoryLinkResponseRootObject`](../../interfaces/responses/AddressBookRepositoryLinkResponseRootObject.md)\>

#### Defined in

[src/repositories/address-book.repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/address-book.repository.ts#L7)
