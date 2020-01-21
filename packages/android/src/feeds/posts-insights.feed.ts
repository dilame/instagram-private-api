import { injectable } from 'tsyringe';
import { Expose } from 'class-transformer';
import { Feed } from '@igpapi/core';
import { PostsInsightsFeedOptions } from '../types';
import { PostsInsightsFeedResponseEdgesItem, PostsInsightsFeedResponseRootObject } from '../responses';
import { AndroidState } from '../core/android.state';
import { AdsRepository } from '../repositories/ads.repository';

@injectable()
export class PostsInsightsFeed extends Feed<PostsInsightsFeedResponseRootObject, PostsInsightsFeedResponseEdgesItem> {
  private options: PostsInsightsFeedOptions;

  @Expose()
  private nextCursor: string = null;

  constructor(private ads: AdsRepository, private clientState: AndroidState) {
    super();
  }

  set state(response: PostsInsightsFeedResponseRootObject) {
    const { end_cursor, has_next_page } = response.data.user.business_manager.top_posts_unit.top_posts.page_info;
    this.nextCursor = end_cursor;
    this.hasMore = has_next_page;
  }

  items(raw: PostsInsightsFeedResponseRootObject) {
    return raw.data.user.business_manager.top_posts_unit.top_posts.edges;
  }

  async request(): Promise<PostsInsightsFeedResponseRootObject> {
    return await this.ads.graphQL<PostsInsightsFeedResponseRootObject>({
      surface: { friendlyName: 'IgInsightsPostGridSurfaceQuery' },
      documentId: '1981884911894608',
      variables: {
        count: 15,
        cursor: this.nextCursor,
        IgInsightsGridMediaImage_SIZE: 256,
        queryParams: {
          access_token: '',
          id: this.clientState.cookieUserId,
        },
        ...this.options,
      },
    });
  }
}
