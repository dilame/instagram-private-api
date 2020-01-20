export interface HighlightsRepositoryEditReelResponseRootObject {
  reel: HighlightsRepositoryEditReelResponseReel;
  status: string;
}
export interface HighlightsRepositoryEditReelResponseReel {
  id: string;
  latest_reel_media: number;
  seen: null;
  can_reply: boolean;
  can_reshare: boolean;
  reel_type: string;
  cover_media: HighlightsRepositoryEditReelResponseCover_media;
  user: HighlightsRepositoryEditReelResponseUser;
  items: HighlightsRepositoryEditReelResponseItemsItem[];
  ranked_position: number;
  title: string;
  created_at: number;
  seen_ranked_position: number;
  prefetch_count: number;
  media_count: number;
  contains_stitched_media_blocked_by_rm: boolean;
  has_pride_media: boolean;
}
export interface HighlightsRepositoryEditReelResponseCover_media {
  cropped_image_version: HighlightsRepositoryEditReelResponseCropped_image_version;
  crop_rect: number[];
  media_id: string;
  full_image_version: HighlightsRepositoryEditReelResponseFull_image_version;
}
export interface HighlightsRepositoryEditReelResponseCropped_image_version {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface HighlightsRepositoryEditReelResponseFull_image_version {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface HighlightsRepositoryEditReelResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture?: boolean;
  can_boost_post?: boolean;
  can_see_organic_insights?: boolean;
  show_insights_terms?: boolean;
  reel_auto_archive?: string;
  is_unpublished?: boolean;
  allowed_commenter_type?: string;
}
export interface HighlightsRepositoryEditReelResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: HighlightsRepositoryEditReelResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: HighlightsRepositoryEditReelResponseUser;
  caption_is_edited: boolean;
  caption_position: number;
  is_reel_media: boolean;
  timezone_offset: number;
  boosted_status: string;
  boost_unavailable_reason: string;
  photo_of_you: boolean;
  caption: null;
  fb_user_tags?: HighlightsRepositoryEditReelResponseFb_user_tags;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  can_reshare: boolean;
  can_reply: boolean;
  is_pride_media: boolean;
  creative_config?: HighlightsRepositoryEditReelResponseCreative_config;
  story_is_saved_to_archive: boolean;
  story_quizs?: HighlightsRepositoryEditReelResponseStoryQuizsItem[];
  story_quiz_participant_infos?: HighlightsRepositoryEditReelResponseStoryQuizParticipantInfosItem[];
  highlight_reel_ids: string[];
  viewers: any[];
  viewer_count: number;
  viewer_cursor: null;
  total_viewer_count: number;
  multi_author_reel_names: any[];
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: HighlightsRepositoryEditReelResponseVideoVersionsItem[];
  has_audio?: boolean;
  video_duration?: number;
  imported_taken_at?: number;
}
export interface HighlightsRepositoryEditReelResponseImage_versions2 {
  candidates: HighlightsRepositoryEditReelResponseCandidatesItem[];
}
export interface HighlightsRepositoryEditReelResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface HighlightsRepositoryEditReelResponseFb_user_tags {
  in: any[];
}
export interface HighlightsRepositoryEditReelResponseCreative_config {
  capture_type: string;
  camera_facing: string;
  should_render_try_it_on: boolean;
}
export interface HighlightsRepositoryEditReelResponseStoryQuizsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  quiz_sticker: HighlightsRepositoryEditReelResponseQuiz_sticker;
}
export interface HighlightsRepositoryEditReelResponseQuiz_sticker {
  id: string;
  quiz_id: string;
  question: string;
  tallies: HighlightsRepositoryEditReelResponseTalliesItem[];
  correct_answer: number;
  viewer_can_answer: boolean;
  finished: boolean;
  text_color: string;
  start_background_color: string;
  end_background_color: string;
}
export interface HighlightsRepositoryEditReelResponseTalliesItem {
  text: string;
  count: number;
}
export interface HighlightsRepositoryEditReelResponseStoryQuizParticipantInfosItem {
  quiz_id: string;
  participants: HighlightsRepositoryEditReelResponseParticipantsItem[];
  max_id: null;
  more_available: boolean;
}
export interface HighlightsRepositoryEditReelResponseParticipantsItem {
  user: HighlightsRepositoryEditReelResponseUser;
  answer: number;
  ts: number;
}
export interface HighlightsRepositoryEditReelResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
