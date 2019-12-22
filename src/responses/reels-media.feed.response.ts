export interface ReelsMediaFeedResponseRootObject {
  reels: ReelsMediaFeedResponseReels;
  status: string;
}
export interface ReelsMediaFeedResponseReels {
  [pk: string]: ReelsMediaFeedResponse;
}
export interface ReelsMediaFeedResponse {
  id: number;
  latest_reel_media: number;
  expiring_at: number;
  seen: number;
  can_reply: boolean;
  can_reshare: boolean;
  reel_type: string;
  user: ReelsMediaFeedResponseUser;
  items: ReelsMediaFeedResponseItem[];
  prefetch_count: number;
  media_count: number;
}
export interface ReelsMediaFeedResponseUser {
  pk: number;
  username?: string;
  full_name?: string;
  is_private?: boolean;
  profile_pic_url?: string;
  profile_pic_id?: string;
  friendship_status?: ReelsMediaFeedResponseFriendshipStatus;
  is_verified?: boolean;
}
export interface ReelsMediaFeedResponseFriendshipStatus {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
export interface ReelsMediaFeedResponseItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: ReelsMediaFeedResponseImageVersions2;
  original_width: number;
  original_height: number;
  caption_position: number;
  is_reel_media: boolean;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  video_versions: ReelsMediaFeedResponseVideoVersionsItem[];
  has_audio: boolean;
  video_duration: number;
  user: ReelsMediaFeedResponseUser;
  caption_is_edited: boolean;
  photo_of_you: boolean;
  caption: null;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
  can_reshare: boolean;
  can_reply: boolean;
  reel_mentions?: ReelsMediaFeedResponseReelMentionsItem[];
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
  ad_action?: string;
  link_text?: string;
  story_cta?: ReelsMediaFeedResponseStoryCtaItem[];
  imported_taken_at?: number;
  story_polls?: ReelsMediaFeedResponseStoryPollsItem[];
  story_questions?: ReelsMediaFeedResponseStoryQuestionsItem[];
  story_quizs?: ReelsMediaFeedResponseStoryQuizsItem[];
  story_sliders?: ReelsMediaFeedResponseStorySlidersItem[];
  story_countdowns?: ReelsMediaFeedResponseStoryCountdownsItem[];
}
export interface ReelsMediaFeedResponseStoryPollsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  poll_sticker: ReelsMediaFeedResponsePollSticker;
}
export interface ReelsMediaFeedResponsePollSticker {
  id: string;
  poll_id: number;
  question: string;
  tallies: ReelsMediaFeedResponseTalliesItem[];
  promotion_tallies: null;
  viewer_can_vote: boolean;
  viewer_vote?: number;
  is_shared_result: boolean;
  finished: boolean;
}
export interface ReelsMediaFeedResponseTalliesItem {
  text: string;
  font_size?: number;
  count: number;
}
export interface ReelsMediaFeedResponseStoryQuestionsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  question_sticker: ReelsMediaFeedResponseQuestionSticker;
}
export interface ReelsMediaFeedResponseQuestionSticker {
  question_type: string;
  question_id: number;
  question: string;
  media_id: number;
  text_color: string;
  background_color: string;
  viewer_can_interact: boolean;
  profile_pic_url: string;
}
export interface ReelsMediaFeedResponseStoryQuizsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  quiz_sticker: ReelsMediaFeedResponseQuizSticker;
}
export interface ReelsMediaFeedResponseQuizSticker {
  id: string;
  quiz_id: number;
  question: string;
  tallies: ReelsMediaFeedResponseTalliesItem[];
  correct_answer: number;
  viewer_can_answer: boolean;
  finished: boolean;
  text_color: string;
  start_background_color: string;
  end_background_color: string;
  viewer_answer?: number;
}
export interface ReelsMediaFeedResponseStorySlidersItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  slider_sticker: ReelsMediaFeedResponseSliderSticker;
}
export interface ReelsMediaFeedResponseSliderSticker {
  slider_id: number;
  question: string;
  emoji: string;
  text_color: string;
  background_color: string;
  viewer_can_vote: boolean;
  slider_vote_average: null;
  slider_vote_count: number;
  viewer_vote?: number;
}

export interface ReelsMediaFeedResponseStoryCountdownsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  countdown_sticker: ReelsMediaFeedResponseCountdown_sticker;
}
export interface ReelsMediaFeedResponseCountdown_sticker {
  countdown_id: number;
  end_ts: number;
  text: string;
  text_color: string;
  start_background_color: string;
  end_background_color: string;
  digit_color: string;
  digit_card_color: string;
  following_enabled: boolean;
  is_owner: boolean;
  attribution: null;
  viewer_is_following: boolean;
}
export interface ReelsMediaFeedResponseImageVersions2 {
  candidates: ReelsMediaFeedResponseCandidatesItem[];
}
export interface ReelsMediaFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface ReelsMediaFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface ReelsMediaFeedResponseReelMentionsItem {
  x: string;
  y: string;
  z: number;
  width: string;
  height: string;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  user: ReelsMediaFeedResponseUser;
}
export interface ReelsMediaFeedResponseStoryCtaItem {
  links: ReelsMediaFeedResponseLinksItem[];
}
export interface ReelsMediaFeedResponseLinksItem {
  linkType: number;
  webUri: string;
  androidClass: string;
  package: string;
  deeplinkUri: string;
  callToActionTitle: string;
  redirectUri: null;
  leadGenFormId: string;
  igUserId: string;
  appInstallObjectiveInvalidationBehavior: null;
}
