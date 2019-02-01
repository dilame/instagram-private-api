import { Type } from 'class-transformer';
import { FriendshipStatus } from './friendship-status';

export class User {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  @Type(() => FriendshipStatus)
  friendship_status: FriendshipStatus;
}
