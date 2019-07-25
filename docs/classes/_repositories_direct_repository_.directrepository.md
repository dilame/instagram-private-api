> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/direct.repository"](../modules/_repositories_direct_repository_.md) / [DirectRepository](_repositories_direct_repository_.directrepository.md) /

# Class: DirectRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **DirectRepository**

## Index

### Constructors

- [constructor](_repositories_direct_repository_.directrepository.md#constructor)

### Methods

- [createGroupThread](_repositories_direct_repository_.directrepository.md#creategroupthread)
- [getPresence](_repositories_direct_repository_.directrepository.md#getpresence)
- [rankedRecipients](_repositories_direct_repository_.directrepository.md#rankedrecipients)

## Constructors

### constructor

\+ **new DirectRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[DirectRepository](\_repositories_direct_repository_.directrepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[DirectRepository](\_repositories_direct_repository_.directrepository.md)\_

## Methods

### createGroupThread

▸ **createGroupThread**(`recipientUsers`: string[], `threadTitle`: string): _`Promise<DirectRepositoryCreateGroupThreadResponseRootObject>`_

_Defined in [repositories/direct.repository.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct.repository.ts#L9)_

**Parameters:**

| Name             | Type     |
| ---------------- | -------- |
| `recipientUsers` | string[] |
| `threadTitle`    | string   |

**Returns:** _`Promise<DirectRepositoryCreateGroupThreadResponseRootObject>`_

---

### getPresence

▸ **getPresence**(): _`Promise<DirectRepositoryGetPresenceResponseRootObject>`_

_Defined in [repositories/direct.repository.ts:43](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct.repository.ts#L43)_

**Returns:** _`Promise<DirectRepositoryGetPresenceResponseRootObject>`_

---

### rankedRecipients

▸ **rankedRecipients**(`mode`: "raven" | "reshare", `query`: string): _`Promise<DirectRepositoryRankedRecipientsResponseRootObject>`_

_Defined in [repositories/direct.repository.ts:27](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/direct.repository.ts#L27)_

**Parameters:**

| Name    | Type                 | Default |
| ------- | -------------------- | ------- |
| `mode`  | "raven" \| "reshare" | "raven" |
| `query` | string               | ""      |

**Returns:** _`Promise<DirectRepositoryRankedRecipientsResponseRootObject>`_
