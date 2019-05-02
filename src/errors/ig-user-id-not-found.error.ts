import { IgClientError } from './ig-client.error';

export class IgUserIdNotFoundError extends IgClientError {
  constructor() {
    super(`Could not extract userid (pk)`);
  }
}
