import { IgResponseError } from './ig-response.error';
import { IgResponse } from '../types';
import { UploadRepositoryVideoResponseRootObject } from '../responses';

export class IgUploadVideoError extends IgResponseError {
  constructor(response: IgResponse<UploadRepositoryVideoResponseRootObject>, public videoInfo) {
    super(response);
  }
}
