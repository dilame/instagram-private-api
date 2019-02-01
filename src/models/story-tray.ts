import { Type } from 'class-transformer';
import { User } from './user';
import { Media } from './media';

export class StoryTray {
  id: number;
  latest_reel_media: number;
  expiring_at: number;
  seen: number;
  can_reply: boolean;
  can_reshare: boolean;
  reel_type: string;
  @Type(() => User)
  user: User;
  ranked_position: number;
  seen_ranked_position: number;
  muted: boolean;
  prefetch_count: number;
  has_besties_media: boolean;
  media_count: number;
  @Type(() => Media)
  items: Media[];
}
