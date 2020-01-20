import { ProfileEntity } from '../entities';

export interface DiscoverFeedResponseRootObject {
  more_available: boolean;
  max_id: string;
  next_max_id: string;
  suggested_users: DiscoverFeedResponseSuggested_users;
  new_suggested_users: DiscoverFeedResponseNew_suggested_users;
  status: string;
}
export interface DiscoverFeedResponseSuggested_users {
  suggestions: DiscoverFeedResponseSuggestionsItem[];
}
export interface DiscoverFeedResponseSuggestionsItem {
  user: DiscoverFeedResponseUser;
  algorithm: string;
  social_context: string;
  icon: string;
  caption: string;
  media_ids: any[];
  thumbnail_urls: any[];
  large_urls: any[];
  media_infos: any[];
  value: number;
  followed_by: boolean;
  is_new_suggestion: boolean;
  uuid: string;
}
export class DiscoverFeedResponseUser extends ProfileEntity {
  pk: string;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
}
export interface DiscoverFeedResponseNew_suggested_users {
  suggestions: any[];
}
