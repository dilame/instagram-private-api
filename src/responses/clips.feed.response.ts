export interface ClipsFeedResponseRootObject {
  id: string;
  items: ClipsFeedResponseItemsItem[];
  paging_info: {
    more_available: boolean;
    max_id: string;
  };
  status: string;
}

export interface ClipsFeedResponseItemsItem {
  media: {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: number | string;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    is_unified_video: boolean;
    should_request_ads: boolean;
    caption_is_edited: boolean;
    like_and_view_counts_disabled: boolean;
    commerciality_status: string;
    is_paid_partnership: boolean;
    is_visual_reply_commenter_notice_enabled: boolean;
    has_delayed_metadata: boolean;
    comment_likes_enabled: boolean;
    comment_threading_enabled: boolean;
    has_more_comments: boolean;
    next_max_id: string;
    max_num_visible_preview_comments: number;
    preview_comments: ClipsFeedResponsePreviewCommentsItem[];
    can_view_more_preview_comments: boolean;
    comment_count: number;
    hide_view_all_comment_entrypoint: boolean;
    image_versions2: ClipsFeedResponseImage_versions2;
    original_width: number;
    original_height: number;
    user: ClipsFeedResponseUser_dict;
    can_viewer_reshare: boolean;
    like_count: number;
    photo_of_you: boolean;
    is_organic_product_tagging_eligible: boolean;
    can_see_insights_as_brand: boolean;
    video_subtitles_confidence: string;
    is_dash_eligible: number;
    video_dash_manifest: string;
    video_codec: string;
    number_of_qualities: number;
    video_versions: ClipsFeedResponseVideoVersionsItem[];
    has_audio: boolean;
    video_duration: number;
    view_count: number;
    play_count: number;
    caption: ClipsFeedResponseCaption;
    comment_inform_treatment: {
      should_have_inform_treatment: boolean;
      text: string;
      url: string | null;
      action_type: string | null;
    };
    sharing_friction_info: {
      should_have_sharing_friction: boolean;
      bloks_app_url: string | null;
      sharing_friction_payload: string | null;
    };
    can_viewer_save: boolean;
    is_in_profile_grid: boolean;
    profile_grid_control_enabled: boolean;
    organic_tracking_token: string;
    has_shared_to_fb: boolean;
    product_type: string;
    deleted_reason: number;
    integrity_review_decision: string;
    logging_info_token: string;
  };
}

export interface ClipsFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  user: ClipsFeedResponseUser;
  is_covered: boolean;
  media_id: string;
  has_translation: boolean;
  private_reply_status: string;
}

export interface ClipsFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
}

export interface ClipsFeedResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
  followed_by?: boolean;
  blocking?: boolean;
  muting?: boolean;
  is_private?: boolean;
  incoming_request?: boolean;
}

export interface ClipsFeedResponseImage_versions2 {
  candidates: ClipsFeedResponseCandidatesItem[];
  additional_candidates: ClipsFeedResponseAdditional_candidates;
  animated_thumbnail_spritesheet_info_candidates: ClipsFeedResponseAnimated_thumbnail_spritesheet_info_candidates;
}

export interface ClipsFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  scans_profile: string;
}

export interface ClipsFeedResponseAdditional_candidates {
  igtv_first_frame: ClipsFeedResponseIgtv_first_frame;
  first_frame: ClipsFeedResponseFirst_frame;
}

export interface ClipsFeedResponseIgtv_first_frame {
  width: number;
  height: number;
  url: string;
  scans_profile: string;
}

export interface ClipsFeedResponseFirst_frame {
  width: number;
  height: number;
  url: string;
  scans_profile: string;
}

export interface ClipsFeedResponseAnimated_thumbnail_spritesheet_info_candidates {
  default: {
    video_length: number;
    thumbnail_width: number;
    thumbnail_height: number;
    thumbnail_duration: string;
    sprite_urls: string[];
    thumbnails_per_row: number;
    total_thumbnail_num_per_sprite: number;
    max_thumbnails_per_sprite: number;
    sprite_width: number;
    sprite_height: number;
    rendered_width: number;
    file_size_kb: number;
  };
}

export interface ClipsFeedResponseUser_dict {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: ClipsFeedResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  has_highlight_reels: boolean;
  transparency_product_enabled: boolean;
  account_badges: {}[];
  fan_club_info: {
    fan_club_id: string;
    fan_club_name: string;
  };
}

export interface ClipsFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}

export interface ClipsFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: ClipsFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation: boolean;
}
