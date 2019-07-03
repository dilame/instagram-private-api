import { Repository } from '../core/repository';
import {
  LocationRepositorySearchResponseRootObject,
  LocationRepositoryInfoResponseRootObject,
} from '../responses';

export class LocationRepository extends Repository {
  public async search(latitude: number, longitude: number, searchQuery?: string): Promise<LocationRepositorySearchResponseRootObject> {
    const queryOrTimestamp = searchQuery === null ? { timestamp: Date.now() } : { search_query: searchQuery };
    const { body } = await this.client.request.send<LocationRepositorySearchResponseRootObject>({
      url: '/api/v1/location_search/',
      method: 'GET',
      qs: {
        _uuid: this.client.state.uuid,
        _uid: this.client.state.cookieUserId,
        _csrftoken: this.client.state.cookieCsrfToken,
        rank_token: '',
        latitude,
        longitude,
        ...queryOrTimestamp,
      },
    });
    return body;
  }

  public async info(id: number | string): Promise<LocationRepositoryInfoResponseRootObject> {
    const { body } = await this.client.request.send<LocationRepositoryInfoResponseRootObject>({
      url: `/api/v1/locations/${id}/info/`,
      method: 'GET',
    });
    return body;
  }
}
