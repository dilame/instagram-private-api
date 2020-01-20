export interface GraphQLRequestOptions {
  surface: { name?: InsightsSurface; friendlyName: InsightsFriendlyName };
  accessToken?: string;
  documentId: string;
  variables: any;
}

export type InsightsFriendlyName =
  | 'IgInsightsAccountInsightsSurfaceQuery'
  | 'IgInsightsAccountInsightsWithTabsQuery'
  | 'IgInsightsPostGridSurfaceQuery'
  | 'IgInsightsPostInsightsQuery'
  | 'IgInsightsStoryInsightsAppQuery'
  | string;
export type InsightsSurface = 'account' | 'post' | 'story' | string;
