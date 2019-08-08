> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/friendship.repository"](../modules/_repositories_friendship_repository_.md) / [FriendshipRepository](_repositories_friendship_repository_.friendshiprepository.md) /

# Class: FriendshipRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **FriendshipRepository**

## Index

### Constructors

* [constructor](_repositories_friendship_repository_.friendshiprepository.md#constructor)

### Methods

* [approve](_repositories_friendship_repository_.friendshiprepository.md#approve)
* [create](_repositories_friendship_repository_.friendshiprepository.md#create)
* [deny](_repositories_friendship_repository_.friendshiprepository.md#deny)
* [destroy](_repositories_friendship_repository_.friendshiprepository.md#destroy)
* [removeFollower](_repositories_friendship_repository_.friendshiprepository.md#removefollower)
* [show](_repositories_friendship_repository_.friendshiprepository.md#show)

## Constructors

###  constructor

\+ **new FriendshipRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[FriendshipRepository](_repositories_friendship_repository_.friendshiprepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/01eb399/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[FriendshipRepository](_repositories_friendship_repository_.friendshiprepository.md)*

## Methods

###  approve

▸ **approve**(`id`: string | number, `mediaIdAttribution?`: string): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:20](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/friendship.repository.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |
`mediaIdAttribution?` | string |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  create

▸ **create**(`id`: string | number, `mediaIdAttribution?`: string): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:12](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/friendship.repository.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |
`mediaIdAttribution?` | string |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  deny

▸ **deny**(`id`: string | number, `mediaIdAttribution?`: string): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:24](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/friendship.repository.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |
`mediaIdAttribution?` | string |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  destroy

▸ **destroy**(`id`: string | number, `mediaIdAttribution?`: string): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:16](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/friendship.repository.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |
`mediaIdAttribution?` | string |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  removeFollower

▸ **removeFollower**(`id`: string | number): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:28](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/friendship.repository.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  show

▸ **show**(`id`: string | number): *`Promise<FriendshipRepositoryShowResponseRootObject>`*

*Defined in [repositories/friendship.repository.ts:5](https://github.com/dilame/instagram-private-api/blob/01eb399/src/repositories/friendship.repository.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |

**Returns:** *`Promise<FriendshipRepositoryShowResponseRootObject>`*