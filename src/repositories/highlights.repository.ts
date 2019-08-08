import { Repository } from '../core/repository';
import { HighlightsRepositoryHighlightsTrayResponseRootObject } from '../responses';
import { CreateHighlightsReelOptions } from '../types';

export class HighlightsRepository extends Repository {
  public async highlightsTray(userId: string | number): Promise<HighlightsRepositoryHighlightsTrayResponseRootObject> {
    const {body} = await this.client.request.send<HighlightsRepositoryHighlightsTrayResponseRootObject>({
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
  public async createReel(options: CreateHighlightsReelOptions) {
    const {body} = await this.client.request.send({
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
}
