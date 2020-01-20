export interface DirectRepositoryCreateGroupThreadResponseRootObject {
  thread_id: string;
  thread_v2_id: string;
  users: DirectRepositoryCreateGroupThreadResponseUsersItem[];
  left_users: any[];
  admin_user_ids: number[];
  items: any[];
  last_activity_at: number;
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
  pending_score: number;
  folder: number;
  vc_muted: boolean;
  is_group: boolean;
  mentions_muted: boolean;
  approval_required_for_new_members: boolean;
  input_mode: number;
  business_thread_folder: number;
  read_state: number;
  inviter: DirectRepositoryCreateGroupThreadResponseInviter;
  has_older: boolean;
  has_newer: boolean;
  last_seen_at: any;
  next_cursor: string;
  prev_cursor: string;
  status: string;
}

export interface DirectRepositoryCreateGroupThreadResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: DirectRepositoryCreateGroupThreadResponseFriendshipStatus;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_directapp_installed: boolean;
  is_using_unified_inbox_for_direct: boolean;
}

export interface DirectRepositoryCreateGroupThreadResponseFriendshipStatus {
  following: boolean;
  blocking: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

export interface DirectRepositoryCreateGroupThreadResponseInviter {
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
