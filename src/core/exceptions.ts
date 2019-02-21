import * as _ from 'lodash';
import { CustomError } from 'ts-custom-error';
import routes = require('./routes');

// Basic error
export class APIError extends CustomError {
  constructor(message = 'Instagram API error was made.') {
    super(message);
  }

  serialize() {
    return {
      error: this.constructor.name,
      errorMessage: this.message,
    };
  }
}

export class RequestError extends APIError {
  constructor(public json: any = {}) {
    super(json.message || `It's not possible to make request!`);
  }
}

export class AuthenticationError extends APIError {
  constructor(message = 'Not possible to authenticate') {
    super(message);
  }
}

export class ParseError extends APIError {
  constructor(public response, public request) {
    super('Not possible to parse API response');
    this.response = response;
  }

  getUrl() {
    return this.request.url;
  }
}

export class ActionSpamError extends APIError {
  constructor(public json) {
    super('This action was disabled due to block from instagram!');
    this.json = json;
  }

  serialize() {
    return _.extend(APIError.prototype.serialize.call(this), {
      errorData: {
        blockTime: this.getBlockTime(),
        message: this.getFeedbackMessage(),
      },
    });
  }

  getBlockTime() {
    if (_.isObject(this.json) && _.isString(this.json.feedback_message)) {
      const hours = this.json.feedback_message.match(/(\d+)(\s)*hour(s)/);
      if (!hours || !_.isArray(hours)) return 0;
      const blockTime = parseInt(hours[1]) * 60 * 60 * 1000;
      return blockTime + 1000 * 60 * 5;
    }
    return 0;
  }

  getFeedbackMessage() {
    let message = 'No feedback message';
    if (_.isString(this.json.feedback_message)) {
      const title = _.isString(this.json.feedback_title) ? this.json.feedback_title + ': ' : '';
      message = title + this.json.feedback_message;
    }
    return message;
  }
}

export class CheckpointError extends APIError {
  constructor(public json, public session) {
    super('Instagram call checkpoint for this action!');
  }

  get url() {
    const json = this.json;
    if (_.isString(json.checkpoint_url)) return json.checkpoint_url;
    if (_.isObject(json.checkpoint) && _.isString(json.checkpoint.url)) return json.checkpoint.url;
    if (_.isObject(json.challenge) && _.isString(json.challenge.url)) return json.challenge.url;
    return routes.getWebUrl('challenge');
  }

  get apiUrl() {
    return 'https://i.instagram.com/api/v1' + this.json.challenge.api_path;
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

export class PrivateUserError extends APIError {
  constructor(message = 'User is private and you are not authorized to view his content!') {
    super(message);
  }
}

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
  constructor(email, public json) {
    super(`${email} email is not an valid email`);
  }
}

export class InvalidUsername extends APIError {
  constructor(username, public json) {
    super(`${username} username is not an valid username`);
  }
}

export class InvalidPhone extends APIError {
  constructor(phone, public json) {
    super(`${phone} phone is not a valid phone`);
  }
}

export class InvalidPassword extends APIError {
  constructor() {
    super('Password must be at least 6 chars long');
  }
}

export class AccountRegistrationError extends APIError {
  constructor(message, public json) {
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
