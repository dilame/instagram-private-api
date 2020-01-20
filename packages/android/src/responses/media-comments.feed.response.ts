export interface MediaCommentsFeedResponse {
  comment_likes_enabled: boolean;
  comments: MediaCommentsFeedResponseCommentsItem[];
  comment_count: number;
  caption: MediaCommentsFeedResponseCaption;
  caption_is_edited: boolean;
  has_more_comments: boolean;
  has_more_headload_comments: boolean;
  threading_enabled: boolean;
  media_header_display: string;
  initiate_at_top: boolean;
  insert_new_comment_to_top: boolean;
  quick_response_emojis: MediaCommentsFeedResponseQuickResponseEmojisItem[];
  preview_comments: MediaCommentsFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments: boolean;
  next_max_id: string;
  next_min_id: string;
  status: string;
}
export interface MediaCommentsFeedResponseCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: MediaCommentsFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  has_translation?: boolean;
  has_liked_comment: boolean;
  comment_like_count: number;
  child_comment_count: number;
  preview_child_comments: MediaCommentsFeedResponsePreviewChildCommentsItem[];
  other_preview_users: MediaCommentsFeedResponseOtherPreviewUsersItem[];
  has_more_tail_child_comments?: boolean;
  next_min_child_cursor?: string;
  has_more_head_child_comments?: boolean;
  num_head_child_comments?: number;
  inline_composer_display_condition: string;
  comment_index: number;
  num_tail_child_comments?: number;
}
export interface MediaCommentsFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
  latest_reel_media?: number;
  has_anonymous_profile_picture?: boolean;
}
export interface MediaCommentsFeedResponsePreviewChildCommentsItem {
  content_type: string;
  user: MediaCommentsFeedResponseUser;
  pk: string;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  media_id: string;
  status: string;
  parent_comment_id: string;
  share_enabled: boolean;
  has_liked_comment: boolean;
  comment_like_count: number;
}
export interface MediaCommentsFeedResponseOtherPreviewUsersItem {
  id: number;
  profile_pic_url: string;
}
export interface MediaCommentsFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: MediaCommentsFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  has_translation: boolean;
}
export interface MediaCommentsFeedResponseQuickResponseEmojisItem {
  unicode: string;
}
export interface MediaCommentsFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: MediaCommentsFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  has_translation: boolean;
  has_liked_comment: boolean;
  comment_like_count: number;
  parent_comment_id?: string;
}
