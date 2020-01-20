import { IgClientError } from './ig-client.error';

export class IgParseError extends IgClientError {
  constructor(public body: string) {
    super('Not possible to parse API response');
  }
}
