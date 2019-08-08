export interface HighlightsRepositoryHighlightsTrayResponseRootObject {
    tray: HighlightsRepositoryHighlightsTrayResponseTrayItem[];
    show_empty_state: boolean;
    tv_channel: HighlightsRepositoryHighlightsTrayResponseTv_channel;
    status: string;
}
export interface HighlightsRepositoryHighlightsTrayResponseTrayItem {
    id: string;
    latest_reel_media: number;
    seen: null;
    can_reply: boolean;
    can_reshare: null;
    reel_type: string;
    cover_media: HighlightsRepositoryHighlightsTrayResponseCover_media;
    user: HighlightsRepositoryHighlightsTrayResponseUser;
    ranked_position: number;
    title: string;
    seen_ranked_position: number;
    prefetch_count: number;
    media_count: number;
    has_pride_media: boolean;
}
export interface HighlightsRepositoryHighlightsTrayResponseCover_media {
    cropped_image_version: HighlightsRepositoryHighlightsTrayResponseCropped_image_version;
    crop_rect: (number | string)[] | number[];
    media_id: string;
}
export interface HighlightsRepositoryHighlightsTrayResponseCropped_image_version {
    width: number;
    height: number;
    url: string;
    estimated_scans_sizes: number[];
}
export interface HighlightsRepositoryHighlightsTrayResponseUser {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
    friendship_status?: HighlightsRepositoryHighlightsTrayResponseFriendship_status;
    has_anonymous_profile_picture?: boolean;
    is_unpublished?: boolean;
    is_favorite?: boolean;
    latest_reel_media?: null;
}
export interface HighlightsRepositoryHighlightsTrayResponseTv_channel {
    id: string;
    items: HighlightsRepositoryHighlightsTrayResponseItemsItem[];
    more_available: boolean;
    seen_state: HighlightsRepositoryHighlightsTrayResponseSeen_state;
    title: string;
    type: string;
    max_id: null;
    user_dict: HighlightsRepositoryHighlightsTrayResponseUser_dict;
}
export interface HighlightsRepositoryHighlightsTrayResponseItemsItem {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: number;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    image_versions2: HighlightsRepositoryHighlightsTrayResponseImage_versions2;
    original_width: number;
    original_height: number;
    is_dash_eligible: number;
    video_dash_manifest: string;
    video_codec: string;
    number_of_qualities: number;
    video_versions: HighlightsRepositoryHighlightsTrayResponseVideoVersionsItem[];
    has_audio: boolean;
    video_duration: number;
    view_count: number;
    user: HighlightsRepositoryHighlightsTrayResponseUser;
    can_viewer_reshare: boolean;
    caption_is_edited: boolean;
    comment_likes_enabled: boolean;
    comment_threading_enabled: boolean;
    has_more_comments: boolean;
    next_max_id: string;
    max_num_visible_preview_comments: number;
    preview_comments: HighlightsRepositoryHighlightsTrayResponsePreviewCommentsItem[];
    can_view_more_preview_comments: boolean;
    comment_count: number;
    title: string;
    product_type: string;
    nearly_complete_copyright_match: boolean;
    media_cropping_info: HighlightsRepositoryHighlightsTrayResponseMedia_cropping_info;
    thumbnails: HighlightsRepositoryHighlightsTrayResponseThumbnails;
    like_count: number;
    has_liked: boolean;
    photo_of_you: boolean;
    caption: HighlightsRepositoryHighlightsTrayResponseCaption;
    can_viewer_save: boolean;
    organic_tracking_token: string;
}
export interface HighlightsRepositoryHighlightsTrayResponseImage_versions2 {
    candidates: HighlightsRepositoryHighlightsTrayResponseCandidatesItem[];
}
export interface HighlightsRepositoryHighlightsTrayResponseCandidatesItem {
    width: number;
    height: number;
    url: string;
    estimated_scans_sizes: number[];
}
export interface HighlightsRepositoryHighlightsTrayResponseVideoVersionsItem {
    type: number;
    width: number;
    height: number;
    url: string;
    id: string;
}
export interface HighlightsRepositoryHighlightsTrayResponseFriendship_status {
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
export interface HighlightsRepositoryHighlightsTrayResponsePreviewCommentsItem {
    pk: string;
    user_id: number;
    text: string;
    type: number;
    created_at: number;
    created_at_utc: number;
    content_type: string;
    status: string;
    bit_flags: number;
    user: HighlightsRepositoryHighlightsTrayResponseUser;
    did_report_as_spam: boolean;
    share_enabled: boolean;
    media_id: string;
    has_translation?: boolean;
}
export interface HighlightsRepositoryHighlightsTrayResponseMedia_cropping_info {
}
export interface HighlightsRepositoryHighlightsTrayResponseThumbnails {
    video_length: number;
    thumbnail_width: number;
    thumbnail_height: number;
    thumbnail_duration: string;
    sprite_urls: string[];
    thumbnails_per_row: number;
    max_thumbnails_per_sprite: number;
    sprite_width: number;
    sprite_height: number;
    rendered_width: number;
}
export interface HighlightsRepositoryHighlightsTrayResponseCaption {
    pk: string;
    user_id: number;
    text: string;
    type: number;
    created_at: number;
    created_at_utc: number;
    content_type: string;
    status: string;
    bit_flags: number;
    user: HighlightsRepositoryHighlightsTrayResponseUser;
    did_report_as_spam: boolean;
    share_enabled: boolean;
    media_id: string;
    has_translation: boolean;
}
export interface HighlightsRepositoryHighlightsTrayResponseSeen_state {
}
export interface HighlightsRepositoryHighlightsTrayResponseUser_dict {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
    has_anonymous_profile_picture: boolean;
    media_count: number;
    geo_media_count: number;
    follower_count: number;
    following_count: number;
    following_tag_count: number;
    biography: string;
    biography_with_entities: HighlightsRepositoryHighlightsTrayResponseBiography_with_entities;
    external_url: string;
    external_lynx_url: string;
    has_biography_translation: boolean;
    latest_reel_media: number;
    friendship_status: HighlightsRepositoryHighlightsTrayResponseFriendship_status;
    total_igtv_videos: number;
}
export interface HighlightsRepositoryHighlightsTrayResponseBiography_with_entities {
    raw_text: string;
    entities: any[];
}
