import { ProfileEntity } from '../entities/profile.entity';

export interface PendingFriendshipsFeedResponse {
  sections: null;
  users: PendingFriendshipsFeedResponseUsersItem[];
  big_list: boolean;
  next_max_id: null;
  page_size: number;
  status: string;
}
export class PendingFriendshipsFeedResponseUsersItem extends ProfileEntity {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_favorite: boolean;
  latest_reel_media?: number;
}
