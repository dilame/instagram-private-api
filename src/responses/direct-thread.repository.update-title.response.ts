export interface DirectThreadRepositoryUpdateTitleResponseRootObject {
  thread: DirectThreadRepositoryUpdateTitleResponseThread;
  status: string;
}

export interface DirectThreadRepositoryUpdateTitleResponseThread {
  thread_id: string;
  thread_v2_id: string;
  users: DirectThreadRepositoryUpdateTitleResponseUsersItem[];
  left_users: any[];
  admin_user_ids: number[];
  items: DirectThreadRepositoryUpdateTitleResponseItemsItem[];
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
  inviter: DirectThreadRepositoryUpdateTitleResponseInviter;
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
  next_cursor: string;
  prev_cursor: string;
  last_permanent_item: DirectThreadRepositoryUpdateTitleResponseLastPermanentItem;
}

export interface DirectThreadRepositoryUpdateTitleResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: DirectThreadRepositoryUpdateTitleResponseFriendshipStatus;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_directapp_installed: boolean;
  is_using_unified_inbox_for_direct: boolean;
}

export interface DirectThreadRepositoryUpdateTitleResponseFriendshipStatus {
  following: boolean;
  blocking: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

export interface DirectThreadRepositoryUpdateTitleResponseItemsItem {
  item_id: string;
  user_id: number;
  timestamp: string;
  item_type: string;
  action_log: DirectThreadRepositoryUpdateTitleResponseActionLog;
}

export interface DirectThreadRepositoryUpdateTitleResponseActionLog {
  description: string;
  bold: DirectThreadRepositoryUpdateTitleResponseBoldItem[];
  text_attributes: DirectThreadRepositoryUpdateTitleResponseTextAttributesItem[];
}

export interface DirectThreadRepositoryUpdateTitleResponseBoldItem {
  start: number;
  end: number;
}

export interface DirectThreadRepositoryUpdateTitleResponseTextAttributesItem {
  start: number;
  end: number;
  bold: number;
  color: string;
  intent: string;
}

export interface DirectThreadRepositoryUpdateTitleResponseInviter {
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

export interface DirectThreadRepositoryUpdateTitleResponseLastPermanentItem {
  item_id: string;
  user_id: number;
  timestamp: string;
  item_type: string;
  action_log: DirectThreadRepositoryUpdateTitleResponseActionLog;
}
