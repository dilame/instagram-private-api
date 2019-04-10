export interface InboxFeedResponseRootObject {
  inbox: InboxFeedResponseInbox;
  seq_id: number;
  snapshot_at_ms: number;
  pending_requests_total: number;
  most_recent_inviter: InboxFeedResponseMost_recent_inviter;
  status: string;
}
export interface InboxFeedResponseInbox {
  threads: InboxFeedResponseThreadsItem[];
  has_older: boolean;
  unseen_count: number;
  unseen_count_ts: string;
  oldest_cursor: string;
  blended_inbox_enabled: boolean;
}
export interface InboxFeedResponseThreadsItem {
  thread_id: string;
  thread_v2_id: string;
  users: InboxFeedResponseUsersItem[];
  left_users: any[];
  admin_user_ids: any[];
  items: InboxFeedResponseItemsItem[];
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
  inviter: InboxFeedResponseInviter;
  has_older: boolean;
  has_newer: boolean;
  last_seen_at: InboxFeedResponseLast_seen_at;
  newest_cursor: string;
  oldest_cursor: string;
  is_spam: boolean;
  last_permanent_item: InboxFeedResponseLast_permanent_item;
}
export interface InboxFeedResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  friendship_status: InboxFeedResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_directapp_installed: boolean;
}
export interface InboxFeedResponseFriendship_status {
  following: boolean;
  blocking: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
export interface InboxFeedResponseItemsItem {
  item_id: string;
  user_id: number;
  timestamp: string;
  item_type: string;
  text?: string;
  link?: InboxFeedResponseLink;
  client_context?: string;
  reel_share?: InboxFeedResponseReel_share;
  profile?: InboxFeedResponseProfile;
  placeholder?: InboxFeedResponsePlaceholder;
}
export interface InboxFeedResponseInviter {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  reel_auto_archive?: string;
  allowed_commenter_type?: string;
}
export interface InboxFeedResponseLast_seen_at {
  300687565: {
    timestamp: string;
    item_id: string;
  };
}
export interface InboxFeedResponseLast_permanent_item {
  item_id: string;
  user_id: number;
  timestamp: string;
  item_type: string;
  text?: string;
  link?: InboxFeedResponseLink;
  client_context?: string;
  reel_share?: InboxFeedResponseReel_share;
  profile?: InboxFeedResponseProfile;
  placeholder?: InboxFeedResponsePlaceholder;
}
export interface InboxFeedResponseLink {
  text: string;
  link_context: InboxFeedResponseLink_context;
  client_context: string;
  mutation_token: string;
}
export interface InboxFeedResponseLink_context {
  link_url: string;
  link_title: string;
  link_summary: string;
  link_image_url: string;
}
export interface InboxFeedResponseReel_share {
  text: string;
  type: string;
  reel_owner_id: number;
  is_reel_persisted: boolean;
  reel_type: string;
  media: InboxFeedResponseMedia;
}
export interface InboxFeedResponseMedia {
  user: InboxFeedResponseUser;
  expiring_at: number;
}
export interface InboxFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
}
export interface InboxFeedResponseProfile {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
}
export interface InboxFeedResponsePlaceholder {
  is_linked: boolean;
  title: string;
  message: string;
}
export interface InboxFeedResponseMost_recent_inviter {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
}
