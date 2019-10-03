import { Repository } from '../core/repository';
import { ExploreFeedClusterName } from '../types';
import {
  FbsearchRepositoryPlacesResponseRootObject,
  FbsearchRepositoryTopsearchFlatResponseRootObject,
  FbsearchRepositoryExploreResponseRootObject
} from '../responses';

export class FbsearchRepository extends Repository {
  async exploreFeedPrefetch(clusterName: ExploreFeedClusterName): Promise<FbsearchRepositoryExploreResponseRootObject> {
    const { body } = await this.client.request.send({
      url: '/api/v1/discover/topical_explore/',
      qs: {
        timezone_offset: this.client.state.timezoneOffset,
        is_prefetch: true,
        omit_cover_media: true,
        use_sectional_payload: true,
        session_id: this.client.state.clientSessionId,
        include_fixed_destinations: true,
        cluster_id: {
          Animals: 'hashtag_inspired:1',
          Style: 'hashtag_inspired:26',
          Comics: 'hashtag_inspired:20',
          Travel: 'hashtag_inspired:28',
          Architecture: 'hashtag_inspired:18',
          Beauty: 'hashtag_inspired:3',
          DIY: 'hashtag_inspired:21',
          Auto: 'hashtag_inspired:019',
          Music: 'hashtag_inspired:11',
          Nature: 'hashtag_inspired:24',
          Decor: 'hashtag_inspired:5',
          Dance: 'hashtag_inspired:22'
        }[clusterName] || 'explore_all:0'
      }
    });
    return body;
  }
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

  async topsearchFlat(query: string): Promise<FbsearchRepositoryTopsearchFlatResponseRootObject> {
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
  }
  async places(query: string) {
    const { body } = await this.client.request.send<FbsearchRepositoryPlacesResponseRootObject>({
      url: '/api/v1/fbsearch/places/',
      qs: {
        timezone_offset: this.client.state.timezoneOffset,
        count: 30,
        query,
      },
    });
    return body;
  }
}
