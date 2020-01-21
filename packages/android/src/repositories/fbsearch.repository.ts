import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import {
  FbsearchRepositoryPlacesResponseRootObject,
  FbsearchRepositoryTopsearchFlatResponseRootObject,
} from '../responses';

@injectable()
export class FbsearchRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  async suggestedSearches(type: 'blended' | 'users' | 'hashtags' | 'places') {
    const { body } = await this.http.send({
      url: '/api/v1/fbsearch/suggested_searches/',
      qs: {
        type,
      },
    });
    return body;
  }
  async recentSearches() {
    const { body } = await this.http.send({
      url: '/api/v1/fbsearch/recent_searches/',
    });
    return body;
  }

  async topsearchFlat(query: string): Promise<FbsearchRepositoryTopsearchFlatResponseRootObject> {
    const { body } = await this.http.send<FbsearchRepositoryTopsearchFlatResponseRootObject>({
      url: '/api/v1/fbsearch/topsearch_flat/',
      qs: {
        timezone_offset: this.state.timezoneOffset,
        count: 30,
        query,
        context: 'blended',
      },
    });
    return body;
  }
  async places(query: string) {
    const { body } = await this.http.send<FbsearchRepositoryPlacesResponseRootObject>({
      url: '/api/v1/fbsearch/places/',
      qs: {
        timezone_offset: this.state.timezoneOffset,
        count: 30,
        query,
      },
    });
    return body;
  }
}
