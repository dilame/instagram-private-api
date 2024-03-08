import { IgResponseError } from './ig-response.error';
import { IgResponse } from '../types';
import { UploadRepositoryVideoResponseRootObject } from '../responses';

export class IgUploadLiveIgtvError extends IgResponseError {
  constructor(response: IgResponse<UploadRepositoryVideoResponseRootObject>) {
    super(response);
  }
}
