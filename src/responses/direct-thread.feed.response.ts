export interface DirectThreadFeedResponse {
  thread: DirectThreadFeedResponseThread;
  status: string;
}
export interface DirectThreadFeedResponseThread {
  thread_id: string;
  thread_v2_id: string;
  users: any[];
  left_users: any[];
  admin_user_ids: any[];
  items: DirectThreadFeedResponseItemsItem[];
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
  inviter: DirectThreadFeedResponseInviter;
  has_older: boolean;
  has_newer: boolean;
  last_seen_at: DirectThreadFeedResponseLast_seen_at;
  newest_cursor: string;
  oldest_cursor: string;
  prev_cursor: string;
  last_permanent_item: DirectThreadFeedResponseLast_permanent_item;
}
export interface DirectThreadFeedResponseItemsItem {
  item_id: string;
  user_id: number;
  timestamp: string;
  item_type: string;
  text: string;
  client_context: string;
}
export interface DirectThreadFeedResponseInviter {
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
export interface DirectThreadFeedResponseLast_seen_at {
  300687565: DirectThreadFeedResponse300687565;
}
export interface DirectThreadFeedResponse300687565 {
  timestamp: string;
  item_id: string;
}
export interface DirectThreadFeedResponseLast_permanent_item {
  item_id: string;
  user_id: number;
  timestamp: string;
  item_type: string;
  text: string;
  client_context: string;
}
