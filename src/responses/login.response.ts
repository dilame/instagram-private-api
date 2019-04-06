import { Type } from 'class-transformer';
import { InstagramResponse } from './instagram.response';

class Nametag {
  mode: number;
  gradient: number;
  emoji: string;
  selfie_sticker: number;
}

export class LoginResponse extends InstagramResponse {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  can_boost_post: boolean;
  is_business: boolean;
  is_call_to_action_enabled: null;
  account_type: number;
  can_see_organic_insights: boolean;
  show_insights_terms: boolean;
  reel_auto_archive: string;
  has_placed_orders: boolean;
  allowed_commenter_type: string;
  @Type(() => Nametag)
  nametag: Nametag;
  allow_contacts_sync: boolean;
  phone_number: string;
  country_code: number;
  national_number: number;
}
