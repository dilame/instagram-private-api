import { Repository } from '../core/repository';

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
}
