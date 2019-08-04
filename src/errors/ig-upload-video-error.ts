import { IgResponseError } from './ig-response.error';
import { IgResponse } from '../types';
import { UploadRepositoryVideoResponseRootObject } from '../responses';

export class IgUploadVideoError extends IgResponseError {
  public videoInfo;
  constructor(response: IgResponse<UploadRepositoryVideoResponseRootObject>, videoInfo) {
    super(response);
    this.videoInfo = videoInfo;
  }
}
