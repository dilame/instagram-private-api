export interface PostLiveViewersFeedResponse {
  users: PostLiveViewersFeedResponseUsersItem[];
  total_unique_viewer_count: number;
  next_max_id: string;
  status: string;
}
export interface PostLiveViewersFeedResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}
