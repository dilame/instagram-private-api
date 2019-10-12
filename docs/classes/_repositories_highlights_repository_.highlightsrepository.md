> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/highlights.repository"](../modules/_repositories_highlights_repository_.md) / [HighlightsRepository](_repositories_highlights_repository_.highlightsrepository.md) /

# Class: HighlightsRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **HighlightsRepository**

## Index

### Constructors

* [constructor](_repositories_highlights_repository_.highlightsrepository.md#constructor)

### Methods

* [createReel](_repositories_highlights_repository_.highlightsrepository.md#createreel)
* [deleteReel](_repositories_highlights_repository_.highlightsrepository.md#deletereel)
* [editReel](_repositories_highlights_repository_.highlightsrepository.md#editreel)
* [highlightsTray](_repositories_highlights_repository_.highlightsrepository.md#highlightstray)

## Constructors

###  constructor

\+ **new HighlightsRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[HighlightsRepository](_repositories_highlights_repository_.highlightsrepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[HighlightsRepository](_repositories_highlights_repository_.highlightsrepository.md)*

## Methods

###  createReel

▸ **createReel**(`options`: [CreateHighlightsReelOptions](../interfaces/_types_create_highlights_reel_options_.createhighlightsreeloptions.md)): *`Promise<HighlightsRepositoryCreateReelResponseRootObject>`*

*Defined in [repositories/highlights.repository.ts:25](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/highlights.repository.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateHighlightsReelOptions](../interfaces/_types_create_highlights_reel_options_.createhighlightsreeloptions.md) |

**Returns:** *`Promise<HighlightsRepositoryCreateReelResponseRootObject>`*

___

###  deleteReel

▸ **deleteReel**(`highlightId`: string): *`Promise<StatusResponse>`*

*Defined in [repositories/highlights.repository.ts:67](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/highlights.repository.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`highlightId` | string |

**Returns:** *`Promise<StatusResponse>`*

___

###  editReel

▸ **editReel**(`options`: [EditHighlightsReelOptions](../interfaces/_types_edit_highlights_reel_options_.edithighlightsreeloptions.md)): *`Promise<HighlightsRepositoryEditReelResponseRootObject>`*

*Defined in [repositories/highlights.repository.ts:47](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/highlights.repository.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [EditHighlightsReelOptions](../interfaces/_types_edit_highlights_reel_options_.edithighlightsreeloptions.md) |

**Returns:** *`Promise<HighlightsRepositoryEditReelResponseRootObject>`*

___

###  highlightsTray

▸ **highlightsTray**(`userId`: string | number): *`Promise<HighlightsRepositoryHighlightsTrayResponseRootObject>`*

*Defined in [repositories/highlights.repository.ts:11](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/highlights.repository.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | string \| number |

**Returns:** *`Promise<HighlightsRepositoryHighlightsTrayResponseRootObject>`*