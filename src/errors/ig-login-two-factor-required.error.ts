import { IgResponseError } from './ig-response.error';
import { AccountRepositoryLoginErrorResponse } from '../responses';

export class IgLoginTwoFactorRequiredError extends IgResponseError<AccountRepositoryLoginErrorResponse> {}
