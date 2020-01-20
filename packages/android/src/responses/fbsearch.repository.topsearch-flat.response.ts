export interface FbsearchRepositoryTopsearchFlatResponseRootObject {
  list: FbsearchRepositoryTopsearchFlatResponseListItem[];
  has_more: boolean;
  rank_token: string;
  clear_client_cache: boolean;
  status: string;
}
export interface FbsearchRepositoryTopsearchFlatResponseListItem {
  place?: FbsearchRepositoryTopsearchFlatResponsePlace;
  position: number;
  hashtag?: FbsearchRepositoryTopsearchFlatResponseHashtag;
  user?: FbsearchRepositoryTopsearchFlatResponseUser;
}
export interface FbsearchRepositoryTopsearchFlatResponsePlace {
  location: FbsearchRepositoryTopsearchFlatResponseLocation;
  title: string;
  subtitle: string;
  media_bundles: any[];
  header_media: FbsearchRepositoryTopsearchFlatResponseHeader_media;
}
export interface FbsearchRepositoryTopsearchFlatResponseLocation {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number;
  external_source: string;
  facebook_places_id: number;
}
export interface FbsearchRepositoryTopsearchFlatResponseHeader_media {}
export interface FbsearchRepositoryTopsearchFlatResponseHashtag {
  name: string;
  id: string;
  media_count: number;
  profile_pic_url: string;
  search_result_subtitle: string;
}
export interface FbsearchRepositoryTopsearchFlatResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  friendship_status: FbsearchRepositoryTopsearchFlatResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  follower_count: number;
  byline: string;
  social_context?: string;
  search_social_context?: string;
  mutual_followers_count: number;
  profile_pic_id?: string;
  latest_reel_media?: number;
}
export interface FbsearchRepositoryTopsearchFlatResponseFriendship_status {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
