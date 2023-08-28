import { Repository } from '../core/repository';
import {
  FbsearchRepositoryPlacesResponseRootObject,
  FbsearchRepositoryTopsearchFlatResponseRootObject,
} from '../responses';

export class FbsearchRepository extends Repository {
  async suggestedSearches(type: 'blended' | 'users' | 'hashtags' | 'places') {
    try {
      const { body } = await this.client.request.send({
        url: '/api/v1/fbsearch/suggested_searches/',
        qs: {
          type,
        },
      });
      return body;
    } catch (error) {
      return null;
    }
  }
  async recentSearches() {
    try {
      const { body } = await this.client.request.send({
        url: '/api/v1/fbsearch/recent_searches/',
      });
      return body;
    } catch (error) {
      return null;
    }
  }

  async topsearchFlat(query: string): Promise<FbsearchRepositoryTopsearchFlatResponseRootObject> {
    try {
      const { body } = await this.client.request.send<FbsearchRepositoryTopsearchFlatResponseRootObject>({
        url: '/api/v1/fbsearch/topsearch_flat/',
        qs: {
          timezone_offset: this.client.state.timezoneOffset,
          count: 30,
          query,
          context: 'blended',
        },
      });
      return body;
    } catch (error) {
      return null;
    }
  }
  async places(query: string) {
    try {
      const { body } = await this.client.request.send<FbsearchRepositoryPlacesResponseRootObject>({
        url: '/api/v1/fbsearch/places/',
        qs: {
          timezone_offset: this.client.state.timezoneOffset,
          count: 30,
          query,
        },
      });
      return body;
    } catch (error) {
      return null;
    }
  }
}
