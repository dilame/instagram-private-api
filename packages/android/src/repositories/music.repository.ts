import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import { MusicRepositoryGenresResponseRootObject, MusicRepositoryMoodsResponseRootObject } from '../responses';
import { IgAppModule } from '../types/common.types';
import { MusicRepositoryLyricsResponseRootObject } from '../responses/music.repository.lyrics.response';

@injectable()
export class MusicRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async moods(product?: IgAppModule): Promise<MusicRepositoryMoodsResponseRootObject> {
    product = product || 'story_camera_music_overlay_post_capture';
    const { body } = await this.http.send<MusicRepositoryMoodsResponseRootObject>({
      url: '/api/v1/music/moods/',
      method: 'POST',
      form: {
        _csrftoken: this.state.cookieCsrfToken,
        product,
        _uuid: this.state.uuid,
        browse_session_id: this.state.clientSessionId,
      },
    });
    return body;
  }

  public async genres(product?: IgAppModule): Promise<MusicRepositoryGenresResponseRootObject> {
    product = product || 'story_camera_music_overlay_post_capture';
    const { body } = await this.http.send<MusicRepositoryGenresResponseRootObject>({
      url: '/api/v1/music/genres/',
      method: 'POST',
      form: {
        _csrftoken: this.state.cookieCsrfToken,
        product,
        _uuid: this.state.uuid,
        browse_session_id: this.state.clientSessionId,
      },
    });
    return body;
  }

  public async lyrics(trackId: number | string): Promise<MusicRepositoryLyricsResponseRootObject> {
    const { body } = await this.http.send<MusicRepositoryLyricsResponseRootObject>({
      url: `/api/v1/music/track/${trackId}/lyrics/`,
      method: 'GET',
    });
    return body;
  }
}
