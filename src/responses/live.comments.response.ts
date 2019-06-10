export interface LiveCommentsResponseRootObject {
    comment_likes_enabled: boolean;
    comments: LiveCommentsResponseCommentsItem[];
    comment_count: number;
    caption: null;
    caption_is_edited: boolean;
    has_more_comments: boolean;
    has_more_headload_comments: boolean;
    media_header_display: string;
    can_view_more_preview_comments: boolean;
    live_seconds_per_comment: number;
    is_first_fetch: string;
    system_comments: LiveCommentsResponseSystemCommentsItem[];
    comment_muted: number;
    status: string;
}
export interface LiveCommentsResponseCommentsItem {
    pk: string;
    user_id: number;
    text: string;
    type: number;
    created_at: number;
    created_at_utc: number;
    content_type: string;
    status: string;
    bit_flags: number;
    user: LiveCommentsResponseUser;
    did_report_as_spam: boolean;
    share_enabled: boolean;
    inline_composer_display_condition: string;
}
export interface LiveCommentsResponseUser {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
    live_with_eligibility?: string;
}
export interface LiveCommentsResponseSystemCommentsItem {
    pk: string;
    created_at: number;
    user: LiveCommentsResponseUser;
    text: string;
    user_count: number;
}
