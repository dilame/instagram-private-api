export interface FriendshipRepositoryFindFollowerResponseRootObject {
  users: FriendshipRepositoryFindFollowerUserItem[];
}

export interface FriendshipRepositoryFindFollowerUserItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  latest_reel_media?: number;
}
