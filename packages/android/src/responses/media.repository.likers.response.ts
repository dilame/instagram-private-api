export interface MediaRepositoryLikersResponseRootObject {
  users: MediaRepositoryLikersResponseUsersItem[];
  user_count: number;
  status: string;
}
export interface MediaRepositoryLikersResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
  latest_reel_media?: number;
}
