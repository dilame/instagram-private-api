> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-signup-block.error"](../modules/_errors_ig_signup_block_error_.md) / [IgSignupBlockError](_errors_ig_signup_block_error_.igsignupblockerror.md) /

# Class: IgSignupBlockError

## Hierarchy

- [IgResponseError](_errors_ig_response_error_.igresponseerror.md)‹_[SpamResponse](../interfaces/\_responses_spam_response_.spamresponse.md)\_›

- **IgSignupBlockError**

## Index

### Constructors

- [constructor](_errors_ig_signup_block_error_.igsignupblockerror.md#constructor)

### Properties

- [response](_errors_ig_signup_block_error_.igsignupblockerror.md#response)
- [text](_errors_ig_signup_block_error_.igsignupblockerror.md#text)

## Constructors

### constructor

\+ **new IgSignupBlockError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹_[SpamResponse](../interfaces/\_responses_spam_response_.spamresponse.md)_›): _[IgSignupBlockError](_errors_ig_signup_block_error_.igsignupblockerror.md)\_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)\_

_Overrides [IgClientError](\_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

**Parameters:**

| Name       | Type                                                                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹_[SpamResponse](../interfaces/\_responses_spam_response_.spamresponse.md)\_› |

**Returns:** _[IgSignupBlockError](\_errors_ig_signup_block_error_.igsignupblockerror.md)\_

## Properties

### response

• **response**: _[IgResponse](../modules/\_types_common_types_.md#igresponse)‹_[SpamResponse](../interfaces/\_responses_spam_response_.spamresponse.md)_›_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[response](_errors_ig_response_error_.igresponseerror.md#response)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

---

### text

• **text**: _string_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[text](_errors_ig_response_error_.igresponseerror.md#text)\_

_Defined in [errors/ig-response.error.ts:7](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L7)_
