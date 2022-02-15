[instagram-private-api](../../README.md) / [services](../../modules/services.md) / InsightsService

# Class: InsightsService

[services](../../modules/services.md).InsightsService

## Hierarchy

- `Repository`

  ↳ **`InsightsService`**

## Table of contents

### Constructors

- [constructor](InsightsService.md#constructor)

### Methods

- [account](InsightsService.md#account)
- [igtv](InsightsService.md#igtv)
- [post](InsightsService.md#post)
- [story](InsightsService.md#story)

## Constructors

### constructor

• **new InsightsService**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](../index/IgApiClient.md) |

#### Inherited from

Repository.constructor

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/core/repository.ts#L7)

## Methods

### account

▸ **account**(`options`): `Promise`<[`InsightsServiceAccountResponseRootObject`](../../interfaces/responses/InsightsServiceAccountResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AccountInsightsOptions`](../../interfaces/types/AccountInsightsOptions.md) |

#### Returns

`Promise`<[`InsightsServiceAccountResponseRootObject`](../../interfaces/responses/InsightsServiceAccountResponseRootObject.md)\>

#### Defined in

[src/services/insights.service.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/insights.service.ts#L7)

___

### igtv

▸ **igtv**(`mediaId`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/services/insights.service.ts:43](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/insights.service.ts#L43)

___

### post

▸ **post**(`mediaId`): `Promise`<[`InsightsServicePostResponseRootObject`](../../interfaces/responses/InsightsServicePostResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<[`InsightsServicePostResponseRootObject`](../../interfaces/responses/InsightsServicePostResponseRootObject.md)\>

#### Defined in

[src/services/insights.service.ts:27](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/insights.service.ts#L27)

___

### story

▸ **story**(`storyId`): `Promise`<[`StoriesInsightsFeedResponseRootObject`](../../interfaces/responses/StoriesInsightsFeedResponseRootObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storyId` | `string` |

#### Returns

`Promise`<[`StoriesInsightsFeedResponseRootObject`](../../interfaces/responses/StoriesInsightsFeedResponseRootObject.md)\>

#### Defined in

[src/services/insights.service.ts:59](https://github.com/Nerixyz/instagram-private-api/blob/b3351b9/src/services/insights.service.ts#L59)
