export interface ListReelMediaViewerFeedResponseRootObject {
  users: ListReelMediaViewerFeedResponseUsersItem[];
  next_max_id: string | null;
  user_count: number;
  total_viewer_count: number;
  updated_media: ListReelMediaViewerFeedResponseUpdated_media;
  status: string;
}
export interface ListReelMediaViewerFeedResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status?: ListReelMediaViewerFeedResponseFriendship_status;
  is_verified: boolean;
  latest_reel_media?: number;
}
export interface ListReelMediaViewerFeedResponseFriendship_status {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface ListReelMediaViewerFeedResponseUpdated_media {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: ListReelMediaViewerFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: ListReelMediaViewerFeedResponseUser;
  caption_is_edited: boolean;
  caption_position: number;
  is_reel_media: boolean;
  timezone_offset: number;
  photo_of_you: boolean;
  caption: null;
  fb_user_tags: ListReelMediaViewerFeedResponseFb_user_tags;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
  can_reshare: boolean;
  can_reply: boolean;
  is_pride_media: boolean;
  story_hashtags: ListReelMediaViewerFeedResponseStoryHashtagsItem[];
  creative_config: ListReelMediaViewerFeedResponseCreative_config;
  reel_mentions: ListReelMediaViewerFeedResponseReelMentionsItem[];
  story_locations: ListReelMediaViewerFeedResponseStoryLocationsItem[];
  story_is_saved_to_archive: boolean;
  story_fundraisers: ListReelMediaViewerFeedResponseStoryFundraisersItem[];
  story_fundraiser_donation_infos: ListReelMediaViewerFeedResponseStoryFundraiserDonationInfosItem[];
  story_chats: ListReelMediaViewerFeedResponseStoryChatsItem[];
  story_chat_request_infos: ListReelMediaViewerFeedResponseStoryChatRequestInfosItem[];
  viewers: ListReelMediaViewerFeedResponseViewersItem[];
  viewer_count: number;
  viewer_cursor: null;
  total_viewer_count: number;
  multi_author_reel_names: any[];
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
}
export interface ListReelMediaViewerFeedResponseImage_versions2 {
  candidates: ListReelMediaViewerFeedResponseCandidatesItem[];
}
export interface ListReelMediaViewerFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface ListReelMediaViewerFeedResponseUser {
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
  biography_with_entities?: ListReelMediaViewerFeedResponseBiography_with_entities;
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
export interface ListReelMediaViewerFeedResponseFb_user_tags {
  in: any[];
}
export interface ListReelMediaViewerFeedResponseStoryHashtagsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: string;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  hashtag: ListReelMediaViewerFeedResponseHashtag;
}
export interface ListReelMediaViewerFeedResponseHashtag {
  name: string;
  id: string;
}
export interface ListReelMediaViewerFeedResponseCreative_config {
  capture_type: string;
  camera_facing: string;
  should_render_try_it_on: boolean;
}
export interface ListReelMediaViewerFeedResponseReelMentionsItem {
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
  user: ListReelMediaViewerFeedResponseUser;
}
export interface ListReelMediaViewerFeedResponseStoryLocationsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: string;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  location: ListReelMediaViewerFeedResponseLocation;
}
export interface ListReelMediaViewerFeedResponseLocation {
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
export interface ListReelMediaViewerFeedResponseStoryFundraisersItem {
  x: number;
  y: string;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  fundraiser_sticker: ListReelMediaViewerFeedResponseFundraiser_sticker;
}
export interface ListReelMediaViewerFeedResponseFundraiser_sticker {
  pk: string;
  title: string;
  title_color: string;
  subtitle_color: string;
  start_background_color: string;
  end_background_color: string;
  button_text_color: string;
  source_name: string;
  original_subtitle_height: number;
  user: ListReelMediaViewerFeedResponseUser;
  consumption_sheet_config: ListReelMediaViewerFeedResponseConsumption_sheet_config;
}
export interface ListReelMediaViewerFeedResponseBiography_with_entities {
  raw_text: string;
  entities: any[];
}
export interface ListReelMediaViewerFeedResponseConsumption_sheet_config {
  can_viewer_donate: boolean;
  has_viewer_donated: boolean;
  you_donated_message: null;
  currency: string;
  donation_url: string;
  privacy_disclaimer: string;
  donation_disabled_message: null;
  donation_amount_config: ListReelMediaViewerFeedResponseDonation_amount_config;
}
export interface ListReelMediaViewerFeedResponseDonation_amount_config {
  donation_amount_selector_values: number[];
  default_selected_donation_value: number;
  minimum_donation_amount: number;
  maximum_donation_amount: number;
  user_currency: string;
}
export interface ListReelMediaViewerFeedResponseStoryFundraiserDonationInfosItem {
  fundraiser_id: string;
  charity: ListReelMediaViewerFeedResponseCharity;
  amount_raised: string;
  donations: ListReelMediaViewerFeedResponseDonations;
}
export interface ListReelMediaViewerFeedResponseCharity {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}
export interface ListReelMediaViewerFeedResponseDonations {
  donations: any[];
  max_id: null;
  more_available: boolean;
}
export interface ListReelMediaViewerFeedResponseStoryChatsItem {
  x: string;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  chat_sticker: ListReelMediaViewerFeedResponseChat_sticker;
}
export interface ListReelMediaViewerFeedResponseChat_sticker {
  story_chat_id: string;
  text: string;
  start_background_color: string;
  end_background_color: string;
  has_started_chat: boolean;
  thread_id: string;
  status: string;
}
export interface ListReelMediaViewerFeedResponseStoryChatRequestInfosItem {
  users: ListReelMediaViewerFeedResponseUsersItem[];
  requester_usernames: ListReelMediaViewerFeedResponseRequester_usernames;
  cursor: string;
  total_thread_participants: number;
  total_participant_requests: number;
}
export interface ListReelMediaViewerFeedResponseRequester_usernames {}
export interface ListReelMediaViewerFeedResponseViewersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}
