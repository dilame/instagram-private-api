export interface LocationFeedResponse {
  sections: LocationFeedResponseSectionsItem[];
  more_available: boolean;
  next_page: number;
  next_media_ids: string[];
  next_max_id: string;
  status: string;
}
export interface LocationFeedResponseSectionsItem {
  layout_type: string;
  layout_content: LocationFeedResponseLayout_content;
  feed_type: string;
  explore_item_info: LocationFeedResponseExplore_item_info;
}
export interface LocationFeedResponseLayout_content {
  medias: LocationFeedResponseMediasItem[];
}
export interface LocationFeedResponseMediasItem {
  media: LocationFeedResponseMedia;
}
export interface LocationFeedResponseMedia {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string | number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  next_max_id: string;
  max_num_visible_preview_comments: number;
  preview_comments: LocationFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  carousel_media_count?: number;
  carousel_media?: LocationFeedResponseCarouselMediaItem[];
  can_see_insights_as_brand?: boolean;
  location: LocationFeedResponseLocation;
  lat: string;
  lng: string;
  user: LocationFeedResponseUser;
  can_viewer_reshare: boolean;
  caption: LocationFeedResponseCaption | null;
  caption_is_edited: boolean;
  like_count: number;
  has_liked: boolean;
  top_likers: any[];
  photo_of_you: boolean;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  image_versions2?: LocationFeedResponseImage_versions2;
  original_width?: number;
  original_height?: number;
  usertags?: LocationFeedResponseUsertags;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: LocationFeedResponseVideoVersionsItem[];
  has_audio?: boolean;
  video_duration?: number;
  view_count?: number;
  commenting_disabled_for_viewer?: boolean;
}
export interface LocationFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: LocationFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
  parent_comment_id?: string;
}
export interface LocationFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified?: boolean;
  friendship_status?: LocationFeedResponseFriendship_status;
  has_anonymous_profile_picture?: boolean;
  is_unpublished?: boolean;
  is_favorite?: boolean;
}
export interface LocationFeedResponseCarouselMediaItem {
  id: string;
  media_type: number;
  image_versions2: LocationFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  pk: string;
  carousel_parent_id: string;
  usertags?: LocationFeedResponseUsertags;
  video_versions?: LocationFeedResponseVideoVersionsItem[];
  video_duration?: number;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
}
export interface LocationFeedResponseImage_versions2 {
  candidates: LocationFeedResponseCandidatesItem[];
}
export interface LocationFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface LocationFeedResponseLocation {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: string;
  lat: string;
  external_source: string;
  facebook_places_id: string;
}
export interface LocationFeedResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
export interface LocationFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: LocationFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
}
export interface LocationFeedResponseUsertags {
  in: LocationFeedResponseInItem[];
}
export interface LocationFeedResponseInItem {
  user: LocationFeedResponseUser;
  position: number[] | (number | string)[];
  start_time_in_video_in_sec: null;
  duration_in_video_in_sec: null;
}
export interface LocationFeedResponseExplore_item_info {
  num_columns: number;
  total_num_columns: number;
  aspect_ratio: number;
  autoplay: boolean;
}
export interface LocationFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
