import { CustomError } from 'ts-custom-error';

export class IgClientError extends CustomError {
  constructor(message = 'Instagram API error was made.') {
    super(message);
    // Fix for ts-custom-error. Otherwise console.error will show JSON instead of just stack trace
    Object.defineProperty(this, 'name', {
      value: new.target.name,
      enumerable: false,
    });
  }
}
