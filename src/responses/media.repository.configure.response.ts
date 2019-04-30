export interface MediaRepositoryCommentResponseRootObject {
  media: MediaRepositoryCommentResponseMedia;
  upload_id: string;
  status: string;
}

export interface MediaRepositoryCommentResponseMedia {
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
  image_versions2: MediaRepositoryCommentResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: MediaRepositoryCommentResponseUser;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  photo_of_you: boolean;
  caption: null;
  fb_user_tags: MediaRepositoryCommentResponseFb_user_tags;
  can_viewer_save: boolean;
  organic_tracking_token: string;
}

export interface MediaRepositoryCommentResponseImage_versions2 {
  candidates: MediaRepositoryCommentResponseCandidatesItem[];
}

export interface MediaRepositoryCommentResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}

export interface MediaRepositoryCommentResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  has_anonymous_profile_picture: boolean;
  can_boost_post: boolean;
  can_see_organic_insights: boolean;
  show_insights_terms: boolean;
  reel_auto_archive: string;
  is_unpublished: boolean;
  allowed_commenter_type: string;
}

export interface MediaRepositoryCommentResponseFb_user_tags {
  in: any[];
}
