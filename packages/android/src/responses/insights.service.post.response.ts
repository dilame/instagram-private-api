export interface InsightsServicePostResponseRootObject {
  data: InsightsServicePostResponseData;
}
export interface InsightsServicePostResponseData {
  media: InsightsServicePostResponseMedia;
}
export interface InsightsServicePostResponseMedia {
  id: string;
  creation_time: number;
  has_product_tags: boolean;
  instagram_media_id: string;
  instagram_media_owner_id: string;
  instagram_actor: InsightsServicePostResponseInstagram_actor;
  inline_insights_node: InsightsServicePostResponseInline_insights_node;
  display_url: string;
  instagram_media_type: string;
  image: InsightsServicePostResponseImage;
  comment_count: number;
  like_count: number;
  save_count: number;
  ad_media: null;
  organic_instagram_media_id: string;
  shopping_outbound_click_count: number;
  shopping_product_click_count: number;
}
export interface InsightsServicePostResponseInstagram_actor {
  instagram_actor_id: string;
  id: string;
}
export interface InsightsServicePostResponseInline_insights_node {
  state: string;
  metrics: InsightsServicePostResponseMetrics;
  error: null;
}
export interface InsightsServicePostResponseMetrics {
  share_count: InsightsServicePostResponseShare_count;
  owner_profile_views_count: number;
  reach_count: number;
  profile_actions: InsightsServicePostResponseProfile_actions;
  impression_count: number;
  impressions: InsightsServicePostResponseImpressions;
  owner_account_follows_count: number;
  reach: InsightsServicePostResponseReach;
  hashtags_impressions: InsightsServicePostResponseHashtags_impressions;
}
export interface InsightsServicePostResponseShare_count {
  tray: InsightsServicePostResponseTray;
  post: InsightsServicePostResponsePost;
}
export interface InsightsServicePostResponseTray {
  nodes: InsightsServicePostResponseNodesItem[];
}
export interface InsightsServicePostResponseNodesItem {
  __typename: string;
  value: number;
  name?: string;
}
export interface InsightsServicePostResponsePost {
  value: number;
  nodes: InsightsServicePostResponseNodesItem[];
}
export interface InsightsServicePostResponseProfile_actions {
  actions: InsightsServicePostResponseActions;
}
export interface InsightsServicePostResponseActions {
  value: number;
  nodes: InsightsServicePostResponseNodesItem[];
}
export interface InsightsServicePostResponseImpressions {
  value: number;
  surfaces: InsightsServicePostResponseSurfaces;
}
export interface InsightsServicePostResponseSurfaces {
  nodes: InsightsServicePostResponseNodesItem[];
}
export interface InsightsServicePostResponseReach {
  value: number;
  follow_status: InsightsServicePostResponseFollow_status;
}
export interface InsightsServicePostResponseFollow_status {
  nodes: InsightsServicePostResponseNodesItem[];
}
export interface InsightsServicePostResponseHashtags_impressions {
  organic: InsightsServicePostResponseOrganic;
  hashtags: InsightsServicePostResponseHashtags;
}
export interface InsightsServicePostResponseOrganic {
  value: number;
  status: string;
}
export interface InsightsServicePostResponseHashtags {
  count: number;
  nodes: any[];
}
export interface InsightsServicePostResponseImage {
  height: number;
  width: number;
}
