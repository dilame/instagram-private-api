export interface UsertagsFeedResponseRootObject {
  items: UsertagsFeedResponseItemsItem[];
  num_results: number;
  more_available: boolean;
  auto_load_more_enabled: boolean;
  next_max_id: string;
  new_photos: any[];
  requires_review: boolean;
  total_count: number;
  status: string;
}
export interface UsertagsFeedResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: UsertagsFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: UsertagsFeedResponseUser;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  next_max_id: string;
  max_num_visible_preview_comments: number;
  preview_comments: UsertagsFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  like_count: number;
  has_liked: boolean;
  photo_of_you: boolean;
  usertags: UsertagsFeedResponseUsertags;
  caption: UsertagsFeedResponseCaption;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  location?: UsertagsFeedResponseLocation;
  lat?: number;
  lng?: string;
}
export interface UsertagsFeedResponseImage_versions2 {
  candidates: UsertagsFeedResponseCandidatesItem[];
}
export interface UsertagsFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface UsertagsFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  friendship_status?: UsertagsFeedResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture?: boolean;
  is_unpublished?: boolean;
  is_favorite?: boolean;
}
export interface UsertagsFeedResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface UsertagsFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: UsertagsFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_liked_comment: boolean;
  comment_like_count: number;
  has_translation?: boolean;
  parent_comment_id?: string;
}
export interface UsertagsFeedResponseUsertags {
  in: UsertagsFeedResponseInItem[];
}
export interface UsertagsFeedResponseInItem {
  user: UsertagsFeedResponseUser;
  position: number[] | (number | string)[];
  start_time_in_video_in_sec: null;
  duration_in_video_in_sec: null;
}
export interface UsertagsFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: UsertagsFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
}
export interface UsertagsFeedResponseLocation {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number | string;
  external_source: string;
  facebook_places_id: number | string;
}
