import { Type } from 'class-transformer';
import { User } from './user';
import { Media } from './media';
import { Location } from './location';
import { AbstractModel } from './abstract.model';

export class StoryTray extends AbstractModel {
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
  unique_integer_reel_id: string | number;
  @Type(() => Location)
  location: Location;
  @Type(() => Media)
  items: Media[];
}
