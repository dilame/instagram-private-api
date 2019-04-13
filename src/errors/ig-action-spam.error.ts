import { IgResponseError } from './ig-response.error';
import { SpamResponse } from '../responses';

export class IgActionSpamError extends IgResponseError<SpamResponse> {
  get expirationDate(): string | null {
    const date = this.response.body.feedback_message.match(/(\d{4}-\d{2}-\d{2})/);
    if (date === null) {
      return null;
    }
    return date[0];
  }
}
