export interface StoriesInsightsFeedResponseRootObject {
  data: StoriesInsightsFeedResponseData;
}
export interface StoriesInsightsFeedResponseData {
  user: StoriesInsightsFeedResponseUser;
}
export interface StoriesInsightsFeedResponseUser {
  id: string;
  business_manager: StoriesInsightsFeedResponseBusiness_manager;
}
export interface StoriesInsightsFeedResponseBusiness_manager {
  stories_unit: StoriesInsightsFeedResponseStories_unit;
}
export interface StoriesInsightsFeedResponseStories_unit {
  stories: StoriesInsightsFeedResponseStories;
}
export interface StoriesInsightsFeedResponseStories {
  edges: StoriesInsightsFeedResponseEdgesItem[];
  page_info: StoriesInsightsFeedResponsePage_info;
}
export interface StoriesInsightsFeedResponseEdgesItem {
  node: StoriesInsightsFeedResponseNode;
  cursor: null;
}
export interface StoriesInsightsFeedResponseNode {
  instagram_media_id: string;
  display_url: string;
  exits_count: number;
  impression_count: number;
  reach_count: number;
  replies_count: number;
  taps_back_count: number;
  taps_forward_count: number;
  story_swipe_away_count: number;
  inline_insights_node: StoriesInsightsFeedResponseInline_insights_node;
  id: string;
  __typename: string;
}
export interface StoriesInsightsFeedResponseInline_insights_node {
  state: string;
  metrics: null;
}
export interface StoriesInsightsFeedResponsePage_info {
  end_cursor: string;
  has_next_page: boolean;
}
