import { IgClientError } from './ig-client.error';
import { Response } from 'request';

export class IgResponseError<TBody extends { [x: string]: any } = any> extends IgClientError {
  constructor(public response: Pick<Response, Exclude<keyof Response, 'body'>> & { body: TBody }) {
    super(
      `${response.request.method} ${response.request.uri.path} - ${response.statusCode} ${
        response.statusMessage
      }; ${response.body.message || ''}`,
    );
  }
}
