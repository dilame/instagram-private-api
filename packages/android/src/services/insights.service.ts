import { Repository } from '../core/repository';
import { AccountInsightsOptions } from '../types';
import { InsightsServiceAccountResponseRootObject } from '../responses/insights.service.account.response';
import { InsightsServicePostResponseRootObject, StoriesInsightsFeedResponseRootObject } from '../responses';

export class InsightsService extends Repository {
  public account(options: AccountInsightsOptions): Promise<InsightsServiceAccountResponseRootObject> {
    return this.client.ads.graphQL<InsightsServiceAccountResponseRootObject>({
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
          id: options.userId || this.client.state.cookieUserId,
        },
        timezone: 'Environment/Local',
      },
    });
  }
  public post(mediaId: string): Promise<InsightsServicePostResponseRootObject> {
    return this.client.ads.graphQL<InsightsServicePostResponseRootObject>({
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
    return this.client.ads.graphQL({
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
    return this.client.ads.graphQL<StoriesInsightsFeedResponseRootObject>({
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
