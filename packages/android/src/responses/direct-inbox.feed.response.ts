export interface DirectInboxFeedResponse {
  inbox: DirectInboxFeedResponseInbox;
  seq_id: number;
  snapshot_at_ms: number;
  pending_requests_total: number;
  most_recent_inviter: DirectInboxFeedResponseMostRecentInviter;
  status: string;
}
export interface DirectInboxFeedResponseInbox {
  threads: DirectInboxFeedResponseThreadsItem[];
  has_older: boolean;
  unseen_count: number;
  unseen_count_ts: string;
  oldest_cursor: string;
  blended_inbox_enabled: boolean;
}
export class DirectInboxFeedResponseThreadsItem {
  thread_id: string;
  thread_v2_id: string;
  users: DirectInboxFeedResponseUsersItem[];
  left_users: any[];
  admin_user_ids: any[];
  items: DirectInboxFeedResponseItemsItem[];
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
  inviter: DirectInboxFeedResponseInviter;
  has_older: boolean;
  has_newer: boolean;
  /*
        last_seen_at: {
            user_id: { timestamp: string, item_id: string }
        }
     */
  last_seen_at: any;
  newest_cursor: string;
  oldest_cursor: string;
  is_spam: boolean;
  last_permanent_item: DirectInboxFeedResponseLastPermanentItem;
}
export interface DirectInboxFeedResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  friendship_status: DirectInboxFeedResponseFriendshipStatus;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_directapp_installed: boolean;
}

export interface DirectInboxFeedResponseFriendshipStatus {
  following: boolean;
  blocking: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
export interface DirectInboxFeedResponseItemsItem {
  item_id: string;
  user_id: number;
  timestamp: string;
  item_type: string;
  text?: string;
  link?: DirectInboxFeedResponseLink;
  client_context?: string;
  reel_share?: DirectInboxFeedResponseReelShare;
  profile?: DirectInboxFeedResponseProfile;
  placeholder?: DirectInboxFeedResponsePlaceholder;
}
export interface DirectInboxFeedResponseInviter {
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

export interface DirectInboxFeedResponseLastPermanentItem {
  item_id: string;
  user_id: number;
  timestamp: string;
  item_type: string;
  text?: string;
  link?: DirectInboxFeedResponseLink;
  client_context?: string;
  reel_share?: DirectInboxFeedResponseReelShare;
  profile?: DirectInboxFeedResponseProfile;
  placeholder?: DirectInboxFeedResponsePlaceholder;
}
export interface DirectInboxFeedResponseLink {
  text: string;
  link_context: DirectInboxFeedResponseLinkContext;
  client_context: string;
  mutation_token: string;
}

export interface DirectInboxFeedResponseLinkContext {
  link_url: string;
  link_title: string;
  link_summary: string;
  link_image_url: string;
}

export interface DirectInboxFeedResponseReelShare {
  text: string;
  type: string;
  reel_owner_id: number;
  is_reel_persisted: boolean;
  reel_type: string;
  media: DirectInboxFeedResponseMedia;
}
export interface DirectInboxFeedResponseMedia {
  user: DirectInboxFeedResponseUser;
  expiring_at: number;
}
export interface DirectInboxFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
}
export interface DirectInboxFeedResponseProfile {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
}
export interface DirectInboxFeedResponsePlaceholder {
  is_linked: boolean;
  title: string;
  message: string;
}

export interface DirectInboxFeedResponseMostRecentInviter {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
}
