export interface PostsInsightsFeedResponseRootObject {
  data: PostsInsightsFeedResponseData;
}
export interface PostsInsightsFeedResponseData {
  user: PostsInsightsFeedResponseUser;
}
export interface PostsInsightsFeedResponseUser {
  id: string;
  business_manager: PostsInsightsFeedResponseBusiness_manager;
}
export interface PostsInsightsFeedResponseBusiness_manager {
  top_posts_unit: PostsInsightsFeedResponseTop_posts_unit;
}
export interface PostsInsightsFeedResponseTop_posts_unit {
  top_posts: PostsInsightsFeedResponseTop_posts;
}
export interface PostsInsightsFeedResponseTop_posts {
  edges: PostsInsightsFeedResponseEdgesItem[];
  page_info: PostsInsightsFeedResponsePage_info;
}
export interface PostsInsightsFeedResponseEdgesItem {
  node: PostsInsightsFeedResponseNode;
  cursor?: string;
}
export interface PostsInsightsFeedResponseNode {
  instagram_media_id?: string;
  instagram_media_type?: string;
  image?: PostsInsightsFeedResponseImage;
  creation_time?: number;
  comment_count?: number;
  engagement?: number;
  like_count?: number;
  save_count?: number;
  video_view_count?: null;
  shopping_product_click_count?: number;
  shopping_outbound_click_count?: number;
  inline_insights_node?: PostsInsightsFeedResponseInline_insights_node;
  id?: string;
  __typename: string;
  name?: string;
  value?: number;
}
export interface PostsInsightsFeedResponseImage {
  uri: string;
}
export interface PostsInsightsFeedResponseInline_insights_node {
  metrics: PostsInsightsFeedResponseMetrics;
  state: string;
}
export interface PostsInsightsFeedResponseMetrics {
  impression_count: number;
  owner_account_follows_count: number;
  owner_profile_views_count: number;
  reach_count: number;
  profile_actions: PostsInsightsFeedResponseProfile_actions;
  share_count: PostsInsightsFeedResponseShare_count;
}
export interface PostsInsightsFeedResponseProfile_actions {
  actions: PostsInsightsFeedResponseActions;
}
export interface PostsInsightsFeedResponseActions {
  edges: PostsInsightsFeedResponseEdgesItem[];
}
export interface PostsInsightsFeedResponseShare_count {
  tray: PostsInsightsFeedResponseTray;
}
export interface PostsInsightsFeedResponseTray {
  value: number;
}
export interface PostsInsightsFeedResponsePage_info {
  end_cursor: string;
  has_next_page: boolean;
}
