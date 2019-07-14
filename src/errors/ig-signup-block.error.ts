import { IgResponseError } from './ig-response.error';
import { SpamResponse } from '../responses';

export class IgSignupBlockError extends IgResponseError<SpamResponse> {}
