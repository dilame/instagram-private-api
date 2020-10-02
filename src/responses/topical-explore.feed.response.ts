export interface TopicalExploreFeedResponseRootObject {
    sectional_items: TopicalExploreFeedResponseSectionalItemsItem[];
    rank_token: string;
    auto_load_more_enabled: boolean;
    more_available: boolean;
    next_max_id: string;
    max_id: string;
    status: string;
}
export interface TopicalExploreFeedResponseSectionalItemsItem {
    layout_type: string;
    layout_content: TopicalExploreFeedResponseLayout_content;
    feed_type: string;
    explore_item_info: TopicalExploreFeedResponseExplore_item_info;
}
export interface TopicalExploreFeedResponseLayout_content {
    two_by_two_item?: TopicalExploreFeedResponseTwo_by_two_item;
    fill_items?: TopicalExploreFeedResponseFillItemsItem[];
    medias?: TopicalExploreFeedResponseMediasItem[];
}
export interface TopicalExploreFeedResponseTwo_by_two_item {
    channel?: TopicalExploreFeedResponseChannel;
    igtv?: TopicalExploreFeedResponseIgtv;
}
export interface TopicalExploreFeedResponseChannel {
    title: string;
    channel_id: string;
    channel_type: string;
    header: string;
    context: string;
    media: TopicalExploreFeedResponseMedia;
    media_count: number;
}
export interface TopicalExploreFeedResponseMedia {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: number | string;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    location?: TopicalExploreFeedResponseLocation;
    lat?: number;
    lng?: number;
    user: TopicalExploreFeedResponseUser;
    can_viewer_reshare: boolean;
    caption_is_edited: boolean;
    comment_likes_enabled: boolean;
    comment_threading_enabled: boolean;
    has_more_comments: boolean;
    max_num_visible_preview_comments: number;
    preview_comments: any[];
    can_view_more_preview_comments: boolean;
    comment_count: number;
    image_versions2?: TopicalExploreFeedResponseImage_versions2;
    original_width?: number;
    original_height?: number;
    like_count?: number;
    has_liked?: boolean;
    top_likers?: string[];
    photo_of_you: boolean;
    can_see_insights_as_brand: boolean;
    is_dash_eligible?: number;
    video_dash_manifest?: string;
    video_codec?: string;
    number_of_qualities?: number;
    video_versions?: TopicalExploreFeedResponseVideoVersionsItem[];
    has_audio?: boolean;
    video_duration?: number;
    view_count?: number;
    caption: TopicalExploreFeedResponseCaption;
    can_viewer_save: boolean;
    organic_tracking_token: string;
    sharing_friction_info: TopicalExploreFeedResponseSharing_friction_info;
    is_in_profile_grid: boolean;
    profile_grid_control_enabled: boolean;
    is_shop_the_look_eligible: boolean;
    deleted_reason: number;
    explore_hide_comments?: boolean;
    algorithm?: string;
    connection_id?: string;
    mezql_token: string;
    explore_context?: string;
    explore_source_token?: string;
    explore: TopicalExploreFeedResponseExplore;
    impression_token?: string;
    product_tags?: TopicalExploreFeedResponseProduct_tags;
    usertags?: TopicalExploreFeedResponseUsertags;
    carousel_media_count?: number;
    carousel_media?: TopicalExploreFeedResponseCarouselMediaItem[];
    title?: string;
    product_type?: string;
    nearly_complete_copyright_match?: boolean;
    media_cropping_info?: TopicalExploreFeedResponseMedia_cropping_info;
    thumbnails?: TopicalExploreFeedResponseThumbnails;
    is_post_live?: boolean;
}
export interface TopicalExploreFeedResponseLocation {
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
export interface TopicalExploreFeedResponseUser {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id?: string;
    friendship_status?: TopicalExploreFeedResponseFriendship_status;
    is_verified: boolean;
    has_anonymous_profile_picture?: boolean;
    is_unpublished?: boolean;
    is_favorite?: boolean;
    latest_reel_media?: number;
    account_badges?: any[];
    show_shoppable_feed?: boolean;
    shoppable_posts_count?: number;
    can_be_reported_as_fraud?: boolean;
    merchant_checkout_style?: string;
    seller_shoppable_feed_type?: string;
}
export interface TopicalExploreFeedResponseFriendship_status {
    following: boolean;
    outgoing_request: boolean;
    is_bestie: boolean;
    is_restricted: boolean;
}
export interface TopicalExploreFeedResponseImage_versions2 {
    candidates: TopicalExploreFeedResponseCandidatesItem[];
    additional_candidates?: TopicalExploreFeedResponseAdditional_candidates;
}
export interface TopicalExploreFeedResponseCandidatesItem {
    width: number;
    height: number;
    url: string;
    scans_profile?: string;
    estimated_scans_sizes?: number[];
}
export interface TopicalExploreFeedResponseVideoVersionsItem {
    type: number;
    width: number;
    height: number;
    url: string;
    id: string;
}
export interface TopicalExploreFeedResponseCaption {
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
    user: TopicalExploreFeedResponseUser;
    is_covered: boolean;
    media_id: string;
    private_reply_status: number;
    has_translation?: boolean;
}
export interface TopicalExploreFeedResponseSharing_friction_info {
    should_have_sharing_friction: boolean;
    bloks_app_url: null;
}
export interface TopicalExploreFeedResponseExplore {
    explanation: string;
    actor_id?: number;
    source_token?: string;
}
export interface TopicalExploreFeedResponseFillItemsItem {
    media: TopicalExploreFeedResponseMedia;
}
export interface TopicalExploreFeedResponseProduct_tags {
    'in': TopicalExploreFeedResponseInItem[];
}
export interface TopicalExploreFeedResponseInItem {
    product?: TopicalExploreFeedResponseProduct;
    position: string[] | number[];
    user?: TopicalExploreFeedResponseUser;
    start_time_in_video_in_sec?: null;
    duration_in_video_in_sec?: null;
}
export interface TopicalExploreFeedResponseProduct {
    name: string;
    price: string;
    current_price: string;
    full_price: string;
    product_id: string;
    merchant: TopicalExploreFeedResponseMerchant;
    compound_product_id: string;
    description: string;
    retailer_id: string;
    has_viewer_saved: boolean;
    main_image: TopicalExploreFeedResponseMain_image;
    thumbnail_image: TopicalExploreFeedResponseThumbnail_image;
    review_status: string;
    external_url: string;
    checkout_style: string;
    can_share_to_story: boolean;
    can_see_insights_for_viewer: boolean;
    full_price_stripped: string;
    current_price_stripped: string;
    launch_information?: TopicalExploreFeedResponseLaunch_information;
    rich_text_description?: TopicalExploreFeedResponseRichTextDescriptionItem[];
}
export interface TopicalExploreFeedResponseMerchant {
    pk: number;
    username: string;
    profile_pic_url: string;
}
export interface TopicalExploreFeedResponseMain_image {
    image_versions2: TopicalExploreFeedResponseImage_versions2;
    preview: string;
}
export interface TopicalExploreFeedResponseThumbnail_image {
    image_versions2: TopicalExploreFeedResponseImage_versions2;
    preview: string;
}
export interface TopicalExploreFeedResponseLaunch_information {
    launch_date: number;
    has_launched: boolean;
    is_ig_exclusive: boolean;
    drops_campaign_id: string;
}
export interface TopicalExploreFeedResponseRichTextDescriptionItem {
    block_type: string;
    depth: number;
    text_with_entities: TopicalExploreFeedResponseText_with_entities;
}
export interface TopicalExploreFeedResponseText_with_entities {
    text: string;
    inline_style_ranges: TopicalExploreFeedResponseInlineStyleRangesItem[];
}
export interface TopicalExploreFeedResponseInlineStyleRangesItem {
    inline_style: number;
    length: number;
    offset: number;
}
export interface TopicalExploreFeedResponseExplore_item_info {
    num_columns: number;
    total_num_columns: number;
    aspect_ratio: number;
    autoplay: boolean;
}
export interface TopicalExploreFeedResponseMediasItem {
    media: TopicalExploreFeedResponseMedia;
}
export interface TopicalExploreFeedResponseUsertags {
    'in': TopicalExploreFeedResponseInItem[];
}
export interface TopicalExploreFeedResponseCarouselMediaItem {
    id: string;
    media_type: number;
    image_versions2: TopicalExploreFeedResponseImage_versions2;
    original_width: number;
    original_height: number;
    pk: string;
    carousel_parent_id: string;
    can_see_insights_as_brand: boolean;
    sharing_friction_info: TopicalExploreFeedResponseSharing_friction_info;
    usertags?: TopicalExploreFeedResponseUsertags;
    product_tags?: TopicalExploreFeedResponseProduct_tags;
}
export interface TopicalExploreFeedResponseIgtv {
    media: TopicalExploreFeedResponseMedia;
    tv_guide: TopicalExploreFeedResponseTv_guide;
    display_content_metadata: boolean;
}
export interface TopicalExploreFeedResponseMedia_cropping_info {
}
export interface TopicalExploreFeedResponseThumbnails {
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
export interface TopicalExploreFeedResponseAdditional_candidates {
    igtv_first_frame: TopicalExploreFeedResponseIgtv_first_frame;
    first_frame: TopicalExploreFeedResponseFirst_frame;
}
export interface TopicalExploreFeedResponseIgtv_first_frame {
    width: number;
    height: number;
    url: string;
    scans_profile: string;
    estimated_scans_sizes: number[];
}
export interface TopicalExploreFeedResponseFirst_frame {
    width: number;
    height: number;
    url: string;
    scans_profile: string;
    estimated_scans_sizes: number[];
}
export interface TopicalExploreFeedResponseTv_guide {
    channels: TopicalExploreFeedResponseChannelsItem[];
}
export interface TopicalExploreFeedResponseChannelsItem {
    id: string;
    items: TopicalExploreFeedResponseItemsItem[];
    more_available: boolean;
    seen_state: TopicalExploreFeedResponseSeen_state;
    title: string;
    type: string;
    max_id: string;
    user_dict: null;
    description: null;
    cover_photo_url: null;
    approx_total_videos: null;
    destination_client_configs: null;
}
export interface TopicalExploreFeedResponseItemsItem {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: number | string;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    user: TopicalExploreFeedResponseUser;
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
    media_cropping_info: TopicalExploreFeedResponseMedia_cropping_info;
    thumbnails: TopicalExploreFeedResponseThumbnails;
    is_post_live: boolean;
    image_versions2: TopicalExploreFeedResponseImage_versions2;
    original_width: number;
    original_height: number;
    photo_of_you: boolean;
    can_see_insights_as_brand: boolean;
    is_dash_eligible: number;
    video_dash_manifest: string;
    video_codec: string;
    number_of_qualities: number;
    video_versions: TopicalExploreFeedResponseVideoVersionsItem[];
    has_audio: boolean;
    video_duration: number;
    view_count: number;
    caption: TopicalExploreFeedResponseCaption;
    can_viewer_save: boolean;
    organic_tracking_token: string;
    sharing_friction_info: TopicalExploreFeedResponseSharing_friction_info;
    is_in_profile_grid: boolean;
    profile_grid_control_enabled: boolean;
    is_shop_the_look_eligible: boolean;
    deleted_reason: number;
    explore: TopicalExploreFeedResponseExplore;
    mezql_token: string;
}
export interface TopicalExploreFeedResponseSeen_state {
}
