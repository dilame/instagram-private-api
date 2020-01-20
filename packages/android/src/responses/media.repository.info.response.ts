export interface MediaInfoResponseRootObject {
  items: MediaInfoResponseItemsItem[];
  num_results: number;
  more_available: boolean;
  auto_load_more_enabled: boolean;
  status: string;
}
export interface MediaInfoResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  image_versions2: MediaInfoResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: MediaInfoResponseUser;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  like_count: number;
  has_liked: boolean;
  top_likers: any[];
  photo_of_you: boolean;
  caption: MediaInfoResponseCaption;
  can_viewer_save: boolean;
  organic_tracking_token: string;
}
export interface MediaInfoResponseImage_versions2 {
  candidates: MediaInfoResponseCandidatesItem[];
}
export interface MediaInfoResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface MediaInfoResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: MediaInfoResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
}
export interface MediaInfoResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface MediaInfoResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: MediaInfoResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
}
export interface MediaEditResponseRootObject {
  media: MediaInfoResponseItemsItem;
  status: string;
}
