export interface IgtvChannelFeedResponseRootObject {
    id: string;
    items: IgtvChannelFeedResponseItemsItem[];
    more_available: boolean;
    seen_state: IgtvChannelFeedResponseSeen_state;
    title: string;
    type: string;
    max_id: string;
    user_dict: IgtvChannelFeedResponseUser_dict;
    description: null;
    cover_photo_url: null;
    approx_total_videos: null;
    status: string;
}
export interface IgtvChannelFeedResponseItemsItem {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: number | string;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    image_versions2: IgtvChannelFeedResponseImage_versions2;
    original_width: number;
    original_height: number;
    is_dash_eligible: number;
    video_dash_manifest: string;
    video_codec: string;
    number_of_qualities: number;
    video_versions: IgtvChannelFeedResponseVideoVersionsItem[];
    has_audio: boolean;
    video_duration: number;
    view_count: number;
    user: IgtvChannelFeedResponseUser;
    can_viewer_reshare: boolean;
    caption_is_edited: boolean;
    comment_likes_enabled: boolean;
    comment_threading_enabled: boolean;
    has_more_comments: boolean;
    next_max_id: string;
    max_num_visible_preview_comments: number;
    preview_comments: IgtvChannelFeedResponsePreviewCommentsItem[];
    can_view_more_preview_comments: boolean;
    comment_count: number;
    title: string;
    product_type: string;
    nearly_complete_copyright_match: boolean;
    media_cropping_info: IgtvChannelFeedResponseMedia_cropping_info;
    thumbnails: IgtvChannelFeedResponseThumbnails;
    like_count: number;
    has_liked: boolean;
    photo_of_you: boolean;
    caption: IgtvChannelFeedResponseCaption;
    can_viewer_save: boolean;
    organic_tracking_token: string;
}
export interface IgtvChannelFeedResponseImage_versions2 {
    candidates: IgtvChannelFeedResponseCandidatesItem[];
    additional_candidates: IgtvChannelFeedResponseAdditional_candidates;
}
export interface IgtvChannelFeedResponseCandidatesItem {
    width: number;
    height: number;
    url: string;
}
export interface IgtvChannelFeedResponseAdditional_candidates {
    igtv_first_frame: IgtvChannelFeedResponseIgtv_first_frame;
}
export interface IgtvChannelFeedResponseIgtv_first_frame {
    width: number;
    height: number;
    url: string;
}
export interface IgtvChannelFeedResponseVideoVersionsItem {
    type: number;
    width: number;
    height: number;
    url: string;
    id: string;
}
export interface IgtvChannelFeedResponseUser {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id?: string;
    friendship_status?: IgtvChannelFeedResponseFriendship_status;
    is_verified: boolean;
    has_anonymous_profile_picture?: boolean;
    is_unpublished?: boolean;
    is_favorite?: boolean;
}
export interface IgtvChannelFeedResponseFriendship_status {
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
export interface IgtvChannelFeedResponsePreviewCommentsItem {
    pk: string;
    user_id: number;
    text: string;
    type: number;
    created_at: number;
    created_at_utc: number;
    content_type: string;
    status: string;
    bit_flags: number;
    user: IgtvChannelFeedResponseUser;
    did_report_as_spam: boolean;
    share_enabled: boolean;
    media_id: string;
    has_translation?: boolean;
    parent_comment_id?: string;
}
export interface IgtvChannelFeedResponseMedia_cropping_info {
}
export interface IgtvChannelFeedResponseThumbnails {
    video_length: number;
    thumbnail_width: number;
    thumbnail_height: number;
    thumbnail_duration: string | number;
    sprite_urls: string[];
    thumbnails_per_row: number;
    max_thumbnails_per_sprite: number;
    sprite_width: number;
    sprite_height: number;
    rendered_width: number;
}
export interface IgtvChannelFeedResponseCaption {
    pk: string;
    user_id: number;
    text: string;
    type: number;
    created_at: number;
    created_at_utc: number;
    content_type: string;
    status: string;
    bit_flags: number;
    user: IgtvChannelFeedResponseUser;
    did_report_as_spam: boolean;
    share_enabled: boolean;
    media_id: string;
    has_translation: boolean;
}
export interface IgtvChannelFeedResponseSeen_state {
}
export interface IgtvChannelFeedResponseUser_dict {
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
    biography_with_entities: IgtvChannelFeedResponseBiography_with_entities;
    external_url: string;
    external_lynx_url: string;
    has_biography_translation: boolean;
    total_igtv_videos: number;
    has_igtv_series: boolean;
    friendship_status: IgtvChannelFeedResponseFriendship_status;
}
export interface IgtvChannelFeedResponseBiography_with_entities {
    raw_text: string;
    entities: any[];
}
