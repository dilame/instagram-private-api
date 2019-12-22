export interface LikedFeedResponseRootObject {
  items: LikedFeedResponseItemsItem[];
  num_results: number;
  more_available: boolean;
  auto_load_more_enabled: boolean;
  next_max_id: string | number;
  status: string;
}
export interface LikedFeedResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number | string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: LikedFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: LikedFeedResponseUser;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  next_max_id?: string;
  max_num_visible_preview_comments: number;
  preview_comments: LikedFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  like_count: number;
  has_liked: boolean;
  photo_of_you: boolean;
  caption: LikedFeedResponseCaption;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  location?: LikedFeedResponseLocation;
  lat?: number;
  lng?: number;
  usertags?: LikedFeedResponseUsertags;
}
export interface LikedFeedResponseImage_versions2 {
  candidates: LikedFeedResponseCandidatesItem[];
}
export interface LikedFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface LikedFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  friendship_status?: LikedFeedResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture?: boolean;
  is_unpublished?: boolean;
  is_favorite?: boolean;
  can_see_primary_country_in_settings?: boolean;
  latest_reel_media?: number;
  profile_pic_id?: string;
}
export interface LikedFeedResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface LikedFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: LikedFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_liked_comment: boolean;
  comment_like_count: number;
}
export interface LikedFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: LikedFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
}
export interface LikedFeedResponseLocation {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number;
  external_source: string;
  facebook_places_id: number;
}
export interface LikedFeedResponseUsertags {
  in: LikedFeedResponseInItem[];
}
export interface LikedFeedResponseInItem {
  user: LikedFeedResponseUser;
  position: (number | string)[] | number[];
  start_time_in_video_in_sec: null;
  duration_in_video_in_sec: null;
}
