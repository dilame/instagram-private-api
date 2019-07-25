> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/friendship.repository"](../modules/_repositories_friendship_repository_.md) / [FriendshipRepository](_repositories_friendship_repository_.friendshiprepository.md) /

# Class: FriendshipRepository

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **FriendshipRepository**

## Index

### Constructors

- [constructor](_repositories_friendship_repository_.friendshiprepository.md#constructor)

### Methods

- [approve](_repositories_friendship_repository_.friendshiprepository.md#approve)
- [create](_repositories_friendship_repository_.friendshiprepository.md#create)
- [deny](_repositories_friendship_repository_.friendshiprepository.md#deny)
- [destroy](_repositories_friendship_repository_.friendshiprepository.md#destroy)
- [removeFollower](_repositories_friendship_repository_.friendshiprepository.md#removefollower)
- [show](_repositories_friendship_repository_.friendshiprepository.md#show)

## Constructors

### constructor

\+ **new FriendshipRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[FriendshipRepository](\_repositories_friendship_repository_.friendshiprepository.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[FriendshipRepository](\_repositories_friendship_repository_.friendshiprepository.md)\_

## Methods

### approve

▸ **approve**(`id`: string | number, `mediaIdAttribution?`: string): _`Promise<any>`_

_Defined in [repositories/friendship.repository.ts:20](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/friendship.repository.ts#L20)_

**Parameters:**

| Name                  | Type             |
| --------------------- | ---------------- |
| `id`                  | string \| number |
| `mediaIdAttribution?` | string           |

**Returns:** _`Promise<any>`_

---

### create

▸ **create**(`id`: string | number, `mediaIdAttribution?`: string): _`Promise<any>`_

_Defined in [repositories/friendship.repository.ts:12](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/friendship.repository.ts#L12)_

**Parameters:**

| Name                  | Type             |
| --------------------- | ---------------- |
| `id`                  | string \| number |
| `mediaIdAttribution?` | string           |

**Returns:** _`Promise<any>`_

---

### deny

▸ **deny**(`id`: string | number, `mediaIdAttribution?`: string): _`Promise<any>`_

_Defined in [repositories/friendship.repository.ts:24](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/friendship.repository.ts#L24)_

**Parameters:**

| Name                  | Type             |
| --------------------- | ---------------- |
| `id`                  | string \| number |
| `mediaIdAttribution?` | string           |

**Returns:** _`Promise<any>`_

---

### destroy

▸ **destroy**(`id`: string | number, `mediaIdAttribution?`: string): _`Promise<any>`_

_Defined in [repositories/friendship.repository.ts:16](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/friendship.repository.ts#L16)_

**Parameters:**

| Name                  | Type             |
| --------------------- | ---------------- |
| `id`                  | string \| number |
| `mediaIdAttribution?` | string           |

**Returns:** _`Promise<any>`_

---

### removeFollower

▸ **removeFollower**(`id`: string | number): _`Promise<any>`_

_Defined in [repositories/friendship.repository.ts:28](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/friendship.repository.ts#L28)_

**Parameters:**

| Name | Type             |
| ---- | ---------------- |
| `id` | string \| number |

**Returns:** _`Promise<any>`_

---

### show

▸ **show**(`id`: string | number): _`Promise<any>`_

_Defined in [repositories/friendship.repository.ts:5](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/repositories/friendship.repository.ts#L5)_

**Parameters:**

| Name | Type             |
| ---- | ---------------- |
| `id` | string \| number |

**Returns:** _`Promise<any>`_
