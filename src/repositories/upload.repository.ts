import { random } from 'lodash';
import { Repository } from '../core/repository';
import { UploadPhotoOptions } from '../types/upload.photo.options';
import Chance = require('chance');
import streamLength = require('stream-length');
import { UploadRepositoryPhotoResponseRootObject } from '../responses';

export class UploadRepository extends Repository {
  private chance = new Chance();

  public async photo(options: UploadPhotoOptions): Promise<UploadRepositoryPhotoResponseRootObject> {
    const uploadId = options.uploadId || Date.now();
    const ruploadParams = {
      retry_context: JSON.stringify({ num_step_auto_retry: 0, num_reupload: 0, num_step_manual_retry: 0 }),
      media_type: '1',
      upload_id: uploadId.toString(),
      xsharing_user_ids: JSON.stringify([]),
      image_compression: JSON.stringify({ lib_name: 'moz', lib_version: '3.1.m', quality: '70' }),
    };
    const name = `${uploadId}_0_-${random(1000000000, 9999999999)}`;
    const contentLength = await streamLength(options.file);
    const { body } = await this.client.request.send<UploadRepositoryPhotoResponseRootObject>({
      url: `/rupload_igphoto/${name}`,
      method: 'POST',
      headers: {
        X_FB_PHOTO_WATERFALL_ID: this.chance.guid(),
        'X-Entity-Type': 'image/jpeg',
        Offset: 0,
        'X-Instagram-Rupload-Params': JSON.stringify(ruploadParams),
        'X-Entity-Name': name,
        'X-Entity-Length': contentLength,
        'Content-Type': 'application/octet-stream',
        'Content-Length': contentLength,
        'Accept-Encoding': 'gzip',
      },
      body: options.file,
    });
    return body;
  }
}
