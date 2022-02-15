[instagram-private-api](../../README.md) / [services](../../modules/services.md) / StoryService

# Class: StoryService

[services](../../modules/services.md).StoryService

## Hierarchy

- `Repository`

  ↳ **`StoryService`**

## Table of contents

### Constructors

- [constructor](StoryService.md#constructor)

### Methods

- [seen](StoryService.md#seen)

## Constructors

### constructor

• **new StoryService**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### seen

▸ **seen**(`input`, `sourceId?`): `Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | [`StoryServiceInput`](../../modules/types.md#storyserviceinput) | `undefined` |
| `sourceId` | `string` | `null` |

#### Returns

`Promise`<[`StatusResponse`](../../interfaces/responses/StatusResponse.md)\>

#### Defined in

[src/services/story.service.ts:5](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/story.service.ts#L5)
