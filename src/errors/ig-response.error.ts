import { IgClientError } from './ig-client.error';
import { IgResponse } from '../types/ig-response';

export class IgResponseError<TBody extends { [x: string]: any } = any> extends IgClientError {
  constructor(public response: IgResponse<TBody>, public text = response.body.message) {
    super(
      `${response.request.method} ${response.request.uri.path} - ${response.statusCode} ${
        response.statusMessage
      }; ${text || ''}`,
    );
  }
}
