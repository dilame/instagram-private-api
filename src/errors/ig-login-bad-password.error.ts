import { IgResponseError } from './ig-response.error';
import { AccountRepositoryLoginErrorResponse } from '../responses';

export class IgLoginBadPasswordError extends IgResponseError<AccountRepositoryLoginErrorResponse> {}
