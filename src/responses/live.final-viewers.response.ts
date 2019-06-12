export interface LiveFinalViewersResponseRootObject {
  users: LiveFinalViewersResponseUsersItem[];
  total_unique_viewer_count: number;
  status: string;
}
export interface LiveFinalViewersResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}
