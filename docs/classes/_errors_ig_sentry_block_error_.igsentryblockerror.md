> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-sentry-block.error"](../modules/_errors_ig_sentry_block_error_.md) / [IgSentryBlockError](_errors_ig_sentry_block_error_.igsentryblockerror.md) /

# Class: IgSentryBlockError <**TBody**>

## Type parameters

▪ **TBody**: *object*

## Hierarchy

  * [IgResponseError](_errors_ig_response_error_.igresponseerror.md)

  * **IgSentryBlockError**

## Index

### Constructors

* [constructor](_errors_ig_sentry_block_error_.igsentryblockerror.md#constructor)

### Properties

* [message](_errors_ig_sentry_block_error_.igsentryblockerror.md#message)
* [name](_errors_ig_sentry_block_error_.igsentryblockerror.md#name)
* [response](_errors_ig_sentry_block_error_.igsentryblockerror.md#response)
* [stack](_errors_ig_sentry_block_error_.igsentryblockerror.md#optional-stack)
* [text](_errors_ig_sentry_block_error_.igsentryblockerror.md#text)

## Constructors

###  constructor

\+ **new IgSentryBlockError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹*`TBody`*›): *[IgSentryBlockError](_errors_ig_sentry_block_error_.igsentryblockerror.md)*

*Inherited from [IgResponseError](_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)*

*Overrides [IgClientError](_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)*

*Defined in [errors/ig-response.error.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹*`TBody`*› |

**Returns:** *[IgSentryBlockError](_errors_ig_sentry_block_error_.igsentryblockerror.md)*

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

• **response**: *[IgResponse](../modules/_types_common_types_.md#igresponse)‹*`TBody`*›*

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