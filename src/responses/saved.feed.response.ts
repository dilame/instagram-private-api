export interface SavedFeedResponse {
  items: SavedFeedResponseItemsItem[];
  num_results: number;
  more_available: boolean;
  auto_load_more_enabled: boolean;
  next_max_id: string;
  status: string;
}

export interface SavedFeedResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  next_max_id: string;
  max_num_visible_preview_comments: number;
  preview_comments: null[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  image_versions2: null[];
  original_width: number;
  original_height: number;
  user: null[];
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  like_count: number;
  has_liked: boolean;
  photo_of_you: boolean;
  caption: null[];
  can_viewer_save: boolean;
  has_viewer_saved: boolean;
  saved_collection_ids: any[];
  organic_tracking_token: string;
}
