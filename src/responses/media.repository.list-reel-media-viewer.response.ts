export interface MediaRepositoryListReelMediaViewerResponseRootObject {
  users: MediaRepositoryListReelMediaViewerResponseUsersItem[];
  next_max_id: null;
  user_count: number;
  total_viewer_count: number;
  updated_media: MediaRepositoryListReelMediaViewerResponseUpdated_media;
  status: string;
}
export interface MediaRepositoryListReelMediaViewerResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status?: MediaRepositoryListReelMediaViewerResponseFriendship_status;
  is_verified: boolean;
  latest_reel_media?: number;
}
export interface MediaRepositoryListReelMediaViewerResponseFriendship_status {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseUpdated_media {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: MediaRepositoryListReelMediaViewerResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: MediaRepositoryListReelMediaViewerResponseUser;
  caption_is_edited: boolean;
  caption_position: number;
  is_reel_media: boolean;
  timezone_offset: number;
  photo_of_you: boolean;
  caption: null;
  fb_user_tags: MediaRepositoryListReelMediaViewerResponseFb_user_tags;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
  can_reshare: boolean;
  can_reply: boolean;
  is_pride_media: boolean;
  story_hashtags: MediaRepositoryListReelMediaViewerResponseStoryHashtagsItem[];
  creative_config: MediaRepositoryListReelMediaViewerResponseCreative_config;
  reel_mentions: MediaRepositoryListReelMediaViewerResponseReelMentionsItem[];
  story_locations: MediaRepositoryListReelMediaViewerResponseStoryLocationsItem[];
  story_is_saved_to_archive: boolean;
  story_fundraisers: MediaRepositoryListReelMediaViewerResponseStoryFundraisersItem[];
  story_fundraiser_donation_infos: MediaRepositoryListReelMediaViewerResponseStoryFundraiserDonationInfosItem[];
  story_chats: MediaRepositoryListReelMediaViewerResponseStoryChatsItem[];
  story_chat_request_infos: MediaRepositoryListReelMediaViewerResponseStoryChatRequestInfosItem[];
  viewers: MediaRepositoryListReelMediaViewerResponseViewersItem[];
  viewer_count: number;
  viewer_cursor: null;
  total_viewer_count: number;
  multi_author_reel_names: any[];
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
}
export interface MediaRepositoryListReelMediaViewerResponseImage_versions2 {
  candidates: MediaRepositoryListReelMediaViewerResponseCandidatesItem[];
}
export interface MediaRepositoryListReelMediaViewerResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface MediaRepositoryListReelMediaViewerResponseUser {
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
  media_count?: number;
  follower_count?: number;
  following_count?: number;
  following_tag_count?: number;
  biography?: string;
  biography_with_entities?: MediaRepositoryListReelMediaViewerResponseBiography_with_entities;
  external_url?: string;
  external_lynx_url?: string;
  has_biography_translation?: boolean;
  mutual_followers_count?: number;
  direct_messaging?: string;
  fb_page_call_to_action_id?: string;
  address_street?: string;
  business_contact_method?: string;
  category?: string;
  city_id?: number;
  city_name?: string;
  contact_phone_number?: string;
  is_call_to_action_enabled?: boolean;
  latitude?: number;
  longitude?: number;
  public_email?: string;
  public_phone_country_code?: string;
  public_phone_number?: string;
  zip?: string;
  instagram_location_id?: string;
  is_business?: boolean;
  account_type?: number;
  can_hide_category?: boolean;
  can_hide_public_contacts?: boolean;
  should_show_category?: boolean;
  should_show_public_contacts?: boolean;
  should_show_tabbed_inbox?: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseFb_user_tags {
  in: any[];
}
export interface MediaRepositoryListReelMediaViewerResponseStoryHashtagsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: string;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  hashtag: MediaRepositoryListReelMediaViewerResponseHashtag;
}
export interface MediaRepositoryListReelMediaViewerResponseHashtag {
  name: string;
  id: string;
}
export interface MediaRepositoryListReelMediaViewerResponseCreative_config {
  capture_type: string;
  camera_facing: string;
  should_render_try_it_on: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseReelMentionsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  display_type: string;
  is_sticker: number;
  user: MediaRepositoryListReelMediaViewerResponseUser;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryLocationsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: string;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  location: MediaRepositoryListReelMediaViewerResponseLocation;
}
export interface MediaRepositoryListReelMediaViewerResponseLocation {
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
export interface MediaRepositoryListReelMediaViewerResponseStoryFundraisersItem {
  x: number;
  y: string;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  fundraiser_sticker: MediaRepositoryListReelMediaViewerResponseFundraiser_sticker;
}
export interface MediaRepositoryListReelMediaViewerResponseFundraiser_sticker {
  pk: string;
  title: string;
  title_color: string;
  subtitle_color: string;
  start_background_color: string;
  end_background_color: string;
  button_text_color: string;
  source_name: string;
  original_subtitle_height: number;
  user: MediaRepositoryListReelMediaViewerResponseUser;
  consumption_sheet_config: MediaRepositoryListReelMediaViewerResponseConsumption_sheet_config;
}
export interface MediaRepositoryListReelMediaViewerResponseBiography_with_entities {
  raw_text: string;
  entities: any[];
}
export interface MediaRepositoryListReelMediaViewerResponseConsumption_sheet_config {
  can_viewer_donate: boolean;
  has_viewer_donated: boolean;
  you_donated_message: null;
  currency: string;
  donation_url: string;
  privacy_disclaimer: string;
  donation_disabled_message: null;
  donation_amount_config: MediaRepositoryListReelMediaViewerResponseDonation_amount_config;
}
export interface MediaRepositoryListReelMediaViewerResponseDonation_amount_config {
  donation_amount_selector_values: number[];
  default_selected_donation_value: number;
  minimum_donation_amount: number;
  maximum_donation_amount: number;
  user_currency: string;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryFundraiserDonationInfosItem {
  fundraiser_id: string;
  charity: MediaRepositoryListReelMediaViewerResponseCharity;
  amount_raised: string;
  donations: MediaRepositoryListReelMediaViewerResponseDonations;
}
export interface MediaRepositoryListReelMediaViewerResponseCharity {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseDonations {
  donations: any[];
  max_id: null;
  more_available: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryChatsItem {
  x: string;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  chat_sticker: MediaRepositoryListReelMediaViewerResponseChat_sticker;
}
export interface MediaRepositoryListReelMediaViewerResponseChat_sticker {
  story_chat_id: string;
  text: string;
  start_background_color: string;
  end_background_color: string;
  has_started_chat: boolean;
  thread_id: string;
  status: string;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryChatRequestInfosItem {
  users: MediaRepositoryListReelMediaViewerResponseUsersItem[];
  requester_usernames: MediaRepositoryListReelMediaViewerResponseRequester_usernames;
  cursor: string;
  total_thread_participants: number;
  total_participant_requests: number;
}
export interface MediaRepositoryListReelMediaViewerResponseRequester_usernames {}
export interface MediaRepositoryListReelMediaViewerResponseViewersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}
