import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import { IgtvWriteSeenStateOptions } from '../types';
import { defaults } from 'lodash';
import { StatusResponse, IgtvSearchResponseRootObject } from '../responses';
import * as Chance from 'chance';

@injectable()
export class IgtvRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async writeSeenState(options: IgtvWriteSeenStateOptions): Promise<StatusResponse> {
    const { body } = await this.http.send({
      url: '/api/v1/igtv/write_seen_state/',
      method: 'POST',
      form: this.http.sign({
        seen_state: JSON.stringify(defaults(options, { impressions: {}, grid_impressions: [] })),
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        _uuid: this.state.uuid,
      }),
    });
    return body;
  }

  public async search(query: string = ''): Promise<IgtvSearchResponseRootObject> {
    const { body } = await this.http.send<IgtvSearchResponseRootObject>({
      // this is the same method in the app
      url: `/api/v1/igtv/${query && query.length > 0 ? 'search' : 'suggested_searches'}/`,
      method: 'GET',
      qs: {
        query,
      },
    });
    return body;
  }

  public async allUserSeries(user: string | number, data: object = {}) {
    const { body } = await this.http.send({
      url: `/api/v1/igtv/series/all_user_series/${user}/`,
      method: 'GET',
      qs: this.http.sign(data),
    });
    return body;
  }

  public async createSeries(title: string, description: string = '') {
    const { body } = await this.http.send({
      url: `/api/v1/igtv/series/create/`,
      method: 'POST',
      form: this.http.sign({
        title,
        description,
        igtv_composer_session_id: new Chance().guid({ version: 4 }),
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        _uuid: this.state.uuid,
      }),
    });
    return body;
  }

  public async seriesAddEpisode(series: string | number, mediaId: string) {
    const { body } = await this.http.send({
      url: `/api/v1/igtv/series/${series}/add_episode/`,
      method: 'POST',
      form: {
        media_id: mediaId,
        _csrftoken: this.state.cookieCsrfToken,
        _uuid: this.state.uuid,
      },
    });
    return body;
  }
}
