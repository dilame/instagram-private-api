export interface MediaInlineChildCommentsFeedResponseRootObject {
  parent_comment: MediaInlineChildCommentsFeedResponseParent_comment;
  child_comments: MediaInlineChildCommentsFeedResponseChildCommentsItem[];
  child_comment_count: number;
  has_more_tail_child_comments: boolean;
  has_more_head_child_comments: boolean;
  next_max_child_cursor: string;
  num_tail_child_comments: number;
  status: string;
}
export interface MediaInlineChildCommentsFeedResponseParent_comment {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: MediaInlineChildCommentsFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  has_liked_comment: boolean;
  comment_like_count: number;
}
export interface MediaInlineChildCommentsFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  is_verified: boolean;
  profile_pic_id?: string;
}
export interface MediaInlineChildCommentsFeedResponseChildCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: MediaInlineChildCommentsFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  parent_comment_id: string;
  has_liked_comment: boolean;
  comment_like_count: number;
}
