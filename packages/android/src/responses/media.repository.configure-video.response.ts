export interface MediaRepositoryConfigureVideoResponseRootObject {
  media: MediaRepositoryConfigureVideoResponseMedia;
  upload_id: string;
  status: string;
}
export interface MediaRepositoryConfigureVideoResponseMedia {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: MediaRepositoryConfigureVideoResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: MediaRepositoryConfigureVideoResponseUser;
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
  usertags: MediaRepositoryConfigureVideoResponseUsertags;
  caption: null;
  fb_user_tags: MediaRepositoryConfigureVideoResponseFb_user_tags;
  can_viewer_save: boolean;
  organic_tracking_token: string;
}
export interface MediaRepositoryConfigureVideoResponseImage_versions2 {
  candidates: MediaRepositoryConfigureVideoResponseCandidatesItem[];
}
export interface MediaRepositoryConfigureVideoResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface MediaRepositoryConfigureVideoResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  has_anonymous_profile_picture?: boolean;
  can_boost_post?: boolean;
  can_see_organic_insights?: boolean;
  show_insights_terms?: boolean;
  reel_auto_archive?: string;
  is_unpublished?: boolean;
  latest_reel_media?: null;
  allowed_commenter_type?: string;
  is_verified?: boolean;
}
export interface MediaRepositoryConfigureVideoResponseUsertags {
  in: MediaRepositoryConfigureVideoResponseInItem[];
}
export interface MediaRepositoryConfigureVideoResponseInItem {
  user: MediaRepositoryConfigureVideoResponseUser;
  position: number[];
  start_time_in_video_in_sec: null;
  duration_in_video_in_sec: null;
}
export interface MediaRepositoryConfigureVideoResponseFb_user_tags {
  in: any[];
}
