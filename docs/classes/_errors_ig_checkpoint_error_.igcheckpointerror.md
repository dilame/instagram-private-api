> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-checkpoint.error"](../modules/_errors_ig_checkpoint_error_.md) / [IgCheckpointError](_errors_ig_checkpoint_error_.igcheckpointerror.md) /

# Class: IgCheckpointError

## Hierarchy

- [IgResponseError](_errors_ig_response_error_.igresponseerror.md)‹_[CheckpointResponse](../interfaces/\_responses_checkpoint_response_.checkpointresponse.md)\_›

- **IgCheckpointError**

## Index

### Constructors

- [constructor](_errors_ig_checkpoint_error_.igcheckpointerror.md#constructor)

### Properties

- [response](_errors_ig_checkpoint_error_.igcheckpointerror.md#response)
- [text](_errors_ig_checkpoint_error_.igcheckpointerror.md#text)

### Accessors

- [apiUrl](_errors_ig_checkpoint_error_.igcheckpointerror.md#apiurl)
- [url](_errors_ig_checkpoint_error_.igcheckpointerror.md#url)

## Constructors

### constructor

\+ **new IgCheckpointError**(`response`: [IgResponse](../modules/_types_common_types_.md#igresponse)‹_[CheckpointResponse](../interfaces/\_responses_checkpoint_response_.checkpointresponse.md)_›): _[IgCheckpointError](_errors_ig_checkpoint_error_.igcheckpointerror.md)\_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[constructor](_errors_ig_response_error_.igresponseerror.md#constructor)\_

_Overrides [IgClientError](\_errors_ig_client_error_.igclienterror.md).[constructor](_errors_ig_client_error_.igclienterror.md#constructor)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

**Parameters:**

| Name       | Type                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | [IgResponse](../modules/_types_common_types_.md#igresponse)‹_[CheckpointResponse](../interfaces/\_responses_checkpoint_response_.checkpointresponse.md)\_› |

**Returns:** _[IgCheckpointError](\_errors_ig_checkpoint_error_.igcheckpointerror.md)\_

## Properties

### response

• **response**: _[IgResponse](../modules/\_types_common_types_.md#igresponse)‹_[CheckpointResponse](../interfaces/\_responses_checkpoint_response_.checkpointresponse.md)_›_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[response](_errors_ig_response_error_.igresponseerror.md#response)\_

_Defined in [errors/ig-response.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L9)_

---

### text

• **text**: _string_

_Inherited from [IgResponseError](\_errors_ig_response_error_.igresponseerror.md).[text](_errors_ig_response_error_.igresponseerror.md#text)\_

_Defined in [errors/ig-response.error.ts:7](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-response.error.ts#L7)_

## Accessors

### apiUrl

• **get apiUrl**(): _string_

_Defined in [errors/ig-checkpoint.error.ts:9](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-checkpoint.error.ts#L9)_

**Returns:** _string_

---

### url

• **get url**(): _any_

_Defined in [errors/ig-checkpoint.error.ts:5](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-checkpoint.error.ts#L5)_

**Returns:** _any_
