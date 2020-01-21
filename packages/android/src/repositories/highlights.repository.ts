import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import {
  HighlightsRepositoryCreateReelResponseRootObject,
  HighlightsRepositoryEditReelResponseRootObject,
  HighlightsRepositoryHighlightsTrayResponseRootObject,
  StatusResponse,
} from '../responses';
import { CreateHighlightsReelOptions, EditHighlightsReelOptions } from '../types';

@injectable()
export class HighlightsRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async highlightsTray(userId: string | number): Promise<HighlightsRepositoryHighlightsTrayResponseRootObject> {
    const { body } = await this.http.send<HighlightsRepositoryHighlightsTrayResponseRootObject>({
      url: `/api/v1/highlights/${userId}/highlights_tray/`,
      method: 'GET',
      qs: {
        supported_capabilities_new: JSON.stringify(this.state.supportedCapabilities),
        phone_id: this.state.phoneId,
        battery_level: this.state.batteryLevel,
        is_charging: Number(this.state.isCharging),
        will_sound_on: 0,
      },
    });
    return body;
  }
  public async createReel(
    options: CreateHighlightsReelOptions,
  ): Promise<HighlightsRepositoryCreateReelResponseRootObject> {
    const { body } = await this.http.send<HighlightsRepositoryCreateReelResponseRootObject>({
      url: '/api/v1/highlights/create_reel/',
      method: 'POST',
      form: this.http.sign({
        supported_capabilities_new: JSON.stringify(this.state.supportedCapabilities),
        source: options.source || 'story_viewer_profile',
        creation_id: Date.now().toString(),
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        _uuid: this.state.uuid,
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
    const { body } = await this.http.send<HighlightsRepositoryEditReelResponseRootObject>({
      url: `/api/v1/highlights/${options.highlightId}/edit_reel/`,
      method: 'POST',
      form: this.http.sign({
        supported_capabilities_new: JSON.stringify(this.state.supportedCapabilities),
        source: options.source || 'story_viewer_default',
        added_media_ids: JSON.stringify(options.added || []),
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        _uuid: this.state.uuid,
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
    const { body } = await this.http.send<StatusResponse>({
      url: `/api/v1/highlights/${highlightId}/delete_reel/`,
      method: 'POST',
      form: this.http.sign({
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        _uuid: this.state.uuid,
      }),
    });
    return body;
  }
}
