export interface InsightsServiceStoryResponseRootObject {
  data: InsightsServiceStoryResponseData;
}
export interface InsightsServiceStoryResponseData {
  media: InsightsServiceStoryResponseMedia;
}
export interface InsightsServiceStoryResponseMedia {
  instagram_media_id: string;
  inline_insights_node: InsightsServiceStoryResponseInline_insights_node;
  id: string;
  instagram_media_owner_id: string;
  instagram_actor: InsightsServiceStoryResponseInstagram_actor;
  creation_time: number;
  shopping_outbound_click_count: number;
  taps_back_count: number;
  taps_forward_count: number;
}
export interface InsightsServiceStoryResponseInline_insights_node {
  state: string;
  metrics: null;
}
export interface InsightsServiceStoryResponseInstagram_actor {
  instagram_actor_id: string;
  id: string;
}
