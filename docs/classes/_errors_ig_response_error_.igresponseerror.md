> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-response.error"](../modules/_errors_ig_response_error_.md) / [IgResponseError](_errors_ig_response_error_.igresponseerror.md) /

# Class: IgResponseError <**TBody**>

## Type parameters

▪ **TBody**: _object_

## Hierarchy

- [IgClientError](_errors_ig_client_error_.igclienterror.md)

- **IgResponseError**

- [IgSignupBlockError](_errors_ig_signup_block_error_.igsignupblockerror.md)

- [IgActionSpamError](_errors_ig_action_spam_error_.igactionspamerror.md)

- [IgCheckpointError](_errors_ig_checkpoint_error_.igcheckpointerror.md)

- [IgLoginBadPasswordError](_errors_ig_login_bad_password_error_.igloginbadpassworderror.md)

- [IgLoginInvalidUserError](_errors_ig_login_invalid_user_error_.iglogininvalidusererror.md)

- [IgLoginRequiredError](_errors_ig_login_required_error_.igloginrequirederror.md)

- [IgLoginTwoFactorRequiredError](_errors_ig_login_two_factor_required_error_.iglogintwofactorrequirederror.md)

- [IgNotFoundError](_errors_ig_not_found_error_.ignotfounderror.md)

- [IgPrivateUserError](_errors_ig_private_user_error_.igprivateusererror.md)

- [IgSentryBlockError](_errors_ig_sentry_block_error_.igsentryblockerror.md)

## Index

### Constructors

- [constructor](_errors_ig_response_error_.igresponseerror.md#constructor)

### Properties

- [response](_errors_ig_response_error_.igresponseerror.md#response)
- [text](_errors_ig_response_error_.igresponseerror.md#text)

## Constructors

### constructor

\+ **new IgResponseError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹_`TBody`_›): _[IgResponseError](\_errors_ig_response_error_.igresponseerror.md)\_

_Overrides [IgClientError](\_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

**Parameters:**

| Name       | Type                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| `response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹_`TBody`_› |

**Returns:** _[IgResponseError](\_errors_ig_response_error_.igresponseerror.md)\_

## Properties

### response

• **response**: _[IgResponse](../modules/\_types_common_types_.md#igresponse)‹_`TBody`_›\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

---

### text

• **text**: _string_

_Defined in [errors/ig-response.error.ts:7](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L7)_
