> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["services/story.service"](../modules/_services_story_service_.md) / [StoryService](_services_story_service_.storyservice.md) /

# Class: StoryService

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **StoryService**

## Index

### Constructors

* [constructor](_services_story_service_.storyservice.md#constructor)

### Methods

* [seen](_services_story_service_.storyservice.md#seen)

## Constructors

###  constructor

\+ **new StoryService**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[StoryService](_services_story_service_.storyservice.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[StoryService](_services_story_service_.storyservice.md)*

## Methods

###  seen

▸ **seen**(`input`: [StoryServiceInput](../modules/_types_stories_types_.md#storyserviceinput), `sourceId`: string): *`Promise<StatusResponse>`*

*Defined in [services/story.service.ts:5](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/story.service.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | [StoryServiceInput](../modules/_types_stories_types_.md#storyserviceinput) | - |
`sourceId` | string |  null |

**Returns:** *`Promise<StatusResponse>`*