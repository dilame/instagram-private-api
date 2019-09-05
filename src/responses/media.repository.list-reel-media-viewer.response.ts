export interface MediaRepositoryListReelMediaViewerResponseRootObject {
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
    story_is_saved_to_archive: boolean;
    story_quizs: MediaRepositoryListReelMediaViewerResponseStoryQuizsItem[];
    story_quiz_participant_infos: MediaRepositoryListReelMediaViewerResponseStoryQuizParticipantInfosItem[];
    viewers: MediaRepositoryListReelMediaViewerResponseViewersItem[];
    viewer_count: number;
    viewer_cursor: null;
    total_viewer_count: number;
    multi_author_reel_names: any[];
    supports_reel_reactions: boolean;
    show_one_tap_fb_share_tooltip: boolean;
    has_shared_to_fb: number;
    creative_config: MediaRepositoryListReelMediaViewerResponseCreative_config;
    story_questions: MediaRepositoryListReelMediaViewerResponseStoryQuestionsItem[];
    story_question_responder_infos: MediaRepositoryListReelMediaViewerResponseStoryQuestionResponderInfosItem[];
    story_polls: MediaRepositoryListReelMediaViewerResponseStoryPollsItem[];
    story_poll_voter_infos: MediaRepositoryListReelMediaViewerResponseStoryPollVoterInfosItem[];
    story_countdowns: MediaRepositoryListReelMediaViewerResponseStoryCountdownsItem[];
    story_hashtags: MediaRepositoryListReelMediaViewerResponseStoryHashtagsItem[];
    reel_mentions: MediaRepositoryListReelMediaViewerResponseReelMentionsItem[];
    story_locations: MediaRepositoryListReelMediaViewerResponseStoryLocationsItem[];
    story_fundraisers: MediaRepositoryListReelMediaViewerResponseStoryFundraisersItem[];
    story_fundraiser_donation_infos: MediaRepositoryListReelMediaViewerResponseStoryFundraiserDonationInfosItem[];
    story_chats: MediaRepositoryListReelMediaViewerResponseStoryChatsItem[];
    story_chat_request_infos: MediaRepositoryListReelMediaViewerResponseStoryChatRequestInfosItem[];
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
    friendship_status?: MediaRepositoryListReelMediaViewerResponseFriendship_status;
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
    'in': any[];
}
export interface MediaRepositoryListReelMediaViewerResponseStoryQuizsItem {
    x: string;
    y: number;
    z: number;
    width: string;
    height: number;
    rotation: number;
    is_pinned: number;
    is_hidden: number;
    is_sticker: number;
    quiz_sticker: MediaRepositoryListReelMediaViewerResponseQuiz_sticker;
}
export interface MediaRepositoryListReelMediaViewerResponseQuiz_sticker {
    id: string;
    quiz_id: string;
    question: string;
    tallies: MediaRepositoryListReelMediaViewerResponseTalliesItem[];
    correct_answer: number;
    viewer_can_answer: boolean;
    finished: boolean;
    text_color: string;
    start_background_color: string;
    end_background_color: string;
}
export interface MediaRepositoryListReelMediaViewerResponseTalliesItem {
    text: string;
    count: number;
    font_size?: number;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryQuizParticipantInfosItem {
    quiz_id: string;
    participants: MediaRepositoryListReelMediaViewerResponseParticipantsItem[];
    max_id: null;
    more_available: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseParticipantsItem {
    user: MediaRepositoryListReelMediaViewerResponseUser;
    answer: number;
    ts: number;
}
export interface MediaRepositoryListReelMediaViewerResponseViewersItem {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseCreative_config {
    capture_type: string;
    camera_facing: string;
    should_render_try_it_on: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryQuestionsItem {
    x: string;
    y: number;
    z: number;
    width: string;
    height: number;
    rotation: number;
    is_pinned: number;
    is_hidden: number;
    is_sticker: number;
    question_sticker: MediaRepositoryListReelMediaViewerResponseQuestion_sticker;
}
export interface MediaRepositoryListReelMediaViewerResponseQuestion_sticker {
    question_type: string;
    question_id: string;
    question: string;
    media_id: string;
    text_color: string;
    background_color: string;
    viewer_can_interact: boolean;
    profile_pic_url: string;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryQuestionResponderInfosItem {
    question_id: string;
    question: string;
    question_type: string;
    background_color: string;
    text_color: string;
    responders: MediaRepositoryListReelMediaViewerResponseRespondersItem[];
    max_id: null;
    more_available: boolean;
    question_response_count: number;
    unanswered_response_count: number;
    latest_question_response_time: number;
}
export interface MediaRepositoryListReelMediaViewerResponseRespondersItem {
    response: string;
    has_shared_response: boolean;
    id: string;
    user: MediaRepositoryListReelMediaViewerResponseUser;
    ts: number;
    music_response: MediaRepositoryListReelMediaViewerResponseMusic_response;
}
export interface MediaRepositoryListReelMediaViewerResponseMusic_response {
    music_asset_info: MediaRepositoryListReelMediaViewerResponseMusic_asset_info;
    music_consumption_info: MediaRepositoryListReelMediaViewerResponseMusic_consumption_info;
}
export interface MediaRepositoryListReelMediaViewerResponseMusic_asset_info {
    id: string;
    title: string;
    subtitle: string;
    display_artist: string;
    cover_artwork_uri: string;
    cover_artwork_thumbnail_uri: string;
    progressive_download_url: string;
    highlight_start_times_in_ms: number[];
    is_explicit: boolean;
    dash_manifest: string;
    has_lyrics: boolean;
    audio_asset_id: string;
}
export interface MediaRepositoryListReelMediaViewerResponseMusic_consumption_info {
    ig_artist: MediaRepositoryListReelMediaViewerResponseIg_artist;
    placeholder_profile_pic_url: string;
    should_mute_audio: boolean;
    should_mute_audio_reason: string;
    overlap_duration_in_ms: null;
    audio_asset_start_time_in_ms: null;
}
export interface MediaRepositoryListReelMediaViewerResponseIg_artist {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryPollsItem {
    x: string;
    y: number;
    z: number;
    width: string;
    height: number;
    rotation: number;
    is_pinned: number;
    is_hidden: number;
    is_sticker: number;
    poll_sticker: MediaRepositoryListReelMediaViewerResponsePoll_sticker;
}
export interface MediaRepositoryListReelMediaViewerResponsePoll_sticker {
    id: string;
    poll_id: string;
    question: string;
    tallies: MediaRepositoryListReelMediaViewerResponseTalliesItem[];
    promotion_tallies: null;
    viewer_can_vote: boolean;
    is_shared_result: boolean;
    finished: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryPollVoterInfosItem {
    poll_id: string;
    voters: MediaRepositoryListReelMediaViewerResponseVotersItem[];
    max_id: null;
    more_available: boolean;
    latest_poll_vote_time: number;
}
export interface MediaRepositoryListReelMediaViewerResponseVotersItem {
    user: MediaRepositoryListReelMediaViewerResponseUser;
    vote: number;
    ts: number;
}
export interface MediaRepositoryListReelMediaViewerResponseFriendship_status {
    following: boolean;
    is_private: boolean;
    incoming_request: boolean;
    outgoing_request: boolean;
    is_bestie: boolean;
    is_restricted: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryCountdownsItem {
    x: string;
    y: number;
    z: number;
    width: string;
    height: number;
    rotation: number;
    is_pinned: number;
    is_hidden: number;
    is_sticker: number;
    countdown_sticker: MediaRepositoryListReelMediaViewerResponseCountdown_sticker;
}
export interface MediaRepositoryListReelMediaViewerResponseCountdown_sticker {
    countdown_id: string;
    end_ts: number;
    text: string;
    text_color: string;
    start_background_color: string;
    end_background_color: string;
    digit_color: string;
    digit_card_color: string;
    following_enabled: boolean;
    is_owner: boolean;
    attribution: null;
    viewer_is_following: boolean;
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
export interface MediaRepositoryListReelMediaViewerResponseUsersItem {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseRequester_usernames {
}
