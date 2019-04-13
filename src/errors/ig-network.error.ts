import { IgClientError } from './ig-client.error';

export class IgNetworkError extends IgClientError {
  constructor(e: Error) {
    super();
    Object.assign(this, e);
  }
}
