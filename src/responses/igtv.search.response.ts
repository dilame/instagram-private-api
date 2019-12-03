export interface IgtvSearchResponseRootObject {
  results: IgtvSearchResponseResultsItem[];
  num_results: number;
  has_more: boolean;
  rank_token: string;
  status: string;
}
export interface IgtvSearchResponseResultsItem {
  type: string;
  user: IgtvSearchResponseUser;
  channel: IgtvSearchResponseChannel;
}
export interface IgtvSearchResponseUser {
  pk?: number;
  username: string;
  full_name?: string;
  is_private?: boolean;
  profile_pic_url?: string;
  profile_pic_id?: string;
  is_verified?: boolean;
  has_anonymous_profile_picture?: boolean;
  biography?: string;
  biography_with_entities?: IgtvSearchResponseBiography_with_entities;
  external_url?: string;
  external_lynx_url?: string;
  mutual_followers_count?: number;
  friendship_status?: IgtvSearchResponseFriendship_status;
  latest_reel_media?: number;
  has_biography_translation?: boolean;
  id?: number;
}
export interface IgtvSearchResponseBiography_with_entities {
  raw_text: string;
  entities: IgtvSearchResponseEntitiesItem[];
}
export interface IgtvSearchResponseEntitiesItem {
  hashtag?: IgtvSearchResponseHashtag;
  user?: IgtvSearchResponseUser;
}
export interface IgtvSearchResponseHashtag {
  id: string;
  name: string;
}
export interface IgtvSearchResponseFriendship_status {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
  followed_by?: boolean;
  blocking?: boolean;
  muting?: boolean;
}
export interface IgtvSearchResponseChannel {
  id: string;
  items: any[];
  more_available: boolean;
  seen_state: IgtvSearchResponseSeen_state;
  title: string;
  type: string;
  max_id: null;
  user_dict: IgtvSearchResponseUser_dict;
  description: null;
  cover_photo_url: null;
  approx_total_videos: null;
}
export interface IgtvSearchResponseSeen_state {}
export interface IgtvSearchResponseUser_dict {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  media_count: number;
  geo_media_count?: number;
  follower_count: number;
  following_count: number;
  following_tag_count: number;
  biography: string;
  biography_with_entities: IgtvSearchResponseBiography_with_entities;
  external_url: string;
  external_lynx_url?: string;
  total_igtv_videos: number;
  has_igtv_series: boolean;
  friendship_status: IgtvSearchResponseFriendship_status;
  has_biography_translation?: boolean;
}
