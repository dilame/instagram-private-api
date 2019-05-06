import { IgClientError } from './ig-client.error';
import { IgResponse } from '../types/ig-response';

export class IgResponseError<TBody extends { [x: string]: any } = any> extends IgClientError {
  public text: string;
  constructor(public response: IgResponse<TBody>) {
    super(
      `${response.request.method} ${response.request.uri.path} - ${response.statusCode} ${
        response.statusMessage
      }; ${response.body.message || ''}`,
    );
    if (response.body.message) {
      this.text = response.body.message;
    }
    Object.defineProperty(this, 'response', {
      enumerable: false,
    });
  }
}
