import { IgClientError } from './ig-client.error';

export class IgRequestsLimitError extends IgClientError {
  constructor() {
    super('You just made too many request to instagram API');
  }
}
