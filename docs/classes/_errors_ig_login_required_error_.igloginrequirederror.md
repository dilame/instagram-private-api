> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-login-required.error"](../modules/_errors_ig_login_required_error_.md) / [IgLoginRequiredError](_errors_ig_login_required_error_.igloginrequirederror.md) /

# Class: IgLoginRequiredError

## Hierarchy

  * [IgResponseError](_errors_ig_response_error_.igresponseerror.md)‹*[LoginRequiredResponse](../interfaces/_responses_login_required_response_.loginrequiredresponse.md)*›

  * **IgLoginRequiredError**

## Index

### Constructors

* [constructor](_errors_ig_login_required_error_.igloginrequirederror.md#constructor)

### Properties

* [message](_errors_ig_login_required_error_.igloginrequirederror.md#message)
* [name](_errors_ig_login_required_error_.igloginrequirederror.md#name)
* [response](_errors_ig_login_required_error_.igloginrequirederror.md#response)
* [stack](_errors_ig_login_required_error_.igloginrequirederror.md#optional-stack)
* [text](_errors_ig_login_required_error_.igloginrequirederror.md#text)

## Constructors

###  constructor

\+ **new IgLoginRequiredError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹*[LoginRequiredResponse](../interfaces/_responses_login_required_response_.loginrequiredresponse.md)*›): *[IgLoginRequiredError](_errors_ig_login_required_error_.igloginrequirederror.md)*

*Inherited from [IgResponseError](_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)*

*Overrides [IgClientError](_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)*

*Defined in [errors/ig-response.error.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹*[LoginRequiredResponse](../interfaces/_responses_login_required_response_.loginrequiredresponse.md)*› |

**Returns:** *[IgLoginRequiredError](_errors_ig_login_required_error_.igloginrequirederror.md)*

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

• **response**: *[IgResponse](../modules/_types_common_types_.md#igresponse)‹*[LoginRequiredResponse](../interfaces/_responses_login_required_response_.loginrequiredresponse.md)*›*

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