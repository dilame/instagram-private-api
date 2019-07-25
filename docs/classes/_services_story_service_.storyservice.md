> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["services/story.service"](../modules/_services_story_service_.md) / [StoryService](_services_story_service_.storyservice.md) /

# Class: StoryService

## Hierarchy

- [Repository](_core_repository_.repository.md)

  - **StoryService**

## Index

### Constructors

- [constructor](_services_story_service_.storyservice.md#constructor)

### Methods

- [seen](_services_story_service_.storyservice.md#seen)

## Constructors

### constructor

\+ **new StoryService**(`client`: [IgApiClient](_core_client_.igapiclient.md)): _[StoryService](\_services_story_service_.storyservice.md)\_

_Inherited from [Repository](\_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)\_

_Defined in [core/repository.ts:6](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/core/repository.ts#L6)_

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** _[StoryService](\_services_story_service_.storyservice.md)\_

## Methods

### seen

▸ **seen**(`input`: `StoryServiceInput`, `sourceId`: string): _`Promise<any>`_

_Defined in [services/story.service.ts:18](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/services/story.service.ts#L18)_

**Parameters:**

| Name       | Type                | Default |
| ---------- | ------------------- | ------- |
| `input`    | `StoryServiceInput` | -       |
| `sourceId` | string              | null    |

**Returns:** _`Promise<any>`_
