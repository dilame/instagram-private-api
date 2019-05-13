import { Response } from 'request';

export type IgResponse<Body> = Pick<Response, Exclude<keyof Response, 'body'>> & { body: Body };
