> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["services/insights.service"](../modules/_services_insights_service_.md) / [InsightsService](_services_insights_service_.insightsservice.md) /

# Class: InsightsService

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **InsightsService**

## Index

### Constructors

* [constructor](_services_insights_service_.insightsservice.md#constructor)

### Methods

* [account](_services_insights_service_.insightsservice.md#account)
* [post](_services_insights_service_.insightsservice.md#post)
* [story](_services_insights_service_.insightsservice.md#story)

## Constructors

###  constructor

\+ **new InsightsService**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[InsightsService](_services_insights_service_.insightsservice.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[InsightsService](_services_insights_service_.insightsservice.md)*

## Methods

###  account

▸ **account**(`options`: [AccountInsightsOptions](../interfaces/_types_insights_options_.accountinsightsoptions.md)): *`Promise<InsightsServiceAccountResponseRootObject>`*

*Defined in [services/insights.service.ts:7](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/insights.service.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AccountInsightsOptions](../interfaces/_types_insights_options_.accountinsightsoptions.md) |

**Returns:** *`Promise<InsightsServiceAccountResponseRootObject>`*

___

###  post

▸ **post**(`mediaId`: string): *`Promise<InsightsServicePostResponseRootObject>`*

*Defined in [services/insights.service.ts:27](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/insights.service.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`mediaId` | string |

**Returns:** *`Promise<InsightsServicePostResponseRootObject>`*

___

###  story

▸ **story**(`storyId`: string): *`Promise<StoriesInsightsFeedResponseRootObject>`*

*Defined in [services/insights.service.ts:43](https://github.com/dilame/instagram-private-api/blob/3e16058/src/services/insights.service.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`storyId` | string |

**Returns:** *`Promise<StoriesInsightsFeedResponseRootObject>`*