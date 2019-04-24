export interface AccountRepositoryLoginResponseRootObject {
  logged_in_user: AccountRepositoryLoginResponseLogged_in_user;
  status: string;
}
export interface AccountRepositoryLoginResponseLogged_in_user {
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
  account_type: number;
  is_call_to_action_enabled: null;
  can_see_organic_insights: boolean;
  show_insights_terms: boolean;
  reel_auto_archive: string;
  has_placed_orders: boolean;
  allowed_commenter_type: string;
  nametag: AccountRepositoryLoginResponseNametag;
  allow_contacts_sync: boolean;
  phone_number: string;
  country_code: number;
  national_number: number;
}
export interface AccountRepositoryLoginResponseNametag {
  mode: number;
  gradient: string;
  emoji: string;
  selfie_sticker: string;
}
