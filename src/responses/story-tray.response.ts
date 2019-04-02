import { Type } from 'class-transformer';
import { UserResponse } from './user.response';
import { MediaResponse } from './media.response';
import { LocationResponse } from './location.response';
import { InstagramResponse } from './instagram.response';

export class StoryTrayResponse extends InstagramResponse {
  id: number;
  latest_reel_media: number;
  expiring_at: number;
  seen: number;
  can_reply: boolean;
  can_reshare: boolean;
  reel_type: string;
  @Type(() => UserResponse)
  user: UserResponse;
  ranked_position: number;
  seen_ranked_position: number;
  muted: boolean;
  prefetch_count: number;
  has_besties_media: boolean;
  media_count: number;
  unique_integer_reel_id: string | number;
  @Type(() => LocationResponse)
  location: LocationResponse;
  @Type(() => MediaResponse)
  items: MediaResponse[];
}
