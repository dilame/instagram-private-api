export interface ReelsTrayFeedResponseRootObject {
  tray: ReelsTrayFeedResponseTrayItem[];
  story_ranking_token: string;
  broadcasts: ReelsTrayFeedResponseBroadcastsItem[];
  sticker_version: number;
  face_filter_nux_version: number;
  stories_viewer_gestures_nux_eligible: boolean;
  has_new_nux_story: boolean;
  status: string;
}
export interface ReelsTrayFeedResponseTrayItem {
  id: number;
  latest_reel_media: number;
  expiring_at: number;
  seen: number;
  can_reply: boolean;
  can_reshare: boolean;
  reel_type: string;
  user: ReelsTrayFeedResponseUser;
  ranked_position: number;
  seen_ranked_position: number;
  muted: boolean;
  prefetch_count: number;
  has_besties_media: boolean;
  media_count: number;
  media_ids: string[];
  has_pride_media: boolean;
  items?: ReelsTrayFeedResponseItemsItem[];
  hide_from_feed_unit?: boolean;
}
export interface ReelsTrayFeedResponseUser {
  pk: number;
  username?: string;
  full_name?: string;
  is_private?: boolean;
  profile_pic_url?: string;
  profile_pic_id?: string;
  is_verified?: boolean;
  friendship_status?: ReelsTrayFeedResponseFriendship_status;
}
export interface ReelsTrayFeedResponseFriendship_status {
  muting: boolean;
  is_muting_reel: boolean;
  following: boolean;
  outgoing_request: boolean;
  followed_by?: boolean;
  blocking?: boolean;
  is_private?: boolean;
  incoming_request?: boolean;
  is_bestie?: boolean;
  is_restricted?: boolean;
}
export interface ReelsTrayFeedResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number | string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: ReelsTrayFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: ReelsTrayFeedResponseUser;
  caption_is_edited: boolean;
  caption_position: number;
  is_reel_media: boolean;
  photo_of_you: boolean;
  caption: null;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
  imported_taken_at?: number;
  can_reshare: boolean;
  can_reply: boolean;
  is_pride_media: boolean;
  story_quizs?: ReelsTrayFeedResponseStoryQuizsItem[];
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
  story_locations?: ReelsTrayFeedResponseStoryLocationsItem[];
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: ReelsTrayFeedResponseVideoVersionsItem[];
  has_audio?: boolean;
  video_duration?: number;
  reel_mentions?: ReelsTrayFeedResponseReelMentionsItem[];
  story_questions?: ReelsTrayFeedResponseStoryQuestionsItem[];
  creative_config?: ReelsTrayFeedResponseCreative_config;
  attribution?: ReelsTrayFeedResponseAttribution;
  story_polls?: ReelsTrayFeedResponseStoryPollsItem[];
}
export interface ReelsTrayFeedResponseImage_versions2 {
  candidates: ReelsTrayFeedResponseCandidatesItem[];
}
export interface ReelsTrayFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface ReelsTrayFeedResponseStoryQuizsItem {
  x: string;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: string;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  quiz_sticker: ReelsTrayFeedResponseQuiz_sticker;
}
export interface ReelsTrayFeedResponseQuiz_sticker {
  id: string;
  quiz_id: string;
  question: string;
  tallies: ReelsTrayFeedResponseTalliesItem[];
  correct_answer: number;
  viewer_can_answer: boolean;
  finished: boolean;
  text_color: string;
  start_background_color: string;
  end_background_color: string;
}
export interface ReelsTrayFeedResponseTalliesItem {
  text: string;
  count: number;
  font_size?: number;
}
export interface ReelsTrayFeedResponseStoryLocationsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  location: ReelsTrayFeedResponseLocation;
}
export interface ReelsTrayFeedResponseLocation {
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
export interface ReelsTrayFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface ReelsTrayFeedResponseReelMentionsItem {
  x: number;
  y: string | number;
  z: number;
  width: number;
  height: number | string;
  rotation: string | number;
  is_pinned: number;
  is_hidden: number;
  display_type: string;
  is_sticker: number;
  user: ReelsTrayFeedResponseUser;
}
export interface ReelsTrayFeedResponseStoryQuestionsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  question_sticker: ReelsTrayFeedResponseQuestion_sticker;
}
export interface ReelsTrayFeedResponseQuestion_sticker {
  question_type: string;
  question_id: string;
  question: string;
  media_id: string;
  text_color: string;
  background_color: string;
  viewer_can_interact: boolean;
  profile_pic_url: string;
}
export interface ReelsTrayFeedResponseCreative_config {
  capture_type: string;
  camera_facing: string;
  should_render_try_it_on: boolean;
}
export interface ReelsTrayFeedResponseAttribution {
  name: string;
}
export interface ReelsTrayFeedResponseStoryPollsItem {
  x: number;
  y: string;
  z: number;
  width: number;
  height: string;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  poll_sticker: ReelsTrayFeedResponsePoll_sticker;
}
export interface ReelsTrayFeedResponsePoll_sticker {
  id: string;
  poll_id: string;
  question: string;
  tallies: ReelsTrayFeedResponseTalliesItem[];
  promotion_tallies: null;
  viewer_can_vote: boolean;
  is_shared_result: boolean;
  finished: boolean;
}
export interface ReelsTrayFeedResponseBroadcastsItem {
  id: string;
  rtmp_playback_url: string;
  dash_playback_url: string;
  dash_abr_playback_url: null;
  dash_live_predictive_playback_url: string;
  broadcast_status: string;
  viewer_count: number;
  internal_only: boolean;
  muted: boolean;
  ranked_position: number;
  seen_ranked_position: number;
  cover_frame_url: string;
  cobroadcasters: any[];
  is_player_live_trace_enabled: number;
  is_gaming_content: boolean;
  broadcast_owner: ReelsTrayFeedResponseBroadcast_owner;
  published_time: number;
  hide_from_feed_unit: boolean;
  media_id: string;
  broadcast_message: string;
  organic_tracking_token: string;
}
export interface ReelsTrayFeedResponseBroadcast_owner {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: ReelsTrayFeedResponseFriendship_status;
  is_verified: boolean;
  live_subscription_status: string;
}
