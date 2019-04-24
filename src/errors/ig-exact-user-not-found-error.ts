import { IgClientError } from './ig-client.error';

export class IgExactUserNotFoundError extends IgClientError {
  constructor() {
    super('User with exact username not found.');
  }
}
