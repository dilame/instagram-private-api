export interface LocationRepositoryStoryResponseRootObject {
    story: LocationRepositoryStoryResponseStory;
    status: string;
}
export interface LocationRepositoryStoryResponseStory {
    id: string;
    latest_reel_media: number;
    expiring_at: number;
    seen: number;
    can_reply: boolean;
    can_reshare: boolean;
    reel_type: string;
    owner: LocationRepositoryStoryResponseOwner;
    location: LocationRepositoryStoryResponseLocation;
    items: LocationRepositoryStoryResponseItemsItem[];
    prefetch_count: number;
    unique_integer_reel_id: string;
    has_pride_media: boolean;
}
export interface LocationRepositoryStoryResponseOwner {
    type: string;
    pk: number;
    name: string;
    profile_pic_url: string;
    profile_pic_username: string;
    short_name: string;
    lng: string;
    lat: number;
    location_dict: LocationRepositoryStoryResponseLocation_dict;
}
export interface LocationRepositoryStoryResponseLocation_dict {
    pk: number;
    name: string;
    address: string;
    city: string;
    short_name: string;
    lng: string;
    lat: number;
    external_source: string;
    facebook_places_id: number;
}
export interface LocationRepositoryStoryResponseLocation {
    type?: string;
    pk: number;
    name: string;
    profile_pic_url?: string;
    profile_pic_username?: string;
    short_name: string;
    lng: string | number;
    lat: number;
    location_dict?: LocationRepositoryStoryResponseLocation_dict;
    address?: string;
    city?: string;
    external_source?: string;
    facebook_places_id?: number;
}
export interface LocationRepositoryStoryResponseItemsItem {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: string;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    image_versions2: LocationRepositoryStoryResponseImage_versions2;
    original_width: number;
    original_height: number;
    user: LocationRepositoryStoryResponseUser;
    caption_is_edited: boolean;
    caption_position: number;
    is_reel_media: boolean;
    photo_of_you: boolean;
    caption: null;
    can_viewer_save: boolean;
    organic_tracking_token: string;
    expiring_at: number;
    imported_taken_at: number;
    can_reshare: boolean;
    can_reply: boolean;
    is_pride_media: boolean;
    story_locations: LocationRepositoryStoryResponseStoryLocationsItem[];
    supports_reel_reactions: boolean;
    show_one_tap_fb_share_tooltip: boolean;
    has_shared_to_fb: number;
    is_dash_eligible?: number;
    video_dash_manifest?: string;
    video_codec?: string;
    number_of_qualities?: number;
    video_versions?: LocationRepositoryStoryResponseVideoVersionsItem[];
    has_audio?: boolean;
    video_duration?: number;
    story_hashtags?: LocationRepositoryStoryResponseStoryHashtagsItem[];
    reel_mentions?: LocationRepositoryStoryResponseReelMentionsItem[];
}
export interface LocationRepositoryStoryResponseImage_versions2 {
    candidates: LocationRepositoryStoryResponseCandidatesItem[];
}
export interface LocationRepositoryStoryResponseCandidatesItem {
    width: number;
    height: number;
    url: string;
    estimated_scans_sizes?: number[];
}
export interface LocationRepositoryStoryResponseUser {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
    has_anonymous_profile_picture?: boolean;
    is_unpublished?: boolean;
    is_favorite?: boolean;
}
export interface LocationRepositoryStoryResponseStoryLocationsItem {
    x: string | number;
    y: string;
    z: number;
    width: string | number;
    height: string;
    rotation: number | string;
    is_pinned: number;
    is_hidden: number;
    is_sticker: number;
    location: LocationRepositoryStoryResponseLocation;
}
export interface LocationRepositoryStoryResponseVideoVersionsItem {
    type: number;
    width: number;
    height: number;
    url: string;
    id: string;
}
export interface LocationRepositoryStoryResponseStoryHashtagsItem {
    x: string;
    y: string;
    z: number;
    width: string;
    height: string;
    rotation: number;
    is_pinned: number;
    is_hidden: number;
    is_sticker: number;
    hashtag: LocationRepositoryStoryResponseHashtag;
}
export interface LocationRepositoryStoryResponseHashtag {
    name: string;
    id: string;
}
export interface LocationRepositoryStoryResponseReelMentionsItem {
    x: string;
    y: string;
    z: number;
    width: string;
    height: string;
    rotation: number;
    is_pinned: number;
    is_hidden: number;
    display_type: string;
    is_sticker: number;
    user: LocationRepositoryStoryResponseUser;
}
