> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["repositories/live.repository"](../modules/_repositories_live_repository_.md) / [LiveRepository](_repositories_live_repository_.liverepository.md) /

# Class: LiveRepository

## Hierarchy

* [Repository](_core_repository_.repository.md)

  * **LiveRepository**

## Index

### Constructors

* [constructor](_repositories_live_repository_.liverepository.md#constructor)

### Methods

* [activateQuestion](_repositories_live_repository_.liverepository.md#activatequestion)
* [comment](_repositories_live_repository_.liverepository.md#comment)
* [create](_repositories_live_repository_.liverepository.md#create)
* [createQuestion](_repositories_live_repository_.liverepository.md#createquestion)
* [deactivateQuestion](_repositories_live_repository_.liverepository.md#deactivatequestion)
* [endBroadcast](_repositories_live_repository_.liverepository.md#endbroadcast)
* [getComment](_repositories_live_repository_.liverepository.md#getcomment)
* [getFinalViewerList](_repositories_live_repository_.liverepository.md#getfinalviewerlist)
* [getJoinRequestCounts](_repositories_live_repository_.liverepository.md#getjoinrequestcounts)
* [getLikeCount](_repositories_live_repository_.liverepository.md#getlikecount)
* [getLiveQuestions](_repositories_live_repository_.liverepository.md#getlivequestions)
* [getQuestions](_repositories_live_repository_.liverepository.md#getquestions)
* [getViewerList](_repositories_live_repository_.liverepository.md#getviewerlist)
* [heartbeatAndGetViewerCount](_repositories_live_repository_.liverepository.md#heartbeatandgetviewercount)
* [info](_repositories_live_repository_.liverepository.md#info)
* [like](_repositories_live_repository_.liverepository.md#like)
* [muteComment](_repositories_live_repository_.liverepository.md#mutecomment)
* [pinComment](_repositories_live_repository_.liverepository.md#pincomment)
* [resumeBroadcastAfterContentMatch](_repositories_live_repository_.liverepository.md#resumebroadcastaftercontentmatch)
* [start](_repositories_live_repository_.liverepository.md#start)
* [unmuteComment](_repositories_live_repository_.liverepository.md#unmutecomment)
* [unpinComment](_repositories_live_repository_.liverepository.md#unpincomment)
* [wave](_repositories_live_repository_.liverepository.md#wave)

## Constructors

###  constructor

\+ **new LiveRepository**(`client`: [IgApiClient](_core_client_.igapiclient.md)): *[LiveRepository](_repositories_live_repository_.liverepository.md)*

*Inherited from [Repository](_core_repository_.repository.md).[constructor](_core_repository_.repository.md#constructor)*

*Defined in [core/repository.ts:6](https://github.com/dilame/instagram-private-api/blob/3e16058/src/core/repository.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [IgApiClient](_core_client_.igapiclient.md) |

**Returns:** *[LiveRepository](_repositories_live_repository_.liverepository.md)*

## Methods

###  activateQuestion

▸ **activateQuestion**(`broadcastId`: string, `questionId`: string): *`Promise<any>`*

*Defined in [repositories/live.repository.ts:142](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |
`questionId` | string |

**Returns:** *`Promise<any>`*

___

###  comment

▸ **comment**(`broadcastId`: string, `message`: string): *`Promise<any>`*

*Defined in [repositories/live.repository.ts:284](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L284)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |
`message` | string |

**Returns:** *`Promise<any>`*

___

###  create

▸ **create**(`__namedParameters`: object): *`Promise<LiveCreateBroadcastResponseRootObject>`*

*Defined in [repositories/live.repository.ts:94](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *`Promise<LiveCreateBroadcastResponseRootObject>`*

___

###  createQuestion

▸ **createQuestion**(`broadcastId`: string, `question`: string): *`Promise<any>`*

*Defined in [repositories/live.repository.ts:128](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |
`question` | string |

**Returns:** *`Promise<any>`*

___

###  deactivateQuestion

▸ **deactivateQuestion**(`broadcastId`: string, `questionId`: string): *`Promise<any>`*

*Defined in [repositories/live.repository.ts:155](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |
`questionId` | string |

**Returns:** *`Promise<any>`*

___

###  endBroadcast

▸ **endBroadcast**(`broadcastId`: string, `endAfterCopyrightWarning`: boolean): *`Promise<any>`*

*Defined in [repositories/live.repository.ts:270](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L270)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`broadcastId` | string | - |
`endAfterCopyrightWarning` | boolean | false |

**Returns:** *`Promise<any>`*

___

###  getComment

▸ **getComment**(`__namedParameters`: object): *`Promise<LiveCommentsResponseRootObject>`*

*Defined in [repositories/live.repository.ts:32](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *`Promise<LiveCommentsResponseRootObject>`*

___

###  getFinalViewerList

▸ **getFinalViewerList**(`broadcastId`: string): *`Promise<LiveFinalViewersResponseRootObject>`*

*Defined in [repositories/live.repository.ts:73](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |

**Returns:** *`Promise<LiveFinalViewersResponseRootObject>`*

___

###  getJoinRequestCounts

▸ **getJoinRequestCounts**(`__namedParameters`: object): *`Promise<LiveJoinRequestCountsResponseRootObject>`*

*Defined in [repositories/live.repository.ts:231](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L231)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *`Promise<LiveJoinRequestCountsResponseRootObject>`*

___

###  getLikeCount

▸ **getLikeCount**(`broadcastId`: string, `likeTs`: string | number): *`Promise<LiveLikeCountResponseRootObject>`*

*Defined in [repositories/live.repository.ts:203](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L203)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`broadcastId` | string | - |
`likeTs` | string \| number | 0 |

**Returns:** *`Promise<LiveLikeCountResponseRootObject>`*

___

###  getLiveQuestions

▸ **getLiveQuestions**(`broadcastId`: string): *`Promise<any>`*

*Defined in [repositories/live.repository.ts:332](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L332)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |

**Returns:** *`Promise<any>`*

___

###  getQuestions

▸ **getQuestions**(): *`Promise<LiveGetQuestionsResponseRootObject>`*

*Defined in [repositories/live.repository.ts:167](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L167)*

**Returns:** *`Promise<LiveGetQuestionsResponseRootObject>`*

___

###  getViewerList

▸ **getViewerList**(`broadcastId`: string): *`Promise<LiveViewerListResponseRootObject>`*

*Defined in [repositories/live.repository.ts:120](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |

**Returns:** *`Promise<LiveViewerListResponseRootObject>`*

___

###  heartbeatAndGetViewerCount

▸ **heartbeatAndGetViewerCount**(`broadcastId`: string): *`Promise<LiveHeartbeatViewerCountResponseRootObject>`*

*Defined in [repositories/live.repository.ts:52](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |

**Returns:** *`Promise<LiveHeartbeatViewerCountResponseRootObject>`*

___

###  info

▸ **info**(`broadcastId`: string): *`Promise<LiveInfoResponseRootObject>`*

*Defined in [repositories/live.repository.ts:65](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |

**Returns:** *`Promise<LiveInfoResponseRootObject>`*

___

###  like

▸ **like**(`broadcastId`: string, `likeCount`: number): *`Promise<LiveLikeResponseRootObject>`*

*Defined in [repositories/live.repository.ts:189](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L189)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`broadcastId` | string | - |
`likeCount` | number | 1 |

**Returns:** *`Promise<LiveLikeResponseRootObject>`*

___

###  muteComment

▸ **muteComment**(`broadcastId`: string): *`Promise<LiveSwitchCommentsResponseRootObject>`*

*Defined in [repositories/live.repository.ts:19](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |

**Returns:** *`Promise<LiveSwitchCommentsResponseRootObject>`*

___

###  pinComment

▸ **pinComment**(`broadcastId`: string, `commentId`: string): *`Promise<any>`*

*Defined in [repositories/live.repository.ts:302](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L302)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |
`commentId` | string |

**Returns:** *`Promise<any>`*

___

###  resumeBroadcastAfterContentMatch

▸ **resumeBroadcastAfterContentMatch**(`broadcastId`: string): *`Promise<any>`*

*Defined in [repositories/live.repository.ts:217](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L217)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |

**Returns:** *`Promise<any>`*

___

###  start

▸ **start**(`broadcastId`: string, `sendNotifications`: boolean): *`Promise<LiveStartBroadcastResponseRootObject>`*

*Defined in [repositories/live.repository.ts:254](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L254)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`broadcastId` | string | - |
`sendNotifications` | boolean | true |

**Returns:** *`Promise<LiveStartBroadcastResponseRootObject>`*

___

###  unmuteComment

▸ **unmuteComment**(`broadcastId`: string): *`Promise<LiveSwitchCommentsResponseRootObject>`*

*Defined in [repositories/live.repository.ts:81](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |

**Returns:** *`Promise<LiveSwitchCommentsResponseRootObject>`*

___

###  unpinComment

▸ **unpinComment**(`broadcastId`: string, `commentId`: string): *`Promise<any>`*

*Defined in [repositories/live.repository.ts:317](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L317)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |
`commentId` | string |

**Returns:** *`Promise<any>`*

___

###  wave

▸ **wave**(`broadcastId`: string, `viewerId`: string): *`Promise<any>`*

*Defined in [repositories/live.repository.ts:175](https://github.com/dilame/instagram-private-api/blob/3e16058/src/repositories/live.repository.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`broadcastId` | string |
`viewerId` | string |

**Returns:** *`Promise<any>`*