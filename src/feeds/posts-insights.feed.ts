import { Feed } from '../core/feed';
import { Expose } from 'class-transformer';
import { PostsInsightsFeedOptions } from '../types';
import { PostsInsightsFeedResponseEdgesItem, PostsInsightsFeedResponseRootObject } from '../responses';

export class PostsInsightsFeed extends Feed<PostsInsightsFeedResponseRootObject, PostsInsightsFeedResponseEdgesItem> {
  private options: PostsInsightsFeedOptions;

  @Expose()
  private nextCursor: string = null;

  async items(): Promise<PostsInsightsFeedResponseEdgesItem[]> {
    const body = await this.request();
    return body.data.user.business_manager.top_posts_unit.top_posts.edges;
  }

  async request(): Promise<PostsInsightsFeedResponseRootObject> {
    const body = await this.client.ads.graphQL<PostsInsightsFeedResponseRootObject>({
      surface: { friendlyName: 'IgInsightsPostGridSurfaceQuery' },
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

  protected set state(response: PostsInsightsFeedResponseRootObject) {
    const { end_cursor, has_next_page } = response.data.user.business_manager.top_posts_unit.top_posts.page_info;
    this.nextCursor = end_cursor;
    this.moreAvailable = has_next_page;
  }
}
