import { IgClientError } from './ig-client.error';

export class IgNoCheckpointError extends IgClientError {
  constructor(message = 'No checkpoint data available') {
    super(message);
  }
}
