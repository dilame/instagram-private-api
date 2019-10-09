> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["responses/direct.repository.get-presence.response"](../modules/_responses_direct_repository_get_presence_response_.md) / [DirectRepositoryGetPresenceResponseRootObject](_responses_direct_repository_get_presence_response_.directrepositorygetpresenceresponserootobject.md) /

# Interface: DirectRepositoryGetPresenceResponseRootObject

## Hierarchy

* **DirectRepositoryGetPresenceResponseRootObject**

## Index

### Properties

* [status](_responses_direct_repository_get_presence_response_.directrepositorygetpresenceresponserootobject.md#status)
* [user_presence](_responses_direct_repository_get_presence_response_.directrepositorygetpresenceresponserootobject.md#user_presence)

## Properties

###  status

• **status**: *string*

*Defined in [responses/direct.repository.get-presence.response.ts:11](https://github.com/dilame/instagram-private-api/blob/3e16058/src/responses/direct.repository.get-presence.response.ts#L11)*

___

###  user_presence

• **user_presence**: *any*

*Defined in [responses/direct.repository.get-presence.response.ts:10](https://github.com/dilame/instagram-private-api/blob/3e16058/src/responses/direct.repository.get-presence.response.ts#L10)*

user_presence: {
  user_id: {
    is_active: boolean,
    last_activity_at_ms,
  },...
}