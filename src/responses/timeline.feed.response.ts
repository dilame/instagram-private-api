export interface TimelineFeedResponse {
  num_results: number;
  more_available: boolean;
  auto_load_more_enabled: boolean;
  feed_items: TimelineFeedResponseFeedItemsItem[];
  is_direct_v2_enabled: boolean;
  next_max_id: string;
  pagination_info: TimelineFeedResponsePagination_info;
  view_state_version: string;
  client_feed_changelist_applied: boolean;
  feed_pill_text: string;
  client_session_id: string;
  client_gap_enforcer_matrix: TimelineFeedResponseClientGapEnforcerMatrixItem[];
  status: string;
}
export interface TimelineFeedResponseFeedItemsItem {
  media_or_ad: TimelineFeedResponseMedia_or_ad;
  stories_netego?: TimelineFeedResponseStories_netego;
}
export interface TimelineFeedResponseMedia_or_ad {
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
  max_num_visible_preview_comments: number;
  preview_comments: TimelineFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  inline_composer_display_condition?: string;
  inline_composer_imp_trigger_time?: number;
  image_versions2?: TimelineFeedResponseImage_versions2;
  original_width?: number;
  original_height?: number;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: TimelineFeedResponseVideoVersionsItem[];
  has_audio?: boolean;
  video_duration?: number;
  view_count?: number;
  user: TimelineFeedResponseUser;
  can_viewer_reshare?: boolean;
  caption_is_edited: boolean;
  like_count: number;
  has_liked: boolean;
  top_likers: string[];
  direct_reply_to_author_enabled: boolean;
  photo_of_you: boolean;
  caption: TimelineFeedResponseCaption;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  preview?: string;
  inventory_source: string;
  is_seen: boolean;
  is_eof: boolean;
  injected?: TimelineFeedResponseInjected;
  collapse_comments?: boolean;
  ad_metadata?: TimelineFeedResponseAdMetadataItem[];
  link?: string;
  link_text?: string;
  ad_action?: string;
  link_hint_text?: string;
  iTunesItem?: null;
  ad_link_type?: number;
  ad_header_style?: number;
  dr_ad_type?: number;
  android_links?: TimelineFeedResponseAndroidLinksItem[];
  force_overlay?: boolean;
  hide_nux_text?: boolean;
  overlay_text?: string;
  overlay_title?: string;
  overlay_subtitle?: string;
  dominant_color?: string;
  follower_count?: number;
  post_count?: number;
  ad_id?: string;
  fb_page_url?: string;
  expiring_at?: number;
  location?: TimelineFeedResponseLocation;
  lat?: number;
  lng?: number;
  carousel_media_count?: number;
  carousel_media?: TimelineFeedResponseCarouselMediaItem[];
  can_see_insights_as_brand?: boolean;
  usertags?: TimelineFeedResponseUsertags;
  is_sidecar_child?: boolean;
  carousel_media_type?: number;
  facepile_top_likers?: TimelineFeedResponseFacepileTopLikersItem[];
  next_max_id?: string;
}
export interface TimelineFeedResponseImage_versions2 {
  candidates: TimelineFeedResponseCandidatesItem[];
}
export interface TimelineFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface TimelineFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface TimelineFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  friendship_status?: TimelineFeedResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture?: boolean;
  is_unpublished?: boolean;
  is_favorite?: boolean;
  latest_reel_media?: number;
}
export interface TimelineFeedResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_muting_reel: boolean;
  is_bestie: boolean;
}
export interface TimelineFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: TimelineFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
}
export interface TimelineFeedResponseInjected {
  label: string;
  show_icon: boolean;
  hide_label: string;
  invalidation: null;
  is_demo: boolean;
  view_tags: any[];
  is_holdout: boolean;
  tracking_token: string;
  show_ad_choices: boolean;
  ad_title: string;
  about_ad_params: string;
  direct_share: boolean;
  ad_id: string;
  display_viewability_eligible: boolean;
  lead_gen_form_id: string | number;
  is_leadgen_native_eligible: boolean;
  hide_reasons_v2: TimelineFeedResponseHideReasonsV2Item[];
  hide_flow_type: number;
  cookies: string[];
}
export interface TimelineFeedResponseHideReasonsV2Item {
  text: string;
  reason: string | null;
}
export interface TimelineFeedResponseAdMetadataItem {
  value: string;
  type: number;
}
export interface TimelineFeedResponseAndroidLinksItem {
  linkType: number;
  webUri: string;
  androidClass: string;
  package: string;
  deeplinkUri: string;
  callToActionTitle: string;
  redirectUri: string;
  leadGenFormId: string | number;
  igUserId: null;
  appInstallObjectiveInvalidationBehavior: null;
}
export interface TimelineFeedResponseLocation {
  pk: number | string;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number;
  external_source: string;
  facebook_places_id: number | string;
}
export interface TimelineFeedResponseCarouselMediaItem {
  id: string;
  media_type: number;
  image_versions2: TimelineFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  pk: string;
  carousel_parent_id: string;
  usertags?: TimelineFeedResponseUsertags;
  headline?: TimelineFeedResponseHeadline;
  video_subtitles_uri?: null;
  dominant_color?: string;
  link?: string;
  link_text?: string;
  link_hint_text?: string;
  android_links?: TimelineFeedResponseAndroidLinksItem[];
  ad_metadata?: TimelineFeedResponseAdMetadataItem[];
  ad_action?: string;
  ad_link_type?: number;
  force_overlay?: boolean;
  hide_nux_text?: boolean;
  overlay_text?: string;
  overlay_title?: string;
  overlay_subtitle?: string;
}
export interface TimelineFeedResponseUsertags {
  in: TimelineFeedResponseInItem[];
}
export interface TimelineFeedResponseInItem {
  user: TimelineFeedResponseUser;
  position: number[] | (string | number)[];
  start_time_in_video_in_sec: null;
  duration_in_video_in_sec: null;
}
export interface TimelineFeedResponseHeadline {
  content_type: string;
  user: TimelineFeedResponseUser;
  user_id: number;
  pk: string;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  media_id: string;
  bit_flags: number;
  status: string;
}
export interface TimelineFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: TimelineFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_liked_comment: boolean;
  comment_like_count: number;
  has_translation?: boolean;
  parent_comment_id?: string;
}
export interface TimelineFeedResponseFacepileTopLikersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}
export interface TimelineFeedResponseStories_netego {
  tracking_token: string;
  hide_unit_if_seen: string;
  id: number;
}
export interface TimelineFeedResponsePagination_info {
  source: null;
  group_id: null;
}
export interface TimelineFeedResponseClientGapEnforcerMatrixItem {
  list: number[];
}
