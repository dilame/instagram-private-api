> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-action-spam.error"](../modules/_errors_ig_action_spam_error_.md) / [IgActionSpamError](_errors_ig_action_spam_error_.igactionspamerror.md) /

# Class: IgActionSpamError

## Hierarchy

- [IgResponseError](_errors_ig_response_error_.igresponseerror.md)‹_[SpamResponse](../interfaces/\_responses_spam_response_.spamresponse.md)\_›

- **IgActionSpamError**

## Index

### Constructors

- [constructor](_errors_ig_action_spam_error_.igactionspamerror.md#constructor)

### Properties

- [response](_errors_ig_action_spam_error_.igactionspamerror.md#response)
- [text](_errors_ig_action_spam_error_.igactionspamerror.md#text)

### Accessors

- [expirationDate](_errors_ig_action_spam_error_.igactionspamerror.md#expirationdate)

## Constructors

### constructor

\+ **new IgActionSpamError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹_[SpamResponse](../interfaces/\_responses_spam_response_.spamresponse.md)_›): _[IgActionSpamError](_errors_ig_action_spam_error_.igactionspamerror.md)\_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)\_

_Overrides [IgClientError](\_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

**Parameters:**

| Name       | Type                                                                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹_[SpamResponse](../interfaces/\_responses_spam_response_.spamresponse.md)\_› |

**Returns:** _[IgActionSpamError](\_errors_ig_action_spam_error_.igactionspamerror.md)\_

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

## Accessors

### expirationDate

• **get expirationDate**(): _string | null_

_Defined in [errors/ig-action-spam.error.ts:5](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-action-spam.error.ts#L5)_

**Returns:** _string | null_
