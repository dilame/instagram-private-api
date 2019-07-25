> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-login-required.error"](../modules/_errors_ig_login_required_error_.md) / [IgLoginRequiredError](_errors_ig_login_required_error_.igloginrequirederror.md) /

# Class: IgLoginRequiredError

## Hierarchy

- [IgResponseError](_errors_ig_response_error_.igresponseerror.md)‹_[LoginRequiredResponse](../interfaces/\_responses_login_required_response_.loginrequiredresponse.md)\_›

- **IgLoginRequiredError**

## Index

### Constructors

- [constructor](_errors_ig_login_required_error_.igloginrequirederror.md#constructor)

### Properties

- [response](_errors_ig_login_required_error_.igloginrequirederror.md#response)
- [text](_errors_ig_login_required_error_.igloginrequirederror.md#text)

## Constructors

### constructor

\+ **new IgLoginRequiredError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹_[LoginRequiredResponse](../interfaces/\_responses_login_required_response_.loginrequiredresponse.md)_›): _[IgLoginRequiredError](_errors_ig_login_required_error_.igloginrequirederror.md)\_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)\_

_Overrides [IgClientError](\_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

**Parameters:**

| Name       | Type                                                                                                                                                                 |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹_[LoginRequiredResponse](../interfaces/\_responses_login_required_response_.loginrequiredresponse.md)\_› |

**Returns:** _[IgLoginRequiredError](\_errors_ig_login_required_error_.igloginrequirederror.md)\_

## Properties

### response

• **response**: _[IgResponse](../modules/\_types_common_types_.md#igresponse)‹_[LoginRequiredResponse](../interfaces/\_responses_login_required_response_.loginrequiredresponse.md)_›_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[response](_errors_ig_response_error_.igresponseerror.md#response)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

---

### text

• **text**: _string_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[text](_errors_ig_response_error_.igresponseerror.md#text)\_

_Defined in [errors/ig-response.error.ts:7](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L7)_
