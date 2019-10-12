> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-not-found.error"](../modules/_errors_ig_not_found_error_.md) / [IgNotFoundError](_errors_ig_not_found_error_.ignotfounderror.md) /

# Class: IgNotFoundError <**TBody**>

## Type parameters

▪ **TBody**: *object*

## Hierarchy

  * [IgResponseError](_errors_ig_response_error_.igresponseerror.md)

  * **IgNotFoundError**

## Index

### Constructors

* [constructor](_errors_ig_not_found_error_.ignotfounderror.md#constructor)

### Properties

* [message](_errors_ig_not_found_error_.ignotfounderror.md#message)
* [name](_errors_ig_not_found_error_.ignotfounderror.md#name)
* [response](_errors_ig_not_found_error_.ignotfounderror.md#response)
* [stack](_errors_ig_not_found_error_.ignotfounderror.md#optional-stack)
* [text](_errors_ig_not_found_error_.ignotfounderror.md#text)

## Constructors

###  constructor

\+ **new IgNotFoundError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹*`TBody`*›): *[IgNotFoundError](_errors_ig_not_found_error_.ignotfounderror.md)*

*Inherited from [IgResponseError](_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)*

*Overrides [IgClientError](_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)*

*Defined in [errors/ig-response.error.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹*`TBody`*› |

**Returns:** *[IgNotFoundError](_errors_ig_not_found_error_.ignotfounderror.md)*

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