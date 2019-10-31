import { LoginRequiredResponse } from '../responses';
import { IgResponseError } from './ig-response.error';

export class IgUserHasLoggedOutError extends IgResponseError<LoginRequiredResponse> {}
