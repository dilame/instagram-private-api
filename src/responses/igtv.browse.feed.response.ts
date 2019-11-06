export interface IgtvBrowseFeedResponseRootObject {
  badging: IgtvBrowseFeedResponseBadging;
  my_channel: IgtvBrowseFeedResponseMy_channel;
  composer: IgtvBrowseFeedResponseComposer;
  banner_token: string;
  browse_items: IgtvBrowseFeedResponseBrowseItemsItem[];
  max_id: string;
  seen_state: IgtvBrowseFeedResponseSeen_state;
  more_available: boolean;
  channels: IgtvBrowseFeedResponseChannelsItem[];
  status: string;
}
export interface IgtvBrowseFeedResponseBadging {
  ids: any[];
  items: any[];
}
export interface IgtvBrowseFeedResponseMy_channel {
  id: string;
  items: any[];
  more_available: boolean;
  seen_state: IgtvBrowseFeedResponseSeen_state;
  title: string;
  type: string;
  max_id: null;
  user_dict: IgtvBrowseFeedResponseUser_dict;
  description: null;
  cover_photo_url: null;
  approx_total_videos: null;
}
export interface IgtvBrowseFeedResponseSeen_state {}
export interface IgtvBrowseFeedResponseUser_dict {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  media_count: number;
  follower_count: number;
  following_count: number;
  following_tag_count: number;
  biography: string;
  can_link_entities_in_bio: boolean;
  biography_with_entities: IgtvBrowseFeedResponseBiography_with_entities;
  external_url: string;
  external_lynx_url: string;
  has_biography_translation: boolean;
  can_boost_post: boolean;
  can_see_organic_insights: boolean;
  show_insights_terms: boolean;
  total_igtv_videos: number;
  reel_auto_archive: string;
  has_placed_orders: boolean;
  allowed_commenter_type: string;
  friendship_status: IgtvBrowseFeedResponseFriendship_status;
}
export interface IgtvBrowseFeedResponseBiography_with_entities {
  raw_text: string;
  entities: any[];
}
export interface IgtvBrowseFeedResponseFriendship_status {
  following: boolean;
  followed_by?: boolean;
  blocking?: boolean;
  muting?: boolean;
  is_private?: boolean;
  incoming_request?: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface IgtvBrowseFeedResponseComposer {
  nux_finished: boolean;
  aspect_ratio_finished: boolean;
}
export interface IgtvBrowseFeedResponseBrowseItemsItem {
  type: string;
  item: IgtvBrowseFeedResponseItem;
}
export interface IgtvBrowseFeedResponseItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: IgtvBrowseFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  video_versions: IgtvBrowseFeedResponseVideoVersionsItem[];
  has_audio: boolean;
  video_duration: number;
  view_count: number;
  user: IgtvBrowseFeedResponseUser;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  title: string;
  product_type: string;
  nearly_complete_copyright_match: boolean;
  media_cropping_info: IgtvBrowseFeedResponseMedia_cropping_info;
  thumbnails: IgtvBrowseFeedResponseThumbnails;
  photo_of_you: boolean;
  caption: IgtvBrowseFeedResponseCaption;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  explore: IgtvBrowseFeedResponseExplore;
  mezql_token: string;
}
export interface IgtvBrowseFeedResponseImage_versions2 {
  candidates: IgtvBrowseFeedResponseCandidatesItem[];
  additional_candidates: IgtvBrowseFeedResponseAdditional_candidates;
}
export interface IgtvBrowseFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface IgtvBrowseFeedResponseAdditional_candidates {
  igtv_first_frame: IgtvBrowseFeedResponseIgtv_first_frame;
}
export interface IgtvBrowseFeedResponseIgtv_first_frame {
  width: number;
  height: number;
  url: string;
}
export interface IgtvBrowseFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface IgtvBrowseFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: IgtvBrowseFeedResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
}
export interface IgtvBrowseFeedResponseMedia_cropping_info {}
export interface IgtvBrowseFeedResponseThumbnails {
  video_length: number;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_duration: string;
  sprite_urls: string[];
  thumbnails_per_row: number;
  max_thumbnails_per_sprite: number;
  sprite_width: number;
  sprite_height: number;
  rendered_width: number;
}
export interface IgtvBrowseFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: IgtvBrowseFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
}
export interface IgtvBrowseFeedResponseExplore {
  explanation: string;
}
export interface IgtvBrowseFeedResponseChannelsItem {
  id: string;
  items: any[];
  more_available: boolean;
  seen_state: IgtvBrowseFeedResponseSeen_state;
  title: string;
  type: string;
  max_id: null;
  user_dict: null;
  description: null;
  cover_photo_url: null;
  approx_total_videos: null;
}
