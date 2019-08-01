> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["errors/ig-client.error"](../modules/_errors_ig_client_error_.md) / [IgClientError](_errors_ig_client_error_.igclienterror.md) /

# Class: IgClientError

## Hierarchy

- any

  - **IgClientError**

  - [IgResponseError](_errors_ig_response_error_.igresponseerror.md)

  - [IgChallengeWrongCodeError](_errors_ig_challenge_wrong_code_error_.igchallengewrongcodeerror.md)

  - [IgCookieNotFoundError](_errors_ig_cookie_not_found_error_.igcookienotfounderror.md)

  - [IgExactUserNotFoundError](_errors_ig_exact_user_not_found_error_.igexactusernotfounderror.md)

  - [IgNetworkError](_errors_ig_network_error_.ignetworkerror.md)

  - [IgNoCheckpointError](_errors_ig_no_checkpoint_error_.ignocheckpointerror.md)

  - [IgParseError](_errors_ig_parse_error_.igparseerror.md)

  - [IgRequestsLimitError](_errors_ig_requests_limit_error_.igrequestslimiterror.md)

  - [IgUserIdNotFoundError](_errors_ig_user_id_not_found_error_.iguseridnotfounderror.md)

## Index

### Constructors

- [constructor](_errors_ig_client_error_.igclienterror.md#constructor)

## Constructors

### constructor

\+ **new IgClientError**(`message`: string): _[IgClientError](\_errors_ig_client_error_.igclienterror.md)\_

_Defined in [errors/ig-client.error.ts:3](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/errors/ig-client.error.ts#L3)_

**Parameters:**

| Name      | Type   | Default                         |
| --------- | ------ | ------------------------------- |
| `message` | string | "Instagram API error was made." |

**Returns:** _[IgClientError](\_errors_ig_client_error_.igclienterror.md)\_
