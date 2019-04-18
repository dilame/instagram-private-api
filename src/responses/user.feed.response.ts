export interface UserFeedResponse {
  items: UserFeedResponseItemsItem[];
  num_results: number;
  more_available: boolean;
  next_max_id: string;
  auto_load_more_enabled: boolean;
  status: string;
}
export interface UserFeedResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string | number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: UserFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  image_versions2: UserFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: UserFeedResponseUser;
  can_viewer_reshare: boolean;
  caption: null | UserFeedResponseCaption;
  caption_is_edited: boolean;
  like_count: number;
  has_liked: boolean;
  top_likers: string[];
  facepile_top_likers?: UserFeedResponseFacepileTopLikersItem[];
  direct_reply_to_author_enabled: boolean;
  photo_of_you: boolean;
  fb_user_tags?: UserFeedResponseFb_user_tags;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  next_max_id?: string;
  carousel_media_count?: number;
  carousel_media?: UserFeedResponseCarouselMediaItem[];
  can_see_insights_as_brand?: boolean;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: UserFeedResponseVideoVersionsItem[];
  has_audio?: boolean;
  video_duration?: number;
  view_count?: number;
}
export interface UserFeedResponseImage_versions2 {
  candidates: UserFeedResponseCandidatesItem[];
}
export interface UserFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface UserFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
  has_anonymous_profile_picture?: boolean;
  can_boost_post?: boolean;
  can_see_organic_insights?: boolean;
  show_insights_terms?: boolean;
  reel_auto_archive?: string;
  is_unpublished?: boolean;
  allowed_commenter_type?: string;
}
export interface UserFeedResponseFacepileTopLikersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
}
export interface UserFeedResponseFb_user_tags {
  in: any[];
}
export interface UserFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: UserFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_liked_comment: boolean;
  comment_like_count: number;
  has_translation?: boolean;
}
export interface UserFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: UserFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation: boolean;
}
export interface UserFeedResponseCarouselMediaItem {
  id: string;
  media_type: number;
  image_versions2: UserFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  pk: string;
  carousel_parent_id: string;
  fb_user_tags: UserFeedResponseFb_user_tags;
}
export interface UserFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
