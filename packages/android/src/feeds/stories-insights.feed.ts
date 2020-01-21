import { injectable } from 'tsyringe';
import { Expose } from 'class-transformer';
import { Feed } from '@igpapi/core';
import { StoriesInsightsFeedResponseEdgesItem, StoriesInsightsFeedResponseRootObject } from '../responses';
import { AndroidState } from '../core/android.state';
import { AdsRepository } from '../repositories/ads.repository';

@injectable()
export class StoriesInsightsFeed extends Feed<
  StoriesInsightsFeedResponseRootObject,
  StoriesInsightsFeedResponseEdgesItem
> {
  @Expose()
  private timeframe: 'ONE_DAY' | 'ONE_WEEK' | 'TWO_WEEKS';

  @Expose()
  private nextCursor: string = null;

  constructor(private ads: AdsRepository, private clientState: AndroidState) {
    super();
  }

  set state(response: StoriesInsightsFeedResponseRootObject) {
    const { end_cursor, has_next_page } = response.data.user.business_manager.stories_unit.stories.page_info;
    this.nextCursor = end_cursor;
    this.hasMore = has_next_page;
  }

  items(raw: StoriesInsightsFeedResponseRootObject) {
    return raw.data.user.business_manager.stories_unit.stories.edges;
  }

  async request(): Promise<StoriesInsightsFeedResponseRootObject> {
    return await this.ads.graphQL<StoriesInsightsFeedResponseRootObject>({
      surface: { friendlyName: 'IgInsightsStoryGridSurfaceQuery' },
      documentId: '1995528257207653',
      variables: {
        count: 15,
        cursor: this.nextCursor,
        IgInsightsGridMediaImage_SIZE: 256,
        queryParams: {
          access_token: '',
          id: this.clientState.cookieUserId,
        },
        timeframe: this.timeframe,
      },
    });
  }
}
