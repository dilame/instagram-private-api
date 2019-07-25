> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-sentry-block.error"](../modules/_errors_ig_sentry_block_error_.md) / [IgSentryBlockError](_errors_ig_sentry_block_error_.igsentryblockerror.md) /

# Class: IgSentryBlockError <**TBody**>

## Type parameters

▪ **TBody**: _object_

## Hierarchy

- [IgResponseError](_errors_ig_response_error_.igresponseerror.md)

- **IgSentryBlockError**

## Index

### Constructors

- [constructor](_errors_ig_sentry_block_error_.igsentryblockerror.md#constructor)

### Properties

- [response](_errors_ig_sentry_block_error_.igsentryblockerror.md#response)
- [text](_errors_ig_sentry_block_error_.igsentryblockerror.md#text)

## Constructors

### constructor

\+ **new IgSentryBlockError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹_`TBody`_›): _[IgSentryBlockError](\_errors_ig_sentry_block_error_.igsentryblockerror.md)\_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)\_

_Overrides [IgClientError](\_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

**Parameters:**

| Name       | Type                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| `response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹_`TBody`_› |

**Returns:** _[IgSentryBlockError](\_errors_ig_sentry_block_error_.igsentryblockerror.md)\_

## Properties

### response

• **response**: _[IgResponse](../modules/\_types_common_types_.md#igresponse)‹_`TBody`_›\_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[response](_errors_ig_response_error_.igresponseerror.md#response)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

---

### text

• **text**: _string_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[text](_errors_ig_response_error_.igresponseerror.md#text)\_

_Defined in [errors/ig-response.error.ts:7](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L7)_
