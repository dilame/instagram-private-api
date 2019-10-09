> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-response.error"](../modules/_errors_ig_response_error_.md) / [IgResponseError](_errors_ig_response_error_.igresponseerror.md) /

# Class: IgResponseError <**TBody**>

## Type parameters

▪ **TBody**: *object*

## Hierarchy

  * [IgClientError](_errors_ig_client_error_.igclienterror.md)

  * **IgResponseError**

  * [IgActionSpamError](_errors_ig_action_spam_error_.igactionspamerror.md)

  * [IgCheckpointError](_errors_ig_checkpoint_error_.igcheckpointerror.md)

  * [IgInactiveUserError](_errors_ig_inactive_user_error_.iginactiveusererror.md)

  * [IgLoginBadPasswordError](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md)

  * [IgLoginInvalidUserError](_errors_ig_login_invalid_user_error_.iglogininvalidusererror.md)

  * [IgLoginRequiredError](_errors_ig_login_required_error_.igloginrequirederror.md)

  * [IgLoginTwoFactorRequiredError](_errors_ig_login_two_factor_required_error_.iglogintwofactorrequirederror.md)

  * [IgNotFoundError](_errors_ig_not_found_error_.ignotfounderror.md)

  * [IgPrivateUserError](_errors_ig_private_user_error_.igprivateusererror.md)

  * [IgSentryBlockError](_errors_ig_sentry_block_error_.igsentryblockerror.md)

  * [IgUploadVideoError](_errors_ig_upload_video_error_.iguploadvideoerror.md)

  * [IgSignupBlockError](_errors_ig_signup_block_error_.igsignupblockerror.md)

## Index

### Constructors

* [constructor](_errors_ig_response_error_.igresponseerror.md#constructor)

### Properties

* [message](_errors_ig_response_error_.igresponseerror.md#message)
* [name](_errors_ig_response_error_.igresponseerror.md#name)
* [response](_errors_ig_response_error_.igresponseerror.md#response)
* [stack](_errors_ig_response_error_.igresponseerror.md#optional-stack)
* [text](_errors_ig_response_error_.igresponseerror.md#text)

## Constructors

###  constructor

\+ **new IgResponseError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹*`TBody`*›): *[IgResponseError](_errors_ig_response_error_.igresponseerror.md)*

*Overrides [IgClientError](_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)*

*Defined in [errors/ig-response.error.ts:9](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹*`TBody`*› |

**Returns:** *[IgResponseError](_errors_ig_response_error_.igresponseerror.md)*

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

*Defined in [errors/ig-response.error.ts:7](https://github.com/dilame/instagram-private-api/blob/3e16058/src/errors/ig-response.error.ts#L7)*