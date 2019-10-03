export interface FbsearchRepositoryExploreResponseRootObject {
    rank_token: string;
    auto_load_more_enabled: boolean;
    more_available: boolean;
    next_max_id: string;
    max_id: string;
    sectional_items: FbsearchRepositoryExploreResponseSectionalItemsItem[];
    status: string;
}
export interface FbsearchRepositoryExploreResponseSectionalItemsItem {
    layout_type: string;
    layout_content: FbsearchRepositoryExploreResponseLayout_content;
    feed_type: string;
    explore_item_info: FbsearchRepositoryExploreResponseExplore_item_info;
}
export interface FbsearchRepositoryExploreResponseLayout_content {
    two_by_two_item?: FbsearchRepositoryExploreResponseTwo_by_two_item;
    fill_items?: FbsearchRepositoryExploreResponseFillItemsItem[];
    medias?: FbsearchRepositoryExploreResponseMediasItem[];
}
export interface FbsearchRepositoryExploreResponseTwo_by_two_item {
    channel?: FbsearchRepositoryExploreResponseChannel;
    igtv?: FbsearchRepositoryExploreResponseIgtv;
}
export interface FbsearchRepositoryExploreResponseChannel {
    title: string;
    channel_id: string;
    channel_type: string;
    header: string;
    context: string;
    media: FbsearchRepositoryExploreResponseMedia;
    media_count: number;
}
export interface FbsearchRepositoryExploreResponseMedia {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: number | string;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    image_versions2?: FbsearchRepositoryExploreResponseImage_versions2;
    original_width?: number;
    original_height?: number;
    is_dash_eligible?: number;
    video_dash_manifest?: string;
    video_codec?: string;
    number_of_qualities?: number;
    video_versions?: FbsearchRepositoryExploreResponseVideoVersionsItem[];
    has_audio?: boolean;
    video_duration?: number;
    view_count?: number;
    user: FbsearchRepositoryExploreResponseUser;
    can_viewer_reshare: boolean;
    caption_is_edited: boolean;
    comment_likes_enabled: boolean;
    comment_threading_enabled: boolean;
    has_more_comments: boolean;
    max_num_visible_preview_comments: number;
    preview_comments: any[];
    can_view_more_preview_comments: boolean;
    comment_count: number;
    like_count?: number;
    has_liked?: boolean;
    top_likers?: any[];
    photo_of_you: boolean;
    caption: FbsearchRepositoryExploreResponseCaption;
    can_viewer_save: boolean;
    organic_tracking_token: string;
    explore_hide_comments?: boolean;
    algorithm?: string;
    connection_id?: string;
    mezql_token: string;
    explore_context?: string;
    explore_source_token?: string;
    explore?: FbsearchRepositoryExploreResponseExplore;
    impression_token?: string;
    location?: FbsearchRepositoryExploreResponseLocation;
    carousel_media_count?: number;
    carousel_media?: FbsearchRepositoryExploreResponseCarouselMediaItem[];
    can_see_insights_as_brand?: boolean;
    usertags?: FbsearchRepositoryExploreResponseUsertags;
    lat?: number;
    lng?: number;
    title?: string;
    product_type?: string;
    nearly_complete_copyright_match?: boolean;
    media_cropping_info?: FbsearchRepositoryExploreResponseMedia_cropping_info;
    thumbnails?: FbsearchRepositoryExploreResponseThumbnails;
    likers?: FbsearchRepositoryExploreResponseLikersItem[];
}
export interface FbsearchRepositoryExploreResponseImage_versions2 {
    candidates: FbsearchRepositoryExploreResponseCandidatesItem[];
    additional_candidates?: FbsearchRepositoryExploreResponseAdditional_candidates;
}
export interface FbsearchRepositoryExploreResponseCandidatesItem {
    width: number;
    height: number;
    url: string;
    estimated_scans_sizes: number[];
}
export interface FbsearchRepositoryExploreResponseVideoVersionsItem {
    type: number;
    width: number;
    height: number;
    url: string;
    id: string;
}
export interface FbsearchRepositoryExploreResponseUser {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id?: string;
    friendship_status?: FbsearchRepositoryExploreResponseFriendship_status;
    is_verified: boolean;
    has_anonymous_profile_picture?: boolean;
    is_unpublished?: boolean;
    is_favorite?: boolean;
    latest_reel_media?: number;
}
export interface FbsearchRepositoryExploreResponseFriendship_status {
    following: boolean;
    outgoing_request: boolean;
    is_bestie: boolean;
    is_restricted: boolean;
}
export interface FbsearchRepositoryExploreResponseCaption {
    pk: string;
    user_id: number;
    text: string;
    type: number;
    created_at: number;
    created_at_utc: number;
    content_type: string;
    status: string;
    bit_flags: number;
    user: FbsearchRepositoryExploreResponseUser;
    did_report_as_spam: boolean;
    share_enabled: boolean;
    media_id: string;
    has_translation?: boolean;
}
export interface FbsearchRepositoryExploreResponseExplore {
    explanation: string;
    actor_id: number;
    source_token: string;
}
export interface FbsearchRepositoryExploreResponseFillItemsItem {
    media: FbsearchRepositoryExploreResponseMedia;
}
export interface FbsearchRepositoryExploreResponseLocation {
    pk: number | string;
    name: string;
    address: string;
    city: string;
    short_name: string;
    external_source: string;
    facebook_places_id: number | string;
    lng?: number;
    lat?: number;
}
export interface FbsearchRepositoryExploreResponseExplore_item_info {
    num_columns: number;
    total_num_columns: number;
    aspect_ratio: number;
    autoplay: boolean;
}
export interface FbsearchRepositoryExploreResponseMediasItem {
    media: FbsearchRepositoryExploreResponseMedia;
}
export interface FbsearchRepositoryExploreResponseCarouselMediaItem {
    id: string;
    media_type: number;
    image_versions2: FbsearchRepositoryExploreResponseImage_versions2;
    original_width: number;
    original_height: number;
    pk: string;
    carousel_parent_id: string;
    usertags?: FbsearchRepositoryExploreResponseUsertags;
}
export interface FbsearchRepositoryExploreResponseUsertags {
    'in': FbsearchRepositoryExploreResponseInItem[];
}
export interface FbsearchRepositoryExploreResponseInItem {
    user: FbsearchRepositoryExploreResponseUser;
    position: number[] | string[];
    start_time_in_video_in_sec: null;
    duration_in_video_in_sec: null;
}
export interface FbsearchRepositoryExploreResponseIgtv {
    media: FbsearchRepositoryExploreResponseMedia;
    tv_guide: FbsearchRepositoryExploreResponseTv_guide;
    display_content_metadata: boolean;
}
export interface FbsearchRepositoryExploreResponseAdditional_candidates {
    igtv_first_frame: FbsearchRepositoryExploreResponseIgtv_first_frame;
}
export interface FbsearchRepositoryExploreResponseIgtv_first_frame {
    width: number;
    height: number;
    url: string;
}
export interface FbsearchRepositoryExploreResponseMedia_cropping_info {
}
export interface FbsearchRepositoryExploreResponseThumbnails {
    video_length?: number;
    thumbnail_width?: number;
    thumbnail_height?: number;
    thumbnail_duration?: string;
    sprite_urls?: string[];
    thumbnails_per_row?: number;
    max_thumbnails_per_sprite?: number;
    sprite_width?: number;
    sprite_height?: number;
    rendered_width?: number;
}
export interface FbsearchRepositoryExploreResponseTv_guide {
    channels: FbsearchRepositoryExploreResponseChannelsItem[];
}
export interface FbsearchRepositoryExploreResponseChannelsItem {
    id: string;
    items: FbsearchRepositoryExploreResponseItemsItem[];
    more_available: boolean;
    seen_state: FbsearchRepositoryExploreResponseSeen_state;
    title: string;
    type: string;
    max_id: string | null;
    user_dict: null;
    description: null;
    cover_photo_url: null;
    approx_total_videos: null;
}
export interface FbsearchRepositoryExploreResponseItemsItem {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: number | string;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    image_versions2: FbsearchRepositoryExploreResponseImage_versions2;
    original_width: number;
    original_height: number;
    is_dash_eligible: number;
    video_dash_manifest: string;
    video_codec: string;
    number_of_qualities: number;
    video_versions: FbsearchRepositoryExploreResponseVideoVersionsItem[];
    video_duration: number;
    view_count: number;
    user: FbsearchRepositoryExploreResponseUser;
    can_viewer_reshare: boolean;
    caption_is_edited: boolean;
    comment_likes_enabled: boolean;
    comment_threading_enabled: boolean;
    has_more_comments: boolean;
    max_num_visible_preview_comments: number;
    preview_comments: any[];
    can_view_more_preview_comments: boolean;
    comment_count: number;
    title: string;
    product_type: string;
    nearly_complete_copyright_match: boolean;
    media_cropping_info: FbsearchRepositoryExploreResponseMedia_cropping_info;
    thumbnails: FbsearchRepositoryExploreResponseThumbnails;
    photo_of_you: boolean;
    caption: FbsearchRepositoryExploreResponseCaption;
    can_viewer_save: boolean;
    organic_tracking_token: string;
    mezql_token: string;
    has_audio?: boolean;
}
export interface FbsearchRepositoryExploreResponseSeen_state {
}
export interface FbsearchRepositoryExploreResponseLikersItem {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id?: string;
    is_verified: boolean;
}