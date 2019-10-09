> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-login-bad-password.error"](../modules/_errors_ig_login_bad_password_error_.md) / [IgLoginBadPasswordError](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md) /

# Class: IgLoginBadPasswordError

## Hierarchy

  * [IgResponseError](_errors_ig_response_error_.igresponseerror.md)‹*[AccountRepositoryLoginErrorResponse](../interfaces/_responses_account_repository_login_error_response_.accountrepositoryloginerrorresponse.md)*›

  * **IgLoginBadPasswordError**

## Index

### Constructors

* [constructor](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md#constructor)

### Properties

* [message](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md#message)
* [name](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md#name)
* [response](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md#response)
* [stack](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md#optional-stack)
* [text](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md#text)

## Constructors

###  constructor

\+ **new IgLoginBadPasswordError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹*[AccountRepositoryLoginErrorResponse](../interfaces/_responses_account_repository_login_error_response_.accountrepositoryloginerrorresponse.md)*›): *[IgLoginBadPasswordError](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md)*

*Inherited from [IgResponseError](_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)*

*Overrides [IgClientError](_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)*

*Defined in [errors/ig-response.error.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹*[AccountRepositoryLoginErrorResponse](../interfaces/_responses_account_repository_login_error_response_.accountrepositoryloginerrorresponse.md)*› |

**Returns:** *[IgLoginBadPasswordError](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md)*

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

• **response**: *[IgResponse](../modules/_types_common_types_.md#igresponse)‹*[AccountRepositoryLoginErrorResponse](../interfaces/_responses_account_repository_login_error_response_.accountrepositoryloginerrorresponse.md)*›*

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