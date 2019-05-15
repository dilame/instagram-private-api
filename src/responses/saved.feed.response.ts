export interface SavedFeedResponse {
  items: SavedFeedResponseMedia[];
  num_results: number;
  more_available: boolean;
  auto_load_more_enabled: boolean;
  next_max_id: string;
  status: string;
}

export interface SavedFeedResponseRootObjectItem {
  media: SavedFeedResponseMedia;
}
export interface SavedFeedResponseMedia {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number | string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  next_max_id: string;
  max_num_visible_preview_comments: number;
  preview_comments: SavedFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  image_versions2?: SavedFeedResponseImage_versions2;
  original_width?: number;
  original_height?: number;
  location?: SavedFeedResponseLocation;
  lat?: number;
  lng?: number;
  user: SavedFeedResponseUser;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  like_count: number;
  has_liked: boolean;
  photo_of_you: boolean;
  caption: SavedFeedResponseCaption | null;
  can_viewer_save: boolean;
  has_viewer_saved: boolean;
  saved_collection_ids: any[];
  organic_tracking_token: string;
  carousel_media_count?: number;
  carousel_media?: SavedFeedResponseCarouselMediaItem[];
  can_see_insights_as_brand?: boolean;
  usertags?: SavedFeedResponseUsertags;
}
export interface SavedFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: SavedFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_liked_comment: boolean;
  comment_like_count: number;
  has_translation?: boolean;
  parent_comment_id?: string;
}
export interface SavedFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
  friendship_status?: SavedFeedResponseFriendship_status;
  has_anonymous_profile_picture?: boolean;
  is_unpublished?: boolean;
  is_favorite?: boolean;
}
export interface SavedFeedResponseImage_versions2 {
  candidates: SavedFeedResponseCandidatesItem[];
}
export interface SavedFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface SavedFeedResponseLocation {
  pk: number | string;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number;
  external_source: string;
  facebook_places_id: number | string;
}
export interface SavedFeedResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface SavedFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: SavedFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
}
export interface SavedFeedResponseCarouselMediaItem {
  id: string;
  media_type: number;
  image_versions2: SavedFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  pk: string;
  carousel_parent_id: string;
}
export interface SavedFeedResponseUsertags {
  in: SavedFeedResponseInItem[];
}
export interface SavedFeedResponseInItem {
  user: SavedFeedResponseUser;
  position: number[] | (number | string)[];
  start_time_in_video_in_sec: null;
  duration_in_video_in_sec: null;
}
