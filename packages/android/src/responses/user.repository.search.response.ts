export interface UserRepositorySearchResponseRootObject {
  num_results: number;
  users: UserRepositorySearchResponseUsersItem[];
  has_more: boolean;
  rank_token: string;
  status: string;
}
export interface UserRepositorySearchResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  friendship_status: UserRepositorySearchResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  follower_count: number;
  byline: string;
  mutual_followers_count: number;
  latest_reel_media?: number;
  social_context?: string;
  search_social_context?: string;
  unseen_count?: number;
}
export interface UserRepositorySearchResponseFriendship_status {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
