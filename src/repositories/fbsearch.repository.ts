import { Repository } from '../core/repository';
import {
  FbsearchRepositoryTopsearchFlatResponseListItem,
  FbsearchRepositoryTopsearchFlatResponseRootObject,
} from '../responses';

export class FbsearchRepository extends Repository {
  async suggestedSearches(type: 'blended' | 'users' | 'hashtags' | 'places') {
    const { body } = await this.client.request.send({
      url: '/api/v1/fbsearch/suggested_searches/',
      qs: {
        type,
      },
    });
    return body;
  }
  async recentSearches() {
    const { body } = await this.client.request.send({
      url: '/api/v1/fbsearch/recent_searches/',
    });
    return body;
  }

  async topsearchFlat(query: string): Promise<Array<FbsearchRepositoryTopsearchFlatResponseListItem>> {
    const { body } = await this.client.request.send<FbsearchRepositoryTopsearchFlatResponseRootObject>({
      url: '/api/v1/fbsearch/topsearch_flat/',
      qs: {
        timezone_offset: this.client.state.timezoneOffset,
        count: 30,
        query,
        context: 'blended',
      },
    });
    return body.list;
  }
}
