import { omit } from 'lodash';
import { InstagramRepository } from './repository';
import { LikeRequestOptions, MediaLikeOrUnlikeOptions, UnlikeRequestOptions } from '../types/media.like.options';

export class MediaRepository extends InstagramRepository {
  private async likeAction(options: MediaLikeOrUnlikeOptions) {
    const signedFormData = this.client.request.signPost({
      module_name: options.moduleInfo.module_name,
      media_id: options.mediaId,
      _csrftoken: this.client.state.CSRFToken,
      ...omit(options.moduleInfo, 'module_name'),
      radio_type: 'wifi-none',
      _uid: await this.client.state.extractCookieAccountId(),
      device_id: this.client.state.deviceId,
      _uuid: this.client.state.uuid,
    });

    return this.client.request.send({
      url: `/api/v1/media/${options.mediaId}/${options.action}/`,
      // method: 'POST',
      form: {
        ...signedFormData,
        d: options.d,
      },
    });
  }
  public async like(options: LikeRequestOptions) {
    return this.likeAction({
      action: 'like',
      ...options,
    });
  }
  public async unlike(options: UnlikeRequestOptions) {
    return this.likeAction({
      action: 'unlike',
      ...options,
    });
  }
}
