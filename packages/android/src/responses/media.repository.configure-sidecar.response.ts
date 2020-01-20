export interface MediaRepositoryConfigureSidecarResponseRootObject {
  client_sidecar_id: string;
  media: MediaRepositoryConfigureSidecarResponseMedia;
  status: string;
}
export interface MediaRepositoryConfigureSidecarResponseMedia {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  carousel_media_count: number;
  carousel_media: MediaRepositoryConfigureSidecarResponseCarouselMediaItem[];
  can_see_insights_as_brand: boolean;
  user: MediaRepositoryConfigureSidecarResponseUser;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  photo_of_you: boolean;
  usertags: MediaRepositoryConfigureSidecarResponseUsertags;
  caption: MediaRepositoryConfigureSidecarResponseCaption;
  fb_user_tags: MediaRepositoryConfigureSidecarResponseFb_user_tags;
  can_viewer_save: boolean;
  organic_tracking_token: string;
}
export interface MediaRepositoryConfigureSidecarResponseCarouselMediaItem {
  id: string;
  media_type: number;
  image_versions2: MediaRepositoryConfigureSidecarResponseImage_versions2;
  original_width: number;
  original_height: number;
  video_versions?: MediaRepositoryConfigureSidecarResponseVideoVersionsItem[];
  video_duration?: number;
  pk: string;
  carousel_parent_id: string;
  usertags?: MediaRepositoryConfigureSidecarResponseUsertags;
  fb_user_tags?: MediaRepositoryConfigureSidecarResponseFb_user_tags;
}
export interface MediaRepositoryConfigureSidecarResponseImage_versions2 {
  candidates: MediaRepositoryConfigureSidecarResponseCandidatesItem[];
}
export interface MediaRepositoryConfigureSidecarResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface MediaRepositoryConfigureSidecarResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface MediaRepositoryConfigureSidecarResponseUsertags {
  in: MediaRepositoryConfigureSidecarResponseInItem[];
}
export interface MediaRepositoryConfigureSidecarResponseInItem {
  user: MediaRepositoryConfigureSidecarResponseUser;
  position: number[];
  start_time_in_video_in_sec: null;
  duration_in_video_in_sec: null;
}
export interface MediaRepositoryConfigureSidecarResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified?: boolean;
  has_anonymous_profile_picture?: boolean;
  can_boost_post?: boolean;
  can_see_organic_insights?: boolean;
  show_insights_terms?: boolean;
  reel_auto_archive?: string;
  is_unpublished?: boolean;
  latest_reel_media?: null;
  allowed_commenter_type?: string;
}
export interface MediaRepositoryConfigureSidecarResponseFb_user_tags {
  in: any[];
}
export interface MediaRepositoryConfigureSidecarResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: MediaRepositoryConfigureSidecarResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation: boolean;
}
