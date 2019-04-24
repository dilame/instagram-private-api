export interface MediaRepositoryCommentResponse {
  comment: MediaRepositoryCommentResponseComment;
  status: string;
}
export interface MediaRepositoryCommentResponseComment {
  content_type: string;
  user: MediaRepositoryCommentResponseUser;
  pk: string;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  media_id: string;
  status: string;
  share_enabled: boolean;
}
export interface MediaRepositoryCommentResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  reel_auto_archive: string;
  allowed_commenter_type: string;
}
