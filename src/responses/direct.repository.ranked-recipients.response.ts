export interface DirectRepositoryRankedRecipientsResponse {
  ranked_recipients: DirectRepositoryRankedRecipientsResponseRankedRecipientsItem[];
  expires: number;
  filtered: boolean;
  request_id: string;
  rank_token: string;
  status: string;
}
export interface DirectRepositoryRankedRecipientsResponseRankedRecipientsItem {
  thread?: DirectRepositoryRankedRecipientsResponseThread;
  user?: DirectRepositoryRankedRecipientsResponseUser;
}
export interface DirectRepositoryRankedRecipientsResponseThread {
  thread_id: string;
  users: any[];
  canonical: boolean;
  named: boolean;
  thread_title: string;
  pending: boolean;
  thread_type: string;
  viewer_id: number;
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
}
