import { LoginRequiredResponse } from '../responses';
import { IgResponseError } from './ig-response.error';

export class IgLoginRequiredError extends IgResponseError<LoginRequiredResponse> {}
