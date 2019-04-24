import { IgClientError } from './ig-client.error';

export class IgCookieNotFoundError extends IgClientError {
  constructor(name: string) {
    super(`Cookie "${name}" not found`);
  }
}
