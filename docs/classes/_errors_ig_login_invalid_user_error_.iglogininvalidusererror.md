> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-login-invalid-user.error"](../modules/_errors_ig_login_invalid_user_error_.md) / [IgLoginInvalidUserError](_errors_ig_login_invalid_user_error_.iglogininvalidusererror.md) /

# Class: IgLoginInvalidUserError

## Hierarchy

- [IgResponseError](_errors_ig_response_error_.igresponseerror.md)‹_[AccountRepositoryLoginErrorResponse](../interfaces/\_responses_account_repository_login_error_response_.accountrepositoryloginerrorresponse.md)\_›

- **IgLoginInvalidUserError**

## Index

### Constructors

- [constructor](_errors_ig_login_invalid_user_error_.iglogininvalidusererror.md#constructor)

### Properties

- [response](_errors_ig_login_invalid_user_error_.iglogininvalidusererror.md#response)
- [text](_errors_ig_login_invalid_user_error_.iglogininvalidusererror.md#text)

## Constructors

### constructor

\+ **new IgLoginInvalidUserError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹_[AccountRepositoryLoginErrorResponse](../interfaces/\_responses_account_repository_login_error_response_.accountrepositoryloginerrorresponse.md)_›): _[IgLoginInvalidUserError](_errors_ig_login_invalid_user_error_.iglogininvalidusererror.md)\_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)\_

_Overrides [IgClientError](\_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

**Parameters:**

| Name       | Type                                                                                                                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹_[AccountRepositoryLoginErrorResponse](../interfaces/\_responses_account_repository_login_error_response_.accountrepositoryloginerrorresponse.md)\_› |

**Returns:** _[IgLoginInvalidUserError](\_errors_ig_login_invalid_user_error_.iglogininvalidusererror.md)\_

## Properties

### response

• **response**: _[IgResponse](../modules/\_types_common_types_.md#igresponse)‹_[AccountRepositoryLoginErrorResponse](../interfaces/\_responses_account_repository_login_error_response_.accountrepositoryloginerrorresponse.md)_›_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[response](_errors_ig_response_error_.igresponseerror.md#response)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

---

### text

• **text**: _string_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[text](_errors_ig_response_error_.igresponseerror.md#text)\_

_Defined in [errors/ig-response.error.ts:7](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L7)_
