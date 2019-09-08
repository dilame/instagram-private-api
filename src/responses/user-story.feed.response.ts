export interface UserStoryFeedResponseRootObject {
  broadcast: null;
  reel: UserStoryFeedResponseReel;
  status: string;
}
export interface UserStoryFeedResponseReel {
  id: number;
  latest_reel_media: number;
  expiring_at: number;
  seen: number;
  can_reply: boolean;
  can_reshare: boolean;
  reel_type: string;
  user: UserStoryFeedResponseUser;
  items: UserStoryFeedResponseItemsItem[];
  prefetch_count: number;
  has_besties_media: boolean;
  media_count: number;
  has_pride_media: boolean;
}
export interface UserStoryFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status?: UserStoryFeedResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture?: boolean;
  is_unpublished?: boolean;
  is_favorite?: boolean;
}
export interface UserStoryFeedResponseFriendship_status {
  following: boolean;
  followed_by: boolean;
  blocking: boolean;
  muting: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface UserStoryFeedResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string | number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: UserStoryFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: UserStoryFeedResponseUser;
  caption_is_edited: boolean;
  caption_position: number;
  is_reel_media: boolean;
  photo_of_you: boolean;
  caption: null;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
  imported_taken_at: number;
  can_reshare: boolean;
  can_reply: boolean;
  is_pride_media: boolean;
  story_locations?: UserStoryFeedResponseStoryLocationsItem[];
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: UserStoryFeedResponseVideoVersionsItem[];
  has_audio?: boolean;
  video_duration?: number;
}
export interface UserStoryFeedResponseImage_versions2 {
  candidates: UserStoryFeedResponseCandidatesItem[];
}
export interface UserStoryFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes?: number[];
}
export interface UserStoryFeedResponseStoryLocationsItem {
  x: string;
  y: string;
  z: number;
  width: string;
  height: string;
  rotation: number | string;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  location: UserStoryFeedResponseLocation;
}
export interface UserStoryFeedResponseLocation {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: string | number;
  lat: number;
  external_source: string;
  facebook_places_id: number;
}
export interface UserStoryFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
