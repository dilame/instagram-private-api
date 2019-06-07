import { Entity } from '../core/entity';

export interface BlockedUsersFeedResponseRootObject {
  blocked_list: BlockedUsersFeedResponseBlockedListItem[];
  next_max_id: string;
  page_size: number;
  status: string;
}
export class BlockedUsersFeedResponseBlockedListItem extends Entity {
  user_id: number;
  username: string;
  full_name: string;
  profile_pic_url: string;
  block_at: number;
}
