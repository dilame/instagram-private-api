import { CustomError } from 'ts-custom-error';
import { CheckpointResponse } from './responses';
import { Response } from 'request';
import { LoginRequiredResponse, SpamResponse } from './responses';

// Basic error
export class APIError extends CustomError {
  constructor(message = 'Instagram API error was made.') {
    super(message);
  }
}

export class RequestError<TBody extends { [x: string]: any } = any> extends APIError {
  constructor(public response: Pick<Response, Exclude<keyof Response, 'body'>> & { body: TBody }) {
    super(
      `${response.body.message || ''}; ${response.request.method} ${response.request.uri.path} - ${
        response.statusCode
      } ${response.statusMessage}`,
    );
  }
}

export class AuthenticationError extends RequestError<LoginRequiredResponse> {}

export class ParseError extends APIError {
  constructor(public body: string) {
    super('Not possible to parse API response');
  }
}

export class ActionSpamError extends RequestError<SpamResponse> {
  get expirationDate(): string | null {
    const date = this.response.body.feedback_message.match(/(\d{4}-\d{2}-\d{2})/);
    if (date === null) return null;
    return date[0];
  }
}

export class CheckpointError extends RequestError<CheckpointResponse> {
  get url() {
    return this.response.body.challenge.url;
  }

  get apiUrl() {
    return 'https://i.instagram.com/api/v1' + this.response.body.challenge.api_path;
  }
}

export class SentryBlockError extends APIError {
  constructor(public json) {
    super('Sentry block from instagram');
  }
}

export class OnlyRankedItemsError extends APIError {
  constructor() {
    super('Tag has only ranked items to show, due to blocked content');
  }
}

export class NotFoundError extends APIError {
  constructor(public response) {
    super(`Page wasn't found!`);
  }
}

export class PrivateUserError extends RequestError {}

export class TooManyFollowsError extends APIError {
  constructor() {
    super('Account has just too much follows');
  }
}

export class RequestsLimitError extends APIError {
  constructor() {
    super('You just made too many request to instagram API');
  }
}

export class CookieNotValidError extends APIError {
  constructor(cookieName) {
    super(`Cookie '${cookieName}' you are searching found was either not found or not valid!`);
  }
}

export class IGAccountNotFoundError extends APIError {
  constructor() {
    super('Account you are searching for was not found!');
  }
}

export class ThreadEmptyError extends APIError {
  constructor() {
    super('Thread is empty there are no items!');
  }
}

export class AccountBannedError extends APIError {
  constructor(message) {
    super(message);
  }
}

export class PlaceNotFound extends APIError {
  constructor() {
    super('Place you are searching for not exists!');
  }
}

export class NotPossibleToResolveChallenge extends APIError {
  static CODE = {
    RESET_NOT_WORKING: 'RESET_NOT_WORKING',
    NOT_ACCEPTING_NUMBER: 'NOT_ACCEPTING_NUMBER',
    INCORRECT_NUMBER: 'INCORRECT_NUMBER',
    INCORRECT_CODE: 'INCORRECT_CODE',
    UNKNOWN: 'UNKNOWN',
    UNABLE_TO_PARSE: 'UNABLE_TO_PARSE',
    NOT_ACCEPTED: 'NOT_ACCEPTED',
  };

  constructor(public reason = 'Unknown reason', public code = NotPossibleToResolveChallenge.CODE.UNKNOWN) {
    super(`Not possible to resolve challenge (${reason})!`);
  }
}

export class NoChallengeRequired extends APIError {
  constructor() {
    super('No challenge is required to use account!');
  }
}

export class InvalidEmail extends APIError {
  constructor(email, public json?) {
    super(`${email} email is not an valid email`);
  }
}

export class InvalidUsername extends APIError {
  constructor(username, public json?) {
    super(`${username} username is not an valid username`);
  }
}

export class InvalidPhone extends APIError {
  constructor(phone, public json?) {
    super(`${phone} phone is not a valid phone`);
  }
}

export class InvalidPassword extends APIError {
  constructor() {
    super('Password must be at least 6 chars long');
  }
}

export class AccountRegistrationError extends APIError {
  constructor(message, public json?) {
    super(message);
  }
}

export class TranscodeTimeoutError extends APIError {
  constructor() {
    super('Server did not transcoded uploaded video in time');
  }
}

export class MediaUnavailableError extends APIError {
  constructor() {
    super('Media is unavailable');
  }
}
