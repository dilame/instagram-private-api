import { Type } from 'class-transformer';
import { User } from './user';

export class Media {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  original_width: number;
  original_height: number;
  caption_position: number;
  is_reel_media: boolean;
  @Type(() => User)
  user: User;
  caption: string | null;
  caption_is_edited: boolean;
  photo_of_you: boolean;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
  imported_taken_at: number;
  can_reshare: boolean;
  can_reply: boolean;
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;

}
