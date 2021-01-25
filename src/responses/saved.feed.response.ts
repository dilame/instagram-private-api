export interface SavedFeedResponseRootObject {
  items: SavedFeedResponseItemsItem[];
  num_results: number;
  more_available: boolean;
  auto_load_more_enabled: boolean;
  status: string;
  next_max_id: string;
}
export interface SavedFeedResponseItemsItem {
  media: SavedFeedResponseMedia;
}
export interface SavedFeedResponseMedia {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string | number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2?: SavedFeedResponseImage_versions2;
  original_width?: number;
  original_height?: number;
  user: SavedFeedResponseUser;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  is_external_share_disabled?: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  next_max_id: string;
  max_num_visible_preview_comments: number;
  preview_comments: SavedFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  like_count: number;
  has_liked: boolean;
  photo_of_you: boolean;
  product_tags?: SavedFeedResponseProduct_tags;
  can_see_insights_as_brand?: boolean;
  caption: SavedFeedResponseCaption;
  can_viewer_save: boolean;
  has_viewer_saved: boolean;
  saved_collection_ids: any[];
  organic_tracking_token: string;
  usertags?: SavedFeedResponseUsertags;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: SavedFeedResponseVideoVersionsItem[];
  has_audio?: boolean;
  video_duration?: number;
  view_count?: number;
  carousel_media_count?: number;
  carousel_media?: SavedFeedResponseCarouselMediaItem[];
  location?: SavedFeedResponseLocation;
}
export interface SavedFeedResponseImage_versions2 {
  candidates: SavedFeedResponseCandidatesItem[];
}
export interface SavedFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes?: number[];
}
export interface SavedFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  friendship_status?: SavedFeedResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture?: boolean;
  is_unpublished?: boolean;
  is_favorite?: boolean;
  show_shoppable_feed?: boolean;
  shoppable_posts_count?: number;
  can_be_reported_as_fraud?: boolean;
  latest_reel_media?: number;
  profile_pic_id?: string;
}
export interface SavedFeedResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface SavedFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: SavedFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_liked_comment: boolean;
  comment_like_count: number;
  has_translation?: boolean;
  parent_comment_id?: string;
}
export interface SavedFeedResponseProduct_tags {
  in: SavedFeedResponseInItem[];
}
export interface SavedFeedResponseInItem {
  product?: SavedFeedResponseProduct;
  position: string[] | number[];
  user?: SavedFeedResponseUser;
  start_time_in_video_in_sec?: null;
  duration_in_video_in_sec?: null;
}
export interface SavedFeedResponseProduct {
  name: string;
  price: string;
  current_price: string;
  full_price: string;
  product_id: string;
  merchant: SavedFeedResponseMerchant;
  description: string;
  retailer_id: string;
  has_viewer_saved: boolean;
  main_image: SavedFeedResponseMain_image;
  thumbnail_image: SavedFeedResponseThumbnail_image;
  review_status: string;
  external_url: string;
  checkout_style: string;
  can_share_to_story: boolean;
  full_price_stripped: string;
  current_price_stripped: string;
  variant_values?: SavedFeedResponseVariantValuesItem[];
}
export interface SavedFeedResponseMerchant {
  pk: number;
  username: string;
  profile_pic_url: string;
}
export interface SavedFeedResponseMain_image {
  image_versions2: SavedFeedResponseImage_versions2;
  preview: null;
}
export interface SavedFeedResponseThumbnail_image {
  image_versions2: SavedFeedResponseImage_versions2;
  preview: null;
}
export interface SavedFeedResponseVariantValuesItem {
  id: string;
  value: string;
  name: string;
  is_preselected: boolean;
  visual_style: string;
}
export interface SavedFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: SavedFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
}
export interface SavedFeedResponseUsertags {
  in: SavedFeedResponseInItem[];
}
export interface SavedFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface SavedFeedResponseCarouselMediaItem {
  id: string;
  media_type: number;
  image_versions2: SavedFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  pk: string;
  carousel_parent_id: string;
  usertags: SavedFeedResponseUsertags;
  video_versions?: SavedFeedResponseVideoVersionsItem[];
  video_duration?: number;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
}
export interface SavedFeedResponseLocation {
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