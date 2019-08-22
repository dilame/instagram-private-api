export interface AccountInsightsOptions {
  gridMediaSize?: number;
  userId?: string;
  accessToken?: string;
  // all will default to true
  contentTab?: boolean;
  activityTab?: boolean;
  audienceTab?: boolean;
}

export interface PostsInsightsFeedOptions {
  timeframe: 'ONE_WEEK' | 'ONE_MONTH' | 'THREE_MONTHS' | 'SIX_MONTHS' | 'ONE_YEAR' | 'TWO_YEARS';
  dataOrdering:
    | 'CALL'
    | 'COMMENT_COUNT'
    | 'EMAIL'
    | 'ENGAGEMENT_COUNT'
    | 'FOLLOW'
    | 'GET_DIRECTIONS'
    | 'IMPRESSION_COUNT'
    | 'LIKE_COUNT'
    | 'PROFILE_VIEW'
    | 'REACH_COUNT'
    | 'SAVE_COUNT'
    | 'SHARE_COUNT'
    | 'TEXT'
    | 'BIO_LINK_CLICK';
  postType: 'ALL' | 'IMAGE' | 'VIDEO' | 'CAROUSEL_V2' | 'SHOPPING';
}
