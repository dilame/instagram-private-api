import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import { LocationRepositorySearchResponseRootObject } from '../responses';

@injectable()
export class LocationSearch {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async index(
    latitude: number,
    longitude: number,
    searchQuery?: string,
  ): Promise<LocationRepositorySearchResponseRootObject> {
    const queryOrTimestamp =
      typeof searchQuery === 'undefined' ? { timestamp: Date.now() } : { search_query: searchQuery };
    const { body } = await this.http.send<LocationRepositorySearchResponseRootObject>({
      url: '/api/v1/location_search/',
      method: 'GET',
      qs: {
        _uuid: this.state.uuid,
        _uid: this.state.cookieUserId,
        _csrftoken: this.state.cookieCsrfToken,
        rank_token: '',
        latitude,
        longitude,
        ...queryOrTimestamp,
      },
    });
    return body;
  }
}
