import { Repository } from '../core/repository';
import { LocationRepositorySearchResponseRootObject } from '../responses';

export class LocationSearch extends Repository {
  public async index(
    latitude: number,
    longitude: number,
    searchQuery?: string,
  ): Promise<LocationRepositorySearchResponseRootObject> {
    const queryOrTimestamp =
      typeof searchQuery === 'undefined' ? { timestamp: Date.now() } : { search_query: searchQuery };
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
}
