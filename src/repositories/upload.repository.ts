import { random } from 'lodash';
import { Repository } from '../core/repository';
import { UploadPhotoOptions } from '../types/upload.photo.options';
import Chance = require('chance');
import { UploadRepositoryPhotoResponseRootObject } from '../responses';
import { UploadVideoOptions } from '../types/upload.video.options';

export class UploadRepository extends Repository {
  private chance = new Chance();

  public async photo(options: UploadPhotoOptions): Promise<UploadRepositoryPhotoResponseRootObject> {
    const uploadId = options.uploadId || Date.now();
    const ruploadParams: any = {
      retry_context: JSON.stringify({ num_step_auto_retry: 0, num_reupload: 0, num_step_manual_retry: 0 }),
      media_type: '1',
      upload_id: uploadId.toString(),
      xsharing_user_ids: JSON.stringify([]),
      image_compression: JSON.stringify({ lib_name: 'moz', lib_version: '3.1.m', quality: '80' }),
    };
    if (options.isSidecar) {
      ruploadParams.is_sidecar = '1';
    }
    const name = `${uploadId}_0_-${random(1000000000, 9999999999)}`;
    const contentLength = options.file.byteLength;
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

  /**
   * Uploads a video (container: mp4 with h264 and aac)
   */
  public async video(options: UploadVideoOptions) {
    const { duration, width, height, video } = options;
    const uploadId = options.uploadId || Date.now();
    const name = `${uploadId}_0_-${random(1000000000, 9999999999)}`;
    const contentLength = video.byteLength;

    const ruploadParams: any = {
      retry_context: JSON.stringify({ num_step_auto_retry: 0, num_reupload: 0, num_step_manual_retry: 0 }),
      media_type: options.mediaType || '2',
      xsharing_user_ids: JSON.stringify([]),
      upload_id: uploadId.toString(),
      upload_media_height: height.toString(),
      upload_media_width: width.toString(),
      upload_media_duration_ms: duration.toString(),
    };
    if (options.isSidecar) {
      ruploadParams.is_sidecar = '1';
    }
    if (options.forAlbum) {
      ruploadParams.for_album = '1';
    }

    if (options.isDirect) {
      ruploadParams.direct_v2 = '1';
    }
    if (options.forDirectStory) {
      ruploadParams.for_direct_story = '1';
      ruploadParams.content_tags = '';
    }

    const { body } = await this.client.request.send({
      url: `/rupload_igvideo/${name}/`,
      method: 'POST',
      qs: {
        target: this.client.state.extractCookieValue('rur'),
      },
      headers: {
        X_FB_VIDEO_WATERFALL_ID: this.chance.guid(),
        'X-Entity-Type': 'video/mp4',
        Offset: 0,
        'X-Instagram-Rupload-Params': JSON.stringify(ruploadParams),
        'X-Entity-Name': name,
        'X-Entity-Length': contentLength,
        'Content-Type': 'application/octet-stream',
        'Content-Length': contentLength,
        'Accept-Encoding': 'gzip',
      },
      body: video,
    });
    return body;
  }
}
