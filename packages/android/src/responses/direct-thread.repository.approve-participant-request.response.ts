export interface DirectThreadRepositoryApproveParticipantRequestResponseRootObject {
  thread: DirectThreadRepositoryApproveParticipantRequestResponseThread;
  status: string;
}
export interface DirectThreadRepositoryApproveParticipantRequestResponseThread {
  thread_id: string;
  thread_v2_id: string;
  users: DirectThreadRepositoryApproveParticipantRequestResponseUsersItem[];
  left_users: any[];
  admin_user_ids: number[];
  items: DirectThreadRepositoryApproveParticipantRequestResponseItemsItem[];
  last_activity_at: string;
  muted: boolean;
  is_pin: boolean;
  named: boolean;
  canonical: boolean;
  pending: boolean;
  archived: boolean;
  valued_request: boolean;
  thread_type: string;
  viewer_id: number;
  thread_title: string;
  pending_score: string;
  folder: number;
  vc_muted: boolean;
  is_group: boolean;
  mentions_muted: boolean;
  approval_required_for_new_members: boolean;
  input_mode: number;
  business_thread_folder: number;
  read_state: number;
  inviter: DirectThreadRepositoryApproveParticipantRequestResponseInviter;
  has_older: boolean;
  has_newer: boolean;
  last_seen_at: DirectThreadRepositoryApproveParticipantRequestResponseLast_seen_at;
  newest_cursor: string;
  oldest_cursor: string;
  next_cursor: string;
  prev_cursor: string;
  last_permanent_item: DirectThreadRepositoryApproveParticipantRequestResponseLast_permanent_item;
}
export interface DirectThreadRepositoryApproveParticipantRequestResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: DirectThreadRepositoryApproveParticipantRequestResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_directapp_installed: boolean;
  is_using_unified_inbox_for_direct: boolean;
}
export interface DirectThreadRepositoryApproveParticipantRequestResponseFriendship_status {
  following: boolean;
  blocking: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface DirectThreadRepositoryApproveParticipantRequestResponseItemsItem {
  item_id: string;
  user_id: number;
  timestamp: string;
  item_type: string;
  story_share: DirectThreadRepositoryApproveParticipantRequestResponseStory_share;
}
export interface DirectThreadRepositoryApproveParticipantRequestResponseStory_share {
  media: DirectThreadRepositoryApproveParticipantRequestResponseMedia;
  reel_id: number;
  reel_type: string;
  is_reel_persisted: boolean;
  story_share_type: string;
  text: null;
}
export interface DirectThreadRepositoryApproveParticipantRequestResponseMedia {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: DirectThreadRepositoryApproveParticipantRequestResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: DirectThreadRepositoryApproveParticipantRequestResponseUser;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  caption_position: number;
  is_reel_media: boolean;
  timezone_offset: number;
  like_count: number;
  has_liked: boolean;
  likers: any[];
  photo_of_you: boolean;
  caption: null;
  fb_user_tags: DirectThreadRepositoryApproveParticipantRequestResponseFb_user_tags;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
}
export interface DirectThreadRepositoryApproveParticipantRequestResponseImage_versions2 {
  candidates: DirectThreadRepositoryApproveParticipantRequestResponseCandidatesItem[];
}
export interface DirectThreadRepositoryApproveParticipantRequestResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface DirectThreadRepositoryApproveParticipantRequestResponseUser {
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
export interface DirectThreadRepositoryApproveParticipantRequestResponseFb_user_tags {
  in: any[];
}
export interface DirectThreadRepositoryApproveParticipantRequestResponseInviter {
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
export interface DirectThreadRepositoryApproveParticipantRequestResponseLast_seen_at {}
export interface DirectThreadRepositoryApproveParticipantRequestResponseLast_permanent_item {
  item_id: string;
  user_id: number;
  timestamp: string;
  item_type: string;
  story_share: DirectThreadRepositoryApproveParticipantRequestResponseStory_share;
}
