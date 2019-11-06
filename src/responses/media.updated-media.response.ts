export interface MediaUpdatedMediaResponseRootObject {
  updated_media: MediaUpdatedMediaResponseUpdated_media;
  status: string;
}
export interface MediaUpdatedMediaResponseUpdated_media {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: MediaUpdatedMediaResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: MediaUpdatedMediaResponseUser;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  caption_position: number;
  is_reel_media: boolean;
  like_count: number;
  has_liked: boolean;
  likers: any[];
  photo_of_you: boolean;
  caption: MediaUpdatedMediaResponseCaption;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
  can_reshare: boolean;
  can_reply: boolean;
  is_pride_media: boolean;
  story_polls: MediaUpdatedMediaResponseStoryPollsItem[];
  creative_config: MediaUpdatedMediaResponseCreative_config;
  supports_reel_reactions: boolean;
  can_send_custom_emojis: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
}
export interface MediaUpdatedMediaResponseImage_versions2 {
  candidates: MediaUpdatedMediaResponseCandidatesItem[];
}
export interface MediaUpdatedMediaResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface MediaUpdatedMediaResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: MediaUpdatedMediaResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
}
export interface MediaUpdatedMediaResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface MediaUpdatedMediaResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: MediaUpdatedMediaResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
}
export interface MediaUpdatedMediaResponseStoryPollsItem {
  x: number;
  y: number;
  z: number;
  width: string;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  poll_sticker: MediaUpdatedMediaResponsePoll_sticker;
}
export interface MediaUpdatedMediaResponsePoll_sticker {
  id: string;
  poll_id: string;
  question: string;
  tallies: MediaUpdatedMediaResponseTalliesItem[];
  promotion_tallies: null;
  viewer_can_vote: boolean;
  is_shared_result: boolean;
  finished: boolean;
  viewer_vote: number;
}
export interface MediaUpdatedMediaResponseTalliesItem {
  text: string;
  font_size: number;
  count: number;
}
export interface MediaUpdatedMediaResponseCreative_config {
  capture_type: string;
  camera_facing: string;
  should_render_try_it_on: boolean;
}
