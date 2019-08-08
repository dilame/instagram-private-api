export interface HighlightsRepositoryCreateReelResponseRootObject {
    reel: HighlightsRepositoryCreateReelResponseReel;
    status: string;
}
export interface HighlightsRepositoryCreateReelResponseReel {
    id: string;
    latest_reel_media: number;
    seen: null;
    can_reply: boolean;
    can_reshare: boolean;
    reel_type: string;
    cover_media: HighlightsRepositoryCreateReelResponseCover_media;
    user: HighlightsRepositoryCreateReelResponseUser;
    items: HighlightsRepositoryCreateReelResponseItemsItem[];
    ranked_position: number;
    title: string;
    created_at: number;
    seen_ranked_position: number;
    prefetch_count: number;
    media_count: number;
    contains_stitched_media_blocked_by_rm: boolean;
    has_pride_media: boolean;
}
export interface HighlightsRepositoryCreateReelResponseCover_media {
    cropped_image_version: HighlightsRepositoryCreateReelResponseCropped_image_version;
    crop_rect: null;
    media_id: string;
    full_image_version: HighlightsRepositoryCreateReelResponseFull_image_version;
}
export interface HighlightsRepositoryCreateReelResponseCropped_image_version {
    width: number;
    height: number;
    url: string;
    estimated_scans_sizes: number[];
}
export interface HighlightsRepositoryCreateReelResponseFull_image_version {
    width: number;
    height: number;
    url: string;
    estimated_scans_sizes: number[];
}
export interface HighlightsRepositoryCreateReelResponseUser {
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
export interface HighlightsRepositoryCreateReelResponseItemsItem {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: number;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    image_versions2: HighlightsRepositoryCreateReelResponseImage_versions2;
    original_width: number;
    original_height: number;
    is_dash_eligible: number;
    video_dash_manifest: string;
    video_codec: string;
    number_of_qualities: number;
    video_versions: HighlightsRepositoryCreateReelResponseVideoVersionsItem[];
    has_audio: boolean;
    video_duration: number;
    user: HighlightsRepositoryCreateReelResponseUser;
    caption_is_edited: boolean;
    caption_position: number;
    is_reel_media: boolean;
    timezone_offset: number;
    boosted_status: string;
    boost_unavailable_reason: string;
    photo_of_you: boolean;
    caption: null;
    can_viewer_save: boolean;
    organic_tracking_token: string;
    imported_taken_at: number;
    can_reshare: boolean;
    can_reply: boolean;
    is_pride_media: boolean;
    story_is_saved_to_archive: boolean;
    highlight_reel_ids: string[];
    viewers: any[];
    viewer_count: number;
    viewer_cursor: null;
    total_viewer_count: number;
    multi_author_reel_names: any[];
    supports_reel_reactions: boolean;
    show_one_tap_fb_share_tooltip: boolean;
    has_shared_to_fb: number;
}
export interface HighlightsRepositoryCreateReelResponseImage_versions2 {
    candidates: HighlightsRepositoryCreateReelResponseCandidatesItem[];
}
export interface HighlightsRepositoryCreateReelResponseCandidatesItem {
    width: number;
    height: number;
    url: string;
    estimated_scans_sizes: number[];
}
export interface HighlightsRepositoryCreateReelResponseVideoVersionsItem {
    type: number;
    width: number;
    height: number;
    url: string;
    id: string;
}
