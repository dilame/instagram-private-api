export interface InsightsServiceAccountResponseRootObject {
  data: InsightsServiceAccountResponseData;
}
export interface InsightsServiceAccountResponseData {
  user: InsightsServiceAccountResponseUser;
}
export interface InsightsServiceAccountResponseUser {
  business_manager: InsightsServiceAccountResponseBusiness_manager;
  instagram_user_id: string;
  username: string;
  profile_picture: InsightsServiceAccountResponseProfile_picture;
  followers_count: number;
  business_profile: InsightsServiceAccountResponseBusiness_profile;
  id: string;
}
export interface InsightsServiceAccountResponseBusiness_manager {
  account_insights_unit: InsightsServiceAccountResponseAccount_insights_unit;
  status: InsightsServiceAccountResponseStatus;
  followers_unit: InsightsServiceAccountResponseFollowers_unit;
  top_posts_unit: InsightsServiceAccountResponseTop_posts_unit;
  stories_unit: InsightsServiceAccountResponseStories_unit;
  account_summary_unit: InsightsServiceAccountResponseAccount_summary_unit;
  promotions_unit: InsightsServiceAccountResponsePromotions_unit;
}
export interface InsightsServiceAccountResponseAccount_insights_unit {
  aymt_instagram_account_insights_channel: InsightsServiceAccountResponseAymt_instagram_account_insights_channel;
  account_actions_graph: InsightsServiceAccountResponseAccount_actions_graph;
  profile_visits_metric_count: number;
  profile_visits_metric_delta: number;
  website_visits_metric_count: number;
  website_visits_metric_delta: number;
  email_metric_count: number;
  email_metric_delta: number;
  get_direction_metric_count: number;
  get_direction_metric_delta: number;
  call_metric_count: number;
  call_metric_delta: number;
  text_metric_count: number;
  text_metric_delta: number;
  account_discovery_graph: InsightsServiceAccountResponseAccount_discovery_graph;
  impressions_metric_count: number;
  impressions_metric_delta: number;
  reach_metric_count: number;
  reach_metric_delta: number;
  hashtags_reach: InsightsServiceAccountResponseHashtags_reach;
  last_week_impressions: number;
  hashtags_impressions: InsightsServiceAccountResponseHashtags_impressions;
  graph: InsightsServiceAccountResponseGraph;
  metric_graph: InsightsServiceAccountResponseMetric_graph;
}
export interface InsightsServiceAccountResponseAymt_instagram_account_insights_channel {
  tips: any[];
  id: string;
  channel_id: string;
}
export interface InsightsServiceAccountResponseAccount_actions_graph {
  total_count_graph: InsightsServiceAccountResponseTotal_count_graph;
}
export interface InsightsServiceAccountResponseTotal_count_graph {
  graph_name: string;
  data_points: InsightsServiceAccountResponseDataPointsItem[];
}
export interface InsightsServiceAccountResponseDataPointsItem {
  label: string;
  value: number;
}
export interface InsightsServiceAccountResponseAccount_discovery_graph {
  nodes: InsightsServiceAccountResponseNodesItem[];
}
export interface InsightsServiceAccountResponseNodesItem {
  graph_name?: string;
  data_points?: InsightsServiceAccountResponseDataPointsItem[];
  __typename?: string;
  organic?: InsightsServiceAccountResponseOrganic;
  delta?: null;
  total?: number;
}
export interface InsightsServiceAccountResponseHashtags_reach {
  name: string;
  follow_status: InsightsServiceAccountResponseFollow_status;
}
export interface InsightsServiceAccountResponseFollow_status {
  nodes: InsightsServiceAccountResponseNodesItem[];
}
export interface InsightsServiceAccountResponseOrganic {
  value: number;
  status: string;
}
export interface InsightsServiceAccountResponseHashtags_impressions {
  organic: InsightsServiceAccountResponseOrganic;
  account_hashtags: InsightsServiceAccountResponseAccount_hashtags;
}
export interface InsightsServiceAccountResponseAccount_hashtags {
  count: number;
  nodes: any[];
}
export interface InsightsServiceAccountResponseGraph {
  nodes: InsightsServiceAccountResponseNodesItem[];
}
export interface InsightsServiceAccountResponseMetric_graph {
  nodes: InsightsServiceAccountResponseNodesItem[];
}
export interface InsightsServiceAccountResponseStatus {
  account_type: string;
}
export interface InsightsServiceAccountResponseFollowers_unit {
  followers_unit_state: string;
  followers_delta_from_last_week: number;
  gender_graph: InsightsServiceAccountResponseGender_graph;
  all_followers_age_graph: InsightsServiceAccountResponseAll_followers_age_graph;
  men_followers_age_graph: InsightsServiceAccountResponseMen_followers_age_graph;
  women_followers_age_graph: InsightsServiceAccountResponseWomen_followers_age_graph;
  followers_top_cities_graph: InsightsServiceAccountResponseFollowers_top_cities_graph;
  followers_top_countries_graph: InsightsServiceAccountResponseFollowers_top_countries_graph;
  week_daily_followers_graph: InsightsServiceAccountResponseWeek_daily_followers_graph;
  days_hourly_followers_graphs: InsightsServiceAccountResponseDaysHourlyFollowersGraphsItem[];
}
export interface InsightsServiceAccountResponseGender_graph {
  data_points: InsightsServiceAccountResponseDataPointsItem[];
}
export interface InsightsServiceAccountResponseAll_followers_age_graph {
  data_points: InsightsServiceAccountResponseDataPointsItem[];
}
export interface InsightsServiceAccountResponseMen_followers_age_graph {
  data_points: InsightsServiceAccountResponseDataPointsItem[];
}
export interface InsightsServiceAccountResponseWomen_followers_age_graph {
  data_points: InsightsServiceAccountResponseDataPointsItem[];
}
export interface InsightsServiceAccountResponseFollowers_top_cities_graph {
  data_points: InsightsServiceAccountResponseDataPointsItem[];
}
export interface InsightsServiceAccountResponseFollowers_top_countries_graph {
  data_points: InsightsServiceAccountResponseDataPointsItem[];
}
export interface InsightsServiceAccountResponseWeek_daily_followers_graph {
  data_points: InsightsServiceAccountResponseDataPointsItem[];
}
export interface InsightsServiceAccountResponseDaysHourlyFollowersGraphsItem {
  name: string;
  data_points: InsightsServiceAccountResponseDataPointsItem[];
}
export interface InsightsServiceAccountResponseTop_posts_unit {
  last_week_posts_count: number;
  week_over_week_posts_delta: number;
  top_posts: InsightsServiceAccountResponseTop_posts;
}
export interface InsightsServiceAccountResponseTop_posts {
  edges: any[];
}
export interface InsightsServiceAccountResponseStories_unit {
  last_week_stories_count: number;
  week_over_week_stories_delta: number;
  state: string;
  summary_stories: InsightsServiceAccountResponseSummary_stories;
}
export interface InsightsServiceAccountResponseSummary_stories {
  count: number;
  edges: any[];
}
export interface InsightsServiceAccountResponseAccount_summary_unit {
  posts_count: number;
}
export interface InsightsServiceAccountResponsePromotions_unit {
  summary_promotions: InsightsServiceAccountResponseSummary_promotions;
}
export interface InsightsServiceAccountResponseSummary_promotions {
  edges: any[];
}
export interface InsightsServiceAccountResponseProfile_picture {
  uri: string;
}
export interface InsightsServiceAccountResponseBusiness_profile {
  id: string;
}
