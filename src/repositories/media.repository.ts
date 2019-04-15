import { omit } from 'lodash';
import { Repository } from '../core/repository';
import { LikeRequestOptions, MediaLikeOrUnlikeOptions, UnlikeRequestOptions } from '../types/media.like.options';
import { MediaRepositoryLikersResponseRootObject } from '../responses/media.repository.likers.response';

export class MediaRepository extends Repository {
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
      method: 'POST',
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
  public async likers(id: string): Promise<MediaRepositoryLikersResponseRootObject> {
    const { body } = await this.client.request.send<MediaRepositoryLikersResponseRootObject>({
      url: `/api/v1/media/${id}/likers`,
    });
    return body;
  }
}
