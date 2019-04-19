export interface StoryRepositoryResponseRootObject {
  reels: StoryRepositoryResponseReels;
  status: string;
}
export interface StoryRepositoryResponseReels {
  [pk: string]: StoryRepositoryResponse;
}
export interface StoryRepositoryResponse {
  id: number;
  latest_reel_media: number;
  expiring_at: number;
  seen: number;
  can_reply: boolean;
  can_reshare: boolean;
  reel_type: string;
  user: StoryRepositoryResponseUser;
  items: StoryRepositoryResponseItem[];
  prefetch_count: number;
  media_count: number;
}
export interface StoryRepositoryResponseUser {
  pk: number;
  username?: string;
  full_name?: string;
  is_private?: boolean;
  profile_pic_url?: string;
  profile_pic_id?: string;
  friendship_status?: StoryRepositoryResponseFriendshipStatus;
  is_verified?: boolean;
}
export interface StoryRepositoryResponseFriendshipStatus {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
export interface StoryRepositoryResponseItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: StoryRepositoryResponseImageVersions2;
  original_width: number;
  original_height: number;
  caption_position: number;
  is_reel_media: boolean;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  video_versions: StoryRepositoryResponseVideoVersionsItem[];
  has_audio: boolean;
  video_duration: number;
  user: StoryRepositoryResponseUser;
  caption_is_edited: boolean;
  photo_of_you: boolean;
  caption: null;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
  can_reshare: boolean;
  can_reply: boolean;
  reel_mentions?: StoryRepositoryResponseReelMentionsItem[];
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
  ad_action?: string;
  link_text?: string;
  story_cta?: StoryRepositoryResponseStoryCtaItem[];
  imported_taken_at?: number;
}
export interface StoryRepositoryResponseImageVersions2 {
  candidates: StoryRepositoryResponseCandidatesItem[];
}
export interface StoryRepositoryResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface StoryRepositoryResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface StoryRepositoryResponseReelMentionsItem {
  x: string;
  y: string;
  z: number;
  width: string;
  height: string;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  user: StoryRepositoryResponseUser;
}
export interface StoryRepositoryResponseStoryCtaItem {
  links: StoryRepositoryResponseLinksItem[];
}
export interface StoryRepositoryResponseLinksItem {
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
