[instagram-private-api](../../README.md) / [repositories](../../modules/repositories.md) / ConsentRepository

# Class: ConsentRepository

[repositories](../../modules/repositories.md).ConsentRepository

## Hierarchy

- `Repository`

  ↳ **`ConsentRepository`**

## Table of contents

### Constructors

- [constructor](ConsentRepository.md#constructor)

### Methods

- [auto](ConsentRepository.md#auto)
- [existingUserFlow](ConsentRepository.md#existinguserflow)
- [existingUserFlowDob](ConsentRepository.md#existinguserflowdob)
- [existingUserFlowIntro](ConsentRepository.md#existinguserflowintro)
- [existingUserFlowTosAndTwoAgeButton](ConsentRepository.md#existinguserflowtosandtwoagebutton)

## Constructors

### constructor

• **new ConsentRepository**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### auto

▸ **auto**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/consent.repository.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/consent.repository.ts#L6)

___

### existingUserFlow

▸ **existingUserFlow**(`data?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/consent.repository.ts:41](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/consent.repository.ts#L41)

___

### existingUserFlowDob

▸ **existingUserFlowDob**(`year`, `month`, `day`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `string` \| `number` |
| `month` | `string` \| `number` |
| `day` | `string` \| `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/consent.repository.ts:25](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/consent.repository.ts#L25)

___

### existingUserFlowIntro

▸ **existingUserFlowIntro**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/consent.repository.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/consent.repository.ts#L18)

___

### existingUserFlowTosAndTwoAgeButton

▸ **existingUserFlowTosAndTwoAgeButton**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/repositories/consent.repository.ts:34](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/repositories/consent.repository.ts#L34)
