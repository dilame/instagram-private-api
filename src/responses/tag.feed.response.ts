export interface TagFeedResponse {
  ranked_items: TagFeedResponseRankedItemsItem[];
  items: TagFeedResponseItemsItem[];
  num_results: number;
  next_max_id: string;
  more_available: boolean;
  auto_load_more_enabled: boolean;
  story: TagFeedResponseStory;
  status: string;
}
export interface TagFeedResponseRankedItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string | number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  comment_likes_enabled?: boolean;
  comment_threading_enabled?: boolean;
  has_more_comments?: boolean;
  next_max_id?: string;
  max_num_visible_preview_comments?: number;
  preview_comments?: TagFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments?: boolean;
  comment_count?: number;
  image_versions2: TagFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  location?: TagFeedResponseLocation;
  lat?: number | string;
  lng?: number | string;
  user: TagFeedResponseUser;
  can_viewer_reshare: boolean;
  caption: TagFeedResponseCaption;
  caption_is_edited: boolean;
  like_count: number;
  has_liked: boolean;
  photo_of_you: boolean;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  usertags?: TagFeedResponseUsertags;
  comments_disabled?: boolean;
}
export interface TagFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: TagFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
  parent_comment_id?: string;
}
export interface TagFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified?: boolean;
  friendship_status?: TagFeedResponseFriendship_status;
  has_anonymous_profile_picture?: boolean;
  is_unpublished?: boolean;
  is_favorite?: boolean;
}
export interface TagFeedResponseImage_versions2 {
  candidates: TagFeedResponseCandidatesItem[];
}
export interface TagFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface TagFeedResponseLocation {
  pk: number | string;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number | string;
  lat: number | string;
  external_source: string;
  facebook_places_id: string | number;
}
export interface TagFeedResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
export interface TagFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: TagFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
}
export interface TagFeedResponseUsertags {
  in: TagFeedResponseInItem[];
}
export interface TagFeedResponseInItem {
  user: TagFeedResponseUser;
  position: (string | number)[] | number[];
  start_time_in_video_in_sec: null;
  duration_in_video_in_sec: null;
}
export interface TagFeedResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string | number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  comment_likes_enabled?: boolean;
  comment_threading_enabled?: boolean;
  has_more_comments?: boolean;
  max_num_visible_preview_comments?: number;
  preview_comments?: TagFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments?: boolean;
  comment_count?: number;
  carousel_media_count?: number;
  carousel_media?: TagFeedResponseCarouselMediaItem[];
  can_see_insights_as_brand?: boolean;
  user: TagFeedResponseUser;
  can_viewer_reshare?: boolean;
  caption: TagFeedResponseCaption | null;
  caption_is_edited: boolean;
  like_count?: number;
  has_liked?: boolean;
  likers?: TagFeedResponseLikersItem[];
  photo_of_you: boolean;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  image_versions2?: TagFeedResponseImage_versions2;
  original_width?: number;
  original_height?: number;
  location?: TagFeedResponseLocation;
  lat?: number | string;
  lng?: number | string;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: TagFeedResponseVideoVersionsItem[];
  has_audio?: boolean;
  video_duration?: number;
  view_count?: number;
  usertags?: TagFeedResponseUsertags;
  commenting_disabled_for_viewer?: boolean;
  attribution?: TagFeedResponseAttribution;
  next_max_id?: string;
  comments_disabled?: boolean;
  caption_position?: number;
  is_reel_media?: boolean;
  expiring_at?: number;
  can_reshare?: boolean;
  can_reply?: boolean;
  story_hashtags?: TagFeedResponseStoryHashtagsItem[];
  creative_config?: TagFeedResponseCreative_config;
  supports_reel_reactions?: boolean;
  show_one_tap_fb_share_tooltip?: boolean;
  has_shared_to_fb?: number;
  imported_taken_at?: number;
  reel_mentions?: TagFeedResponseReelMentionsItem[];
  story_locations?: TagFeedResponseStoryLocationsItem[];
}
export interface TagFeedResponseCarouselMediaItem {
  id: string;
  media_type: number;
  image_versions2: TagFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  pk: string;
  carousel_parent_id: string;
  video_versions?: TagFeedResponseVideoVersionsItem[];
  video_duration?: number;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  usertags?: TagFeedResponseUsertags;
}
export interface TagFeedResponseLikersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
}
export interface TagFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface TagFeedResponseAttribution {
  name: string;
}
export interface TagFeedResponseStory {
  id: string;
  latest_reel_media: number;
  expiring_at: number;
  seen: number;
  can_reply: boolean;
  can_reshare: boolean;
  reel_type: string;
  owner: TagFeedResponseOwner;
  items: TagFeedResponseItemsItem[];
  prefetch_count: number;
  unique_integer_reel_id: string;
  muted: boolean;
}
export interface TagFeedResponseOwner {
  type: string;
  pk: string;
  name: string;
  profile_pic_url: string;
  profile_pic_username: string;
}
export interface TagFeedResponseStoryHashtagsItem {
  x: string | number;
  y: string | number;
  z: number;
  width: string | number;
  height: string | number;
  rotation: string | number;
  is_pinned: number;
  is_hidden: number;
  hashtag: TagFeedResponseHashtag;
}
export interface TagFeedResponseHashtag {
  name: string;
  id: string;
}
export interface TagFeedResponseCreative_config {
  capture_type: string;
  camera_facing: string;
  should_render_try_it_on: boolean;
}
export interface TagFeedResponseReelMentionsItem {
  x: number | string;
  y: number | string;
  z: number;
  width: number | string;
  height: number | string;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  user: TagFeedResponseUser;
}
export interface TagFeedResponseStoryLocationsItem {
  x: number | string;
  y: number | string;
  z: number;
  width: number | string;
  height: string | number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  location: TagFeedResponseLocation;
}
