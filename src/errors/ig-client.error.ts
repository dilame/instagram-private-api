import { CustomError } from 'ts-custom-error';

export class IgClientError extends CustomError {
  constructor(message = 'Instagram API error was made.') {
    super(message);
  }
}
