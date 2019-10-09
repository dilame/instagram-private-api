> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-checkpoint.error"](../modules/_errors_ig_checkpoint_error_.md) / [IgCheckpointError](_errors_ig_checkpoint_error_.igcheckpointerror.md) /

# Class: IgCheckpointError

## Hierarchy

  * [IgResponseError](_errors_ig_response_error_.igresponseerror.md)‹*[CheckpointResponse](../interfaces/_responses_checkpoint_response_.checkpointresponse.md)*›

  * **IgCheckpointError**

## Index

### Constructors

* [constructor](_errors_ig_checkpoint_error_.igcheckpointerror.md#constructor)

### Properties

* [message](_errors_ig_checkpoint_error_.igcheckpointerror.md#message)
* [name](_errors_ig_checkpoint_error_.igcheckpointerror.md#name)
* [response](_errors_ig_checkpoint_error_.igcheckpointerror.md#response)
* [stack](_errors_ig_checkpoint_error_.igcheckpointerror.md#optional-stack)
* [text](_errors_ig_checkpoint_error_.igcheckpointerror.md#text)

### Accessors

* [apiUrl](_errors_ig_checkpoint_error_.igcheckpointerror.md#apiurl)
* [url](_errors_ig_checkpoint_error_.igcheckpointerror.md#url)

## Constructors

###  constructor

\+ **new IgCheckpointError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹*[CheckpointResponse](../interfaces/_responses_checkpoint_response_.checkpointresponse.md)*›): *[IgCheckpointError](_errors_ig_checkpoint_error_.igcheckpointerror.md)*

*Inherited from [IgResponseError](_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)*

*Overrides [IgClientError](_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)*

*Defined in [errors/ig-response.error.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹*[CheckpointResponse](../interfaces/_responses_checkpoint_response_.checkpointresponse.md)*› |

**Returns:** *[IgCheckpointError](_errors_ig_checkpoint_error_.igcheckpointerror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from void*

Defined in /Users/bowzee/WebstormProjects/instagram-private-api/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from void*

*Overrides void*

Defined in /Users/bowzee/WebstormProjects/instagram-private-api/node_modules/ts-custom-error/dist/custom-error.d.ts:2

___

###  response

• **response**: *[IgResponse](../modules/_types_common_types_.md#igresponse)‹*[CheckpointResponse](../interfaces/_responses_checkpoint_response_.checkpointresponse.md)*›*

*Inherited from [IgResponseError](_errors_ig_response_error_.igresponseerror.md).[response](_errors_ig_response_error_.igresponseerror.md#response)*

*Defined in [errors/ig-response.error.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L9)*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from void*

*Overrides void*

Defined in /Users/bowzee/WebstormProjects/instagram-private-api/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

###  text

• **text**: *string*

*Inherited from [IgResponseError](_errors_ig_response_error_.igresponseerror.md).[text](_errors_ig_response_error_.igresponseerror.md#text)*

*Defined in [errors/ig-response.error.ts:7](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L7)*

## Accessors

###  apiUrl

• **get apiUrl**(): *string*

*Defined in [errors/ig-checkpoint.error.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-checkpoint.error.ts#L9)*

**Returns:** *string*

___

###  url

• **get url**(): *string*

*Defined in [errors/ig-checkpoint.error.ts:5](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-checkpoint.error.ts#L5)*

**Returns:** *string*