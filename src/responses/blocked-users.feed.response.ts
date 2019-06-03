import { ProfileEntity } from '../entities/profile.entity';

export interface BlockedUsersFeedResponse {
  sections: null;
  users: BlockedUsersFeedResponseUsersItem[];
  big_list: boolean;
  next_max_id: string;
  page_size: number;
  status: string;
}
export class BlockedUsersFeedResponseUsersItem extends ProfileEntity {
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
