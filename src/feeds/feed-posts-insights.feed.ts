import { Feed } from '../core/feed';
import { Expose } from 'class-transformer';
import { FeedPostsInsightsOptions } from '../types';
import { FeedPostsInsightsFeedResponseEdgesItem, FeedPostsInsightsFeedResponseRootObject } from '../responses';

export class FeedPostsInsightsFeed extends Feed<FeedPostsInsightsFeedResponseRootObject, FeedPostsInsightsFeedResponseEdgesItem> {
  private options: FeedPostsInsightsOptions;

  @Expose()
  private nextCursor: string = null;

  async items(): Promise<FeedPostsInsightsFeedResponseEdgesItem[]> {
    const body = await this.request();
    return body.data.user.business_manager.top_posts_unit.top_posts.edges;
  }

  async request(): Promise<FeedPostsInsightsFeedResponseRootObject> {
    const body = await this.client.ads.graphQL<FeedPostsInsightsFeedResponseRootObject>({
      surface: {friendlyName: 'IgInsightsPostGridSurfaceQuery'},
      documentId: '1981884911894608',
      variables: {
        count: 15,
        cursor: this.nextCursor,
        IgInsightsGridMediaImage_SIZE: 256,
        queryParams: {
          access_token: '',
          id: this.client.state.cookieUserId,
        },
        ...this.options,
      },
    });
    this.state = body;
    return body;
  }

  protected set state(response: FeedPostsInsightsFeedResponseRootObject) {
    const {end_cursor, has_next_page} = response.data.user.business_manager.top_posts_unit.top_posts.page_info;
    this.nextCursor = end_cursor;
    this.moreAvailable = has_next_page;
  }

}
