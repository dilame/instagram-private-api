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
* [block](_repositories_friendship_repository_.friendshiprepository.md#block)
* [create](_repositories_friendship_repository_.friendshiprepository.md#create)
* [deny](_repositories_friendship_repository_.friendshiprepository.md#deny)
* [destroy](_repositories_friendship_repository_.friendshiprepository.md#destroy)
* [removeFollower](_repositories_friendship_repository_.friendshiprepository.md#removefollower)
* [show](_repositories_friendship_repository_.friendshiprepository.md#show)
* [showMany](_repositories_friendship_repository_.friendshiprepository.md#showmany)
* [unblock](_repositories_friendship_repository_.friendshiprepository.md#unblock)

## Constructors

###  constructor

\+ **new FriendshipRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[FriendshipRepository](_repositories_friendship_repository_.friendshiprepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[FriendshipRepository](_repositories_friendship_repository_.friendshiprepository.md)*

## Methods

###  approve

▸ **approve**(`id`: string | number, `mediaIdAttribution?`: string): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:41](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/friendship.repository.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |
`mediaIdAttribution?` | string |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  block

▸ **block**(`id`: string | number, `mediaIdAttribution?`: string): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:25](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/friendship.repository.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |
`mediaIdAttribution?` | string |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  create

▸ **create**(`id`: string | number, `mediaIdAttribution?`: string): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:33](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/friendship.repository.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |
`mediaIdAttribution?` | string |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  deny

▸ **deny**(`id`: string | number, `mediaIdAttribution?`: string): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:45](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/friendship.repository.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |
`mediaIdAttribution?` | string |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  destroy

▸ **destroy**(`id`: string | number, `mediaIdAttribution?`: string): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:37](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/friendship.repository.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |
`mediaIdAttribution?` | string |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  removeFollower

▸ **removeFollower**(`id`: string | number): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:49](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/friendship.repository.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

___

###  show

▸ **show**(`id`: string | number): *`Promise<FriendshipRepositoryShowResponseRootObject>`*

*Defined in [repositories/friendship.repository.ts:5](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/friendship.repository.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |

**Returns:** *`Promise<FriendshipRepositoryShowResponseRootObject>`*

___

###  showMany

▸ **showMany**(`userIds`: string[] | number[]): *`Promise<any>`*

*Defined in [repositories/friendship.repository.ts:12](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/friendship.repository.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`userIds` | string[] \| number[] |

**Returns:** *`Promise<any>`*

___

###  unblock

▸ **unblock**(`id`: string | number, `mediaIdAttribution?`: string): *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*

*Defined in [repositories/friendship.repository.ts:29](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/friendship.repository.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string \| number |
`mediaIdAttribution?` | string |

**Returns:** *`Promise<FriendshipRepositoryChangeResponseFriendship_status>`*