export interface DirectRepositoryRankedRecipientsResponseRootObject {
  ranked_recipients: DirectRepositoryRankedRecipientsResponseRankedRecipientsItem[];
  expires: number;
  filtered: boolean;
  request_id: string;
  rank_token: string;
  status: string;
}
export interface DirectRepositoryRankedRecipientsResponseRankedRecipientsItem {
  user?: DirectRepositoryRankedRecipientsResponseUser;
  thread?: DirectRepositoryRankedRecipientsResponseThread;
}

export interface DirectRepositoryRankedRecipientsResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_directapp_installed: boolean;
  is_using_unified_inbox_for_direct: boolean;
}
export interface DirectRepositoryRankedRecipientsResponseThread {
  thread_id: string;
  users: DirectRepositoryRankedRecipientsResponseUsersItem[];
  canonical: boolean;
  named: boolean;
  thread_title: string;
  pending: boolean;
  thread_type: string;
  viewer_id: number;
}

export interface DirectRepositoryRankedRecipientsResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_directapp_installed: boolean;
  is_using_unified_inbox_for_direct: boolean;
}
