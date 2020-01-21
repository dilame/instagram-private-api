import { injectable } from 'tsyringe';
import { AccountInsightsOptions } from '../types';
import {
  InsightsServiceAccountResponseRootObject,
  InsightsServicePostResponseRootObject,
  StoriesInsightsFeedResponseRootObject,
} from '../responses';
import { AdsRepository } from '../repositories/ads.repository';
import { AndroidState } from '../core/android.state';

@injectable()
export class InsightsService {
  constructor(private ads: AdsRepository, private state: AndroidState) {}
  public account(options: AccountInsightsOptions): Promise<InsightsServiceAccountResponseRootObject> {
    return this.ads.graphQL<InsightsServiceAccountResponseRootObject>({
      surface: {
        name: 'account',
        friendlyName: 'IgInsightsAccountInsightsWithTabsQuery',
      },
      documentId: '2552829571413315',
      variables: {
        IgInsightsGridMediaImage_SIZE: options.gridMediaSize || 256,
        activityTab: options.activityTab || true,
        audienceTab: options.audienceTab || true,
        contentTab: options.contentTab || true,
        query_params: {
          access_token: options.accessToken || '',
          id: options.userId || this.state.cookieUserId,
        },
        timezone: 'Environment/Local',
      },
    });
  }
  public post(mediaId: string): Promise<InsightsServicePostResponseRootObject> {
    return this.ads.graphQL<InsightsServicePostResponseRootObject>({
      surface: {
        name: 'post',
        friendlyName: 'IgInsightsPostInsightsQuery',
      },
      documentId: '2009845309144121',
      variables: {
        query_params: {
          access_token: '',
          id: mediaId,
        },
      },
    });
  }

  public igtv(mediaId: string) {
    return this.ads.graphQL({
      surface: {
        name: 'igtv',
        friendlyName: 'IgInsightsIGTVInsightsAppQuery',
      },
      documentId: '1744089735627228',
      variables: {
        query_params: {
          access_token: '',
          id: mediaId,
        },
      },
    });
  }

  public story(storyId: string): Promise<StoriesInsightsFeedResponseRootObject> {
    return this.ads.graphQL<StoriesInsightsFeedResponseRootObject>({
      surface: {
        name: 'story',
        friendlyName: 'IgInsightsStoryInsightsAppQuery',
      },
      documentId: '2164420446988319',
      variables: {
        query_params: {
          access_token: '',
          id: storyId,
        },
      },
    });
  }
}
