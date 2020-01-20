import { Repository } from '../core/repository';
import {
  HighlightsRepositoryCreateReelResponseRootObject,
  HighlightsRepositoryEditReelResponseRootObject,
  HighlightsRepositoryHighlightsTrayResponseRootObject,
  StatusResponse,
} from '../responses';
import { CreateHighlightsReelOptions, EditHighlightsReelOptions } from '../types';

export class HighlightsRepository extends Repository {
  public async highlightsTray(userId: string | number): Promise<HighlightsRepositoryHighlightsTrayResponseRootObject> {
    const { body } = await this.client.request.send<HighlightsRepositoryHighlightsTrayResponseRootObject>({
      url: `/api/v1/highlights/${userId}/highlights_tray/`,
      method: 'GET',
      qs: {
        supported_capabilities_new: JSON.stringify(this.client.state.supportedCapabilities),
        phone_id: this.client.state.phoneId,
        battery_level: this.client.state.batteryLevel,
        is_charging: Number(this.client.state.isCharging),
        will_sound_on: 0,
      },
    });
    return body;
  }
  public async createReel(
    options: CreateHighlightsReelOptions,
  ): Promise<HighlightsRepositoryCreateReelResponseRootObject> {
    const { body } = await this.client.request.send<HighlightsRepositoryCreateReelResponseRootObject>({
      url: '/api/v1/highlights/create_reel/',
      method: 'POST',
      form: this.client.request.sign({
        supported_capabilities_new: JSON.stringify(this.client.state.supportedCapabilities),
        source: options.source || 'story_viewer_profile',
        creation_id: Date.now().toString(),
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        cover: JSON.stringify({
          media_id: options.coverId || options.mediaIds[0],
        }),
        title: options.title,
        media_ids: JSON.stringify(options.mediaIds),
      }),
    });
    return body;
  }
  public async editReel(options: EditHighlightsReelOptions): Promise<HighlightsRepositoryEditReelResponseRootObject> {
    const { body } = await this.client.request.send<HighlightsRepositoryEditReelResponseRootObject>({
      url: `/api/v1/highlights/${options.highlightId}/edit_reel/`,
      method: 'POST',
      form: this.client.request.sign({
        supported_capabilities_new: JSON.stringify(this.client.state.supportedCapabilities),
        source: options.source || 'story_viewer_default',
        added_media_ids: JSON.stringify(options.added || []),
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        cover: JSON.stringify({
          media_id: options.coverId,
        }),
        title: options.title,
        removed_media_ids: JSON.stringify(options.removed || []),
      }),
    });
    return body;
  }
  public async deleteReel(highlightId: string): Promise<StatusResponse> {
    const { body } = await this.client.request.send<StatusResponse>({
      url: `/api/v1/highlights/${highlightId}/delete_reel/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }
}
