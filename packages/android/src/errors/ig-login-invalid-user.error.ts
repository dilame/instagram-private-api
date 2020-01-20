import { IgResponseError } from './ig-response.error';
import { AccountRepositoryLoginErrorResponse } from '../responses';

export class IgLoginInvalidUserError extends IgResponseError<AccountRepositoryLoginErrorResponse> {}
